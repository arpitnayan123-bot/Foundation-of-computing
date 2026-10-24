/* ============================================================
   BUILD THE SEARCH CORPUS — one offline bun script.

   Renders every chapter section of the five subject shelves to
   static markup (renderToStaticMarkup — safe in Node/bun: hooks
   render, effects never run), strips the tags, and slices the
   plain text per chapter by reading each section's own DOM id
   (the same id the ⌘K flash-jump scrolls to). Also walks the
   five question banks and emits one entry per question.

   Output: src/lib/search-corpus.json — committed, so a Vercel
   build never needs to re-run this script. Re-run whenever the
   notes change:

       bun scripts/build-search-corpus.ts
   ============================================================ */

import { createElement, type FunctionComponent } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { CHAPTER_INDEX } from "../src/lib/chapter-index";

/* ---- FoC (Foundation of Computing) — mirror FocApp's imports ---- */
import * as FocPart1 from "../src/components/notes/Part1";
import * as FocPart2 from "../src/components/notes/Part2";
import * as FocPart3 from "../src/components/notes/Part3";
import * as FocPart4 from "../src/components/notes/Part4";
import * as FocPart5 from "../src/components/notes/Part5";
import * as FocPart6 from "../src/components/notes/Part6";
import * as FocPart7 from "../src/components/notes/Part7";
import * as FocPart8 from "../src/components/notes/Part8";
import * as FocPart9 from "../src/components/notes/Part9";
import * as FocPart10 from "../src/components/notes/Part10";

/* ---- ATB — mirror AtbApp's imports ---- */
import * as AtbParts1 from "../src/components/atb/AtbParts1";
import * as AtbParts2 from "../src/components/atb/AtbParts2";
import * as AtbParts3 from "../src/components/atb/AtbParts3";
import * as AtbParts4 from "../src/components/atb/AtbParts4";
import * as AtbParts5 from "../src/components/atb/AtbParts5";
import * as AtbParts6 from "../src/components/atb/AtbParts6";

/* ---- FA — mirror FaApp's imports ---- */
import * as FaParts1 from "../src/components/fa/FaParts1";
import * as FaParts2 from "../src/components/fa/FaParts2";
import * as FaParts3 from "../src/components/fa/FaParts3";
import * as FaParts4 from "../src/components/fa/FaParts4";

/* ---- EBH — mirror EbhApp's imports ---- */
import * as EbhParts1 from "../src/components/ebh/EbhParts1";
import * as EbhParts2 from "../src/components/ebh/EbhParts2";
import * as EbhParts3 from "../src/components/ebh/EbhParts3";
import * as EbhParts4 from "../src/components/ebh/EbhParts4";

/* ---- STM — mirror StmApp's imports ---- */
import * as StmParts1 from "../src/components/stm/StmParts1";
import * as StmParts2 from "../src/components/stm/StmParts2";
import * as StmParts3 from "../src/components/stm/StmParts3";
import * as StmParts4 from "../src/components/stm/StmParts4";
import * as StmParts5 from "../src/components/stm/StmParts5";
import * as StmParts6 from "../src/components/stm/StmParts6";
import * as StmParts7 from "../src/components/stm/StmParts7";
import * as StmParts8 from "../src/components/stm/StmParts8";

/* ---- question banks ---- */
import { EXAM_BANKS } from "../src/components/notes/questions";
import { ATB_EXAM_BANKS } from "../src/components/atb/questions";
import { FA_EXAM_BANKS } from "../src/components/fa/questions";
import { EBH_EXAM_BANKS } from "../src/components/ebh/questions";
import { STM_EXAM_BANKS } from "../src/components/stm/questions";

/* ============================================================
   Types + config
   ============================================================ */

interface ChapterRow {
  shelfId: string;
  chapterKey: string;
  label: string;
  group: string;
  groupLabel: string;
  text: string;
}

interface QuestionRow {
  shelfId: string;
  questionId: string;
  group: string;
  bankTitle: string;
  prompt: string;
  text: string;
}

interface CorpusFile {
  generatedAt: string;
  chapters: ChapterRow[];
  questions: QuestionRow[];
}

/** per-chapter text ceiling — long chapters truncate at a word boundary */
const MAX_CHAPTER_CHARS = 20_000;
/** per-question extra-text ceiling (prompt is kept in full) */
const MAX_QUESTION_CHARS = 1_600;

/** every module whose named exports may hold chapter sections,
 *  grouped exactly the way each subject App composes them */
const SHELF_PART_MODULES: Record<string, Record<string, unknown>[]> = {
  foc: [FocPart1, FocPart2, FocPart3, FocPart4, FocPart5, FocPart6, FocPart7, FocPart8, FocPart9, FocPart10],
  atb: [AtbParts1, AtbParts2, AtbParts3, AtbParts4, AtbParts5, AtbParts6],
  fa: [FaParts1, FaParts2, FaParts3, FaParts4],
  ebh: [EbhParts1, EbhParts2, EbhParts3, EbhParts4],
  stm: [StmParts1, StmParts2, StmParts3, StmParts4, StmParts5, StmParts6, StmParts7, StmParts8],
};

/* ============================================================
   Markup → plain text
   ============================================================ */

function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&"); // last — undoes the escaping of the others
}

function stripTags(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

/** cap long text at a word boundary so no term is cut mid-way */
function cap(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return `${text.slice(0, cut > 0 ? cut : max)} …`;
}

/* ============================================================
   Chapter slices — render each *Section component, read its id
   ============================================================ */

type AnyComponent = FunctionComponent;

function renderShelfSections(shelfId: string): Map<string, string> {
  const texts = new Map<string, string>();
  const modules = SHELF_PART_MODULES[shelfId] ?? [];
  for (const mod of modules) {
    for (const [name, value] of Object.entries(mod)) {
      /* chapter sections are the named *Section components — heroes,
         footers and shared helpers never carry the suffix */
      if (!/Section$/.test(name) || typeof value !== "function") continue;
      try {
        const markup = renderToStaticMarkup(createElement(value as AnyComponent));
        const id = markup.match(/<section[^>]*\bid="([^"]+)"/)?.[1];
        if (!id) {
          console.warn(`[${shelfId}] ${name}: no <section id> in markup — skipped`);
          continue;
        }
        if (!texts.has(id)) texts.set(id, cap(stripTags(markup), MAX_CHAPTER_CHARS));
      } catch (err) {
        console.warn(`[${shelfId}] ${name}: render failed — left out of the corpus (${String(err)})`);
      }
    }
  }
  return texts;
}

/* ============================================================
   Question bank walk
   ============================================================ */

interface BankLike {
  group: string;
  title: string;
  questions: {
    id: string;
    q: string;
    code?: string;
    options?: string[];
    answerText?: string;
    solution?: string;
    explain?: string;
  }[];
}

function questionRows(shelfId: string, banks: Record<string, BankLike>): QuestionRow[] {
  const rows: QuestionRow[] = [];
  for (const bank of Object.values(banks)) {
    for (const q of bank.questions) {
      const extra = [q.code, q.options?.join(" "), q.answerText, q.solution, q.explain]
        .filter((x): x is string => typeof x === "string" && x.length > 0)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      rows.push({
        shelfId,
        questionId: q.id,
        group: bank.group,
        bankTitle: bank.title,
        prompt: q.q.replace(/\s+/g, " ").trim(),
        text: cap(extra, MAX_QUESTION_CHARS),
      });
    }
  }
  return rows;
}

/* ============================================================
   Main
   ============================================================ */

const BANKS_BY_SHELF: Record<string, Record<string, BankLike>> = {
  foc: EXAM_BANKS,
  atb: ATB_EXAM_BANKS,
  fa: FA_EXAM_BANKS,
  ebh: EBH_EXAM_BANKS,
  stm: STM_EXAM_BANKS,
};

const started = Date.now();
const chapters: ChapterRow[] = [];
const questions: QuestionRow[] = [];
const perShelf: Record<string, { chapters: number; withText: number; chars: number; questions: number }> = {};

for (const shelfId of Object.keys(SHELF_PART_MODULES)) {
  const texts = renderShelfSections(shelfId);
  const stats = { chapters: 0, withText: 0, chars: 0, questions: 0 };
  for (const entry of CHAPTER_INDEX.filter((c) => c.subject === shelfId)) {
    const text = texts.get(entry.section) ?? "";
    if (text) {
      stats.withText += 1;
      stats.chars += text.length;
    } else {
      console.warn(`[${shelfId}] chapter "${entry.section}" (${entry.label}) got NO text — emitted empty`);
    }
    chapters.push({
      shelfId,
      chapterKey: entry.section,
      label: entry.label,
      group: entry.group,
      groupLabel: entry.groupLabel,
      text,
    });
    stats.chapters += 1;
  }
  const bank = BANKS_BY_SHELF[shelfId];
  if (bank) {
    const rows = questionRows(shelfId, bank);
    questions.push(...rows);
    stats.questions = rows.length;
  }
  perShelf[shelfId] = stats;
}

const corpus: CorpusFile = {
  generatedAt: new Date().toISOString(),
  chapters,
  questions,
};

const outPath = fileURLToPath(new URL("../src/lib/search-corpus.json", import.meta.url));
const written = JSON.stringify(corpus);
await writeFile(outPath, `${written}\n`, "utf8");

/* ---- report ---- */
const totalChars = chapters.reduce((n, c) => n + c.text.length, 0);
console.log("\n=== search corpus ===");
for (const [shelfId, s] of Object.entries(perShelf)) {
  console.log(
    `${shelfId}: ${s.chapters} chapters (${s.withText} with text, ${(s.chars / 1024).toFixed(1)} KB) · ${s.questions} questions`
  );
}
console.log(
  `total: ${chapters.length} chapters · ${questions.length} questions · ` +
    `${(totalChars / 1024).toFixed(1)} KB of note text · json src/lib/search-corpus.json ` +
    `${(new TextEncoder().encode(written).length / 1024).toFixed(1)} KB · built in ${Date.now() - started} ms`
);
