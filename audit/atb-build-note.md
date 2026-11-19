# ATB 33-Lecture Rebuild — Build Note

Session: 2026-11-19 · Deliverable: shelf 02 rebuilt to the official 33-lecture course · Bundle: `download/ATB_L01-L33_Compiled.pdf` (all gates PASS)

## Ship gates — measured

| Gate | Required | Measured |
| --- | --- | --- |
| Lectures | 33, codes L1–L33 contiguous, titles byte-exact colon form | 33 records, n=1..33, titles verbatim from the compendium TOC ✓ |
| Chapters/sections | — | 50 sections, registry ↔ nav ↔ SECTION_COMPONENTS ↔ rendered `<Section>` all 1:1 (audit: 9 OK, 0 issues) |
| Eyebrows | zero hard-coded; derived `Part <N> · Lecture <NN> · theme`; throw on unknown id | `eyebrowOf()` throws; `rg 'eyebrow="'` in atb parts = 0 matches; live: "Part III · Lecture 14 · BST & the AVL balance rule", "Part V · Lecture 28 · The final overview" (recap28 mislabel fixed) |
| Groups | 8, sidebar ascending | 8 groups partition L1→L33 in ascending contiguous runs: intro → props → linear → stackq → trees → hash → search → algo (registry dev-assertion throws otherwise) |
| Registry parser | field order part, partLabel, group, groupLabel, examStatus | regen/audit/bundle parsers written against that order; `groupLabel` resolves the GL constant map |
| Diagrams | ≥115 total (91 retained), ≥2 in 20 lectures, ≥1 in all 33 | 171 attributed figures; 24 lectures with ≥2; all 33 with ≥1 |
| Workflows | data-bearing steppers; ≥45 new traces, ≥2 in 18 lectures, ≥1 in all 33; final frame = prose answer | 54 `AtbStepper` traces; 18 lectures with ≥2; all 33 covered |
| Figure hygiene | figcaption on every figure; aria-label on every SVG; thead on every table | 75+ AtbFigure wrappers (52 bare SVGs codemod-wrapped + hand-made); every informative SVG carries role="img" + aria-label; 19 tables = 19 theads |
| Assessment | Quiz One (L13), Quiz Two (L23), exam logistics (L28) as distinct callouts, never merged | three `AtbExamCallout` instances, verbatim from transcripts; verified live |
| Bundle PDF | L01 on page 3 · 34 top-level bookmarks · zero unresolved TOC page numbers · 2-pass PyMuPDF map · .toc-pnum (not .toc-page) · markdown tab_length=2 | `python3 build_atb_bundle.py` reports: Detected 33 lectures · Lecture 1 on page 3 · Top-level bookmarks: 34 · Unresolved: 0 · Sequence check: PASS → ALL GATES PASS |
| Word count | official compendium claims 30,674 verified words | cover reproduces the official claim; extracted transcript bodies total 30,059 words (running chrome stripped); rebuilt bundle incl. chrome measures 34,619 — the content is the same 33 transcripts |
| Code gates | bun test / tsc / lint / build | 39 tests pass · tsc clean · lint clean except the pre-existing `scripts/report-gen/generate.js` require() errors (initial-commit file, untouched) · production build exit 0 |
| Live checks | deep links, stepper a11y, 360px | `#/subject/atb/l14` lands on L14 with derived eyebrow; stepper dots toggle `aria-pressed` + aria-live caption; 360px scrollWidth = clientWidth (no horizontal scroll); hero sequence renders 33 rows |

## Untouchables — status

- Four Venns carried across: arrays-vs-lists (venn8), stack-vs-queue (recap13), trees-are-graphs (venn18), three-circle finale (venn23) ✓
- Big O growth curves (recap28 `CurveRow`) retained ✓ · 91 existing inline SVGs retained (none converted to steppers — the stepper lives alongside as `AtbStepper`) ✓ · 259 chip citations preserved inside kept sections ✓ · 8 exam banks untouched (51 questions) ✓

## Visual conventions — applied

Stack grows/shrinks at the top only (`AtbStackCol`); queue enqueues rear-right / dequeues front-left, never rotated (`AtbQueueRow`, and the recap13 anatomy SVG was flipped from its old rear-left layout to obey the convention); array index 0 on the left with value and index on separate rows (`AtbCells`); trees root-top/leaves-bottom with depth left / height right (recap18 example tree); olive `#7c9a3e` = working twin, neutral = broken, never red (`CellTone` system); arrow-marker ids unique per SVG (audited prefixes atb*/r13*/r23*/ops13*); bronze palette `#c2410c` on `#fffaf1` with `#c99a5b/#f5c889/#2b2014/#7c4a12/#b45309/#e9d7bf` — no FoC amber retheme, no FA teal.

## Source arithmetic — reproduced verbatim, flagged (never silently fixed)

1. **L04 vs L05 credit-score threshold**: L04 states loan criteria `income > 50,000 AND credit score > 600`; L05 states `income > 50,000 AND credit score > 700`. Both reproduced verbatim in their own lectures (the L04 loan twins use 600; the L05 determinism example uses 700). The compendium is internally inconsistent — not reconciled.
2. **L14 vs L23 BST right-child rule**: L14 says right subtree values are always **greater** than the parent; L23's ladder says `left < parent · right ≥ parent`. Each lecture reproduces its own wording.
3. **L18 pre-order slip**: the compendium prints pre-order "A B D C" for the A/B/C/D/E tree — inconsistent with its own in-order D B E A C, post-order D E B C A, level-order A B C D E and with the user's exact anchor. The site ships the anchored **A B D E C**; the compendium slip is flagged here.
4. **L33 vs L30 quick-sort space**: L33's table lists quick sort space as **O(log n)** (recursion stack); L30 says "less extra space than merge sort". Both reproduced as written.
5. **L05 greedy figure re-based**: the shipped site's change-making figure (₹88 → 50+20+10+5+2+1) does not appear in the compendium; the transcript's official example (₹500 paid · ₹150 ticket · ₹350 change → 200+100+50) replaced it in the rebuilt L05 figure and stepper. Shape retained, numbers re-based to the authority.
6. **Queue anatomy flip**: the shipped recap13 SVG drew enqueue at the rear-LEFT; flipped to rear-RIGHT / front-LEFT per the mandated convention. Noted as a deliberate convention fix (the SVG itself is retained, direction corrected).
7. **PageRank first round verified in python**: A 0.0375+0.85×0.25 = 0.25 · B 0.0375+0.85×0.125 = 0.14375 · C 0.0375+0.85×(0.125+0.25+0.25) = 0.56875 · D 0.0375 — the transcript's ≈ values reproduce exactly.

## Deploy hashes (re-resolved before this build)

- Live deploy as of 2026-11-19: webpack runtime `webpack-7bfcbb5626e014a1.js` (moved from `7b73565829000113` recorded 2026-11-16); ATB chunk id **6307**, content hash **ba87bb5af40081e6** (`6307.ba87bb5af40081e6.js`) — unchanged since 2026-11-16, i.e. the live shelf still ships the 28-lecture version.

## Transcripts & corpus

- `scripts/atb_lectures/L01.md–L33.md` extracted verbatim from `upload/ATB_L01-L33_Compiled.pdf` via PyMuPDF bookmarks (33 lecture spans, headers/footers stripped) by `scripts/extract_atb_transcripts.py` — the sole content authority.
- `build_atb_bundle.py` compiles the transcripts back into the verification bundle: markdown `tab_length=2`; WeasyPrint render; two passes with PyMuPDF reading each lecture's real page (pass 1 placeholders, pass 2 fills `.toc-pnum` spans — `target-counter()` on a span without href renders 0, which is why the CSS-only route was abandoned); gates enforced in-script.
