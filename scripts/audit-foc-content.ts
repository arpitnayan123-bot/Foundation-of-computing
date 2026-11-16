/* FoC shelf — content scan (v2).
   Per chapter: quizzes, practice walls, machines (custom components),
   steps-flows (workflow diagrams), code blocks, callouts, read-steps.
   Plus per-lecture deck-coverage keyword analysis vs the fresh PDF text. */

import { FOC_LECTURES } from "../src/components/foc/lectures";
import * as fs from "fs";

const ROOT = "/home/z/my-project";
const FILES = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `${ROOT}/src/components/foc/FocParts${n}.tsx`),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `${ROOT}/src/components/notes/Part${n}.tsx`),
];

// primitives from ui.tsx + infra
const PRIMS = new Set([
  "Section", "Reveal", "Pill", "KV", "ReadStep", "SectionHead", "CodeBlock",
  "PyReadyToast", "Callout", "Quiz", "Practice", "Takeaways", "StepsFlow",
  "PartBoundary", "motion", "AnimatePresence", "Fragment",
]);

const fileData = new Map<string, string>();
const fileLocals = new Map<string, Set<string>>();
for (const f of FILES) {
  const src = fs.readFileSync(f, "utf8");
  fileData.set(f, src);
  // locally defined components: function Name( / const Name = (
  const locals = new Set<string>();
  for (const m of src.matchAll(/(?:^|\n)\s*(?:export\s+)?(?:default\s+)?function\s+([A-Z][A-Za-z0-9]+)\s*\(/g)) locals.add(m[1]);
  for (const m of src.matchAll(/(?:^|\n)\s*(?:export\s+)?const\s+([A-Z][A-Za-z0-9]+)\s*=\s*(?:\(|React\.memo|\w+\.memo)/g)) locals.add(m[1]);
  fileLocals.set(f, locals);
}

/* per-section scan */
interface ChapStat {
  id: string; file: string; readSteps: string[]; quizzes: number; practices: number;
  stepsFlows: number; codeBlocks: number; callouts: number; tables: number;
  machines: string[]; pySnippets: number;
}
const stats = new Map<string, ChapStat>();

for (const f of FILES) {
  const src = fileData.get(f)!;
  const locals = fileLocals.get(f)!;
  // lucide icon names imported in this file (handle "X as Y" aliases)
  const iconBlock = [...src.matchAll(/import\s*\{([^}]+)\}\s*from\s*"(lucide-react|@\/([^"]+))"/g)].flatMap((m) =>
    m[2] === "lucide-react"
      ? m[1].split(",").map((s) => s.trim()).filter(Boolean).map((s) => (s.includes(" as ") ? s.split(" as ")[1].trim() : s))
      : []
  );
  const known = new Set([...PRIMS, ...iconBlock]);
  const marks = [...src.matchAll(/<Section\s+id="([a-z0-9-]+)"/g)].map((m) => ({ id: m[1], idx: m.index! }));
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].idx;
    const end = i + 1 < marks.length ? marks[i + 1].idx : src.length;
    const seg = src.slice(start, end);
    const machines = new Set<string>();
    for (const m of seg.matchAll(/<([A-Z][A-Za-z0-9]+)[\s\/>]/g)) {
      const tag = m[1];
      if (known.has(tag) || !locals.has(tag)) continue;
      machines.add(tag);
    }
    const st: ChapStat = {
      id: marks[i].id,
      file: f.split("/").pop()!,
      readSteps: [...seg.matchAll(/<ReadStep[^>]*\btitle="([^"]+)"/g)].map((m) => m[1]),
      quizzes: (seg.match(/<Quiz[\s\/>]/g) ?? []).length,
      practices: (seg.match(/<Practice[\s\/>]/g) ?? []).length,
      stepsFlows: (seg.match(/<StepsFlow[\s\/>]/g) ?? []).length,
      codeBlocks: (seg.match(/<CodeBlock[\s\/>]/g) ?? []).length,
      callouts: (seg.match(/<Callout[\s\/>]/g) ?? []).length,
      tables: (seg.match(/<(table|T)[\s>]/g) ?? []).length,
      machines: [...machines],
      pySnippets: (seg.match(/<PythonRun[\s\/>]|runPython|py-highlight/g) ?? []).length,
    };
    stats.set(st.id, st);
  }
}

/* lecture -> chapters map, print matrix */
console.log("=== PER-LECTURE CONTENT MATRIX ===");
console.log(
  "Lec | chapters                          | quiz | prac | flow | code | call | machines"
);
for (const lec of FOC_LECTURES) {
  const rows = lec.chapters.map((c) => stats.get(c.id)).filter(Boolean) as ChapStat[];
  const sum = (k: keyof ChapStat) => rows.reduce((n, r) => n + (r[k] as number), 0);
  const machs = [...new Set(rows.flatMap((r) => r.machines))];
  const missing = lec.chapters.filter((c) => !stats.has(c.id)).map((c) => c.id);
  if (missing.length) console.log(`  !! L${lec.n}: chapters with NO rendered Section: ${missing.join(",")}`);
  console.log(
    `${String(lec.n).padStart(2)}  | ${lec.chapters.map((c) => c.id).join(",").padEnd(33)} | ` +
      `${String(sum("quizzes")).padStart(4)} | ${String(sum("practices")).padStart(4)} | ` +
      `${String(sum("stepsFlows")).padStart(4)} | ${String(sum("codeBlocks")).padStart(4)} | ` +
      `${String(sum("callouts")).padStart(4)} | ${machs.length ? machs.join(", ").slice(0, 90) : "-"}`
  );
}

/* ---------- deck coverage analysis ---------- */
console.log("\n=== DECK COVERAGE (fresh PDF text vs app sources) ===");
const deck = fs.readFileSync("/tmp/foc-deck-fresh.txt", "utf8");
const deckMarks = [...deck.matchAll(/Lecture (\d+)[^\n]*\n/g)].map((m) => ({ n: +m[1], idx: m.index! }));
// keep only the "Lecture N" header occurrences (first occurrence per N in order 1..28)
const seen = new Set<number>();
const lectMarks = deckMarks.filter((m) => (seen.has(m.n) ? false : (seen.add(m.n), true)));
const STOP = new Set(("this that with from have been will your their they them then than thus these those there here what when where which while who how why into onto upon about above below between through during before after over under again further once because until against each other some such only own same very can just should now also using used use uses like more most many much per etc via the and for are was were has had not but all any one two three four five six seven eight nine ten its it's you your you'll we our it is be as at by of on in to or if do does did doing done a an " +
  "lecture lectures introduction overview covers cover covering covered session sessions foundation foundations computing course class classes topic topics chapter chapters module today yesterday previously earlier next last first second third discuss discusses discussed discussing explore explores explored exploring understand understanding learn learning building build built essential fundamentals fundamental basic basics concepts concept including include includes various different important main major brief deep-dive notes note reading read reader lesson part unit week day material content contents slide slides deck recorded video instructor professor institute technology management semester require requires required let talk talks going goes come comes take takes give gives look looks looking see sees seen show shows showing shown start starts started begin begins beginning end ends ending continue continues continued focus focuses focused aim aims apply applies applied try tries thing things stuff area areas field fields world real-life real-world life society modern latest new old point points idea ideas goal goals purpose purposes style styles way ways kind sort example examples sample samples case exercise exercises problem problems solution solutions answer answers question questions quiz quizzes student students participant participants grading grade grades marks mark evaluation scheme score scoring attempt attempts attempted prepared prepare preparing today's agenda outline summary recap review revise revision quick briefly short hands-on practice practicing cod coding coded write writes writing wrote written program programs programming programmed languages language python computer computers data datasets dataset"
).split(" "));

for (const lec of FOC_LECTURES.slice(0, 28)) {
  const mi = lectMarks.find((m) => m.n === lec.n);
  if (!mi) { console.log(`L${lec.n}: NO deck header found`); continue; }
  const miNext = lectMarks.find((m) => m.n === lec.n + 1);
  const deckSeg = deck.slice(mi.idx, miNext ? miNext.idx : deck.length);
  const words = new Set(
    deckSeg
      .toLowerCase()
      .replace(/[^a-z0-9\s'-]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 5 && !STOP.has(w) && !/^\d+$/.test(w))
  );
  // app text: the lecture's chapter section sources, stripped of JSX
  const chapFiles = lec.chapters.map((c) => stats.get(c.id)!).filter(Boolean);
  const appText = chapFiles
    .map((r) => {
      const f = FILES.find((x) => x.endsWith(r.file))!;
      const src = fileData.get(f)!;
      const marks = [...src.matchAll(/<Section\s+id="([a-z0-9-]+)"/g)].map((m) => ({ id: m[1], idx: m.index! }));
      const i = marks.findIndex((m) => m.id === r.id);
      const seg = src.slice(marks[i].idx, i + 1 < marks.length ? marks[i + 1].idx : src.length);
      return seg.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase();
    })
    .join(" ");
  let hit = 0, miss = 0; const missing: string[] = [];
  for (const w of words) {
    if (appText.includes(w)) hit++; else { miss++; missing.push(w); }
  }
  const pct = Math.round((hit / (hit + miss)) * 100);
  console.log(
    `L${String(lec.n).padStart(2)} -> ${chapFiles.map((r) => r.id).join("+").padEnd(20)} deck-words:${String(hit + miss).padStart(4)} coverage:${String(pct).padStart(3)}%  missing-sample: ${missing.slice(0, 12).join(", ") || "-"}`
  );
}

/* L29 ahead-of-deck check */
console.log("\n=== L29 Classes (ahead of deck) ===");
const l29 = FOC_LECTURES[28];
for (const c of l29.chapters) {
  const st = stats.get(c.id);
  console.log(`${c.id}: file=${st?.file} readSteps=${st?.readSteps.length} quizzes=${st?.quizzes} machines=${st?.machines.join(",") || "-"}`);
}
