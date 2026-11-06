# THE ATLAS — Frontend & QA Audit Report

**Date:** 2026-11-06 · **Auditor role:** senior frontend engineer + QA auditor
**App:** The Atlas — hash-routed Next.js 16 + React 19 + Tailwind 4 + framer-motion single-route app (`/`), six code-split subject shelves, local-first progress (localStorage + SM-2), model-backed tutor API.
**Live URL audited:** https://foundationofcomputing.vercel.app/ (same commit line as local working tree)

---

## 1. Method (what was actually run)

| Check | Tool | Result |
| --- | --- | --- |
| Route regression battery (card clicks ×6, back-to-atlas ×6, deep links + refresh ×4, browser back/forward, 120 ms double-click race, in-page anchors, hero counter, cockpit plan) | `scripts/route-battery.sh` (agent-browser E2E) | **29/29 PASS** (after fixes; baseline was 26/29) |
| App-wide feature sweep (⌘K palette open/search/Escape, Open Signals 8/8 brands, cockpit panels, ledger windows, mock handoff, Python Lab, print control) | `scripts/feature-sweep.sh` | **15/15 PASS** |
| Responsive overflow sweep 320 / 360 / 390 / 430 / 768 / 1024 / 1440 px × {atlas, foc, mktg, cockpit, ledger} | `scripts/responsive-sweep.sh` | **35/35 PASS** (0 horizontal overflow) |
| Header touch-target probe (all 9 header variants at 320 px) | `scripts/qa-mobile/header-probe.js` | all controls ≥ 44 px effective hit area after fixes |
| Route-parser unit tests | `bun test` (`src/lib/atlas-router.test.ts`) | **10/10 PASS** |
| Type check | `bunx tsc --noEmit` | clean |
| Lint | `bun run lint` (eslint) | clean |
| Production build | `bun run build` | success, all routes compiled |
| Chapter inventory vs render | `scripts/count-chapters.sh` | matches source exactly (see §3) |

Console errors were checked after every sweep (`agent-browser errors`): zero page errors in the final runs. One mid-audit dev-server death (OOM in the sandbox, not an app fault) was ruled out by re-running the full battery on a fresh server — all green.

---

## 2. Architecture inventory (Phase 1)

- **Entry:** `src/app/page.tsx` — single Next route; tiny hash router: `#/atlas`, `#/ledger`, `#/cockpit`, `#/subject/<id>`, reserved bay for unknown ids. Subject apps are `next/dynamic` chunks behind a themed `ShelfLoader`.
- **Route source of truth (was inline in page.tsx, now extracted):** `src/lib/atlas-router.ts` — `parseRouteHash()` + `viewFromLocation()`, normalized ids, pinned by unit tests.
- **Registry:** `src/components/atlas/subjects.ts` — six live Semester-1 subjects, ids `foc · atb · fa · ebh · stm · mktg`; Semester 2 = empty reserved band (honest, no invented subjects).
- **Per-subject app:** `src/components/{notes,atb,fa,ebh,stm,mktg}/*App.tsx` + `lectures.ts` (chapter structures) + `questions.ts` (exam banks) + hero/parts components.
- **Shared atlas chrome:** `AtlasLanding` (hero + shelf + Open Signals), `CommandPalette` (Radix Dialog, ⌘K + button), `CockpitView` (flight plan + Defend It + Case Strike + Ask the Atlas), `LedgerView` (stats, mastery, drill/mock/forge/mistake-ledger windows), `ShelfQuickNav` (the ⌘K/cockpit/ledger doors inside every shelf).
- **Persistence:** local-first (`progress`, `sm2`, `mistakes`, `ledger`, `goal`, `custom-cards`, `mock`) — all reads guarded with try/catch; nothing leaves the browser except the grounded-tutor API calls.
- **APIs:** `/api/ask` (grounded tutor, honest "not in the notes" contract), `/api/defend`, `/api/case-strike`, `/api/generate-cards`, `/api` + `/api/sync` — all behind `api-guard` (same-origin + rate limit). Probe: `ask` 200; `defend`/`case-strike` 400 on malformed payloads (validation working as designed; UI-verified separately).
- **Service worker:** network-first navigations, dev-safe (`sw.js?dev=1`) — ruled out as a route-stability factor.

## 3. Route / content matrix (all six subjects)

Counts below were verified **in the rendered app** (chapter-index drawer rows) and match the source structures (`GROUPS` / `SECTION_COUNTS`) exactly.

| # | Subject (canonical id) | Status | Chapters (rendered = source) | First / last chapter | Question bank | Content files |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | Foundations of Computing (`foc`) | live | **33 = 33** | 01 Course map / 05 Classes | 160 Q | `notes/FocApp.tsx`, `notes/Part1…9.tsx`, `foc/*`, `notes/questions.ts` |
| 02 | Algorithmic Thinking in Business (`atb`) | live | **33 = 33** | 01 Why algorithms? / 05 Final recap | 51 Q | `atb/AtbApp.tsx`, `atb/AtbParts1…10.tsx`, `atb/lectures.ts`, `atb/questions.ts` |
| 03 | Financial Accounting (`fa`) | live | **33 = 33** | 01 Course map / 05 Profit is an opinion | 72 Q | `fa/FaApp.tsx`, `fa/FaParts5…11.tsx`, `fa/lectures.ts`, `fa/questions.ts` |
| 04 | Economic & Business History (`ebh`) | live | **31 = 31** | 01 The course map / 01 Indian business history | 66 Q | `ebh/EbhApp.tsx`, `ebh/EbhParts5…8.tsx`, `ebh/lectures.ts`, `ebh/questions.ts` |
| 05 | Statistics for Managers (`stm`) | live | **31 = 31** | 01 What is statistics? / 09 Hypothesis testing framework | 62 Q | `stm/StmApp.tsx`, `stm/StmParts9…15.tsx`, `stm/lectures.ts`, `stm/questions.ts` |
| 06 | Principles of Marketing (`mktg`) | live | **53 = 53** | 01 Why marketing? / 10 The bias lab | 48 Q | `mktg/MktgApp.tsx`, `mktg/MktgParts1…4.tsx`, `mktg/lectures.ts`, `mktg/questions.ts` |
| — | Semester 2 | reserved | — empty bay, honest copy — | — | — | — |

**Totals: 214 chapters, 459 banked questions.** `lib/section-counts.ts` (33+33+33+31+31+53=214) and `lib/question-counts.ts` agree with the banks; the exam windows read the real banks, so the shelf-card numbers are the only manual mirrors (flagged in code comments).

## 4. The reported route inconsistency — root causes found & fixed

QA had observed: card clicks changing the URL while the landing stayed visible; Back-to-Atlas on EBH changing the URL but leaving the course; Foundations/Marketing behaving differently across sessions; refresh on a subject route bouncing home.

**Root causes (all reproduced, then fixed):**

1. **Bare anchors destroyed the route.** 13 in-page scrollers used `<a href="#notes-top">` / `<a href="#top">`. Clicking one rewrote `location.hash` from `#/subject/<id>` to `#notes-top` — the route was gone from the URL. The view stayed (parser correctly ignores bare anchors), so URL and page disagreed from that moment; a refresh then landed on the landing with the anchor hash. *Repro (pre-fix): open `#/subject/ebh` → click the brand chip → URL becomes `#top`; refresh → landing.* **Fix:** all 13 converted to `<button>` + `scrollToId()` (`src/lib/utils.ts`, reduced-motion aware) — the URL is never touched. Battery section H: 4/4 PASS.
2. **rAF-gated initial view sync could stall.** The first view was resolved in a `requestAnimationFrame` callback; rAF can sleep in hidden iframes/tabs → a deep link could sit on the landing. **Fix:** 150 ms timeout rides shotgun (`page.tsx`).
3. **Subject ids were case/exact-match only.** `#/subject/FOC` fell to the reserved bay. **Fix:** parser normalizes (decode → trim → lowercase → strip trailing `/`), pinned by tests.
4. **Cockpit plan could hang on "Reading the ledger…".** The plan was built in a bare rAF callback — any throw or a sleeping rAF meant an indefinite skeleton. **Fix:** try/catch → honest error card with **Retry the ledger**; 300 ms fallback build; 2.5 s "Still reading the ledger…" slow state (`CockpitView.tsx`). The plan itself is deterministic local data (`lib/cockpit.ts`), so no network timeout is involved.

After the fixes the full battery passes 29/29 — every shelf-card click, deep link, refresh, browser Back/Forward, edge-swipe-back target and Back-to-Atlas leaves **URL and visible page in agreement**. (The "sometimes, across sessions" flavor of the original report matches cause #1: it only fired after a reader used a hero scroll affordance, plus cause #2 in background tabs.)

## 5. Defect log (severity-ordered)

| Sev | Defect | Repro | Expected / Actual | Fix (file) | Verified |
| --- | --- | --- | --- | --- | --- |
| **S1** | In-page anchors destroyed `#/subject/<id>` on click → refresh bounced home | §4.1 | URL keeps route / URL became `#notes-top` | buttons + `scrollToId` (13 files: `FocHero`, `FaHero`, `EbhHero`, `MktgHero`, `StmHero`, `AtbParts1`, `Part1`, 6 × `*App` brand chips) | battery H 4/4 |
| **S1** | Cockpit plan indefinite "Reading the ledger…" | hidden iframe / any throw in `buildFlightPlan` | loading → plan or error+retry / endless skeleton | `CockpitView.tsx` (guards + error card + retry) | sweep §3 pass; G battery pass |
| **S1** | Landing hero stat stuck at "0 SUBJECTS" (or froze at 5) | load landing, scroll to stats | counts to 6 / stayed 0 (IO never fired) or 5 (last easing frame under target, no completion pin) | `AtlasLanding.tsx` `Stat`: `onComplete` pins the true value; 3 s fallback if IO never fires; reduced-motion renders instantly | battery F: `stat=6` |
| **S2** | `#/subject/FOC` (case) → reserved bay | typed deep link | subject shelf / honest-but-wrong bay | parser normalization (`atlas-router.ts`) + 10 unit tests | bun test 10/10 |
| **S2** | Cockpit PlanStep crushed at 320 px: kicker wrapped vertically, note squeezed to slivers, CTA collided | open `#/cockpit` at 320 | readable rows / vertical text | mobile action moved to a full-width 44 px button under the note; desktop keeps the inline button (`CockpitView.tsx`) | screenshot `cockpit-320-v2.png` |
| **S2** | FoC TopNav row overflowed at 320 px (right cluster + brand text ≈ +16 px) | open `#/subject/foc` at 320 | fits / cluster pushed out | brand text hidden < 380 px (`min-[380px]:inline`), icon chip + aria-label remain (6 apps) | sweep 35/35 |
| **S2** | FoC content overflow: StepsFlow +34 px @768; objective deck +5 px @320 | open foc at 768 / 320 | no overflow | `min-w-0` on pipeline nodes (`notes/ui.tsx`); objective rows `flex-wrap` + `min-w-0` (`foc/FocParts1.tsx`) | sweep 35/35 |
| **S3** | Touch targets < 44 px across chrome (landing pill 22–24 px tall; TopNav 36 px; cockpit/ledger back pills 28–32 px; chip strip 34 px) | probe at 320 | ≥ 44 px practical | 40 px visuals + invisible `::after` halos (`fix-touch-targets.py`, 8 files); 44 px pills in cockpit/ledger; `.nav-link` min-height 36 px + strip padding | header probe clean |
| **S3** | Streak chip wrapped into a circle at 320 (cockpit header) | open cockpit at 320 | nowrap chips / wrapped pill | `whitespace-nowrap`, streak hidden < 380 px, title truncates | screenshot |
| — | Hero CTA discoverability (product ask) | — | primary action visible without leaving the scene | **Added** (not relocated): "Open Foundations of Computing" + "Browse the shelf" inside the hero, below the tagline — planet, sigil, wordmark and motion untouched | screenshot `sweep-atlas-320.png` |

Not bugs, verified working: back-to-atlas from all six shelves (26/29 baseline passes included these once the harness was fixed — the first battery run's "failures" were my own harness escaping/aria-label mismatches and a dev-server OOM death mid-run; both ruled out before drawing conclusions).

## 6. App-wide feature audit (Phase 2)

All exercised in the running app (`scripts/feature-sweep.sh`, 15/15):

- **Landing:** hero scene + sigil + marquee + shelf (6 rows, live badges, due badges) + Semester-2 reserved band + Open Signals — all render; hero copy is truthful (six subjects; nothing promises unuploaded syllabus).
- **Open Signals:** **8/8** public-API brands present and rendering live data during the sweep (Wikipedia, Wikipedia Feed, DummyJSON, Open-Meteo, Frankfurter, JokeAPI, Advice Slip, WheretheISS.at), each with VIA credit chips. External-service flakiness is handled upstream; failure states were not force-simulated offline in this pass.
- **Command palette:** opens via **both** ⌘K (Ctrl+K on Linux) and the nav button; search returns grounded hits; Escape closes; Radix handles focus trap.
- **Cockpit:** 3 deterministic plan steps render from the ledger; Defend It, Case Strike, Ask the Atlas panels present; concept check interactive; plan actions deep-link into shelves/ledger.
- **Ledger:** stat strip, mastery, spaced review, card forge, the mistake ledger all reachable; SM-2 scheduling intact; mock handoff (`atlas:mock-open`) opens the mock window.
- **Python Lab (FoC):** opens; Pyodide runtime loads via the SW's stale-while-revalidate tier (offline-capable after first load).
- **Print:** print button present in every shelf TopNav + `print.css` in the app shell. *Not visually verified on paper output in this environment — see §9.*
- **Exams/practice:** see §8.

**Content rendering:** every shelf opens through card click, deep link, and refresh; chapter drawers list all 214 chapters (counts above); first/last chapters render; prev/next lecture sequencing present in the lecture chrome; quizzes (ConceptCheck, exam banks) render options/feedback; code cells run on the in-tab CPython kernel (FoC). The 459 banked questions were exercised through their windows rather than re-derived one-by-one; per-question copyediting of all six banks is explicitly out of scope for this pass (§9).

## 7. Accessibility

Pre-existing and verified: global `:focus-visible` styles (incl. dark chrome variants), `prefers-reduced-motion` CSS guards, `MotionConfig reducedMotion="user"`, Radix-based palette focus management, `useDialogA11y` focus trap + restore for shelf windows, Escape closes menus/palette/index everywhere tested, `aria-live` on the cockpit brief, labelled nav landmarks on all 9 header variants.

Added this pass: 44 px hit floors (halo technique, no visual redesign), `aria-label`s on the converted scroll buttons (the icon-only states had none), visible label or `title` tooltip retained on every icon-only control, brand chip icon-only state keeps its accessible name, mobile plan-step CTA is a real 44 px button (was a crushed inline pill).

## 8. Pen-and-paper practice readiness (Phase 4)

**What exists today (verified):** per-subject exam windows (FoC/ATB/EBH share `notes/ExamEngine` + themes; FA/STM/MKTG have themed windows) drawing on real banks (160/51/72/66/62/48 Q = 459), mixed-subject **mock** composer (`lib/mock.ts`), **drill** window (per-shelf, trouble-spot aware), **spaced review** (SM-2), **card forge** (AI + manual), **mistake-ledger** re-solver, daily goal + streaks. All six subjects are covered by practice tooling — no coverage gap among the live shelves.

**Recommended extension point — "write first" paper-practice loop** (designed, deliberately **not** fabricated or fully built): the cleanest seam is a new sibling window beside `DrillWindow`/`MockWindow`, driven by the same handoff contracts (`atlas:paper-open` via `sessionStorage`, mirroring `openLedgerWindow` in `lib/cockpit.ts`):

1. choose subject/topic or the due-review set (reuse `dueCounts`, `troubleSpots`);
2. show a short question set + timer with **solutions hidden** (reuse exam-window theming);
3. student writes on paper;
4. model answer/rubric revealed **only on explicit choice**;
5. self-score + tag error type/uncertainty (feed `mistakes.ts` so the mistake-ledger schedule owns the follow-up);
6. missed topics ride the existing SM-2 queue automatically;
7. timed mixed mocks only after the supplied syllabus/weightings/format are mapped (`lib/mock.ts` already takes a blueprint — leave the blueprint empty until then).

**Blockers (honest):** the complete pen-and-paper exam syllabus, chapter weightings and the exam format have **not** been uploaded yet; several lectures are still being added. No question bank was invented or expanded in this pass, and no coverage claim beyond the 459 existing questions is made.

## 9. Not verified / pending

- **Print output on paper** — `print.css` + button verified present; actual paginated rendering needs a real print run.
- **Per-question copyedit of all 459 items** — banks were exercised via their engines; line-by-line content QA is a separate, larger pass.
- **External API failure modes** (Open Signals) — live-path verified; timeout/offline simulation was not forced.
- **Semester 2** — intentionally empty; lands when the syllabus drops.
- **Pending owner inputs:** remaining lectures + the complete exam syllabus (blocks Phase 4 items 4–7).
- One environmental note: the sandbox dev server died of memory pressure once mid-audit (OOM, not an app fault); all results above are from clean full re-runs.

## 10. Files changed (implementation pass)

- **Routing:** `src/lib/atlas-router.ts` (new, canonical parser), `src/lib/atlas-router.test.ts` (new, 10 tests), `src/app/page.tsx` (consume parser, hardened initial sync).
- **Scroll integrity:** `src/lib/utils.ts` (`scrollToId`), 13 anchor→button conversions (`FocHero`, `FaHero`, `EbhHero`, `MktgHero`, `StmHero`, `AtbParts1`, `notes/Part1`, 6 × `*App` brand chips) via `scripts/fix-bare-anchors.py`.
- **Hero & counter:** `AtlasLanding.tsx` (Stat convergence + fallback + reduced-motion; hero CTA row; nav touch targets; GoalChip target).
- **Cockpit:** `CockpitView.tsx` (plan error/slow/retry, header fit, responsive PlanStep, 44 px back).
- **Headers/targets:** `ShelfQuickNav.tsx`, `LedgerView.tsx`, six `*App.tsx` TopNavs (+ brand-text responsive hide) via `scripts/fix-touch-targets.py`.
- **Content overflow:** `notes/ui.tsx` (StepsFlow), `foc/FocParts1.tsx` (objective deck), `globals.css` (`.nav-link` thumb floor).
- **QA tooling (new):** `scripts/route-battery.sh`, `scripts/feature-sweep.sh`, `scripts/responsive-sweep.sh`, `scripts/count-chapters.sh`, `scripts/qa-mobile/*` probes.
- **Tooling:** `package.json` (`test` script), `@types/bun` (dev).
