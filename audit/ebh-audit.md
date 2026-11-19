# EBH — the shelf 04 baseline audit (pre-rebuild)

Session: 2026-11-19 · Task: preparation for the shelf 04 rebuild ("self number 4",
Economic & Business History) · Audit gate: `bun scripts/audit-ebh-content.ts` — 16 OK / 0 issues.

## 1. Live state on record

Economic & Business History is one continuous course mapped 1:1 to the official lecture
deck (Prof. Manu Kanchan, IIT Jodhpur), Lecture 1 → Lecture 28, no gaps.

| Property | Value |
| --- | --- |
| Registry | `src/components/ebh/lectures.ts` — 28 entries `l1`–`l28`, codes `L1`–`L28`, each with its official title |
| Chapters | 31 sections across the 28 lectures (some lectures own 2 chapters) |
| Sidebar | 5 module groups (the course's own five modules): Module 1 · The Lens (10) · Module 2 · Early Systems (7) · Module 3 · The Machine Age (8) · Module 4 · The Corporation (5) · Module 5 · Indian Business (1) |
| Exam banks | 5 banks keyed to the modules — `lens`, `before`, `machines`, `corporation`, `india` — 66 questions total |
| Twins | section-counts 31 · question-counts 66 · chapter-index 31 rows · search-corpus 31 chapters (text verified against current sources) |
| Rendering | `EbhApp` renders `SECTION_COMPONENTS[c.id]` by iterating `lecture.chapters` — reader order = registry order by construction |
| Palette | warm canvas + amber accent `#eab308` (`.ebh-app` token) |
| Identity | clean — no other shelf's vocabulary or component names anywhere in the EBH surface |

## 2. Defect found and fixed at baseline

- **Duplicate DOM id `top`** — `EbhHero`'s `<header id="top">` mounted inside `EbhApp`'s
  wrapper `<div id="top">` (the same defect the mktg rebuild fixed). Removed from the hero;
  the brand chip's `#top` link resolves to the reader wrapper. Fixed in this session.

## 3. Gap analysis — what the rebuild must raise (the audit's WATCHLIST)

| # | Gap | Baseline | Rebuild bar (set by shelves 02–03) |
| --- | --- | --- | --- |
| 1 | Diagrams | 24/28 lectures have **no figure at all**; 5 inline SVGs total | ≥1 figure per lecture; a registered `diagrams/` barrel of reusable components |
| 2 | Workflows | 9/28 lectures have no stateful machine | ≥1 data-bearing workflow per lecture |
| 3 | Captions | 0 figcaptions | every figure captioned |
| 4 | Coverage split | Module 5 (Indian Business) carries 1 chapter for its whole span | per-lecture depth |
| 5 | Eyebrows | 25/31 name their lecture number; freeform phrasing | standardised `Economic & Business History · Lecture N` |
| 6 | Palette | amber `#eab308` on warm canvas | a fresh shelf palette per the atlas convention |
| 7 | Corpus | **no verbatim source corpus exists in the repo** — no compendium PDF, no transcripts | a verified corpus as sole source of truth, extracted + reconciled like `POM_L01-L40_Compiled.pdf` |

## 4. Open question on record — the Module 1/2 boundary

The registry numbers **L8 = "Agrarian Economies: Land, Lords & Zamindars"** and
**L9 = "Society, Economics & Technology: Ford to Netflix"**; the reader therefore sees
agrarian → Ford/Netflix. The sidebar instead closes Module 1 · The Lens with the
Ford/Netflix chapter and opens Module 2 · Early Systems with agrarian — the pedagogically
coherent arc. One of the two drifted; which side the official deck favours cannot be
resolved without the source. **The rebuild prompt (with the official 28-lecture sequence)
settles this** — until then nothing was moved.

## 5. What the rebuild needs from the course owner

1. **The verified source corpus** — the EBH compendium PDF (like `POM_L01-L40_Compiled.pdf`)
   or per-lecture transcripts, uploaded to the sandbox. Nothing verbatim can be authored
   without it; the current 31 chapters were built from materials no longer in the repo.
2. **The rebuild brief** — official lecture sequence (28 or more), teaching arcs, the
   shelf's palette, reserved slots if any, exam-bank shape.
3. Confirmation on the L8/L9 boundary question (Section 4) if the corpus doesn't settle it.
