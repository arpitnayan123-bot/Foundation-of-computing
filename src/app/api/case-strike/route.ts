/* ============================================================
   CASE STRIKE — the HBS cold call, inside the cockpit.

   POST /api/case-strike   { action: "brief" | "grade", shelfId, chapterKey, caseText?, answer? }
     brief  → 200 { caseText, concepts: string[] }
     grade  → 200 { debrief, rubric: { verdict, score, strong, grow } }
     → 400 { error }  bad input / unknown chapter / notes missing

   The Harvard Business School method, compressed: a decision-
   forcing scenario built FROM the committed chapter notes —
   incomplete by design, ending in a decision with no single
   right answer. The reader answers as the protagonist; the
   debrief grades the REASONING (did they use the chapter's
   frameworks? acknowledge trade-offs? commit to a decision?),
   never the wording.

   The grading contract returns a structured RUBRIC line the
   route parses out of the prose, same discipline as /api/defend.

   z-ai-web-dev-sdk runs HERE ONLY — never from client code.
   ============================================================ */

import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import corpus from "@/lib/search-corpus.json";
import { CHAPTER_INDEX } from "@/lib/chapter-index";

export const dynamic = "force-dynamic";

const MAX_CASE_CHARS = 6000;
const MAX_ANSWER_CHARS = 4000;
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
  const { action, shelfId, chapterKey, caseText, answer } = body as Record<string, unknown>;
  if (action !== "brief" && action !== "grade") {
    return bad("action must be \"brief\" or \"grade\".");
  }
  if (typeof shelfId !== "string" || !shelfId || typeof chapterKey !== "string" || !chapterKey) {
    return bad("Pick a shelf and a chapter for the case.");
  }
  const notes = chapterNotes(shelfId, chapterKey);
  if (!notes) {
    return bad("That chapter's notes are not in the corpus — pick another chapter.");
  }

  const messages =
    action === "brief"
      ? [
          {
            role: "system" as const,
            content:
              `You write HBS-style decision cases for a management course at IIT Jodhpur ` +
              `(B.S. in Management & Technology). Build ONE case from the chapter notes below — the ` +
              `ONLY source for its concepts. Rules: ` +
              `(1) 150-220 words, plain text, no markdown headings. ` +
              `(2) Written from inside a real-feeling Indian business moment (a chai chain, a D2C ` +
              `brand, a regional airline, a college fest, a kirana-turned-quick-commerce…), with ` +
              `concrete numbers and constraints, deliberately incomplete. ` +
              `(3) The case must FORCE a decision that the chapter's ideas (and only they) equip ` +
              `the reader to make. It ends with a one-line question starting "What do you do?". ` +
              `(4) Then finish with EXACTLY this line and nothing after it:\n` +
              `CONCEPTS: ["concept from the notes","concept from the notes"]\n` +
              `(2-4 items — the frameworks from the notes the decision tests).`,
          },
          {
            role: "user" as const,
            content: `CHAPTER: "${notes.label}" (${notes.groupLabel})\n\nCHAPTER NOTES:\n\n${notes.text}`,
          },
        ]
      : [
          {
            role: "system" as const,
            content:
              `You are the HBS professor closing a cold call. Grade the student's answer to the case ` +
              `below against the chapter notes — the ONLY source. Grade the REASONING, never the ` +
              `wording: does the answer use the chapter's frameworks, weigh trade-offs, commit to a ` +
              `decision, and acknowledge what the case leaves unknown? ` +
              `Write 3-4 short plain-text paragraphs of debrief: what the answer got right, where ` +
              `the reasoning slipped, what a sharper answer would have said — direct, specific, ` +
              `never cruel. Then finish with EXACTLY this line and nothing after it:\n` +
              `RUBRIC: {"verdict":"sharp|solid|rough","score":0-100,"strong":["one strength"],"grow":["one improvement"]}\n` +
              `score guide: sharp 80-100 · solid 60-79 · rough below 60.`,
          },
          {
            role: "user" as const,
            content:
              `CHAPTER NOTES:\n\n${notes.text}\n\n---\n\nTHE CASE:\n\n${truncateAtWord(
                typeof caseText === "string" ? caseText : "",
                MAX_CASE_CHARS
              )}\n\n---\n\nTHE STUDENT'S ANSWER:\n\n${truncateAtWord(
                typeof answer === "string" ? answer.trim() : "",
                MAX_ANSWER_CHARS
              )}\n\n---\n\nThe debrief:`,
          },
        ];

  if (action === "grade" && (typeof answer !== "string" || answer.trim().length < 60)) {
    return bad("Write at least 60 characters before facing the cold call.");
  }

  try {
    const zai = await ZAI.create();
    const completion = (await zai.chat.completions.create({ messages: messages as never })) as {
      choices?: Array<{ message?: { content?: unknown } }>;
    };
    const content = completion?.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return bad("The case room went quiet — try again in a moment.", 502);
    }
    const text = content.trim();

    if (action === "brief") {
      const match = text.match(/CONCEPTS:\s*(\[[\s\S]*?\])\s*$/);
      let concepts: string[] = [];
      if (match) {
        try {
          const parsed = JSON.parse(match[1]) as unknown;
          concepts = Array.isArray(parsed)
            ? parsed.filter((c): c is string => typeof c === "string" && c.trim().length > 0).slice(0, 4)
            : [];
        } catch {
          /* prose-only fallback below */
        }
      }
      return NextResponse.json({
        caseText: match ? text.slice(0, text.lastIndexOf("CONCEPTS:")).trim() : text,
        concepts,
      });
    }

    const match = text.match(/RUBRIC:\s*(\{[\s\S]*?\})\s*$/);
    if (match) {
      try {
        const parsed = JSON.parse(match[1]) as {
          verdict?: unknown;
          score?: unknown;
          strong?: unknown;
          grow?: unknown;
        };
        const verdict = parsed.verdict === "sharp" || parsed.verdict === "solid" || parsed.verdict === "rough" ? parsed.verdict : "solid";
        const score = typeof parsed.score === "number" ? Math.max(0, Math.min(100, Math.round(parsed.score))) : null;
        const strong = Array.isArray(parsed.strong)
          ? parsed.strong.filter((s): s is string => typeof s === "string" && s.trim().length > 0).slice(0, 3)
          : [];
        const grow = Array.isArray(parsed.grow)
          ? parsed.grow.filter((s): s is string => typeof s === "string" && s.trim().length > 0).slice(0, 3)
          : [];
        return NextResponse.json({
          debrief: text.slice(0, text.lastIndexOf("RUBRIC:")).trim(),
          rubric: { verdict, ...(score !== null ? { score } : {}), strong, grow },
        });
      } catch {
        /* malformed rubric JSON — return the prose ungraded */
      }
    }
    return NextResponse.json({ debrief: text, rubric: null });
  } catch {
    return bad("The case room is unreachable — the model call failed. Try again in a moment.", 502);
  }
}
