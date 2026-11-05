/* QA sweep 1 — static coverage: does every lecture of every subject
   have (a) substantive blurbs, (b) chapters that exist in the search
   corpus the narration script-desk grounds on? */
const path = require("path");
const { execSync } = require("child_process");

process.chdir("/home/z/my-project");

const SHELVES = [
  ["foc", "FOC_LECTURES"],
  ["atb", "ATB_LECTURES"],
  ["fa", "FA_LECTURES"],
  ["ebh", "EBH_LECTURES"],
  ["stm", "STM_LECTURES"],
  ["mktg", "MKTG_LECTURES"],
];

function loadLectures(shelf, symbol) {
  const file = `src/components/${shelf}/lectures.ts`;
  const src = require("fs").readFileSync(file, "utf8");
  // crude TS→JSON: extract each object literal via eval of the array body
  const start = src.indexOf(`export const ${symbol}`);
  if (start < 0) throw new Error(`${file}: ${symbol} not found`);
  const eq = src.indexOf("=", start);
  const arrStart = src.indexOf("[", eq);
  // find matching closing bracket
  let depth = 0, end = arrStart;
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  const body = src.slice(arrStart, end)
    .replace(/\/\/.*$/gm, "")           // line comments
    .replace(/,(\s*[}\]])/g, "$1");     // trailing commas
  // eslint-disable-next-line no-eval
  return eval(body);
}

const corpus = require(path.join(process.cwd(), "src/lib/search-corpus.json"));
const proseKeys = new Set((corpus.chapters || []).map((c) => `${c.shelfId}:${c.chapterKey}`));
const proseLen = {};
for (const c of corpus.chapters || []) proseLen[`${c.shelfId}:${c.chapterKey}`] = (c.text || "").length;

let issues = 0, totalLectures = 0, totalChapters = 0;
const rows = [];

for (const [shelf, symbol] of SHELVES) {
  let lectures;
  try {
    lectures = loadLectures(shelf, symbol);
  } catch (e) {
    console.log(`✗ ${shelf}: failed to load — ${e.message}`);
    issues++;
    continue;
  }
  totalLectures += lectures.length;
  for (const lec of lectures) {
    totalChapters += (lec.chapters || []).length;
    const blurbWords = (lec.blurb || "").split(/\s+/).filter(Boolean).length;
    const missing = [];
    let thin = [];
    for (const ch of lec.chapters || []) {
      const key = `${shelf}:${ch.id}`;
      if (!proseKeys.has(key)) missing.push(ch.id);
      else if ((proseLen[key] || 0) < 400) thin.push(`${ch.id}(${proseLen[key]}ch)`);
    }
    const label = `${shelf} L${lec.n}`;
    if (blurbWords < 12) { rows.push(`✗ ${label} thin blurb (${blurbWords}w)`); issues++; }
    if (missing.length) { rows.push(`✗ ${label} chapters NOT in corpus: ${missing.join(", ")}`); issues++; }
    if (thin.length) { rows.push(`△ ${label} thin corpus prose: ${thin.join(", ")}`); }
  }
  console.log(`· ${shelf}: ${lectures.length} lectures, ${lectures.reduce((a, l) => a + (l.chapters || []).length, 0)} chapters`);
}

console.log(`\nTOTAL: ${totalLectures} lectures, ${totalChapters} chapters across 6 subjects`);
if (rows.length) {
  console.log("\n--- findings ---");
  for (const r of rows) console.log(r);
  console.log(`issues: ${issues}`);
} else {
  console.log("No coverage issues — every chapter grounds in the corpus.");
}
