/* QA sweep 2 — LIVE: every lecture of every subject gets its radio
   briefing regenerated (SCRIPT_VERSION radio-5) and validated:
     · HTTP 200, source = model/cache (grounded), grounded ≥ 1 chapter
     · word budget (lecture 110–210, subject 100–190)
     · no markdown / stage directions leaking through
     · no sentence > 26 words
     · recitation detector: no 10-word run copied verbatim from the notes
   Usage: node qa-narration-sweep.cjs [shelf ...]   (default: all six)
   Paced + patient — survives the chat API's rate limiter. */
process.chdir("/home/z/my-project");
const fs = require("fs");

const SHELVES = [
  ["foc", "FOC_LECTURES"],
  ["atb", "ATB_LECTURES"],
  ["fa", "FA_LECTURES"],
  ["ebh", "EBH_LECTURES"],
  ["stm", "STM_LECTURES"],
  ["mktg", "MKTG_LECTURES"],
];
const SUBJECT_TITLES = {
  foc: "Foundations of Computing",
  atb: "Algorithmic Thinking in Business",
  fa: "Financial Accounting",
  ebh: "Economics and Business History",
  stm: "Statistics for Managers",
  mktg: "Principle of Marketing",
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

const corpus = require("../src/lib/search-corpus.json");
const proseByShelf = {};
for (const c of corpus.chapters) {
  (proseByShelf[c.shelfId] ??= []).push(c.text || "");
}
function ngrams(text, n) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}
const corpusGrams = {};
for (const shelf of Object.keys(proseByShelf)) {
  const set = new Set();
  for (const t of proseByShelf[shelf]) for (const g of ngrams(t, 10)) set.add(g);
  corpusGrams[shelf] = set;
}

function validate(shelf, tag, script, groundedCount, isLecture) {
  const issues = [];
  const words = script.split(/\s+/).filter(Boolean).length;
  const [lo, hi] = isLecture ? [110, 210] : [100, 190];
  if (words < lo || words > hi) issues.push(`words ${words} outside ${lo}–${hi}`);
  if (/(\*\*|__|~~|```|^#|\|)/m.test(script)) issues.push("markdown leaked");
  if (/\[[^\]]{0,80}\]/.test(script)) issues.push("stage direction leaked");
  const sentences = script.split(/(?<=[.!?])\s+/).filter(Boolean);
  const longest = sentences.reduce((m, s) => Math.max(m, s.split(/\s+/).length), 0);
  if (longest > 26) issues.push(`sentence ${longest} words`);
  if (groundedCount < 1) issues.push("grounded 0 chapters");
  const grams = ngrams(script, 10);
  const copied = [...grams].filter((g) => corpusGrams[shelf].has(g));
  if (copied.length) issues.push(`recited: "${copied[0]}"`);
  return { words, issues };
}

async function brief(outline) {
  const res = await fetch("http://localhost:3000/api/narrate/script", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ outline }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 120)}`);
  return res.json();
}

/** a local fallback = the model was rate-limited — wait and retry hard,
    because a fallback briefing is exactly what this sweep must catch */
async function briefPatient(outline) {
  for (let a = 1; a <= 4; a++) {
    try {
      const data = await brief(outline);
      if (data.source !== "local") return data;
    } catch (e) {
      if (a === 4) throw e;
    }
    await new Promise((r) => setTimeout(r, 9000 * a)); // 9s · 18s · 27s
  }
  return brief(outline);
}

async function pool(items, worker, size) {
  const results = new Array(items.length);
  let next = 0;
  async function lane() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: size }, lane));
  return results;
}

(async () => {
  const t0 = Date.now();
  const only = process.argv.slice(2);
  const jobs = [];
  for (const [shelf, symbol] of SHELVES) {
    if (only.length && !only.includes(shelf)) continue;
    const lectures = loadLectures(shelf, symbol);
    jobs.push({ kind: "subject", shelf, title: SUBJECT_TITLES[shelf], first: lectures[0] });
    for (const lec of lectures) {
      jobs.push({ kind: "lecture", shelf, lec });
    }
  }
  const planned = only.length ? only.join(",") : "all six";
  console.log(`briefing ${jobs.length} programmes (${planned}) · paced, concurrency 2…`);

  let done = 0;
  const findings = [];
  const samples = [];
  /* global pacing — one model start at most every 1.2s keeps the chat
     limiter happy across a 175-programme regeneration */
  let lastStart = 0;
  await pool(jobs, async (job) => {
    const tag = job.kind === "lecture" ? `${job.shelf} L${job.lec.n}` : `${job.shelf} COURSE`;
    const outline = job.kind === "lecture"
      ? { shelf: job.shelf, subject: SUBJECT_TITLES[job.shelf], scope: "lecture", code: job.lec.code, n: job.lec.n, title: job.lec.title, blurb: job.lec.blurb, chapters: job.lec.chapters }
      : { shelf: job.shelf, subject: SUBJECT_TITLES[job.shelf], scope: "subject", title: SUBJECT_TITLES[job.shelf], blurb: job.first?.blurb, chapters: job.first?.chapters };
    const now = Date.now();
    if (now - lastStart < 1200) await new Promise((r) => setTimeout(r, 1200 - (now - lastStart)));
    lastStart = Date.now();
    let data = null, err = null;
    try { data = await briefPatient(outline); } catch (e) { err = e; }
    done++;
    if (done % 25 === 0) console.log(`  … ${done}/${jobs.length}`);
    if (!data) {
      findings.push(`✗ ${tag} — FAILED ${err ? err.message : "no data"}`);
      return;
    }
    /* "cache" hits are model briefings served from disk — fine.
       Only a "local" outline-fallback (or fallback-flavoured text) fails. */
    if (data.source === "local" || /That is the shape of it|Pick a lecture from the sequence/.test(data.script)) {
      findings.push(`✗ ${tag} — source=${data.source} (fallback, not model)`);
      return;
    }
    const { words, issues } = validate(job.shelf, tag, data.script, data.grounded, job.kind === "lecture");
    if (issues.length) findings.push(`△ ${tag} — ${issues.join(" · ")}`);
    if (samples.length < 6) samples.push({ tag, words, grounded: data.grounded, script: data.script });
  }, 2);

  console.log(`\n=== sweep done in ${((Date.now() - t0) / 1000).toFixed(0)}s ===`);
  fs.writeFileSync("scripts/narration-sweep-samples.json", JSON.stringify(samples, null, 2));
  if (findings.length) {
    console.log(`FINDINGS (${findings.length}):`);
    for (const f of findings) console.log(f);
  } else {
    console.log("ALL 175 PROGRAMMES PASS — model-grounded, in budget, no recitation.");
  }
  for (const s of samples.slice(0, 2)) {
    console.log(`\n--- sample ${s.tag} (${s.words}w, grounded ${s.grounded}) ---\n${s.script}`);
  }
})();
