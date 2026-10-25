"use client";

/* ============================================================
   FA — the lecture sequence (shelf 03).

   "Financial Accounting" is taught as sixteen pen-paper
   lectures, and this one table maps each lecture to the
   section it owns. The reader picks a lecture in the hero and
   the page below renders exactly that lecture's chapter.
   Editing this table re-maps the whole reader.

   Chapter ids/labels/descs are IDENTICAL to the FaApp GROUPS
   table — the search index, the progress store, the ⌘K
   palette and the SM-2 cards all key off them.
   ============================================================ */

export interface FaLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface FaLecture {
  id: string; // "l1".."l16"
  n: number; // lecture number
  code: string; // badge text: "L1".."L16"
  title: string;
  blurb: string;
  chapters: FaLectureChapter[];
}

export const FA_LECTURES: FaLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Why Accounting Exists — the Five Openings",
    blurb:
      "No definitions yet: five rooms, five arguments — Priya & Rohan's inherited factory, Ramesh's notebook and the ₹15 lakh investor — every one ending at the same question: what did the business really earn, and who can trust the number?",
    chapters: [
      { id: "why", label: "Why accounting?", desc: "Five openings — every one ends at the same question" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "The Four Measurement Assumptions",
    blurb:
      "Accounting measures only what affects the financial position — and it measures on four assumptions: reporting entity, going concern, periodicity and money measurement. Meet all four, then learn to spot the violation.",
    chapters: [
      { id: "assumptions", label: "4 assumptions", desc: "Entity · going concern · periodicity · money measurement" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "The Reporting Entity & Going Concern",
    blurb:
      "Two of the four assumptions do the heaviest lifting: the boundary that draws the business apart from its owner, and the quiet promise to continue that justifies recording everything at cost.",
    chapters: [
      { id: "entity-concern", label: "Entity & concern", desc: "The boundary — and the promise to continue" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Periodicity & the Matching Idea",
    blurb:
      "Investors cannot wait a lifetime for results, so the business's long story is chopped into artificial years — and every chop creates a question: which period owns which cost? The match that follows settles it.",
    chapters: [
      { id: "periodicity", label: "Periods & matching", desc: "Time, cut into periods — and the match that follows" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "The Dual Aspect Concept",
    blurb:
      "A starts with ₹10,000 and two things happen at once: the business holds cash, and it owes that cash to its proprietor. One idea — and the whole of double-entry book-keeping falls out of it.",
    chapters: [
      { id: "dual-aspect", label: "Dual aspect", desc: "Every rupee tells two stories" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Assets, Liabilities & Equity — the Three Elements",
    blurb:
      "Every account in every ledger belongs to one of three families. Learn what admits a resource into each family, and you can classify anything a business will ever do.",
    chapters: [
      { id: "elements", label: "The three elements", desc: "Assets, liabilities & equity — the whole cast" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "The Accounting Equation, Worked",
    blurb:
      "The equation is not decoration, it is a solving machine: Hot Chocolate, Abraham and the Hot Chocolate & Coffee Corner books — find the missing figure, close the balance sheet, prove the totals.",
    chapters: [
      { id: "equation-lab", label: "Equation, worked", desc: "Hot Chocolate · Abraham · Coffee Corner" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Transaction Effects — the Four Moves",
    blurb:
      "Every transaction the course will ever show you is one of a handful of patterns: two sides rise together, or one side reshuffles itself. Meet the patterns — then drive the equation machine yourself.",
    chapters: [
      { id: "effects", label: "Transaction effects", desc: "The four moves — run the equation machine" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "The Journal — Recording the Day",
    blurb:
      "Equation approach or traditional approach, both land in the same place: a day book where every event is written with its two effects, the day it happens. The Vogue Company's pipeline, entry by entry.",
    chapters: [
      { id: "journal", label: "Journal", desc: "The pipeline and the day book — Vogue Company" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "The Ledger — Posting to the T-Account",
    blurb:
      "The journal records in time order; the ledger regroups by account. Open one page per account, post every debit and credit — the Cash T-account, for real — and each page ends with a balance that speaks.",
    chapters: [
      { id: "ledger", label: "Ledger", desc: "Posting — the Cash T-account, for real" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "The Five Financial Statements",
    blurb:
      "Five statements work together to tell one financial story. Meet Softomation — one small company, five transactions — and watch the same month ripple through every statement it touches.",
    chapters: [
      { id: "statements", label: "Five statements", desc: "One month of transactions, five shapes" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "The Trial Balance — Do the Columns Agree?",
    blurb:
      "The third phase of the process: after posting, a statement lists the debit and credit balance of every account at a point in time. If double entry has been honoured the totals must meet — sort Pearl's books and see.",
    chapters: [
      { id: "trial-balance", label: "Trial balance", desc: "Do the columns agree? — sort Pearl's books" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Adjusting Entries — Deferrals & Accruals",
    blurb:
      "Cash does not always move in the period its revenue or expense belongs to. Split the prepaid rupee, book the unearned rent, accrue what is owed — the books catch up with reality before any statement is allowed to speak.",
    chapters: [
      { id: "adjusting", label: "Adjusting entries", desc: "Deferrals & accruals — split the prepaid rupee" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Final Accounts — Two Questions, Two Statements",
    blurb:
      "Everything the course has built — journal, ledger, trial balance, adjustments — now gets asked its purpose: what did the operations earn, and where does the enterprise stand? Two statements answer.",
    chapters: [
      { id: "final-accounts", label: "Final accounts", desc: "Two questions, two statements" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "The Trading Account",
    blurb:
      "The overall result of trading — the purchasing and selling of goods. If the sales value exceeds the cost of goods sold there is a gross profit; if it is less, a gross loss. The first of the two questions, computed.",
    chapters: [
      { id: "trading", label: "Trading account", desc: "Did buying and selling pay?" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "The Gross Profit Lab",
    blurb:
      "The lecture's own numbers, from the simplest trading result to a full T-format trading account — six examples in all, then the lab that recomputes the ladder as you type.",
    chapters: [
      { id: "gp-lab", label: "Gross profit lab", desc: "Six examples — then drive the ladder" },
    ],
  },
];

export const FA_DEFAULT_LECTURE = FA_LECTURES[0].id;

/** the lecture that owns a chapter — cross-lecture jumps depend on it */
export function lectureOfChapter(chapterId: string): FaLecture | null {
  for (const l of FA_LECTURES) {
    if (l.chapters.some((c) => c.id === chapterId)) return l;
  }
  return null;
}

export function lectureById(id: string): FaLecture | null {
  return FA_LECTURES.find((l) => l.id === id) ?? null;
}

export const FA_ALL_CHAPTER_IDS = FA_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
