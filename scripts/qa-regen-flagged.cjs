/* Regenerate flagged briefings — replicate the route's cache-key
   normalization exactly, purge those cache files, re-brief. */
process.chdir("/home/z/my-project");
const crypto = require("crypto");
const fs = require("fs");

const TITLES = {
  foc: "Foundations of Computing", atb: "Algorithmic Thinking in Business",
  fa: "Financial Accounting", ebh: "Economics and Business History",
  stm: "Statistics for Managers", mktg: "Principle of Marketing",
};

function loadLectures(shelf, symbol) {
  const src = fs.readFileSync(`src/components/${shelf}/lectures.ts`, "utf8");
  const start = src.indexOf(`export const ${symbol}`);
  const eq = src.indexOf("=", start);
  const arrStart = src.indexOf("[", eq);
  let depth = 0, end = arrStart;
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  const body = src.slice(arrStart, end).replace(/\/\/.*$/gm, "").replace(/,(\s*[}\]])/g, "$1");
  return eval(body);
}

const TABLES = {};
for (const [shelf, symbol] of Object.entries({
  foc: "FOC_LECTURES", atb: "ATB_LECTURES", fa: "FA_LECTURES",
  ebh: "EBH_LECTURES", stm: "STM_LECTURES", mktg: "MKTG_LECTURES",
})) TABLES[shelf] = loadLectures(shelf, symbol);

/* mirror the route's Outline construction + JSON key order */
function normalize(o) {
  return {
    shelf: o.shelf,
    subject: o.subject,
    scope: o.scope,
    title: o.scope === "lecture" ? o.title : o.subject,
    code: o.code || undefined,
    n: typeof o.n === "number" && Number.isFinite(o.n) ? Math.trunc(o.n) : undefined,
    blurb: o.blurb || undefined,
    chapters: o.chapters,
  };
}
function cacheKey(o) {
  return crypto.createHash("sha1").update("radio-5\n" + JSON.stringify(normalize(o))).digest("hex");
}

/* flagged: [shelf, n|null, reason] */
const FLAGGED = [
  ["foc", 8, "thin"], ["foc", 20, "thin"],
  ["atb", 10, "thin"],
  ["ebh", 22, "thin"],
  ["stm", 25, "thin"], ["stm", 27, "thin"],
  ["mktg", 5, "thin"],
  ["foc", 5, "long-sentence"], ["atb", 4, "long-sentence"], ["atb", 27, "long-sentence"],
  ["ebh", 5, "long-sentence"], ["ebh", 28, "long-sentence"], ["fa", 26, "long-sentence"],
];

const CACHE_DIR = "/home/z/my-project/db/narration-script";

(async () => {
  let purged = 0;
  for (const [shelf, n] of FLAGGED) {
    const l = TABLES[shelf].find((x) => x.n === n);
    const outline = { shelf, subject: TITLES[shelf], scope: "lecture", code: l.code, n: l.n, title: l.title, blurb: l.blurb, chapters: l.chapters };
    const key = cacheKey(outline);
    const file = `${CACHE_DIR}/${key}.json`;
    if (fs.existsSync(file)) { fs.rmSync(file); purged++; }
    /* regenerate, patiently */
    for (let a = 1; a <= 5; a++) {
      try {
        const res = await fetch("http://localhost:3000/api/narrate/script", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ outline }),
        });
        const data = await res.json();
        if (data.source === "model") {
          const long = data.script.split(/(?<=[.!?])\s+/).reduce((m, s) => Math.max(m, s.split(/\s+/).length), 0);
          console.log(`✓ ${shelf} L${n} — ${data.words}w, longest sentence ${long}w`);
          break;
        }
      } catch (e) { /* fall through */ }
      await new Promise((r) => setTimeout(r, 9000 * a));
      if (a === 5) console.log(`✗ ${shelf} L${n} — still failing`);
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
  console.log(`purged ${purged} caches, regeneration pass done`);
})();
