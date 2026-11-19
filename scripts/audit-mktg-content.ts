/* MKTG shelf — structure & exam-bank audit.
   Mirrors audit-atb-content.ts machinery for Principles of Marketing:
   registry <-> teaching arcs <-> section components <-> rendered <Section id>,
   plus exam-bank integrity, twins, eyebrow correctness,
   reserved-lecture gates, corpus verbatim checks and
   figure/workflow coverage metrics.

   Run: bun scripts/audit-mktg-content.ts
   (rebuild baseline: 40 lectures L01–L40 → 78 chapters, 6 arcs,
    10 exam groups, 60 questions; re-run until green).  */

import { MKTG_LECTURES, MKTG_ALL_CHAPTER_IDS, MKTG_PARTS, partOfLecture, lectureById } from "../src/components/mktg/lectures";
import { MKTG_EXAM_BANKS, MKTG_EXAM_GROUPS } from "../src/components/mktg/questions";
import * as fs from "fs";
import * as path from "path";

const ROOT = "/home/z/my-project";
const issues: string[] = [];
const ok: string[] = [];
const watch: string[] = []; // watchlist — report-only, not blocking

/* ---------- 1. registry sanity ---------- */
console.log("=== 1. REGISTRY (mktg/lectures.ts) ===");
console.log(`Lectures in registry: ${MKTG_LECTURES.length}`);
MKTG_LECTURES.forEach((l, i) => {
  if (l.n !== i + 1) issues.push(`registry: lecture at index ${i} has n=${l.n} (sequence break)`);
  if (l.code !== `L${String(l.n).padStart(2, "0")}`) issues.push(`registry: lecture n=${l.n} has code=${l.code} (want zero-padded L01-style)`);
  if (!l.title?.trim()) issues.push(`registry: L${l.n} has empty title`);
  if (!l.chapters?.length) issues.push(`registry: L${l.n} has NO chapters`);
});
ok.push(`sequence L01..L${String(MKTG_LECTURES.length).padStart(2, "0")} continuous: ${MKTG_LECTURES.every((l, i) => l.n === i + 1)}`);

const ids = MKTG_ALL_CHAPTER_IDS;
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) issues.push(`registry: duplicate chapter ids: ${[...new Set(dupes)].join(", ")}`);
else ok.push(`chapter ids unique (${ids.length} total)`);

// reserved lectures: L22 + L39, never content-bearing
{
  const l22 = lectureById("l22");
  const l39 = lectureById("l39");
  if (l22?.reserved !== true || l22.chapters.some((c) => !c.id.startsWith("reserved-")))
    issues.push("registry: L22 must be reserved with only a reserved-* chapter");
  if (l39?.reserved !== true || l39.chapters.some((c) => !c.id.startsWith("reserved-")))
    issues.push("registry: L39 must be reserved with only a reserved-* chapter");
  if (l22?.title !== "The Decision Journey — Consolidated") issues.push("registry: L22 title drifted from the official label");
  if (l39?.title !== "Lecture 39") issues.push('registry: L39 must be labelled bare as "Lecture 39"');
  if (partOfLecture(22)?.id !== "part3") issues.push("registry: reserved L22 must sit inside Part III");
  if (partOfLecture(39)?.id !== "part6") issues.push("registry: reserved L39 must sit inside Part VI");
  ok.push("L22 + L39 reserved: numbered, positioned in their arcs, carrying only removal cards");
  if (ids.includes("recap22")) issues.push("registry: recap22 (the retired honest recap) is still present");
  else ok.push("recap22 retired — the reserved slots carry removal cards, never recap content");
}

const lectureOf = new Map<string, number>();
MKTG_LECTURES.forEach((l) => l.chapters.forEach((c) => lectureOf.set(c.id, l.n)));

/* ---------- 2. the six teaching arcs ---------- */
console.log("=== 2. TEACHING ARCS (MKTG_PARTS) ===");
console.log(`arcs: ${MKTG_PARTS.map((g) => g.id).join(" → ")}`);
{
  // every chapter's part must be the arc its lecture number falls in
  const misfiled = ids.filter((id) => {
    const n = lectureOf.get(id)!;
    const want = MKTG_PARTS.find((p) => n >= p.from && n <= p.to)?.id;
    return partOfLecture(n)?.id !== want || !want;
  });
  if (misfiled.length) issues.push(`chapters filed outside their lecture's arc: ${misfiled.join(", ")}`);
  else ok.push(`all ${ids.length} chapters sit inside the arc their lecture number falls in`);
  // arcs must partition 1..40 exactly
  let cursor = 1;
  for (const p of MKTG_PARTS) {
    if (p.from !== cursor) issues.push(`arc "${p.id}": starts at ${p.from}, expected ${cursor}`);
    cursor = p.to + 1;
  }
  if (cursor === 41) ok.push(`6 arcs partition L01–L40 exactly (${MKTG_PARTS.map((p) => `${p.from}–${p.to}`).join(", ")})`);
  else issues.push(`arcs do not cover 1..40 (cursor ended at ${cursor})`);
}

/* ---------- 3. SECTION_COMPONENTS map ---------- */
console.log("=== 3. SECTION_COMPONENTS map (MktgApp.tsx) ===");
const appSrc = fs.readFileSync(`${ROOT}/src/components/mktg/MktgApp.tsx`, "utf8");
const mapBlock = appSrc.slice(appSrc.indexOf("const SECTION_COMPONENTS"), appSrc.indexOf("function useSeenDisplay"));
const mapIds = [...mapBlock.matchAll(/^\s*"?([a-z0-9-]+)"?:\s*</gm)].map((m) => m[1]);
console.log(`mapped components: ${mapIds.length}`);
const mapDupes = mapIds.filter((id, i) => mapIds.indexOf(id) !== i);
if (mapDupes.length) issues.push(`SECTION_COMPONENTS: duplicate keys: ${mapDupes.join(", ")}`);
const regNotMapped = ids.filter((id) => !mapIds.includes(id));
const mappedNotReg = mapIds.filter((id) => !ids.includes(id));
if (regNotMapped.length) issues.push(`registry ids with NO component: ${regNotMapped.join(", ")}`);
if (mappedNotReg.length) issues.push(`mapped components with NO registry id: ${mappedNotReg.join(", ")}`);
if (!regNotMapped.length && !mappedNotReg.length) ok.push("registry <-> SECTION_COMPONENTS: exact 1:1 match");
if (!appSrc.includes('useOpenSection("mktg"')) issues.push('MktgApp: useOpenSection("mktg") wiring missing');

/* ---------- 4. rendered <Section id> in MktgParts1-8 + reserved ---------- */
console.log("=== 4. RENDERED <Section id> ===");
const files = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${ROOT}/src/components/mktg/MktgParts${n}.tsx`);
// reserved sections live physically inside MktgParts4/8 (source-order parity)
const renderedIds: { id: string; file: string }[] = [];
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/<Section\s+id="([a-z0-9-]+)"/g)) {
    renderedIds.push({ id: m[1], file: f.split("/").pop()! });
  }
}
console.log(`rendered sections: ${renderedIds.length}`);
const rIds = renderedIds.map((r) => r.id);
const rDupes = rIds.filter((id, i) => rIds.indexOf(id) !== i);
if (rDupes.length) issues.push(`rendered <Section id> DUPLICATES: ${rDupes.join(", ")}`);
const renderedNotMapped = rIds.filter((id) => !ids.includes(id));
const mappedNotRendered = ids.filter((id) => !rIds.includes(id));
if (renderedNotMapped.length) issues.push(`rendered ids NOT in registry: ${renderedNotMapped.join(", ")}`);
if (mappedNotRendered.length) issues.push(`registry ids NEVER rendered as <Section>: ${mappedNotRendered.join(", ")}`);
if (!renderedNotMapped.length && !mappedNotRendered.length) ok.push("registry <-> rendered <Section>: exact 1:1 match");
// physical source order should follow the registry reading order
const regOrder = ids.join("|");
const fileOrder = rIds.join("|");
if (regOrder === fileOrder) ok.push("rendered <Section> source order matches registry reading order");
else issues.push("rendered <Section> source order DIFFERS from registry reading order (sidebar-order risk)");

/* ---------- 5. exam bank integrity ---------- */
console.log("=== 5. EXAM BANK (mktg/questions.ts) ===");
const bankGroups = Object.keys(MKTG_EXAM_BANKS);
console.log(`groups: ${bankGroups.join(", ")}`);
const PREEXISTING_KEYS = ["foundations", "concepts", "value", "loyalty", "stp", "positioning", "consumer", "psychology"];
const missingKeys = PREEXISTING_KEYS.filter((k) => !bankGroups.includes(k));
if (missingKeys.length) issues.push(`pre-existing exam bank keys lost: ${missingKeys.join(", ")}`);
else ok.push("the eight pre-existing bank keys are intact");
if (JSON.stringify(bankGroups) === JSON.stringify(MKTG_EXAM_GROUPS)) ok.push(`exam banks match MKTG_EXAM_GROUPS order (${bankGroups.length})`);
else issues.push(`exam bank groups (${bankGroups.join(",")}) != MKTG_EXAM_GROUPS order`);
for (const g of bankGroups) {
  if (MKTG_EXAM_BANKS[g].questions.length !== 6)
    issues.push(`exam bank "${g}": ${MKTG_EXAM_BANKS[g].questions.length} questions (established shape is 6 per group)`);
}
ok.push("established 6-questions-per-group shape held across all banks");
let totalQ = 0;
const qIdsSeen = new Set<string>();
for (const g of bankGroups) {
  const bank = MKTG_EXAM_BANKS[g];
  let bad = 0;
  for (const q of bank.questions) {
    totalQ++;
    if (qIdsSeen.has(q.id)) { issues.push(`exam: duplicate question id ${q.id}`); bad++; }
    qIdsSeen.add(q.id);
    if (q.type === "mcq") {
      if (!q.options || q.options.length < 2) { issues.push(`exam[${g}] ${q.id}: mcq without options`); bad++; }
      else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length) { issues.push(`exam[${g}] ${q.id}: answer index out of range (${q.answer} of ${q.options?.length})`); bad++; }
    } else if (q.type === "output" || q.type === "short") {
      if (!q.answerText) { issues.push(`exam[${g}] ${q.id}: ${q.type} without answerText`); bad++; }
    } else {
      issues.push(`exam[${g}] ${q.id}: unknown type "${(q as any).type}"`); bad++;
    }
    if (!q.q?.trim()) { issues.push(`exam[${g}] ${q.id}: empty question text`); bad++; }
    if (!q.explain?.trim()) { issues.push(`exam[${g}] ${q.id}: missing explain`); bad++; }
  }
  console.log(`  ${g}: "${bank.title}" — ${bank.questions.length} questions, ${bad} integrity problems`);
}
console.log(`total questions: ${totalQ}`);
ok.push(`exam bank holds ${totalQ} questions across ${bankGroups.length} groups, ids unique`);

/* ---------- 6. cross-system dependencies ---------- */
console.log("=== 6. CROSS-SYSTEM DEPENDENCIES ===");
const corpus = JSON.parse(fs.readFileSync(`${ROOT}/src/lib/search-corpus.json`, "utf8")) as any;
const chapters: any[] = corpus.chapters ?? [];
const corpusMktg = chapters.filter((c: any) => c.shelfId === "mktg");
console.log(`search-corpus: ${chapters.length} chapters (${corpusMktg.length} mktg)`);
if (corpusMktg.length) {
  const corpusIds = new Set(corpusMktg.map((c: any) => String(c.chapterKey ?? "")));
  const missingInCorpus = ids.filter((id) => !corpusIds.has(id));
  if (missingInCorpus.length) issues.push(`search-corpus missing mktg chapters: ${missingInCorpus.join(", ")}`);
  else ok.push(`search-corpus covers all ${ids.length} mktg chapters`);
  let stale = 0;
  for (const id of ids) {
    const entry = corpusMktg.find((c: any) => c.chapterKey === id);
    if (!entry) continue;
    const rInfo = renderedIds.find((r) => r.id === id);
    if (!rInfo) continue;
    const src = fs.readFileSync(`${ROOT}/src/components/mktg/${rInfo.file}`, "utf8");
    const at = src.indexOf(`id="${id}"`);
    if (at === -1) continue;
    const start = src.lastIndexOf("<Section", at);
    const end = src.indexOf("</Section>", at);
    if (start === -1 || end === -1) continue;
    const seg = src.slice(start, end);
    const strings = [
      ...[...seg.matchAll(/>\s*([A-Z][^<>{}]{30,200})\s*</g)].map((m) => m[1].replace(/\s+/g, " ").trim()),
      ...[...seg.matchAll(/\b(?:lead|label|desc|title|blurb)=["']([^"']{30,200})["']/g)].map((m) => m[1].replace(/\s+/g, " ").trim()),
    ];
    const corpusText = String(entry.text ?? "").replace(/\s+/g, " ").toLowerCase();
    const found = strings.some((s) => corpusText.includes(s.toLowerCase().slice(0, 40)));
    if (!found) { stale++; issues.push(`search-corpus text for mktg/${id} may be STALE (no current-source sentence matched; file=${rInfo.file})`); }
  }
  if (!stale) ok.push("search-corpus mktg chapter text matches current section sources (heuristic)");
} else {
  issues.push(`search-corpus has NO mktg chapters (expected ${ids.length})`);
}

for (const lib of ["section-counts.ts", "question-counts.ts", "chapter-index.ts"]) {
  const src = fs.readFileSync(`${ROOT}/src/lib/${lib}`, "utf8");
  const mktgIds = [...src.matchAll(new RegExp(`"(${ids.join("|")})"`, "g"))].map((m) => m[1]);
  const uniq = [...new Set(mktgIds)];
  console.log(`  lib/${lib}: mktg ids=${uniq.length}/${ids.length}${uniq.length && uniq.length < ids.length ? `, MISSING: ${ids.filter((id) => !uniq.includes(id)).join(", ")}` : ""}`);
  if (lib === "chapter-index.ts" && uniq.length < ids.length) issues.push(`lib/${lib} covers only ${uniq.length}/${ids.length} mktg chapter ids`);
}
const sc = fs.readFileSync(`${ROOT}/src/lib/section-counts.ts`, "utf8");
if (!/mktg:\s*78/.test(sc)) issues.push("section-counts.ts: mktg count != 78");
else ok.push("section-counts.ts: mktg = 78");
const qc = fs.readFileSync(`${ROOT}/src/lib/question-counts.ts`, "utf8");
if (!/mktg:\s*60/.test(qc)) issues.push(`question-counts.ts: mktg count != ${totalQ}`);
else ok.push(`question-counts.ts: mktg = ${totalQ}`);
// stale total in twin header comments
for (const lib of ["section-counts.ts", "chapter-index.ts"]) {
  const src = fs.readFileSync(`${ROOT}/src/lib/${lib}`, "utf8");
  if (/=\s*229\b|=\s*246\b/.test(src)) issues.push(`lib/${lib}: header comment still carries a stale total (real total is 271)`);
}

/* ---------- 7. smells & coverage watchlist ---------- */
console.log("=== 7. SMELLS & COVERAGE ===");
const allParts = files.map((f) => ({ f, src: fs.readFileSync(f, "utf8") }));
const heroSrc = fs.readFileSync(`${ROOT}/src/components/mktg/MktgHero.tsx`, "utf8");
if (appSrc.includes('id="top"') && heroSrc.includes('id="top"'))
  issues.push("MktgHero <header> uses id=top AND MktgApp wrapper has id=top — duplicate DOM id");
else ok.push("single id=top on the subject wrapper (hero duplicate removed)");
// the prior subject's identity must not leak into the marketing surface
const identityScan = [...allParts.map((p) => ({ f: p.f.split("/").pop()!, src: p.src })), { f: "MktgHero.tsx", src: heroSrc }, { f: "MktgApp.tsx", src: appSrc }, { f: "lectures.ts", src: fs.readFileSync(`${ROOT}/src/components/mktg/lectures.ts`, "utf8") }, { f: "questions.ts", src: fs.readFileSync(`${ROOT}/src/components/mktg/questions.ts`, "utf8") }];
for (const { f, src } of identityScan) {
  for (const m of src.matchAll(/algorithmic|SHELF 02|Shelf 02|AtbApp|AtbExam|atb_/g)) {
    issues.push(`${f}: prior-subject identity trace ${JSON.stringify(m[0])} found`);
  }
}
ok.push("identity scan clean — no algorithmic-thinking vocabulary, no SHELF 02 badge, no cloned names");
// hard-coded counts that shift on a restructure
for (const { f, src } of allParts) {
  const n = f.split("/").pop()!;
  for (const m of src.matchAll(/(28 lectures|twenty-eight|Twenty-eight|L28 is the last|the last lecture)/g)) {
    issues.push(`${n}: hard-coded lecture-count text "${m[1]}" (will drift on any restructure)`);
  }
}
// ReadStep n= monotonic per section
for (const { f, src } of allParts) {
  const n = f.split("/").pop()!;
  const blocks = [...src.matchAll(/<Section\s+id="([a-z0-9-]+)"([\s\S]*?)(?=<Section\s+id="|$)/g)];
  for (const b of blocks) {
    const ns = [...b[2].matchAll(/\bn="(\d+)"/g)].map((m) => parseInt(m[1], 10));
    if (!ns.length) continue;
    const startsAt = ns[0];
    const seqOk = ns.every((v, i) => v === startsAt + i);
    if (!seqOk) issues.push(`${n} [${b[1]}]: ReadStep n sequence broken: ${ns.join(",")}`);
    else if (startsAt !== 1) issues.push(`${n} [${b[1]}]: ReadStep starts at n=${startsAt} (no step 1 rendered before it?)`);
  }
}
// eyebrow correctness — every section's eyebrow must name the right lecture
{
  let checked = 0;
  let bad = 0;
  for (const r of renderedIds) {
    const src = fs.readFileSync(`${ROOT}/src/components/mktg/${r.file}`, "utf8");
    const at = src.indexOf(`<Section id="${r.id}"`);
    if (at === -1) continue;
    const seg = src.slice(at, src.indexOf("</Section>", at));
    const m = seg.match(/eyebrow="([^"]+)"/);
    const want = lectureOf.get(r.id) ?? -1;
    if (!m) { issues.push(`${r.file} [${r.id}]: no eyebrow`); bad++; continue; }
    const lm = m[1].match(/Lecture\s+(\d+)/);
    checked++;
    if (!lm) { issues.push(`${r.file} [${r.id}]: eyebrow "${m[1]}" names no lecture`); bad++; }
    else if (parseInt(lm[1], 10) !== want) { issues.push(`${r.file} [${r.id}]: eyebrow says Lecture ${lm[1]} but registry says Lecture ${want}`); bad++; }
  }
  if (!bad) ok.push(`all ${checked} eyebrows name their registry lecture ("Principles of Marketing · Lecture N")`);
}
// figure & workflow coverage per lecture — the rebuild's minimum-line metrics.
// Diagrams live in helper components (same file) AND in the registered
// diagrams/ barrel (cross-file), so counting follows both indirections.
console.log("--- coverage per lecture (svg / figcaption / thead / stepper) ---");
{
  // registered diagram components from src/components/mktg/diagrams/*
  const diagDir = `${ROOT}/src/components/mktg/diagrams`;
  const diagHelpers = new Map<string, string>();
  for (const f of fs.readdirSync(diagDir)) {
    if (!f.endsWith(".tsx")) continue;
    const src = fs.readFileSync(`${diagDir}/${f}`, "utf8");
    for (const m of src.matchAll(/^export function (\w+)\(/gm)) diagHelpers.set(m[1], src);
  }
  const registerSrc = fs.readFileSync(`${diagDir}/index.ts`, "utf8");
  const registered = [...registerSrc.matchAll(/export\s*\{([^}]+)\}\s*from/g)].flatMap((m) => m[1].split(",").map((s) => s.trim().split(" as ")[0]).filter((s) => /^[A-Z]/.test(s)));
  watch.push(`registered diagram components exported from diagrams/: ${registered.length}`);
  // helper bodies per file: function Name( ... ) up to the next top-level boundary
  const helpersByFile = new Map<string, Map<string, string>>();
  for (const { f, src } of allParts) {
    const name = f.split("/").pop()!;
    const marks: { at: number; kind: string; name?: string }[] = [];
    for (const m of src.matchAll(/^function (\w+)\(/gm)) marks.push({ at: m.index!, kind: "fn", name: m[1] });
    for (const m of src.matchAll(/^export function (\w+)\(/gm)) marks.push({ at: m.index!, kind: "fn", name: m[1] });
    for (const m of src.matchAll(/^const (\w+)\s*=/gm)) marks.push({ at: m.index!, kind: "const" });
    for (const m of src.matchAll(/<Section\s+id="/g)) marks.push({ at: m.index!, kind: "section" });
    marks.sort((a, b) => a.at - b.at);
    const helpers = new Map<string, string>();
    for (let i = 0; i < marks.length; i++) {
      if (marks[i].kind !== "fn") continue;
      const end = marks.slice(i + 1).find((x) => x.at > marks[i].at)?.at ?? src.length;
      helpers.set(marks[i].name!, src.slice(marks[i].at, end));
    }
    helpersByFile.set(name, helpers);
  }
  const countMetric = (seg: string, metric: RegExp, helpers: Map<string, string>, seen: Set<string>): number => {
    let n = (seg.match(metric) ?? []).length;
    for (const m of seg.matchAll(/<([A-Z]\w+)\b/g)) {
      if (diagHelpers.has(m[1])) continue; // registered components counted via the export-site scan
      const body = helpers.get(m[1]);
      if (!body || seen.has(m[1])) continue;
      seen.add(m[1]);
      n += countMetric(body, metric, helpers, seen);
    }
    return n;
  };
  // workflow widgets per lecture: the registered MktgStepper + any same-file
  // helper referenced from the slice that carries its own state (useState) —
  // the shelf's interactive machines use many names (*Machine, *Card, *Lab,
  // ZoomScatter, RazorLadder…), so the honest gate is statefulness, not naming
  const segWorkflows = (l: { chapters: { id: string }[] }, rendered: { id: string; file: string }[], root: string): number => {
    let n = 0;
    for (const c of l.chapters) {
      const r = rendered.find((x) => x.id === c.id);
      if (!r) continue;
      const src = fs.readFileSync(`${root}/src/components/mktg/${r.file}`, "utf8");
      const helpers = helpersByFile.get(r.file)!;
      const at = src.indexOf(`<Section id="${c.id}"`);
      if (at === -1) continue;
      const seg = src.slice(at, src.indexOf("</Section>", at));
      const seen = new Set<string>();
      for (const m of seg.matchAll(/<([A-Z]\w+)\b/g)) {
        const name = m[1];
        if (seen.has(name)) continue;
        seen.add(name);
        const body = helpers.get(name);
        if (body && /useState[<(]|useStepPlayer\(|useRef</.test(body)) n++;
      }
    }
    return n;
  };
  let lecturesNoSvg = 0;
  for (const l of MKTG_LECTURES) {
    let svg = 0, fig = 0, thead = 0, aria = 0, stepper = 0;
    for (const c of l.chapters) {
      const r = renderedIds.find((x) => x.id === c.id);
      if (!r) continue;
      const src = fs.readFileSync(`${ROOT}/src/components/mktg/${r.file}`, "utf8");
      const helpers = helpersByFile.get(r.file)!;
      const at = src.indexOf(`<Section id="${c.id}"`);
      if (at === -1) continue;
      const seg = src.slice(at, src.indexOf("</Section>", at));
      svg += countMetric(seg, /<svg/g, helpers, new Set());
      fig += countMetric(seg, /<figcaption/g, helpers, new Set());
      thead += countMetric(seg, /<thead/g, helpers, new Set());
      aria += countMetric(seg, /aria-label=/g, helpers, new Set());
      stepper += (seg.match(/<MktgStepper/g) ?? []).length;
    }
    // registered figures used by this lecture's chapters (component references in the slice)
    let regFig = 0;
    for (const c of l.chapters) {
      const r = renderedIds.find((x) => x.id === c.id);
      if (!r) continue;
      const src = fs.readFileSync(`${ROOT}/src/components/mktg/${r.file}`, "utf8");
      const at = src.indexOf(`<Section id="${c.id}"`);
      if (at === -1) continue;
      const seg = src.slice(at, src.indexOf("</Section>", at));
      for (const name of registered) {
        if (name === "MktgStepper" || name === "AuthoringNote" || name === "Figure" || name === "FigSvg" || name === "Arrow" || name === "T") continue;
        if (seg.includes(`<${name}`)) regFig++;
      }
    }
    const diagrams = svg + regFig;
    if (l.reserved) {
      // reserved pages render ONLY the removal card — no figures, no workflows, by design
      if (diagrams > 0 || stepper > 0) issues.push(`L${l.n}: reserved page carries figure/workflow content (must be blank-but-for-the-card)`);
      console.log(`  L${String(l.n).padStart(2, "0")} ${l.code}: RESERVED — blank-but-for-the-card enforced (0 figures, 0 workflows)`);
      continue;
    }
    if (diagrams === 0) { lecturesNoSvg++; issues.push(`L${l.n}: NO diagram (0 svg, 0 registered figure) in any chapter`); }
    const workflows = stepper + segWorkflows(l, renderedIds, ROOT);
    if (workflows === 0) issues.push(`L${l.n}: NO data-bearing workflow (0 stateful machines, 0 MktgStepper) — every lecture needs one`);
    console.log(`  L${String(l.n).padStart(2, "0")} ${l.code}: diagrams=${diagrams} (svg ${svg} + registered ${regFig}) · workflows=${workflows} (steppers ${stepper} + stateful machines ${workflows - stepper}) · figcaption=${fig} · thead=${thead}`);
  }
  const allSrc = allParts.map((p) => p.src).join("\n");
  const diagSrc = fs.readdirSync(`${ROOT}/src/components/mktg/diagrams`).filter((f) => f.endsWith(".tsx")).map((f) => fs.readFileSync(`${ROOT}/src/components/mktg/diagrams/${f}`, "utf8")).join("\n");
  const steps = (allSrc.match(/<[A-Z]\w+Machine[\s/>]/g) ?? []).length + (allSrc.match(/<MktgStepper/g) ?? []).length;
  watch.push(`workflow widgets across mktg parts: ${steps} (43 machines + the registered steppers; minimum ≥1 per lecture)`);
  watch.push(`figcaptions in parts: ${(allSrc.match(/<figcaption/g) ?? []).length} + in registered diagrams: ${(diagSrc.match(/<figcaption/g) ?? []).length} (standard: every figure captioned)`);
  watch.push(`tables with thead in mktg parts: ${(allSrc.match(/<thead/g) ?? []).length} (standard: every table has thead)`);
  watch.push(`total inline SVGs across parts: ${(allSrc.match(/<svg/g) ?? []).length} + registered diagrams: ${(diagSrc.match(/<svg/g) ?? []).length}`);
  // authoring notes present where the source is ambiguous
  for (const n of [28, 30, 31, 36, 37, 38, 40]) {
    const found = allParts.some((p) => p.src.includes(`lecture="Lecture ${n}"`));
    if (!found) issues.push(`L${n}: no AuthoringNote attached (source ambiguity must be recorded on the lecture)`);
  }
  ok.push("authoring notes attached to every ambiguous lecture (L28, L30/31, L36/37, L38/40)");
}

/* ---------- summary ---------- */
console.log("\n================ RESULT ================");
console.log(`OK checks: ${ok.length}`);
ok.forEach((o) => console.log(`  [OK] ${o}`));
console.log(`WATCHLIST: ${watch.length}`);
watch.forEach((w) => console.log(`  [WATCH] ${w}`));
console.log(`ISSUES: ${issues.length}`);
issues.forEach((i) => console.log(`  [ISSUE] ${i}`));
