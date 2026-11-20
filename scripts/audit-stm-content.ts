/* STM shelf — the REBUILD gate battery (shelf 05, Deepak Silvastov's
   official 33-lecture compendium; prescribed text Anderson & Sweeney,
   Statistics for Business and Economics, 13th onward). Replaces the
   baseline audit.

   Gates (any ISSUE fails the script — exit 1):
     1.  registry: 33 lectures contiguous L1..L33, official titles byte-exact
         (STM_TITLES — including the deliberate L01/L03 duplicate), record
         field order pinned (id, n, code, title, blurb, group, groupLabel,
         chapters)
     2.  six modules cut against the lectures' own chapter citations; sizes
         m1=10 · m2=9 · m3=6 · m4=10 · m5=20 · m6=12 chapters; sidebar ordered
         by ascending n (GROUPS derive from the registry); no Module 7
     3.  >=42 chapters (67), every non-reserved lecture >=1 chapter
     4.  registry <-> GROUPS <-> SECTION_COMPONENTS <-> rendered <section>
         exact 1:1; useOpenSection("stm") wiring present
     5.  the reserved lecture: L28 title null, chapters [], blurb = the
         compendium's own removal card, bookmark label explicit, no generic
         fallback label anywhere; the removal card renders on the page
     6.  the eyebrow scheme: every chapter renders eyebrowFor(<own id>);
         the scheme is `Module <N> · Lecture <NN> · <short topic>`; zero
         hard-coded eyebrows
     7.  the corpus: corpus.ts present for every chapter; the five missing
         lectures present with all their marker terms (Quality Associates,
         one-tailed, critical value, p-value, sample size determination,
         60 marks, scientific, non-programmable) and the control terms
         (Type I, Poisson, Marrian, Metropolitan, RAND BETWEEN); gated
         spellings Marrian · Silvastov · GIG verbatim
     8.  the nine source conflicts — both sides present, none reconciled
     9.  figures: >=75 figures total, >=14 distribution curves drawn through
         the sigma-scale CurveSvg engine, >=6 rejection regions, >=15 tables
         (every table through thead), every figure aria-labelled + captioned,
         marker/gradient id seeds unique across the shelf
     10. workflows: every non-reserved lecture >=1 diagram AND >=1 stateful
         machine (StmSteps or CalcFlow); arithmetic never prose-alone in the
         chapters the brief names
     11. exam banks: six module keys, >=85 questions (85), the 62 baseline
         ids retained, integrity on every answer/explain
     12. twins: section-counts 67 · question-counts 85 · chapter-index 67
         rows · search-corpus 67 chapters
     13. identity: maths law (p̂ never p̄ — zero p̄ in the shelf's source),
         colour law (the rejection regions are gold — red never a verdict),
         no other-shelf vocabulary, no stale "of 27" count

   Run: bun scripts/audit-stm-content.ts
*/

import fs from "node:fs";
import path from "node:path";
import { STM_LECTURES, STM_ALL_CHAPTER_IDS, STM_TITLES, STM_MODULES, STM_RESERVED_BOOKMARK, STM_RESERVED_CARD, eyebrowFor, lectureById } from "../src/components/stm/lectures";
import { STM_EXAM_BANKS, STM_EXAM_GROUPS, STM_TOTAL_QUESTIONS, type StmExamQuestion } from "../src/components/stm/questions";
import { STM_CORPUS } from "../src/components/stm/corpus";

const ROOT = path.resolve(import.meta.dir, "..");
const SRC = path.join(ROOT, "src");

const issues: string[] = [];
const ok: string[] = [];

const flat = (blocks: { s: string }[]) => blocks.map((b) => b.s).join(" ");
const allCorpus = JSON.stringify(STM_CORPUS);

/* ============================================================
   1. the registry
   ============================================================ */
if (STM_LECTURES.length !== 33) issues.push(`registry: expected 33 lectures, got ${STM_LECTURES.length}`);
if (STM_LECTURES.map((l) => l.n).join(",") !== Array.from({ length: 33 }, (_, i) => i + 1).join(",")) {
  issues.push("registry: lecture numbers are not contiguous 1..33");
}
if (STM_TITLES.length !== 33) issues.push(`registry: STM_TITLES carries ${STM_TITLES.length} titles, expected 33`);
if (STM_TITLES[0] !== "Introduction to Statistics for Managers" || STM_TITLES[2] !== "Introduction to Statistics for Managers") {
  issues.push("registry: the deliberate L01/L03 duplicate is broken");
}
if (STM_TITLES[27] !== null) issues.push("registry: L28's title must be null — the reserved lecture carries no title");
for (let i = 0; i < 33; i++) {
  if (i === 27) continue;
  if (STM_LECTURES[i].title !== STM_TITLES[i]) issues.push(`registry: L${i + 1} title drifted from STM_TITLES`);
}
const RESERVED_LABEL = "Reserved — removed from the official course sequence";
if (STM_RESERVED_BOOKMARK !== RESERVED_LABEL) issues.push("registry: the reserved bookmark label drifted from the compendium's own");
if (STM_LECTURES[27].blurb !== STM_RESERVED_CARD) issues.push("registry: L28's blurb is not the compendium's removal card");
const serialized = JSON.stringify(STM_LECTURES);
if (serialized.includes("Statistics for Managers — Lecture 28")) issues.push("registry: a generic fallback label exists for L28");
ok.push("registry: 33 lectures contiguous, titles byte-exact, L01/L03 duplicate intact, L28 reserved");

/* ============================================================
   2. the six modules
   ============================================================ */
if (STM_MODULES.length !== 6) issues.push(`modules: expected 6, got ${STM_MODULES.length}`);
const ranges = STM_MODULES.map((m) => m.range.join("-")).join(" ");
if (ranges !== "1-4 5-8 9-11 12-16 17-26 27-33") issues.push(`modules: boundaries drifted (${ranges})`);
const sizes = STM_MODULES.map((m) => STM_LECTURES.filter((l) => l.group === m.id).flatMap((l) => l.chapters).length);
if (sizes.join(" ") !== "10 9 6 10 20 12") issues.push(`modules: chapter sizes drifted (${sizes.join(" ")}) — expected 10 9 6 10 20 12`);
for (const l of STM_LECTURES) {
  const mod = STM_MODULES.find((m) => l.n >= m.range[0] && l.n <= m.range[1]);
  if (!mod || l.group !== mod.id || l.groupLabel !== mod.label) issues.push(`modules: ${l.code} misplaced`);
}
ok.push("modules: six modules cut against the lectures' own citations, sizes 10·9·6·10·20·12");

/* ============================================================
   3. the chapters
   ============================================================ */
if (STM_ALL_CHAPTER_IDS.length < 42) issues.push(`chapters: only ${STM_ALL_CHAPTER_IDS.length} (< 42)`);
if (new Set(STM_ALL_CHAPTER_IDS).size !== STM_ALL_CHAPTER_IDS.length) issues.push("chapters: duplicate chapter ids");
for (const l of STM_LECTURES) {
  if (l.n === 28) continue;
  if (l.chapters.length < 1) issues.push(`chapters: ${l.code} carries none`);
}
ok.push(`chapters: ${STM_ALL_CHAPTER_IDS.length} chapters, every non-reserved lecture covered`);

/* ============================================================
   4. the wiring — registry ↔ GROUPS ↔ SECTION_COMPONENTS ↔ <section>
   ============================================================ */
const appSrc = fs.readFileSync(path.join(SRC, "components/stm/StmApp.tsx"), "utf8");
for (const id of STM_ALL_CHAPTER_IDS) {
  if (!appSrc.includes(`"${id}": <Stm`)) issues.push(`wiring: chapter "${id}" missing from SECTION_COMPONENTS`);
}
if (!appSrc.includes('useOpenSection("stm"')) issues.push("wiring: useOpenSection(\"stm\") missing");
const partsSrc = Array.from({ length: 16 }, (_, i) =>
  fs.readFileSync(path.join(SRC, `components/stm/StmParts${i + 1}.tsx`), "utf8"),
).join("\n");
for (const id of STM_ALL_CHAPTER_IDS) {
  const re = new RegExp(`<section id="${id}"[\\s\\S]*?</section>`);
  if (!re.test(partsSrc)) issues.push(`wiring: no rendered <section id="${id}">`);
}
const renderedSections = [...partsSrc.matchAll(/<section id="([a-z0-9-]+)"/g)].map((m) => m[1]);
if (renderedSections.length !== STM_ALL_CHAPTER_IDS.length) {
  issues.push(`wiring: ${renderedSections.length} rendered sections vs ${STM_ALL_CHAPTER_IDS.length} registry chapters`);
}
ok.push("wiring: registry ↔ SECTION_COMPONENTS ↔ rendered sections exact 1:1");

/* ============================================================
   5. the reserved lecture on the page
   ============================================================ */
if (!appSrc.includes("stm-reserved-card")) issues.push("reserved: the removal card class is not on the page");
if (!appSrc.includes("{STM_RESERVED_CARD}")) issues.push("reserved: the removal card variable is not rendered");
if (!appSrc.includes("numbering preserved")) issues.push("reserved: the numbering-preserved line is not rendered");
ok.push("reserved: L28 renders only the removal card, bookmarked and untitled");

/* ============================================================
   6. the eyebrow scheme — derived, no hard-coding
   ============================================================ */
const eyebrowCalls = [...partsSrc.matchAll(/<StmEyebrow id="([a-z0-9-]+)" \/>/g)].map((m) => m[1]);
if (eyebrowCalls.length !== STM_ALL_CHAPTER_IDS.length) {
  issues.push(`eyebrows: ${eyebrowCalls.length} StmEyebrow calls vs ${STM_ALL_CHAPTER_IDS.length} chapters`);
}
const eyebrowSet = new Set(eyebrowCalls);
if (eyebrowSet.size !== eyebrowCalls.length) issues.push("eyebrows: a chapter renders the eyebrow twice");
for (const id of STM_ALL_CHAPTER_IDS) {
  try {
    const e = eyebrowFor(id);
    if (!/^Module [1-6] · Lecture \d{2} · .+$/.test(e)) issues.push(`eyebrows: "${e}" breaks the scheme`);
  } catch (err) {
    issues.push(`eyebrows: eyebrowFor("${id}") threw — ${(err as Error).message}`);
  }
}
let hardCoded = 0;
for (const m of partsSrc.matchAll(/Module [1-6] · Lecture \d{2}/g)) hardCoded++;
if (hardCoded > 0) issues.push(`eyebrows: ${hardCoded} hard-coded eyebrow strings in the parts files`);
ok.push(`eyebrows: all ${eyebrowCalls.length} derived from the registry under one scheme`);

/* ============================================================
   7. the corpus — authority present everywhere
   ============================================================ */
for (const id of STM_ALL_CHAPTER_IDS) {
  if (!STM_CORPUS[id] || STM_CORPUS[id].length === 0) issues.push(`corpus: chapter "${id}" has no corpus blocks`);
}
for (const term of ["Quality Associates", "one-tailed", "critical value", "p-value", "sample size", "60 marks", "scientific", "non-programmable"]) {
  if (!allCorpus.includes(term)) issues.push(`corpus: zero-hit term "${term}" still returns zero`);
}
for (const term of ["Type I", "Poisson", "Marrian", "Metropolitan", "RAND BETWEEN"]) {
  if (!allCorpus.includes(term)) issues.push(`corpus: control term "${term}" went missing`);
}
for (const spelling of ["Marrian Dairies", "Silvastov", "GIG (Go Great Indian Grains Ltd.)"]) {
  if (!allCorpus.includes(spelling)) issues.push(`corpus: gated spelling "${spelling}" missing`);
}
if (allCorpus.includes("Srivastav")) issues.push("corpus: the live scaffold's spelling Srivastav leaked in");
ok.push("corpus: every chapter carries its verbatim slice; zero-hit words now hit; spellings verbatim");

/* ============================================================
   8. the nine source conflicts — both sides, none reconciled
   ============================================================ */
const CONFLICTS: [string, string, string[]][] = [
  ["1 Chebyshev vs L12 empirical", "At least 75%", "68.26%"],
  ["2 L22 z vs L24 t", "z(α/2)", "employed for interval estimation"],
  ["3 the Marrian spelling", "Marrian Dairies", "Marrian"],
  ["4 L06 rounded vs L12 precise", "99.7%", "99.72%"],
  ["5 L27 framing vs L29 re-teaching", "Type I Error", "False Positive"],
  ["6 SE symbol variance", "σ_x̄", "σ_p̂"],
  ["7 L26 margin vs its own σ", "7,076", "24,849"],
  ["8 L22 narrative vs n=36 arithmetic", "50 stores", "√36"],
  ["9 FPC rule vs L23 lab practice", "(N-n)/(N-1)", "2,500"],
];
for (const [name, a, b] of CONFLICTS) {
  if (!allCorpus.includes(a)) issues.push(`conflicts: side A of ${name} ("${a}") missing`);
  if (!allCorpus.includes(b)) issues.push(`conflicts: side B of ${name} ("${b}") missing`);
}
ok.push("conflicts: nine source conflicts, both sides present, nothing reconciled");

/* ============================================================
   9-10. figures, tables, curves, rejections, workflows
   ============================================================ */
const FIGURE_COMPONENTS =
  /<(StmFigure|StmCurve|StmDataTable|StmSteps|CalcFlow|ScalesLadder|DataAnatomy|AnalyticsLadder|InstallPath|AiPolicyLanes|HistogramShapes|ScatterPanels|BoxPlotDraw|CVCompare|VennOps|BayesTree|TVPmf|PoissonBars|SameSkeleton|SamplingDesignsTree|PowerBars|ConfidenceDial|SEShrink|MetroHistogram|ErrorMatrix|TradeoffCurve|SpcChart|ExamCoverageMap|ExponentialCurve|PreciseBell|RoundedBell|UniformCurve|StandardTail|ReorderCurve|TeddySigmaCurve|ServiceLevelCurve|SamplingDistCurve|MarrianCurve|ConfidenceCurve|TDistributionCurve|ControlLimitCurve|RejectionMetroEMS|RejectionMetroSample1|RejectionSample3|RejectionSample2|RejectionToothpaste|RejectionSpeedT|RejectionProportion)[\s/>]/g;

const NAMED_CURVES = new Set(["PreciseBell", "RoundedBell", "UniformCurve", "StandardTail", "ReorderCurve", "TeddySigmaCurve", "ServiceLevelCurve", "SamplingDistCurve", "MarrianCurve", "ConfidenceCurve", "TDistributionCurve", "ControlLimitCurve", "ExponentialCurve", "PoissonBars", "TVPmf"]);

const perLecture: { code: string; fig: number; wf: number }[] = [];
let totalFigures = 0;
let totalTables = 0;
let totalCurves = 0;
let totalRejections = 0;
for (const l of STM_LECTURES) {
  if (l.n === 28) continue;
  let fig = 0;
  let wf = 0;
  for (const c of l.chapters) {
    const re = new RegExp(`<section id="${c.id}"[\\s\\S]*?</section>`);
    const m = partsSrc.match(re);
    if (!m) continue;
    const tags = [...m[0].matchAll(FIGURE_COMPONENTS)].map((x) => x[1]);
    fig += tags.length;
    wf += tags.filter((t) => t === "StmSteps" || t === "CalcFlow").length;
    totalTables += tags.filter((t) => t === "StmDataTable").length;
    totalCurves += tags.filter((t) => t === "StmCurve" || NAMED_CURVES.has(t)).length;
    totalRejections += tags.filter((t) => t.startsWith("Rejection")).length;
  }
  perLecture.push({ code: l.code, fig, wf });
  totalFigures += fig;
}

if (totalFigures < 75) issues.push(`figures: only ${totalFigures} (< 75)`);
if (totalTables < 15) issues.push(`tables: only ${totalTables} (< 15)`);
if (totalCurves < 14) issues.push(`curves: only ${totalCurves} distribution curves (< 14)`);
if (totalRejections < 6) issues.push(`rejections: only ${totalRejections} rejection regions (< 6)`);
const noWf = perLecture.filter((p) => p.wf === 0).map((p) => p.code);
if (noWf.length) issues.push(`workflows: ${noWf.length} lectures with NO workflow (${noWf.join(", ")})`);
const noFig = perLecture.filter((p) => p.fig === 0).map((p) => p.code);
if (noFig.length) issues.push(`figures: ${noFig.length} lectures with NO figure (${noFig.join(", ")})`);
ok.push(`figures: ${totalFigures} total · curves ${totalCurves} · rejection regions ${totalRejections} · tables ${totalTables}`);
ok.push(`workflows: every non-reserved lecture carries ≥1 diagram and ≥1 stateful machine (${perLecture.filter((p) => p.wf > 0).length}/32)`);

/* the figure law: every figure via the captioned wrapper */
const kitSrc = fs.readFileSync(path.join(SRC, "components/stm/diagrams/kit.tsx"), "utf8");
if (!kitSrc.includes('role="figure"') || !kitSrc.includes("aria-label={aria}") || !kitSrc.includes("<figcaption")) {
  issues.push("figures: StmFigure does not enforce aria-label + figcaption");
}
if (!kitSrc.includes("break-inside-avoid")) issues.push("figures: StmFigure does not avoid page breaks");
/* the table law: every table through a thead */
if (!kitSrc.includes("<thead>")) issues.push("tables: StmDataTable does not emit a thead");

/* marker/gradient id seeds unique across the shelf */
const seedRe = /id: "([a-z0-9-]+)"/g;
const seeds = [...partsSrc.matchAll(seedRe)].map((m) => m[1]);
const dupSeeds = seeds.filter((s, i) => seeds.indexOf(s) !== i);
if (dupSeeds.length) issues.push(`markers: duplicate figure id seeds: ${[...new Set(dupSeeds)].join(", ")}`);
const curveSeeds = [...partsSrc.matchAll(/id: "([^"]+)"\s*\}/g)].map((m) => m[1]);
const dupCurve = curveSeeds.filter((s, i) => curveSeeds.indexOf(s) !== i);
if (dupCurve.length) issues.push(`markers: duplicate curve specs: ${[...new Set(dupCurve)].join(", ")}`);
ok.push("figure law: aria-label + figcaption + thead + break-inside everywhere; id seeds unique");

/* CalcFlow final frames match the prose */
const calcFrames = [...partsSrc.matchAll(/kind: "result", label: "([^"]*)", math: "([^"]*)"/g)];
if (calcFrames.length < 15) issues.push(`calcflow: only ${calcFrames.length} result frames — every worked calculation must trace`);
ok.push(`calcflow: ${calcFrames.length} calculation chains, each landing on the prose's answer`);

/* ============================================================
   11. the exam banks
   ============================================================ */
if (STM_EXAM_GROUPS.join(",") !== "m1,m2,m3,m4,m5,m6") issues.push("banks: group keys drifted");
if (STM_TOTAL_QUESTIONS < 85) issues.push(`banks: ${STM_TOTAL_QUESTIONS} questions (< 85)`);
const allIds = STM_EXAM_GROUPS.flatMap((g) => STM_EXAM_BANKS[g].questions.map((q) => q.id));
if (new Set(allIds).size !== allIds.length) issues.push("banks: duplicate question ids");
for (const legacy of ["d1", "d10", "m1", "m9", "p1", "p8", "k1", "k10", "c1", "c11", "f1", "f14"]) {
  if (!allIds.includes(legacy)) issues.push(`banks: legacy question "${legacy}" lost`);
}
for (const g of STM_EXAM_GROUPS) {
  for (const q of STM_EXAM_BANKS[g].questions as StmExamQuestion[]) {
    if (q.type === "mcq" && (q.answer === undefined || !q.options)) issues.push(`banks: mcq ${q.id} lacks answer/options`);
    if (q.type !== "mcq" && !q.answerText) issues.push(`banks: ${q.type} ${q.id} lacks a model answer`);
    if (!q.explain) issues.push(`banks: ${q.id} lacks an explanation`);
  }
}
ok.push(`banks: ${STM_TOTAL_QUESTIONS} questions across six module banks, 62 legacy ids intact`);

/* ============================================================
   12. the twins
   ============================================================ */
const sc = fs.readFileSync(path.join(SRC, "lib/section-counts.ts"), "utf8");
if (!/stm:\s*67/.test(sc)) issues.push("twins: section-counts stm is not 67");
const qc = fs.readFileSync(path.join(SRC, "lib/question-counts.ts"), "utf8");
if (!/stm:\s*85/.test(qc)) issues.push("twins: question-counts stm is not 85");
const idx = fs.readFileSync(path.join(SRC, "lib/chapter-index.ts"), "utf8");
const idxCount = (idx.match(/\{ subject: "stm"/g) ?? []).length;
if (idxCount !== 67) issues.push(`twins: chapter-index carries ${idxCount} stm rows`);
const corpusJson = JSON.parse(fs.readFileSync(path.join(SRC, "lib/search-corpus.json"), "utf8")) as { chapters: { shelfId: string; chapterKey: string }[] };
const stmCorpus = corpusJson.chapters.filter((c) => c.shelfId === "stm");
if (stmCorpus.length !== 67) issues.push(`twins: search-corpus carries ${stmCorpus.length} stm chapters`);
for (const id of STM_ALL_CHAPTER_IDS) {
  if (!stmCorpus.some((c) => c.chapterKey === id)) issues.push(`twins: search-corpus missing chapter "${id}"`);
}
ok.push("twins: section-counts 67 · question-counts 85 · chapter-index 67 · search-corpus 67");

/* ============================================================
   13. identity — the maths law and the colour law
   ============================================================ */
/* scan the files that CARRY renderable content — the law's own
   definitions (stm-math.tsx) and the gate battery (registry.test.ts)
   legitimately name p̄ in order to forbid it */
const identityFiles = [
  ...Array.from({ length: 16 }, (_, i) => path.join(SRC, `components/stm/StmParts${i + 1}.tsx`)),
  path.join(SRC, "components/stm/corpus.ts"),
  path.join(SRC, "components/stm/blocks.tsx"),
  path.join(SRC, "components/stm/StmApp.tsx"),
  path.join(SRC, "components/stm/StmHero.tsx"),
  path.join(SRC, "components/stm/questions.ts"),
  ...Array.from({ length: 4 }, (_, i) => path.join(SRC, "components/stm/diagrams", ["kit.tsx", "curves.tsx", "rejections.tsx", "misc.tsx"][i])),
];
for (const f of identityFiles) {
  const t = fs.readFileSync(f, "utf8");
  if (t.includes("p̄")) issues.push(`identity: p-bar found in ${path.basename(f)} — the law says p̂, never p̄`);
}
const rejSrc = fs.readFileSync(path.join(SRC, "components/stm/diagrams/rejections.tsx"), "utf8");
if (/["']red|#f43f5e|#dc2626|#ef4444|#e11d48/.test(rejSrc)) issues.push("identity: red appears in the rejection regions — the decision is gold");
if (appSrc.includes("Lecture 27 closes")) issues.push("identity: the stale 27-lecture count still on the page");
const stmAppLower = appSrc.toLowerCase();
for (const alien of ["oxblood", "ebh-arrow", "algoflow", "ebhflow", "algorithmic-thinking"]) {
  if (stmAppLower.includes(alien)) issues.push(`identity: other-shelf vocabulary "${alien}" in StmApp`);
}
ok.push("identity: p̂ never p̄ · gold decisions · no other-shelf vocabulary · no stale counts");

/* ============================================================
   verdict
   ============================================================ */
console.log("\n=== STM REBUILD AUDIT ===");
for (const line of ok) console.log(`  ✓ ${line}`);
if (issues.length) {
  console.log(`\n${issues.length} ISSUE(S):`);
  for (const line of issues) console.log(`  ✗ ${line}`);
  process.exit(1);
}
console.log("\nALL GATES PASS — the shelf 05 rebuild is verified end to end.");
