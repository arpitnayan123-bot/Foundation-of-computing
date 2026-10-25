/* ============================================================
   CARD FORGE — generate flashcards from one chapter's notes.

   POST /api/generate-cards
     body: { shelfId, chapterKey, count }   (count ∈ 4/8/12, default 8)
     → 200 { cards: [{ q, a }, …] }
     → 400 { error }  bad input (unknown chapter, bad count…)
     → 502 { error }  the model call failed or replied unusably

   The chapter text comes from the committed search corpus
   (lib/search-corpus.json — the exact bodies the ⌘K full-text
   search indexes), so drafts always come from the same notes
   the reader studied. z-ai-web-dev-sdk runs HERE ONLY — it is
   never imported from client code, and the reader's accepted
   cards never leave their browser afterwards.
   ============================================================ */

import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import corpus from "@/lib/search-corpus.json";
import { CHAPTER_INDEX } from "@/lib/chapter-index";

const COUNTS = [4, 8, 12] as const;
const DEFAULT_COUNT = 8;
/** keep the prompt inside a sane window; cut at a word boundary */
const MAX_CHAPTER_CHARS = 12_000;

interface DraftCard {
  q: string;
  a: string;
}

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return text.slice(0, cut > 0 ? cut : max);
}

/** Robust reply parsing: strip markdown fences, take the JSON
 *  array, keep only well-formed { q, a } strings, trim, cap. */
function parseCards(raw: string, count: number): DraftCard[] {
  let text = raw.trim();
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("the reply held no JSON array");
  }
  const parsed: unknown = JSON.parse(text.slice(start, end + 1));
  if (!Array.isArray(parsed)) {
    throw new Error("the reply is not an array");
  }
  const cards: DraftCard[] = [];
  for (const item of parsed) {
    if (typeof item !== "object" || item === null) continue;
    const o = item as Record<string, unknown>;
    const q = typeof o.q === "string" ? o.q.trim() : "";
    const a = typeof o.a === "string" ? o.a.trim() : "";
    if (!q || !a) continue;
    cards.push({ q, a });
    if (cards.length >= count) break;
  }
  return cards;
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
  const { shelfId, chapterKey, count } = body as Record<string, unknown>;
  if (typeof shelfId !== "string" || typeof chapterKey !== "string" || !shelfId || !chapterKey) {
    return bad("Pick a shelf and a chapter before forging.");
  }
  const n = count === undefined ? DEFAULT_COUNT : count;
  if (typeof n !== "number" || !(COUNTS as readonly number[]).includes(n)) {
    return bad("count must be 4, 8 or 12.");
  }
  const chapter = CHAPTER_INDEX.find((c) => c.subject === shelfId && c.section === chapterKey);
  if (!chapter) {
    return bad("Unknown chapter — pick one from the chapter catalog.");
  }
  const entry = corpus.chapters.find((c) => c.shelfId === shelfId && c.chapterKey === chapterKey);
  if (!entry || !entry.text.trim()) {
    return bad("That chapter's notes are not in the corpus yet — regenerate the corpus first.");
  }

  const chapterText = truncateAtWord(entry.text.trim(), MAX_CHAPTER_CHARS);
  const messages = [
    {
      role: "system" as const,
      content:
        `You are an exam-prep card writer working from one chapter of university revision notes. ` +
        `Write exactly ${n} flashcards that test THIS chapter's content, mixing direct recall ` +
        `(definitions, terms, lists, why-it-matters) with short application questions grounded in the ` +
        `chapter's own examples. Rules: each card is a JSON object {"q": "...", "a": "..."}; ` +
        `the question must be self-contained — restate any needed context, never say "according to the text"; ` +
        `the answer is concise, 1–3 sentences, no filler; cover different parts of the chapter, not one paragraph. ` +
        `Respond with ONLY a JSON array — no prose, no markdown fences.`,
    },
    {
      role: "user" as const,
      content: `Chapter: "${chapter.label}" (${chapter.groupLabel})\n\nChapter notes:\n\n${chapterText}`,
    },
  ];

  try {
    const zai = await ZAI.create();
    const completion = (await zai.chat.completions.create({ messages })) as {
      choices?: Array<{ message?: { content?: unknown } }>;
    };
    const content = completion?.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return bad("The model returned an empty reply — try again later.", 502);
    }
    const cards = parseCards(content, n);
    if (cards.length === 0) {
      return bad("The model's reply held no usable cards — try again later.", 502);
    }
    return NextResponse.json({ cards });
  } catch {
    return bad("The forge is unreachable — the model call failed. Try again later.", 502);
  }
}
