(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/lib/drill.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   QUICK DRILL — a low-friction practice sampler.

   Exam windows are formal (timers, full banks, pen & paper);
   spaced review only fires when cards are already due. The
   drill sits between the two: it grabs a small mixed handful
   of questions — due cards first, then the shaky ones, then
   fresh questions the schedule has never seen — so practice
   can start cold, in one click, from the ledger or ⌘K.

   Selection is weighted, never exhaustive (the schedule and
   the exam windows stay the source of truth):

     1. due      — most overdue cards, capped at 8
     2. shaky    — fragile cards pulled forward (low easiness
                   or a miss on the last grade), capped at 4
     3. new      — unseen questions, shuffled (seeds the SM-2
                   schedule instead of waiting for an exam)
     4. fill     — random seen-healthy cards to top the dozen

   AI-forged cards (lib/custom-cards.ts) join the same tiers —
   due customs, then shaky customs, then fresh customs ride
   ahead of the bank picks inside each tier, so a deck forged
   from tonight's chapter shows up in the very next drill.

   Banks are dynamically imported here (one chunk per shelf),
   so the ledger chunk stays light until a drill actually
   starts. Cross-shelf picks namespace ids ("stm:f3") exactly
   like the mixed review sessions, so grading lands on the
   right shelf's schedule.
   ============================================================ */ __turbopack_context__.s([
    "DRILL_MAX",
    ()=>DRILL_MAX,
    "buildDrill",
    ()=>buildDrill,
    "deckSummary",
    ()=>deckSummary,
    "reasonLabel",
    ()=>reasonLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/custom-cards.ts [app-client] (ecmascript)");
;
;
const DRILL_MAX = 12;
const DUE_CAP = 8;
const SHAKY_CAP = 4;
/** each shelf's bank map, one dynamic chunk per subject
 *  (mirrors the loader table in ReviewWindow / question-lookup) */ const BANK_LOADERS = {
    foc: ()=>__turbopack_context__.A("[project]/src/components/notes/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EXAM_BANKS),
    atb: ()=>__turbopack_context__.A("[project]/src/components/atb/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.ATB_EXAM_BANKS),
    fa: ()=>__turbopack_context__.A("[project]/src/components/fa/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.FA_EXAM_BANKS),
    ebh: ()=>__turbopack_context__.A("[project]/src/components/ebh/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EBH_EXAM_BANKS),
    stm: ()=>__turbopack_context__.A("[project]/src/components/stm/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.STM_EXAM_BANKS)
};
/** easiness below which a card counts as shaky (same fragile line as sm2.ts) */ const FRAGILE_EF = 2.1;
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
/** a card is shaky when its last grade was a miss or its easiness sank */ function isShaky(card) {
    return card.reps === 0 && card.interval === 0 || card.ef < FRAGILE_EF;
}
/** classify one card row by the same rules the banks use */ function classify(card, now) {
    if (!card || card.last <= 0) return 2;
    if (card.due <= now) return 0;
    if (isShaky(card)) return 1;
    return 3;
}
/** the forged-card candidates for this drill (shelf-filtered),
 *  classified against the same schedule the banks read */ function customCandidates(subject, isAll, store, now) {
    const out = [];
    for (const c of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCustomCards"])()){
        if (!isAll && c.shelfId !== subject) continue;
        const card = store[c.shelfId]?.[c.id];
        out.push({
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customToQuestion"])(c),
            sid: c.shelfId,
            card,
            cls: classify(card, now)
        });
    }
    return out;
}
async function buildDrill(subject, now = Date.now()) {
    const isAll = subject === "all";
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSm2"])();
    const customs = customCandidates(subject, isAll, store, now);
    /* load the shelf (or every shelf) */ const maps = [];
    if (isAll) {
        await Promise.all(Object.entries(BANK_LOADERS).map(async ([sid, loader])=>{
            maps.push([
                sid,
                await loader()
            ]);
        }));
    } else {
        const loader = BANK_LOADERS[subject];
        maps.push([
            subject,
            loader ? await loader() : {}
        ]);
    }
    /* classify every question on every contributing shelf */ const candidates = [];
    let shelves = 0;
    for (const [sid, bankMap] of maps){
        const rows = store[sid] ?? {};
        let contributed = false;
        for (const group of Object.values(bankMap)){
            for (const q of group.questions){
                const card = rows[q.id];
                const cls = classify(card, now);
                candidates.push({
                    q,
                    sid,
                    card,
                    cls
                });
                contributed = true;
            }
        }
        if (contributed) shelves += 1;
    }
    /* forged cards ride ahead of the bank picks inside every tier:
     due customs first (most overdue first), then shaky customs,
     then fresh customs — the bank logic fills whatever is left */ const byDue = (a, b)=>(a.card?.due ?? 0) - (b.card?.due ?? 0);
    const byEf = (a, b)=>(a.card?.ef ?? 2.5) - (b.card?.ef ?? 2.5);
    const due = [
        ...customs.filter((c)=>c.cls === 0).sort(byDue),
        ...candidates.filter((c)=>c.cls === 0).sort(byDue)
    ].slice(0, DUE_CAP);
    /* fragile cards pulled forward, weakest easiness first — but never
     crowd out every due card: at most SHAKY_CAP of them */ const shakyPicked = [
        ...customs.filter((c)=>c.cls === 1).sort(byEf),
        ...candidates.filter((c)=>c.cls === 1).sort(byEf)
    ].slice(0, SHAKY_CAP);
    const unseen = shuffled(customs.filter((c)=>c.cls === 2)).concat(shuffled(candidates.filter((c)=>c.cls === 2)));
    const healthy = shuffled(customs.filter((c)=>c.cls === 3)).concat(shuffled(candidates.filter((c)=>c.cls === 3)));
    const rest = DRILL_MAX - due.length - shakyPicked.length;
    const unseenPicked = unseen.slice(0, Math.max(0, rest));
    const restAfterNew = DRILL_MAX - due.length - shakyPicked.length - unseenPicked.length;
    const fillPicked = restAfterNew > 0 ? healthy.slice(0, restAfterNew) : [];
    /* interleave: due, then shaky, then new, then fill — a varied deck
     beats a sorted one (all-due streaks feel like a second exam) */ const deck = [];
    const push = (list, reason, isAllShelves)=>{
        for (const c of list){
            deck.push(isAllShelves ? {
                ...c.q,
                id: `${c.sid}:${c.q.id}`,
                srcId: c.q.id,
                subject: c.sid,
                reason
            } : {
                ...c.q,
                reason
            });
        }
    };
    push(due, "due", isAll);
    push(shakyPicked, "shaky", isAll);
    push(unseenPicked, "new", isAll);
    push(fillPicked, "fill", isAll);
    return {
        cards: deck.slice(0, DRILL_MAX),
        picked: Math.min(deck.length, DRILL_MAX),
        counts: {
            due: due.length,
            shaky: shakyPicked.length,
            new: unseenPicked.length,
            fill: fillPicked.length
        },
        shelves
    };
}
function deckSummary(counts) {
    const parts = [];
    if (counts.due > 0) parts.push(`${counts.due} due`);
    if (counts.shaky > 0) parts.push(`${counts.shaky} tricky`);
    if (counts.new > 0) parts.push(`${counts.new} new`);
    if (counts.fill > 0) parts.push(`${counts.fill} mixed`);
    return parts.join(" · ");
}
function reasonLabel(r) {
    return r === "due" ? "due card" : r === "shaky" ? "tricky card" : r === "new" ? "new card" : "mixed in";
}
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
"[project]/src/components/notes/DrillWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrillWindow",
    ()=>DrillWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   QUICK DRILL — instant-feedback practice, one card at a time.

   The third way to practice, next to the exam windows (formal,
   timed, full banks) and spaced review (due cards only). A
   drill needs no schedule and no formality: it opens cold,
   deals a mixed handful from lib/drill.ts, and grades every
   answer the moment you give it.

     · MCQ        — tap an option, know instantly (SM-2: 5 / 2)
     · everything else — think, reveal the model answer, then
       self-check honestly (SM-2: 3 / 1, same contract as the
       exam engine's self-check)

   Each answer writes straight into the shelf's SM-2 schedule,
   and finishing appends one ledger row per shelf answered —
   so a drill counts toward the streak, the daily goal and the
   heatmap exactly like any other window. No timer, no drafts:
   a drill is quick by definition.

   Cross-shelf decks carry subject/srcId on every card (the
   same convention as mixed review sessions) so grades land on
   the right shelf's schedule.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
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
/* paper-styled labels per question type (drills are neutral — one deck, one look) */ const TYPE_LABEL = {
    mcq: "Pick an answer",
    output: "Write the output",
    short: "Recall the answer",
    code: "Write the code"
};
const REASON_STYLE = {
    due: {
        bg: "#fdeecd",
        color: "#92400e"
    },
    shaky: {
        bg: "#fdeaea",
        color: "#8c2f2f"
    },
    new: {
        bg: "#eef4dd",
        color: "#44621d"
    },
    fill: {
        bg: "#f3e8d2",
        color: "#6f5438"
    }
};
function DrillWindow({ subject, onClose }) {
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [graded, setGraded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    /* reveal is separate from grading — peeking must never mark a card */ const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const loggedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isAll = subject === "all";
    const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DrillWindow.useMemo[meta]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find({
                "DrillWindow.useMemo[meta]": (s)=>s.id === subject
            }["DrillWindow.useMemo[meta]"])
    }["DrillWindow.useMemo[meta]"], [
        subject
    ]);
    const label = isAll ? "the whole atlas" : meta?.short ?? subject;
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(true);
    /* deal a fresh deck */ const deal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrillWindow.useCallback[deal]": ()=>{
            let alive = true;
            setSession(null);
            setFailed(false);
            setIdx(0);
            setGraded({});
            setRevealed({});
            setFinished(false);
            startedRef.current = Date.now();
            loggedRef.current = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDrill"])(subject).then({
                "DrillWindow.useCallback[deal]": (s)=>{
                    if (alive) setSession(s);
                }
            }["DrillWindow.useCallback[deal]"]).catch({
                "DrillWindow.useCallback[deal]": ()=>{
                    if (alive) setFailed(true);
                }
            }["DrillWindow.useCallback[deal]"]);
            return ({
                "DrillWindow.useCallback[deal]": ()=>{
                    alive = false;
                }
            })["DrillWindow.useCallback[deal]"];
        }
    }["DrillWindow.useCallback[deal]"], [
        subject
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrillWindow.useEffect": ()=>deal()
    }["DrillWindow.useEffect"], [
        deal
    ]);
    /* scroll lock */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrillWindow.useEffect": ()=>{
            document.body.style.overflow = "hidden";
            return ({
                "DrillWindow.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["DrillWindow.useEffect"];
        }
    }["DrillWindow.useEffect"], []);
    const card = session?.cards[idx];
    const grade = card ? graded[card.id] : undefined;
    const correctCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DrillWindow.useMemo[correctCount]": ()=>Object.values(graded).filter({
                "DrillWindow.useMemo[correctCount]": (g)=>g.status === "correct"
            }["DrillWindow.useMemo[correctCount]"]).length
    }["DrillWindow.useMemo[correctCount]"], [
        graded
    ]);
    const answeredCount = Object.keys(graded).length;
    const answerMCQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrillWindow.useCallback[answerMCQ]": (i)=>{
            if (!card || graded[card.id]) return;
            const ok = i === card.answer;
            setGraded({
                "DrillWindow.useCallback[answerMCQ]": (prev)=>({
                        ...prev,
                        [card.id]: {
                            status: ok ? "correct" : "wrong",
                            chosen: i
                        }
                    })
            }["DrillWindow.useCallback[answerMCQ]"]);
            // first-try MCQ answers are trusted fully (5); misses reset the card (2)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeQuestion"])(card.subject ?? subject, card.srcId ?? card.id, ok ? 5 : 2);
        }
    }["DrillWindow.useCallback[answerMCQ]"], [
        card,
        graded,
        subject
    ]);
    const reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrillWindow.useCallback[reveal]": ()=>{
            if (!card) return;
            setRevealed({
                "DrillWindow.useCallback[reveal]": (prev)=>prev[card.id] ? prev : {
                        ...prev,
                        [card.id]: true
                    }
            }["DrillWindow.useCallback[reveal]"]);
        }
    }["DrillWindow.useCallback[reveal]"], [
        card
    ]);
    const selfCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrillWindow.useCallback[selfCheck]": (ok)=>{
            if (!card || graded[card.id]) return;
            setGraded({
                "DrillWindow.useCallback[selfCheck]": (prev)=>({
                        ...prev,
                        [card.id]: {
                            status: ok ? "correct" : "wrong"
                        }
                    })
            }["DrillWindow.useCallback[selfCheck]"]);
            // the model answer was visible — grade honestly but trust less
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeQuestion"])(card.subject ?? subject, card.srcId ?? card.id, ok ? 3 : 1);
        }
    }["DrillWindow.useCallback[selfCheck]"], [
        card,
        graded,
        subject
    ]);
    const finish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrillWindow.useCallback[finish]": ()=>{
            setFinished({
                "DrillWindow.useCallback[finish]": (f)=>{
                    if (f || loggedRef.current) return f;
                    loggedRef.current = true;
                    const seconds = Math.max(0, Math.round((Date.now() - startedRef.current) / 1000));
                    const cards = session?.cards ?? [];
                    const groups = new Map();
                    for (const c of cards){
                        const g = graded[c.id];
                        if (!g) continue;
                        const subj = c.subject ?? subject;
                        const row = groups.get(subj) ?? {
                            c: 0,
                            t: 0
                        };
                        row.t += 1;
                        if (g.status === "correct") row.c += 1;
                        groups.set(subj, row);
                    }
                    for (const [subj, row] of groups){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAttempt"])({
                            subject: subj,
                            group: "drill",
                            title: isAll ? "Quick drill — the whole atlas" : `Quick drill — ${meta?.short ?? subject}`,
                            correct: row.c,
                            total: row.t,
                            pct: Math.round(row.c / Math.max(1, row.t) * 100),
                            seconds
                        });
                    }
                    return true;
                }
            }["DrillWindow.useCallback[finish]"]);
        }
    }["DrillWindow.useCallback[finish]"], [
        graded,
        session,
        subject,
        isAll,
        meta
    ]);
    const advance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrillWindow.useCallback[advance]": ()=>{
            if (!session) return;
            if (idx < session.cards.length - 1) setIdx(idx + 1);
            else finish();
        }
    }["DrillWindow.useCallback[advance]"], [
        session,
        idx,
        finish
    ]);
    /* keyboard flow — 1–4 answer an MCQ, ↵ reveals / advances / finishes,
     Escape closes. Focused buttons keep their own Enter ("press"). */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrillWindow.useEffect": ()=>{
            const onKey = {
                "DrillWindow.useEffect.onKey": (e)=>{
                    const t = e.target;
                    if (e.key === "Escape" && !(t instanceof HTMLTextAreaElement)) {
                        onClose();
                        return;
                    }
                    if (finished || !card || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
                    if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return;
                    if (t instanceof HTMLButtonElement || t instanceof HTMLAnchorElement || t instanceof HTMLSelectElement) return;
                    if (e.key === "Enter") {
                        if (e.repeat) return;
                        const isMcq = card.type === "mcq";
                        const isGraded = Boolean(graded[card.id]);
                        if (!isMcq && !isGraded) {
                            reveal();
                        } else if (isGraded) {
                            advance();
                        }
                        return;
                    }
                    if (e.repeat) return;
                    const n = Number(e.key);
                    if (!Number.isInteger(n) || n < 1 || n > 4) return;
                    if (card.type !== "mcq" || graded[card.id]) return;
                    if (n <= (card.options?.length ?? 0)) answerMCQ(n - 1);
                }
            }["DrillWindow.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "DrillWindow.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["DrillWindow.useEffect"];
        }
    }["DrillWindow.useEffect"], [
        finished,
        card,
        graded,
        answerMCQ,
        reveal,
        advance,
        onClose
    ]);
    /* ---------------- non-deck states ---------------- */ if (failed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrillShell, {
            label: label,
            onClose: onClose,
            shellRef: shellRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[.9rem] font-semibold text-[#8c2f2f]",
                children: "The drill could not load its question bank. Check the connection and try again."
            }, void 0, false, {
                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/DrillWindow.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrillShell, {
            label: label,
            onClose: onClose,
            shellRef: shellRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "h-8 w-8 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.7rem] font-black uppercase tracking-[.22em] text-[#8a6d4f]",
                        children: "Shuffling the deck…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/DrillWindow.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, this);
    }
    if (session.cards.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrillShell, {
            label: label,
            onClose: onClose,
            shellRef: shellRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        className: "mx-auto h-8 w-8 text-[#b45309]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display mt-3 text-xl font-bold text-[#2b1d10]",
                        children: "Nothing to drill — the banks are empty."
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "exam-btn exam-btn-primary mt-5",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/DrillWindow.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this);
    }
    /* ---------------- results view ---------------- */ if (finished) {
        const total = session.cards.length;
        const pct = Math.round(correctCount / Math.max(1, answeredCount) * 100);
        const rows = new Map();
        for (const c of session.cards){
            const g = graded[c.id];
            if (!g) continue;
            const subj = c.subject ?? subject;
            const row = rows.get(subj) ?? {
                c: 0,
                t: 0
            };
            row.t += 1;
            if (g.status === "correct") row.c += 1;
            rows.set(subj, row);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrillShell, {
            label: label,
            onClose: onClose,
            shellRef: shellRef,
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
                    duration: 0.3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exam-result-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exam-score-ring",
                                style: {
                                    borderColor: pct >= 60 ? "#8fae5d" : "#e0a45e"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "exam-score-num",
                                        children: answeredCount === 0 ? "—" : `${pct}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "exam-score-sub",
                                        children: [
                                            correctCount,
                                            " / ",
                                            answeredCount || total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-2xl font-bold text-[#2b1d10]",
                                        children: "Drill report"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.95rem] font-semibold",
                                        style: {
                                            color: pct >= 60 ? "#44621d" : "#8a4508"
                                        },
                                        role: "status",
                                        children: answeredCount === 0 ? "No answers given — the deck dealt itself out." : pct >= 85 ? "Sharp — the schedule felt that." : pct >= 60 ? "Solid work — the misses will come back around." : "Planted — every miss is now scheduled to return."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2 text-[.72rem] font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: "#eef4dd",
                                                    color: "#44621d"
                                                },
                                                children: [
                                                    "✓ ",
                                                    correctCount,
                                                    " got it"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: "#fdecec",
                                                    color: "#8c2f2f"
                                                },
                                                children: [
                                                    "✗ ",
                                                    answeredCount - correctCount,
                                                    " missed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: "#f3e8d2",
                                                    color: "#6f5438"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deckSummary"])(session.counts)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    rows.size > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 grid gap-2 sm:grid-cols-2",
                        children: [
                            ...rows.entries()
                        ].map(([sid, row])=>{
                            const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find((x)=>x.id === sid);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 text-[.8rem] font-bold",
                                        style: {
                                            color: s?.accent ?? "#6f5438"
                                        },
                                        children: [
                                            s ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                lineNumber: 302,
                                                columnNumber: 28
                                            }, this) : null,
                                            s?.short ?? sid
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 301,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.8rem] font-extrabold text-[#2b1d10]",
                                        children: [
                                            row.c,
                                            " / ",
                                            row.t
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 305,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, sid, true, {
                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                lineNumber: 300,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 296,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 flex flex-wrap justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: deal,
                                className: "exam-btn exam-btn-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    "Deal another dozen"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "exam-btn",
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/DrillWindow.tsx",
            lineNumber: 266,
            columnNumber: 7
        }, this);
    }
    /* ---------------- card view ---------------- */ const typeLabel = TYPE_LABEL[card.type] ?? "Answer";
    const reason = REASON_STYLE[card.reason];
    const cardSubject = isAll ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find((s)=>s.id === card.subject) : undefined;
    const isMcq = card.type === "mcq";
    const isGraded = Boolean(grade);
    const isRevealed = Boolean(revealed[card.id]);
    const last = idx === session.cards.length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrillShell, {
        label: label,
        onClose: onClose,
        shellRef: shellRef,
        counter: `${idx + 1} / ${session.cards.length}`,
        correct: correctCount,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 24
            },
            animate: {
                opacity: 1,
                x: 0
            },
            transition: {
                duration: 0.22,
                ease: "easeOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "exam-type-chip",
                            style: {
                                color: "#92400e",
                                background: "#fdeecd"
                            },
                            children: typeLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]",
                            style: {
                                background: reason.bg,
                                color: reason.color
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reasonLabel"])(card.reason)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        cardSubject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]",
                            style: {
                                background: `${cardSubject.accent}1a`,
                                color: cardSubject.accent
                            },
                            children: cardSubject.short
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a6d4f]",
                            children: [
                                "Card ",
                                idx + 1,
                                " of ",
                                session.cards.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display mt-3 text-xl font-bold leading-snug text-[#2b1d10] md:text-[1.35rem]",
                    children: card.q
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this),
                card.code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "exam-code mt-4",
                    children: card.code
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 365,
                    columnNumber: 23
                }, this) : null,
                isMcq ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-2",
                    children: card.options?.map((opt, i)=>{
                        const isAnswer = i === card.answer;
                        const chosen = grade?.chosen === i;
                        let cls = "exam-opt";
                        if (isGraded && isAnswer) cls += " exam-opt-correct";
                        else if (isGraded && chosen) cls += " exam-opt-wrong";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: isGraded,
                            onClick: ()=>answerMCQ(i),
                            className: cls,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "exam-opt-letter",
                                    children: String.fromCharCode(65 + i)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 378,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[.86rem]",
                                    children: opt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 379,
                                    columnNumber: 19
                                }, this),
                                isGraded && isAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "ml-auto h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 380,
                                    columnNumber: 43
                                }, this) : null
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 377,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 369,
                    columnNumber: 11
                }, this) : !isRevealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: reveal,
                            className: "exam-btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this),
                                "Show the model answer"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[.78rem] leading-relaxed text-[#8a6d4f]",
                            children: "Say the answer out loud or scribble it — then check yourself honestly."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 386,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "mt-3",
                    role: "status",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exam-answer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "exam-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this),
                                        "Model answer"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this),
                                card.solution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "exam-code mt-2",
                                    children: card.solution
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 402,
                                    columnNumber: 33
                                }, this) : null,
                                card.answerText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-2 whitespace-pre-wrap font-mono leading-relaxed text-[#2f2013] ${card.solution ? "text-[.78rem]" : "text-[.82rem]"}`,
                                    children: card.answerText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 404,
                                    columnNumber: 17
                                }, this) : null,
                                card.explain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.82rem] leading-relaxed text-[#6f5438]",
                                    children: card.explain
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 408,
                                    columnNumber: 32
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, this),
                        !isGraded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[.74rem] font-bold uppercase tracking-[.12em] text-[#8a6d4f]",
                                    children: "Self-check:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>selfCheck(true),
                                    className: "exam-btn",
                                    style: {
                                        color: "#44621d"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this),
                                        " I got it"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 413,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>selfCheck(false),
                                    className: "exam-btn",
                                    style: {
                                        color: "#8c2f2f"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this),
                                        " Not yet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 416,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 411,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 396,
                    columnNumber: 11
                }, this),
                isMcq && isGraded && card.explain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "exam-answer mt-3",
                    role: "status",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.88rem] font-bold",
                            style: {
                                color: grade.status === "correct" ? "#44621d" : "#8c2f2f"
                            },
                            children: grade.status === "correct" ? "Correct." : "Not quite."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[.85rem] leading-relaxed text-[#2f2013]",
                            children: card.explain
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 430,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 426,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exam-nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "exam-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deckSummary"])(session.counts),
                                        " — ",
                                        answeredCount,
                                        " graded"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hidden items-center gap-2.5 text-[.58rem] font-bold uppercase tracking-[.1em] text-[#8a6d4f] sm:flex",
                                    "aria-hidden": true,
                                    children: [
                                        isMcq ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "exam-kbd",
                                                    children: "1–4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                " answer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "exam-kbd",
                                                    children: "↵"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                isMcq ? "next" : "reveal"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "exam-kbd",
                                                    children: "esc"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this),
                                                " close"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex flex-wrap gap-1.5",
                            role: "img",
                            "aria-label": `Deck progress: ${answeredCount} of ${session.cards.length} graded`,
                            children: session.cards.map((c, i)=>{
                                const g = graded[c.id];
                                const cls = i === idx ? "exam-dot exam-dot-current" : g?.status === "correct" ? "exam-dot exam-dot-ok" : g?.status === "wrong" ? "exam-dot exam-dot-bad" : "exam-dot";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: cls,
                                    "aria-hidden": true,
                                    children: i + 1
                                }, c.id, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 466,
                                    columnNumber: 22
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex items-center justify-end pb-2",
                    children: [
                        !isGraded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mr-auto text-[.78rem] font-semibold text-[#8a6d4f]",
                            children: isMcq ? "Pick an answer to continue." : "Reveal, then self-check to continue."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: advance,
                            disabled: !isGraded,
                            className: "exam-btn exam-btn-primary",
                            children: last ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 481,
                                        columnNumber: 17
                                    }, this),
                                    "Finish the drill"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Next card",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this)
            ]
        }, card.id, true, {
            fileName: "[project]/src/components/notes/DrillWindow.tsx",
            lineNumber: 340,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/notes/DrillWindow.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, this);
}
_s(DrillWindow, "uCGo5I6wmjd25TdYZ+jZdvpX0lU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"]
    ];
});
_c = DrillWindow;
/* ---------------- shared shell ---------------- */ function DrillShell({ label, counter, correct, onClose, shellRef, children }) {
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
        "aria-label": `Quick drill — ${label}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#2b1b10,#402818)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ea580c,#c2410c)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "h-4 w-4 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.95rem] font-black leading-tight text-[#ffe9c9]",
                            children: [
                                "Quick drill — ",
                                label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                counter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em] text-[#ffe9c9]",
                                    children: counter
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this) : null,
                                typeof correct === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em] text-[#ffe9c9]",
                                    children: [
                                        "✓ ",
                                        correct
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Close the drill",
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/DrillWindow.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-start justify-center overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-3xl px-4 py-8 sm:px-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/DrillWindow.tsx",
                    lineNumber: 555,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/DrillWindow.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/DrillWindow.tsx",
        lineNumber: 515,
        columnNumber: 5
    }, this);
}
_c1 = DrillShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "DrillWindow");
__turbopack_context__.k.register(_c1, "DrillShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/DrillWindow.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/notes/DrillWindow.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("eye", __iconNode);
;
 //# sourceMappingURL=eye.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>RotateCcw
]);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
];
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rotate-ccw", __iconNode);
;
 //# sourceMappingURL=rotate-ccw.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trophy
]);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
            key: "1n3hpd"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
            key: "rfe1zi"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a1 1 0 0 0 0-5H18",
            key: "7xy6bh"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
            key: "1mhfuq"
        }
    ],
    [
        "path",
        {
            d: "M6 9H4.5a1 1 0 0 1 0-5H6",
            key: "tex48p"
        }
    ]
];
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trophy", __iconNode);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_5da260bf._.js.map