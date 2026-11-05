/* ============================================================
   THE NARRATOR'S SCRIPT DESK.

   POST /api/narrate/script   { outline }
     outline = {
       shelf:   "foc",                    // subject id
       subject: "Foundations of Computing",
       scope:   "lecture" | "subject",    // one lecture, or the whole course
       code?:   "L2",  n?: 2,             // lecture scope only
       title:   "What Is Computing? The IPO Model",
       blurb?:  "Computing predates computers…",
       chapters?: [{ id, label, desc }, …]
     }
     → 200 { script, sentences[], words, cached, grounded, source }
     → 400 { error }  bad outline

   The contract, in one line: EXPLAIN, NEVER RECITE. The model
   receives the lecture's own outline PLUS the matching chapter
   prose from the committed search corpus (the exact text the
   reader sees) and writes a ~150-word spoken briefing — the
   kind a senior would give a first-year on the walk to class.

   Honesty contract (same as /api/ask): the briefing is grounded
   ONLY in the notes provided. If the model is unreachable, a
   locally-composed briefing from the outline itself keeps the
   radio alive — the button never breaks.
   ============================================================ */

import { NextResponse } from "next/server";
import { createHash } from "crypto";
import fs from "fs";
import path from "path";
import ZAI from "z-ai-web-dev-sdk";
import { rateLimit, sameOrigin } from "@/lib/api-guard";
import corpus from "@/lib/search-corpus.json";

export const dynamic = "force-dynamic";

const SCRIPT_VERSION = "radio-6"; // bump: Tara takes the dial solo — Indian-English delivery pass; re-brief every cache entry
const CACHE_DIR = path.join(process.cwd(), "db", "narration-script");

const MAX_TITLE = 200;
const MAX_BLURB = 700;
const MAX_CHAPTERS = 6;
const MAX_CHAPTER_CHARS = 1900; // per grounded chapter
const GROUND_LIMIT = 4;
const MODEL_TIMEOUT_MS = 30_000;

interface OutlineChapter {
  id: string;
  label: string;
  desc: string;
}

interface Outline {
  shelf: string;
  subject: string;
  scope: "subject" | "lecture";
  code?: string;
  n?: number;
  title: string;
  blurb?: string;
  chapters?: OutlineChapter[];
}

interface CorpusChapter {
  shelfId: string;
  chapterKey: string;
  label: string;
  group: string;
  groupLabel: string;
  text: string;
}

/* corpus index — same committed prose the tutor quotes */
const chapters = ((corpus as { chapters?: CorpusChapter[] }).chapters ?? []).filter(
  (c) => c && typeof c.text === "string" && c.text.trim(),
);
const proseByKey = new Map<string, CorpusChapter>();
for (const c of chapters) {
  const key = `${c.shelfId}:${c.chapterKey}`;
  if (!proseByKey.has(key)) proseByKey.set(key, c);
}

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function clean(s: unknown, max: number): string {
  return typeof s === "string" ? s.replace(/\s+/g, " ").trim().slice(0, max) : "";
}

/** spoken-text sanitizer — no markdown, no stage directions */
function sanitizeScript(raw: string): string {
  return raw
    .replace(/\*\*|__|~~|```/g, "")
    .replace(/^#+\s*/gm, "")
    .replace(/[*_`>#|]/g, "")
    .replace(/\[[^\]]{0,80}\]/g, " ") // [pause] style directions
    .replace(/\s+/g, " ")
    .trim();
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"'])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return text.slice(0, cut > 0 ? cut : max);
}

/** the outline alone is already a decent briefing — used when the model can't */
function fallbackBriefing(o: Outline): string {
  const parts: string[] = [];
  if (o.scope === "lecture") {
    /* a title that already says "Welcome…" would double the greeting */
    parts.push(
      (/^welcome/i.test(o.title)
        ? `Lecture ${o.n ?? ""} of ${o.subject} — ${o.title}.`
        : `Welcome to Lecture ${o.n ?? ""} of ${o.subject} — ${o.title}.`
      ).replace(/\s+/g, " "),
    );
  } else {
    parts.push(`Welcome to ${o.subject}.`);
  }
  if (o.blurb) parts.push(o.blurb);
  const chs = (o.chapters ?? []).slice(0, MAX_CHAPTERS);
  if (chs.length === 1) {
    parts.push(`In this session we focus on ${chs[0].label} — ${chs[0].desc}.`);
  } else if (chs.length > 1) {
    const walk = chs.map((c) => `${c.label} — ${c.desc}`).join("; ");
    parts.push(`We will move through ${chs.length} stops: ${walk}.`);
  }
  if (o.scope === "lecture") {
    parts.push("That is the shape of it. Play the briefing once, then read the lecture below — it will take half the time.");
  } else {
    parts.push("Pick a lecture from the sequence and the radio will explain it before you read.");
  }
  return sanitizeScript(parts.join(" "));
}

function modelPrompt(o: Outline, grounded: CorpusChapter[]): { system: string; user: string } {
  const isLecture = o.scope === "lecture";
  const system = isLecture
    ? `You write spoken briefings for "the Revision Radio" — the voice inside the Atlas, ` +
      `the revision-notes app of IIT Jodhpur's B.S. in Management & Technology. A student who ` +
      `has NEVER seen this lecture presses play; you have ~60 seconds to make the lecture click. ` +
      `You ARE Tara — the Revision Radio's one and only voice: a warm, brilliant ` +
      `senior (didi) whose Indian English sounds friendly and fluent — ` +
      `the way a favourite senior explains on the walk to class, smiling through the words. ` +
      `HARD RULES: ` +
      `(1) Open with a warm, natural greeting that names the lecture, e.g. "Welcome to Lecture 2 ` +
      `of Foundations of Computing — What Is Computing?". Vary the shape of the greeting each time; ` +
      `never open with the same formula twice in a row. ` +
      `(2) EXPLAIN the material in your own words — the big idea first, then its 2-4 key points, ` +
      `using the notes' own examples. NEVER recite or paraphrase sentence-by-sentence; compress. ` +
      `Make it flow: connect the points like a story, not a list being read out. ` +
      `(3) Speak casual-crisp Indian English — the friendly campus register: "let's get into it", ` +
      `"here's the thing", "trust me, it clicks". Use contractions "you'll, it's, that's" — ` +
      `relaxed, encouraging, alive. One gentle rhetorical touch is welcome ` +
      `("here's the part everyone remembers") but never gimmicky. ` +
      `Write every symbol the way it is SAID — "23 percent", "60 rupees", "dollars" — ` +
      `never "%", "₹", "$", "&" or "e.g.", so the voice never stumbles. ` +
      `Plain text only — no headings, no bullets, no markdown, no stage directions, no emoji. ` +
      `(4) Short sentences — 18 words maximum each. Natural commas so the voice breathes. ` +
      `(5) Total 130 to 180 words. ` +
      `(6) Close with one forward-looking line (what to try, or what the next lecture builds). ` +
      `(7) Output ONLY the briefing text — nothing before or after.`
    : `You write spoken briefings for "the Revision Radio" — the voice inside the Atlas, ` +
      `the revision-notes app of IIT Jodhpur's B.S. in Management & Technology. The student just ` +
      `opened the subject itself; you have ~60 seconds to orient them before they pick a lecture. ` +
      `You ARE Tara — the Revision Radio's one and only voice: a warm, brilliant ` +
      `senior (didi) whose Indian English sounds friendly and fluent — ` +
      `welcoming a junior into her favourite subject. ` +
      `HARD RULES: ` +
      `(1) Open with a warm, natural welcome that names the course, e.g. "Welcome to Foundations ` +
      `of Computing". Vary the phrasing; never recite the subject description. ` +
      `(2) Explain what this course does to the person who finishes it — the transformation, the ` +
      `arc of its lectures, its signature examples — grounded ONLY in the outline provided. ` +
      `Make the arc feel like one story with a beginning and a payoff. ` +
      `(3) Speak casual-crisp Indian English — the friendly campus register: "let's begin", ` +
      `"here's the thing", "trust me, it clicks". Use contractions "you'll, it's, that's" — ` +
      `relaxed, encouraging, alive. Never stiff. ` +
      `Write every symbol the way it is SAID — "23 percent", "60 rupees", "dollars" — ` +
      `never "%", "₹", "$", "&" or "e.g.", so the voice never stumbles. ` +
      `Plain text only — no headings, no bullets, no markdown, no stage directions, no emoji. ` +
      `(4) Short sentences — 18 words maximum each. Natural commas so the voice breathes. ` +
      `(5) Total 120 to 160 words. ` +
      `(6) Close by inviting them to open the first lecture. ` +
      `(7) Output ONLY the briefing text — nothing before or after.`;

  const chs = (o.chapters ?? [])
    .slice(0, MAX_CHAPTERS)
    .map((c) => `- ${c.label}: ${c.desc}`)
    .join("\n");
  const notes = grounded
    .map((c) => `### ${c.label}\n${truncateAtWord(c.text.trim(), MAX_CHAPTER_CHARS)}`)
    .join("\n\n---\n\n");

  const header = isLecture
    ? `SUBJECT: ${o.subject}\nLECTURE: ${o.code ?? `L${o.n ?? ""}`} — ${o.title}`
    : `SUBJECT: ${o.subject}\nSCOPE: whole-course welcome`;
  return {
    system,
    user: `${header}\n\nOUTLINE:\n${o.blurb ? `${o.blurb}\n\n` : ""}${chs}\n\nCHAPTER NOTES (ground here — do not recite):\n${notes || "(no chapter text provided)"}`,
  };
}

async function callModel(o: Outline, grounded: CorpusChapter[]): Promise<string | null> {
  const { system, user } = modelPrompt(o, grounded);
  /* two attempts — a transient 429/timeout must not degrade the whole
     briefing to the outline-only fallback (which then sticks all day) */
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      /* ZAI.create() sits INSIDE the raced promise — a hung SDK
         connection used to pin this route past any timeout (the radio
         showed "Composing the briefing…" forever). Now the whole
         attempt — SDK boot + model call — is bounded by the clock. */
      const work = (async () => {
        const zai = await ZAI.create();
        const completion = (await zai.chat.completions.create({
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        })) as { choices?: Array<{ message?: { content?: unknown } }> };
        const content = completion?.choices?.[0]?.message?.content;
        return typeof content === "string" ? content.trim() : "";
      })();
      const timed = await Promise.race([
        work.then((v) => ({ ok: true as const, v })),
        new Promise<{ ok: false }>((r) => setTimeout(() => r({ ok: false }), MODEL_TIMEOUT_MS)),
      ]);
      if (!timed.ok || !timed.v) continue; // timeout — retry once
      const words = timed.v.split(/\s+/).length;
      if (words < 40 || words > 420) continue; // degenerate output — retry once
      return sanitizeScript(timed.v);
    } catch (e) {
      if (attempt < 2) {
        /* a 429 quota window is longer than a transient blip — let it breathe */
        const wait = /429|too many/i.test(String((e as Error)?.message)) ? 5000 : 2000;
        await new Promise((r) => setTimeout(r, wait));
      }
    }
  }
  return null;
}

export async function POST(req: Request) {
  const guard = sameOrigin(req) ?? rateLimit(req, "brief", 30, 60_000);
  if (guard) return guard;
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return bad("Request body must be JSON.");
  }
  if (typeof body !== "object" || body === null) return bad("Request body must be a JSON object.");
  const raw = body as Record<string, unknown>;
  const outline = (
    typeof raw.outline === "object" && raw.outline !== null ? raw.outline : raw
  ) as Record<string, unknown>;

  const shelf = clean(outline.shelf, 24);
  const subject = clean(outline.subject, 120);
  const scope = outline.scope === "subject" ? "subject" : "lecture";
  const title = clean(outline.title, MAX_TITLE);
  if (!shelf || !subject || !title) return bad("outline needs shelf, subject and title.");

  const o: Outline = {
    shelf,
    subject,
    scope,
    title: scope === "lecture" ? title : subject,
    code: clean(outline.code, 8) || undefined,
    n: typeof outline.n === "number" && Number.isFinite(outline.n) ? Math.trunc(outline.n) : undefined,
    blurb: clean(outline.blurb, MAX_BLURB) || undefined,
    chapters: Array.isArray(outline.chapters)
      ? outline.chapters
          .slice(0, MAX_CHAPTERS)
          .map((c) => {
            const ch = (typeof c === "object" && c !== null ? c : {}) as Record<string, unknown>;
            return { id: clean(ch.id, 60), label: clean(ch.label, 90), desc: clean(ch.desc, 220) };
          })
          .filter((c) => c.label)
      : undefined,
  };

  /* cache — one briefing per outline version */
  const key = createHash("sha1").update(SCRIPT_VERSION + "\n" + JSON.stringify(o)).digest("hex");
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  if (fs.existsSync(cacheFile)) {
    try {
      const hit = JSON.parse(fs.readFileSync(cacheFile, "utf8")) as {
        script: string;
        sentences: string[];
        words: number;
        grounded: number;
      };
      if (hit?.script && Array.isArray(hit.sentences) && hit.sentences.length) {
        return NextResponse.json({ ...hit, cached: true, source: "cache" });
      }
    } catch {
      /* broken cache line — rewrite below */
    }
  }

  /* ground in the same prose the reader sees */
  const grounded: CorpusChapter[] = [];
  for (const c of o.chapters ?? []) {
    const hit = proseByKey.get(`${o.shelf}:${c.id}`);
    if (hit && !grounded.includes(hit)) grounded.push(hit);
    if (grounded.length >= GROUND_LIMIT) break;
  }

  const fromModel = await callModel(o, grounded);
  const script = fromModel ?? fallbackBriefing(o);
  const sentences = splitSentences(script);
  const words = script.split(/\s+/).filter(Boolean).length;
  const payload = {
    script,
    sentences,
    words,
    grounded: grounded.length,
    cached: false,
    source: fromModel ? "model" : "local",
  };
  /* ONLY model briefings are cached — the outline-only fallback is a
     lifeboat for one request, not a script that sticks until the next
     version bump. A transient model outage must heal on the next play. */
  if (fromModel) {
    try {
      fs.writeFileSync(
        cacheFile,
        JSON.stringify({ script, sentences, words, grounded: grounded.length }),
      );
    } catch {
      /* cache write is best-effort */
    }
  }
  return NextResponse.json(payload);
}
