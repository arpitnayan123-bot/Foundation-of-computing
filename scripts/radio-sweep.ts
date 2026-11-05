/* ============================================================
   THE RADIO SWEEP — every lecture of every subject, through
   the LIVE /api/narrate/script desk, exactly the way the
   Revision Radio's buildOutline() sends it.

   Verifies per lecture: HTTP 200, a non-empty script, ≥1
   sentence, sane word count. Paced to stay under the route's
   own 30/min limiter (2.1s between calls).
   ============================================================ */
import { FOC_LECTURES } from "../src/components/foc/lectures";
import { ATB_LECTURES } from "../src/components/atb/lectures";
import { FA_LECTURES } from "../src/components/fa/lectures";
import { EBH_LECTURES } from "../src/components/ebh/lectures";
import { STM_LECTURES } from "../src/components/stm/lectures";
import { MKTG_LECTURES } from "../src/components/mktg/lectures";

const SUBJECTS: Array<{
  shelf: string;
  subject: string;
  lectures: Array<{ n: number; code: string; title: string; blurb: string; chapters: Array<{ id: string; label: string; desc: string }> }>;
}> = [
  { shelf: "foc", subject: "Foundation of Computing", lectures: FOC_LECTURES as never },
  { shelf: "atb", subject: "Algorithmic Thinking in Business", lectures: ATB_LECTURES as never },
  { shelf: "fa", subject: "Financial Accounting", lectures: FA_LECTURES as never },
  /* subject names MUST equal the registry titles in subjects.ts — the script
     desk's cache key is sha1(SCRIPT_VERSION + outline JSON) and the radio sends
     the registry title. A mismatch here pre-warms entries the radio never hits. */
  { shelf: "ebh", subject: "Economic & Business History", lectures: EBH_LECTURES as never },
  { shelf: "stm", subject: "Statistics for Managers", lectures: STM_LECTURES as never },
  { shelf: "mktg", subject: "Principles of Marketing", lectures: MKTG_LECTURES as never },
];

const BASE = "http://localhost:3000";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* resume support — long loops occasionally wedge against the dev
   server; the supervisor restarts us and we skip what already passed */
import fs from "fs";
const DONE_FILE = new URL("./.sweep-done.txt", import.meta.url).pathname;
const done = new Set<string>(
  fs.existsSync(DONE_FILE) ? fs.readFileSync(DONE_FILE, "utf8").split("\n").filter(Boolean) : [],
);
function markDone(tag: string) {
  done.add(tag);
  fs.appendFileSync(DONE_FILE, tag + "\n");
}

/** one script-desk call, hard-capped — a stalled dev recompile must not hang the sweep */
async function compose(outline: unknown): Promise<{ res: Response; data: { script?: string; sentences?: string[]; words?: number; source?: string } | null; body: string; ms: number }> {
  const t0 = Date.now();
  const res = await fetch(`${BASE}/api/narrate/script`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: BASE, Connection: "close" },
    body: JSON.stringify({ outline }),
    signal: AbortSignal.timeout(90_000),
    // @ts-expect-error bun-specific — never reuse a pooled socket; dev recompiles go stale
    keepalive: false,
  }).catch(() => null);
  const ms = Date.now() - t0;
  if (!res) return { res: new Response(null, { status: 599 }), data: null, body: "fetch failed", ms };
  const body = await res.text();
  if (!res.ok) console.log(`   [debug ${res.status} in ${ms}ms] ${body.slice(0, 220)}`);
  let data: { script?: string; sentences?: string[]; words?: number; source?: string } | null = null;
  if (res.ok) data = JSON.parse(body) as typeof data;
  return { res, data, body, ms };
}

function line(ok: boolean, tag: string, status: number, data: { words?: number; source?: string; script?: string } | null) {
  console.log(`${ok ? "✓" : "✗"} ${tag} → ${status} words=${data?.words ?? "-"} src=${data?.source ?? "-"} :: ${String(data?.script ?? "").slice(0, 60)}`);
}

async function main() {
  let pass = 0;
  let fail = 0;
  const failures: string[] = [];
  let total = 0;
  for (const s of SUBJECTS) {
    total += s.lectures.length + 1; // + the course-welcome scope
    // course welcome briefing (subject scope) — what plays before a lecture is picked
    {
      const first = s.lectures[0];
      const { res, data } = await compose({
        shelf: s.shelf,
        subject: s.subject,
        scope: "subject",
        title: s.subject,
        blurb: first?.blurb,
        chapters: first?.chapters,
      });
      const good = res.ok && data?.script && (data?.sentences?.length ?? 0) > 0;
      if (good) pass++;
      else {
        fail++;
        failures.push(`${s.shelf} COURSE-WELCOME → ${res.status}`);
      }
      line(good, `${s.shelf} course-welcome`, res.status, data);
      if (good) markDone(`${s.shelf} course-welcome`);
      await sleep(2100);
    }
    for (const lec of s.lectures) {
      const tag = `${s.shelf} ${lec.code}`;
      if (done.has(tag)) {
        console.log(`· ${tag} — already verified, skipping`);
        pass++;
        continue;
      }
      const { res, data } = await compose({
        shelf: s.shelf,
        subject: s.subject,
        scope: "lecture",
        code: lec.code,
        n: lec.n,
        title: lec.title,
        blurb: lec.blurb,
        chapters: lec.chapters,
      });
      const good =
        res.ok &&
        typeof data?.script === "string" &&
        data.script.trim().length > 40 &&
        Array.isArray(data?.sentences) &&
        data.sentences.length > 0 &&
        (data?.words ?? 0) >= 15;
      if (good) pass++;
      else {
        fail++;
        failures.push(`${s.shelf} ${lec.code} "${lec.title}" → ${res.status} words=${data?.words ?? "-"}`);
      }
      line(good, tag, res.status, data);
      if (good) markDone(tag);
      await sleep(2100);
    }
  }
  console.log(`\n===== SWEEP RESULT: ${pass}/${total} passed, ${fail} failed =====`);
  if (failures.length) {
    console.log("FAILURES:");
    for (const f of failures) console.log("  " + f);
  }
  process.exit(fail ? 1 : 0);
}

main();
