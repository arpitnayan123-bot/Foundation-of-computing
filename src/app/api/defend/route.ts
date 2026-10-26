/* ============================================================
   DEFEND IT — the Oxford tutorial, inside the cockpit.

   POST /api/defend   { action: "probe" | "grade", shelfId, chapterKey, history? }
     probe  → 200 { reply }        the tutor's next probing question
     grade  → 200 { feedback, verdict: { grade, score, gaps } }
     → 400 { error }  bad input / unknown chapter / notes missing

   The Oxford method: the reader explains a chapter in their own
   words; the tutor answers only with pointed follow-up questions
   (why? what if? the counter-example) that expose weak spots
   without naming them. When the reader calls for the verdict,
   the whole defense is graded against the committed chapter
   notes — the ONLY source, exactly like /api/ask.

   z-ai-web-dev-sdk runs HERE ONLY — never from client code.
   ============================================================ */

import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import corpus from "@/lib/search-corpus.json";
import { CHAPTER_INDEX } from "@/lib/chapter-index";

export const dynamic = "force-dynamic";

const MAX_TURN_CHARS = 1500;
const MAX_TURNS = 10;
/** per-chapter quote cap for the tutor's source */
const MAX_CHAPTER_CHARS = 4500;

interface CorpusChapter {
  shelfId: string;
  chapterKey: string;
  label: string;
  group: string;
  groupLabel: string;
  text: string;
}

const chapters = ((corpus as { chapters?: CorpusChapter[] }).chapters ?? []).filter(
  (c) => c && typeof c.text === "string" && c.text.trim() && typeof c.chapterKey === "string"
);

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return text.slice(0, cut > 0 ? cut : max);
}

interface Turn {
  role: "user" | "assistant";
  content: string;
}

function parseHistory(raw: unknown): Turn[] {
  const turns: Turn[] = [];
  if (!Array.isArray(raw)) return turns;
  for (const turn of raw.slice(-MAX_TURNS)) {
    if (typeof turn !== "object" || turn === null) continue;
    const t = turn as Record<string, unknown>;
    const role = t.role === "assistant" ? "assistant" : t.role === "user" ? "user" : null;
    if (!role || typeof t.content !== "string") continue;
    const content = truncateAtWord(t.content.trim(), MAX_TURN_CHARS);
    if (content) turns.push({ role, content });
  }
  return turns;
}

/** resolve a chapter entry + its corpus text */
function chapterNotes(shelfId: string, chapterKey: string): { label: string; groupLabel: string; text: string } | null {
  const entry = CHAPTER_INDEX.find((c) => c.subject === shelfId && c.section === chapterKey);
  if (!entry) return null;
  const text = chapters.find((c) => c.shelfId === shelfId && c.chapterKey === chapterKey)?.text.trim();
  if (!text) return null;
  return { label: entry.label, groupLabel: entry.groupLabel, text: truncateAtWord(text, MAX_CHAPTER_CHARS) };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return bad("Request body must be JSON.");
  }
  if (typeof body !== "object" || body === null) {
    return bad("Request body must be a JSON object.");
  }
  const { action, shelfId, chapterKey, history } = body as Record<string, unknown>;
  if (action !== "probe" && action !== "grade") {
    return bad("action must be \"probe\" or \"grade\".");
  }
  if (typeof shelfId !== "string" || !shelfId || typeof chapterKey !== "string" || !chapterKey) {
    return bad("Pick a shelf and a chapter to defend.");
  }
  const notes = chapterNotes(shelfId, chapterKey);
  if (!notes) {
    return bad("That chapter's notes are not in the corpus — pick another chapter.");
  }
  const turns = parseHistory(history);
  if (turns.filter((t) => t.role === "user").length === 0) {
    return bad("Explain the chapter first — the tutorial starts with your words.");
  }

  const studentTurns = turns.filter((t) => t.role === "user").length;
  const transcript = turns
    .map((t) => `${t.role === "user" ? "STUDENT" : "TUTOR"}: ${t.content}`)
    .join("\n\n");

  const system =
    action === "probe"
      ? `You are an Oxford don running a weekly tutorial on "${notes.label}" (${notes.groupLabel}) ` +
        `for a student of IIT Jodhpur's B.S. in Management & Technology. The student is DEFENDING ` +
        `their understanding by explaining the chapter in their own words. The chapter notes below ` +
        `are the ONLY source. Your replies are ALWAYS one pointed follow-up question — why does it ` +
        `work that way, what would happen if a condition flipped, where does it break, a quick ` +
        `counter-example — grounded in the notes, aimed at the weakest spot of what the student ` +
        `just said. If their statement contains an error, your question exposes it WITHOUT naming ` +
        `the error. Max 70 words, plain text, cite the chapter once at most like (${notes.label}). ` +
        `Never lecture, never summarise, never reveal whole explanations. ` +
        `This is tutorial turn ${studentTurns} — make it count.`
      : `You are an Oxford don closing a tutorial on "${notes.label}" (${notes.groupLabel}) for a ` +
        `student of IIT Jodhpur's B.S. in Management & Technology. Grade the student's defense ` +
        `(their explanation plus how they handled your probing) against the chapter notes below — ` +
        `the ONLY source. Rubric: accuracy against the notes; coverage of the chapter's main ideas; ` +
        `how well the student adapted under probing. ` +
        `Write 3-5 short plain-text paragraphs of verdict: what held up, where it cracked, what to ` +
        `study next — honest, specific, kind. Then finish with EXACTLY this line and nothing after it:\n` +
        `VERDICT: {"grade":"green|amber|red","score":0-100,"gaps":["short gap 1","short gap 2"]}\n` +
        `score guide: green 80-100 (accurate, complete, probed well) · amber 60-79 (mostly there, ` +
        `real gaps) · red below 60 (shaky ground). gaps = the specific missing ideas.`;

  const messages = [
    { role: "system" as const, content: system },
    {
      role: "user" as const,
      content: `CHAPTER NOTES:\n\n${notes.text}\n\n---\n\nTUTORIAL TRANSCRIPT SO FAR:\n\n${transcript}\n\n---\n\n${
        action === "probe"
          ? "Your next probing question:"
          : "The student has called for the verdict. Grade the defense."
      }`,
    },
  ];

  try {
    const zai = await ZAI.create();
    const completion = (await zai.chat.completions.create({ messages })) as {
      choices?: Array<{ message?: { content?: unknown } }>;
    };
    const content = completion?.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return bad("The tutor drew a blank — try again in a moment.", 502);
    }
    const text = content.trim();

    if (action === "probe") {
      return NextResponse.json({ reply: text });
    }

    /* pull the VERDICT line out of the prose */
    const match = text.match(/VERDICT:\s*(\{[\s\S]*?\})\s*$/);
    if (match) {
      try {
        const parsed = JSON.parse(match[1]) as { grade?: unknown; score?: unknown; gaps?: unknown };
        const grade = parsed.grade === "green" || parsed.grade === "amber" || parsed.grade === "red" ? parsed.grade : "amber";
        const score = typeof parsed.score === "number" ? Math.max(0, Math.min(100, Math.round(parsed.score))) : null;
        const gaps = Array.isArray(parsed.gaps)
          ? parsed.gaps.filter((g): g is string => typeof g === "string" && g.trim().length > 0).slice(0, 5)
          : [];
        return NextResponse.json({
          feedback: text.slice(0, text.lastIndexOf("VERDICT:")).trim(),
          verdict: { grade, ...(score !== null ? { score } : {}), gaps },
        });
      } catch {
        /* malformed verdict JSON — return the prose ungraded */
      }
    }
    return NextResponse.json({ feedback: text, verdict: null });
  } catch {
    return bad("The tutor is unreachable — the model call failed. Try again in a moment.", 502);
  }
}
