"use client";

/* ============================================================
   FA — the lecture sequence (shelf 03).

   "Financial Accounting" now mirrors the IIT Jodhpur deck
   lecture-for-lecture: 29 lectures, L1 through L29, in the
   PDF's own order. This one table maps each lecture to the
   section(s) it owns. The reader picks a lecture in the hero
   and the page below renders exactly that lecture's chapter.
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
  id: string; // "l1".."l29"
  n: number; // lecture number
  code: string; // badge text: "L1".."L29"
  title: string;
  blurb: string;
  chapters: FaLectureChapter[];
}

export const FA_LECTURES: FaLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to the Course",
    blurb:
      "Accounting is the language of business. Map the five modules, the accounting cycle from journal entries to interpreted statements, and the three learning outcomes before any vocabulary arrives.",
    chapters: [
      { id: "course-map", label: "Course map", desc: "Five modules, one cycle, three outcomes" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "What Accounting Is — Overview & Foundations",
    blurb:
      "The textbook definition in four verbs — identify, record, measure, communicate — the three branches of the umbrella, the entity concept, and the equation that must always balance.",
    chapters: [
      { id: "language", label: "The four verbs", desc: "Identify · record · measure · communicate" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Objectives, Users & the Regulatory Environment",
    blurb:
      "Five objectives from bookkeeping to solvency analysis; six external users and three internal ones; and the three Indian pillars — ICAI drafts, MCA legislates, SEBI polices — plus IFRS and Ind AS.",
    chapters: [
      { id: "users-regulatory", label: "Users & regulators", desc: "Five objectives · nine users · ICAI–MCA–SEBI" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "The Case for Standards — Soleris & Satyam",
    blurb:
      "No definitions yet: five rooms, five arguments — Priya & Rohan's inherited factory, Ramesh's notebook and the ₹15 lakh investor — every one ending at the same question: what did the business really earn, and who can trust the number?",
    chapters: [
      { id: "why", label: "Why accounting?", desc: "Five openings — every one ends at the same question" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Accounting Concepts I — the Eight Postulates",
    blurb:
      "Accounting measures on eight concepts: separate entity, going concern, money measurement, cost, dual aspect, accounting period, periodic matching and realization. Meet all eight — concept five does the heaviest lifting: A starts with ₹10,000 and two things happen at once — then learn to spot the violation.",
    chapters: [
      { id: "assumptions", label: "The eight concepts", desc: "Entity · concern · money · cost · the full eight" },
      { id: "dual-aspect", label: "Dual aspect", desc: "Every rupee tells two stories" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Concepts II — Periods, Matching & Realization",
    blurb:
      "Investors cannot wait a lifetime for results, so the long story is chopped into years; every chop creates a match — and revenue waits for delivery, with two famous exceptions.",
    chapters: [
      { id: "periodicity", label: "Periods & matching", desc: "Time, cut into periods — and the match that follows" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "The Four Accounting Conventions",
    blurb:
      "Not rules — evolved customs: conservatism (anticipate no profit, provide for all losses), full disclosure, consistency and materiality. Four scenarios sort them apart.",
    chapters: [
      { id: "conventions", label: "Four conventions", desc: "Conservatism · disclosure · consistency · materiality" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Accounting Records & Systems — the Double Entry Machine",
    blurb:
      "Source documents feed a system where every transaction has a receiving and a giving side. The equation becomes a solving machine: ₹1,00,000 openings, ₹5,000 furniture, creditors paid, the ₹82,000 proof — and every transaction the course will ever show you is one of four moves.",
    chapters: [
      { id: "equation-lab", label: "Equation, worked", desc: "Hot Chocolate · Abraham · Coffee Corner" },
      { id: "effects", label: "Transaction effects", desc: "The four moves — run the equation machine" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Concepts Meet Statements — Entity, Concern & the Elements",
    blurb:
      "The boundary that draws the business apart from its owner, the quiet promise to continue that justifies cost — with Kingfisher as the cautionary tale — and the three families every ledger account belongs to.",
    chapters: [
      { id: "entity-concern", label: "Entity & concern", desc: "The boundary — and the promise to continue" },
      { id: "elements", label: "The three elements", desc: "Assets, liabilities & equity — the whole cast" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Classification of Accounts & Journal Entries",
    blurb:
      "The traditional approach: personal, real and nominal accounts, three debit-credit rules, the five-column journal — from Anbu's cheque to Dinesh's insolvency at 40 paise in the rupee.",
    chapters: [
      { id: "classification", label: "Classification & journal", desc: "Personal · real · nominal — the rules and the entries" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "The Journal Continued — Anant & the Ledger",
    blurb:
      "The ledger regroups by account: one page per account, post every debit and credit — the Cash T-account, for real — and each page ends with a balance that speaks.",
    chapters: [
      { id: "ledger", label: "Ledger", desc: "Posting — the Cash T-account, for real" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Ledger Posting & Account Balancing",
    blurb:
      "Ongoing businesses open with balances brought forward; every account ends with a Balance c/d that becomes the next period's Balance b/d — Joy's books and the ₹95,000 cash balance.",
    chapters: [
      { id: "balancing", label: "Opening & balancing", desc: "Balances b/d, balances c/d — and the ₹95,000 proof" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Trial Balance — Concept, Objectives & Methods",
    blurb:
      "The third step: a statement of every ledger balance at a point in time. If double entry has been honoured the columns must meet — sort Pearl's books and see, then total method vs balance method.",
    chapters: [
      { id: "trial-balance", label: "Trial balance", desc: "Do the columns agree? — sort Pearl's books" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "The Vogue Company — Journal Entries in Practice",
    blurb:
      "Equation approach or traditional approach, both land in the same place: a day book where every event is written with its two effects, the day it happens. The Vogue Company's pipeline, entry by entry.",
    chapters: [
      { id: "journal", label: "Journal", desc: "The pipeline and the day book — Vogue Company" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Trial Balance Continued — Suspense & Errors",
    blurb:
      "A balanced trial balance is not a clean chit: errors of principle, omission, commission and compensation can all hide. When the columns refuse to meet, the suspense account buys time.",
    chapters: [
      { id: "suspense", label: "Suspense & errors", desc: "The ₹50,000 gap — and the errors it cannot see" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Basis of Accounting & the Matching Principle",
    blurb:
      "₹1,000 received on January 1 for a year of service is not ₹1,000 of profit. Cash basis vs accrual basis — and the replacement-cost lens that splits operating skill from market luck.",
    chapters: [
      { id: "basis", label: "Cash vs accrual", desc: "Two bases, one matching principle, ₹10 split two ways" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Adjusting Entries in the Accounting Cycle",
    blurb:
      "Cash does not always move in the period its revenue or expense belongs to. Split the prepaid rupee, book the unearned rent, accrue what is owed — the books catch up with reality before any statement speaks.",
    chapters: [
      { id: "adjusting", label: "Adjusting entries", desc: "Deferrals & accruals — split the prepaid rupee" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Financial Accounts & the Trading Account",
    blurb:
      "The overall result of trading — the purchasing and selling of goods. If the sales value exceeds the cost of goods sold there is a gross profit; if it is less, a gross loss. The first of the two questions, computed.",
    chapters: [
      { id: "trading", label: "Trading account", desc: "Did buying and selling pay?" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "The Accounting Cycle — Ledger, Trial Balance & Adjustments",
    blurb:
      "One case runs the whole cycle: Vogue's six adjusting entries — insurance ₹60, supplies ₹800, depreciation ₹50, unearned ₹900, salaries ₹500, unbilled ₹700 — and Tech Mahindra's ₹9,682 crore lesson.",
    chapters: [
      { id: "adjusting-lab", label: "The adjusting lab", desc: "Vogue's six entries — the cycle in one sitting" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Final Accounts — Trading & Profit-Loss",
    blurb:
      "The lecture's own numbers, from the simplest trading result to a full T-format trading account — six examples in all, then the lab that recomputes the ladder as you type.",
    chapters: [
      { id: "gp-lab", label: "Gross profit lab", desc: "Six examples — then drive the ladder" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "P&L, Closing Entries & Statement Relationships",
    blurb:
      "Operating expenses and income close into the P&L; net profit closes into capital; and the statements chain together — income statement to retained earnings to balance sheet to cash flow. Meet Softomation, one month rippling through five shapes.",
    chapters: [
      { id: "pandl", label: "P&L & closing entries", desc: "Net profit, the ₹5,50,000 ladder — and the chain" },
      { id: "statements", label: "Five statements", desc: "One month of transactions, five shapes" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Introduction to the Balance Sheet",
    blurb:
      "A photograph, not a video: what the firm owns and owes on one date. Current vs fixed, liquidity order vs permanency order — and why the two sides must always agree.",
    chapters: [
      { id: "balance-sheet", label: "Balance sheet", desc: "A photograph — current vs fixed, two orders" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Introduction to the Cash Flow Statement",
    blurb:
      "The fourth pillar answers what the others cannot: where did the cash actually come from and where did it go? Cathay Pacific bought HK$9.2 billion of assets while reporting an HK$8.6 billion loss.",
    chapters: [
      { id: "cashflow-intro", label: "The fourth pillar", desc: "Why profit ≠ cash — operating, investing, financing" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Final Accounts & Statement Preparation",
    blurb:
      "Everything the course has built — journal, ledger, trial balance, adjustments — now gets asked its purpose: what did the operations earn, and where does the enterprise stand? Two statements answer.",
    chapters: [
      { id: "final-accounts", label: "Final accounts", desc: "Two questions, two statements" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Cash Flow Statements — Structure & Calculation",
    blurb:
      "Two routes to operating cash: follow the cash directly, or start at net income and walk it back. Jaws Photo Plus: ₹73,000 of profit becomes ₹69,700 of cash, adjustment by adjustment.",
    chapters: [
      { id: "cashflow-methods", label: "Direct vs indirect", desc: "The ₹73,000 → ₹69,700 reconciliation ladder" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Cash Flow Analysis — the Indirect Method at Work",
    blurb:
      "Three adjustment categories — non-cash, non-operating, working capital — applied for real: Compass Company lands at ₹72,000 of operating cash; Ajay walks ₹4,32,000 of profit down to ₹3,48,000.",
    chapters: [
      { id: "cashflow-build", label: "The indirect build", desc: "Compass ₹72,000 · Ajay ₹4,32,000 → ₹3,48,000" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Reading Cash Flow for Financial Health",
    blurb:
      "Six questions turn a statement into a diagnosis: why did cash fall despite ₹11,41,000 of profit? How was expansion financed? Can creditors rely on 3.3× interest cover — and can the dividend survive?",
    chapters: [
      { id: "cashflow-health", label: "Six questions", desc: "Compass diagnosed — then Pioneer Limited, built" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Financial Statement Analysis",
    blurb:
      "From preparing statements to interrogating them: four standards of comparison, four techniques — horizontal, trend, vertical, ratio — and Dr. Reddy's, where a 7.92% profit fall hid 9.23% operating growth.",
    chapters: [
      { id: "fs-analysis", label: "FS analysis", desc: "Four standards, four techniques, one FX red herring" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Cash Flow Statements — Why They Matter",
    blurb:
      "Mira's stationery shop books a ₹1 lakh March sale it will not be paid for until May. Profit is an opinion; cash is a fact. The closing argument of the course, in one shop.",
    chapters: [
      { id: "cashflow-wrap", label: "Profit is an opinion", desc: "Mira's shop · the student analogy · the closing argument" },
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
