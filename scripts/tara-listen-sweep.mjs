/* ============================================================
   THE TARA LISTEN-SWEEP — every lecture, heard.

   For every course-welcome + every lecture of all six shelves:
     1. compose the briefing (live /api/narrate/script — cache
        hit after the compose sweep has run)
     2. take the OPENING BITE exactly the way the radio groups
        it (splitSentences → groupBites ≤420)
     3. speak it through the LIVE /api/narrate/tts route in
        TARA's voice (tongtong) — the full chain: allow-list,
        spoken-text normalization, mastering, disk cache
     4. ASR round-trip the audio back to words
     5. score the heard words against the spoken words — a
        ≥55% word-overlap means the voice said the briefing

   PASS lines double as an audio pre-warm: every opening bite
   lands in db/narration-audio, so first plays are instant.

   Paced well under the routes' limits; resume-safe via
   .tara-listen-done.txt; report → tara-listen-report.json
   ============================================================ */
import { splitSentences, groupBites } from "../src/lib/narration.ts";
import { FOC_LECTURES } from "../src/components/foc/lectures.ts";
import { ATB_LECTURES } from "../src/components/atb/lectures.ts";
import { FA_LECTURES } from "../src/components/fa/lectures.ts";
import { EBH_LECTURES } from "../src/components/ebh/lectures.ts";
import { STM_LECTURES } from "../src/components/stm/lectures.ts";
import { MKTG_LECTURES } from "../src/components/mktg/lectures.ts";
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import { createHash } from "crypto";

const SUBJECTS = [
  { shelf: "foc", subject: "Foundation of Computing", lectures: FOC_LECTURES },
  { shelf: "atb", subject: "Algorithmic Thinking in Business", lectures: ATB_LECTURES },
  { shelf: "fa", subject: "Financial Accounting", lectures: FA_LECTURES },
  /* subject names MUST equal the registry titles — cache keys are outline-hashed */
  { shelf: "ebh", subject: "Economic & Business History", lectures: EBH_LECTURES },
  { shelf: "stm", subject: "Statistics for Managers", lectures: STM_LECTURES },
  { shelf: "mktg", subject: "Principles of Marketing", lectures: MKTG_LECTURES },
];

const BASE = "http://localhost:3000";
const HERE = new URL(".", import.meta.url).pathname;
const DONE_FILE = HERE + ".tara-listen-done.txt";
const REPORT = HERE + "tara-listen-report.json";
const done = new Set(
  fs.existsSync(DONE_FILE) ? fs.readFileSync(DONE_FILE, "utf8").split("\n").filter(Boolean) : [],
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const report = [];
function saveReport() {
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 1));
}
function markDone(tag) {
  done.add(tag);
  fs.appendFileSync(DONE_FILE, tag + "\n");
}

/* the radio's own bite grouping — the exact first bite it plays */
function firstBite(script) {
  const bites = groupBites(splitSentences(script), 420);
  return bites[0]?.text ?? "";
}

async function compose(outline) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(`${BASE}/api/narrate/script`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: BASE },
      body: JSON.stringify({ outline }),
      signal: AbortSignal.timeout(90_000),
    }).catch(() => null);
    if (!res) { await sleep(4000); continue; }
    if (res.status === 429) { await sleep(20_000); continue; }
    if (!res.ok) return null;
    return (await res.json());
  }
  return null;
}

/* speak through the LIVE studio route — Tara only */
async function speak(text) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(`${BASE}/api/narrate/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: BASE },
      body: JSON.stringify({ text, voice: "tongtong" }),
      signal: AbortSignal.timeout(120_000),
    }).catch(() => null);
    if (!res) { await sleep(5000); continue; }
    if (res.status === 503 || res.status === 429) {
      const ra = Number(res.headers.get("Retry-After")) || 30;
      await sleep(ra * 1000);
      continue;
    }
    if (res.status === 502) { await sleep(9000); continue; }
    if (!res.ok) return { buf: null, status: res.status };
    return { buf: Buffer.from(await res.arrayBuffer()), status: 200 };
  }
  return { buf: null, status: "gave-up" };
}

/* bag-of-words overlap — ASR of a clean TTS lands ≥ .8 */
function overlap(spoken, heard) {
  const norm = (s) =>
    s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length > 1);
  const a = [...new Set(norm(spoken))];
  const b = new Set(norm(heard));
  if (!a.length) return 0;
  let hit = 0;
  for (const w of a) if (b.has(w)) hit++;
  return hit / a.length;
}

async function main() {
  const zai = await ZAI.create();
  let pass = 0, fail = 0, total = 0;

  for (const s of SUBJECTS) {
    const items = [
      { code: "COURSE", n: 0, scope: "subject", title: s.subject, lec: null },
      ...s.lectures.map((l) => ({ code: l.code, n: l.n, scope: "lecture", title: l.title, lec: l })),
    ];
    for (const item of items) {
      total++;
      const tag = `${s.shelf} ${item.code}`;
      if (done.has(tag)) {
        console.log(`· ${tag} — already heard, skipping`);
        pass++;
        continue;
      }
      const outline = item.lec
        ? {
            shelf: s.shelf, subject: s.subject, scope: "lecture",
            code: item.lec.code, n: item.lec.n, title: item.lec.title,
            blurb: item.lec.blurb, chapters: item.lec.chapters,
          }
        : {
            shelf: s.shelf, subject: s.subject, scope: "subject",
            title: s.subject, blurb: s.lectures[0]?.blurb, chapters: s.lectures[0]?.chapters,
          };

      const t0 = Date.now();
      const data = await compose(outline);
      if (!data?.script) {
        fail++;
        report.push({ tag, title: item.title, verdict: "FAIL", why: "no script" });
        console.log(`✗ ${tag} — NO SCRIPT`);
        saveReport();
        await sleep(1500);
        continue;
      }
      const bite = firstBite(data.script);
      if (!bite) {
        fail++;
        report.push({ tag, title: item.title, verdict: "FAIL", why: "empty first bite" });
        console.log(`✗ ${tag} — EMPTY BITE`);
        saveReport();
        await sleep(1200);
        continue;
      }
      const { buf, status } = await speak(bite);
      if (!buf) {
        fail++;
        report.push({ tag, title: item.title, verdict: "FAIL", why: `tts ${status}` });
        console.log(`✗ ${tag} — TTS ${status}`);
        saveReport();
        await sleep(2000);
        continue;
      }
      let heard = "";
      try {
        const asr = await zai.audio.asr.create({ file_base64: buf.toString("base64") });
        heard = String(asr?.text ?? "").trim();
      } catch (e) {
        heard = "";
        report.push({ tag, title: item.title, verdict: "RETRY-ASR", why: e.message });
      }
      const score = heard ? overlap(bite, heard) : 0;
      const ok = score >= 0.55;
      if (ok) { pass++; markDone(tag); } else fail++;
      report.push({
        tag, title: item.title, verdict: ok ? "PASS" : "FAIL",
        score: Number(score.toFixed(2)), bytes: buf.length, ms: Date.now() - t0,
        bite: bite.slice(0, 90), heard: heard.slice(0, 90),
      });
      console.log(`${ok ? "✓" : "✗"} ${tag} score=${score.toFixed(2)} ${buf.length}b ${Date.now() - t0}ms :: ${heard.slice(0, 72) || "(asr empty)"}`);
      saveReport();
      await sleep(1400);
    }
  }
  console.log(`\n===== TARA LISTEN-SWEEP: ${pass}/${total} heard and verified, ${fail} failed =====`);
  saveReport();
  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.error("listen-sweep crashed:", e.message);
  saveReport();
  process.exit(1);
});
