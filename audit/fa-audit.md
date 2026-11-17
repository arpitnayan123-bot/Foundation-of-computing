# FA Shelf Audit — Financial Accounting, pre-PDF readiness (2026-11-17)

Read-only audit of the FA shelf, run before the user drops the 34-lecture
IIT Jodhpur compendium PDF. Purpose: know exactly what exists, what is
verified, what is broken, and what the FoC-style Phase 0–5 rebuild will
touch — so the job can start the moment the PDF lands.

Method: adapted FoC audit machinery (`scripts/audit-fa-content.ts` — new),
targeted source reads, real-browser session (agent-browser, dev server on
:3000), and python/node arithmetic re-computation of every flagship worked
example. Nothing was modified except the new audit script and this file.

---

## 1. File map (FA shelf)

| File | Lines | Role |
| --- | --- | --- |
| `src/components/fa/lectures.ts` | 373 | Registry: `FA_LECTURES`, 29 lectures L1–L29 → 33 chapters. Type `FaLecture { id, n, code, title, blurb, chapters }` — **no `group` / `groupLabel` / `examStatus`** (FoC has all three). Helpers: `lectureOfChapter`, `lectureById`, `FA_ALL_CHAPTER_IDS`. No `lectureByLooseId` (FoC has it). |
| `src/components/fa/FaApp.tsx` | 1003 | Reader shell. `GROUPS` hand-maintained (7 groups / 33 items — a SECOND source of truth, not derived from the registry), `SECTION_COMPONENTS` (33 entries), `FaLectureHead` (eyebrow band, derived ✓), `LecturePager` (prev/next), `PracticeHub` + exam wiring. **Does not accept an `initialLecture` prop** (FocApp does). |
| `src/components/fa/FaHero.tsx` | 271 | Lecture picker: search + 29-row list, read-state checks, CTA to practice hub. |
| `src/components/fa/questions.ts` | 1043 | 7 exam banks (`FaExamGroup`), **72 questions**, `FA_EXAM_BANKS` / `FA_EXAM_GROUPS` / `FA_TOTAL_QUESTIONS`. |
| `src/components/fa/FaExamWindow.tsx` | 14 | Thin wrapper over the SHARED engine: `notes/ExamEngine` + `notes/exam-themes.ts` (`FA_EXAM_THEME`, emerald). |
| `src/components/fa/FaParts1–11.tsx` | ~7,800 | Content: 33 `<Section>` blocks (8/8/8/8/6/6/6/4/4/4/4), 129 `FaReadStep`s, inline `FaQuiz`/`FaEq`/`FaCallout`/interactive labs (`JawsLadder`, `AjayLadder`, `PioneerBuild`, equation machine, GP lab). |
| `src/app/page.tsx` | — | Router wiring. Line 224: `<FocApp … initialLecture={view.lecture} />`; **line 229: `<FaApp onExitAtlas={…} />` — deep-link tail NOT passed.** |
| `src/lib/atlas-router.ts` | — | Hash router is GENERIC: `#/subject/fa/l14` already parses into `{ name:"subject", id:"fa", lecture:"l14" }`. No FA change needed there. |
| Twins | — | `section-counts.ts` fa: **33** ✓ · `question-counts.ts` fa: **72** ✓ · `chapter-index.ts` covers **33/33** fa ids ✓ · `search-corpus.json` holds all 33 fa chapters ✓ (221 total; questions are indexed at runtime from banks — corpus correctly holds none). |
| Audit scripts | — | `scripts/audit-fa-content.ts` (new, mirrors audit-foc-v2.ts; run with `npx tsx`). |

Palette DNA: emerald/sage on ivory paper (`#059669` / `#10b981` / `#6d9970`),
Scale sigil, shelf 03. Group labels: Orientation · Concepts · The Equation ·
Recording · The Cycle · Final Accounts · Cash Flow & Analysis.

## 2. Inventory

- **29 lectures** (L1–L29), continuous n=1..29, codes `L1`…`L29` (unpadded — FoC post-upgrade uses zero-padded `L01`).
- **33 chapters**: 25 single-chapter lectures + L5, L8, L9, L21 with two each.
- **7 exam groups, 72 questions**: foundations 12 · concepts 8 · equation 10 · recording 12 · cycle 8 · closing 12 · cashflow 10. 0 integrity problems.
- **Interactive labs**: equation machine (L8), equation lab (L8), GP lab (L20), adjusting lab (L19), Jaws ladder (L25), Ajay ladder + Pioneer build (L26/27), five-shape statements (L21).

## 3. Verified clean (evidence-based)

1. Registry ↔ nav `GROUPS` ↔ `SECTION_COMPONENTS` ↔ rendered `<Section id>`: **exact 1:1 across all four layers** (script, 33 ids).
2. ReadStep numbering: every section starts at `n="01"`, monotonic, no restarts/skips (129 steps scanned).
3. Exam bank integrity: all 72 questions have valid answer indexes / answerText / explanations.
4. Twins honest: section-counts 33, question-counts 72, chapter-index 33/33, corpus 33 fa chapters.
5. **Arithmetic spot-checks passed**:
   - Jaws indirect ladder `73,000 + 7,000 − 2,500 − 4,000 − 3,800 = 69,700` ✓ (FaParts9:593)
   - Ajay `4,32,000 → 3,48,000`, stated fall of `84,000` ✓ (FaParts10:130)
   - Tax-paid quiz `50,000 + 30,000 − 50,000 = 30,000`, correct option ✓ (FaParts10:246)
   - Cash T-account: Dr `3,05,000` = Cr `2,10,000 + 95,000 c/d`; debit-balance logic + quiz answer index 1 ✓ (FaParts6:624–700)
   - Pioneer investing `30,000 − 80,000 − 1,00,000 = −1,50,000` ✓; financing `50,000 − 50,000 − 50,000 − 10,000 = −60,000` ✓; interest cover `72,000 ÷ 22,000 ≈ 3.3×` ✓ (FaParts10)
   - Vogue adjusting entries: insurance `720/12 = 60/mo` ✓, supplies `3,700 − 2,900 = 800` ✓, salaries `1,500 ÷ 30 × 10 = 500` ✓, unearned 900 ✓ (FaParts7)
   - Softomation retained earnings `500k + 100k − 50k = 550k` ✓ internally (FaParts8 — but see B2)
6. Eyebrows already use the fixed `Lecture N · …` format everywhere (FoC Pass B/C fix not needed here).
7. Browser: shelf renders all 29 lectures, nav groups show correct counts (4+4+4+6+4+6+5), lecture click-through renders the right band + content, zero page errors in console.

## 4. Bugs found (fix in Phase 1/3)

| # | Severity | Bug | Evidence | Phase |
| --- | --- | --- | --- | --- |
| B1 | **High** | FA lecture deep link broken: fresh load of `#/subject/fa/l14` falls back to **Lecture 1** (verified in browser). `FaApp` lacks `initialLecture`; `page.tsx:229` doesn't pass `view.lecture`; no `lectureByLooseId`. FoC works on the same load (opens L14). | FaApp.tsx:913, page.tsx:224 vs 229 | 1 |
| B2 | **High** | Currency drift: Softomation case rendered in **`$550,000`** (FaParts8:86, 232–236) while the registry blurb promises the "₹5,50,000 ladder". Number matches, currency doesn't. PDF decides which way to standardize. | FaParts8:86,240 vs lectures.ts L21 blurb | 3 |
| B3 | Medium | Registry blurb drift: L8 blurb promises "the **₹82,000 proof**" — no `82,000` exists anywhere in FaParts1–11 (equation-lab corpus text shows Hot Chocolate ₹87,000/₹53,000 instead). Blurb or content must be realigned from the PDF. | lectures.ts L8 blurb; grep all parts | 3 |
| B4 | Low | Stale comment in FaHero: **"Sixteen lectures."** (29 in registry; will be 34). | FaHero.tsx:10 | 1 |
| B5 | Low | Duplicate DOM id: `FaHero <header id="top">` + `FaApp` wrapper `id="top"` — invalid HTML, first-in-DOM wins. | FaHero.tsx:107, FaApp.tsx:968 | 1 |
| B6 | Low | `LecturePager` closing text hard-codes **"Lecture 29 closes the course"** — becomes wrong at 34. | FaApp.tsx:900 | 3 |

## 5. Watchlist for the PDF drop (verify, don't assume)

- **W1 — Compass scale questions** (FaParts10:281,301): net profit `₹11,41,000` vs operating cash `₹72,000`; sales `8,081,000/9,025,000 ≈ 90%` cash-converted; dividend `₹25,000 = 12.5% of share capital` (⇒ capital `2,00,000`) but "enlarged base would demand ≈₹43,750" (⇒ base `3,50,000`). The `25,000/2,00,000` and `43,750/3,50,000` pairs don't share one capital figure — reconcile against the PDF's own statement.
- **W2 — Pioneer ladder elides working capital** (FaParts10:312): `2,70,000+45,000+5,000+5,000+20,000 = 3,45,000` shown flowing into `Cash generated 1,82,000` with only "…" between → implied WC adjustment `−1,63,000` never displayed. PDF supplies the real rows.
- **W3 — corpus freshness**: `fa/equation-lab` and `fa/elements` corpus phrases matched 0/4 in current sources (other 7 flagged chapters matched on retest — heuristic false positives). Corpus regen after Phase 3 anyway.
- **W4 — code padding**: FoC post-upgrade codes are `L01…L34`; FA still `L1…L29`. Decide: adopt zero-padded `L01` when 34 lectures land (affects hero badges, lecture head, pager, deep links must accept both `l14`/`14`).
- **W5 — exam format unknown**: FA's end-term format (marks split, question types, quiz policy, quiz-only vs final-exam lectures) comes ONLY from the PDF. FoC's `examStatus` enum + "Official End-Term Mock" pattern will be replicated once known.

## 6. Parity delta vs FoC (post-upgrade) → the execution plan

Already at parity (no work): hash router generality, eyebrow format, ReadStep discipline, exam engine sharing, SM-2/ledger/cockpit wiring, landing safety (Open Signals/credits removed globally), canonical URLs.

**Phase 1 — single-source registry (FA re-run)**
- Migrate `FaLecture` to the FoC shape: `group: FaGroupId`, `groupLabel`, `examStatus: FaExamStatus`, chapters (with optional per-chapter group override), zero-padded codes; add `lectureByLooseId`; derive `GROUPS = f(FA_LECTURES)` (kill the second source of truth), derive FaHero/eyebrow/pager badges from the registry.
- Wire deep links: `FaApp({ onExitAtlas, initialLecture })`, `page.tsx:229` passes `view.lecture`; update hash on lecture switch (FoC parity); fixes **B1**.
- Sweep B4/B5 (stale comment, duplicate `id="top"`).

**Phase 2 — landing/infra safety**: nothing FA-specific found (DummyJSON/Wikipedia/site-url/chunk-dedupe were global fixes in the FoC run). Re-verify only.

**Phase 3 — four-pass word-for-word audit vs the FA PDF (cannot start before the PDF)**: Pass A L1–L9, B L10–L20, C L21–L27, D L28–L34 (L29–L34 new/restructured per PDF: FA PDF brings 34 lectures where the site has 29 — expect +5 splits/additions, mapped like FoC). Re-verify every number in §5 watchlist; fix B2/B3/B6; keep the verified arithmetic examples byte-stable where the PDF agrees.

**Phase 4 — interaction/diagram set** (candidates, final pick after PDF): ① double-entry machine (L8 four moves), ② CD/BD handshake (L12), ③ suspense gap closure (L15), ④ accounting-cycle pipeline with the six adjustments (L19), ⑤ statement chain journal→ledger→TB→statements (L21), ⑥ indirect-method ladder build (L25/26). Exam center: "Official End-Term Mock (FA format)" once the PDF defines it — plus strict answer checking like FoC's mock.

**Phase 5 — zero-error gate**: `npx tsc --noEmit` + `npm run build`; re-run `scripts/audit-fa-content.ts` (expect 0 issues after B-fixes; keep the two heuristic false-positive corpus checks honest); regen fa corpus chapters; browser-verify 34/34 lectures + deep links; emit the 34-lecture verification table (MATCHED/SPLIT/ADDED + eyebrow + widget + exam tag); local commit (push only on request).

## 7. Ready state

- Dev server recipe: `npm run dev` on :3000 (`dev.log`), audit script: `npx tsx scripts/audit-fa-content.ts`.
- Do NOT touch: other 4 shelves (atb/ebh/stm/mktg), Pyodide lab, ledger SM-2, cockpit APIs (`/api/ask|defend|case-strike|generate-cards`), FoC shelf (frozen at b02bf96).
- On PDF arrival: drop it in `upload/`, extract text (like `audit/foc-l01-l34.txt`), then Phase 1 → 5 in strict order with a verification summary after each phase.
