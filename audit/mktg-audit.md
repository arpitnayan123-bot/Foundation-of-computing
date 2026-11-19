# MKTG (Principles of Marketing) — Pre-Restructure Audit & Readiness

Session: 2026-11-19 · Incoming: the full rebuild prompt + official lecture PDF (not yet delivered) · Current ground truth: the shipped 28-lecture reader (L1–L28 → 53 chapters, shelf 06).

The shelf is structurally healthy: registry ↔ nav ↔ components ↔ rendered sections ↔ twins are all exact 1:1 today, and every one of the 53 hard-coded eyebrows names its correct registry lecture. This file records the measured baseline, the get-ready infrastructure built this session, and the runbook for the incoming rebuild.

## 0. Repo state established this session (read first)

- The working tree was byte-identical to remote `dbb8ef8` ("feat(atb): full 33-lecture rebuild — six parts, 50 sections, 54 workflow steppers") while the local branch lagged. **Aligned: `git reset --hard dbb8ef8`** after verifying zero content delta; backup branch `backup/local-pre-mktg` keeps the old local-only tip (`1d1cbef`).
- ATB is DONE and deployed: 33 lectures → 50 chapters, 8 groups, 51 questions, audit green. Its transcript corpus lives in `scripts/atb_lectures/L01–L33.md`; the compiled PDF is `download/ATB_L01-L33_Compiled.pdf` (untracked deliverable).
- Live site (`foundationofcomputing.vercel.app`) shows six live Semester-1 shelves, `06 Principles of Marketing` included — landing and repo agree.
- Twin header comments were stale ("= 229"); corrected to the real totals (**246**: foc 40 + atb 50 + fa 41 + ebh 31 + stm 31 + mktg 53) in both `section-counts.ts` and `chapter-index.ts`.
- **Landmine recorded, not yet removed:** the git index/remote tree carries a dangling gitlink `Foundation-of-computing` (mode 160000, no `.gitmodules`) plus the physical nested clone directory on disk. It is already committed upstream, so it is harmless to the deployed build, but any future `git add -A` must not touch it; removing the gitlink + `.gitignore` entry is a one-line hygiene commit when the user next asks for a push.

## 1. Verified live state (code-measured)

| Property | Value |
| --- | --- |
| Shelf | `subjects.ts` #06 — "Principles of Marketing", short "MKTG Notes", accent teal `#14b8a6`/`#0f766e`, ambience `beacon`, semester 1, status live |
| Registry | `src/components/mktg/lectures.ts` — 28 lectures `l1`–`l28` (`id, n, code, title, blurb, chapters[]`; chapter = `{id, label, desc}` — **no group/theme fields**, unlike ATB); `MKTG_GROUPS` (8 groups) lives in the SAME file; `MKTG_ALL_CHAPTER_IDS` flat map; `lectureOfChapter` / `lectureById` helpers |
| Chapters | 53 total — L1·1, L2·3, L3·5, L4·2, L5·2, L6·2, L7·2, L8·2, L9·2, L10·2, L11·2, L12·1, L13·1, L14·2, L15·2, L16·2, L17·2, L18·2, L19·2, L20·2, L21·1, L22·1 (honest recap — "Lecture 22's page in the source PDF is blank"), L23·2, L24·2, L25·2, L26·2, L27·1, L28·1 |
| Shell | `src/components/mktg/MktgApp.tsx` (916 lines) — `SECTION_COMPONENTS` literal 53-entry map, nav + "Test my knowledge" hub derived from `MKTG_GROUPS`, `useOpenSection("mktg", goToChapter)` at line 858, `useSeenDisplay` per-lecture, `MktgExamWindow` per group |
| Parts | `MktgParts1–4.tsx` (~10.1k lines) — 53 `<Section id>` blocks; **diagrams live in same-file helper components above the sections** (`DeclineMachine`, `PatternSvg`, `SystemMachine`, `WalletMachine`, `MindMachine`, `ChaiMachine`, `ScaleMachine`, `BiasCard` family…) rendered by reference — any coverage tool must follow the indirection |
| Eyebrows | All 53 hard-coded as `"Principles of Marketing · Lecture N"` and all 53 match the registry lecture (audit-enforced) |
| Exam | `mktg/questions.ts` — 8 banks × 6 = 48 questions, types `mcq \| output \| short` only (29/6/13); `MktgExamWindow` → shared `ExamEngine` + `MKTG_EXAM_THEME`, `draftId = group id` |
| Twins | `chapter-index.ts` (53 mktg rows) · `search-corpus.json` (53 mktg chapters; text = eyebrow-led document order) · `section-counts.ts` (`mktg: 53`) · `question-counts.ts` (`mktg: 48`); shelf total **246** sections |
| Router | `page.tsx` mounts `MktgApp` for `view.id === "mktg"` with **no `initialLecture`** (deep links land on L1; only FoC/FA take the prop) |
| Tests | `bun test` 39 pass (router + FA calcs) — no mktg-specific tests; `tsc --noEmit` clean; `npm run build` green |

Section → component file map (53): MktgParts1 `why-mktg anticipation topline mktg-vs-selling definitions mktg-system marketable need-want-demand demand-states closed-system biz-value chai-value cpv-formula` · MktgParts2 `environment exchange-system value-price-features luxury-lever es-ds purchase-chain context-matters loyalty-econ campaigns-esds beyond-purchase heterogeneity bases behavioral-benefit` · MktgParts3 `tupo-case safe-targeting pos-3q accor-map frame-podspops four-levels pop-pod-evolution three-circles pod-pop-cases why-buy eras-nudges five-stages messy-middle` · MktgParts4 `journey-variations autopsy-purchase touchpoints-framework recap22 motivation-theories theory-match brand-perception almonds-price sensory-stages gestalt-lab attitude-buckets retention-acquisition abc-humanization bias-lab`.

Groups: `foundations` (L1–2) · `concepts` (L3–4) · `value` (L5–7) · `loyalty` (L8–10) · `stp` (L11–14) · `positioning` (L15–17) · `consumer` (L18–22) · `psychology` (L23–28) — 8 ascending lecture blocks.

## 2. Baseline audit result (`bun scripts/audit-mktg-content.ts`)

**14 OK · 4 watch · 8 issues:**

```
[OK] sequence L1..L28 continuous · chapter ids unique (53)
[OK] MKTG_GROUPS partitions all 53 chapters exactly once across 8 groups · ascending lecture blocks
[OK] registry <-> SECTION_COMPONENTS 1:1 · registry <-> rendered <Section> 1:1 · source order = reading order
[OK] exam banks match MKTG_GROUPS 1:1 · 48 questions, ids unique, 0 integrity problems
[OK] search-corpus covers all 53 mktg chapters · corpus text matches current sources (heuristic)
[OK] section-counts mktg=53 · question-counts mktg=48 · all 53 eyebrows name their registry lecture
[WATCH] 43 machine-style workflow widgets (one per section — strong baseline)
[WATCH] 0 figcaptions · 0 theads (ATB standard: every figure captioned, every table headed)
[WATCH] 41 inline SVGs across parts (+2 hero)
[ISSUE] MktgHero <header> id=top duplicates the MktgApp wrapper's id=top (cosmetic)
[ISSUE] L1, L7, L12, L14, L18, L22, L28 — NO diagram (0 svg) in any chapter
```

Diagram coverage per lecture (svg count after helper indirection): L1 0 · L2 2 · L3 2 · L4 1 · L5 2 · L6 2 · L7 0 · L8 2 · L9 1 · L10 1 · L11 1 · L12 0 · L13 1 · L14 0 · L15 3 · L16 1 · L17 1 · L18 0 · L19 2 · L20 2 · L21 1 · L22 0 · L23 2 · L24 2 · L25 1 · L26 1 · L27 1 · L28 0.

Exam integrity: all 8 banks 0 problems (foundations 6 · concepts 6 · value 6 · loyalty 6 · stp 6 · positioning 6 · consumer 6 · psychology 6 = 48).

## 3. Infrastructure prepared this session (the get-ready kit)

1. **`scripts/audit-mktg-content.ts` (new)** — the ATB audit machinery adapted: registry sanity, MKTG_GROUPS partition + ascending-block checks, `SECTION_COMPONENTS` 1:1, rendered `<Section id>` scan over MktgParts1–4 **with source-order == registry-order check**, exam-bank integrity, twins coverage + staleness heuristic, stale-comment detector, duplicate `id="top"` detector, ReadStep `n` monotonicity, **eyebrow↔registry-lecture verification**, and the per-lecture figure/coverage table that follows same-file helper indirection (the ATB per-section scan misses helper-rendered diagrams).
2. **`scripts/regen-mktg-twins.ts` (new, validated against the stable shelf)** — regenerates the chapter-index mktg block, search-corpus mktg chapters, section-counts, question-counts. Group/label/desc sourced from `MKTG_GROUPS` items (that is what the existing twins store); `--chapters=N` pins the count so a restructure hard-fails on parse drift; `--lectures=N` overrides the lecture guard (default 28). Run today with `--chapters=53`: chapter-index mktg block reproduced byte-identically (only the fixed 246 comment changed), counts unchanged.
3. **Corpus re-cut to the canonical generator** — the shipped corpus was scraped from the rendered DOM; the regen now reproduces it statically. This required a purpose-built extraction stack (documented because the rebuild will rely on it):
   - a **tag/brace-aware scanner** (`extractText`) — JSX text nodes in document order (eyebrow → title → lead → body), strings harvested at their source position; `ATTR_DENY` kills `className/style/SVG-geometry` noise via `attrOfQuote`/`attrNameOfEq` (unbounded backward scans — a fixed window failed when a long className pushed `style` out of reach); `attr={<jsx>}` contributes its inner text; `matchBrace` returns the closing-brace index itself (an off-by-one made every skipped expression eat the following `>` and derailed the scan);
   - **helper resolution** (`machineText`) — same-file helpers reachable from a section's tags, plus the data consts they read, with chrome exclusion (names reachable from ≥6 sections / blocks < 80 chars are shared shell, not content);
   - **`fnBody` shell-stripping** — without it the scanner met each helper's `function Name() {` in text mode and swallowed the whole function as one brace expression: quoted labels leaked in, every JSX text node (the machines' copy) was lost.
   - Result: 53/53 chapters regenerated; keyword probes (`Starbucks`, `BlackBerry`, `dadi`, `pug`, `airport`, `Maslow`, `four flows`, `eight demand states`…) all present; word-Jaccard vs the DOM-scraped corpus mean 0.63 (residual = aria/chip strings the old scrape missed + 2 chapters with inner-component code tokens). The audit staleness heuristic passes on the regenerated corpus, and `bun test`/`tsc`/`build` stay green.
4. **Twin hygiene** — stale "= 229" header comments fixed in `section-counts.ts` and `chapter-index.ts` (real total 246).

## 4. Rebuild runbook (when the prompt + official PDF land)

1. **Corpus first:** extract the PDF word-for-word into `scripts/mktg-corpus.txt` (mirror `scripts/fa-corpus.txt` / `scripts/atb_lectures/`). The transcripts are the only allowed content source; nothing invented, beautified, or silently leveled — the blank Lecture 22 page stays an honest recap unless the PDF says otherwise.
2. **Registry:** rewrite `mktg/lectures.ts` → official lecture order/count; keep chapter `id` slugs stable where a chapter survives (`loadProgress().mktg` reader progress is keyed by section id). Re-cut `MKTG_GROUPS` to the new part structure.
3. **Sections:** rewrite/extend MktgParts1–4 (or add files); one `<Section id>` per new chapter. Preserve the shell pattern: helper machines above sections, registry-derived nav, `SectionHead` eyebrows. If the PDF carries arithmetic traps, reproduce them exactly and flag them in a build note — never silently correct.
4. **Content minimums (ATB standard, expected to carry over):** every lecture ≥1 diagram (hand-drawn inline SVG answering "what is the shape?") + ≥1 data-bearing workflow whose end state matches the prose; every figure captioned (`figcaption`), every SVG `aria-label`ed, every table headed (`thead`) — the baseline has 7 diagram-less lectures (L1, L7, L12, L14, L18, L22, L28) and zero figcaptions/zero theads to clear.
5. **Shell:** SECTION_COMPONENTS remap; `useSeenDisplay`/`goToChapter`/`useOpenSection` logic is count-agnostic.
6. **Exam banks:** rebuild/extend per the new groups; `mcq | output | short` only; every answer traceable to the corpus; if group ids change, exam drafts (keyed by group id) orphan — rename only if the prompt demands.
7. **Twins:** run `bun scripts/regen-mktg-twins.ts --chapters=<new count>` (hard-fails on drift), then `bun scripts/audit-mktg-content.ts` until green.
8. **Verification gate:** `bun test` → `tsc --noEmit` → `npm run lint` (pre-existing `scripts/report-gen/generate.js` failure is out of scope) → `npm run build` (**build kills the dev server** — restart with `nohup npm run dev > dev.log &`); agent-browser spot checks at 360px / keyboard / `#/subject/mktg/l<n>` / print CSS; re-parse the deployed webpack/chunk hashes before any deploy comparison (the site moves without announcement).
9. **Ship:** commit as **Arpit Nayan** and push (PAT inline, single use, never stored); never `git add -A` while the nested `Foundation-of-computing/` clone exists.

## 5. Known issues carried into the fix round

- **Duplicate `id="top"`** — MktgHero `<header>` + MktgApp wrapper (same bug ATB and FA carried; the hero must drop it in the rebuild).
- **Seven lectures without a diagram** — L1 (why marketing), L7 (value/price/luxury lever), L12 (behavioral/benefit segmentation), L14 (SAFE + positioning 3Q), L18 (why people buy / eras & nudges), L22 (recap22), L28 (bias lab). Highest-value rebuild targets; each already has machine widgets, so the missing piece is the "what is the shape?" SVG.
- **0 figcaptions / 0 theads shelf-wide** — 41 SVGs and several comparison tables lack captions/headers.
- **No lecture deep links** — `page.tsx` passes `initialLecture` only to FocApp/FaApp; mktg deep links land on L1 (same gap ATB had).
- **recap22 honesty rule** — L22 is an honest recap machine because the source PDF page is blank; do not invent lecture content into it unless the new PDF supplies it.
- **ATB carry-overs (adjacent, not mktg):** none open — ATB audit is green as of `dbb8ef8`.

## 6. Guardrails

- **Numbers:** only from the delivered PDF corpus; python-verified before they enter code.
- **Design DNA:** mktg stays teal-accent + lagoon-dark machines — no FoC amber bleed, no FA teal confusion (the shelf accent IS teal; the reader's own teal family is the identity), no new dependencies; reuse `notes/ui` primitives (`Section`, `SectionHead`, `Reveal`) and the shared `ExamEngine` + `MKTG_EXAM_THEME`.
- **Untouchable:** the other five shelves' sources (incl. the finished ATB 50-chapter build), Pyodide Lab, Mistake Ledger SM-2, Cockpit APIs, question banks outside mktg's eight banks.
- **Accessibility & layout:** keyboard-reachable toggles, `prefers-reduced-motion` static states, 360px no horizontal scroll, `@media print` readable.
- **Text pipeline:** if the rebuild changes component structure, re-run the corpus probes above (`Starbucks`/`BlackBerry`/`dadi`/`pug`) after regen — they are the canary for scanner regressions.
