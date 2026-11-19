/* ATB shelf — structure & exam-bank audit.
   Mirrors audit-fa-content.ts machinery for Algorithmic Thinking in
   Business: registry <-> nav groups <-> section components <->
   rendered <Section id>, plus exam-bank integrity, twins and
   stale-text heuristics.

   Run: bun scripts/audit-atb-content.ts
   (pre-restructure baseline: 28 lectures L1–L28 → 33 chapters;
    re-run after the 33-lecture PDF restructure until green).  */

import { ATB_LECTURES, ATB_ALL_CHAPTER_IDS } from "../src/components/atb/lectures";
import { ATB_EXAM_BANKS, ATB_EXAM_GROUPS, ATB_TOTAL_QUESTIONS } from "../src/components/atb/questions";
import * as fs from "fs";

const ROOT = "/home/z/my-project";
const issues: string[] = [];
const ok: string[] = [];

/* ---------- 1. registry sanity ---------- */
console.log("=== 1. REGISTRY (atb/lectures.ts) ===");
console.log(`Lectures in registry: ${ATB_LECTURES.length}`);
ATB_LECTURES.forEach((l, i) => {
  if (l.n !== i + 1) issues.push(`registry: lecture at index ${i} has n=${l.n} (sequence break)`);
  const wantCode = `L${String(l.n).padStart(2, "0")}`;
  if (l.code !== wantCode && l.code !== `L${l.n}`) issues.push(`registry: lecture n=${l.n} has code=${l.code} (want L${l.n} or ${wantCode})`);
  if (!l.title?.trim()) issues.push(`registry: L${l.n} has empty title`);
  if (!l.chapters?.length) issues.push(`registry: L${l.n} has NO chapters`);
});
ok.push(`sequence L1..L${ATB_LECTURES.length} continuous: ${ATB_LECTURES.every((l, i) => l.n === i + 1)}`);
const liveLectures = ATB_LECTURES.filter((l) => l.live);
console.log(`live (recorded-session recap) lectures: ${liveLectures.map((l) => l.code).join(", ") || "none"}`);

const ids = ATB_ALL_CHAPTER_IDS;
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) issues.push(`registry: duplicate chapter ids: ${[...new Set(dupes)].join(", ")}`);
else ok.push(`chapter ids unique (${ids.length} total)`);

/* ---------- 2. nav GROUPS in AtbApp.tsx ---------- */
console.log("=== 2. NAV GROUPS (atb/AtbApp.tsx) ===");
const atbAppSrc = fs.readFileSync(`${ROOT}/src/components/atb/AtbApp.tsx`, "utf8");
const groupsBlock = atbAppSrc.slice(atbAppSrc.indexOf("const GROUPS"), atbAppSrc.indexOf("const FLAT_ITEMS"));
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
const mapBlock = atbAppSrc.slice(atbAppSrc.indexOf("const SECTION_COMPONENTS"), atbAppSrc.indexOf("useSeenDisplay"));
const mapIds = [...mapBlock.matchAll(/^\s*"?([a-z0-9-]+)"?:\s*</gm)].map((m) => m[1]);
console.log(`mapped components: ${mapIds.length}`);
const mapDupes = mapIds.filter((id, i) => mapIds.indexOf(id) !== i);
if (mapDupes.length) issues.push(`SECTION_COMPONENTS: duplicate keys: ${mapDupes.join(", ")}`);
const regNotMapped = ids.filter((id) => !mapIds.includes(id));
const mappedNotReg = mapIds.filter((id) => !ids.includes(id));
if (regNotMapped.length) issues.push(`registry ids with NO component: ${regNotMapped.join(", ")}`);
if (mappedNotReg.length) issues.push(`mapped components with NO registry id: ${mappedNotReg.join(", ")}`);
if (!regNotMapped.length && !mappedNotReg.length) ok.push("registry <-> SECTION_COMPONENTS: exact 1:1 match");

/* ---------- 4. rendered <Section id> in AtbParts1-10 ---------- */
console.log("=== 4. RENDERED <Section id> ===");
const files = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `${ROOT}/src/components/atb/AtbParts${n}.tsx`);
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
console.log("=== 5. EXAM BANK (atb/questions.ts) ===");
console.log(`groups: ${ATB_EXAM_GROUPS.join(", ")}`);
console.log(`ATB_TOTAL_QUESTIONS = ${ATB_TOTAL_QUESTIONS}`);
for (const g of ATB_EXAM_GROUPS) {
  const bank = ATB_EXAM_BANKS[g];
  let bad = 0;
  for (const q of bank.questions) {
    if (q.type === "mcq") {
      if (!q.options || q.options.length < 2) { issues.push(`exam[${g}] ${q.id}: mcq without options`); bad++; }
      else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length) { issues.push(`exam[${g}] ${q.id}: answer index out of range (${q.answer} of ${q.options?.length})`); bad++; }
    } else if (q.type === "output" || q.type === "short") {
      if (!q.answerText) { issues.push(`exam[${g}] ${q.id}: ${q.type} without answerText`); bad++; }
    }
    if (!q.q?.trim()) { issues.push(`exam[${g}] ${q.id}: empty question text`); bad++; }
    if (!q.explain?.trim()) { issues.push(`exam[${g}] ${q.id}: missing explain`); bad++; }
  }
  console.log(`  ${g}: "${bank.title}" — ${bank.questions.length} questions, ${bad} integrity problems`);
}

/* ---------- 6. cross-system dependencies ---------- */
console.log("=== 6. CROSS-SYSTEM DEPENDENCIES ===");
const corpus = JSON.parse(fs.readFileSync(`${ROOT}/src/lib/search-corpus.json`, "utf8")) as any;
const chapters: any[] = corpus.chapters ?? [];
const corpusAtb = chapters.filter((c: any) => c.shelfId === "atb");
console.log(`search-corpus: ${chapters.length} chapters (${corpusAtb.length} atb)`);
if (corpusAtb.length) {
  const corpusIds = new Set(corpusAtb.map((c: any) => String(c.chapterKey ?? "")));
  const missingInCorpus = ids.filter((id) => !corpusIds.has(id));
  if (missingInCorpus.length) issues.push(`search-corpus missing atb chapters: ${missingInCorpus.join(", ")}`);
  else ok.push(`search-corpus covers all ${ids.length} atb chapters`);
  let stale = 0;
  for (const id of ids) {
    const entry = corpusAtb.find((c: any) => c.chapterKey === id);
    if (!entry) continue;
    const rInfo = renderedIds.find((r) => r.id === id);
    if (!rInfo) continue;
    const src = fs.readFileSync(`${ROOT}/src/components/atb/${rInfo.file}`, "utf8");
    /* sentences live both as JSX text nodes AND as attribute values —
       the corpus extractText pulls both, so the heuristic scans both */
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
    if (!found) { stale++; issues.push(`search-corpus text for atb/${id} may be STALE (no current-source sentence matched; file=${rInfo.file})`); }
  }
  if (!stale) ok.push("search-corpus atb chapter text matches current section sources (heuristic)");
} else {
  issues.push(`search-corpus has NO atb chapters (expected ${ids.length})`);
}

for (const lib of ["section-counts.ts", "question-counts.ts", "chapter-index.ts"]) {
  const src = fs.readFileSync(`${ROOT}/src/lib/${lib}`, "utf8");
  const atbRefs = (src.match(/\batb\b/g) ?? []).length;
  const atbIds = [...src.matchAll(new RegExp(`"(${ids.join("|")})"`, "g"))].map((m) => m[1]);
  const uniqAtbIds = [...new Set(atbIds)];
  console.log(`  lib/${lib}: atb refs=${atbRefs}, atb ids=${uniqAtbIds.length}/${ids.length}${uniqAtbIds.length < ids.length ? `, MISSING: ${ids.filter((id) => !uniqAtbIds.includes(id)).join(", ")}` : ""}`);
  if (uniqAtbIds.length && uniqAtbIds.length < ids.length) issues.push(`lib/${lib} covers only ${uniqAtbIds.length}/${ids.length} atb chapter ids`);
}

/* ---------- 7. stale-text & structure smells ---------- */
console.log("=== 7. STALE-TEXT & STRUCTURE SMELLS ===");
const allParts = files.map((f) => ({ f, src: fs.readFileSync(f, "utf8") }));
// hard-coded counts that shift when the 33-lecture restructure lands
for (const { f, src } of allParts) {
  const n = f.split("/").pop()!;
  for (const m of src.matchAll(/(28 lectures|twenty-eight|Twenty-eight|33 lectures|thirty-three|Thirty-three)/g)) {
    issues.push(`${n}: hard-coded lecture-count text "${m[1]}" (will drift when the 33-lecture PDF lands)`);
  }
}
// duplicated id="top" — AtbApp wrapper owns it; the hero must not repeat it
if (atbAppSrc.includes('id="top"')) ok.push("AtbApp wrapper has id=top (brand chip anchor)");
const heroSrc = fs.readFileSync(`${ROOT}/src/components/atb/AtbParts1.tsx`, "utf8");
if (heroSrc.includes('id="top"')) issues.push("AtbHero <header> ALSO uses id=top — duplicate DOM id (AtbApp wrapper already owns it)");
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

/* ---------- summary ---------- */
console.log("\n================ RESULT ================");
console.log(`OK checks: ${ok.length}`);
ok.forEach((o) => console.log(`  [OK] ${o}`));
console.log(`ISSUES: ${issues.length}`);
issues.forEach((i) => console.log(`  [ISSUE] ${i}`));
