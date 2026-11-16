# FoC Shelf Audit — complete record (pre-PDF baseline)

Date: 2026-11-17 · Scope: Foundation of Computing shelf only (`#/subject/foc`)
Purpose: baseline before the 34-lecture PDF diff + L30–34 additions + user bug list.

## 1. Architecture

| Piece | File | Notes |
|---|---|---|
| Lecture table | `src/components/foc/lectures.ts` | 29 lectures L1–L29, 33 chapters. Header comment: "Mirrors the official deck Notes_261027_010112.pdf — 28 recorded lectures … plus one row for Classes". L29 = "Classes — Ahead of the Deck" (recorded track ends at Functions). |
| Shelf shell | `src/components/notes/FocApp.tsx` (1034 lines) | GROUPS (6 nav groups) + SECTION_COMPONENTS (33 ids → components). Ember/gold parchment palette (#c2410c, #b45309, #f5c889). |
| Hero/lecture picker | `src/components/foc/FocHero.tsx` | Search + 29-row picker, IPO pipeline SVG, "Test my knowledge" + "Python Lab" CTAs. No aggregate stats displayed. |
| Content: ch. in `notes/` | Part1–10.tsx | 15 sections (why, computing, pillars, data, algorithm, hardware, software, python, basics, lists, if, dicts, while, functions, args, funcs2, classes = 17 actually). Shared exports: POLL_PRE, ChainWalk, IfElseChainViz, DictLenses (Part6), ExitToolkit (Part7). Dead export: Hero in Part1 (superseded by FocHero). |
| Content: ch. in `foc/` | FocParts1–9.tsx | 16 sections (course-map, data-types, case-files, list-organize, for-loops, checkpoint-1, numeric-lists, copies-tuples, skills-lab, branches, if-lists, dict-loops, nesting, records-lab, loop-control, returns). |
| Exam banks | `src/components/notes/questions.ts` | 6 banks, TOTAL_QUESTIONS=160 (36/38/22/15/13/36). mcq/output/short/code types; carve-outs from pycore into decisions (7) + loops (7). |
| UI primitives | `src/components/notes/ui.tsx` | Section, SectionHead, ReadStep, Callout, Quiz, Practice, Takeaways, CodeBlock (Pyodide-runnable), StepsFlow, KV, Pill, Reveal, PyReadyToast. |
| Python Lab | `src/components/notes/Playground.tsx` | Pyodide CPython 3.12, multi-cell, verified live. |

Lecture → chapter map (verified 1:1 in browser, all 29 clicked):
L1 course-map · L2 computing,pillars,data · L3 data-types · L4 why · L5 algorithm · L6 hardware · L7 software · L8 python · L9 case-files · L10 basics · L11 lists · L12 list-organize · L13 for-loops · L14 checkpoint-1 · L15 numeric-lists · L16 copies-tuples · L17 if · L18 branches · L19 skills-lab · L20 if-lists · L21 dicts · L22 dict-loops · L23 nesting · L24 records-lab · L25 while · L26 loop-control · L27 functions,args · L28 returns,funcs2 · L29 classes.

Cross-references inside prose (must be re-validated against the 34-lecture PDF): L11 guest_list toolkit; "12, 15 and 16" (ordering/slicing/tuples); L17 car demo; L18 branches; L20 if×lists; L22 dict loops; L23 nesting; L26 flags/break/continue; L28 return values; L17/L25 cited in Algorithm section ("if-else in Lecture 17, while in Lecture 25"). Also: L14 checkpoint says "syllabus to September 20th incl. Working with Lists Part 2"; L24 says "no third quiz, every assessment counts double".

## 2. Verified facts (browser)

- Hero renders 29 lecture rows; search works; read-checks per row.
- All 29 lectures clicked → each renders exactly its declared chapter ids (no orphans, no missing).
- Python Lab opens: Colab mode, kernel idle, Restart/New cell/Run all/Clear outputs.
- Test-my-knowledge hub: 6 banks 36/38/22/15/13/36 = 160; foundations window opens, Question 1/36 IPO MCQ, jump grid, timer, Finish & see score.
- Console clean; zero page errors through all interactions.

## 3. Confirmed bugs (executed against real Python, ready to fix)

1. **`shipment_inventory.py` (FocParts5, skills-lab)** — shown output `final : ['fiber_optic', 'firewall', 'rack_mount']` / `allocated : 'switch'`. Real: `final : ['fiber_optic', 'switch', 'USB_hub', 'rack_mount']` / `allocated : router`. Note hand-trace also wrong ("pop(1) takes 'switch'" → actually 'router'; "del index 2 (the 'firewall')" is right).
2. **`data_shapes.py` (FocParts1, data-types)** — shown "words in the review: 10"; real = 9.
3. **`special_items_and_empty.py` (FocParts6, if-lists)** — phantom blank line before "Are you sure you want a plain pizza?" (code prints no blank line).

## 4. Full anomaly log (from 4 content audits)

### Correctness / factual
- ForLoops takeaways: "two crash, two misbehave" → actually **three crash** (missing indent, unexpected indent, missing colon), **one misbehaves** (escaped body line).
- Quiz-policy contradiction: L14 "60 MCQs · 20 min · Best 2 of 3, 15% each" vs L24 "no third quiz, every assessment counts double".
- `changing_case_and_whitespace.py` (Part5) shown output missing `Python` + tabbed-Python lines.
- `bicycles.py` (Part5) leading stray blank line; `alien.py` (Part6) spurious blank line between 5 and Sarah line.
- `loop_values_and_set.py` (FocParts7) presents one arbitrary set() ordering as fixed output (hash-seed dependent).
- `loop_all_pairs.py` (FocParts7) output is an elision ("Key: username\nValue: efermi\n...") not full output.
- Missing `output` props: `foods.py`, `buffet.py` (FocParts5).
- `magicians.py` (FocParts3) output truncated with literal `...`.
- SkillsLab ReadStep "Seven moves" vs prose "six operations" (table has 7 rows incl. create).
- `toolbox_recap.py` (FocParts8) comment "# deep copy" — `names[:]` is shallow.
- "The 35 Python keywords" heading (Part5) vs KEYWORDS array of 33 chips.
- Args practice header "The deck's five assigned exercises" but 4 listed.
- "PTM" typo (Part1 WhySection) → Paytm.
- lectures.ts L1 blurb "the.sentiment-analysis" typo.
- lectures.ts L9 desc promises Netflix; CaseFiles only cross-links to L2 #data.
- CaseFiles lead "Four cases, one lesson each" vs 5 case files presented.
- `finiteness_trap.py` (Part3): pedagogically "runs forever" but technically underflows to 0.0 (~1075 iterations). First 6 printed values correct.
- questions.ts near-duplicates: f27↔fc4, p17↔px2, r6↔c3; topics strings over-promise (decisions lists "Skills lab · Records lab" but has no such questions; pycore lists "Checkpoint" with none).
- Battery.get_range shadows `range` builtin (Part10, deck-faithful); `%%writefile pizza.py # comment` trailing comment breaks real IPython (Part9).

### Structural / numbering
- ReadStep numbering starts at n="2" with no n="1" in: IfSection, DictsSection, WhileSection, FunctionsSection, ListOrganize, ForLoops, Checkpoint1, LoopControl. (DataTypes and Branches/IfLists/Returns/NumericLists/CopiesTuples have proper n="1".)
- IfSection lead promises "Four-step first-read path... classic traps" but chain+traps live in #branches; DictsSection lead "Four steps" but only 3 shown.
- FunctionsSection is the only functions-track chapter with no Quiz/Practice/Takeaways; returns redundant `<>…</>` wrapper.
- IfSection claims "focuses exclusively on conditional tests" yet teaches voting.py if/else + cars.py loop.

### Dead code / lint
- Part1 `Hero` export unused (superseded by FocHero) + stray bare `cursor-pointer` attribute at Part1.tsx:150.
- Part3 `const box = "rx"` dead var; unused icon imports (Part3 Workflow/Code2/Gauge/Layers3; Part4 Quiz/CodeBlock; Part5 ListOrdered; Part6 Repeat/Boxes; Part7 Terminal/Repeat/SquareStack; Part8 CornerDownLeft/Layers/Repeat; Part9 MousePointerClick; Part10 AlertTriangle; FocParts2 useState/React default).
- FunctionMachine dead zero-size `<rect>`; `l.n ?? "·"` dead fallback in FocHero.

## 5. PDF-diff watchlist (facts/numbers that must match the 34-lecture PDF)

Day 1/30 iceberg · 350 engineers (Ford) · $100M DeepMind offers · 3000 BC abacus · Knight Capital 2012, $440M, 45 min, 1,481 trades/s, $110/trade · Netflix 3.2M @ 42:15 (timestamp 2026-08-21T21:04:12Z — future date!) · Zara 6 months · bank redlining 3.4×, RBI · Uber 500-m radius, <500 ms · weather "41°, partly sunny" · zettabyte 10²¹ · 80% unstructured · mark-sheet S001 Aanya 87 / S002 Rohan 43 / S003 Priya 91 / S004 Kiran 72 · JSON order ORD4521 total 320 · 500 students Delhi survey 1 June 2025 · Reliance ₹2,450–₹2,790 · AlexNet 2012 · 3–5 GHz · 96% Linux servers · 72% Android · Python 1991 Guido · evaluation 10·30·60 (in Checkpoint1: participation 10% · quizzes 30% · final 60%) · quiz 60 MCQs/20 min · syllabus to Sept 20 · amusement park $5/$10/$3 · aliens 30 · battery 70/85 kWh, 240/270 miles · pets describe_pet · make_pizza 16" · process_data(a, b=2, *args, c=10, **kwargs) · OrderedDict poll jen/sarah/edward/phil · BYD Seal 2026 · Tata Tiago 2026 · Swift XLI 2018 · "elvish" AI-output metaphor · sentinel/flag/break/continue · sandwich shop pastrami · mountain poll · 38.5 °C DIKW hook.

## 6. What L30–34 will need (pattern checklist for the merge)

Each new lecture needs: (1) a row in `lectures.ts` (id l30–l34, code L30–L34, title, blurb, chapters with ids); (2) section components registered in SECTION_COMPONENTS + a GROUPS slot; (3) chapter band eyebrow "Lecture N · ..."; (4) ReadStep steps starting at n="1"; (5) runnable CodeBlocks with verified outputs; (6) Quiz ×2 + Practice + Takeaways furniture; (7) any diagram/workflow as SVG or StepsFlow; (8) exam-bank additions in questions.ts; (9) search corpus (`src/lib/search-corpus.json`) + section-counts/question-counts libs regenerated; (10) PRO bank OOP questions (r10–r15, r26–r28, r30) suggest L30–34 = classes/OOP continuation, modules, files/exceptions or similar — confirm against PDF.
