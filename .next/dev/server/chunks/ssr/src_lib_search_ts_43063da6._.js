module.exports = [
"[project]/src/lib/search.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   FULL-TEXT SEARCH — the deep half of ⌘K.

   lib/chapter-index.ts only knows chapter TITLES; this module
   knows what is INSIDE the notes. The corpus JSON (built by
   scripts/build-search-corpus.ts from the rendered sections)
   is indexed with MiniSearch on the first search, and the five
   question banks are indexed live from their own chunks — the
   same lazy dynamic-import pattern drill.ts and
   question-lookup.ts already use, so nothing here rides along
   with the landing or the palette until a reader actually
   searches. Both indexes are module-lifetime singletons: the
   first query pays the build, every later query is in-memory.

   Chapter hits carry the section id (chapterKey) that the
   flash-jump scrolls to; question hits carry shelf + question
   id so the palette can land the reader on the right shelf.
   ============================================================ */ __turbopack_context__.s([
    "searchNotes",
    ()=>searchNotes,
    "searchQuestions",
    ()=>searchQuestions
]);
/** bank loaders in the same order as question-lookup.ts */ const BANK_LOADERS = {
    foc: ()=>__turbopack_context__.A("[project]/src/components/notes/questions.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.EXAM_BANKS),
    atb: ()=>__turbopack_context__.A("[project]/src/components/atb/questions.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.ATB_EXAM_BANKS),
    fa: ()=>__turbopack_context__.A("[project]/src/components/fa/questions.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.FA_EXAM_BANKS),
    ebh: ()=>__turbopack_context__.A("[project]/src/components/ebh/questions.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.EBH_EXAM_BANKS),
    stm: ()=>__turbopack_context__.A("[project]/src/components/stm/questions.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.STM_EXAM_BANKS),
    mktg: ()=>__turbopack_context__.A("[project]/src/components/mktg/questions.ts [app-ssr] (ecmascript, async loader)").then((m)=>m.MKTG_EXAM_BANKS)
};
let notesIndexPromise = null;
/** chapterKey-unique text kept beside the index so hits can be
 *  snippeted without stuffing 20k-char bodies into storeFields */ let noteTexts = null;
let questionsIndexPromise = null;
function getNotesIndex() {
    notesIndexPromise ??= (async ()=>{
        const [minisearch, corpusModule] = await Promise.all([
            __turbopack_context__.A("[project]/node_modules/minisearch/dist/es/index.js [app-ssr] (ecmascript, async loader)"),
            __turbopack_context__.A("[project]/src/lib/search-corpus.json (json, async loader)")
        ]);
        const MS = minisearch.default;
        const corpus = corpusModule.default;
        const docs = corpus.chapters.map((c)=>({
                ...c,
                id: `${c.shelfId}:${c.chapterKey}`
            }));
        noteTexts = new Map(docs.map((d)=>[
                d.id,
                d.text
            ]));
        const index = new MS({
            fields: [
                "label",
                "group",
                "groupLabel",
                "text"
            ],
            storeFields: [
                "shelfId",
                "chapterKey",
                "label",
                "group",
                "groupLabel"
            ],
            searchOptions: {
                prefix: true,
                fuzzy: fuzzyFor,
                boost: {
                    label: 4,
                    group: 2,
                    groupLabel: 2
                }
            }
        });
        index.addAll(docs);
        return index;
    })();
    return notesIndexPromise;
}
function getQuestionsIndex() {
    questionsIndexPromise ??= (async ()=>{
        const MS = (await __turbopack_context__.A("[project]/node_modules/minisearch/dist/es/index.js [app-ssr] (ecmascript, async loader)")).default;
        const maps = await Promise.all(Object.entries(BANK_LOADERS).map(async ([sid, load])=>[
                sid,
                await load()
            ]));
        const docs = [];
        for (const [sid, banks] of maps){
            for (const bank of Object.values(banks)){
                for (const q of bank.questions){
                    docs.push({
                        id: `${sid}:${q.id}`,
                        shelfId: sid,
                        questionId: q.id,
                        group: bank.group,
                        bankTitle: bank.title,
                        prompt: q.q,
                        text: [
                            q.code,
                            q.options?.join(" "),
                            q.answerText,
                            q.solution,
                            q.explain
                        ].filter((x)=>typeof x === "string" && x.length > 0).join(" ")
                    });
                }
            }
        }
        const index = new MS({
            fields: [
                "prompt",
                "text"
            ],
            storeFields: [
                "shelfId",
                "questionId",
                "group",
                "bankTitle",
                "prompt"
            ],
            searchOptions: {
                prefix: true,
                fuzzy: fuzzyFor,
                boost: {
                    prompt: 3
                }
            }
        });
        index.addAll(docs);
        return index;
    })();
    return questionsIndexPromise;
}
/* ============================================================
   Search API
   ============================================================ */ /** result caps — a palette is a jump list, not a report */ const NOTES_LIMIT = 6;
const QUESTIONS_LIMIT = 6;
/** typo tolerance, but only for long enough tokens — a fuzzy
 *  "von" (1 edit allowed on 3 letters) drags in half the atlas */ const fuzzyFor = (term)=>term.length >= 5 ? 0.2 : 0;
/** a short window of text around the first query-token match,
 *  snapped to word boundaries so the hit reads like a sentence */ function snippetFor(text, query, radius = 88) {
    const lower = text.toLowerCase();
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    let at = -1;
    let token = "";
    for (const t of tokens){
        at = lower.indexOf(t);
        if (at >= 0) {
            token = t;
            break;
        }
    }
    if (at < 0 || !token) return text.length > radius * 2 ? `${text.slice(0, radius * 2).trimEnd()} …` : text;
    let start = Math.max(0, at - radius);
    if (start > 0) {
        const sp = text.indexOf(" ", start);
        if (sp >= 0 && sp < at) start = sp + 1; // don't open on a half word
    }
    const tokenEnd = at + token.length;
    let end = Math.max(tokenEnd, Math.min(text.length, at + radius));
    if (end < text.length) {
        const sp = text.indexOf(" ", end);
        if (sp > at && sp - end <= 24) end = sp; // close on a boundary when one sits nearby
    }
    return `${start > 0 ? "… " : ""}${text.slice(start, end).trim()}${end < text.length ? " …" : ""}`;
}
async function searchNotes(query) {
    const q = query.trim();
    if (q.length === 0) return [];
    const index = await getNotesIndex();
    return index.search(q).slice(0, NOTES_LIMIT).map((r)=>({
            shelfId: String(r.shelfId),
            chapterKey: String(r.chapterKey),
            label: String(r.label),
            group: String(r.group),
            groupLabel: String(r.groupLabel),
            snippet: snippetFor(noteTexts?.get(String(r.id)) ?? "", q),
            score: r.score
        }));
}
async function searchQuestions(query) {
    const q = query.trim();
    if (q.length === 0) return [];
    const index = await getQuestionsIndex();
    return index.search(q).slice(0, QUESTIONS_LIMIT).map((r)=>({
            shelfId: String(r.shelfId),
            questionId: String(r.questionId),
            group: String(r.group),
            bankTitle: String(r.bankTitle),
            prompt: String(r.prompt),
            score: r.score
        }));
}
}),
];

//# sourceMappingURL=src_lib_search_ts_43063da6._.js.map