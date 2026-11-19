# ATB (Algorithmic Thinking in Business) — Pre-Restructure Audit & Readiness

Session: 2026-11-19 · Incoming: full **33-lecture PDF** + fix prompt (not yet delivered) · Current ground truth: the shipped 28-lecture reader (L1–L28 → 33 chapters).

The shelf is structurally healthy: registry ↔ nav ↔ components ↔ rendered sections ↔ twins are all exact 1:1 today. This file records the measured baseline, the get-ready infrastructure built this session, and the runbook for the 33-lecture restructure.

## 1. Verified live state (code-measured)

| Property | Value |
| --- | --- |
| Shelf | `subjects.ts` #02 — "Algorithmic Thinking in Business", accent rose `#f43f5e`/`#be123c`, ambience `aura`; app chrome is the warm amber family (`#ea580c`→`#c2410c` gradients) |
| Registry | `src/components/atb/lectures.ts` — 28 lectures `l1`–`l28` (`id, n, code, title, blurb, chapters[]`, optional `live`); live recaps at L8 · L13 · L18 · L23; `ATB_ALL_CHAPTER_IDS` flat map |
| Shell | `src/components/atb/AtbApp.tsx` (1,022 lines) — literal 8-group `GROUPS` nav (intro 6 · props 3 · linear 3 · stackq 4 · trees 6 · hash 4 · search 2 · algo 5), literal 33-entry `SECTION_COMPONENTS`, lecture reader keyed by `ATB_LECTURES`, `useOpenSection("atb", goToChapter)` at line 961, `useSeenDisplay` per-lecture sweep |
| Hero | `AtbHero` in `AtbParts1.tsx` — searchable over `ATB_LECTURES` (word-AND filter; auto-extends to 33), lecture chip strip, `id="top"` on `<header>` |
| Parts | `AtbParts1–10.tsx` (~14.3k lines) — 33 `<Section id>` blocks, no FA-style part/eyebrow fields; eyebrows are freehand `SectionHead` strings, NOT derived |
| Exam | `atb/questions.ts` — 8 banks / 51 questions, types `mcq \| output \| short` only (no-code course); `AtbExamWindow` → shared `ExamEngine` + `ATB_EXAM_THEME`, `draftId = group id` |
| Twins | `chapter-index.ts` (33 atb rows) · `search-corpus.json` (33 atb chapters) · `section-counts.ts` (`atb: 33`) · `question-counts.ts` (`atb: 51`); shelf total 229 sections |
| Router | `atlas-router.ts` parses `#/subject/atb/<tail>` for every subject, but `page.tsx` passes `initialLecture` to **FocApp and FaApp only** — AtbApp gets none (deep links land on L1) |
| Tests | `bun test` 39 pass (router + FA calcs) — **no ATB-specific tests**; `tsc --noEmit` clean |

Section → component file map (33): AtbParts1 `intro, flowcharts, atm, pseudocode, average` · AtbParts2 `properties, algotypes` · AtbParts3 `arrays, linkedlists` · AtbParts4 `stacks, queues, qtypes` · AtbParts5 `trees, traversals, graphs, graphprops, dfsbfs` · AtbParts6 `treetypes, hashing, blockchain` · AtbParts7 `recap8, recap13, recap18, recap23` · AtbParts8 `complexity, search` · AtbParts9 `dijkstra, sorting` · AtbParts10 `coursemap, props2, selectionsort, insertionsort, recap28`.

## 2. Baseline audit result (`bun scripts/audit-atb-content.ts`)

8 OK · 1 issue:

```
[OK] sequence L1..L28 continuous · chapter ids unique (33)
[OK] nav <-> registry 1:1 · registry <-> SECTION_COMPONENTS 1:1 · registry <-> rendered <Section> 1:1
[OK] search-corpus covers all 33 atb chapters · corpus text matches current sources (heuristic)
[ISSUE] AtbHero <header> ALSO uses id=top — duplicate DOM id (AtbApp wrapper already owns it)
```

Exam integrity: all 8 banks 0 problems (intro 5 · props 5 · linear 8 · stackq 5 · trees 5 · hash 5 · search 6 · algo 12 = 51).

## 3. Infrastructure prepared this session (the get-ready kit)

1. **`scripts/audit-atb-content.ts` (new)** — the FA audit machinery adapted: registry sanity (sequence, codes, uniqueness), literal nav GROUPS check, `SECTION_COMPONENTS` check, rendered `<Section id>` scan over AtbParts1–10, exam-bank integrity, twins coverage + staleness heuristic (JSX text **and** attribute literals), hard-coded-count smells, ReadStep `n` monotonicity.
2. **`scripts/regen-atb-twins.ts` (new, dry-validated)** — regenerates chapter-index atb block, search-corpus atb chapters (canonical `Lecture NN · label. desc.` template), section-counts, question-counts. Group/label/desc sourced from the live AtbApp `GROUPS` table; `sliceSection` anchors on the real `<Section id>` tag (a bare `id="…"` search hits a comment 20 lines above the tag). Expected counts are CLI-overridable (`--lectures=28 --chapters=33`) for dry runs; defaults 33 / null until the PDF pins them.
3. **`scripts/audit-fa-content.ts` repaired** (was broken on the shipped tree): `fa/lectures` → `fa/faLectures` import; scan widened FaParts1–11 → 1–16 (8 chapters were invisible); derived-nav guard replaces the dead literal-GROUPS parse; zero-padded `L01` codes accepted; corpus-questions check made optional; staleness heuristic scans attribute literals (4 false positives silenced). FA now audits to 1 real issue: FaHero duplicate `id="top"` (same bug as ATB).
4. **Twins normalized to the canonical generator** — the shipped atb corpus chapters predated the lecture-reader restructure (headers said "Module 1 · Introduction to algorithms…"); re-cut to the FA-style `Lecture NN · …` convention, idempotent with the new regen script. Stale header comments fixed: chapter-index "atb 28 … = 176" → "atb 33 … = 229"; section-counts "40 + 33 + 33 + … = 221" → "40 + 33 + 41 + … = 229".

## 4. Restructure runbook (when the 33-lecture PDF + fix prompt land)

1. **Corpus first:** extract the PDF word-for-word → `scripts/atb-corpus.txt` (mirror `scripts/fa-corpus.txt`, ~240k chars). This is the only allowed number source; nothing is invented, beautified, or silently leveled.
2. **Registry:** rewrite `atb/lectures.ts` → 33 records in official order; re-map the `live` flags to the new PDF's live sessions; keep `id` slugs stable where a chapter survives (progress records in `loadProgress().atb` are keyed by section id — preserving ids preserves reader progress).
3. **Sections:** rewrite/extend AtbParts files; one `<Section id>` per new chapter, word-for-word figures from the corpus. If the PDF carries arithmetic traps (the FA A–D pattern), solve them publicly with a footnote disclosing the source slip verbatim — never quietly adjust.
4. **Shell:** re-cut AtbApp `GROUPS` + `SECTION_COMPONENTS`; `useSeenDisplay`, `goToChapter`, `useOpenSection` logic is count-agnostic and needs no change.
5. **Exam banks:** rebuild/extend per the new groups; `mcq | output | short` only; every answer traceable to the corpus; audit script enforces options/answer-index/answerText/explain integrity.
6. **Twins:** pin `EXPECTED_CHAPTERS` in `regen-atb-twins.ts`, run it, then `bun scripts/audit-atb-content.ts` until green (expected: 33 lectures, N chapters — audit prints the parse).
7. **Verification gate:** `bun test` → `tsc --noEmit` → `npm run lint` → `npm run build` (build kills the dev server — restart with `nohup npm run dev > dev.log &`); agent-browser spot checks at 360px / keyboard / `#/subject/atb/l<n>` / print CSS.
8. **Ship:** commit as **Arpit Nayan** and push (PAT inline, single use, never stored).

## 5. Known issues carried into the fix round

- **Duplicate `id="top"`** on both ATB (AtbHero) and FA (FaHero) — the AtbApp/FaApp wrapper already owns it; the hero `<header>` must drop it (cosmetic; brand-chip scroll lands on whichever comes first).
- **No lecture deep links for ATB:** `page.tsx` passes `initialLecture` only to FocApp/FaApp; AtbApp would need the same prop + hash-sync if the prompt asks for shareable `#/subject/atb/l14` links.
- **No ATB unit tests** — if the restructure adds calculation machines, give them a `calcs.test.ts` like FA's diagrams.
- **`subjects.ts` topics chips** still describe the 28-lecture syllabus — re-sync when the 33-lecture shape is final.
- **Exam drafts orphaned on group renames** (`draftId = group id`) — acceptable, but avoid renaming group ids unless the prompt demands it.
- **(FA, adjacent)** FaHero `id="top"` duplicate — flagged by the repaired audit script; fix alongside if the prompt touches FA.

## 6. Guardrails

- **Numbers:** only from the delivered PDF corpus; python-verified before they enter code.
- **Design DNA:** ATB stays rose-accent + warm-amber chrome — no retheme, no FoC amber bleed into FA emerald, no new dependencies; reuse `notes/ui` primitives (`Section`, `SectionHead`, `StepsFlow`, `Reveal`) and the shared `ExamEngine`.
- **Untouchable:** the other five shelves' sources, Pyodide Lab, Mistake Ledger SM-2, Cockpit APIs, lectures/sidebars ordering, question banks outside ATB.
- **Accessibility & layout:** keyboard-reachable toggles, `role="list"/"listitem"`, `prefers-reduced-motion` static terminal states, 360px no horizontal scroll, `@media print` readable — the FA diagram rules carry over if the prompt orders new machines.
