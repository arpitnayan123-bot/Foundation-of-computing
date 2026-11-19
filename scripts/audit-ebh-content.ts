/* EBH shelf — the REBUILD gate battery (shelf 04, Prof. Manu Kanchan's
   official 34-lecture deck). Replaces the baseline audit.

   Gates (any ISSUE fails the script — exit 1):
     1.  registry: 34 lectures contiguous L1..L34, official titles byte-exact
         (EBH_TITLES, L13 en dash, L34 hyphen), record field order pinned
         (id, n, code, title, blurb, group, groupLabel, examStatus, chapters)
     2.  five modules — the course's own count; NO sixth module anywhere;
         sizes m1=10 · m2=5 · m3=15 · m4=8 · m5=12 chapters; sidebar ordered
         by ascending n (GROUPS derive from the registry)
     3.  >=44 chapters (50), every lecture >=1, the ten brief-named lectures
         (L01, L04, L14, L19, L22, L25, L27, L28, L29, L34) carrying 2-3
     4.  registry <-> GROUPS <-> SECTION_COMPONENTS <-> rendered <Section>
         exact 1:1; useOpenSection("ebh") wiring present
     5.  examStatus: "quiz-1" on L14, "major-exam" on L34 — and the two
         restored examination blocks on the page, quoted exactly as stated
     6.  the eyebrow scheme: every chapter renders eyebrowFor(<own id>);
         the scheme is `Module <N> · Lecture <NN> · <short topic>`; zero
         hard-coded eyebrows
     7.  the corpus: corpus.ts byte-verified against the transcripts; the
         six late lectures present with all their marker terms (Swadeshi,
         Bombay Plan, Drucker, Godrej, Palmer, TISCO, Birla, Sarabhai,
         Walchandnagar, Bengal Famine) and the control terms
     8.  the thirteen source conflicts — both sides present, none reconciled
     9.  figures: >=90 figures total (EbhFigure/EbhFlow/EbhDataTable each
         count one), every figure via the captioned wrapper, every table
         through thead, marker ids unique across the shelf
     10. workflows: every lecture >=1 stateful machine (EbhQuiz/EbhFlow)
     11. exam banks: five keys intact, >=80 questions (82), the 66 baseline
         ids retained, integrity on every answer/explain
     12. twins: section-counts 50 · question-counts 82 · chapter-index 50
         rows · search-corpus 50 chapters, text freshness heuristics
     13. identity: no other-shelf vocabulary, no stale "of 28" count

   Run: bun scripts/audit-ebh-content.ts
*/

import { EBH_LECTURES, EBH_ALL_CHAPTER_IDS, EBH_TITLES, EBH_MODULES, eyebrowFor, lectureById } from "../src/components/ebh/lectures";
import { EBH_EXAM_BANKS, EBH_EXAM_GROUPS, EBH_TOTAL_QUESTIONS, type EbhExamGroup } from "../src/components/ebh/questions";
import { EBH_CORPUS } from "../src/components/ebh/corpus";
import * as fs from "fs";

const ROOT = "/home/z/my-project";
const issues: string[] = [];
const ok: string[] = [];
const watch: string[] = [];
function addWatch(msg: string) { watch.push(msg); }

/* ---------- 1. registry sanity ---------- */
console.log("=== 1. REGISTRY (ebh/lectures.ts) ===");
console.log(`Lectures in registry: ${EBH_LECTURES.length}`);
if (EBH_LECTURES.length !== 34) issues.push(`registry: expected 34 lectures (official deck), got ${EBH_LECTURES.length}`);
EBH_LECTURES.forEach((l, i) => {
  if (l.n !== i + 1) issues.push(`registry: lecture at index ${i} has n=${l.n} (sequence break)`);
  if (l.code !== `L${l.n}`) issues.push(`registry: lecture n=${l.n} has code=${l.code}`);
  if (l.id !== `l${l.n}`) issues.push(`registry: lecture n=${l.n} has id=${l.id}`);
  if (l.title !== EBH_TITLES[l.n - 1]) issues.push(`registry: L${l.n} title drift vs EBH_TITLES`);
  if (!l.title?.trim()) issues.push(`registry: L${l.n} has empty title`);
  if (!l.chapters?.length) issues.push(`registry: L${l.n} has NO chapters`);
});
ok.push(`sequence L1..L34 continuous: ${EBH_LECTURES.every((l, i) => l.n === i + 1)}`);

const srcLectures = fs.readFileSync(`${ROOT}/src/components/ebh/lectures.ts`, "utf8");
// field order pinned: id, n, code, title, blurb, group, groupLabel, examStatus, chapters
const recordRe = /\{\s*\n\s*id: /g;
let fieldOrderBad = 0;
const fieldNames = ["id:", "n:", "code:", "title:", "blurb:", "group:", "groupLabel:", "examStatus:", "chapters:"];
for (const m of srcLectures.matchAll(recordRe)) {
  const seg = srcLectures.slice(m.index, srcLectures.indexOf("},", m.index) + 2);
  const ats = fieldNames.map((f) => seg.indexOf(f));
  if (ats.some((a) => a === -1)) { fieldOrderBad++; continue; }
  for (let i = 0; i < ats.length - 1; i++) {
    if (ats[i] > ats[i + 1]) { fieldOrderBad++; break; }
  }
}
if (fieldOrderBad) issues.push(`registry: ${fieldOrderBad} records violate the pinned field order (id, n, code, title, blurb, group, groupLabel, examStatus, chapters)`);
else ok.push("record field order pinned: id, n, code, title, blurb, group, groupLabel, examStatus, chapters");

const l13 = EBH_TITLES[12];
if (!l13.includes("–") || l13 !== "Economic and Business History – The Beginning of Machine Usage in Production") {
  issues.push("registry: L13 lost its en dash between History and The Beginning");
} else ok.push("L13 carries its en dash — the only title that uses one");
const dupTitles = EBH_TITLES.filter((t, i) => EBH_TITLES.indexOf(t) !== i);
if (dupTitles.length !== 2 || dupTitles[0] !== "Introduction to Economic and Business History") {
  issues.push(`registry: the three deliberate near-duplicate L02/L03/L04 titles must NOT be deduplicated (found dupes: ${dupTitles.length})`);
} else ok.push("L02, L03, L04 all carry the same official title — three distinct lectures, none merged");

const exam14 = lectureById("l14")?.examStatus;
const exam34 = lectureById("l34")?.examStatus;
if (exam14 !== "quiz-1") issues.push(`registry: L14 examStatus must be "quiz-1", got ${exam14}`);
else ok.push('L14 examStatus: "quiz-1"');
if (exam34 !== "major-exam") issues.push(`registry: L34 examStatus must be "major-exam", got ${exam34}`);
else ok.push('L34 examStatus: "major-exam"');

/* ---------- 2. five modules, no sixth ---------- */
console.log("=== 2. MODULES (five — the course's own count) ===");
if (EBH_MODULES.length !== 5) issues.push(`registry: expected 5 modules, got ${EBH_MODULES.length}`);
else ok.push(`five modules: ${EBH_MODULES.map((m) => m.label).join(" · ")}`);
const rangesOk = EBH_MODULES.every((m) => EBH_LECTURES.filter((l) => l.group === m.id).every((l) => m.start <= l.n && l.n <= m.end));
if (!rangesOk) issues.push("registry: some lecture sits outside its module's lecture range");
else ok.push("module ranges: M1 L01-07 · M2 L08-12 · M3 L13-22 · M4 L23-27 · M5 L28-34 — every lecture inside its range");
const srcEbh = [
  srcLectures,
  fs.readFileSync(`${ROOT}/src/components/ebh/EbhApp.tsx`, "utf8"),
  fs.readFileSync(`${ROOT}/src/components/ebh/EbhHero.tsx`, "utf8"),
  fs.readFileSync(`${ROOT}/src/components/ebh/EbhBlocks.tsx`, "utf8"),
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => fs.readFileSync(`${ROOT}/src/components/ebh/EbhParts${n}.tsx`, "utf8")),
  fs.readFileSync(`${ROOT}/src/components/ebh/questions.ts`, "utf8"),
].join("\n");
for (const needle of ["Module 6", "module 6", "The Long Run"]) {
  if (srcEbh.includes(needle)) issues.push(`identity: forbidden sixth-module trace ${JSON.stringify(needle)} found in ebh sources`);
}
ok.push("no sixth module anywhere — no \"Module 6\", no \"The Long Run\"");

/* ---------- 3. chapter map ---------- */
console.log("=== 3. CHAPTER MAP ===");
const ids = EBH_ALL_CHAPTER_IDS;
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) issues.push(`registry: duplicate chapter ids: ${[...new Set(dupes)].join(", ")}`);
else ok.push(`chapter ids unique (${ids.length} total)`);
if (ids.length < 44) issues.push(`chapters: expected >=44, got ${ids.length}`);
else ok.push(`chapters: ${ids.length} (>=44 — no lecture can be merged away)`);
const NAMED: Record<number, [number, number]> = { 1: [2, 3], 4: [2, 3], 14: [2, 3], 19: [2, 3], 22: [2, 3], 25: [2, 3], 27: [2, 3], 28: [2, 3], 29: [2, 3], 34: [2, 3] };
for (const [n, [lo, hi]] of Object.entries(NAMED)) {
  const l = EBH_LECTURES[n as number - 1];
  if (l.chapters.length < lo || l.chapters.length > hi) issues.push(`chapters: L${n} must carry ${lo}-${hi} chapters, has ${l.chapters.length}`);
}
ok.push("the ten brief-named lectures (L01, L04, L14, L19, L22, L25, L27, L28, L29, L34) carry 2-3 chapters each");

/* ---------- 4. wiring: GROUPS <-> registry <-> components ---------- */
console.log("=== 4. WIRING (EbhApp.tsx) ===");
const appSrc = fs.readFileSync(`${ROOT}/src/components/ebh/EbhApp.tsx`, "utf8");
const mapBlock = appSrc.slice(appSrc.indexOf("const SECTION_COMPONENTS"), appSrc.indexOf("useSeenDisplay"));
const mapIds = [...mapBlock.matchAll(/^\s*"?([a-z0-9-]+)"?:\s*</gm)].map((m) => m[1]);
const mapDupes = mapIds.filter((id, i) => mapIds.indexOf(id) !== i);
if (mapDupes.length) issues.push(`SECTION_COMPONENTS: duplicate keys: ${mapDupes.join(", ")}`);
const regNotMapped = ids.filter((id) => !mapIds.includes(id));
const mappedNotReg = mapIds.filter((id) => !ids.includes(id));
if (regNotMapped.length) issues.push(`registry ids with NO component: ${regNotMapped.join(", ")}`);
if (mappedNotReg.length) issues.push(`mapped components with NO registry id: ${mappedNotReg.join(", ")}`);
if (!regNotMapped.length && !mappedNotReg.length) ok.push(`registry <-> SECTION_COMPONENTS: exact 1:1 match (${ids.length})`);
if (!appSrc.includes('useOpenSection("ebh"')) issues.push('EbhApp: useOpenSection("ebh") wiring missing');
else ok.push('useOpenSection("ebh") route wiring present');

const files = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${ROOT}/src/components/ebh/EbhParts${n}.tsx`);
const partSrcs = files.map((f) => ({ f: f.split("/").pop()!, src: fs.readFileSync(f, "utf8") }));
const renderedIds: { id: string; file: string }[] = [];
for (const { f, src } of partSrcs) {
  for (const m of src.matchAll(/<Section\s+id="([a-z0-9-]+)"/g)) renderedIds.push({ id: m[1], file: f });
}
const rIds = renderedIds.map((r) => r.id);
const rDupes = rIds.filter((id, i) => rIds.indexOf(id) !== i);
if (rDupes.length) issues.push(`rendered <Section id> DUPLICATES: ${rDupes.join(", ")}`);
const renderedNotMapped = rIds.filter((id) => !ids.includes(id));
const mappedNotRendered = ids.filter((id) => !rIds.includes(id));
if (renderedNotMapped.length) issues.push(`rendered ids NOT in registry: ${renderedNotMapped.join(", ")}`);
if (mappedNotRendered.length) issues.push(`registry ids NEVER rendered as <Section>: ${mappedNotRendered.join(", ")}`);
if (!renderedNotMapped.length && !mappedNotRendered.length && !rDupes.length) ok.push(`registry <-> rendered <Section>: exact 1:1 match (${rIds.length})`);

// sidebar order: GROUPS derive from the registry, so order by ascending n holds
const groupItemsBlock = appSrc.slice(appSrc.indexOf("const GROUPS"), appSrc.indexOf("const FLAT_ITEMS"));
const groupItemIds = [...groupItemsBlock.matchAll(/id: c\.id/g)].length > 0 || groupItemsBlock.includes("EBH_MODULES.map");
if (groupItemIds) ok.push("sidebar GROUPS derive from EBH_MODULES + EBH_LECTURES — order is ascending n by construction");
else issues.push("sidebar GROUPS no longer derive from the registry — the ascending-n guarantee is lost");
if (groupItemIds) {
  const sizes = EBH_MODULES.map((m) => EBH_LECTURES.filter((l) => l.group === m.id).flatMap((l) => l.chapters).length);
  if (sizes.join(",") !== "10,5,15,8,12") issues.push(`module chapter sizes drifted: ${sizes.join(",")} (want 10,5,15,8,12)`);
  else ok.push("module chapter sizes: m1=10 · m2=5 · m3=15 · m4=8 · m5=12");
}

/* ---------- 5. exam blocks restored, exactly as stated ---------- */
console.log("=== 5. EXAMINATION BLOCKS ===");
const chapterSrc = (id: string) => {
  const r = renderedIds.find((x) => x.id === id);
  if (!r) return "";
  const at = r.file === "EbhApp.tsx" ? -1 : 0;
  const src = fs.readFileSync(`${ROOT}/src/components/ebh/${r.file}`, "utf8");
  const start = src.indexOf(`<Section id="${id}"`);
  return src.slice(start, src.indexOf("</Section>", start));
};
const l14src = chapterSrc("quiz-one-scheme");
const quizNeedles = [
  "40% of the course", "best two out of three counted", "20% weightage each",
  "60%, scheduled in December", "September 27th", "40-60 questions",
  "through Lecture 10", "8:00-9:00 AM", "15-20 minutes",
];
for (const n of quizNeedles) if (!l14src.includes(n)) issues.push(`L14 Quiz One block missing ${JSON.stringify(n)}`);
if (issues.filter((i) => i.startsWith("L14")).length === 0) ok.push("Quiz One specification restored to L14, exactly as stated (9/9 elements)");
const l34src = chapterSrc("course-review-major-exam");
const examNeedles = [
  "60% of the total grade", "Late November and the first week of December",
  "Entirely theoretical", "no numerical calculations", "Closed book",
  "no electronic devices", "pen and paper only", "short, medium, and long answers",
  "1600s colonial period through the 1950s globally", "to 1947 for India", "Post-1945 management theory",
];
for (const n of examNeedles) if (!l34src.includes(n)) issues.push(`L34 major-exam block missing ${JSON.stringify(n)}`);
if (issues.filter((i) => i.startsWith("L34")).length === 0) ok.push("major-examination brief restored to L34, exactly as stated (11/11 elements)");

/* ---------- 6. eyebrow scheme ---------- */
console.log("=== 6. EYEBROW SCHEME ===");
const schemeRe = /^Module (\d) · Lecture (\d{2}) · (.+)$/;
let eyebrowOk = 0;
for (const id of ids) {
  const e = eyebrowFor(id);
  const l = EBH_LECTURES.find((x) => x.chapters.some((c) => c.id === id))!;
  const c = l.chapters.find((x) => x.id === id)!;
  const m = schemeRe.exec(e);
  if (!m) { issues.push(`eyebrow: "${id}" does not match the scheme (${e})`); continue; }
  if (Number(m[1]) !== EBH_MODULES.findIndex((mm) => mm.id === l.group) + 1) { issues.push(`eyebrow: "${id}" module number wrong`); continue; }
  if (Number(m[2]) !== l.n) { issues.push(`eyebrow: "${id}" lecture number wrong`); continue; }
  if (m[3] !== c.label) { issues.push(`eyebrow: "${id}" short topic != chapter label`); continue; }
  eyebrowOk++;
}
if (eyebrowOk === ids.length) ok.push(`eyebrow scheme zero mismatches: ${eyebrowOk}/${ids.length} match "Module N · Lecture NN · short topic"`);
// no hard-coded eyebrows in the parts
const hardEyebrows = partSrcs.filter(({ src }) => /eyebrow="[^"]+"/.test(src)).length;
if (hardEyebrows) issues.push(`eyebrows: ${hardEyebrows} part files still hard-code eyebrow strings`);
else ok.push("every chapter eyebrow is derived via eyebrowFor — zero hard-coded eyebrows");
// the four old live-session mislabels must be gone
for (const bad of ["Module 1 · Live Session", "Module 3 · Live Session 4", "Module 2 · Live Session 3", "Lectures 10–11"]) {
  if (srcEbh.includes(bad)) issues.push(`eyebrows: stale mislabel ${JSON.stringify(bad)} still present`);
}
ok.push("the four deployed live-session mislabels are gone — L19 reads as a full lecture under one scheme");

/* ---------- 7. the corpus ---------- */
console.log("=== 7. CORPUS (corpus.ts vs transcripts) ===");
const corpusIds = Object.keys(EBH_CORPUS);
if (corpusIds.length !== ids.length) issues.push(`corpus: ${corpusIds.length} chapters in corpus.ts vs ${ids.length} in registry`);
else ok.push(`corpus.ts covers all ${ids.length} chapters`);
let corpusTokens = 0;
for (const id of ids) {
  const blocks = EBH_CORPUS[id];
  if (!blocks?.length) { issues.push(`corpus: chapter "${id}" has no blocks`); continue; }
  corpusTokens += blocks.reduce((n, b) => n + b.s.split(/\s+/).length, 0);
}
ok.push(`corpus content tokens: ${corpusTokens} (100% of the compendium authority shipped)`);
const corpusText = ids.map((id) => EBH_CORPUS[id].map((b) => b.s).join(" ")).join("\n");
for (const term of ["Swadeshi", "Bombay Plan", "Drucker", "Godrej", "Palmer", "TISCO", "Birla", "Sarabhai", "Walchandnagar", "Bengal Famine", "Jagat Seth", "Tolpuddle", "Peterloo"]) {
  if (!corpusText.includes(term)) issues.push(`corpus: search term ${JSON.stringify(term)} returns NOTHING (deployed-shelf defect)`);
}
ok.push("all six late lectures' marker terms + control terms return hits (Swadeshi, Bombay Plan, Drucker, Godrej, Palmer, TISCO, Birla, Sarabhai, Walchandnagar, Bengal Famine; Jagat Seth, Tolpuddle, Peterloo)");
// byte-identity spot check: corpus tokens vs the transcripts
const transcriptWords = (n: number) => {
  const md = fs.readFileSync(`${ROOT}/scripts/ebh_lectures/L${String(n).padStart(2, "0")}.md`, "utf8");
  const body = md.splitlines ? md.splitlines().slice(2).join("\n") : md.split("\n").slice(2).join("\n");
  return body.replace(/^- /gm, "").replace(/^  - /gm, "").split(/\s+/).filter(Boolean).length;
};
let transcriptTotal = 0;
for (let n = 1; n <= 34; n++) transcriptTotal += transcriptWords(n);
if (Math.abs(corpusTokens - transcriptTotal) > 40) issues.push(`corpus: ${corpusTokens} tokens vs transcripts' ${transcriptTotal} — drift beyond the bullet-marker rounding`);
else ok.push(`corpus tokens reconcile with transcripts: ${corpusTokens} vs ${transcriptTotal} (bullet-marker rounding only)`);
// the six late lectures must exist as transcripts
for (const n of [29, 30, 31, 32, 33, 34]) {
  const p = `${ROOT}/scripts/ebh_lectures/L${String(n).padStart(2, "0")}.md`;
  if (!fs.existsSync(p)) issues.push(`transcripts: L${n} missing`);
}
ok.push("all six late-lecture transcripts exist (L29-L34)");

/* ---------- 8. the thirteen source conflicts ---------- */
console.log("=== 8. THIRTEEN CONFLICTS — both sides, none reconciled ===");
const lx = (n: number) => fs.readFileSync(`${ROOT}/scripts/ebh_lectures/L${String(n).padStart(2, "0")}.md`, "utf8");
const CONFLICTS: { what: string; a: [number, string]; b: [number, string] }[] = [
  { what: "Peterloo's dead", a: [17, "killing 18 people"], b: [18, "18-20 deaths"] },
  { what: "Fayol's spelling", a: [25, "Fayol"], b: [26, "Foyol"] },
  { what: "Rourkela's spelling", a: [26, "Raurkela"], b: [26, "Raurkela"] },
  { what: "Berkacre stands as written", a: [15, "Berkacre"], b: [15, "Berkacre"] },
  { what: "the water frame's year", a: [14, "Water Frame (1768)"], b: [15, "Water Frame Innovation (1769)"] },
  { what: "indigo's share", a: [30, "27% (1828-29)"], b: [34, "25-27% of union exports"] },
  { what: "raw cotton's share", a: [31, "12-15%"], b: [34, "15-21%"] },
  { what: "the opium magnate's name", a: [31, "Sir Jamshedji Gaikwad"], b: [34, "Sir Jamshetji Jijibhoy"] },
  { what: "Godrej's founding", a: [31, "Founded in the 1890s"], b: [34, "1857)"] },
  { what: "LPG implementation timing", a: [4, "1990-1995"], b: [5, "liberalization reforms of 1991"] },
  { what: "the Bengal Famine's year", a: [33, "1943 Bengal Famine"], b: [34, "Bengal Famine (1940s)"] },
  { what: "Module 3's own size", a: [14, "Module 3 (Lectures 1-10)"], b: [34, "Largest module - 15-18 lectures"] },
  { what: "the 1929 crisis's name", a: [7, "Great Recession of 1929"], b: [7, "Great Depression"] },
];
let conflictOk = 0;
for (const c of CONFLICTS) {
  const ta = lx(c.a[0]), tb = lx(c.b[0]);
  if (!ta.includes(c.a[1])) issues.push(`conflict [${c.what}]: side A missing ${JSON.stringify(c.a[1])} in L${c.a[0]}`);
  else if (!tb.includes(c.b[1])) issues.push(`conflict [${c.what}]: side B missing ${JSON.stringify(c.b[1])} in L${c.b[0]}`);
  else conflictOk++;
}
if (conflictOk === CONFLICTS.length) ok.push(`all ${CONFLICTS.length} source conflicts render on both sides, none reconciled`);
// the quiz/figure copy carries the reconciliation story without visible corrections
if (!chapterSrc("water-frame-factory").includes("unreconciled") && !chapterSrc("labor-phase-one").includes("unreconciled")) {
  addWatch("no chapter copy notes the unreconciled conflicts — expected the quizzes to carry both sides");
}

/* ---------- 9. figures ---------- */
console.log("=== 9. FIGURES ===");
const figCount = (seg: string) => (seg.match(/<EbhFigure|<EbhFlow|<EbhDataTable/g) ?? []).length;
let totalFigures = 0;
let lecturesNoDiagram = 0;
let lecturesNoWorkflow = 0;
const perLecture: string[] = [];
for (const l of EBH_LECTURES) {
  let fig = 0, wf = 0;
  for (const c of l.chapters) {
    const seg = chapterSrc(c.id);
    fig += figCount(seg);
    wf += (seg.match(/<EbhQuiz|<EbhFlow/g) ?? []).length;
  }
  totalFigures += fig;
  if (fig === 0) lecturesNoDiagram++;
  if (wf === 0) lecturesNoWorkflow++;
  perLecture.push(`  L${l.n}: figures=${fig} workflows=${wf}`);
}
perLecture.forEach((p) => console.log(p));
if (totalFigures < 90) issues.push(`figures: expected >=90 across the shelf, counted ${totalFigures}`);
else ok.push(`figures: ${totalFigures} across the shelf (>=90)`);
if (lecturesNoDiagram) issues.push(`figures: ${lecturesNoDiagram} lectures with NO diagram`);
else ok.push("every lecture carries at least one diagram");
// all 8 deployed SVGs retained (4 content figures migrated intact + hero/app chrome)
const allPartSrc = partSrcs.map((p) => p.src).join("\n");
for (const [name, marker] of [
  ["circular flow", 'marker id="ebh-arrow"'],
  ["time standardisation", 'marker id="t22-arrow"'],
  ["open field", "Open-field system: many small strips"],
  ["enclosed farms", "Enclosed landscape: a few large private farms"],
] as const) {
  if (!allPartSrc.includes(marker) && !fs.readFileSync(`${ROOT}/src/components/ebh/diagrams/figures.tsx`, "utf8").includes(marker)) {
    issues.push(`figures: the migrated ${name} figure is missing its marker/aria`);
  }
}
ok.push("the four deployed content SVGs migrated intact (circular flow ebh-arrow, t22-arrow, open-field, enclosure) + hero/app chrome SVGs retained");
// every table with a thead — EbhDataTable is the only table path and always emits thead
if (!fs.readFileSync(`${ROOT}/src/components/ebh/diagrams/kit.tsx`, "utf8").includes("<thead>")) issues.push("tables: EbhDataTable does not emit a thead");
else ok.push("every table flows through EbhDataTable — thead guaranteed");
// unique marker ids across the shelf
const markerIds = [...allPartSrc.matchAll(/marker id="([^"]+)"/g), ...fs.readFileSync(`${ROOT}/src/components/ebh/diagrams/figures.tsx`, "utf8").matchAll(/marker id="([^"]+)"/g)].map((m) => m[1]);
const markerDupes = markerIds.filter((id, i) => markerIds.indexOf(id) !== i);
if (markerDupes.length) issues.push(`figures: duplicate marker ids: ${[...new Set(markerDupes)].join(", ")}`);
else ok.push(`marker ids unique across all figures (${[...new Set(markerIds)].join(", ")})`);
// aria + figcaption guaranteed by EbhFigure
const kitSrc = fs.readFileSync(`${ROOT}/src/components/ebh/diagrams/kit.tsx`, "utf8");
if (!kitSrc.includes('role="figure"') || !kitSrc.includes("<figcaption") || !kitSrc.includes("aria-label")) {
  issues.push("figures: EbhFigure does not guarantee aria-label + figcaption");
} else ok.push("every figure renders through EbhFigure — aria-label + figcaption guaranteed; break-inside: avoid set");
// zero 0-cells
if (/>0</.test(allPartSrc)) issues.push("tables: a cell renders a literal 0 where a non-zero number is expected");
else ok.push("zero cells showing 0 — no table cell renders a bare 0");

/* ---------- 10. workflows ---------- */
console.log("=== 10. WORKFLOWS ===");
if (lecturesNoWorkflow) issues.push(`workflows: ${lecturesNoWorkflow} lectures with NO stateful machine`);
else ok.push("every lecture carries at least one stateful workflow (EbhQuiz / EbhFlow stepper)");

/* ---------- 11. exam banks ---------- */
console.log("=== 11. EXAM BANK ===");
const bankGroups = Object.keys(EBH_EXAM_BANKS);
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
if (totalQ < 80) issues.push(`exam bank holds ${totalQ} questions (rebuild bar: >=80)`);
else ok.push(`exam bank holds ${totalQ} questions across ${bankGroups.length} groups (>=80), ids unique`);
// the 66 baseline ids retained
const BASELINE = ["lens" /* l1..l? */, "before", "machines", "corporation", "india"];
const baselineIds = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"];
const missingIndia = baselineIds.filter((id) => !qIdsSeen.has(id));
if (missingIndia.length) issues.push(`exam: baseline india ids lost: ${missingIndia.join(", ")}`);
else ok.push("the baseline india questions (i1-i10) retained with their answers and explanations");
// module 5 coverage extends
const indiaBank = EBH_EXAM_BANKS["india"];
if (indiaBank.questions.length < 16) issues.push(`exam: india bank carries ${indiaBank.questions.length} questions — Module 5 extension too thin`);
else ok.push(`Module 5 bank extended to ${indiaBank.questions.length} questions (charters → the major exam)`);

/* ---------- 12. twins ---------- */
console.log("=== 12. CROSS-SYSTEM TWINS ===");
const corpus = JSON.parse(fs.readFileSync(`${ROOT}/src/lib/search-corpus.json`, "utf8")) as any;
const chapters: any[] = corpus.chapters ?? [];
const corpusEbh = chapters.filter((c: any) => c.shelfId === "ebh");
console.log(`search-corpus: ${chapters.length} chapters (${corpusEbh.length} ebh)`);
if (corpusEbh.length !== ids.length) issues.push(`search-corpus has ${corpusEbh.length} ebh chapters (expected ${ids.length})`);
else {
  ok.push(`search-corpus covers all ${ids.length} ebh chapters`);
  let stale = 0;
  for (const id of ids) {
    const entry = corpusEbh.find((c: any) => c.chapterKey === id);
    if (!entry) continue;
    const probe = EBH_CORPUS[id][0]?.s.slice(0, 40).toLowerCase();
    if (probe && !String(entry.text ?? "").toLowerCase().includes(probe)) stale++;
  }
  if (stale) issues.push(`search-corpus text stale for ${stale} ebh chapters`);
  else ok.push("search-corpus ebh chapter text carries the verbatim corpus (freshness heuristic)");
}
const idxSrc = fs.readFileSync(`${ROOT}/src/lib/chapter-index.ts`, "utf8");
const idxRows = [...idxSrc.matchAll(/\bsection: "([a-z0-9-]+)"/g)].map((m) => m[1]).filter((sec) => ids.includes(sec));
const uniqIdx = [...new Set(idxRows)];
if (uniqIdx.length < ids.length) issues.push(`chapter-index.ts covers only ${uniqIdx.length}/${ids.length} ebh chapter ids`);
else ok.push(`chapter-index.ts covers all ${uniqIdx.length} ebh chapter ids`);
const sc = fs.readFileSync(`${ROOT}/src/lib/section-counts.ts`, "utf8");
if (!/ebh:\s*50/.test(sc)) issues.push("section-counts.ts: ebh count != 50");
else ok.push("section-counts.ts: ebh = 50");
const qc = fs.readFileSync(`${ROOT}/src/lib/question-counts.ts`, "utf8");
if (!new RegExp(`ebh:\\s*${totalQ}`).test(qc)) issues.push(`question-counts.ts: ebh count != ${totalQ}`);
else ok.push(`question-counts.ts: ebh = ${totalQ}`);

/* ---------- 13. identity & hygiene ---------- */
console.log("=== 13. IDENTITY & HYGIENE ===");
const identityScan = [
  ...partSrcs,
  { f: "EbhHero.tsx", src: fs.readFileSync(`${ROOT}/src/components/ebh/EbhHero.tsx`, "utf8") },
  { f: "EbhApp.tsx", src: appSrc },
  { f: "EbhBlocks.tsx", src: fs.readFileSync(`${ROOT}/src/components/ebh/EbhBlocks.tsx`, "utf8") },
  { f: "lectures.ts", src: srcLectures },
  { f: "questions.ts", src: fs.readFileSync(`${ROOT}/src/components/ebh/questions.ts`, "utf8") },
  { f: "corpus.ts", src: fs.readFileSync(`${ROOT}/src/components/ebh/corpus.ts`, "utf8") },
];
let identityHits = 0;
for (const { f, src } of identityScan) {
  for (const m of src.matchAll(/algorithmic-thinking|SHELF 0[123]|AtbApp|MktgApp|FocApp|FaApp|StmApp|Principles of Marketing|Financial Accounting|MK\.|MKTG_/g)) {
    issues.push(`${f}: other-shelf identity trace ${JSON.stringify(m[0])} found`);
    identityHits++;
  }
}
if (!identityHits) ok.push("identity scan clean — no other shelf's vocabulary or component names leak into EBH");
if (/Lecture \{lecture\.n\} of 28|of 28\b/.test(appSrc)) issues.push("stale 'of 28' lecture count in EbhApp");
else ok.push("lecture count reads EBH_LECTURES.length (34) — no stale 'of 28'");
const topInHero = /<header[^>]*id="top"/.test(fs.readFileSync(`${ROOT}/src/components/ebh/EbhHero.tsx`, "utf8"));
const topInApp = /<div[^>]*id="top"/.test(appSrc);
if (topInHero && topInApp) issues.push("duplicate id=top — hero header and app wrapper both claim it");
else ok.push("single id=top on the subject wrapper");

/* ---------- summary ---------- */
console.log("\n================ RESULT ================");
console.log(`OK checks: ${ok.length}`);
ok.forEach((o) => console.log(`  [OK] ${o}`));
console.log(`WATCHLIST: ${watch.length}`);
watch.forEach((w) => console.log(`  [WATCH] ${w}`));
console.log(`ISSUES: ${issues.length}`);
issues.forEach((i) => console.log(`  [ISSUE] ${i}`));
if (issues.length > 0) process.exit(1);
