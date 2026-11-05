/* REVISION RADIO — full-fleet audit.
   For every shelf and every lecture:
     1. build the outline exactly like RevisionRadio.buildOutline() does
     2. POST /api/narrate/script  → expect 200, sane words, grounded > 0
     3. POST /api/narrate/tts (first bite) → expect audio bytes
     4. subject-scope (course welcome) outline per shelf too
   Prints a per-lecture verdict table + a problem list. */

import * as foc from "../src/components/foc/lectures.ts";
import * as atb from "../src/components/atb/lectures.ts";
import * as fa from "../src/components/fa/lectures.ts";
import * as ebh from "../src/components/ebh/lectures.ts";
import * as stm from "../src/components/stm/lectures.ts";
import * as mktg from "../src/components/mktg/lectures.ts";
import corpus from "../src/lib/search-corpus.json";

const BASE = "http://localhost:3000";

const SHELVES: [string, string, any[]][] = [
  ["foc", "Foundation of Computing", foc.FOC_LECTURES],
  ["atb", "Algorithmic Thinking in Business", atb.ATB_LECTURES],
  ["fa", "Financial Accounting", fa.FA_LECTURES],
  ["ebh", "Economics and Business History", ebh.EBH_LECTURES],
  ["stm", "Statistics for Managers", stm.STM_LECTURES],
  ["mktg", "Principle of Marketing", mktg.MKTG_LECTURES],
];

// corpus ground map — shelf:chapterKey → text length
const prose = new Map<string, number>();
for (const c of (corpus as any).chapters ?? []) {
  const k = `${c.shelfId}:${c.chapterKey}`;
  if (!prose.has(k) && typeof c.text === "string") prose.set(k, c.text.length);
}

interface Row {
  shelf: string;
  lec: string;
  scope: string;
  scriptStatus: number;
  words: number;
  grounded: number;
  source: string;
  ttsStatus: number;
  audioBytes: number;
  audioType: string;
  problems: string[];
}

const rows: Row[] = [];
const rowHadScript = (pred: (r: Row) => boolean) => rows.some((r) => pred(r) && r.scriptStatus === 200);

/** fetch that always settles — a hung studio call must never stall the audit */
function fetchT(url: string, init: any, ms = 90_000): Promise<Response> {
  return Promise.race([
    fetch(url, init),
    new Promise<Response>((_, rej) => setTimeout(() => rej(new Error(`timeout ${ms}ms`)), ms)),
  ]);
}

function voiceProbe(text: string) {
  return JSON.stringify({ text, voice: "tongtong" });
}

async function audit(shelfId: string, subjectName: string, lec: any, scope: "lecture" | "subject") {
  const PROBE_TTS = process.env.TTS_PROBE === "1"; // off by default — a fresh
  // synthesis per lecture would exhaust the shared upstream quota
  const outline: any =
    scope === "lecture"
      ? {
          shelf: shelfId,
          subject: subjectName,
          scope: "lecture",
          code: lec.code,
          n: lec.n,
          title: lec.title,
          blurb: lec.blurb,
          chapters: lec.chapters,
        }
      : {
          shelf: shelfId,
          subject: subjectName,
          scope: "subject",
          title: subjectName,
          blurb: lec?.blurb,
          chapters: lec?.chapters,
        };

  const row: Row = {
    shelf: shelfId,
    lec: scope === "lecture" ? lec.code : "COURSE",
    scope,
    scriptStatus: 0,
    words: 0,
    grounded: 0,
    source: "",
    ttsStatus: 0,
    audioBytes: 0,
    audioType: "",
    problems: [],
  };

  // chapter ids grounded in corpus?
  const missingGround = (lec?.chapters ?? []).filter(
    (c: any) => !prose.has(`${shelfId}:${c.id}`),
  );
  if (scope === "lecture" && missingGround.length === (lec?.chapters ?? []).length && (lec?.chapters ?? []).length > 0) {
    row.problems.push(`NO GROUNDING (0/${lec.chapters.length} chapter ids in corpus)`);
  }

  try {
    const res = await fetchT(`${BASE}/api/narrate/script`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ outline }),
    });
    row.scriptStatus = res.status;
    if (!res.ok) {
      row.problems.push(`script ${res.status}`);
    } else {
      const data: any = await res.json();
      row.words = data.words ?? 0;
      row.grounded = data.grounded ?? 0;
      row.source = data.source ?? "";
      if (row.words < 40) row.problems.push(`thin script (${row.words}w)`);
      if (row.words > 420) row.problems.push(`bloated script (${row.words}w)`);
      if (!Array.isArray(data.sentences) || data.sentences.length === 0)
        row.problems.push("no sentences");

      // TTS the first bite (sentence group ≤ 420 chars, like the client)
      const sents: string[] = data.sentences ?? [];
      let bite = "";
      for (const s of sents) {
        if (bite && (bite + " " + s).length > 420) break;
        bite = bite ? `${bite} ${s}` : s;
      }
      if (!bite && sents.length) bite = sents[0].slice(0, 420);
      if (bite && PROBE_TTS) {
        try {
          const t0 = Date.now();
          const tr = await fetchT(`${BASE}/api/narrate/tts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: voiceProbe(bite),
          }, 150_000);
          row.ttsStatus = tr.status;
          row.audioType = tr.headers.get("content-type") ?? "";
          if (tr.ok) {
            const buf = await tr.arrayBuffer();
            row.audioBytes = buf.byteLength;
            if (buf.byteLength < 5000) row.problems.push(`tiny audio (${buf.byteLength}B)`);
          } else {
            row.problems.push(`tts ${tr.status}`);
          }
        } catch (e: any) {
          row.problems.push(`tts threw ${e.message}`);
        }
      }
    }
  } catch (e: any) {
    row.problems.push(`script threw ${e.message}`);
  }
  rows.push(row);
  const flag = row.problems.length ? "⚠️" : "✓";
  console.log(
    `${flag} ${shelfId.padEnd(5)} ${row.lec.padEnd(7)} script=${row.scriptStatus} w=${String(row.words).padStart(3)} grd=${row.grounded} tts=${row.ttsStatus} audio=${String(row.audioBytes).padStart(6)}B ${row.problems.join("; ")}`,
  );
}

// serialize — the TTS lane is one-at-a-time by design
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const only = process.argv.slice(2); // optional shelf filter
  for (const [shelfId, subjectName, lectures] of SHELVES) {
    if (only.length && !only.includes(shelfId)) continue;
    console.log(`\n=== ${subjectName} (${shelfId}) — ${lectures.length} lectures ===`);
    // course welcome first
    await audit(shelfId, subjectName, lectures[0], "subject");
    await sleep(2500);
    for (let i = 0; i < lectures.length; i++) {
      const lec = lectures[i];
      await audit(shelfId, subjectName, lec, "lecture");
      await sleep(2500);
    }
  }
  console.log("\n================ VERDICT ================");
  const bad = rows.filter((r) => r.problems.length);
  console.log(`total checks: ${rows.length}, clean: ${rows.length - bad.length}, problems: ${bad.length}`);
  for (const r of bad) console.log(`  ✗ ${r.shelf} ${r.lec}: ${r.problems.join("; ")}`);
}
main();
