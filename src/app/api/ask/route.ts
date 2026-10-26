/* ============================================================
   ASK THE ATLAS — the cockpit tutor, grounded in the notes.

   POST /api/ask   { question, history?, mode? }
     mode "answer"   (default) → 200 { answer, sources: [...] }
     mode "socratic"           → the CS50-duck posture: lead,
       don't leak — one guiding question + one grounded hint,
       escalating only as the reader pushes; the full answer
       is unlocked only by an explicit "reveal".
     → 400 { error }  bad input (empty/oversized question…)
     → 200 { answer: null, sources: [] }  nothing in the notes matches

   Retrieval: Minisearch over the SAME committed corpus the ⌘K
   palette full-text search indexes (lib/search-corpus.json),
   so the tutor and the reader always see the same notes. The
   top chapters become the ONLY source the model may quote;
   they travel back to the client as citation chips that
   deep-link straight into the shelves.

   Honesty contract: if retrieval lands nothing, the route
   answers "not in the notes" WITHOUT calling the model — the
   tutor can never invent an answer it didn't ground.

   z-ai-web-dev-sdk runs HERE ONLY — never from client code.
   ============================================================ */

import { NextResponse } from "next/server";
import MiniSearch from "minisearch";
import ZAI from "z-ai-web-dev-sdk";
import corpus from "@/lib/search-corpus.json";

export const dynamic = "force-dynamic";

const MAX_QUESTION_CHARS = 500;
const MAX_HISTORY_TURNS = 4;
const MAX_HISTORY_TURN_CHARS = 1200;
/** per-chapter quote cap — four chapters stay inside a sane window */
const MAX_CHAPTER_CHARS = 3200;
const SOURCE_COUNT = 4;

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

const chapterById = new Map<string, CorpusChapter>();
const mini = new MiniSearch({
  fields: ["label", "text"],
  storeFields: ["shelfId", "chapterKey", "label", "groupLabel"],
  searchOptions: { prefix: true, fuzzy: 0.2, boost: { label: 3 } },
});
chapters.forEach((c, i) => {
  const id = `${c.shelfId}:${c.chapterKey}:${i}`;
  chapterById.set(id, c);
  mini.add({ id, shelfId: c.shelfId, chapterKey: c.chapterKey, label: c.label, groupLabel: c.groupLabel, text: c.text });
});

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return text.slice(0, cut > 0 ? cut : max);
}

/** Top chapters for a question — AND first (precision), OR as
 *  the fallback swing (recall) when AND lands nothing. */
function retrieve(question: string): CorpusChapter[] {
  let hits = mini.search(question);
  if (hits.length === 0) {
    hits = mini.search(question, { combineWith: "OR" });
  }
  const out: CorpusChapter[] = [];
  for (const hit of hits) {
    const chapter = chapterById.get(String(hit.id));
    if (chapter) out.push(chapter);
    if (out.length >= SOURCE_COUNT) break;
  }
  return out;
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
  const { question, history, mode } = body as Record<string, unknown>;
  if (typeof question !== "string" || !question.trim()) {
    return bad("Ask a question first.");
  }
  const q = question.trim();
  if (q.length > MAX_QUESTION_CHARS) {
    return bad(`Keep the question under ${MAX_QUESTION_CHARS} characters.`);
  }
  const socratic = mode === "socratic";

  /* history: last few turns, trimmed, roles pinned — follow-up
     questions ("and why?") stay grounded in the same notes */
  const turns: Array<{ role: "user" | "assistant"; content: string }> = [];
  if (Array.isArray(history)) {
    for (const turn of history.slice(-MAX_HISTORY_TURNS)) {
      if (typeof turn !== "object" || turn === null) continue;
      const t = turn as Record<string, unknown>;
      const role = t.role === "assistant" ? "assistant" : t.role === "user" ? "user" : null;
      if (!role || typeof t.content !== "string") continue;
      const content = truncateAtWord(t.content.trim(), MAX_HISTORY_TURN_CHARS);
      if (content) turns.push({ role, content });
    }
  }

  const sources = retrieve(q);
  if (sources.length === 0) {
    /* the honest miss — no model call, no invented answer */
    return NextResponse.json({
      answer: null,
      sources: [],
    });
  }

  const notesText = sources
    .map((c) => `### ${c.label} (${c.groupLabel})\n${truncateAtWord(c.text.trim(), MAX_CHAPTER_CHARS)}`)
    .join("\n\n---\n\n");

  const systemPrompt = socratic
    ? `You are "the Atlas tutor" — the copilot inside the revision notes of IIT Jodhpur's ` +
      `B.S. in Management & Technology, running in SOCRATIC mode. You behave like CS50's duck ` +
      `debugger: a good tutor leads students toward answers instead of spoiling them. Rules: ` +
      `(1) Ground every hint in the chapter notes provided and cite the chapter you drew on, like ` +
      `(MKTG · Need · Want · Demand), right after the sentence that uses it. ` +
      `(2) NEVER give the complete answer to the reader's question. Reply in at most ~120 words: ` +
      `start with one grounded hint (a definition, a contrast, an example from the notes), then end ` +
      `with ONE guiding question that moves the reader a step forward. ` +
      `(3) Escalate gently: if the conversation shows you already nudged this reader, give a stronger, ` +
      `more concrete hint — but still stop short of the full answer. ` +
      `(4) Reveal fully ONLY when the reader explicitly asks you to ("reveal", "just tell me", ` +
      `"give up"): then give the complete grounded answer, cited, plus one line starting "Check yourself:". ` +
      `(5) If the notes do not cover the question, say so in one plain line — never fill gaps from ` +
      `outside knowledge. Plain text only — no markdown headings, no code fences unless about code.`
    : `You are "the Atlas tutor" — the copilot inside the revision notes of IIT Jodhpur's ` +
      `B.S. in Management & Technology. Answer the reader's question using ONLY the ` +
      `chapter notes provided. Rules: ` +
      `(1) Ground every claim in the notes and cite the chapter you drew on, like ` +
      `(MKTG · Need · Want · Demand), right after the sentence that uses it. ` +
      `(2) If the notes do not cover the question, say so in one plain line and point ` +
      `to the closest chapter you were given — never fill gaps from outside knowledge. ` +
      `(3) Teach in the notes' own voice: tight, vivid, using their examples ` +
      `(chai, Surf Excel, Accor, Bajaj Auto, Pearl's books…). ` +
      `(4) Plain text only — short paragraphs, "-" bullets where lists help, no markdown ` +
      `headings, no code fences unless the question is about code. ` +
      `(5) Close with one short line starting "Check yourself:" — a one-sentence ` +
      `self-test question over the material.`

  const messages = [
    {
      role: "system" as const,
      content: systemPrompt,
    },
    ...turns.map((t) => ({ role: t.role, content: t.content })),
    {
      role: "user" as const,
      content: `QUESTION:\n${q}\n\nCHAPTER NOTES:\n${notesText}`,
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
    return NextResponse.json({
      answer: content.trim(),
      sources: sources.map((c) => ({
        shelfId: c.shelfId,
        chapterKey: c.chapterKey,
        label: c.label,
        groupLabel: c.groupLabel,
      })),
    });
  } catch {
    return bad("The tutor is unreachable — the model call failed. Try again in a moment.", 502);
  }
}
