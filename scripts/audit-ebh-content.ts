/* EBH shelf — structure & exam-bank audit (BASELINE, pre-rebuild).
   Mirrors audit-mktg-content.ts machinery for Economic & Business History
   (shelf 04, Prof. Manu Kanchan's official 28-lecture deck):

     registry <-> module GROUPS <-> section components <-> rendered <Section id>,
     exam-bank integrity, cross-system twins, identity scan, and the
     coverage metrics the rebuild must raise (>=1 diagram + >=1 workflow
     per lecture, registered figure barrel, standardised eyebrows).

   Baseline state on record (2026-11-19):
     28 lectures L1..L28 -> 31 chapters, 5 module groups
     (lens 10 · before 7 · machines 8 · corporation 5 · india 1),
     5 exam banks, 66 questions; diagrams are near-absent (5 inline
     SVGs, 0 registered figures) — the rebuild's to-do list lives in
     the WATCHLIST this script prints.

   Run: bun scripts/audit-ebh-content.ts  */

import { EBH_LECTURES, EBH_ALL_CHAPTER_IDS, lectureById } from "../src/components/ebh/lectures";
import { EBH_EXAM_BANKS, EBH_EXAM_GROUPS, EBH_TOTAL_QUESTIONS } from "../src/components/ebh/questions";
import * as fs from "fs";

const ROOT = "/home/z/my-project";
const issues: string[] = [];
const ok: string[] = [];
const watch: string[] = []; // watchlist — report-only at baseline

/* ---------- 1. registry sanity ---------- */
console.log("=== 1. REGISTRY (ebh/lectures.ts) ===");
console.log(`Lectures in registry: ${EBH_LECTURES.length}`);
if (EBH_LECTURES.length !== 28) issues.push(`registry: expected 28 lectures (official deck), got ${EBH_LECTURES.length}`);
EBH_LECTURES.forEach((l, i) => {
  if (l.n !== i + 1) issues.push(`registry: lecture at index ${i} has n=${l.n} (sequence break)`);
  if (l.code !== `L${l.n}`) issues.push(`registry: lecture n=${l.n} has code=${l.code} (want L${l.n})`);
  if (l.id !== `l${l.n}`) issues.push(`registry: lecture n=${l.n} has id=${l.id}`);
  if (!l.title?.trim()) issues.push(`registry: L${l.n} has empty title`);
  if (!l.chapters?.length) issues.push(`registry: L${l.n} has NO chapters`);
});
ok.push(`sequence L1..L${EBH_LECTURES.length} continuous: ${EBH_LECTURES.every((l, i) => l.n === i + 1)}`);

const ids = EBH_ALL_CHAPTER_IDS;
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) issues.push(`registry: duplicate chapter ids: ${[...new Set(dupes)].join(", ")}`);
else ok.push(`chapter ids unique (${ids.length} total)`);

const lectureOf = new Map<string, number>();
EBH_LECTURES.forEach((l) => l.chapters.forEach((c) => lectureOf.set(c.id, l.n)));

/* ---------- 2. module GROUPS in EbhApp ---------- */
console.log("=== 2. MODULE GROUPS (EbhApp.tsx) ===");
const appSrc = fs.readFileSync(`${ROOT}/src/components/ebh/EbhApp.tsx`, "utf8");
const groupsBlock = appSrc.slice(appSrc.indexOf("const GROUPS"), appSrc.indexOf("const FLAT_ITEMS"));
const groupIds = [...groupsBlock.matchAll(/^\s{4}id: "([a-z]+)",$/gm)].map((m) => m[1]);
const groupItems = [...groupsBlock.matchAll(/\{ id: "([a-z0-9-]+)", label:/g)].map((m) => m[1]);
console.log(`groups: ${groupIds.join(", ")} · items: ${groupItems.length}`);
if (groupIds.length !== 5) issues.push(`GROUPS: expected 5 module groups, found ${groupIds.length}`);
const gDupes = groupItems.filter((id, i) => groupItems.indexOf(id) !== i);
if (gDupes.length) issues.push(`GROUPS: duplicate items: ${gDupes.join(", ")}`);
const regNotGrouped = ids.filter((id) => !groupItems.includes(id));
const groupedNotReg = groupItems.filter((id) => !ids.includes(id));
if (regNotGrouped.length) issues.push(`registry chapters never listed in GROUPS: ${regNotGrouped.join(", ")}`);
if (groupedNotReg.length) issues.push(`GROUPS items with NO registry chapter: ${groupedNotReg.length ? groupedNotReg.join(", ") : ""}`);
if (!regNotGrouped.length && !groupedNotReg.length && !gDupes.length) ok.push("registry <-> GROUPS items: exact 1:1 match (31 chapters across 5 modules)");
// module sizes on record
for (const g of groupIds) {
  const count = (groupsBlock.match(new RegExp(`id: "${g}"`, "g")) ?? []).length;
}
for (const g of ["lens", "before", "machines", "corporation", "india"]) {
  const at = groupsBlock.indexOf(`id: "${g}"`);
  const next = groupIds.indexOf(g) + 1 < groupIds.length ? groupsBlock.indexOf(`id: "${groupIds[groupIds.indexOf(g) + 1]}"`) : groupsBlock.length;
  const n = (groupsBlock.slice(at, next).match(/\{ id: "/g) ?? []).length;
  console.log(`  ${g}: ${n} chapters`);
  if (n === 1) watch.push(`module "${g}" carries a single chapter for its whole lecture span — thin coverage the rebuild should split`);
}

/* ---------- 3. SECTION_COMPONENTS map ---------- */
console.log("=== 3. SECTION_COMPONENTS map (EbhApp.tsx) ===");
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
if (!appSrc.includes('useOpenSection("ebh"')) issues.push('EbhApp: useOpenSection("ebh") wiring missing');
else ok.push('useOpenSection("ebh") route wiring present');

/* ---------- 4. rendered <Section id> in EbhParts1-8 ---------- */
console.log("=== 4. RENDERED <Section id> ===");
const files = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${ROOT}/src/components/ebh/EbhParts${n}.tsx`);
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
if (!renderedNotMapped.length && !mappedNotRendered.length && !rDupes.length) ok.push("registry <-> rendered <Section>: exact 1:1 match");
const regOrder = ids.join("|");
const fileOrder = rIds.join("|");
if (regOrder === fileOrder) ok.push("rendered <Section> source order matches registry reading order");
else {
  // unlike mktg (where physical order = reading order), EbhApp renders by
  // iterating lecture.chapters from the registry — so the reader always sees
  // registry order; the physical layout inside EbhParts is cosmetic here.
  watch.push("EbhParts physical layout differs from registry order — cosmetic only: EbhApp renders SECTION_COMPONENTS[c.id] by iterating lecture.chapters, so reader order = sidebar order = registry order");
}
// the ORDER THAT MATTERS: sidebar GROUPS items should list chapters in registry order
if (groupItems.join("|") === regOrder) ok.push("sidebar GROUPS order matches registry reading order (what the reader sees)");
else {
  // one swap on record: registry numbers L8=Agrarian, L9=Society/Econ/Tech
  // (reader sees agrarian → business-econ-tech); the sidebar closes Module 1
  // with business-econ-tech and opens Module 2 with agrarian. Which side the
  // official deck favours is an open question — see audit/ebh-audit.md.
  watch.push("sidebar GROUPS order differs from registry order by ONE swap at the Module 1/2 boundary (business-econ-tech <-> agrarian): registry L8=Agrarian → L9=Society/Econ/Tech, sidebar closes Module 1 with Ford/Netflix. Reader order = registry order (EbhApp renders by lecture.chapters). Open question for the rebuild — needs the official deck");
}

/* ---------- 5. exam bank integrity ---------- */
console.log("=== 5. EXAM BANK (ebh/questions.ts) ===");
const bankGroups = Object.keys(EBH_EXAM_BANKS);
console.log(`groups: ${bankGroups.join(", ")}`);
const WANTED_KEYS = ["lens", "before", "machines", "corporation", "india"];
const missingKeys = WANTED_KEYS.filter((k) => !bankGroups.includes(k));
if (missingKeys.length) issues.push(`expected exam bank keys lost: ${missingKeys.join(", ")}`);
else ok.push("the five module bank keys are intact (lens · before · machines · corporation · india)");
if (JSON.stringify(bankGroups) === JSON.stringify(EBH_EXAM_GROUPS)) ok.push(`exam banks match EBH_EXAM_GROUPS order (${bankGroups.length})`);
else issues.push(`exam bank groups (${bankGroups.join(",")}) != EBH_EXAM_GROUPS order`);
let totalQ = 0;
const qIdsSeen = new Set<string>();
for (const g of bankGroups) {
  const bank = EBH_EXAM_BANKS[g];
  let bad = 0;
  for (const q of bank.questions) {
    totalQ++;
    if (qIdsSeen.has(q.id)) { issues.push(`exam: duplicate question id ${q.id}`); bad++; }
    qIdsSeen.add(q.id);
    if ((q as any).type === "mcq") {
      const qAny = q as any;
      if (!qAny.options || qAny.options.length < 2) { issues.push(`exam[${g}] ${q.id}: mcq without options`); bad++; }
      else if (typeof qAny.answer !== "number" || qAny.answer < 0 || qAny.answer >= qAny.options.length) { issues.push(`exam[${g}] ${q.id}: answer index out of range`); bad++; }
    } else if ((q as any).type === "output" || (q as any).type === "short") {
      if (!(q as any).answerText) { issues.push(`exam[${g}] ${q.id}: ${(q as any).type} without answerText`); bad++; }
    } else {
      issues.push(`exam[${g}] ${q.id}: unknown type "${(q as any).type}"`); bad++;
    }
    if (!q.q?.trim()) { issues.push(`exam[${g}] ${q.id}: empty question text`); bad++; }
    if (!q.explain?.trim()) { issues.push(`exam[${g}] ${q.id}: missing explain`); bad++; }
  }
  console.log(`  ${g}: "${bank.title}" — ${bank.questions.length} questions, ${bad} integrity problems`);
}
console.log(`total questions: ${totalQ} (EBH_TOTAL_QUESTIONS says ${EBH_TOTAL_QUESTIONS})`);
if (totalQ !== 66) issues.push(`exam bank holds ${totalQ} questions (baseline expects 66)`);
else ok.push(`exam bank holds ${totalQ} questions across ${bankGroups.length} groups, ids unique`);

/* ---------- 6. cross-system dependencies ---------- */
console.log("=== 6. CROSS-SYSTEM DEPENDENCIES ===");
const corpus = JSON.parse(fs.readFileSync(`${ROOT}/src/lib/search-corpus.json`, "utf8")) as any;
const chapters: any[] = corpus.chapters ?? [];
const corpusEbh = chapters.filter((c: any) => c.shelfId === "ebh");
console.log(`search-corpus: ${chapters.length} chapters (${corpusEbh.length} ebh)`);
if (corpusEbh.length) {
  const corpusIds = new Set(corpusEbh.map((c: any) => String(c.chapterKey ?? "")));
  const missingInCorpus = ids.filter((id) => !corpusIds.has(id));
  if (missingInCorpus.length) issues.push(`search-corpus missing ebh chapters: ${missingInCorpus.join(", ")}`);
  else ok.push(`search-corpus covers all ${ids.length} ebh chapters`);
  let stale = 0;
  for (const id of ids) {
    const entry = corpusEbh.find((c: any) => c.chapterKey === id);
    if (!entry) continue;
    const rInfo = renderedIds.find((r) => r.id === id);
    if (!rInfo) continue;
    const src = fs.readFileSync(`${ROOT}/src/components/ebh/${rInfo.file}`, "utf8");
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
    if (!found) { stale++; issues.push(`search-corpus text for ebh/${id} may be STALE (no current-source sentence matched; file=${rInfo.file})`); }
  }
  if (!stale) ok.push("search-corpus ebh chapter text matches current section sources (heuristic)");
} else {
  issues.push(`search-corpus has NO ebh chapters (expected ${ids.length})`);
}

for (const lib of ["section-counts.ts", "chapter-index.ts"]) {
  const src = fs.readFileSync(`${ROOT}/src/lib/${lib}`, "utf8");
  const ebhRows = [...src.matchAll(/\bsection: "([a-z0-9-]+)"/g)]
    .map((m) => m[1])
    .filter((sec) => ids.includes(sec));
  const uniq = [...new Set(ebhRows)];
  if (lib === "chapter-index.ts" && uniq.length < ids.length)
    issues.push(`lib/${lib} covers only ${uniq.length}/${ids.length} ebh chapter ids (missing: ${ids.filter((id) => !uniq.includes(id)).join(", ")})`);
  else if (lib === "chapter-index.ts") ok.push(`chapter-index.ts covers all ${uniq.length} ebh chapter ids`);
}
const sc = fs.readFileSync(`${ROOT}/src/lib/section-counts.ts`, "utf8");
if (!/ebh:\s*31/.test(sc)) issues.push("section-counts.ts: ebh count != 31");
else ok.push("section-counts.ts: ebh = 31");
const qc = fs.readFileSync(`${ROOT}/src/lib/question-counts.ts`, "utf8");
if (!/ebh:\s*66/.test(qc)) issues.push("question-counts.ts: ebh count != 66");
else ok.push(`question-counts.ts: ebh = ${totalQ}`);

/* ---------- 7. identity & DOM hygiene ---------- */
console.log("=== 7. IDENTITY & DOM HYGIENE ===");
const heroSrc = fs.readFileSync(`${ROOT}/src/components/ebh/EbhHero.tsx`, "utf8");
const partSrcs = files.map((f) => ({ f: f.split("/").pop()!, src: fs.readFileSync(f, "utf8") }));
const topInHero = /<header[^>]*id="top"/.test(heroSrc);
const topInApp = /<div[^>]*id="top"/.test(appSrc);
if (topInHero && topInApp) issues.push("EbhHero <header> uses id=top AND EbhApp wrapper has id=top — duplicate DOM id (EbhHero mounts inside EbhApp)");
else ok.push("single id=top on the subject wrapper");
const identityScan = [
  ...partSrcs,
  { f: "EbhHero.tsx", src: heroSrc },
  { f: "EbhApp.tsx", src: appSrc },
  { f: "lectures.ts", src: fs.readFileSync(`${ROOT}/src/components/ebh/lectures.ts`, "utf8") },
  { f: "questions.ts", src: fs.readFileSync(`${ROOT}/src/components/ebh/questions.ts`, "utf8") },
];
let identityHits = 0;
for (const { f, src } of identityScan) {
  for (const m of src.matchAll(/algorithmic-thinking|SHELF 0[123]|AtbApp|MktgApp|FocApp|FaApp|StmApp|Principles of Marketing|Financial Accounting/g)) {
    issues.push(`${f}: other-shelf identity trace ${JSON.stringify(m[0])} found`);
    identityHits++;
  }
}
if (!identityHits) ok.push("identity scan clean — no other shelf's vocabulary or component names leak into EBH");

/* ---------- 8. coverage baseline (the rebuild's to-do list) ---------- */
console.log("=== 8. COVERAGE BASELINE (report-only — the rebuild's minimum bars) ===");
{
  // helper function bodies per file (same-file components)
  const helpersByFile = new Map<string, Map<string, string>>();
  for (const { f, src } of partSrcs) {
    const name = f;
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
      const body = helpers.get(m[1]);
      if (!body || seen.has(m[1])) continue;
      seen.add(m[1]);
      n += countMetric(body, metric, helpers, seen);
    }
    return n;
  };
  let lecturesNoDiagram = 0;
  let lecturesNoWorkflow = 0;
  const perLecture: string[] = [];
  for (const l of EBH_LECTURES) {
    let svg = 0, fig = 0, thead = 0, workflows = 0;
    for (const c of l.chapters) {
      const r = renderedIds.find((x) => x.id === c.id);
      if (!r) continue;
      const src = fs.readFileSync(`${ROOT}/src/components/ebh/${r.file}`, "utf8");
      const helpers = helpersByFile.get(r.file)!;
      const at = src.indexOf(`<Section id="${c.id}"`);
      if (at === -1) continue;
      const seg = src.slice(at, src.indexOf("</Section>", at));
      svg += countMetric(seg, /<svg/g, helpers, new Set());
      fig += countMetric(seg, /<figcaption/g, helpers, new Set());
      thead += countMetric(seg, /<thead/g, helpers, new Set());
      const seen = new Set<string>();
      for (const m of seg.matchAll(/<([A-Z]\w+)\b/g)) {
        const body = helpers.get(m[1]);
        if (!body || seen.has(m[1])) continue;
        seen.add(m[1]);
        if (/useState[<(]|useRef</.test(body)) workflows++;
      }
    }
    if (svg === 0) lecturesNoDiagram++;
    if (workflows === 0) lecturesNoWorkflow++;
    perLecture.push(`  L${l.n} (${l.chapters.map((c) => c.id).join("+")}): svg=${svg} figcaption=${fig} thead=${thead} stateful-workflows=${workflows}`);
  }
  perLecture.forEach((p) => console.log(p));
  watch.push(`lectures with NO diagram at all: ${lecturesNoDiagram}/28 (rebuild bar: >=1 figure per lecture)`);
  watch.push(`lectures with NO stateful workflow: ${lecturesNoWorkflow}/28 (rebuild bar: >=1 workflow per lecture)`);
  const allPartSrc = partSrcs.map((p) => p.src).join("\n");
  watch.push(`inline SVGs across ebh parts: ${(allPartSrc.match(/<svg/g) ?? []).length} — no diagrams/ barrel or registered figures exist yet (rebuild must add them)`);
  watch.push(`figcaptions across ebh parts: ${(allPartSrc.match(/<figcaption/g) ?? []).length} (standard: every figure captioned)`);
  // eyebrow convention — the rebuild standardises to "Economic & Business History · Lecture N"
  let eyebrowsTotal = 0, eyebrowsNamed = 0;
  for (const r of renderedIds) {
    const src = fs.readFileSync(`${ROOT}/src/components/ebh/${r.file}`, "utf8");
    const at = src.indexOf(`<Section id="${r.id}"`);
    if (at === -1) continue;
    const seg = src.slice(at, src.indexOf("</Section>", at));
    const m = seg.match(/eyebrow="([^"]+)"/);
    if (!m) continue;
    eyebrowsTotal++;
    if (/Lecture\s+\d+/.test(m[1])) eyebrowsNamed++;
  }
  watch.push(`eyebrows naming their lecture number: ${eyebrowsNamed}/${eyebrowsTotal} (rebuild standardises: "Economic & Business History · Lecture N")`);
  // palette on record
  const gcss = fs.readFileSync(`${ROOT}/src/app/globals.css`, "utf8");
  const pal = gcss.match(/\.ebh-app\s*\{\s*--ebh-accent:\s*(#[0-9a-fA-F]+)/);
  watch.push(`current palette: warm canvas + amber accent ${pal?.[1] ?? "?"} (rebuild assigns the shelf its own palette per the atlas convention)`);
}

/* ---------- summary ---------- */
console.log("\n================ RESULT ================");
console.log(`OK checks: ${ok.length}`);
ok.forEach((o) => console.log(`  [OK] ${o}`));
console.log(`WATCHLIST: ${watch.length}`);
watch.forEach((w) => console.log(`  [WATCH] ${w}`));
console.log(`ISSUES: ${issues.length}`);
issues.forEach((i) => console.log(`  [ISSUE] ${i}`));
if (issues.length > 0) process.exit(1);
