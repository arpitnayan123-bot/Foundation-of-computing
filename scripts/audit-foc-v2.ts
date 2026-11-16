/* FoC shelf — structure & exam-bank audit (v2, z-session).
   Cross-checks every subsystem that hard-codes FoC content:
   registry <-> nav groups <-> section components <-> rendered <Section id>
   plus exam-bank integrity and cross-file dependencies.        */

import { FOC_LECTURES, FOC_ALL_CHAPTER_IDS } from "../src/components/foc/lectures";
import { EXAM_BANKS, EXAM_GROUPS, TOTAL_QUESTIONS } from "../src/components/notes/questions";
import * as fs from "fs";

const ROOT = "/home/z/my-project";
const issues: string[] = [];
const ok: string[] = [];

/* ---------- 1. registry sanity ---------- */
console.log("=== 1. REGISTRY (foc/lectures.ts) ===");
console.log(`Lectures in registry: ${FOC_LECTURES.length}`);
FOC_LECTURES.forEach((l, i) => {
  if (l.n !== i + 1) issues.push(`registry: lecture at index ${i} has n=${l.n} (sequence break)`);
  if (l.code !== `L${l.n}`) issues.push(`registry: lecture n=${l.n} has code=${l.code}`);
  if (!l.title?.trim()) issues.push(`registry: L${l.n} has empty title`);
  if (!l.chapters?.length) issues.push(`registry: L${l.n} has NO chapters`);
});
ok.push(`sequence L1..L${FOC_LECTURES.length} continuous: ${FOC_LECTURES.every((l, i) => l.n === i + 1)}`);

const ids = FOC_ALL_CHAPTER_IDS;
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) issues.push(`registry: duplicate chapter ids: ${[...new Set(dupes)].join(", ")}`);
else ok.push(`chapter ids unique (${ids.length} total)`);

/* ---------- 2. nav GROUPS in FocApp.tsx ---------- */
console.log("=== 2. NAV GROUPS (notes/FocApp.tsx) ===");
const focAppSrc = fs.readFileSync(`${ROOT}/src/components/notes/FocApp.tsx`, "utf8");
const groupsBlock = focAppSrc.slice(focAppSrc.indexOf("const GROUPS"), focAppSrc.indexOf("const FLAT_ITEMS"));
const navIds = [...groupsBlock.matchAll(/\{ id: "([a-z0-9-]+)", label:/g)].map((m) => m[1]);
console.log(`nav items: ${navIds.length}`);
const navDupes = navIds.filter((id, i) => navIds.indexOf(id) !== i);
if (navDupes.length) issues.push(`nav: duplicate ids: ${navDupes.join(", ")}`);
const inNavNotRegistry = navIds.filter((id) => !ids.includes(id));
const inRegistryNotNav = ids.filter((id) => !navIds.includes(id));
if (inNavNotRegistry.length) issues.push(`nav ids NOT in registry: ${inNavNotRegistry.join(", ")}`);
if (inRegistryNotNav.length) issues.push(`registry ids NOT in nav (unreachable via top bar): ${inRegistryNotNav.join(", ")}`);
if (!inNavNotRegistry.length && !inRegistryNotNav.length) ok.push("nav <-> registry: exact 1:1 match");

/* ---------- 3. SECTION_COMPONENTS map ---------- */
console.log("=== 3. SECTION_COMPONENTS map ===");
const mapBlock = focAppSrc.slice(focAppSrc.indexOf("const SECTION_COMPONENTS"), focAppSrc.indexOf("useSeenDisplay"));
const mapIds = [...mapBlock.matchAll(/^\s*"?([a-z0-9-]+)"?:\s*</gm)].map((m) => m[1]);
console.log(`mapped components: ${mapIds.length}`);
const mapDupes = mapIds.filter((id, i) => mapIds.indexOf(id) !== i);
if (mapDupes.length) issues.push(`SECTION_COMPONENTS: duplicate keys: ${mapDupes.join(", ")}`);
const regNotMapped = ids.filter((id) => !mapIds.includes(id));
const mappedNotReg = mapIds.filter((id) => !ids.includes(id));
if (regNotMapped.length) issues.push(`registry ids with NO component: ${regNotMapped.join(", ")}`);
if (mappedNotReg.length) issues.push(`mapped components with NO registry id: ${mappedNotReg.join(", ")}`);
if (!regNotMapped.length && !mappedNotReg.length) ok.push("registry <-> SECTION_COMPONENTS: exact 1:1 match");

/* ---------- 4. rendered <Section id> in source files ---------- */
console.log("=== 4. RENDERED <Section id> ===");
const files = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `${ROOT}/src/components/foc/FocParts${n}.tsx`),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `${ROOT}/src/components/notes/Part${n}.tsx`),
];
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

/* ---------- 5. exam bank integrity ---------- */
console.log("=== 5. EXAM BANK (notes/questions.ts) ===");
console.log(`groups: ${EXAM_GROUPS.join(", ")}`);
console.log(`TOTAL_QUESTIONS = ${TOTAL_QUESTIONS}`);
for (const g of EXAM_GROUPS) {
  const bank = EXAM_BANKS[g];
  let bad = 0;
  for (const q of bank.questions) {
    if (q.type === "mcq") {
      if (!q.options || q.options.length < 2) { issues.push(`exam[${g}] ${q.id}: mcq without options`); bad++; }
      else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length) { issues.push(`exam[${g}] ${q.id}: answer index out of range (${q.answer} of ${q.options?.length})`); bad++; }
    } else if (q.type === "output" || q.type === "short") {
      if (!q.answerText) { issues.push(`exam[${g}] ${q.id}: ${q.type} without answerText`); bad++; }
    } else if (q.type === "code") {
      if (!q.solution) { issues.push(`exam[${g}] ${q.id}: code without solution`); bad++; }
    }
    if (!q.q?.trim()) { issues.push(`exam[${g}] ${q.id}: empty question text`); bad++; }
    if (!q.explain?.trim()) { issues.push(`exam[${g}] ${q.id}: missing explain`); bad++; }
  }
  console.log(`  ${g}: "${bank.title}" — ${bank.questions.length} questions, ${bad} integrity problems`);
}

/* ---------- 6. cross-system dependencies ---------- */
console.log("=== 6. CROSS-SYSTEM DEPENDENCIES ===");
// search corpus
const corpus = JSON.parse(fs.readFileSync(`${ROOT}/src/lib/search-corpus.json`, "utf8")) as any;
const chapters: any[] = corpus.chapters ?? [];
const qEntries: any[] = corpus.questions ?? [];
const corpusFoc = chapters.filter((c: any) => c.shelfId === "foc");
const corpusFocQ = qEntries.filter((c: any) => (c.shelfId ?? c.shelf) === "foc");
console.log(`search-corpus: ${chapters.length} chapters (${corpusFoc.length} foc), ${qEntries.length} questions (${corpusFocQ.length} foc)`);
if (corpusFoc.length) {
  const corpusIds = new Set(corpusFoc.map((c: any) => String(c.chapterKey ?? "")));
  const missingInCorpus = ids.filter((id) => !corpusIds.has(id));
  if (missingInCorpus.length) issues.push(`search-corpus missing foc chapters: ${missingInCorpus.join(", ")}`);
  else ok.push(`search-corpus covers all ${ids.length} foc chapters`);
  if (corpusFocQ.length !== TOTAL_QUESTIONS) issues.push(`search-corpus foc questions: ${corpusFocQ.length} != exam bank ${TOTAL_QUESTIONS}`);
  else ok.push(`search-corpus foc question count matches exam bank (${TOTAL_QUESTIONS})`);
  // corpus text freshness heuristic: distinctive current-source strings should appear in corpus text
  let stale = 0;
  for (const id of ids) {
    const entry = corpusFoc.find((c: any) => c.chapterKey === id);
    if (!entry) continue;
    const rInfo = renderedIds.find((r) => r.id === id);
    if (!rInfo) continue;
    const dir = rInfo.file.startsWith("FocParts") ? "foc/" : "notes/";
    const src = fs.readFileSync(`${ROOT}/src/components/${dir}${rInfo.file}`, "utf8");
    const strings = [...src.matchAll(/>\s*([A-Z][^<>{}]{45,120})\s*</g)].map((m) => m[1].replace(/\s+/g, " ").trim());
    const corpusText = String(entry.text ?? "").replace(/\s+/g, " ").toLowerCase();
    const found = strings.some((s) => corpusText.includes(s.toLowerCase().slice(0, 40)));
    if (!found) { stale++; issues.push(`search-corpus text for foc/${id} may be STALE (no current-source sentence matched; file=${rInfo.file})`); }
  }
  if (!stale) ok.push("search-corpus foc chapter text matches current section sources (heuristic)");
}

// section-counts / question-counts / chapter-index libs
for (const lib of ["section-counts.ts", "question-counts.ts", "chapter-index.ts"]) {
  try {
    const src = fs.readFileSync(`${ROOT}/src/lib/${lib}`, "utf8");
    const focIds = [...src.matchAll(/"(course-map|computing|pillars|data|data-types|why|algorithm|hardware|software|python|case-files|basics|lists|list-organize|for-loops|checkpoint-1|numeric-lists|copies-tuples|if|branches|skills-lab|if-lists|dicts|dict-loops|nesting|records-lab|while|loop-control|functions|args|returns|funcs2|classes)"/g)].map((m) => m[1]);
    const focCount = (src.match(/foc/g) ?? []).length;
    const missing = ids.filter((id) => !focIds.includes(id));
    console.log(`  lib/${lib}: foc refs=${focCount}, foc ids=${focIds.length}${missing.length ? `, MISSING: ${missing.join(",")}` : ""}`);
    if (focIds.length && missing.length) issues.push(`lib/${lib} missing foc chapter ids: ${missing.join(", ")}`);
  } catch (e) {
    console.log(`  lib/${lib}: not found`);
  }
}

/* ---------- summary ---------- */
console.log("\n================ RESULT ================");
console.log(`OK checks: ${ok.length}`);
ok.forEach((o) => console.log(`  [OK] ${o}`));
console.log(`ISSUES: ${issues.length}`);
issues.forEach((i) => console.log(`  [ISSUE] ${i}`));
