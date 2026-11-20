# Repo-wide review — what needs changing

Date: 2026-11-20 · Branch `arena/816bd1cf-foundation-of-computing` (base `9dced72`)
Scope: every tracked file. Nothing was modified to produce this list.

## How this was measured

Dependencies were installed once (`npm install`), then the project's own gates were run:

| Gate | Command | Result |
| --- | --- | --- |
| Type-check | `npx tsc --noEmit` | **PASS** (0 errors) |
| Unit tests | `bun test` | **PASS** (85 pass / 0 fail, 5 files) |
| Lint | `npx eslint .` | **FAIL** — 16 errors |
| Production build | `npm run build` | **FAIL** (fonts — network) |
| Content audits | `bun run scripts/audit-*-content.ts` | **1 of 7 runs**, 6 crash |

The good news first: the app itself is in solid shape. `tsc` is clean, all 85 tests pass, and the
"twin" data files (`section-counts` 326 = `chapter-index` 326 = `search-corpus` 326, per shelf
40/50/41/50/67/78) are all in sync with the registries. The problems are in the *tooling around*
the app, plus a handful of real content-correctness defects.

---

## P0 — Blockers (verified failing)

### 1. Six of the seven audit scripts cannot run
The audit docs (`audit/*-audit.md`) quote green gates like "16 OK / 0 issues", but the scripts that
produce them are dead in any checkout that is not `/home/z/my-project`.

```
audit-atb-content.ts   FAILS   ROOT = "/home/z/my-project"           → ENOENT
audit-ebh-content.ts   FAILS   ROOT = "/home/z/my-project"           → ENOENT
audit-fa-content.ts    FAILS   ROOT = "/home/z/my-project"           → ENOENT
audit-mktg-content.ts  FAILS   ROOT = "/home/z/my-project"           → ENOENT
audit-foc-content.ts   FAILS   /home/z hardcode + import of a deleted file
audit-foc-v2.ts        FAILS   ROOT = "/home/z/my-project" + same dead import
audit-stm-content.ts   RUNS    ROOT = path.resolve(import.meta.dir, "..")   ✔
```

Two distinct defects:

* **Hardcoded absolute root** — 5 files. The correct one-liner already exists in the `regen-*` and
  `audit-stm` scripts: `const ROOT = path.resolve(import.meta.dir, "..")`. Same pattern is also
  hardcoded in Python: `scripts/finish_pom_corpus.py`, `gen_ebh_corpus_ts.py`,
  `gen_pom_corpus_ts.py`, `gen_stm_corpus_ts.py`, `reconcile_pom_words.py`.
* **Dead import of a deleted registry** — `audit-foc-content.ts` and `audit-foc-v2.ts` both
  `import ... from "../src/components/foc/lectures"`, but FoC's registry is now
  `src/components/foc/focLectures.ts`. The same break exists inside the docs (for example
  `audit/fa-audit.md` still argues from `src/components/fa/lectures.ts`, and `audit/ebh-audit.md`
  from `src/components/ebh/lectures.ts`, both renamed to `faLectures.ts` / kept but re-shaped).

Also worth handling: `audit-foc-v2.ts` and `audit-foc-content.ts` overlap heavily — pick one.

**Fix:** swap the 5 hardcoded `ROOT` constants + the 2 dead imports for the `import.meta.dir`
pattern, then re-run all seven and record the real output. Until then every "audit is green" claim
in `audit/` is unverifiable.

### 2. `npm run lint` fails — 16 errors
All from the new `eslint-config-next@16` React-Compiler rule set. No errors in app logic; all are
"setState inside effect" / "ref during render" patterns.

| File | Rule | Count |
| --- | --- | --- |
| `src/components/atlas/CockpitView.tsx` | `react-hooks/refs`, `react-hooks/immutability` | 3 |
| `src/components/atlas/DefendPanel.tsx` | `react-hooks/refs`, `set-state-in-effect` | 2 |
| `src/components/atlas/CaseStrikePanel.tsx` | `set-state-in-effect` | 1 |
| `src/components/atlas/LedgerView.tsx` | `set-state-in-effect` | 1 |
| `src/components/ebh/EbhApp.tsx` | `set-state-in-effect` | 1 |
| `src/components/notes/DrillWindow.tsx` | `set-state-in-effect` | 1 |
| `src/components/notes/Playground.tsx` | `set-state-in-effect` | 1 |
| `src/components/ui/carousel.tsx` | `set-state-in-effect` | 1 |
| `src/hooks/use-mobile.ts` | `set-state-in-effect` | 1 |
| `src/components/ebh/registry.test.ts` | `@typescript-eslint/no-require-imports` | 2 |
| `scripts/report-gen/generate.js` | `@typescript-eslint/no-require-imports` | 2 |

Two choices, and the repo should pick one deliberately:
* **Fix** the hooks (the `use-mobile` and `carousel` ones are the shadcn boilerplate — safe to
  rewrite; `Playground`/`DrillWindow`/`CockpitView` need a look because they hydrate client-only
  state).
* **Or** silence the rule in `eslint.config.mjs` alongside the 20+ other rules already disabled
  there, and add `scripts/**` to the `ignores` list (`generate.js` is a Node script, not app code).

### 3. `npm run build` fails without internet
`src/app/layout.tsx` pulls four families from `next/font/google` (Fraunces, Plus Jakarta Sans,
JetBrains Mono, Noto Serif Devanagari). In this sandbox `fonts.googleapis.com` is blocked, so the
build dies with `Failed to fetch 'Fraunces' …`. On Vercel it is fine — but it means **the build is
not reproducible offline / in a locked-down CI**. Decide: keep the CDN fetch (document "build needs
network"), or commit the woff2 files and switch to `next/font/local`.

---

## P1 — Content defects a reader can see

### 4. `data_shapes.py` prints a wrong word count
`src/components/foc/FocParts1.tsx:589-591` — the prose panel claims `words in the review: 10`.
Executing the shown Python gives **9** (`"the lecture was brilliant but the quiz was tough"`).
This is exactly the class of bug `audit/foc-audit.md` §3 flagged as "ready to fix"; it is still
there.

### 5. Truncated / elided outputs presented as real output
* `src/components/foc/FocParts3.tsx:369` — `magicians.py` output ends in a literal `...`
  (`Alice, that was a great trick!\n...`). The audit log says "output truncated with literal `...`".
* `src/components/foc/FocParts7.tsx:81` — `loop_all_pairs.py` output is
  `"Key: username\nValue: efermi\n..."`, i.e. an elision inside an output panel.

### 6. Wrong comment on a shallow copy
`src/components/foc/FocParts8.tsx:182` — `copied = names[:]   # deep copy`.
`[:]` is a **shallow** copy. Either fix the comment or use `copy.deepcopy`.

### 7. Three contradictory statements of the same exam policy
* `src/components/notes/Part1.tsx:104` — `Best 2 of 3 recorded · 15% each (30% total)`
* `src/components/foc/FocParts8.tsx:159` — "**no third quiz**, so every assessment counts double"
* `src/components/foc/FocParts17.tsx:217,256,261` — "no third quiz… the best score out of the two
  quizzes is considered for the **full 40%**"

L34 (`FocParts17`) is the authoritative exam-policy lecture, and it says 40% / best-of-two. The
other two need to be rewritten to match it (or to say explicitly "earlier deck said 2-of-3; the
official policy changed").

### 8. "The deck's five assigned exercises" — four are listed
`src/components/notes/Part8.tsx:494`. The four that follow are `display_message`,
`favorite_book`, `make_shirt`, `describe_city`. Either add the fifth or change "five" to "four".

### 9. ReadStep numbering starts at `n="2"`
`sections` that jump straight to step 2 with no step 1:

* `src/components/notes/Part7.tsx` → `WhileSection` (`n="2"`), `FunctionsSection` (`n="2"`, `n="3"`)

(The rest — IfSection, DictsSection, ListOrganize, ForLoops, Checkpoint1, LoopControl — have since
been fixed; Part7 is what remains.)

### 10. Deep links work for 3 shelves, not the other 3
`atlas-router.ts` happily parses `#/subject/ebh/l14`, and `page.tsx:224-241` passes
`view.lecture` to `FocApp`, `AtbApp`, `FaApp` — but **not** to `EbhApp`, `StmApp`, `MktgApp`:

```tsx
<EbhApp onExitAtlas={exitToAtlas} />        // no initialLecture
<StmApp onExitAtlas={exitToAtlas} />        // no initialLecture
<MktgApp onExitAtlas={exitToAtlas} />       // no initialLecture
```

Those three components also don't accept the prop (`{ onExitAtlas }: { onExitAtlas: () => void }`)
and their registries have no `lectureByLooseId` helper. So a shared EBH/STM/MKTG deep link silently
drops the reader on L1. Fix = copy the FoC/FA/ATB pattern (prop + `lectureByLooseId` + hash sync).

### 11. Duplicate DOM `id="top"` (two shelves)
Both the app wrapper and the hero own `#top`, so the brand chip's "back to top" resolves to whichever
mounts first:

* `src/components/notes/FocApp.tsx:1063` **and** `src/components/foc/FocHero.tsx:76`
* `src/components/fa/FaApp.tsx:974` **and** `src/components/fa/FaHero.tsx:108`

The EBH/ATB/STM/MKTG rebuilds already dropped it from their heroes; FoC and FA are the leftovers.

---

## P2 — Consistency & documentation drift

### 12. Stale counts in shipped comments
The numbers the code *computes* are right; the comments describing them are wrong.

* `src/lib/section-counts.ts:9` — "40 + 50 + 41 + **31 + 31** + 78 = 271". Real per-shelf counts are
  40 + 50 + 41 + **50 + 67** + 78 = **326**.
* `src/lib/chapter-index.ts:7-8` — same stale list ("ebh 31 … = 271"), and line 3 still says
  "the **five** subject apps (FocApp / AtbApp / FaApp / EbhApp / StmApp)" — there are six.
* `src/components/fa/FaApp.tsx:8,182` and `src/components/notes/FocApp.tsx:8` — "the **29-lecture**
  sequence" (both are 34 now).
* `src/components/ebh/questions.ts:3` — "one per module of the **28-lecture** deck" (34 now).
* `src/components/ebh/lectures.ts:10`, `src/components/stm/lectures.ts:12` — "the live
  **28-/27-lecture registry** that preceded…" (back-story, harmless, but confusing).
* `src/lib/chapter-index.ts:277` — "shelf 06 — Principles of Marketing (**53 chapters**)" (78 now).

### 13. The audit docs contradict the shipped code
Three of the `audit/*.md` files are *pre*-rebuild baselines whose "current state" tables and
"known issues" lists are now false. They aren't marked as superseded:

| Doc | Says | Reality |
| --- | --- | --- |
| `audit/ebh-audit.md` | 28 lectures · 31 chapters · 66 questions | 34 · 50 · 82 |
| `audit/mktg-audit.md` | 28 lectures · 53 chapters · 48 questions · 7 diagram-less lectures · 0 figcaptions · no deep links | 40 · 78 · 60 · diagrams shipped (24 components) · still no deep links |
| `audit/atb-audit.md` | 28 lectures · 33 chapters · no deep links · duplicate `id="top"` | 33 · 50; `AtbApp` now takes `initialLecture`; hero no longer owns `#top` |

The matching `*-build-note.md` files (atb, ebh, pom, stm) *do* describe the finished rebuild, so the
cleanest fix is a one-line "SUPERSEDED — see `<shelf>-build-note.md`" banner at the top of each stale
audit. FoC and FA are the two shelves with no separate build note; their completion record is
appended to the audit file instead (`audit/foc-audit.md` "MERGE COMPLETE", `audit/fa-audit.md` §5).

### 14. `next.config.ts` documents routes that do not exist
The long security comment describes "the studio's synth", `narrate` routes, a studio key, and
`NEXT_PUBLIC_*` secrets. Grepping `src/` for `narrate` returns **zero** hits and no route references
`NEXT_PUBLIC_*` at all (the only env vars used anywhere are `NODE_ENV`,
`VERCEL_PROJECT_PRODUCTION_URL`, `NEXT_PUBLIC_SITE_URL`). The *headers* it sets are fine and real;
the *story* around them is stale and will mislead the next maintainer.

### 15. Environment config is not reproducible
* `.env` is **tracked** (despite `.env*` in `.gitignore`) and its only value is
  `DATABASE_URL=file:/home/z/my-project/db/custom.db` — an absolute path into an old sandbox that
  does not exist here. Prisma/sync therefore breaks on any fresh clone.
* There is **no `.env.example`** documenting `DATABASE_URL`, `NEXT_PUBLIC_SITE_URL`.
* The AI routes (`ask`, `defend`, `case-strike`, `generate-cards`) call
  `ZAI.create()` from `z-ai-web-dev-sdk`, which needs a `.z-ai-config` that is gitignored and absent.
  A fresh clone has no model credentials — confirm the routes degrade to their documented
  `502/503` instead of throwing.
* `package.json` has no `packageManager`/`engines` field, yet `npm start`, `bun test`, and the audit
  docs all assume **bun** (`bun.lock` is the lockfile). Nothing pins it; there is no `.nvmrc` and no
  CI, so "run the gates" is an oral tradition.

### 16. `/api/sync` is the only unguarded write endpoint
`ask`, `defend`, `case-strike` and `generate-cards` all call `sameOrigin()` + `rateLimit()` from
`src/lib/api-guard.ts`. `src/app/api/sync/route.ts` — which is the **only** route that writes to the
database — calls neither. A 6-character code is the only secret, and there is no rate limit, so the
code space can be swept and an unauthenticated POST can store 512 KB per code. It has its own
justification in the header comment ("anyone with the code can pull the data"), but the missing
rate-limit at minimum should be deliberate, not accidental.

### 17. Dead imports are invisible to lint
`eslint.config.mjs` sets `@typescript-eslint/no-unused-vars: "off"` and `no-unused-vars: "off"`.
A rough scan shows **~118 possibly-unused named imports across ~38 component files** — e.g.
`fa/FaParts16.tsx` imports `AnimatePresence, motion, Scale, FA_BTN_GRAD`, `ebh/EbhParts1-7` import an
unused `EbhExamCallout`, `mktg/MktgParts4.tsx` imports `Brain, Compass, Dog, GraduationCap,
Paintbrush, Quiz`. `tsc` doesn't flag unused imports either (no `noUnusedLocals`). Re-enable the rule
(a warning first) or clean them mechanically — the FA/MKTG/EBH parts files are the bulk.

---

## P3 — Repo hygiene

### 18. Tracked artefacts that `.gitignore` says should be ignored
| Path | Size | Problem |
| --- | --- | --- |
| `tool-results/` (13 `.txt`) | 744 KB | `.gitignore` already lists `tool-results/`, but the files were committed before the rule, and tracked files override ignores. `git rm -r --cached tool-results` |
| `.env` | 50 B | tracked despite `.env*`; see §15 |
| `db/custom.db` | 24 KB | a binary SQLite file in git; regenerable via `npm run db:push` |
| `.zscripts/dev.pid` | 4 B | a stale PID (`1100`) committed |

### 19. Dangling gitlink `Foundation-of-computing`
`git ls-files -s` shows mode `160000 e44b9b6… Foundation-of-computing` — a submodule pointer with
**no `.gitmodules`** and an empty directory on disk. `audit/mktg-audit.md` §0 already calls this a
"landmine": it is harmless to the deployed build but any future `git add -A` has to dodge it. One
command fixes it: `git rm --cached Foundation-of-computing`.

### 20. ~16 MB of duplicated PDFs in version control
`upload/` holds six source compendia (11 MB) and `download/` re-commits three of the same PDFs plus
the audit report and 18 FA diagram PNGs (5 MB). `audit/*` repeatedly calls these "untracked
deliverables", but they are tracked — pack size is 16.5 MiB. Decide one policy: Git LFS, a
`download/` ignore, or keep them and stop calling them untracked.

### 21. Miscellaneous
* **No root `README.md`** — the repo has a rich `audit/` history and a non-obvious layout
  (`src/components/<shelf>/`, generated twins in `src/lib/`), but no entry document.
  `download/README.md` is a single line ("Here are all the generated files.").
* **`tests/` duplicates `.zscripts/`** — `tests/database-runtime-build.sh` and
  `tests/python-runtime-build.sh` have already drifted from their `.zscripts/` twins. Keep one.
* **`mini-services/`** is an empty `.gitkeep`; `examples/websocket/` is unused scaffolding
  (both excluded from `tsconfig`).
* **Test coverage gaps** — tests exist for the router, FA arithmetic, and the EBH/MKTG/STM
  registries. There is **no registry test for FoC (34 lectures / 40 chapters) or ATB (33/50)**, the
  two shelves rebuilt in this branch's history, and no test that pins `section-counts` against the
  live registries (which is how §12 drifted unnoticed).

---

## Needs a course-owner ruling (not bugs — deliberately preserved)

These are recorded conflicts in the audit registers; each is rendered on *both* sides on purpose and
should not be "fixed" by an engineer:

* **STM — 9 gated source conflicts** (`audit/stm-open-questions.md`): Chebyshev floors vs empirical
  bands, z-road vs t-switch, the Marrian spelling, σ̄ symbol variance, L26's margin, L22's n=36 vs
  50, the finite-population correction, Type I/II double treatment.
* **POM/MKTG — 4 prompt-mandated ambiguities** (`audit/pom-open-questions.md`): L28's promised-but-
  never-delivered four biases, L30/L31 width-depth totals (11 vs 12), L36/L37 pricing overlap,
  L38/L40 duplicated three-Cs, plus 4 preserved source quirks ("Kéels", "Detal",
  "Parleji Surakshah", the shattered LaTeX around `$9.99`).
* **EBH — 13 source contradictions** (`audit/ebh-open-questions.md`): Peterloo 18 vs 18–20,
  Foyol vs Fayol, water frame 1768 vs 1769, indigo 27% vs 25–27%, and nine more.
* **Word-count deltas** on STM/EBH/POM: the brief's asserted counts exceed the compendium body by
  2–3k tokens (stripped transcript furniture). Recoverable only if raw transcripts arrive.

---

## Suggested order of work

1. **Unbreak the gates** (§1, §2): fix the five `ROOT` constants + two dead imports, then decide the
   lint policy. Without this there is no way to verify anything else.
2. **Fix the reader-visible content** (§4–§9): one wrong word count, two elided outputs, one wrong
   comment, the three-way exam-policy contradiction, "five" vs four, and the two remaining ReadStep
   numbers. All are small, local edits.
3. **Close the deep-link gap** (§10) and drop the two duplicate `id="top"` (§11) — same pattern the
   other three shelves already ship.
4. **Refresh the docs and comments** (§12, §13, §14) so the audit trail stops contradicting the code.
5. **Hygiene pass** (§15–§21): `.env.example`, ignore the tracked artefacts, delete the gitlink,
   add a root README, re-enable unused-import lint, add FoC/ATB registry tests.

Nothing in P0/P1 touches the content corpus or the six shelves' teaching material, so the guardrails
in `audit/*` ("numbers only from the corpus", "no retheme", "untouchable: Pyodide Lab, Ledger SM-2,
Cockpit APIs") are all respected by every item above.
