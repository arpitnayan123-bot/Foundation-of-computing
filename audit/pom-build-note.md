# POM — the Principles of Marketing rebuild (build note)

Session: 2026-11-19 · Task: the full 40-lecture rebuild per the owner's prompt · Committed as Arpit Nayan.

## 1. What shipped

The subject is rebuilt from the official 40-lecture sequence whose verified corpus
(`upload/POM_L01-L40_Compiled.pdf`, cover-claimed **34,414 words**) is the sole source of truth.

| Property | Value |
| --- | --- |
| Registry | `src/components/mktg/lectures.ts` — 40 entries `l1`–`l40`, codes `L01`–`L40`, official titles verbatim, ids of L1–L28 preserved exactly |
| Chapters | 78 sections (52 surviving chapters + 2 reserved + 24 authored); `recap22` retired |
| Teaching arcs | 6 parts replacing the 8 ad-hoc groups: I L01–10 · II L11–17 · III L18–22 · IV L23–28 · V L29–34 · VI L35–40; reserved lectures sit inside the arc their number falls in (L22 → Part III, L39 → Part VI) |
| Reserved | `reserved-22` / `reserved-39` render only the wine removal card ("numbering preserved · page intentionally left blank"); physically placed between their neighbours so rendered order = registry order |
| Authored | L29–L38 + L40 from the corpus via `src/components/mktg/corpus.ts` (generated **verbatim**, 1,084 blocks / 10,790 words, `--verify` byte-identical) rendered through `CorpusBlocks` |
| Diagrams | 24 registered reusable components in `src/components/mktg/diagrams/` (kit + barrel), including the eight named figures: JourneyFive (with the non-linear rewrite), MessyLoop, MaslowPyramid, AbcChain, WidthDepthGrid (data-driven, both totals), PricingLadder, ThreeCsTriangle, System1System2 |
| Workflows | 11 new `MktgStepper` workflows (one per authored lecture, end frame = prose answer) + the 43 pre-existing stateful machines untouched |
| Exam banks | 10 banks × 6 questions = 60: the eight pre-existing keys intact (48 questions untouched) + `product` (Part V) + `practice` (Part VI); part→bank map in `MKTG_PART_BANKS` |
| Palette | teal `#0f766e` · brass `#a97d2c` · gold `#e3c26b` · ink `#1f2b2b` · paper `#f2efe7` · wine `#9f3d54` (removed-lecture markers + authoring notes ONLY); the off-spec `#14b8a6` and lagoon darks purged across all subject files |
| Identity | no algorithmic-thinking vocabulary, no SHELF 02 badge, no stale running header, output named `POM_L01-L40_Compiled.pdf` — audit-gated |
| Twins | chapter-index 78 mktg rows · search-corpus 78 chapters · section-counts 78 · question-counts 60 · shelf total **271** |

## 2. Corpus extraction (`scripts/extract_mktg_corpus.py`)

Bookmarks → page spans → furniture stripped (top eyebrows, running header, footers, the
source's off-by-one "removed from course" footer quirk on pp. 68/124 — logged), bullets
normalised, stray ordered-list markers dropped. Quirks verified present and preserved:

- **L33** renders Kiehl's as **"Kéels"** and Dettol as **"Detal"** — kept verbatim (authoring note on `three-strategies`)
- **L35** carries **"Parleji Surakshah"** — kept verbatim (authoring note on `product-strategy-triad`)
- **L36** arrived with LaTeX dollar-math shattered into letter-spaced junk around $9.99/$4.99/₹49,199; the compendium carries the **rebuilt ordinary prose with currency symbols intact** — reproduced exactly as received and logged (authoring note on `pricing-3c`)

Word reconciliation: **31,960 measured body words** (furniture + title lines excluded) vs the
cover's **34,414** — the source compiler's count includes page furniture; the bundle reports
both and the cover badge carries the official 34,414. No method reproduces 34,414 exactly
from body text alone (checked raw/furniture/subset combinations).

## 3. Authoring notes (wine) — where the source is ambiguous

- **L28** (`bias-lab`): the corpus promises Pratfall / Halo / Decoy / Framing "in subsequent sessions" — no later lecture delivers them (Decoy & Framing resurface inside L36 as pricing effects)
- **L30** (`product-mix-wdl`) + **L31** (`width-depth-length`): the same parent-company width/depth/length exercise totals **11** (home decor 1) and **12** (home decor 2) — both reproduced as received
- **L36** (`pricing-3c`) + **L37** (`pricing-effectiveness`): pricing objectives and the 3C/customer-value triangle overlap across the two lectures
- **L38** (`three-cs-marcom`) + **L40** (`three-cs-final`): the three Cs, the Comfort ad and the attention figures are deliberately re-taught in the final class
- Additional observed overlaps recorded in the register: Epicurus' buckets (L26/L34), the ABC framework (L27/L34), anchoring re-taught (L28/L31)

The consolidated register lives in **`audit/pom-open-questions.md`**.

## 4. Verification (all green)

- `bun test` — 48 pass (39 pre-existing + 9 new registry assertion blocks: 40 ascending entries, official titles, reserved flags, arc partition, bank shape)
- `npx tsc --noEmit` — clean
- `bun scripts/audit-mktg-content.ts` — **0 issues** (registry ↔ SECTION_COMPONENTS ↔ rendered `<Section>` 1:1, source order = reading order, arcs partition, banks 6×10, twins covered, eyebrow↔lecture verified, per-lecture diagram+workflow coverage, reserved blank-but-for-card, identity scan clean)
- `python3 build_pom_bundle.py` — **ALL GATES PASS**: 40 lectures · Lecture 1 on page 3 · 41 top-level bookmarks with reserved labels carrying their numbers · reserved pages blank-but-for-the-card at pages 89/163 between their neighbours · running header `PRINCIPLES OF MARKETING · SEM 1` on all 167 content pages · strict sequence check (fails the build, not a warning) · 169 pages · 37,523 built words / 31,960 corpus body words · no prior-subject identity
- `npm run build` — green (see runbook note: build kills the dev server; restart after)

## 5. Known leftovers

- L01–L28 section bodies keep their hard-coded section eyebrows (additive rebuild — bodies untouched per the preservation rule); the new + reserved sections use Part-prefixed eyebrows
- The `Foundation-of-computing/` nested gitlink remains a pre-existing landmine — never `git add -A`
- `scripts/report-gen/generate.js` lint failure is pre-existing and out of scope
