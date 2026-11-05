/* Inspect flagged briefings — print the script context around each
   flagged n-gram so we can judge recitation vs stock phrase. */
process.chdir("/home/z/my-project");
const fs = require("fs");

const SHELVES = {
  foc: "FOC_LECTURES", atb: "ATB_LECTURES", fa: "FA_LECTURES",
  ebh: "EBH_LECTURES", stm: "STM_LECTURES", mktg: "MKTG_LECTURES",
};
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

// (shelf, lectureN|null, gram)
const FLAGS = [
  ["foc", null, "welcome to foundations of computing this course transforms you from"],
  ["foc", 6, "hardware silicon that makes ideas run hardware is the physical"],
  ["foc", 14, "up to september 20th including working with lists part 2"],
  ["foc", 29, "is and what it can do every object made from"],
  ["fa", 1, "accounting is the language of business and this course teaches"],
  ["fa", 4, "financial statements exist to replace ask me anything with numbers"],
  ["fa", 10, "closed to p l at year end the journal is"],
  ["mktg", 13, "aged 3 15 who were too old for baby products"],
  ["mktg", 18, "people buy to reach restore maintain or protect a desired"],
  ["mktg", 26, "brands that connect attributes to human traits escape the transactional"],
  ["ebh", 17, "the frame breaking act made machine wrecking a capital crime"],
];

(async () => {
  const tables = {};
  for (const [shelf, symbol] of Object.entries(SHELVES)) tables[shelf] = loadLectures(shelf, symbol);
  for (const [shelf, n, gram] of FLAGS) {
    const outline = n === null
      ? { shelf, subject: TITLES[shelf], scope: "subject", title: TITLES[shelf], blurb: tables[shelf][0]?.blurb, chapters: tables[shelf][0]?.chapters }
      : (() => { const l = tables[shelf].find((x) => x.n === n); return { shelf, subject: TITLES[shelf], scope: "lecture", code: l.code, n: l.n, title: l.title, blurb: l.blurb, chapters: l.chapters }; })();
    const res = await fetch("http://localhost:3000/api/narrate/script", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ outline }),
    });
    const data = await res.json();
    const norm = data.script.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ");
    const gi = norm.indexOf(gram);
    console.log(`\n=== ${shelf} ${n ?? "COURSE"} · ${data.words}w · source ${data.source} ===`);
    if (gi >= 0) {
      const start = Math.max(0, gi - 70);
      console.log(`…"${data.script.slice(start, gi + gram.length + 70)}…"`);
    } else console.log("(gram not in current script — regenerated since)");
  }
})();
