# FA (Financial Accounting) — Pre-Upgrade Audit & Execution Plan

Session: 2026-11-17 · Ground truth: `upload/FA_L01-L34_Compiled (1).pdf` (108 pp, 28,976 words, L01–L34).

## 1. Verified live state (code-measured, matches the brief's bundle measurements)

| Property | Value |
| --- | --- |
| Registry | `src/components/fa/lectures.ts` — 29 lectures (`l1`–`l29`), no `eyebrow`/`examStatus`/part fields |
| Shell | `src/components/fa/FaApp.tsx` — 7 hard-coded `GROUPS` (33 items), 33-entry `SECTION_COMPONENTS`, no lecture deep links, pager end-card says "Lecture 29 closes the course" |
| Hero | `src/components/fa/FaHero.tsx` — search over `FA_LECTURES` (auto-extends), stale "Sixteen lectures" comment, no exam pills |
| Exam | `src/components/fa/questions.ts` — 7 banks / 72 Qs (foundations 12, concepts 8, equation 10, recording 12, cycle 8, closing 12, cashflow 10) |
| Eyebrows | 33 literal strings in FaParts1–11; 16 wrong (`Module N · …`), incl. duplicate `Module 1 · Assumptions, deep-dive` (L06+L09) and `statements` filed as Module 3 |
| Twins | `lib/chapter-index.ts` (33 fa rows), `lib/search-corpus.json` (33 fa chapters), `lib/section-counts.ts` (`fa: 33`), `lib/question-counts.ts` (`fa: 72`) |
| Router | `lib/atlas-router.ts` already parses `#/subject/<id>/<lecture>` for every subject; `app/page.tsx` passes `initialLecture` to FocApp only |
| FoC template | `components/foc/focLectures.ts` (34 strict records; `FOC_GROUPS` derived via `FOC_GROUP_ORDER.map`; `lectureByLooseId`; shell `components/notes/FocApp.tsx` lines 952–1007 = deep-link reference); twin regen recipe `scripts/regen-foc-twins.ts` |

Section → component file map (33 existing): FaParts1 `why, assumptions, entity-concern, periodicity` · FaParts2 `dual-aspect, elements, equation-lab, effects` · FaParts3 `journal, ledger, statements, trial-balance` · FaParts4 `adjusting, final-accounts, trading, gp-lab` · FaParts5 `course-map, language, users-regulatory` · FaParts6 `conventions, classification, balancing` · FaParts7 `suspense, basis, adjusting-lab` · FaParts8 `pandl, balance-sheet` · FaParts9 `cashflow-intro, cashflow-methods` · FaParts10 `cashflow-build, cashflow-health` · FaParts11 `fs-analysis, cashflow-wrap`.

Shared section kit (from `FaParts1.tsx`): `FA_G`, `FA_BTN_GRAD`, `FaCallout`, `FaEq`, `FaQuiz`, `FaReadStep`; plus `Section/SectionHead/Takeaways/StepsFlow/Reveal` from `notes/ui`.

## 2. §B5.1 verdict (L15 ABC Startup framing)

Source prints debit **1,80,00,000** vs credit **1,90,00,000** but labels the gap "a 50,000 difference" — internally inconsistent (printed gap is 10,00,000). The source's own resolution (suspense closes fully once three errors are found) only works if the gap equals the commission error's one-sided shortfall (85,000 booked as 35,000 → 50,000). **Fix adopted:** debit `1,80,00,000` vs credit `1,80,50,000` → gap `50,000` → suspense debit `50,000` → closed to nil by the commission error; omission (25,000) and principle (40,000) shown as TB-invisible. Footnote discloses the source slip verbatim. (`1,90,00,000` will not appear.)

## 3. Execution plan (Phases 1–6, brief Part D)

1. **Phase 1 — single source of truth:** new `faLectures.ts` (34 records: `id,n,code,title,blurb,part,partLabel,group,groupLabel,examStatus,chapters[]`, chapter-level `theme` → eyebrow derived `Lecture ${n} · ${theme}`); derived `FA_GROUPS` (8 groups via `FA_GROUP_ORDER`), `lectureByLooseId`, dev assertions (registry↔renderer parity, eyebrow uniqueness, 34/n-ascending). FaApp: derive GROUPS, accept `initialLecture`, hash-sync + `history.replaceState`, 8-group nav with per-group exam launchers, pager end-card → L34. `page.tsx` passes `view.lecture` to FaApp. Delete old `lectures.ts`.
2. **Phase 2 — defects:** order fixed by derivation (ledger L11 < journal L14; L09 pair after L07+L08 pair; trading L18 < adjusting-lab L19; statements → closing/L21); all 16 eyebrow remaps land as `eyebrowOf(id)` calls; §B5.1 framing + footnote in FaParts7; §B5.2/3/4 preserved untouched.
3. **Phase 3 — L30–L34 as 8 sections** (new FaParts12–16): `ratio-profitability` · `ratio-liquidity` · `ratio-solvency-market` · `inventory-valuation` · `ppe-depreciation` · `intangible-amortization` · `analysis-techniques` · `dupont-exam`. All worked figures verbatim from the compendium ($ for Clear View/AS 2 per source & brief; ₹ for L33 per brief).
4. **Phase 4 — workflow diagrams:** ① course-map six stations re-cut to the official six; ② trial-balance Total-vs-Balance splitter + four invisible errors; ③ suspense framing widget + impact matrix badges; ④ Jaws ladder (exists — verified rung notes) kept; ⑤ new Compass three-family builder → ₹72,000 (wired beside Ajay ₹3,48,000); ⑥ FIFO vs WA margin flow with rising/falling toggle; ⑦ SL vs DB 5-year race converging on ₹47,000 (DB capped at residual; uncapped 4,925/2,955 shown as the contrast case); ⑧ DuPont dial (10%×2× vs 4%×5× → 20%).
5. **Phase 5 — exam banks:** `ratios` ≥30, `assets` ≥28; closing +10, cashflow +10 (→ ≥150). Every figure sourced from the compendium; distractors are sign/base/netting errors.
6. **Phase 6 — verification gate:** tsc + build exit 0; 34 records n=1..34; 41 sections, order = n; eyebrows all `Lecture N · …`, zero duplicates; positive strings (`DuPont`, `FIFO`, `LIFO`, `27.62`, `4,140`, `3,057`, `9,400`, `22,800`, `13,680`, `8,208`, `47,000`, `13.05%`, `11.11%`, …) present in bundle; negative assertions (`Module 1 · Assumptions, deep-dive` = 0; `Liabilities = Assets - Capital` absent as formula); twins regenerated (`fa: 41`, `fa: 150`, 41 corpus rows); foc + 5 shelves untouched.

## 4. Guardrails

Design DNA: FA stays emerald (`#047857`/`#10b981`/sage) — no amber retheme. Untouchable: Pyodide Lab, Mistake Ledger SM-2, Cockpit APIs, foc/atb/ebh/stm/mktg sources. Numbers never re-based; §B5.4 figures (`1,62,250`, `46,930`, `69,700`, `72,000`, `3,48,000`, `85,000`) preserved verbatim.

---

## 5. FINAL 34-LECTURE VERIFICATION TABLE (post-upgrade)

Registry `faLectures.ts`: 34 records, n = 1..34 strictly ascending · 41 sections, each owned by exactly one lecture, each rendered exactly once · render order = official sequence (verified programmatically) · all 41 eyebrows derived as `Lecture N · theme`, zero duplicates (dev assertion throws otherwise) · sidebar re-cut into 8 groups (Orientation 4 · Concepts & Conventions 4 · The Equation & Elements 4 · Recording 6 · The Cycle 4 · Final Accounts 6 · Cash Flow 4 · Analysis & Assets 9) · exam banks 9 / 153 questions · twins regenerated (chapter-index 41 fa rows, search-corpus 41, section-counts 41, question-counts 153).

| # | Official lecture | Section(s) | Status | Eyebrow (derived) | Workflow diagram | Exam Qs |
|---:| :--- | :--- | :--- | :--- | :--- | ---: |
| L01 | Introduction to Financial Accounting Course | `course-map` | MATCHED | Lecture 1 · Orientation | Six-station accounting cycle (clickable, official station names) | 12 |
| L02 | Introduction to Accounting: Overview & Foundational Concepts | `language` | MATCHED | Lecture 2 · Foundations | — | 12 |
| L03 | Overview of Accounting Objectives, Users & Regulatory Environment | `users-regulatory` | MATCHED | Lecture 3 · Objectives, users & regulation | — | 12 |
| L04 | Introduction to Financial Accounting (Soleris & Satyam) | `why` | RELABELED | Lecture 4 · The case for standards | — | 12 |
| L05 | Overview of Accounting Concepts & Conventions | `assumptions`, `dual-aspect` | RELABELED | Lecture 5 · The eight concepts / Lecture 5 · Dual aspect | — | 8 |
| L06 | Part Two of Accounting Concepts & Conventions | `periodicity` | REORDERED + RELABELED | Lecture 6 · Periods & matching | — | 8 |
| L07 | Accounting Conventions | `conventions` | MATCHED | Lecture 7 · Conventions | — | 8 |
| L08 | Accounting Records & Systems — Module Two | `equation-lab`, `effects` | RELABELED | Lecture 8 · The equation, worked / Lecture 8 · Transaction effects | Equation machine | 10 |
| L09 | Concepts Meet Financial Statement Fundamentals | `entity-concern`, `elements` | REORDERED + RELABELED | Lecture 9 · Entity & going concern / Lecture 9 · The three elements | — | 10 |
| L10 | Classification of Accounts & Journal Entries | `classification` | MATCHED | Lecture 10 · The traditional approach | — | 12 |
| L11 | Continuation of Journal Entries & Introduction to Ledger | `ledger` | REORDERED + RELABELED | Lecture 11 · Anant & the ledger | Cash T-account | 12 |
| L12 | Ledger Posting & Account Balancing | `balancing` | MATCHED | Lecture 12 · Ledger mechanics | — | 12 |
| L13 | Trial Balance: Concept, Objectives & Preparation Methods | `trial-balance` | RELABELED | Lecture 13 · Trial balance | Total-vs-Balance Method Splitter + four invisible errors | 12 |
| L14 | Overview of Accounting Principles & Journal Entries (Vogue) | `journal` | REORDERED + RELABELED | Lecture 14 · The Vogue Company journal | Journal pipeline StepsFlow | 12 |
| L15 | Continuing Discussion on Trial Balance (Suspense & Errors) | `suspense` | RELABELED + §B5.1 FIXED | Lecture 15 · Trial balance, continued | Framing totals ₹1,80,00,000/₹1,80,50,000 → ₹50,000 + source-slip footnote + impact badges | 12 |
| L16 | Basis of Accounting & the Matching Principle | `basis` | MATCHED | Lecture 16 · Basis of accounting | Upfront slider + replacement-cost lens | 8 |
| L17 | Adjusting Entries in the Accounting Cycle | `adjusting` | RELABELED | Lecture 17 · Adjusting entries | — | 8 |
| L18 | Financial Accounts & the Trading Account | `trading` | REORDERED + RELABELED | Lecture 18 · The trading account | — | 8 |
| L19 | Accounting Cycle: Ledger, Trial Balance & Adjusting Entries | `adjusting-lab` | MATCHED | Lecture 19 · The cycle, in one case | Vogue's six entries | 8 |
| L20 | Final Accounts: Trading & P&L | `gp-lab` | RELABELED | Lecture 20 · Gross profit lab | Gross-profit ladder | 22 |
| L21 | P&L, Closing Entries & Statement Relationships | `pandl`, `statements` | RE-HOMED + RELABELED | Lecture 21 · Net result & the chain / Lecture 21 · The five statements | ₹5,50,000 ladder · Softomation | 22 |
| L22 | Introduction to Balance Sheet | `balance-sheet` | MATCHED | Lecture 22 · The photograph | — | 22 |
| L23 | Introduction to Cash Flow Statement | `cashflow-intro` | MATCHED | Lecture 23 · The fourth pillar | Three-activity sorter | 22 |
| L24 | Final Accounts & Financial Statement Preparation | `final-accounts` | RELABELED | Lecture 24 · Final accounts | — | 22 |
| L25 | Structure & Calculation of Cash Flow Statements | `cashflow-methods` | MATCHED | Lecture 25 · Building the statement | ₹73,000 → ₹69,700 reconciliation ladder | 20 |
| L26 | Cash Flow Analysis: Direct & Indirect (Compass) | `cashflow-build` | MATCHED | Lecture 26 · The indirect method at work | Three-family classifier → ₹72,000 + Ajay ladder → ₹3,48,000 | 20 |
| L27 | Analyzing Cash Flow for Financial Health | `cashflow-health` | MATCHED | Lecture 27 · The diagnosis | Pioneer build | 20 |
| L28 | Financial Statement Analysis: Understanding & Interpreting | `fs-analysis` | MATCHED (re-grouped) | Lecture 28 · From preparing to interrogating | Reddy headline/operating toggle | 32 |
| L29 | Understanding Cash Flow Statements & Their Importance | `cashflow-wrap` | MATCHED | Lecture 29 · The closing argument | Mira timeline | 20 |
| L30 | Ratio Analysis — Profitability | `ratio-profitability` | **ADDED** | Lecture 30 · The six profitability ratios | Ratio explorer + ROA identity dial (10%×2× vs 4%×5×) | 32 |
| L31 | Ratio Analysis — Liquidity, Solvency, Capital Market | `ratio-liquidity`, `ratio-solvency-market` | **ADDED** | Lecture 31 · Liquidity & the operating cycle / Lecture 31 · Solvency & the market | Operating-cycle StepsFlow + supplier-paradox widget + Reddy 2016 verdict | 32 |
| L32 | Inventory Valuation & AS 2 | `inventory-valuation` | **ADDED** | Lecture 32 · Inventory under AS 2 | FIFO vs weighted-average flow ($4,140 vs $3,057) with rising/falling toggle | 29 |
| L33 | PPE, Depreciation & Amortization | `ppe-depreciation`, `intangible-amortization` | **ADDED** | Lecture 33 · PPE & depreciation / Lecture 33 · Intangibles & amortization | SL vs DB race (9,400 vs 22,800/13,680/8,208 → ₹47,000) + AS 26 rules | 29 |
| L34 | FS Analysis Techniques & Exam Guidance | `analysis-techniques`, `dupont-exam` | **ADDED** | Lecture 34 · Techniques of analysis / Lecture 34 · DuPont & the exam | DuPont dial (13.05% / 11.11%) + exam-brief card + Nalesh StepsFlow | 32 |

**Coverage:** all 34 official lectures matched · words target 28,976/28,976 (L30–L34 payload written verbatim from the compendium) · every §B-row resolved: 15 matched, 13 relabeled/re-homed, 3 reordered (L09 pair, L11/L14 inversion, L18/L19), 5 added as 8 sections · §B5.1 framing totals + footnote rendered · §B5.2 wrong formula still absent · §B5.3 group integrity preserved · §B5.4 figures verbatim (1,62,250 / 46,930 / 69,700 / 72,000 / 3,48,000 / 85,000).

**Verification gate (Phase 6):** `tsc --noEmit` exit 0 · `next build` exit 0 · 24/24 positive bundle strings found · 0 negative strings (`Module 1 · Assumptions, deep-dive` gone, wrong-formula absent, `1,90,00,000` only inside the footnote) · foc regression markers intact · dev console prints `[fa] registry OK — 34 lectures, 41 sections, 41 unique eyebrows` · browser-verified: 34 hero rows, 8 nav groups, ledger-before-journal live, L14/L30/L32/L33/L34 deep links, 9-window hub with dual launchers (32+29 Qs), all 6 subjects load, 4 Cockpit routes alive, SM-2/Ledger/ExamEngine untouched.
