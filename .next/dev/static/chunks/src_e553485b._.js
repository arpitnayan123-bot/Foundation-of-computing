(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/section-counts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   Section totals per subject — the static twin of the chapter
   menus inside each subject app.

   The reading-progress hook, the ledger, and the landing badges
   all need a section TOTAL without importing a subject app
   chunk (those are 100s of KB of animated notes). The numbers
   here mirror the flat chapter lists in FocApp / AtbApp /
   FaApp / EbhApp / StmApp — 17 + 28 + 16 + 18 + 16 = 95.
   ============================================================ */ __turbopack_context__.s([
    "SECTION_COUNTS",
    ()=>SECTION_COUNTS,
    "TOTAL_SECTIONS",
    ()=>TOTAL_SECTIONS
]);
const SECTION_COUNTS = {
    foc: 17,
    atb: 28,
    fa: 16,
    ebh: 18,
    stm: 16
};
const TOTAL_SECTIONS = Object.values(SECTION_COUNTS).reduce(_c = (n, x)=>n + x, 0);
_c1 = TOTAL_SECTIONS;
var _c, _c1;
__turbopack_context__.k.register(_c, "TOTAL_SECTIONS$Object.values(SECTION_COUNTS).reduce");
__turbopack_context__.k.register(_c1, "TOTAL_SECTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/custom-cards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   CUSTOM CARDS — flashcards the reader forged with AI.

   The Card Forge (components/atlas/CardForge.tsx) sends one
   chapter's notes to /api/generate-cards, the reader accepts
   or rejects the drafts, and the accepted cards land here —
   localStorage "atlas:custom-cards:v1". From this store they
   flow into the SM-2 schedule, Quick Drill, spaced review,
   the ledger and the backup file exactly like bank questions;
   mock exams stay bank-only.

   ids are namespaced "custom:<uuid>" so they can never collide
   with a bank question id, and every card carries the shelf it
   was forged for, so grades and ledger rows land on the right
   shelf's schedule.

   Storage: same contract as the other atlas stores — a strict
   read, a guarded write, and on failure the store silently
   degrades to session-only (an in-memory list keeps the
   current tab working).
   ============================================================ */ __turbopack_context__.s([
    "CUSTOM_CARDS_KEY",
    ()=>CUSTOM_CARDS_KEY,
    "MAX_CUSTOM_CARDS",
    ()=>MAX_CUSTOM_CARDS,
    "addCustomCards",
    ()=>addCustomCards,
    "countCustomCards",
    ()=>countCustomCards,
    "countCustomCardsByShelf",
    ()=>countCustomCardsByShelf,
    "customToQuestion",
    ()=>customToQuestion,
    "listCustomCards",
    ()=>listCustomCards,
    "removeCustomCard",
    ()=>removeCustomCard
]);
const CUSTOM_CARDS_KEY = "atlas:custom-cards:v1";
const MAX_CUSTOM_CARDS = 500;
/* session-only fallback — private mode / quota keeps the tab alive */ let memory = null;
function validCard(c) {
    if (typeof c !== "object" || c === null || Array.isArray(c)) return false;
    const o = c;
    return typeof o.id === "string" && o.id.startsWith("custom:") && typeof o.shelfId === "string" && typeof o.chapterKey === "string" && typeof o.q === "string" && typeof o.a === "string" && typeof o.createdAt === "number" && Number.isFinite(o.createdAt);
}
function listCustomCards() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(CUSTOM_CARDS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.cards)) return [];
        return parsed.cards.filter(validCard);
    } catch  {
        /* localStorage broken — the forge degrades to session-only */ return memory?.cards ?? [];
    }
}
function saveCards(cards) {
    memory = {
        cards
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(CUSTOM_CARDS_KEY, JSON.stringify({
            cards
        }));
    } catch  {
    /* private mode / quota — the forge degrades to session-only */ }
}
function makeId() {
    try {
        if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
            return `custom:${crypto.randomUUID()}`;
        }
    } catch  {
    /* fall through to the manual stamp */ }
    return `custom:${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
function addCustomCards(drafts) {
    const stamped = drafts.filter((d)=>d.q.trim() && d.a.trim()).map((d)=>({
            id: makeId(),
            shelfId: d.shelfId,
            chapterKey: d.chapterKey,
            q: d.q.trim(),
            a: d.a.trim(),
            createdAt: Date.now(),
            source: "ai"
        }));
    if (stamped.length === 0) return [];
    const kept = [
        ...listCustomCards(),
        ...stamped
    ].slice(-MAX_CUSTOM_CARDS);
    saveCards(kept);
    return stamped;
}
function removeCustomCard(id) {
    saveCards(listCustomCards().filter((c)=>c.id !== id));
}
function countCustomCards() {
    return listCustomCards().length;
}
function countCustomCardsByShelf() {
    const out = {};
    for (const c of listCustomCards())out[c.shelfId] = (out[c.shelfId] ?? 0) + 1;
    return out;
}
function customToQuestion(c) {
    return {
        id: c.id,
        type: "short",
        q: c.q,
        answerText: c.a
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/question-lookup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadQuestionIndex",
    ()=>loadQuestionIndex
]);
/* ============================================================
   Question lookup — a lazy id → question-text index over all
   five banks, built on demand.

   The ledger's "trouble spots" panel needs the wording of the
   questions the schedule keeps failing — but the banks are
   ~250KB of exam data that must never ride along with the
   ledger chunk. This module dynamic-imports each bank map the
   first time weak cards exist, memoizes the promise, and
   forgets nothing afterwards (module-lifetime cache).

   AI-forged cards (lib/custom-cards.ts) are scheduled in the
   same SM-2 store, so they join the index too — a weak forged
   card can name its question like any bank card.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/custom-cards.ts [app-client] (ecmascript)");
;
/** bank loaders in the same order as the Promise.all below */ const SUBJECT_ORDER = [
    "foc",
    "atb",
    "fa",
    "ebh",
    "stm"
];
let indexPromise = null;
function loadQuestionIndex() {
    indexPromise ??= Promise.all([
        __turbopack_context__.A("[project]/src/components/notes/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EXAM_BANKS),
        __turbopack_context__.A("[project]/src/components/atb/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.ATB_EXAM_BANKS),
        __turbopack_context__.A("[project]/src/components/fa/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.FA_EXAM_BANKS),
        __turbopack_context__.A("[project]/src/components/ebh/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EBH_EXAM_BANKS),
        __turbopack_context__.A("[project]/src/components/stm/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.STM_EXAM_BANKS)
    ]).then((maps)=>{
        const idx = new Map();
        maps.forEach((map, i)=>{
            const subject = SUBJECT_ORDER[i];
            for (const group of Object.values(map)){
                for (const q of group.questions)idx.set(`${subject}:${q.id}`, q.q);
            }
        });
        for (const c of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCustomCards"])())idx.set(`${c.shelfId}:${c.id}`, c.q);
        return idx;
    });
    return indexPromise;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/achievements.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BADGES",
    ()=>BADGES,
    "computeSnapshot",
    ()=>computeSnapshot,
    "earnedCount",
    ()=>earnedCount
]);
/* ============================================================
   ACHIEVEMENTS — milestones derived, never stored.

   Every badge is a predicate over a snapshot of the existing
   local stores (attempt ledger, SM-2 schedule, chapter
   progress). There is no fourth store to back up, no unlock
   dates to fake, nothing to corrupt: if the underlying work
   is in the stores, the badge is earned — erase the stores
   and the badge honestly goes with them.

   The snapshot is cheap: the ledger and SM-2 stores are tiny,
   chapter progress is a few dozen keys, and section counts
   are plain literals.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-client] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.js [app-client] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/section-counts.ts [app-client] (ecmascript)");
;
;
;
;
;
function computeSnapshot(now = Date.now()) {
    const ledger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLedger"])();
    const answered = ledger.attempts.reduce((n, a)=>n + a.total, 0);
    const correct = ledger.attempts.reduce((n, a)=>n + a.correct, 0);
    const topper = ledger.attempts.some((a)=>a.pct === 100 && a.total >= 8);
    let mastered = 0;
    let scheduled = 0;
    for (const rows of Object.values((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSm2"])())){
        for (const card of Object.values(rows)){
            scheduled += 1;
            if (card.interval >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTERED_INTERVAL"]) mastered += 1;
        }
    }
    const reads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readProgressCounts"])();
    let chaptersRead = 0;
    let shelvesComplete = 0;
    for (const [sid, total] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_COUNTS"])){
        const seen = reads[sid] ?? 0;
        chaptersRead += seen;
        if (seen >= total) shelvesComplete += 1;
    }
    return {
        attempts: ledger.attempts.length,
        answered,
        accuracyPct: answered > 0 ? Math.round(correct / answered * 100) : null,
        topper,
        streakNow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentStreak"])(ledger.days, now),
        streakBest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["longestStreak"])(ledger.days),
        days: ledger.days.length,
        mastered,
        scheduled,
        chaptersRead,
        shelvesComplete
    };
}
const BADGES = [
    {
        id: "first-mark",
        title: "First mark",
        hint: "Finish your first practice window",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"],
        tone: "#f59e0b",
        test: (s)=>s.attempts >= 1
    },
    {
        id: "warmed-up",
        title: "Warmed up",
        hint: "Finish five practice windows",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        tone: "#ea580c",
        test: (s)=>s.attempts >= 5
    },
    {
        id: "week-one",
        title: "Week one",
        hint: "Practice seven days in a row",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        tone: "#f5c889",
        test: (s)=>s.streakBest >= 7
    },
    {
        id: "fortnight",
        title: "Fortnight",
        hint: "Fourteen days without missing",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"],
        tone: "#f43f5e",
        test: (s)=>s.streakBest >= 14
    },
    {
        id: "month-straight",
        title: "Month straight",
        hint: "Thirty days of daily practice",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
        tone: "#8b5cf6",
        test: (s)=>s.streakBest >= 30
    },
    {
        id: "century",
        title: "Century",
        hint: "Face one hundred questions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        tone: "#10b981",
        test: (s)=>s.answered >= 100
    },
    {
        id: "five-hundred",
        title: "Five hundred",
        hint: "Five hundred questions faced",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
        tone: "#059669",
        test: (s)=>s.answered >= 500
    },
    {
        id: "sharpshooter",
        title: "Sharpshooter",
        hint: "Hold 90% accuracy over 40+ answers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"],
        tone: "#8fae5d",
        test: (s)=>s.answered >= 40 && (s.accuracyPct ?? 0) >= 90
    },
    {
        id: "topper",
        title: "Topper",
        hint: "A perfect score on a full window",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
        tone: "#eab308",
        test: (s)=>s.topper
    },
    {
        id: "green-thumb",
        title: "Green thumb",
        hint: "Grow ten cards to mastery",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        tone: "#a9c977",
        test: (s)=>s.mastered >= 10
    },
    {
        id: "bookworm",
        title: "Bookworm",
        hint: "Read every chapter of a shelf",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"],
        tone: "#d9a441",
        test: (s)=>s.shelvesComplete >= 1
    },
    {
        id: "librarian",
        title: "Librarian",
        hint: `Walk all ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_SECTIONS"]} chapters of the atlas`,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"],
        tone: "#f59e0b",
        test: (s)=>s.chaptersRead >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_SECTIONS"]
    }
];
function earnedCount(snap) {
    return BADGES.reduce((n, b)=>n + (b.test(snap) ? 1 : 0), 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/PracticeHeatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PracticeHeatmap",
    ()=>PracticeHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Practice heatmap — the ledger's last 17 weeks, one square per
   day. Greener the more attempts finished that day (the same
   green as mastery), today ringed, future days invisible but
   present so the week columns stay aligned. Data comes straight
   from the attempt ledger — no extra storage.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WEEKS = 17;
function tier(count) {
    if (count <= 0) return "rgba(255,255,255,0.05)";
    if (count === 1) return "rgba(143,174,93,0.30)";
    if (count <= 3) return "rgba(143,174,93,0.55)";
    if (count <= 5) return "rgba(143,174,93,0.80)";
    return "rgba(143,174,93,1)";
}
function PracticeHeatmap({ hits }) {
    _s();
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PracticeHeatmap.useMemo[grid]": ()=>{
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dow = (today.getDay() + 6) % 7; // Mon = 0 … Sun = 6
            const start = new Date(today);
            start.setDate(today.getDate() - dow - (WEEKS - 1) * 7);
            const cells = [];
            for(let i = 0; i < WEEKS * 7; i++){
                const d = new Date(start);
                d.setDate(start.getDate() + i);
                const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayKeyFor"])(d.getTime());
                const hit = hits.get(key);
                cells.push({
                    key,
                    d,
                    a: hit?.a ?? 0,
                    q: hit?.q ?? 0,
                    future: d.getTime() > today.getTime(),
                    today: d.getTime() === today.getTime()
                });
            }
            const active = cells.filter({
                "PracticeHeatmap.useMemo[grid]": (c)=>c.a > 0
            }["PracticeHeatmap.useMemo[grid]"]).length;
            return {
                cells,
                active,
                startMonth: cells[0].d.toLocaleDateString(undefined, {
                    month: "short"
                }),
                endMonth: cells[cells.length - 1].d.toLocaleDateString(undefined, {
                    month: "short"
                })
            };
        }
    }["PracticeHeatmap.useMemo[grid]"], [
        hits
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#8d7b63]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            grid.startMonth,
                            " → ",
                            grid.endMonth
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-[#c9b99f]",
                                children: grid.active
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            "/",
                            WEEKS * 7,
                            " days active"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 grid grid-flow-col grid-rows-7 gap-[3px]",
                role: "img",
                "aria-label": `Practice heatmap: the last ${WEEKS} weeks, ${grid.active} active day${grid.active === 1 ? "" : "s"}`,
                children: grid.cells.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `h-3 w-3 rounded-[3px] ${c.today ? "ring-1 ring-white/30" : ""} ${c.future ? "opacity-0" : ""}`,
                        style: {
                            background: tier(c.a)
                        },
                        title: c.future ? undefined : `${c.d.toLocaleDateString(undefined, {
                            weekday: "short",
                            month: "short",
                            day: "numeric"
                        })} — ${c.a === 0 ? "no attempts" : `${c.a} attempt${c.a === 1 ? "" : "s"} · ${c.q} question${c.q === 1 ? "" : "s"}`}`
                    }, c.key, false, {
                        fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 flex items-center justify-end gap-1.5 font-mono text-[.56rem] uppercase tracking-[.14em] text-[#77685a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "less"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    [
                        0,
                        1,
                        3,
                        5,
                        6
                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-2.5 w-2.5 rounded-[3px]",
                            style: {
                                background: tier(n)
                            }
                        }, n, false, {
                            fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "more"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/PracticeHeatmap.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(PracticeHeatmap, "mPXme/SrJf9iZs06+BfoX3AVatc=");
_c = PracticeHeatmap;
var _c;
__turbopack_context__.k.register(_c, "PracticeHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearExamDraft",
    ()=>clearExamDraft,
    "draftHasWork",
    ()=>draftHasWork,
    "examDraftKey",
    ()=>examDraftKey,
    "flushExamDraft",
    ()=>flushExamDraft,
    "loadExamDraft",
    ()=>loadExamDraft,
    "saveExamDraft",
    ()=>saveExamDraft,
    "useDialogA11y",
    ()=>useDialogA11y
]);
/* ============================================================
   Shared exam-window runtime — used by all five shelf engines
   (FoC / ATB / FA / EBH / STM). Three responsibilities:

   1. DRAFT PERSISTENCE — the exam's answers, question pointer
      and clock are continuously mirrored to sessionStorage.
      A refresh, a browser-back, or an accidental Escape no
      longer destroys typed work; reopening the same window in
      the same tab restores the attempt exactly where it was.

   2. DRIFT-PROOF CLOCK — elapsed time is derived from
      Date.now() against a stored start epoch, never by
      counting setInterval ticks (browsers throttle background
      tabs to ≥1 tick/minute, which silently under-reports).

   3. DIALOG A11Y — focus is moved into the modal on mount,
      Tab is trapped inside while it is open, and focus returns
      to the element that opened it on close.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const DRAFT_PREFIX = "atlas-exam-draft:";
function examDraftKey(subject, group) {
    return `${DRAFT_PREFIX}${subject}:${group}`;
}
function draftHasWork(states) {
    for (const s of Object.values(states)){
        if (!s || typeof s !== "object") continue;
        const st = s;
        if (st.status === "correct" || st.status === "wrong" || st.revealed) return true;
        if (typeof st.typed === "string" && st.typed.trim().length > 0) return true;
    }
    return false;
}
function loadExamDraft(key) {
    try {
        const raw = window.sessionStorage.getItem(key);
        if (!raw) return null;
        const d = JSON.parse(raw);
        if (typeof d?.idx !== "number" || typeof d?.base !== "number" || typeof d?.startedAt !== "number" || !d.states || typeof d.states !== "object") {
            return null;
        }
        return d;
    } catch  {
        return null; // corrupted draft → fresh start
    }
}
let draftTimer = null;
let draftPending = null;
function saveExamDraft(key, draft) {
    draftPending = {
        key,
        draft
    };
    if (draftTimer !== null) return;
    draftTimer = window.setTimeout(()=>{
        draftTimer = null;
        const p = draftPending;
        draftPending = null;
        if (!p) return;
        try {
            window.sessionStorage.setItem(p.key, JSON.stringify(p.draft));
        } catch  {
        /* storage blocked — the exam still works, just without drafts */ }
    }, 400);
}
function flushExamDraft() {
    if (draftTimer !== null) {
        window.clearTimeout(draftTimer);
        draftTimer = null;
    }
    const p = draftPending;
    draftPending = null;
    if (!p) return;
    try {
        window.sessionStorage.setItem(p.key, JSON.stringify(p.draft));
    } catch  {
    /* ignore */ }
}
function clearExamDraft(key) {
    /* a clear must be final: any pending debounced write would silently
     resurrect the draft AFTER the removal (the bell / retake paths
     both clear while an autosave may be in flight) */ draftPending = null;
    if (draftTimer !== null) {
        window.clearTimeout(draftTimer);
        draftTimer = null;
    }
    try {
        window.sessionStorage.removeItem(key);
    } catch  {
    /* ignore */ }
}
/* ---------------- 3. dialog a11y ---------------- */ const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function useDialogA11y(active) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDialogA11y.useEffect": ()=>{
            if (!active) return;
            const el = ref.current;
            if (!el) return;
            const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            el.focus({
                preventScroll: true
            });
            const onKey = {
                "useDialogA11y.useEffect.onKey": (e)=>{
                    if (e.key !== "Tab") return;
                    const focusables = Array.from(el.querySelectorAll(FOCUSABLE)).filter({
                        "useDialogA11y.useEffect.onKey.focusables": (n)=>n.offsetParent !== null || n === document.activeElement
                    }["useDialogA11y.useEffect.onKey.focusables"]);
                    if (focusables.length === 0) return;
                    const first = focusables[0];
                    const last = focusables[focusables.length - 1];
                    const active = document.activeElement;
                    if (e.shiftKey && (active === el || active === first)) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && active === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }["useDialogA11y.useEffect.onKey"];
            el.addEventListener("keydown", onKey);
            return ({
                "useDialogA11y.useEffect": ()=>{
                    el.removeEventListener("keydown", onKey);
                    opener?.focus({
                        preventScroll: true
                    });
                }
            })["useDialogA11y.useEffect"];
        }
    }["useDialogA11y.useEffect"], [
        active
    ]);
    return ref;
}
_s(useDialogA11y, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/CardForge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardForge",
    ()=>CardForge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   CARD FORGE — AI drafts flashcards from any chapter.

   Pick a shelf, a chapter and a batch size; the chapter's notes
   (the same bodies the ⌘K search indexes) go to
   /api/generate-cards and come back as draft cards. Tick the
   keepers and save — accepted cards land in lib/custom-cards.ts
   and join the SM-2 schedule, Quick Drill, spaced review and
   the backup file. Rejected drafts are discarded; mock exams
   stay bank-only.

   The dialog follows the mock-exam composer's shell: warm paper
   surfaces, focus trap + Escape, honest error states.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as WandSparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapter-index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/custom-cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const COUNTS = [
    4,
    8,
    12
];
const FORGE_UNREACHABLE = "The forge is unreachable — try again later.";
function CardForge({ onClose }) {
    _s();
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(true);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    /* stage 1 — compose; stage 2 — review the drafts */ const [shelfId, setShelfId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SUBJECTS"][0]?.id ?? "foc");
    const [chapterKey, setChapterKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTER_INDEX"][0]?.section ?? "");
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drafts, setDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [picked, setPicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const shelf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardForge.useMemo[shelf]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SUBJECTS"].find({
                "CardForge.useMemo[shelf]": (s)=>s.id === shelfId
            }["CardForge.useMemo[shelf]"])
    }["CardForge.useMemo[shelf]"], [
        shelfId
    ]);
    const chapters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardForge.useMemo[chapters]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTER_INDEX"].filter({
                "CardForge.useMemo[chapters]": (c)=>c.subject === shelfId
            }["CardForge.useMemo[chapters]"])
    }["CardForge.useMemo[chapters]"], [
        shelfId
    ]);
    const chapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardForge.useMemo[chapter]": ()=>chapters.find({
                "CardForge.useMemo[chapter]": (c)=>c.section === chapterKey
            }["CardForge.useMemo[chapter]"]) ?? chapters[0]
    }["CardForge.useMemo[chapter]"], [
        chapters,
        chapterKey
    ]);
    /* chapters grouped in catalog order — one optgroup per chapter group */ const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardForge.useMemo[groups]": ()=>{
            const out = [];
            for (const c of chapters){
                const last = out[out.length - 1];
                if (last && last.group === c.group) last.chapters.push(c);
                else out.push({
                    group: c.group,
                    groupLabel: c.groupLabel,
                    chapters: [
                        c
                    ]
                });
            }
            return out;
        }
    }["CardForge.useMemo[groups]"], [
        chapters
    ]);
    /* Escape closes — same contract as the exam windows */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardForge.useEffect": ()=>{
            const onKey = {
                "CardForge.useEffect.onKey": (e)=>{
                    if (e.key !== "Escape" || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
                    onClose();
                }
            }["CardForge.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "CardForge.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["CardForge.useEffect"];
        }
    }["CardForge.useEffect"], [
        onClose
    ]);
    const pickShelf = (id)=>{
        setShelfId(id);
        const first = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTER_INDEX"].find((c)=>c.subject === id);
        if (first) setChapterKey(first.section);
    };
    const generate = async ()=>{
        if (!chapter || busy) return;
        setBusy(true);
        setError(null);
        try {
            const res = await fetch("/api/generate-cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    shelfId,
                    chapterKey: chapter.section,
                    count
                })
            });
            const data = await res.json().catch(()=>null);
            if (!res.ok || !data || !Array.isArray(data.cards) || data.cards.length === 0) {
                setError(data?.error ?? FORGE_UNREACHABLE);
                return;
            }
            setDrafts(data.cards);
            setPicked(data.cards.map(()=>true));
        } catch  {
            setError(FORGE_UNREACHABLE);
        } finally{
            setBusy(false);
        }
    };
    const save = ()=>{
        if (!drafts || !chapter) return;
        const kept = drafts.filter((_, i)=>picked[i]);
        if (kept.length === 0) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCustomCards"])(kept.map((c)=>({
                shelfId,
                chapterKey: chapter.section,
                q: c.q,
                a: c.a
            })));
        toast({
            title: `${kept.length} card${kept.length === 1 ? "" : "s"} forged`,
            description: `Saved to ${shelf?.short ?? shelfId} — they're in the drill deck, the review schedule and your backups.`
        });
        onClose(); // drafts are discarded — the saved cards live in the store
    };
    const keptCount = drafts ? picked.filter(Boolean).length : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: shellRef,
        tabIndex: -1,
        initial: {
            opacity: 0,
            scale: 0.99
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
        className: "fixed inset-0 z-[80] flex flex-col bg-[linear-gradient(180deg,#f7eedf_0%,#f3e7d3_100%)] outline-none",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Card Forge — generate AI flashcards from any chapter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#1f1207,#3a2413)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#fbbf24,#b45309)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                className: "h-4 w-4 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.95rem] font-black leading-tight text-[#ffe9c9]",
                                    children: "Card Forge"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.68rem] leading-tight text-[#c9a97e]",
                                    children: "any chapter → draft cards → your deck"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            "aria-label": "Close the card forge",
                            className: "ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/CardForge.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-start justify-center overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10",
                    children: drafts === null ? /* ---------------- stage 1 — compose ---------------- */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#e8dcc0] bg-[#fffdf9] p-5 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "exam-eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    "Forge new cards"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display mt-1 text-xl font-bold text-[#2b1d10]",
                                children: "The AI reads a chapter, you keep the best cards"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]",
                                children: "Drafts are plain recall & application cards. Accept the good ones — they join your SM-2 schedule, Quick Drill, spaced review and the backup file. Mock exams stay bank-only."
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]",
                                        children: "Shelf"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap gap-2",
                                        role: "group",
                                        "aria-label": "Pick the shelf to forge cards for",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SUBJECTS"].map((s)=>{
                                            const on = s.id === shelfId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>pickShelf(s.id),
                                                "aria-pressed": on,
                                                className: "flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[.72rem] font-extrabold transition",
                                                style: on ? {
                                                    borderColor: `${s.accent}88`,
                                                    background: `${s.accent}1a`,
                                                    color: "#2b1d10"
                                                } : {
                                                    borderColor: "#e0d2b8",
                                                    background: "#fffdf9",
                                                    color: "#8a6d4f"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                        className: "h-3.5 w-3.5",
                                                        style: {
                                                            color: on ? s.accent : "#a08a68"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 25
                                                    }, this),
                                                    s.short,
                                                    on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-3 w-3",
                                                        style: {
                                                            color: s.accent
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 31
                                                    }, this) : null
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                lineNumber: 174,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "forge-chapter",
                                        className: "text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]",
                                        children: "Chapter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "forge-chapter",
                                        value: chapter?.section ?? "",
                                        onChange: (e)=>setChapterKey(e.target.value),
                                        className: "mt-2 w-full rounded-xl border border-[#e0d2b8] bg-white px-3 py-2.5 text-[.86rem] font-semibold text-[#2b1d10] outline-none transition focus:border-[#b45309]",
                                        children: groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                label: g.groupLabel,
                                                children: g.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.section,
                                                        children: [
                                                            c.label,
                                                            " — ",
                                                            c.desc
                                                        ]
                                                    }, c.section, true, {
                                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 25
                                                    }, this))
                                            }, g.group, false, {
                                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]",
                                        children: "How many cards"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap gap-2",
                                        role: "group",
                                        "aria-label": "Pick how many cards to draft",
                                        children: COUNTS.map((n)=>{
                                            const on = n === count;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCount(n),
                                                "aria-pressed": on,
                                                className: "rounded-full border px-4 py-2 text-[.72rem] font-extrabold transition",
                                                style: on ? {
                                                    borderColor: "#b4530988",
                                                    background: "#f9e8d2",
                                                    color: "#2b1d10"
                                                } : {
                                                    borderColor: "#e0d2b8",
                                                    background: "#fffdf9",
                                                    color: "#8a6d4f"
                                                },
                                                children: [
                                                    n,
                                                    " cards"
                                                ]
                                            }, n, true, {
                                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 rounded-xl border border-[#e4b8b8] bg-[#fdecec] px-4 py-3 text-[.82rem] font-semibold text-[#8c2f2f]",
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 245,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void generate(),
                                        disabled: busy,
                                        className: "exam-btn exam-btn-primary",
                                        children: [
                                            busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "h-4 w-4 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                lineNumber: 255,
                                                columnNumber: 21
                                            }, this),
                                            busy ? "Forging…" : "Generate with AI"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8a6d4f]",
                                        role: "status",
                                        children: busy ? `reading “${chapter?.label ?? "the chapter"}” and drafting cards…` : "nothing is saved until you accept the drafts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/CardForge.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this) : /* ---------------- stage 2 — review the drafts ---------------- */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-[#e8dcc0] bg-[#fffdf9] p-5 sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "exam-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this),
                                        "Draft cards"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display mt-1 text-xl font-bold text-[#2b1d10]",
                                    children: [
                                        drafts.length,
                                        " drafted from “",
                                        chapter?.label ?? "the chapter",
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 272,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]",
                                    children: "Untick anything not worth remembering — unticked drafts are discarded. Saved cards grade on the same SM-2 schedule as every bank question."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-2",
                                    children: drafts.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-start gap-3 rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3 transition hover:border-[#d9c6a4]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: picked[i] ?? false,
                                                    onChange: (e)=>setPicked((prev)=>{
                                                            const next = [
                                                                ...prev
                                                            ];
                                                            next[i] = e.target.checked;
                                                            return next;
                                                        }),
                                                    "aria-label": `Keep card ${i + 1}`,
                                                    className: "mt-1 h-4 w-4 shrink-0 accent-[#b45309]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[.9rem] font-bold leading-snug text-[#2b1d10]",
                                                            children: card.q
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 block whitespace-pre-wrap font-mono text-[.78rem] leading-relaxed text-[#6f5438]",
                                                            children: card.a
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                            lineNumber: 282,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: save,
                                            disabled: keptCount === 0,
                                            className: "exam-btn exam-btn-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this),
                                                "Save ",
                                                keptCount,
                                                " card",
                                                keptCount === 1 ? "" : "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setDrafts(null);
                                                setPicked([]);
                                                setError(null);
                                            },
                                            className: "exam-btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this),
                                                "Discard drafts"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                            lineNumber: 314,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8a6d4f]",
                                            children: [
                                                keptCount,
                                                " of ",
                                                drafts.length,
                                                " ticked"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                                            lineNumber: 326,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                            lineNumber: 267,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/CardForge.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/CardForge.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t border-[#e5d3b6] bg-[rgba(250,243,230,0.9)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hidden text-[.68rem] font-semibold text-[#8a6d4f] sm:block",
                            children: "Drafts never touch your schedule — only saved cards do."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "exam-btn ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                "Back to the ledger"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/CardForge.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/CardForge.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/CardForge.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/CardForge.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(CardForge, "wpMVN2NHw1No2VRWZSSfgwvJkKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = CardForge;
var _c;
__turbopack_context__.k.register(_c, "CardForge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   MOCK EXAM — compose your own paper.

   The formal instrument, next to the fixed exam windows (one
   per shelf, full bank) and the casual ones (drill, review).
   The reader picks the shelves, the length, the clock and the
   question style; this module draws a fresh, balanced paper
   from the real banks and hands it to the one ExamEngine.

   Composition rules:
     · every selected shelf contributes in round-robin turns —
       a 3-shelf 15-question paper interleaves 5 from each, so
       the paper never reads as one shelf followed by another
     · questions are shuffled within each shelf first
     · ids are ALWAYS namespaced ("foc:f3", the review/drill
       convention) so grades land on the right shelf's schedule
     · if the shelves run out (type filters, small banks) the
       paper is honest about the shortfall in its subtitle

   Durability: the composed paper's ids live in localStorage
   ("atlas:mock-live:v1") while it is in progress, stamped with the
   time of the last write — so a reload OR a fully closed tab no
   longer kills the paper. Reopening the window rebuilds the exact
   same composition from those ids and the ExamEngine draft (keyed
   "mock") restores every answer and the honest clock whenever the
   browser session kept it. On load the record is reconciled:
   finished sittings (flagged when the engine reaches the report)
   and papers older than a day are swept instead of resurrected.

   The last blueprint is remembered in localStorage
   ("atlas:mock:v1") so the composer opens the way you left it.
   ============================================================ */ __turbopack_context__.s([
    "DEFAULT_BLUEPRINT",
    ()=>DEFAULT_BLUEPRINT,
    "MOCK_CLOCKS",
    ()=>MOCK_CLOCKS,
    "MOCK_KEY",
    ()=>MOCK_KEY,
    "MOCK_LENGTHS",
    ()=>MOCK_LENGTHS,
    "MOCK_LIVE_KEY",
    ()=>MOCK_LIVE_KEY,
    "availableFor",
    ()=>availableFor,
    "buildMock",
    ()=>buildMock,
    "loadBlueprint",
    ()=>loadBlueprint,
    "loadLiveSession",
    ()=>loadLiveSession,
    "markLiveSessionFinished",
    ()=>markLiveSessionFinished,
    "rebuildMock",
    ()=>rebuildMock,
    "saveBlueprint",
    ()=>saveBlueprint,
    "saveLiveSession",
    ()=>saveLiveSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/question-counts.ts [app-client] (ecmascript)");
;
const MOCK_KEY = "atlas:mock:v1";
const MOCK_LENGTHS = [
    5,
    10,
    15,
    20,
    25,
    30,
    40,
    50,
    60
];
const MOCK_CLOCKS = [
    0,
    10,
    15,
    20,
    30,
    45,
    60,
    90,
    120
];
const KNOWN_SHELVES = new Set([
    "foc",
    "atb",
    "fa",
    "ebh",
    "stm"
]);
const KNOWN_TYPES = new Set([
    "both",
    "mcq",
    "written"
]);
const DEFAULT_BLUEPRINT = {
    shelves: [
        "foc",
        "atb",
        "fa",
        "ebh",
        "stm"
    ],
    total: 15,
    minutes: 30,
    types: "both"
};
function clampBlueprint(bp) {
    const shelves = Array.isArray(bp.shelves) ? bp.shelves.filter((s)=>typeof s === "string" && KNOWN_SHELVES.has(s)) : [];
    const types = typeof bp.types === "string" && KNOWN_TYPES.has(bp.types) ? bp.types : DEFAULT_BLUEPRINT.types;
    const minutes = typeof bp.minutes === "number" && Number.isFinite(bp.minutes) ? Math.max(0, Math.min(240, Math.round(bp.minutes))) : DEFAULT_BLUEPRINT.minutes;
    const total = typeof bp.total === "number" && Number.isFinite(bp.total) ? Math.max(5, Math.min(60, Math.round(bp.total))) : DEFAULT_BLUEPRINT.total;
    return {
        shelves: shelves.length > 0 ? shelves : [
            ...DEFAULT_BLUEPRINT.shelves
        ],
        total,
        minutes,
        types
    };
}
function loadBlueprint() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(MOCK_KEY);
        if (!raw) return {
            ...DEFAULT_BLUEPRINT
        };
        return clampBlueprint(JSON.parse(raw));
    } catch  {
        return {
            ...DEFAULT_BLUEPRINT
        };
    }
}
function saveBlueprint(bp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(MOCK_KEY, JSON.stringify(bp));
    } catch  {
    /* private mode / quota — the composer just stops remembering */ }
}
function availableFor(shelves) {
    return shelves.reduce((n, sid)=>n + (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"][sid] ?? 0), 0);
}
const MOCK_LIVE_KEY = "atlas:mock-live:v1";
/** a durable live paper older than a day is dead weight — sweep it.
 *  (localStorage survives tab closes, so unlike the old
 *  sessionStorage record, stale entries would otherwise linger.) */ const LIVE_MAX_AGE_MS = 24 * 60 * 60 * 1000;
function loadLiveSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(MOCK_LIVE_KEY);
        if (!raw) return null;
        const discard = ()=>{
            try {
                window.localStorage.removeItem(MOCK_LIVE_KEY);
            } catch  {
            /* ignore */ }
        };
        let parsed;
        try {
            parsed = JSON.parse(raw);
        } catch  {
            discard();
            return null;
        }
        if (!Array.isArray(parsed.ids) || parsed.ids.some((id)=>typeof id !== "string") || parsed.ids.length === 0 || typeof parsed.title !== "string" || typeof parsed.subtitle !== "string") {
            discard();
            return null;
        }
        /* reconcile: already-finished sittings and papers older than
       24h are discarded, not resumed */ if (parsed.finished === true || typeof parsed.savedAt !== "number" || !Number.isFinite(parsed.savedAt) || Date.now() - parsed.savedAt > LIVE_MAX_AGE_MS) {
            discard();
            return null;
        }
        return {
            ids: parsed.ids,
            title: parsed.title,
            subtitle: parsed.subtitle,
            minutes: typeof parsed.minutes === "number" && Number.isFinite(parsed.minutes) ? Math.max(0, Math.min(240, Math.round(parsed.minutes))) : 0,
            savedAt: parsed.savedAt
        };
    } catch  {
        return null;
    }
}
function saveLiveSession(session) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(MOCK_LIVE_KEY, JSON.stringify({
            ...session,
            savedAt: Date.now()
        }));
    } catch  {
    /* private mode / quota — the paper simply cannot survive a reload */ }
}
function markLiveSessionFinished() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(MOCK_LIVE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return;
        window.localStorage.setItem(MOCK_LIVE_KEY, JSON.stringify({
            ...parsed,
            finished: true
        }));
    } catch  {
    /* ignore */ }
}
const BANK_LOADERS = {
    foc: ()=>__turbopack_context__.A("[project]/src/components/notes/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EXAM_BANKS),
    atb: ()=>__turbopack_context__.A("[project]/src/components/atb/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.ATB_EXAM_BANKS),
    fa: ()=>__turbopack_context__.A("[project]/src/components/fa/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.FA_EXAM_BANKS),
    ebh: ()=>__turbopack_context__.A("[project]/src/components/ebh/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EBH_EXAM_BANKS),
    stm: ()=>__turbopack_context__.A("[project]/src/components/stm/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.STM_EXAM_BANKS)
};
function shuffled(arr) {
    const a = [
        ...arr
    ];
    for(let i = a.length - 1; i > 0; i -= 1){
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [
            a[j],
            a[i]
        ];
    }
    return a;
}
function plural(n, one, many) {
    return `${n} ${n === 1 ? one : many}`;
}
async function buildMock(bp) {
    const shelves = bp.shelves.filter((sid)=>BANK_LOADERS[sid]);
    const maps = await Promise.all(shelves.map(async (sid)=>[
            sid,
            await BANK_LOADERS[sid]()
        ]));
    /* per-shelf pools, shuffled, filtered by the style rule */ const queues = maps.map(([sid, bankMap])=>{
        const pool = [];
        for (const group of Object.values(bankMap)){
            for (const q of group.questions){
                if (bp.types === "mcq" && q.type !== "mcq") continue;
                if (bp.types === "written" && q.type === "mcq") continue;
                pool.push(q);
            }
        }
        return [
            sid,
            shuffled(pool)
        ];
    });
    /* round-robin interleave — one turn per shelf per round, so a
     mixed paper reads mixed instead of shelf-by-shelf */ const picked = [];
    let remaining = bp.total;
    while(remaining > 0){
        let progressed = false;
        for (const [sid, qs] of queues){
            if (remaining <= 0) break;
            const q = qs.shift();
            if (q) {
                picked.push({
                    q,
                    sid
                });
                remaining -= 1;
                progressed = true;
            }
        }
        if (!progressed) break;
    }
    const questions = picked.map(({ q, sid })=>({
            ...q,
            id: `${sid}:${q.id}`,
            srcId: q.id,
            subject: sid
        }));
    const ids = questions.map((q)=>q.id);
    const composed = questions.length;
    const shelfCount = new Set(picked.map((p)=>p.sid)).size;
    const title = `Mock exam — ${plural(composed, "question", "questions")} · ${plural(shelfCount, "shelf", "shelves")}`;
    let subtitle = bp.minutes > 0 ? `${bp.minutes} minutes on the clock` : "untimed — take the time you need";
    if (composed < bp.total) subtitle += ` · asked for ${bp.total}, the banks had ${composed}`;
    return {
        bank: {
            title,
            subtitle,
            questions
        },
        ids,
        requested: bp.total,
        composed
    };
}
async function rebuildMock(ids) {
    /* group by shelf prefix — ids are "<sid>:<qid>", split at the first colon */ const byShelf = new Map();
    for (const id of ids){
        const cut = id.indexOf(":");
        if (cut <= 0) continue;
        const sid = id.slice(0, cut);
        const qid = id.slice(cut + 1);
        const set = byShelf.get(sid) ?? new Set();
        set.add(qid);
        byShelf.set(sid, set);
    }
    const maps = await Promise.all([
        ...byShelf.keys()
    ].filter((sid)=>BANK_LOADERS[sid]).map(async (sid)=>[
            sid,
            await BANK_LOADERS[sid]()
        ]));
    const index = new Map();
    for (const [sid, bankMap] of maps){
        const want = byShelf.get(sid);
        if (!want) continue;
        for (const group of Object.values(bankMap)){
            for (const q of group.questions){
                if (want.has(q.id)) index.set(`${sid}:${q.id}`, q);
            }
        }
    }
    const out = [];
    for (const id of ids){
        const q = index.get(id);
        if (q) out.push({
            ...q,
            id,
            srcId: id.slice(id.indexOf(":") + 1),
            subject: id.slice(0, id.indexOf(":"))
        });
    }
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/backup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKUP_VERSION",
    ()=>BACKUP_VERSION,
    "LAB_KEY",
    ()=>LAB_KEY,
    "applyBackup",
    ()=>applyBackup,
    "backupFilename",
    ()=>backupFilename,
    "eraseAllStores",
    ()=>eraseAllStores,
    "exportBackup",
    ()=>exportBackup,
    "parseBackup",
    ()=>parseBackup,
    "validateBackupShape",
    ()=>validateBackupShape
]);
/* ============================================================
   Backup & restore — one JSON file for the whole atlas memory.

   The reader's progress lives in local storage:
     atlas:sm2:v1          — the SM-2 review schedule
     atlas:ledger:v1       — the attempt log / streak
     atlas:progress:v1     — chapter reading progress
     atlas:goal:v1         — the daily goal target (optional in
                             bundles: older exports simply omit it)
     atlas:mock-live:v1    — the last mock-exam blueprint (same
                             optional tolerance)
     atlas:custom-cards:v1 — the AI-forged flashcards (optional,
                             same tolerance as goal/mock)
     foc-py-lab-v1         — the Python Lab notebooks, carried
                             opaquely (the lab owns its schema)
   Export bundles all of them; import validates and replaces.
   Nothing is sent anywhere — the file goes straight from the
   reader's disk into their browser, same as before.

   Validation is strict-but-tolerant: unknown extra fields in
   records are kept, records missing required fields are
   dropped, and a bundle that fails shape checks is rejected
   with a human-readable error instead of half-applying.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/goal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/custom-cards.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const BACKUP_VERSION = 1;
const LAB_KEY = "foc-py-lab-v1";
function exportBackup() {
    const lab = readLabRaw();
    const bundle = {
        app: "the-atlas",
        version: BACKUP_VERSION,
        exportedAt: new Date().toISOString(),
        stores: {
            sm2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSm2"])(),
            ledger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLedger"])(),
            progress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadProgress"])(),
            goal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadGoal"])(),
            mock: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBlueprint"])(),
            custom: {
                cards: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCustomCards"])()
            },
            ...lab !== null ? {
                lab
            } : {}
        }
    };
    return JSON.stringify(bundle, null, 2);
}
/** The lab's stored value, kept raw. Loose validation here means
 *  we never block an export: whatever the lab wrote comes along,
 *  even if it has drifted from the documented shape. */ function readLabRaw() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(LAB_KEY);
    } catch  {
        return null;
    }
}
/** How many lab cells ride in a bundle — counted only when the
 *  opaque value still parses as an array of code strings. */ function labCellCount(raw) {
    if (!raw) return 0;
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) && parsed.every((c)=>typeof c === "string") ? parsed.length : 0;
    } catch  {
        return 0;
    }
}
function backupFilename(now = new Date()) {
    const m = `${now.getMonth() + 1}`.padStart(2, "0");
    const d = `${now.getDate()}`.padStart(2, "0");
    return `atlas-backup-${now.getFullYear()}-${m}-${d}.json`;
}
/* ---------------- validation ---------------- */ function isObj(x) {
    return typeof x === "object" && x !== null && !Array.isArray(x);
}
function num(x) {
    return typeof x === "number" && Number.isFinite(x);
}
function validCard(c) {
    return isObj(c) && num(c.ef) && num(c.interval) && num(c.reps) && num(c.due) && num(c.last);
}
function validSm2(x) {
    if (!isObj(x)) return false;
    for (const subject of Object.values(x)){
        if (!isObj(subject)) return false;
        for (const card of Object.values(subject))if (!validCard(card)) return false;
    }
    return true;
}
function validLedger(x) {
    if (!isObj(x) || !Array.isArray(x.attempts) || !Array.isArray(x.days)) return false;
    for (const a of x.attempts){
        if (!isObj(a) || typeof a.subject !== "string" || typeof a.group !== "string" || typeof a.title !== "string" || !num(a.correct) || !num(a.total) || !num(a.pct) || !num(a.seconds) || !num(a.at)) {
            return false;
        }
    }
    return x.days.every((d)=>typeof d === "string");
}
function validProgress(x) {
    if (!isObj(x)) return false;
    for (const subject of Object.values(x)){
        if (!isObj(subject)) return false;
        for (const ts of Object.values(subject))if (!num(ts)) return false;
    }
    return true;
}
/** the goal block is optional — but when present it must be whole */ function validGoal(x) {
    return isObj(x) && num(x.target) && num(x.setAt);
}
/** the mock blueprint is optional — but when present it must be whole */ function validMock(x) {
    return isObj(x) && Array.isArray(x.shelves) && x.shelves.length > 0 && x.shelves.every((s)=>typeof s === "string") && num(x.total) && num(x.minutes) && typeof x.types === "string" && [
        "both",
        "mcq",
        "written"
    ].includes(x.types);
}
/** the forged-card deck is optional — but when present it must be whole:
 *  every card keeps its shape and its "custom:" id prefix */ function validCustom(x) {
    if (!isObj(x) || !Array.isArray(x.cards)) return false;
    return x.cards.every((c)=>isObj(c) && typeof c.id === "string" && c.id.startsWith("custom:") && typeof c.shelfId === "string" && typeof c.chapterKey === "string" && typeof c.q === "string" && typeof c.a === "string" && num(c.createdAt));
}
function parseBackup(text) {
    let raw;
    try {
        raw = JSON.parse(text);
    } catch  {
        return {
            ok: false,
            error: "That file is not valid JSON."
        };
    }
    if (!isObj(raw) || raw.app !== "the-atlas") {
        return {
            ok: false,
            error: "This isn't an Atlas backup file."
        };
    }
    if (typeof raw.version !== "number" || raw.version > BACKUP_VERSION) {
        return {
            ok: false,
            error: `Backup version ${String(raw.version)} is newer than this app understands.`
        };
    }
    const stores = isObj(raw.stores) ? raw.stores : null;
    if (!stores) {
        return {
            ok: false,
            error: "The backup is missing its stores block."
        };
    }
    if (stores.goal !== undefined && !validGoal(stores.goal)) {
        return {
            ok: false,
            error: "The backup's stores are damaged — refusing to overwrite your data."
        };
    }
    if (stores.mock !== undefined && !validMock(stores.mock)) {
        return {
            ok: false,
            error: "The backup's stores are damaged — refusing to overwrite your data."
        };
    }
    if (stores.custom !== undefined && !validCustom(stores.custom)) {
        return {
            ok: false,
            error: "The backup's stores are damaged — refusing to overwrite your data."
        };
    }
    /* the lab block is opaque — the only hard rule is that it is a
     string, so a restore can write it back byte-for-byte */ if (stores.lab !== undefined && typeof stores.lab !== "string") {
        return {
            ok: false,
            error: "The backup's stores are damaged — refusing to overwrite your data."
        };
    }
    if (!validSm2(stores.sm2) || !validLedger(stores.ledger) || !validProgress(stores.progress)) {
        return {
            ok: false,
            error: "The backup's stores are damaged — refusing to overwrite your data."
        };
    }
    const bundle = {
        app: "the-atlas",
        version: raw.version,
        exportedAt: typeof raw.exportedAt === "string" ? raw.exportedAt : "",
        stores: {
            sm2: stores.sm2,
            ledger: stores.ledger,
            progress: stores.progress,
            ...validGoal(stores.goal) ? {
                goal: stores.goal
            } : {},
            ...validMock(stores.mock) ? {
                mock: stores.mock
            } : {},
            ...validCustom(stores.custom) ? {
                custom: stores.custom
            } : {},
            ...typeof stores.lab === "string" ? {
                lab: stores.lab
            } : {}
        }
    };
    let cards = 0;
    let sections = 0;
    for (const subject of Object.values(bundle.stores.sm2))cards += Object.keys(subject).length;
    for (const subject of Object.values(bundle.stores.progress))sections += Object.keys(subject).length;
    const attempts = bundle.stores.ledger.attempts.length;
    return {
        ok: true,
        bundle,
        summary: {
            cards,
            attempts,
            days: bundle.stores.ledger.days.length,
            sections,
            customCards: bundle.stores.custom?.cards.length ?? 0,
            labCells: labCellCount(bundle.stores.lab),
            exportedAt: bundle.exportedAt
        }
    };
}
function applyBackup(bundle) {
    const failedKeys = [];
    let restored = 0;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const writes = [
        [
            "atlas:sm2:v1",
            JSON.stringify(bundle.stores.sm2)
        ],
        [
            "atlas:ledger:v1",
            JSON.stringify(bundle.stores.ledger)
        ],
        [
            "atlas:progress:v1",
            JSON.stringify(bundle.stores.progress)
        ],
        [
            "atlas:goal:v1",
            bundle.stores.goal ? JSON.stringify(bundle.stores.goal) : null
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_KEY"],
            bundle.stores.mock ? JSON.stringify(bundle.stores.mock) : null
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_CARDS_KEY"],
            bundle.stores.custom ? JSON.stringify(bundle.stores.custom) : null
        ],
        [
            LAB_KEY,
            typeof bundle.stores.lab === "string" ? bundle.stores.lab : null
        ]
    ];
    for (const [key, value] of writes){
        try {
            if (value === null) window.localStorage.removeItem(key);
            else window.localStorage.setItem(key, value);
            if (window.localStorage.getItem(key) !== value) failedKeys.push(key);
            else restored += 1;
        } catch  {
            failedKeys.push(key);
        }
    }
    return {
        restored,
        failedKeys
    };
}
function eraseAllStores() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.removeItem("atlas:sm2:v1");
        window.localStorage.removeItem("atlas:ledger:v1");
        window.localStorage.removeItem("atlas:progress:v1");
        window.localStorage.removeItem("atlas:goal:v1");
        window.localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_KEY"]);
        window.localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_CARDS_KEY"]);
        window.localStorage.removeItem(LAB_KEY);
    } catch  {
    /* noop */ }
}
function validateBackupShape(text) {
    const res = parseBackup(text);
    return res.ok ? {
        ok: true
    } : {
        ok: false,
        error: res.error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/LedgerView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LedgerView",
    ()=>LedgerView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   THE LEDGER — progress & mastery, at #/ledger.

   A local-first report of everything the reader has practiced:
   per-shelf accuracy, SM-2 mastery bars, due-card counts, the
   practice streak, and the recent-attempt log. Nothing here
   leaves the browser — the ledger reads the same localStorage
   stores the exam engine writes.

   From here a reader can launch a spaced-review session for
   any shelf with cards due (ReviewWindow reuses the exam
   engine, so review feels exactly like an exam window).
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-client] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check-2.js [app-client] (ecmascript) <export default as CalendarCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudDownload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-download.js [app-client] (ecmascript) <export default as CloudDownload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudUpload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as CloudUpload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as WandSparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/question-counts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/section-counts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$lookup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/question-lookup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/goal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$PracticeHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/PracticeHeatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$CardForge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/CardForge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/custom-cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/backup.ts [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
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
/* the review, drill and mock windows load their own subject chunks on demand */ const ReviewWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/notes/ReviewWindow.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ReviewWindow), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/notes/ReviewWindow.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
_c = ReviewWindow;
const DrillWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/notes/DrillWindow.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.DrillWindow), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/notes/DrillWindow.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
_c1 = DrillWindow;
const MockWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/notes/MockWindow.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.MockWindow), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/notes/MockWindow.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
_c2 = MockWindow;
/* ---------- sync-code helpers (pure, module scope) ---------- */ const SYNC_CODE_KEY = "atlas:sync-code:v1";
const SYNC_CODE_RE = /^[A-HJ-NP-Z2-9]{6}$/;
/** 32 unambiguous glyphs (no I, O, 0, 1) — 256 % 32 === 0, so
 *  crypto.getRandomValues needs no bias correction */ const SYNC_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function generateSyncCode() {
    const bytes = new Uint8Array(6);
    crypto.getRandomValues(bytes);
    let out = "";
    for(let i = 0; i < 6; i++)out += SYNC_ALPHABET[bytes[i] % 32];
    return out;
}
/** uppercase, keep only code glyphs, cap at six — typing "ab1o9" lands as "AB9" */ function formatSyncInput(raw) {
    return raw.toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, "").slice(0, 6);
}
function fmtBytes(n) {
    if (n >= 1024 ** 3) return `${(n / 1024 ** 3).toFixed(2)} GB`;
    if (n >= 1024 ** 2) return `${(n / 1024 ** 2).toFixed(1)} MB`;
    if (n >= 1024) return `${Math.round(n / 1024)} KB`;
    return `${n} B`;
}
/** the human tally a restore reports — forged cards and lab cells
 *  only speak up when the bundle actually carries them */ function tallyFor(s) {
    const forged = s.customCards > 0 ? `, ${s.customCards} forged card${s.customCards === 1 ? "" : "s"}` : "";
    const lab = s.labCells > 0 ? `, ${s.labCells} Python Lab cell${s.labCells === 1 ? "" : "s"}` : "";
    return `${s.cards} scheduled card${s.cards === 1 ? "" : "s"}, ${s.attempts} attempt${s.attempts === 1 ? "" : "s"}${forged}${lab}, ${s.sections} chapter${s.sections === 1 ? "" : "s"} read`;
}
/** the honest half-restore sentence — names the exact keys that refused */ function failedWritesMsg(prefix, result) {
    return `${prefix}Restored ${result.restored} store${result.restored === 1 ? "" : "s"} — but these failed to write (private browsing or storage quota?): ${result.failedKeys.join(", ")}`;
}
function fmtSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${String(s).padStart(2, "0")}s`;
}
function relDay(at) {
    const now = new Date();
    const then = new Date(at);
    const days = Math.floor((now.setHours(0, 0, 0, 0) - new Date(then).setHours(0, 0, 0, 0)) / 86_400_000);
    if (days <= 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 7) return `${days}d ago`;
    return then.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}
function LedgerView({ onExitAtlas }) {
    _s();
    const [store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /* the weakest cards in the schedule — shown as "trouble spots";
     their question wording arrives from the banks a moment later */ const [trouble, setTrouble] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [troubleTexts, setTroubleTexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* the ⌘K palette may have queued a review handoff ("review <subject>")
     before this view mounted — honor it once at init (client-only chunk) */ const [reviewSubject, setReviewSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LedgerView.useState": ()=>{
            try {
                const queued = sessionStorage.getItem("atlas:review-subject");
                if (queued) {
                    sessionStorage.removeItem("atlas:review-subject");
                    return queued;
                }
            } catch  {
            /* private mode — no handoff */ }
            return null;
        }
    }["LedgerView.useState"]);
    /* trouble-spot reviews pull their specific card forward even when
     it is not due until tomorrow — everything else reviews by due date */ const [reviewForce, setReviewForce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const openReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LedgerView.useCallback[openReview]": (subject, force = [])=>{
            setReviewForce(force);
            setReviewSubject(subject);
        }
    }["LedgerView.useCallback[openReview]"], []);
    /* the ⌘K palette can also queue a drill handoff ("quick drill")
     before this view mounts — honor it once at init */ const [drillSubject, setDrillSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LedgerView.useState": ()=>{
            try {
                const queued = sessionStorage.getItem("atlas:drill-subject");
                if (queued) {
                    sessionStorage.removeItem("atlas:drill-subject");
                    return queued;
                }
            } catch  {
            /* private mode — no handoff */ }
            return null;
        }
    }["LedgerView.useState"]);
    const openDrill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LedgerView.useCallback[openDrill]": (subject)=>setDrillSubject(subject)
    }["LedgerView.useCallback[openDrill]"], []);
    /* the ⌘K palette can also queue the mock-exam composer — same
     handoff contract as review/drill, no subject to carry */ const [mockOpen, setMockOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LedgerView.useState": ()=>{
            try {
                const queued = sessionStorage.getItem("atlas:mock-open");
                if (queued) {
                    sessionStorage.removeItem("atlas:mock-open");
                    return queued === "1";
                }
            } catch  {
            /* private mode — no handoff */ }
            return false;
        }
    }["LedgerView.useState"]);
    const openMock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LedgerView.useCallback[openMock]": ()=>setMockOpen(true)
    }["LedgerView.useCallback[openMock]"], []);
    /* the ⌘K palette can also queue the card forge — same handoff
     contract as review/drill/mock, no subject to carry */ const [forgeOpen, setForgeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LedgerView.useState": ()=>{
            try {
                const queued = sessionStorage.getItem("atlas:forge-open");
                if (queued) {
                    sessionStorage.removeItem("atlas:forge-open");
                    return queued === "1";
                }
            } catch  {
            /* private mode — no handoff */ }
            return false;
        }
    }["LedgerView.useState"]);
    const openForge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LedgerView.useCallback[openForge]": ()=>setForgeOpen(true)
    }["LedgerView.useCallback[openForge]"], []);
    /* the daily goal + derived badges — both recomputed on every refresh */ const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [snap, setSnap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LedgerView.useCallback[refresh]": ()=>{
            const ledger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLedger"])();
            const due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dueCounts"])();
            const reads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readProgressCounts"])();
            /* forged cards share the shelf's schedule — count them into the
       mastery denominator so the bar can never read above 100% */ const customs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countCustomCardsByShelf"])();
            setStore(ledger);
            setStreak((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentStreak"])(ledger.days));
            setTrouble((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["troubleSpots"])());
            setGoal((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalStatus"])());
            setSnap((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSnapshot"])());
            setRows(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].filter({
                "LedgerView.useCallback[refresh]": (s)=>s.status === "live"
            }["LedgerView.useCallback[refresh]"]).map({
                "LedgerView.useCallback[refresh]": (subject)=>({
                        subject,
                        stats: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsFor"])(ledger, subject.id),
                        mastery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["masteryFor"])(subject.id, (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"][subject.id] ?? 0) + (customs[subject.id] ?? 0)),
                        due: due[subject.id] ?? 0,
                        read: reads[subject.id] ?? 0,
                        readTotal: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_COUNTS"][subject.id] ?? subject.chapters ?? 0
                    })
            }["LedgerView.useCallback[refresh]"]));
        }
    }["LedgerView.useCallback[refresh]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LedgerView.useEffect": ()=>{
            /* rAF-deferred first read — avoids sync setState-in-effect */ const raf = requestAnimationFrame({
                "LedgerView.useEffect.raf": ()=>refresh()
            }["LedgerView.useEffect.raf"]);
            const onVisible = {
                "LedgerView.useEffect.onVisible": ()=>{
                    if (document.visibilityState === "visible") refresh();
                }
            }["LedgerView.useEffect.onVisible"];
            /* live handoff — the palette fires this when the ledger is already open */ const onReview = {
                "LedgerView.useEffect.onReview": (e)=>{
                    const id = e.detail;
                    if (typeof id === "string") {
                        setReviewForce([]);
                        setReviewSubject(id);
                        refresh();
                    }
                }
            }["LedgerView.useEffect.onReview"];
            const onDrill = {
                "LedgerView.useEffect.onDrill": (e)=>{
                    const id = e.detail;
                    if (typeof id === "string") {
                        setDrillSubject(id);
                        refresh();
                    }
                }
            }["LedgerView.useEffect.onDrill"];
            const onMock = {
                "LedgerView.useEffect.onMock": ()=>{
                    setMockOpen(true);
                    refresh();
                }
            }["LedgerView.useEffect.onMock"];
            const onForge = {
                "LedgerView.useEffect.onForge": ()=>{
                    setForgeOpen(true);
                    refresh();
                }
            }["LedgerView.useEffect.onForge"];
            document.addEventListener("visibilitychange", onVisible);
            window.addEventListener("atlas:review-subject", onReview);
            window.addEventListener("atlas:drill-subject", onDrill);
            window.addEventListener("atlas:mock-open", onMock);
            window.addEventListener("atlas:forge-open", onForge);
            return ({
                "LedgerView.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    document.removeEventListener("visibilitychange", onVisible);
                    window.removeEventListener("atlas:review-subject", onReview);
                    window.removeEventListener("atlas:drill-subject", onDrill);
                    window.removeEventListener("atlas:mock-open", onMock);
                    window.removeEventListener("atlas:forge-open", onForge);
                }
            })["LedgerView.useEffect"];
        }
    }["LedgerView.useEffect"], [
        refresh
    ]);
    const totalAttempts = store?.attempts.length ?? 0;
    const totalAnswered = store?.attempts.reduce((n, a)=>n + a.total, 0) ?? 0;
    const daysPracticed = store?.days.length ?? 0;
    const recent = (store?.attempts ?? []).slice(-10).reverse();
    const dueEverywhere = rows.reduce((n, r)=>n + r.due, 0);
    const readEverywhere = rows.reduce((n, r)=>n + r.read, 0);
    /* per-day attempt counts behind the practice heatmap */ const perDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LedgerView.useMemo[perDay]": ()=>{
            const m = new Map();
            for (const a of store?.attempts ?? []){
                const k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayKeyFor"])(a.at);
                const cur = m.get(k) ?? {
                    a: 0,
                    q: 0
                };
                cur.a += 1;
                cur.q += a.total;
                m.set(k, cur);
            }
            return m;
        }
    }["LedgerView.useMemo[perDay]"], [
        store
    ]);
    /* weak cards exist → pull their wording from the banks once,
     lazily (the ~250KB of bank chunks stay out of the ledger path
     until there is something to say) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LedgerView.useEffect": ()=>{
            if (trouble.length === 0 || troubleTexts) return;
            let alive = true;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$lookup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadQuestionIndex"])().then({
                "LedgerView.useEffect": (idx)=>{
                    if (alive) setTroubleTexts(idx);
                }
            }["LedgerView.useEffect"]);
            return ({
                "LedgerView.useEffect": ()=>{
                    alive = false;
                }
            })["LedgerView.useEffect"];
        }
    }["LedgerView.useEffect"], [
        trouble,
        troubleTexts
    ]);
    /* ---------- your-data panel state ---------- */ const [imp, setImp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        kind: "idle"
    });
    const [dataFlash, setDataFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [eraseArm, setEraseArm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    /* storage safety net — what the browser says we may use */ const [storage, setStorage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ---------- sync-code state ---------- */ const [syncCode, setSyncCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pullCode, setPullCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [syncBusy, setSyncBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [burnArm, setBurnArm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [syncUnavailable, setSyncUnavailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* the code is remembered on this device only — it is a pointer,
     not data; the bundles live behind it on the server */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LedgerView.useEffect": ()=>{
            try {
                const held = window.localStorage.getItem(SYNC_CODE_KEY);
                if (held && SYNC_CODE_RE.test(held)) setSyncCode(held);
            } catch  {
            /* localStorage unavailable — the code just won't be remembered */ }
            if (typeof navigator !== "undefined" && navigator.storage?.estimate) {
                navigator.storage.estimate().then({
                    "LedgerView.useEffect": (est)=>{
                        if (typeof est.usage === "number" && typeof est.quota === "number") {
                            setStorage({
                                usage: est.usage,
                                quota: est.quota
                            });
                        }
                    }
                }["LedgerView.useEffect"]).catch({
                    "LedgerView.useEffect": ()=>{
                    /* best-effort estimate */ }
                }["LedgerView.useEffect"]);
            }
        }
    }["LedgerView.useEffect"], []);
    const onExport = ()=>{
        try {
            const blob = new Blob([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportBackup"])()
            ], {
                type: "application/json"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backupFilename"])();
            a.click();
            URL.revokeObjectURL(url);
            setDataFlash({
                msg: `Backup downloaded — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backupFilename"])()}`,
                tone: "ok"
            });
        } catch  {
            setDataFlash({
                msg: "The download failed — your browser blocked it. Try again.",
                tone: "warn"
            });
        }
    };
    const onFile = async (file)=>{
        if (!file) return;
        try {
            const text = await file.text();
            const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBackup"])(text);
            if (res.ok) {
                setImp({
                    kind: "ready",
                    name: file.name,
                    summary: res.summary,
                    bundle: res.bundle
                });
            } else {
                setImp({
                    kind: "error",
                    message: res.error
                });
            }
        } catch  {
            setImp({
                kind: "error",
                message: "That file could not be read."
            });
        }
    };
    const onImportApply = ()=>{
        if (imp.kind !== "ready" || !imp.bundle || !imp.summary) return;
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBackup"])(imp.bundle);
        const s = imp.summary;
        setImp({
            kind: "idle"
        });
        if (fileRef.current) fileRef.current.value = "";
        refresh();
        if (result.failedKeys.length > 0) {
            /* honesty first: name exactly which stores refused to write */ const msg = failedWritesMsg("", result);
            setDataFlash({
                msg,
                tone: "warn"
            });
            toast({
                variant: "destructive",
                title: "Restore incomplete",
                description: msg
            });
        } else {
            setDataFlash({
                msg: `Restored — ${tallyFor(s)}.`,
                tone: "ok"
            });
        }
    };
    const onErase = ()=>{
        if (!eraseArm) {
            setEraseArm(true);
            window.setTimeout(()=>setEraseArm(false), 4000);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eraseAllStores"])();
        setEraseArm(false);
        setImp({
            kind: "idle"
        });
        if (fileRef.current) fileRef.current.value = "";
        refresh();
        setDataFlash({
            msg: "Every store erased — a fresh start. Export a backup first if you want this memory back.",
            tone: "ok"
        });
    };
    /* ---------- storage safety net ---------- */ const onPersist = async ()=>{
        try {
            const granted = await navigator.storage.persist();
            if (granted) {
                setDataFlash({
                    msg: "Persistent storage granted — the browser is now far less likely to sweep the atlas away under storage pressure.",
                    tone: "ok"
                });
                toast({
                    title: "Persistent storage granted",
                    description: "The atlas is pinned against automatic cleanup."
                });
            } else {
                setDataFlash({
                    msg: "The browser declined persistent storage — cleanup stays in its hands. Regular exports are your safety net.",
                    tone: "warn"
                });
                toast({
                    variant: "destructive",
                    title: "Persistent storage declined",
                    description: "Regular exports are your safety net."
                });
            }
        } catch  {
            setDataFlash({
                msg: "This browser doesn't expose persistent storage — regular exports are your safety net.",
                tone: "warn"
            });
        }
    };
    /* ---------- sync codes ---------- */ const rememberSyncCode = (code)=>{
        setSyncCode(code);
        try {
            if (code) window.localStorage.setItem(SYNC_CODE_KEY, code);
            else window.localStorage.removeItem(SYNC_CODE_KEY);
        } catch  {
        /* not remembered — the reader can regenerate next visit */ }
    };
    const onGenerateCode = ()=>{
        const code = generateSyncCode();
        rememberSyncCode(code);
        setBurnArm(false);
        setDataFlash({
            msg: `Your sync code is ${code} — type it into “pull from the code” on the other device.`,
            tone: "ok"
        });
    };
    const onPush = async ()=>{
        if (!syncCode || syncBusy) return;
        setSyncBusy("push");
        try {
            const res = await fetch("/api/sync", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: syncCode,
                    payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportBackup"])()
                })
            });
            if (res.ok) {
                setSyncUnavailable(false);
                setDataFlash({
                    msg: `Pushed to code ${syncCode} — pull it from any device running the atlas.`,
                    tone: "ok"
                });
                toast({
                    title: "Pushed to the code",
                    description: `${syncCode} now holds your latest backup.`
                });
            } else {
                const data = await res.json().catch(()=>null);
                if (res.status === 503) setSyncUnavailable(true);
                const msg = data?.error ?? "The push failed — try again.";
                setDataFlash({
                    msg,
                    tone: "warn"
                });
                toast({
                    variant: "destructive",
                    title: "Push failed",
                    description: msg
                });
            }
        } catch  {
            const msg = "The push failed — the network dropped. Export a file if you need it now.";
            setDataFlash({
                msg,
                tone: "warn"
            });
            toast({
                variant: "destructive",
                title: "Push failed",
                description: msg
            });
        } finally{
            setSyncBusy(null);
        }
    };
    const onPull = async ()=>{
        const code = pullCode.trim();
        if (!SYNC_CODE_RE.test(code) || syncBusy) return;
        setSyncBusy("pull");
        try {
            const res = await fetch(`/api/sync?code=${encodeURIComponent(code)}`);
            if (res.status === 404) {
                setDataFlash({
                    msg: `Nothing is parked under ${code} yet — push from the other device first.`,
                    tone: "warn"
                });
            } else if (!res.ok) {
                const data = await res.json().catch(()=>null);
                if (res.status === 503) setSyncUnavailable(true);
                const msg = data?.error ?? "The pull failed — try again.";
                setDataFlash({
                    msg,
                    tone: "warn"
                });
                toast({
                    variant: "destructive",
                    title: "Pull failed",
                    description: msg
                });
            } else {
                const data = await res.json();
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBackup"])(typeof data.payload === "string" ? data.payload : "");
                if (!parsed.ok) {
                    const msg = `The code holds a bundle this app can't accept — ${parsed.error}`;
                    setDataFlash({
                        msg,
                        tone: "warn"
                    });
                    toast({
                        variant: "destructive",
                        title: "Pull failed",
                        description: msg
                    });
                } else {
                    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBackup"])(parsed.bundle);
                    refresh();
                    if (result.failedKeys.length > 0) {
                        const msg = failedWritesMsg(`Pulled from ${code} — `, result);
                        setDataFlash({
                            msg,
                            tone: "warn"
                        });
                        toast({
                            variant: "destructive",
                            title: "Restore incomplete",
                            description: msg
                        });
                    } else {
                        setDataFlash({
                            msg: `Pulled from ${code} — ${tallyFor(parsed.summary)}.`,
                            tone: "ok"
                        });
                        toast({
                            title: "Pulled from the code",
                            description: `Restored — ${tallyFor(parsed.summary)}.`
                        });
                    }
                }
            }
        } catch  {
            const msg = "The pull failed — the network dropped. Export a file if you need it now.";
            setDataFlash({
                msg,
                tone: "warn"
            });
            toast({
                variant: "destructive",
                title: "Pull failed",
                description: msg
            });
        } finally{
            setSyncBusy(null);
        }
    };
    const onBurn = async ()=>{
        if (!syncCode || syncBusy) return;
        if (!burnArm) {
            setBurnArm(true);
            window.setTimeout(()=>setBurnArm(false), 4000);
            return;
        }
        setBurnArm(false);
        setSyncBusy("burn");
        const code = syncCode;
        try {
            const res = await fetch(`/api/sync?code=${encodeURIComponent(code)}`, {
                method: "DELETE"
            });
            if (res.ok) {
                rememberSyncCode(null);
                setDataFlash({
                    msg: `Code ${code} burned — nothing is parked under it anymore.`,
                    tone: "ok"
                });
                toast({
                    title: "Code burned",
                    description: `${code} no longer holds any data.`
                });
            } else {
                const data = await res.json().catch(()=>null);
                if (res.status === 503) setSyncUnavailable(true);
                const msg = data?.error ?? "The burn failed — try again.";
                setDataFlash({
                    msg,
                    tone: "warn"
                });
                toast({
                    variant: "destructive",
                    title: "Burn failed",
                    description: msg
                });
            }
        } catch  {
            const msg = "The burn failed — the network dropped. The code still works until it is burned.";
            setDataFlash({
                msg,
                tone: "warn"
            });
            toast({
                variant: "destructive",
                title: "Burn failed",
                description: msg
            });
        } finally{
            setSyncBusy(null);
        }
    };
    /* the daily-goal stepper — ± GOAL_STEP per press, clamped in the store */ const onGoalBump = (delta)=>{
        const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpGoal"])(delta);
        setGoal((prev)=>prev ? {
                ...prev,
                target: g.target
            } : {
                target: g.target,
                done: 0,
                met: false
            });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#070509] pb-20 text-[#f7ecdd]",
        id: "top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Ledger",
                className: "fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-12 w-full max-w-3xl items-center gap-3 rounded-full border border-white/10 bg-[#0a0710]/60 py-2 pl-3 pr-4 shadow-[0_18px_50px_-22px_rgba(0,0,0,.85)] backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onExitAtlas,
                            "aria-label": "Back to the atlas",
                            className: "flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 text-[.68rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition hover:bg-white/[.12]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this),
                                "Atlas"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-[1rem] font-black tracking-tight text-[#f7ecdd]",
                            children: "The Ledger"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this),
                        dueEverywhere > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>openReview("all"),
                            "aria-label": `Review all ${dueEverywhere} due cards across every shelf`,
                            className: "ml-auto flex cursor-pointer items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889] transition hover:bg-[#f59e0b2a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                    lineNumber: 631,
                                    columnNumber: 15
                                }, this),
                                dueEverywhere,
                                " due"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                            lineNumber: 625,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                    lineNumber: 613,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto max-w-3xl px-4 pt-24 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.35
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[.6rem] font-bold uppercase tracking-[.24em] text-[#8d7b63]",
                                children: "progress & mastery — written by your own attempts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display mt-2 text-3xl font-black leading-tight md:text-4xl",
                                children: [
                                    "Every answer leaves a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "atlas-sheen",
                                        children: "mark"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 645,
                                        columnNumber: 35
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 max-w-xl text-[.92rem] leading-relaxed text-[#c9b99f]",
                                children: "The ledger is local-first: exam windows grade your cards on an SM-2 schedule, and this page reports the damage. Nothing leaves your browser."
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Practice summary",
                        className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
                                label: "streak",
                                value: streak === 1 ? "1 day" : `${streak} days`,
                                tone: "#e4674a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck2$3e$__["CalendarCheck2"],
                                label: "days practiced",
                                value: String(daysPracticed),
                                tone: "#f5c889"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
                                label: "attempts",
                                value: String(totalAttempts),
                                tone: "#8fae5d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"],
                                label: "questions faced",
                                value: String(totalAnswered),
                                tone: "#8b5cf6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 658,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 654,
                        columnNumber: 9
                    }, this),
                    goal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Daily goal",
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-x-5 gap-y-4 rounded-2xl border border-white/10 bg-white/[.04] p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalRing, {
                                    done: goal.done,
                                    target: goal.target,
                                    met: goal.met
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                    lineNumber: 665,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display text-[1.05rem] font-black",
                                            children: "Daily goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.84rem] leading-relaxed text-[#a89a86]",
                                            role: "status",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#c9b99f]",
                                                    children: goal.done
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this),
                                                " of ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#c9b99f]",
                                                    children: goal.target
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 78
                                                }, this),
                                                " answers faced today —",
                                                " ",
                                                goal.met ? "goal met, the streak is safe." : "every finished window and drill fills the ring."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    role: "group",
                                    "aria-label": "Adjust the daily goal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onGoalBump(-1),
                                            disabled: goal.target <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOAL_MIN"],
                                            "aria-label": "Lower the daily goal by five",
                                            className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[.05] text-[#e9d7bf] transition hover:bg-white/[.12] disabled:opacity-35",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 681,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                            lineNumber: 674,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-14 text-center font-mono text-[.68rem] font-bold uppercase tracking-[.14em] text-[#c9b99f]",
                                            "aria-live": "polite",
                                            children: [
                                                goal.target,
                                                "/day"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onGoalBump(1),
                                            disabled: goal.target >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOAL_MAX"],
                                            "aria-label": "Raise the daily goal by five",
                                            className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[.05] text-[#e9d7bf] transition hover:bg-white/[.12] disabled:opacity-35",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 693,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                    lineNumber: 673,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                            lineNumber: 664,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 663,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Practice heatmap",
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-xl font-black",
                                children: "Practice heatmap"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 702,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]",
                                children: "The last 17 weeks — one square per day, greener the more you finished."
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$PracticeHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PracticeHeatmap"], {
                                    hits: perDay
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 701,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Per-shelf mastery",
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-x-4 gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-xl font-black",
                                        children: "Shelf by shelf"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[#c9b99f]",
                                                children: readEverywhere
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 716,
                                                columnNumber: 15
                                            }, this),
                                            "/",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$section$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_SECTIONS"],
                                            " chapters read"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openMock,
                                        "aria-label": "Mock exam — compose your own paper from any shelves",
                                        className: "ml-auto flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                className: "h-3.5 w-3.5",
                                                style: {
                                                    color: "#f5c889"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 724,
                                                columnNumber: 15
                                            }, this),
                                            "mock exam"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openDrill("all"),
                                        "aria-label": "Quick drill — a mixed handful from every shelf",
                                        className: "flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "h-3.5 w-3.5",
                                                style: {
                                                    color: "#f5c889"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 733,
                                                columnNumber: 15
                                            }, this),
                                            "quick drill"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 727,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openForge,
                                        "aria-label": "Card Forge — generate AI flashcards from any chapter",
                                        className: "flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"], {
                                                className: "h-3.5 w-3.5",
                                                style: {
                                                    color: "#f5c889"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 742,
                                                columnNumber: 15
                                            }, this),
                                            "card forge"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 736,
                                        columnNumber: 13
                                    }, this),
                                    dueEverywhere > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openReview("all"),
                                        className: "flex items-center gap-1.5 rounded-full border border-[#f59e0b55] bg-[#f59e0b14] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#f5c889] transition hover:bg-[#f59e0b2a]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, this),
                                            "review everything"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-3",
                                children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfCard, {
                                        row: row,
                                        onReview: ()=>openReview(row.subject.id),
                                        onDrill: ()=>openDrill(row.subject.id)
                                    }, row.subject.id, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 758,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this),
                    trouble.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Trouble spots",
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-baseline gap-x-4 gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-xl font-black",
                                        children: "Trouble spots"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 772,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]",
                                        children: "the cards that keep biting — answer them before the exam does"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 773,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 771,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 grid gap-2",
                                children: trouble.map((t)=>{
                                    const subject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find((s)=>s.id === t.subject);
                                    const text = troubleTexts?.get(`${t.subject}:${t.id}`) ?? "Digging up the question…";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            y: 8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.25
                                        },
                                        className: "flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-[#c26d4a26] bg-[#c26d4a0d] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg",
                                                style: {
                                                    background: `${subject?.accent ?? "#f59e0b"}22`,
                                                    color: subject?.accent ?? "#f59e0b"
                                                },
                                                "aria-hidden": true,
                                                children: subject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(subject.icon, {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 34
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 77
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 789,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block line-clamp-2 text-[.82rem] font-bold leading-snug text-[#f0e2c8]",
                                                        children: text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 block font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]",
                                                        children: [
                                                            subject?.short ?? t.subject,
                                                            " · easiness ",
                                                            t.ef.toFixed(2),
                                                            " · ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dueLabel"])(t.due),
                                                            " · last graded",
                                                            " ",
                                                            relDay(t.last)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 798,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 796,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>openReview(t.subject, [
                                                        t.id
                                                    ]),
                                                "aria-label": `Review this card from ${subject?.short ?? t.subject}`,
                                                className: "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.64rem] font-black uppercase tracking-[.14em] transition hover:brightness-125",
                                                style: {
                                                    borderColor: `${subject?.accent ?? "#f59e0b"}55`,
                                                    background: `${subject?.accent ?? "#f59e0b"}14`,
                                                    color: subject?.accent ?? "#f59e0b"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 23
                                                    }, this),
                                                    "review"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 803,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${t.subject}:${t.id}`, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 782,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 777,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 770,
                        columnNumber: 11
                    }, this) : null,
                    snap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Achievements",
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-baseline gap-x-4 gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-xl font-black",
                                        children: "Achievements"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 828,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[#c9b99f]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["earnedCount"])(snap)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 830,
                                                columnNumber: 17
                                            }, this),
                                            "/",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BADGES"].length,
                                            " unlocked — derived from your stores, never stored"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 829,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 827,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BADGES"].map((b)=>{
                                    const earned = b.test(snap);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: `rounded-xl border p-3.5 ${earned ? "border-white/15 bg-white/[.05]" : "border-white/[.06] bg-white/[.02] opacity-55"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-7 w-7 items-center justify-center rounded-lg",
                                                style: earned ? {
                                                    background: `${b.tone}1f`,
                                                    color: b.tone
                                                } : {
                                                    background: "#ffffff0d",
                                                    color: "#77685a"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(b.icon, {
                                                    className: "h-4 w-4",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 841,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[.8rem] font-black leading-tight text-[#f0e2c8]",
                                                children: [
                                                    b.title,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: [
                                                            " — ",
                                                            earned ? "unlocked" : "locked"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 847,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-[.68rem] leading-snug text-[#8d7b63]",
                                                children: b.hint
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 851,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, b.id, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 837,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 833,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 826,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Recent attempts",
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-xl font-black",
                                children: "Recent attempts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 861,
                                columnNumber: 11
                            }, this),
                            recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-2xl border border-white/10 bg-white/[.04] p-5 text-[.86rem] leading-relaxed text-[#a89a86]",
                                children: "No attempts yet. Open any shelf, press a “Test my knowledge” window, and your first report lands here — correct answers seed the review schedule automatically."
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 863,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 grid gap-2",
                                children: recent.map((a, i)=>{
                                    const subject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find((s)=>s.id === a.subject);
                                    const isReview = a.group.startsWith("review");
                                    const isDrill = a.group === "drill";
                                    const isMock = a.group === "mock";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            y: 8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.25,
                                            delay: i * 0.03
                                        },
                                        className: "flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[.04] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg",
                                                style: {
                                                    background: `${subject?.accent ?? "#f59e0b"}22`,
                                                    color: subject?.accent ?? "#f59e0b"
                                                },
                                                "aria-hidden": true,
                                                children: subject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(subject.icon, {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 34
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 77
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 882,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-[.82rem] font-bold text-[#f0e2c8]",
                                                        children: a.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]",
                                                        children: [
                                                            subject?.short ?? a.subject,
                                                            " · ",
                                                            isReview ? "spaced review" : isDrill ? "quick drill" : isMock ? "mock exam" : a.group,
                                                            " · ",
                                                            relDay(a.at),
                                                            " ·",
                                                            " ",
                                                            fmtSeconds(a.seconds)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 889,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full px-2.5 py-1 text-[.7rem] font-extrabold",
                                                style: a.pct >= 60 ? {
                                                    background: "#8fae5d22",
                                                    color: "#a9c977"
                                                } : a.pct >= 35 ? {
                                                    background: "#e0a45e22",
                                                    color: "#e0a45e"
                                                } : {
                                                    background: "#c26d4a22",
                                                    color: "#d98a6b"
                                                },
                                                children: [
                                                    a.correct,
                                                    "/",
                                                    a.total,
                                                    " · ",
                                                    a.pct,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 896,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${a.at}-${i}`, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 875,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 868,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 860,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Your data",
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-xl font-black",
                                children: "Your data"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 917,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]",
                                children: "The whole atlas memory — review schedule, attempt ledger, chapters read, daily goal — lives in this browser and nowhere else. One JSON file carries it anywhere."
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 918,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5",
                                children: [
                                    dataFlash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "status",
                                        className: `mb-4 rounded-xl border px-4 py-3 text-[.8rem] font-semibold leading-relaxed ${dataFlash.tone === "warn" ? "border-[#c26d4a40] bg-[#c26d4a14] text-[#d98a6b]" : "border-[#8fae5d40] bg-[#8fae5d14] text-[#c4dba4]"}`,
                                        children: dataFlash.msg
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 924,
                                        columnNumber: 15
                                    }, this) : null,
                                    imp.kind === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "alert",
                                        className: "mb-4 rounded-xl border border-[#c26d4a40] bg-[#c26d4a14] px-4 py-3 text-[.8rem] font-semibold leading-relaxed text-[#d98a6b]",
                                        children: imp.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 937,
                                        columnNumber: 15
                                    }, this) : null,
                                    imp.kind === "ready" && imp.summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 rounded-xl border border-[#f5c88940] bg-[#f5c88910] p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.84rem] font-bold text-[#f0e2c8]",
                                                children: [
                                                    imp.name,
                                                    imp.summary.exportedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 font-mono text-[.6rem] font-normal uppercase tracking-[.14em] text-[#8d7b63]",
                                                        children: [
                                                            "exported ",
                                                            relDay(Date.parse(imp.summary.exportedAt))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 944,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[.78rem] leading-relaxed text-[#c9b99f]",
                                                children: [
                                                    imp.summary.cards,
                                                    " scheduled card",
                                                    imp.summary.cards === 1 ? "" : "s",
                                                    " · ",
                                                    imp.summary.attempts,
                                                    " attempt",
                                                    imp.summary.attempts === 1 ? "" : "s",
                                                    " ·",
                                                    " ",
                                                    imp.summary.sections,
                                                    " chapter",
                                                    imp.summary.sections === 1 ? "" : "s",
                                                    " read · ",
                                                    imp.summary.days,
                                                    " practice day",
                                                    imp.summary.days === 1 ? "" : "s",
                                                    imp.summary.labCells > 0 ? ` · ${imp.summary.labCells} Python Lab cell${imp.summary.labCells === 1 ? "" : "s"}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[.78rem] font-semibold text-[#f5c889]",
                                                children: "Importing replaces everything currently in this browser."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onImportApply,
                                                        className: "flex items-center gap-1.5 rounded-full bg-[#8fae5d] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#1c2408] transition hover:brightness-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Replace my data"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setImp({
                                                                kind: "idle"
                                                            });
                                                            if (fileRef.current) fileRef.current.value = "";
                                                        },
                                                        className: "rounded-full border border-white/15 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.1]",
                                                        children: "Keep mine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 969,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 960,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 943,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onExport,
                                                className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "h-4 w-4",
                                                        style: {
                                                            color: "#f5c889"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Export backup"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 984,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>fileRef.current?.click(),
                                                className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "h-4 w-4",
                                                        style: {
                                                            color: "#a9c977"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 997,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Import backup…"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 992,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onErase,
                                                "aria-label": eraseArm ? "Confirm: erase every store" : "Erase every store — first press arms, second press erases",
                                                className: `ml-auto flex items-center gap-2 rounded-full border px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] transition ${eraseArm ? "border-[#c26d4a] bg-[#c26d4a] text-[#fff1e8]" : "border-[#c26d4a40] bg-[#c26d4a0d] text-[#d98a6b] hover:bg-[#c26d4a1f]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 1010,
                                                        columnNumber: 17
                                                    }, this),
                                                    eraseArm ? "sure? click again" : "erase everything"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1000,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 983,
                                        columnNumber: 13
                                    }, this),
                                    eraseArm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.74rem] font-semibold leading-relaxed text-[#d98a6b]",
                                        children: "Everything goes — including your Python Lab notebooks. Export first if you want this memory back."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 flex items-center gap-2 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 15
                                            }, this),
                                            "export before switching laptops · import restores the whole schedule"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1019,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 17
                                                    }, this),
                                                    storage ? `${fmtBytes(storage.usage)} of ${fmtBytes(storage.quota)} used` : "storage estimate unavailable here"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1024,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>void onPersist(),
                                                "aria-label": "Ask the browser to keep the atlas from being cleared under storage pressure",
                                                className: "ml-auto flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[.62rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        className: "h-3.5 w-3.5",
                                                        style: {
                                                            color: "#a9c977"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Request persistent storage"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 922,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-3.5 w-3.5",
                                                style: {
                                                    color: "#f5c889"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 15
                                            }, this),
                                            "Sync across devices"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]",
                                        children: "One code moves your ledger, schedule, forged cards and progress between devices. Anyone with the code can pull your data — treat it like a password."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]",
                                        children: "sync runs through the app's backend — export/import works fully offline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 13
                                    }, this),
                                    syncUnavailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "alert",
                                        className: "mt-3 rounded-xl border border-[#c26d4a40] bg-[#c26d4a14] px-4 py-3 text-[.8rem] font-semibold leading-relaxed text-[#d98a6b]",
                                        children: "Sync storage isn't available on this deployment — export/import still works."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap items-center gap-2.5",
                                        children: syncCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-label": "Your sync code",
                                                    className: "rounded-xl border border-[#f5c88940] bg-[#f5c88910] px-4 py-2 font-mono text-lg font-bold tracking-[.3em] text-[#f5c889]",
                                                    children: syncCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: onGenerateCode,
                                                    "aria-label": "Generate a fresh sync code",
                                                    className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-[.62rem] font-black uppercase tracking-[.14em] text-[#c9b99f] transition hover:bg-white/[.1]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                            lineNumber: 1078,
                                                            columnNumber: 21
                                                        }, this),
                                                        "new code"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 1072,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>void onPush(),
                                                    disabled: syncBusy !== null,
                                                    className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12] disabled:cursor-not-allowed disabled:opacity-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudUpload$3e$__["CloudUpload"], {
                                                            className: "h-4 w-4",
                                                            style: {
                                                                color: "#a9c977"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 21
                                                        }, this),
                                                        syncBusy === "push" ? "pushing…" : "Push my data to the code"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 1081,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>void onBurn(),
                                                    disabled: syncBusy !== null,
                                                    "aria-label": burnArm ? "Confirm: burn this code — nothing will be parked under it anymore" : "Burn this code — first press arms, second press burns",
                                                    className: `ml-auto flex items-center gap-2 rounded-full border px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] transition disabled:cursor-not-allowed disabled:opacity-50 ${burnArm ? "border-[#c26d4a] bg-[#c26d4a] text-[#fff1e8]" : "border-[#c26d4a40] bg-[#c26d4a0d] text-[#d98a6b] hover:bg-[#c26d4a1f]"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                            lineNumber: 1101,
                                                            columnNumber: 21
                                                        }, this),
                                                        burnArm ? "sure? click again" : "Burn this code"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onGenerateCode,
                                            className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "h-4 w-4",
                                                    style: {
                                                        color: "#f5c889"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                    lineNumber: 1111,
                                                    columnNumber: 19
                                                }, this),
                                                "Generate a sync code"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                            lineNumber: 1106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "sr-only",
                                                htmlFor: "sync-pull-code",
                                                children: "A sync code to pull data from"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "sync-pull-code",
                                                value: pullCode,
                                                onChange: (e)=>setPullCode(formatSyncInput(e.target.value)),
                                                placeholder: "type a code to pull",
                                                maxLength: 6,
                                                autoCapitalize: "characters",
                                                autoComplete: "off",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                className: "h-10 w-48 rounded-full border border-white/15 bg-white/[.05] px-4 font-mono text-[.8rem] font-bold uppercase tracking-[.24em] text-[#f0e2c8] placeholder:font-sans placeholder:text-[.66rem] placeholder:uppercase placeholder:tracking-[.14em] placeholder:text-[#5d5142] focus:border-[#f5c88960] focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>void onPull(),
                                                disabled: !SYNC_CODE_RE.test(pullCode) || syncBusy !== null,
                                                className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12] disabled:cursor-not-allowed disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudDownload$3e$__["CloudDownload"], {
                                                        className: "h-4 w-4",
                                                        style: {
                                                            color: "#f5c889"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                        lineNumber: 1139,
                                                        columnNumber: 17
                                                    }, this),
                                                    syncBusy === "pull" ? "pulling…" : "Pull from the code"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                                lineNumber: 1133,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1041,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 916,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileRef,
                        type: "file",
                        accept: "application/json,.json",
                        className: "sr-only",
                        "aria-hidden": true,
                        tabIndex: -1,
                        onChange: (e)=>{
                            void onFile(e.target.files?.[0]);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-10 text-center font-mono text-[.6rem] uppercase tracking-[.2em] text-[#5d5142]",
                        children: "the ledger keeps itself — every finished window writes its own row"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            reviewSubject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewWindow, {
                subject: reviewSubject,
                forceIds: reviewForce,
                onClose: ()=>{
                    setReviewSubject(null);
                    setReviewForce([]);
                    refresh();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1164,
                columnNumber: 9
            }, this) : null,
            drillSubject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrillWindow, {
                subject: drillSubject,
                onClose: ()=>{
                    setDrillSubject(null);
                    refresh();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1176,
                columnNumber: 9
            }, this) : null,
            mockOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MockWindow, {
                onClose: ()=>{
                    setMockOpen(false);
                    refresh();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1186,
                columnNumber: 9
            }, this) : null,
            forgeOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$CardForge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardForge"], {
                onClose: ()=>{
                    setForgeOpen(false);
                    refresh();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1195,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/LedgerView.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
_s(LedgerView, "njpnVw8LBwM9zbikYJb7Glpi3XY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c3 = LedgerView;
/* ---------------- pieces ---------------- */ function StatCard({ icon: Icon, label, value, tone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-white/[.04] p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center gap-2 font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-3.5 w-3.5",
                        style: {
                            color: tone
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1222,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display mt-2 text-2xl font-black text-[#f7ecdd]",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/LedgerView.tsx",
        lineNumber: 1220,
        columnNumber: 5
    }, this);
}
_c4 = StatCard;
function ShelfCard({ row, onReview, onDrill }) {
    const { subject, stats, mastery, due, read, readTotal } = row;
    const accuracy = stats.totalAnswered > 0 ? Math.round(stats.totalCorrect / stats.totalAnswered * 100) : null;
    const started = mastery.total - mastery.unseen > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-white/[.04] p-5 transition-colors hover:border-white/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-3 gap-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                        style: {
                            background: `${subject.accent}1f`,
                            color: subject.accent
                        },
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(subject.icon, {
                            className: "h-4.5 w-4.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                            lineNumber: 1242,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.95rem] font-black leading-tight text-[#f7ecdd]",
                                children: subject.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[.6rem] uppercase tracking-[.16em] text-[#8d7b63]",
                                children: [
                                    "shelf ",
                                    subject.shelf
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onDrill,
                                "aria-label": `Quick drill ${subject.title} — a mixed handful, no schedule needed`,
                                className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[.66rem] font-black uppercase tracking-[.14em] text-[#c9b99f] transition hover:bg-white/[.1]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-3.5 w-3.5",
                                        style: {
                                            color: subject.accent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1255,
                                        columnNumber: 13
                                    }, this),
                                    "drill"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1249,
                                columnNumber: 11
                            }, this),
                            due > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onReview,
                                className: "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.66rem] font-black uppercase tracking-[.14em] transition hover:brightness-125",
                                style: {
                                    borderColor: `${subject.accent}55`,
                                    background: `${subject.accent}14`,
                                    color: subject.accent
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1265,
                                        columnNumber: 15
                                    }, this),
                                    "review ",
                                    due,
                                    " due"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1259,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[.58rem] font-bold uppercase tracking-[.14em] text-[#77685a]",
                                children: [
                                    started ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 26
                                    }, this) : null,
                                    started ? "schedule clear" : "no cards yet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8d7b63]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "h-3 w-3",
                                        style: {
                                            color: subject.accent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1281,
                                        columnNumber: 13
                                    }, this),
                                    "chapters read"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#c9b99f]",
                                        children: read
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1285,
                                        columnNumber: 13
                                    }, this),
                                    " / ",
                                    readTotal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[.06]",
                        role: "img",
                        "aria-label": `Reading progress: ${read} of ${readTotal} chapters read`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: `${Math.min(100, read / Math.max(1, readTotal) * 100)}%`,
                                background: subject.accent
                            },
                            className: "block h-full transition-[width] duration-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/LedgerView.tsx",
                            lineNumber: 1293,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-2.5 w-full overflow-hidden rounded-full bg-white/[.06]",
                        role: "img",
                        "aria-label": `Mastery: ${mastery.mastered} mastered, ${mastery.learning} learning, ${mastery.review} weak, ${mastery.unseen} unseen of ${mastery.total}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Seg, {
                                pct: mastery.mastered / Math.max(1, mastery.total) * 100,
                                color: "#8fae5d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Seg, {
                                pct: mastery.learning / Math.max(1, mastery.total) * 100,
                                color: "#d9a441"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Seg, {
                                pct: mastery.review / Math.max(1, mastery.total) * 100,
                                color: "#c26d4a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8d7b63]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "mastery ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#c9b99f]",
                                        children: [
                                            mastery.pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1313,
                                        columnNumber: 21
                                    }, this),
                                    " (",
                                    mastery.mastered,
                                    "/",
                                    mastery.total,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "accuracy",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#c9b99f]",
                                        children: accuracy === null ? "—" : `${accuracy}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                        lineNumber: 1317,
                                        columnNumber: 13
                                    }, this),
                                    stats.attempts > 0 ? ` · best ${stats.bestPct}% · ${stats.attempts} attempt${stats.attempts === 1 ? "" : "s"}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                                lineNumber: 1315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/LedgerView.tsx",
        lineNumber: 1235,
        columnNumber: 5
    }, this);
}
_c5 = ShelfCard;
function Seg({ pct, color }) {
    return pct <= 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            width: `${pct}%`,
            background: color
        },
        className: "block h-full"
    }, void 0, false, {
        fileName: "[project]/src/components/atlas/LedgerView.tsx",
        lineNumber: 1327,
        columnNumber: 28
    }, this);
}
_c6 = Seg;
/* the daily-goal ring — progress toward today's target */ function GoalRing({ done, target, met }) {
    const R = 26;
    const C = 2 * Math.PI * R;
    const p = Math.max(0, Math.min(1, target > 0 ? done / target : 0));
    const tone = met ? "#8fae5d" : "#f5c889";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-16 w-16 shrink-0",
        role: "img",
        "aria-label": `Daily goal: ${done} of ${target} answers today${met ? " — goal met" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 64 64",
                className: "h-16 w-16 -rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: R,
                        fill: "none",
                        stroke: "#ffffff14",
                        strokeWidth: "5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: R,
                        fill: "none",
                        stroke: tone,
                        strokeWidth: "5",
                        strokeLinecap: "round",
                        strokeDasharray: C,
                        strokeDashoffset: C * (1 - p),
                        style: {
                            transition: "stroke-dashoffset .6s ease, stroke .3s ease"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/LedgerView.tsx",
                        lineNumber: 1340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display absolute inset-0 flex items-center justify-center text-[.95rem] font-black",
                style: {
                    color: met ? "#c4dba4" : "#f7ecdd"
                },
                children: done
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/LedgerView.tsx",
                lineNumber: 1353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/LedgerView.tsx",
        lineNumber: 1337,
        columnNumber: 5
    }, this);
}
_c7 = GoalRing;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ReviewWindow");
__turbopack_context__.k.register(_c1, "DrillWindow");
__turbopack_context__.k.register(_c2, "MockWindow");
__turbopack_context__.k.register(_c3, "LedgerView");
__turbopack_context__.k.register(_c4, "StatCard");
__turbopack_context__.k.register(_c5, "ShelfCard");
__turbopack_context__.k.register(_c6, "Seg");
__turbopack_context__.k.register(_c7, "GoalRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/LedgerView.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/atlas/LedgerView.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_e553485b._.js.map