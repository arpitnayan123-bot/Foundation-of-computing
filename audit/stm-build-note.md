# STM — the shelf 05 rebuild build note

Session: 2026-11-20 · Task: the full Statistics for Managers rebuild
("the last subject") per the rebuild brief — shelf 05, Deepak Silvastov,
IIT Jodhpur B.S. in Management & Technology, Semester 1; prescribed text
Anderson & Sweeney's Statistics for Business and Economics, 13th edition onward.

## 1. What was wrong with the deploy (verified live, per the brief and re-verified here)

| Defect | Verified state on the live deploy | Rebuild |
| --- | --- | --- |
| 27-lecture registry `l1`–`l27` | 27 entries, no slot for L28–L33 | 33 lectures, L28 reserved and blank |
| 31 chapter entries | 31 sections | 67 chapters |
| L03 replaced by L01's scales material | a 347-word "Course Launch — Data Anatomy & the Scales" chapter | the real administration lecture: 3 chapters, 956 transcript tokens (instructor, textbook, tools, AI policy, evaluation) |
| L28 has no slot at all | — | keeps its number, one blank page, explicit bookmark label |
| L29–L33 missing outright | zero hits for "Quality Associates", "one-tailed", "critical value", "p-value", "sample size determination", "60 marks", "scientific calculator", "non-programmable" | built in full from the transcripts |
| zero inline SVG figures, zero tables | the only shelf with no figures | 137 figures, 44 tables, 15 distribution curves, 7 rejection regions |
| six ad-hoc groups, sampling under "continuous" | sidebar sorted out of lecture order | six modules cut against the lectures' own chapter citations (L13 → Ch 6, L23 → Ch 8, L33 → Ch 1-9), sidebar ascending by n |

## 2. Structure of the rebuild

- **Registry** — `src/components/stm/lectures.ts`: 33 records, field order
  pinned `id, n, code, title, blurb, group, groupLabel, chapters`. The 33
  titles byte-exact from the compendium bookmarks — including the deliberate
  L01/L03 duplicate ("Introduction to Statistics for Managers" twice: one
  conceptual lecture, one administrative; never merged in the registry, the
  TOC, the PDF bookmarks or the search index). L28: `title: null`,
  `chapters: []`, blurb = the compendium's own removal card;
  `STM_RESERVED_BOOKMARK = "Reserved — removed from the official course
  sequence"` — explicit, never a fallback.
- **Six modules** — M1 Data & Displays L01-04 (10 chapters) · M2 Numerical
  Measures L05-08 (9) · M3 Probability L09-11 (6) · M4 Distributions L12-16
  (10) · M5 Sampling & Estimation L17-26 (20) · M6 Hypothesis Testing L27-33
  (12; L28 contributes none). `Module 7` appears nowhere; the audit greps.
- **67 chapters** (brief bar: ≥42) — every non-reserved lecture ≥1; L03
  carries 3; sidebar order = registry order by construction (GROUPS derive
  from `STM_MODULES` + `STM_LECTURES`).
- **Eyebrows** — `eyebrowFor(<own id>)` derives `Module <N> · Lecture <NN> ·
  <short topic>`; unknown chapter ids throw. Zero hard-coded eyebrows (the
  audit greps for the literal pattern in the parts files).

## 3. The corpus — sole authority, and the word-count reconciliation

Source of truth: `upload/STM_L01-L33_Compiled.pdf` (the master compendium,
110 pages, 34 top-level bookmarks), extracted by
`scripts/extract_stm_corpus.py` — a **size-aware layout-aware** extractor
(sub-heads are the 10.0/11.4pt bold rows and never join into paragraphs;
bullets "•" at x=54 with text at x=63; sub-bullets "◦" at x=70 with text at
x=79; the 8.4pt table rows and the reserved page's card are furniture), and
writes `scripts/stm_lectures/L01.md..L33.md`, each opening with
`# Lecture N: <bookmark title>` cross-checked byte-exact against the bookmark
(33/33 — including the L01/L03 duplicate).

**Completeness is machine-verified**: a per-lecture token-multiset diff of
the transcripts against the raw PDF text reports extra=0 missing=0 (32/32
content lectures; the reserved page is asserted separately — its card is the
only text on its page). L28's transcript ships empty.

The word-count numbers, stated plainly:

| Measure | Value | What it is |
| --- | --- | --- |
| Extracted corpus content tokens | **24,785** (extractor measure) | transcript bodies, H1 + bullet markers excluded; 100% of the compendium's content, byte-identical (`gen_stm_corpus_ts.py --verify`: 2,653 blocks byte-identical) |
| Shipped block tokens (corpus.ts) | 24,866 | what the site's search corpus indexes |
| Compendium cover claim | 27,198 "verified words" | includes per-lecture furniture |
| Deployed shelf's prose (before) | 24,602 tokens | the brief's "roughly 90% of the course" measure |

The ~2.3k-token gap between the verbatim compendium body (24,785) and the
claimed 27,198 is **session furniture the compendium's own build stripped**
— timestamps/speaker noise of raw lecture transcripts — exactly the same
family of gap the POM compendium showed (cover 34,414 vs body 31,960) and
EBH (cover 31,994 vs body 29,426). It cannot be recovered from the material
that exists and it is not invented. The gate that IS checkable — every
content token the authority carries ships, byte-identical — passes and is
gated in the audit. The PDF bundle's cover badge carries the official
27,198; the builder reports the measured count on the record.

## 4. Figures, tables, workflows, maths

- **137 figures** across 67 chapters (bar: ≥75) — every one rendered through
  `StmFigure` (role=figure, aria-label, figcaption, `break-inside: avoid`).
- **15 distribution curves** drawn by the sigma-scale `CurveSvg` engine
  (bar: ≥14): every curve's x-axis is measured in standard deviations, the
  mean carries its own marked line, and every shaded region is labelled with
  its probability (68.26 / 95.45 / 99.72; 0.0228; 5%; 95%; 70% / 30%;
  7.86%; 2.5% tails…).
- **7 rejection regions** (bar: ≥6) with the test statistic marked as a
  point ON THE AXIS so a reader sees at a glance whether it falls inside the
  shading: Metro EMS reject (2.47 inside), Metro sample fail (1.04 outside),
  Quality Associates Sample 3 reject (−2.87 inside), Sample 2 no-decision
  (0.78 outside), toothpaste two-tail reject (2.74 inside), highway-speeds t
  reject (2.286 inside), drunk-driving proportion fail-to-reject (1.278
  between ±1.96).
- **44 tables** (bar: ≥15), every one through `StmDataTable` with a
  guaranteed `<thead>`.
- **CalcFlow** — the shelf's new calculation tracer: formula (symbolic) →
  substituted numbers → intermediate value → result, with the final frame
  matching the answer the prose states. 31 chains shipped. It carries z of
  alpha over two, radicals, sums, mu, sigma and superscripts through the
  maths layer; ATB's AlgoFlow and EBH's EbhFlow are reused nowhere.
- **Workflows** — every non-reserved lecture carries at least one stateful
  machine (StmSteps or CalcFlow): 32/32 (audit-gated). The RANDBETWEEN
  recipe keeps its five-step walk with the paste-values freeze called out as
  the step that makes a sample real.
- **Maths markup** — `inlineMaths` maps σ_x̄, σ_p̂, σ_{p̂}, σₓ, z(α/2),
  Z_(α/2), t_{0.05}, √[…], √(…) to real markup (serif-italic variables,
  true subscripts, radical overline) at render time; the corpus strings stay
  byte-identical. p̂ everywhere; p̄ nowhere (audit-gated, corpus and source).
- **Colour law** — violet #8b5cf6/#6d28d9 marks the population and the
  curves, gold #ca8a04/#e6cd7f marks the decision (rejection regions,
  verdicts, highlighted bands), muted grey #8b8098 the sample and the
  no-decision statistics. Red never appears as a verdict — the audit greps
  the rejection-region source for red.

## 5. The four assessment blocks — preserved verbatim, the chain visible

- **L03** — three quizzes, best two counted; end-term written, subjective +
  objective; data-collection and interpretation skills.
- **L13** — two 20-mark quizzes plus one combined-syllabus quiz, best two of
  three, covering Chapter 6, objective only, 15-20 minutes, calculator
  allowed.
- **L23** — supersedes both: only two quizzes, best of two, Quiz 2 through
  Chapter 8, dates communicated in writing, scheduling avoids the Diwali
  holiday. The callout carries the explicit supersession chain (L03 → L13 →
  L23) — marked, never merged.
- **L33** — the end-term brief: 2 hours, 60 marks, mixed very-short/medium/
  multi-part, Chapters 1-9 with emphasis on 1-8, a scientific
  non-programmable calculator mandatory, z-tables and all required values
  supplied in the question paper, a sample paper by the end of the week.

## 6. The nine source conflicts — both sides, none reconciled

1. Chebyshev's 75 / 89 / 94 (L06) against L12's 68.26 / 95.45 / 99.72
2. L22's z-approach against L24's switch to t
3. The Marrian spelling — the deck's own (8×) stands verbatim
4. L06's rounded empirical rule (68 / 95 / 99.7) against L12's precise one
5. L27's Type I/II framing (α = significance level, the 2×2 table) against
   L29's re-teaching (false positive / false negative, α = 0.05 / 0.01)
6. The standard-error symbol variance — σₓ (L21) vs σ_x̄ (L19/L23);
   σ_p̂ (L19) vs σ(p̂) (L25) vs σ_{p̂} (L31); the proportion's SE with
   population p (L19, L25's skeleton table) and with sample p̂ (L25's
   formula, L31)
7. L26's stated margin 7,076 (interval 66,264-80,416) against its own
   σ = 24,849 / n = 50 inputs (which imply ≈ 6,888); the planner's
   n ≈ 95.26 → "approximately 100"
8. L22's 1,000-store/50-sample narrative against the worked interval's own
   n = 36 arithmetic (σ(x̄) = 750; margins 1,234 / 1,470 / 1,932 all exact
   at n = 36)
9. L19's finite-population correction rule against L23's lab sampling 50 of
   a finite 2,500 with plain σ/√n

All nine are gated assertions in the audit — both sides must render; no
visible correction is ever added to a rendered page.

**Watchlist (report-only, from the audit of the corpus):** z(0.005) = 2.576
(L22/L25) vs 2.57 (L32's control limits); the α = 0.03 worked example (L31)
against L29's "common choices" 0.05/0.01; L13's "adding 80 days of 10 units"
phrasing against the arithmetic that implies the 80 zero-sale days are
replaced (1.2 → 5.2 checks only on replacement); the L26 planner printing
n ≈ 95.26 where the recompute gives ≈ 94.9.

## 7. The bundle — hard gates, all green

`python3 build_stm_bundle.py` (WeasyPrint + the two-pass PyMuPDF page map):

- 33 lectures · **Lecture 1 on page 3** · **exactly 34 top-level bookmarks**
  (TOC + 33, not 35) · the reserved bookmark reads "Lecture 28 · Reserved —
  removed from the official course sequence" · zero unresolved TOC page
  numbers (.toc-pnum second-pass injection) · running header
  "STATISTICS FOR MANAGERS · SEM 1" on all 112 content pages · strict
  sequence check · **L28 ships one blank page (p98) carrying only the
  removal card** · the five missing lectures present with all their marker
  terms · Marrian / Silvastov / GIG and the conflict figures verbatim ·
  the L01/L03 duplicate alive · p̂ everywhere, p̄ nowhere ·
  **114 pages** (source compendium: 110) · 30,888 built words incl. chrome /
  26,512 corpus tokens.

## 8. Verification (all green)

- `bun test` — 95 pass (61 pre-existing + 34 new registry gates: contiguity,
  byte-exact titles, the duplicate, the reserved slot, six modules, 67
  chapters, corpus authority, zero-hit words, the nine conflicts, banks
  shape, the 62 legacy ids, the maths law)
- `npx tsc --noEmit` — clean
- `bun scripts/audit-stm-content.ts` — **ALL GATES PASS** (registry ↔
  GROUPS ↔ SECTION_COMPONENTS ↔ rendered `<section>` 1:1, source order =
  reading order, six modules partition, banks 85, twins covered,
  eyebrow scheme derived, per-lecture diagram+workflow coverage, reserved
  card on the page, identity scans clean)
- `npm run build` — green
- The twins: chapter-index 67 stm rows · search-corpus 67 chapters ·
  section-counts 67 · question-counts 85 · shelf total now 331 chapters

## 9. Known leftovers

- The `Foundation-of-computing/` nested gitlink remains a pre-existing
  landmine — never `git add -A`
- The EBH rebuild's 17 commits remain unpushed pending the fresh PAT; the
  STM stack pushes after EBH's, in order
- The reserved page's header band ("Lecture 28 · removed from course") is
  the compendium's own furniture and renders verbatim on the blank page
