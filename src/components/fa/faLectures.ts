"use client";

/* ============================================================
   FA — THE SINGLE SOURCE OF TRUTH (shelf 03).

   One strictly-typed, strictly-ordered array of all 34 official
   lectures (L01 → L34), transcribed from the verified compendium
   "FA_L01-L34_Compiled.pdf". Every consumer derives from this
   table and from nothing else:

     · FaHero's lecture picker            (rows + search corpus)
     · FaApp's chapter groups + nav       (GROUPS = f(FA_LECTURES))
     · the prev/next LecturePager         (array order IS the order)
     · every section's eyebrow badge      ("Lecture N · theme")
     · CHAPTER_INDEX / section-counts / search corpus twins

   Sidebar order therefore follows lecture order automatically —
   the ledger(L11)-before-journal(L14) inversion and the hoisted
   L09 pair are structurally impossible now.

   examStatus: Lecture 34 puts the whole syllabus on the final
   paper (numericals emphasised, simple calculator only) with no
   quiz-only carve-out — every lecture is "final-exam".
   ============================================================ */

export type FaExamStatus = "quiz-only" | "final-exam";

export type FaGroupId =
  | "foundations"
  | "concepts"
  | "equation"
  | "recording"
  | "cycle"
  | "closing"
  | "cashflow"
  | "analysis";

/** exam-bank ids — the nav's 8 groups map onto these 9 banks
 *  (`analysis` is nav-only: it opens the `ratios` + `assets` windows) */
export type FaExamGroup = Exclude<FaGroupId, "analysis"> | "ratios" | "assets";

export interface FaLectureChapter {
  /** the rendered <Section id> — also the ⌘K / flash-jump key */
  id: string;
  label: string;
  desc: string;
  /** the eyebrow theme — rendered as `Lecture ${n} · ${theme}` */
  theme: string;
  /** optional nav-group override (defaults to the lecture's group) */
  group?: FaGroupId;
}

export interface FaLecture {
  /** "l1".."l34" */
  id: string;
  /** 1–34 */
  n: number;
  /** badge text: "L01".."L34" (zero-padded, official) */
  code: string;
  /** the official lecture title, verbatim from the compendium */
  title: string;
  blurb: string;
  /** official course part, verbatim from the compendium TOC */
  part: number;
  partLabel: string;
  /** nav group id — chapters may override individually */
  group: FaGroupId;
  groupLabel: string;
  /** where the marks live, per Lecture 34 */
  examStatus: FaExamStatus;
  chapters: FaLectureChapter[];
}

export const FA_GROUP_ORDER: { id: FaGroupId; label: string }[] = [
  { id: "foundations", label: "Orientation" },
  { id: "concepts", label: "Concepts & Conventions" },
  { id: "equation", label: "The Equation & Elements" },
  { id: "recording", label: "Recording" },
  { id: "cycle", label: "The Cycle" },
  { id: "closing", label: "Final Accounts" },
  { id: "cashflow", label: "Cash Flow" },
  { id: "analysis", label: "Analysis & Assets" },
];

/** which exam window(s) a nav group's "Test my knowledge" opens */
export const FA_GROUP_EXAMS: Record<FaGroupId, FaExamGroup[]> = {
  foundations: ["foundations"],
  concepts: ["concepts"],
  equation: ["equation"],
  recording: ["recording"],
  cycle: ["cycle"],
  closing: ["closing"],
  cashflow: ["cashflow"],
  analysis: ["ratios", "assets"],
};

const PART_I = "Foundations, Regulation & Conventions";
const PART_II = "Double Entry, Journal, Ledger & Trial Balance";
const PART_III = "Accrual Basis, Adjusting Entries & Final Accounts";
const PART_IV = "Cash Flow Statements & Statement Analysis";
const PART_V = "Ratio Analysis, Inventory & Long-Lived Assets";

export const FA_LECTURES: FaLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L01",
    title: "Introduction to Financial Accounting Course",
    blurb:
      "Accounting is the language of business. Map the five modules, the accounting cycle from journal entries to interpreted statements, and the three learning outcomes before any vocabulary arrives.",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Orientation",
    examStatus: "final-exam",
    chapters: [
      { id: "course-map", label: "Course map", desc: "Five modules, one cycle, three outcomes", theme: "Orientation" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L02",
    title: "Introduction to Accounting: Overview and Foundational Concepts",
    blurb:
      "The textbook definition in four verbs — identify, record, measure, communicate — the three branches of the umbrella, the entity concept, and the equation that must always balance.",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Orientation",
    examStatus: "final-exam",
    chapters: [
      { id: "language", label: "The four verbs", desc: "Identify · record · measure · communicate", theme: "Foundations" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L03",
    title: "Overview of Accounting Objectives, Users, and Regulatory Environment",
    blurb:
      "Five objectives from bookkeeping to solvency analysis; six external users and three internal ones; and the three Indian pillars — ICAI drafts, MCA legislates, SEBI polices — plus IFRS and Ind AS.",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Orientation",
    examStatus: "final-exam",
    chapters: [
      { id: "users-regulatory", label: "Users & regulators", desc: "Five objectives · nine users · ICAI–MCA–SEBI", theme: "Objectives, users & regulation" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L04",
    title: "Introduction to Financial Accounting: Overview and Foundational Concepts",
    blurb:
      "No definitions yet: five rooms, five arguments — Priya & Rohan's inherited factory, Ramesh's notebook and the ₹15 lakh investor, Soleris growing 40% into insolvency, Satyam's ₹5,300 crore — every one ending at the same question: what did the business really earn, and who can trust the number?",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Orientation",
    examStatus: "final-exam",
    chapters: [
      { id: "why", label: "Why accounting?", desc: "Five openings — every one ends at the same question", theme: "The case for standards" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L05",
    title: "Overview of Accounting Concepts and Conventions",
    blurb:
      "Accounting measures on eight concepts: separate entity, going concern, money measurement, cost, dual aspect, accounting period, periodic matching and realization. Meet all eight — concept five does the heaviest lifting: A starts with ₹10,000 and two things happen at once — then learn to spot the violation.",
    part: 1,
    partLabel: PART_I,
    group: "concepts",
    groupLabel: "Concepts & Conventions",
    examStatus: "final-exam",
    chapters: [
      { id: "assumptions", label: "The eight concepts", desc: "Entity · concern · money · cost · the full eight", theme: "The eight concepts" },
      { id: "dual-aspect", label: "Dual aspect", desc: "Every rupee tells two stories", theme: "Dual aspect" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L06",
    title: "Part Two of Accounting Concepts and Conventions",
    blurb:
      "Investors cannot wait a lifetime for results, so the long story is chopped into years; every chop creates a match — and revenue waits for delivery, with two famous exceptions.",
    part: 1,
    partLabel: PART_I,
    group: "concepts",
    groupLabel: "Concepts & Conventions",
    examStatus: "final-exam",
    chapters: [
      { id: "periodicity", label: "Periods & matching", desc: "Time, cut into periods — and the match that follows", theme: "Periods & matching" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L07",
    title: "Accounting Conventions: Principles for Financial Statement Preparation",
    blurb:
      "Not rules — evolved customs: conservatism (anticipate no profit, provide for all losses), full disclosure, consistency and materiality. Four scenarios sort them apart.",
    part: 1,
    partLabel: PART_I,
    group: "concepts",
    groupLabel: "Concepts & Conventions",
    examStatus: "final-exam",
    chapters: [
      { id: "conventions", label: "Four conventions", desc: "Conservatism · disclosure · consistency · materiality", theme: "Conventions" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L08",
    title: "Financial Accounting: Accounting Records and Systems — Module Two",
    blurb:
      "Source documents feed a system where every transaction has a receiving and a giving side. The equation becomes a solving machine: ₹1,00,000 openings, ₹5,000 furniture, creditors paid, the ₹82,000 proof — and every transaction the course will ever show you is one of four moves.",
    part: 1,
    partLabel: PART_I,
    group: "equation",
    groupLabel: "The Equation & Elements",
    examStatus: "final-exam",
    chapters: [
      { id: "equation-lab", label: "Equation, worked", desc: "Hot Chocolate · Abraham · Coffee Corner", theme: "The equation, worked" },
      { id: "effects", label: "Transaction effects", desc: "The four moves — run the equation machine", theme: "Transaction effects" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L09",
    title: "Overview of Accounting Concepts and Financial Statement Fundamentals",
    blurb:
      "The boundary that draws the business apart from its owner, the quiet promise to continue that justifies cost — with Kingfisher as the cautionary tale — and the three families every ledger account belongs to.",
    part: 2,
    partLabel: PART_II,
    group: "equation",
    groupLabel: "The Equation & Elements",
    examStatus: "final-exam",
    chapters: [
      { id: "entity-concern", label: "Entity & concern", desc: "The boundary — and the promise to continue", theme: "Entity & going concern" },
      { id: "elements", label: "The three elements", desc: "Assets, liabilities & equity — the whole cast", theme: "The three elements" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Classification of Accounts and Journal Entries in Double Entry System",
    blurb:
      "The traditional approach: personal, real and nominal accounts, three debit-credit rules, the five-column journal — from Anbu's cheque to Dinesh's insolvency at 40 paise in the rupee.",
    part: 2,
    partLabel: PART_II,
    group: "recording",
    groupLabel: "Recording",
    examStatus: "final-exam",
    chapters: [
      { id: "classification", label: "Classification & journal", desc: "Personal · real · nominal — the rules and the entries", theme: "The traditional approach" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Continuation of Journal Entries and Introduction to Ledger Accounts",
    blurb:
      "The ledger regroups by account: one page per account, post every debit and credit — the Cash T-account, for real — and each page ends with a balance that speaks.",
    part: 2,
    partLabel: PART_II,
    group: "recording",
    groupLabel: "Recording",
    examStatus: "final-exam",
    chapters: [
      { id: "ledger", label: "Ledger", desc: "Posting — the Cash T-account, for real", theme: "Anant & the ledger" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Ledger Posting and Account Balancing",
    blurb:
      "Ongoing businesses open with balances brought forward; every account ends with a Balance c/d that becomes the next period's Balance b/d — Joy's books and the ₹95,000 cash balance.",
    part: 2,
    partLabel: PART_II,
    group: "recording",
    groupLabel: "Recording",
    examStatus: "final-exam",
    chapters: [
      { id: "balancing", label: "Opening & balancing", desc: "Balances b/d, balances c/d — and the ₹95,000 proof", theme: "Ledger mechanics" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Trial Balance: Concept, Objectives, and Preparation Methods",
    blurb:
      "The third step: a statement of every ledger balance at a point in time. If double entry has been honoured the columns must meet — sort Pearl's books and see, then total method vs balance method.",
    part: 2,
    partLabel: PART_II,
    group: "recording",
    groupLabel: "Recording",
    examStatus: "final-exam",
    chapters: [
      { id: "trial-balance", label: "Trial balance", desc: "Do the columns agree? — sort Pearl's books", theme: "Trial balance" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Overview of Accounting Principles and Journal Entries",
    blurb:
      "Equation approach or traditional approach, both land in the same place: a day book where every event is written with its two effects, the day it happens. The Vogue Company's pipeline, entry by entry.",
    part: 2,
    partLabel: PART_II,
    group: "recording",
    groupLabel: "Recording",
    examStatus: "final-exam",
    chapters: [
      { id: "journal", label: "Journal", desc: "The pipeline and the day book — Vogue Company", theme: "The Vogue Company journal" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Continuing Discussion on Trial Balance",
    blurb:
      "A balanced trial balance is not a clean chit: errors of principle, omission, commission and compensation can all hide. When the columns refuse to meet, the suspense account buys time.",
    part: 2,
    partLabel: PART_II,
    group: "recording",
    groupLabel: "Recording",
    examStatus: "final-exam",
    chapters: [
      { id: "suspense", label: "Suspense & errors", desc: "The ₹50,000 gap — and the errors it cannot see", theme: "Trial balance, continued" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Basis of Accounting and the Matching Principle",
    blurb:
      "₹1,000 received on January 1 for a year of service is not ₹1,000 of profit. Cash basis vs accrual basis — and the replacement-cost lens that splits operating skill from market luck.",
    part: 3,
    partLabel: PART_III,
    group: "cycle",
    groupLabel: "The Cycle",
    examStatus: "final-exam",
    chapters: [
      { id: "basis", label: "Cash vs accrual", desc: "Two bases, one matching principle, ₹10 split two ways", theme: "Basis of accounting" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Adjusting Entries in the Accounting Cycle",
    blurb:
      "Cash does not always move in the period its revenue or expense belongs to. Split the prepaid rupee, book the unearned rent, accrue what is owed — the books catch up with reality before any statement speaks.",
    part: 3,
    partLabel: PART_III,
    group: "cycle",
    groupLabel: "The Cycle",
    examStatus: "final-exam",
    chapters: [
      { id: "adjusting", label: "Adjusting entries", desc: "Deferrals & accruals — split the prepaid rupee", theme: "Adjusting entries" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Introduction to Financial Accounts and the Trading Account",
    blurb:
      "The overall result of trading — the purchasing and selling of goods. If the sales value exceeds the cost of goods sold there is a gross profit; if it is less, a gross loss. The first of the two questions, computed.",
    part: 3,
    partLabel: PART_III,
    group: "cycle",
    groupLabel: "The Cycle",
    examStatus: "final-exam",
    chapters: [
      { id: "trading", label: "Trading account", desc: "Did buying and selling pay?", theme: "The trading account" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Understanding the Accounting Cycle: Ledger Accounts, Trial Balance, and Adjusting Entries",
    blurb:
      "One case runs the whole cycle: Vogue's six adjusting entries — insurance ₹60, supplies ₹800, depreciation ₹50, unearned ₹900, salaries ₹500, unbilled ₹700 — and Tech Mahindra's ₹9,682 crore lesson.",
    part: 3,
    partLabel: PART_III,
    group: "cycle",
    groupLabel: "The Cycle",
    examStatus: "final-exam",
    chapters: [
      { id: "adjusting-lab", label: "The adjusting lab", desc: "Vogue's six entries — the cycle in one sitting", theme: "The cycle, in one case" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Overview of Final Accounts: Trading Account and Profit and Loss Account",
    blurb:
      "The lecture's own numbers, from the simplest trading result to a full T-format trading account — six examples in all, then the lab that recomputes the ladder as you type.",
    part: 3,
    partLabel: PART_III,
    group: "closing",
    groupLabel: "Final Accounts",
    examStatus: "final-exam",
    chapters: [
      { id: "gp-lab", label: "Gross profit lab", desc: "Six examples — then drive the ladder", theme: "Gross profit lab" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Profit and Loss Account, Closing Entries, and Financial Statement Relationships",
    blurb:
      "Operating expenses and income close into the P&L; net profit closes into capital; and the statements chain together — income statement to retained earnings to balance sheet to cash flow. Meet Softomation, one month rippling through five shapes.",
    part: 3,
    partLabel: PART_III,
    group: "closing",
    groupLabel: "Final Accounts",
    examStatus: "final-exam",
    chapters: [
      { id: "pandl", label: "P&L & closing entries", desc: "Net profit, the ₹5,50,000 ladder — and the chain", theme: "Net result & the chain" },
      { id: "statements", label: "Five statements", desc: "One month of transactions, five shapes", theme: "The five statements" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Introduction to Balance Sheet",
    blurb:
      "A photograph, not a video: what the firm owns and owes on one date. Current vs fixed, liquidity order vs permanency order — and why the two sides must always agree.",
    part: 3,
    partLabel: PART_III,
    group: "closing",
    groupLabel: "Final Accounts",
    examStatus: "final-exam",
    chapters: [
      { id: "balance-sheet", label: "Balance sheet", desc: "A photograph — current vs fixed, two orders", theme: "The photograph" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Introduction to Cash Flow Statement",
    blurb:
      "The fourth pillar answers what the others cannot: where did the cash actually come from and where did it go? Cathay Pacific bought HK$9.2 billion of assets while reporting an HK$8.6 billion loss.",
    part: 4,
    partLabel: PART_IV,
    group: "closing",
    groupLabel: "Final Accounts",
    examStatus: "final-exam",
    chapters: [
      { id: "cashflow-intro", label: "The fourth pillar", desc: "Why profit ≠ cash — operating, investing, financing", theme: "The fourth pillar" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Financial Accounting: Final Accounts and Financial Statement Preparation",
    blurb:
      "Everything the course has built — journal, ledger, trial balance, adjustments — now gets asked its purpose: what did the operations earn, and where does the enterprise stand? Two statements answer.",
    part: 4,
    partLabel: PART_IV,
    group: "closing",
    groupLabel: "Final Accounts",
    examStatus: "final-exam",
    chapters: [
      { id: "final-accounts", label: "Final accounts", desc: "Two questions, two statements", theme: "Final accounts" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Understanding the Structure and Calculation of Cash Flow Statements",
    blurb:
      "Two routes to operating cash: follow the cash directly, or start at net income and walk it back. Jaws Photo Plus: ₹73,000 of profit becomes ₹69,700 of cash, adjustment by adjustment.",
    part: 4,
    partLabel: PART_IV,
    group: "cashflow",
    groupLabel: "Cash Flow",
    examStatus: "final-exam",
    chapters: [
      { id: "cashflow-methods", label: "Direct vs indirect", desc: "The ₹73,000 → ₹69,700 reconciliation ladder", theme: "Building the statement" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Cash Flow Statement Analysis: Comprehensive Overview of Direct and Indirect Methods",
    blurb:
      "Three adjustment categories — non-cash, non-operating, working capital — applied for real: Compass Company lands at ₹72,000 of operating cash; Ajay walks ₹4,32,000 of profit down to ₹3,48,000.",
    part: 4,
    partLabel: PART_IV,
    group: "cashflow",
    groupLabel: "Cash Flow",
    examStatus: "final-exam",
    chapters: [
      { id: "cashflow-build", label: "The indirect build", desc: "Compass ₹72,000 · Ajay ₹4,32,000 → ₹3,48,000", theme: "The indirect method at work" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Analyzing the Cash Flow Statement to Understand Company Financial Health",
    blurb:
      "Six questions turn a statement into a diagnosis: why did cash fall despite ₹11,41,000 of profit? How was expansion financed? Can creditors rely on 3.3× interest cover — and can the dividend survive?",
    part: 4,
    partLabel: PART_IV,
    group: "cashflow",
    groupLabel: "Cash Flow",
    examStatus: "final-exam",
    chapters: [
      { id: "cashflow-health", label: "Six questions", desc: "Compass diagnosed — then Pioneer Limited, built", theme: "The diagnosis" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Financial Statement Analysis: Understanding and Interpreting Financial Data",
    blurb:
      "From preparing statements to interrogating them: four standards of comparison, four techniques — horizontal, trend, vertical, ratio — and Dr. Reddy's, where a 7.92% profit fall hid 9.23% operating growth.",
    part: 4,
    partLabel: PART_IV,
    group: "analysis",
    groupLabel: "Analysis & Assets",
    examStatus: "final-exam",
    chapters: [
      { id: "fs-analysis", label: "FS analysis", desc: "Four standards, four techniques, one FX red herring", theme: "From preparing to interrogating" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Understanding Cash Flow Statements and Their Importance",
    blurb:
      "Mira's stationery shop books a ₹1 lakh March sale it will not be paid for until May. Profit is an opinion; cash is a fact. The closing argument of the course, in one shop.",
    part: 4,
    partLabel: PART_IV,
    group: "cashflow",
    groupLabel: "Cash Flow",
    examStatus: "final-exam",
    chapters: [
      { id: "cashflow-wrap", label: "Profit is an opinion", desc: "Mira's shop · the student analogy · the closing argument", theme: "The closing argument" },
    ],
  },
  {
    id: "l30",
    n: 30,
    code: "L30",
    title: "Understanding Financial Statement Analysis Through Ratio Analysis",
    blurb:
      "A ratio relates one figure to a base. Six profitability ratios read against Dr. Reddy's 2015→2016: margin 15.55%→13.71%, turnover 0.87→0.81, ROA 13.49%→11.14% — and the two business models that land at the same 20% ROA by opposite roads.",
    part: 5,
    partLabel: PART_V,
    group: "analysis",
    groupLabel: "Analysis & Assets",
    examStatus: "final-exam",
    chapters: [
      { id: "ratio-profitability", label: "Profitability ratios", desc: "Six ratios · Dr. Reddy's 15.55→13.71 · the ROA identity", theme: "The six profitability ratios" },
    ],
  },
  {
    id: "l31",
    n: 31,
    code: "L31",
    title: "Continuation of Ratio Analysis: Liquidity, Solvency, and Capital Market Ratios",
    blurb:
      "Can the firm pay tomorrow (current 2:1, quick 1:1, a 230-day operating cycle)? Can it survive a decade (debt is cheaper but riskier; coverage 4× means profit can fall 75%)? And what does the market think (PE 15, PB, beta)? Plus the supplier-payment paradox examiners love.",
    part: 5,
    partLabel: PART_V,
    group: "analysis",
    groupLabel: "Analysis & Assets",
    examStatus: "final-exam",
    chapters: [
      { id: "ratio-liquidity", label: "Liquidity ratios", desc: "Current & quick · turnover · the 230-day cycle", theme: "Liquidity & the operating cycle" },
      { id: "ratio-solvency-market", label: "Solvency & market", desc: "D/E · interest coverage · PE · PB · beta", theme: "Solvency & the market" },
    ],
  },
  {
    id: "l32",
    n: 32,
    code: "L32",
    title: "Overview of Inventory Valuation Methods and Accounting Standards",
    blurb:
      "Same GPS business, same units sold — FIFO lands a $4,140 gross margin, weighted average $3,057. AS 2's scope, the lower-of-cost-and-NRV rule, what cost includes and excludes, and why LIFO is prohibited.",
    part: 5,
    partLabel: PART_V,
    group: "analysis",
    groupLabel: "Analysis & Assets",
    examStatus: "final-exam",
    chapters: [
      { id: "inventory-valuation", label: "Inventory & AS 2", desc: "FIFO vs weighted average · $4,140 vs $3,057", theme: "Inventory under AS 2" },
    ],
  },
  {
    id: "l33",
    n: 33,
    code: "L33",
    title: "Understanding Property, Plant, and Equipment (PPE), Depreciation, and Amortization",
    blurb:
      "₹54,000 press + ₹1,500 shipping + ₹2,500 setup = ₹57,000 of cost; ₹47,000 of it gets depreciated. Straight line spends it evenly (₹9,400/yr); diminishing balance spends it early (₹22,800, then ₹13,680…) — the total is identical, only timing moves. Then AS 26 gives intangibles a 10-year presumption.",
    part: 5,
    partLabel: PART_V,
    group: "analysis",
    groupLabel: "Analysis & Assets",
    examStatus: "final-exam",
    chapters: [
      { id: "ppe-depreciation", label: "PPE & depreciation", desc: "The ₹57,000 build-up · straight line vs diminishing", theme: "PPE & depreciation" },
      { id: "intangible-amortization", label: "Intangibles", desc: "AS 26 · the 10-year presumption · the ₹8,000/yr patent", theme: "Intangibles & amortization" },
    ],
  },
  {
    id: "l34",
    n: 34,
    code: "L34",
    title: "Financial Statement Analysis: Techniques and Applications",
    blurb:
      "A single number is neither good nor bad. Four standards (rule of thumb, Kodak's past-performance trap, internal targets, industry peers), four techniques with formulas, DuPont's ROA = Margin × Turnover, Nalesh and the banker — and the exam brief: numericals emphasised, simple calculator only, concise answers.",
    part: 5,
    partLabel: PART_V,
    group: "analysis",
    groupLabel: "Analysis & Assets",
    examStatus: "final-exam",
    chapters: [
      { id: "analysis-techniques", label: "Techniques", desc: "Horizontal · trend · vertical · ratio · four standards", theme: "Techniques of analysis" },
      { id: "dupont-exam", label: "DuPont & exam", desc: "Margin × turnover · the exam brief · homework", theme: "DuPont & the exam" },
    ],
  },
];

export const FA_DEFAULT_LECTURE = FA_LECTURES[0].id;

export function lectureOfChapter(chapterId: string): FaLecture | null {
  return FA_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): FaLecture | null {
  return FA_LECTURES.find((l) => l.id === id) ?? null;
}

/** Accepts "l14", "L14", "14", "l014" — returns the lecture or null. */
export function lectureByLooseId(raw: string): FaLecture | null {
  const m = raw.trim().toLowerCase().match(/^l?0*(\d{1,2})$/);
  if (!m) return null;
  return FA_LECTURES.find((l) => l.n === Number(m[1])) ?? null;
}

export const FA_ALL_CHAPTER_IDS = FA_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));

/** chapter id → nav group id (chapter override wins, else the lecture's) */
export function groupOfChapter(chapterId: string): FaGroupId | null {
  for (const l of FA_LECTURES) {
    const c = l.chapters.find((ch) => ch.id === chapterId);
    if (c) return c.group ?? l.group;
  }
  return null;
}

/** The derived eyebrow — `Lecture ${n} · ${theme}` — never hard-coded again. */
export function eyebrowOf(chapterId: string): string {
  for (const l of FA_LECTURES) {
    const c = l.chapters.find((ch) => ch.id === chapterId);
    if (c) return `Lecture ${l.n} · ${c.theme}`;
  }
  throw new Error(`[fa] unknown chapter id "${chapterId}" — add it to faLectures.ts first`);
}

/**
 * The chapter menu, derived — never hand-written again. Ordered by
 * lecture order; each chapter inherits its lecture's group unless it
 * overrides. Exam banks key off the same group ids (+ bank-only ids).
 */
export const FA_GROUPS: {
  id: FaGroupId;
  label: string;
  exams: FaExamGroup[];
  items: { id: string; label: string; desc: string }[];
}[] = FA_GROUP_ORDER.map((g) => ({
  id: g.id,
  label: g.label,
  exams: FA_GROUP_EXAMS[g.id],
  items: FA_LECTURES.flatMap((l) =>
    l.chapters
      .filter((c) => (c.group ?? l.group) === g.id)
      .map((c) => ({ id: c.id, label: c.label, desc: c.desc })),
  ),
}));
