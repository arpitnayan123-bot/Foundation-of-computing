"use client";

/* ============================================================
   QUIZ 2 — the war room registry.

   A separate, self-contained wing of the Atlas for the four
   Quiz-2 subjects. Nothing here touches the shelves: this
   module only READS lecture knowledge to map every syllabus
   sliver to the exact lectures to study, and ships its own
   mock-question banks.

   The OFFICIAL schedule, as announced (IIT Jodhpur, Quiz 2):
     · Sat 31 Oct   FoC   joining 4:30 PM   paper 4:45 – 5:05 PM   60 Q · 60 marks
     · Sat 31 Oct   ATB   joining 5:10 PM   paper 5:25 – 5:45 PM   40 Q · 40 marks
     · Sat 31 Oct   FA    joining 5:45 PM   paper 6:00 – 6:30 PM   40 Q · 40 marks
                  (and 30% of the final course grade — the big one)
     · Sun  1 Nov   EBH   joining 11:45 AM  paper 12:00 – 12:20 PM  40 Q · 40 marks

   Each subject owns:
     · its syllabus, sliver by sliver, with the exact lecture
       range to revise for that sliver (from the shelf's own
       lectures.ts map — L-codes match the deck numbering)
     · ONE official mock window — twice the paper (2× the
       questions, 2× the clock) — plus per-sliver drill
       windows, all powered by the shared notes/ExamEngine.
   ============================================================ */

import { Compass, Landmark, Route, Scale, type LucideIcon } from "lucide-react";

/* ---------------- the question shape (ExamEngine-compatible) ---------------- */

export interface Quiz2Question {
  id: string;
  type: "mcq" | "output" | "short";
  q: string;
  /** optional equation / journal / code panel shown under the stem */
  code?: string;
  /** mcq only */
  options?: string[];
  /** mcq only — index of the correct option */
  answer?: number;
  /** output → the exact expected output; short → model answer */
  answerText?: string;
  explain?: string;
  /** the syllabus sliver this question belongs to (drill grouping) */
  topic: string;
}

/* ---------------- syllabus slivers ---------------- */

export interface Quiz2Sliver {
  /** stable topic id — question.topic keys off this */
  id: string;
  label: string;
  /** the lectures to revise for this sliver (deck numbering) */
  lectures: string;
  /** what to master, bullet by bullet */
  points: string[];
}

export interface Quiz2Subject {
  id: "foc" | "atb" | "fa" | "ebh";
  name: string;
  short: string;
  sigil: LucideIcon;
  accent: string;
  accent2: string;
  /** ISO date of the quiz (local midnight of quiz day) */
  dateISO: string;
  dateLabel: string;
  /* ---- the official announcement, verbatim ---- */
  /** be seated by this time ("4:30 PM") */
  joining: string;
  /** the official quiz window ("4:45 – 5:05 PM") */
  window: string;
  /** minutes after local midnight when the paper STARTS — drives the countdown */
  startMin: number;
  /** questions on the official paper */
  officialQuestions: number;
  /** marks on offer (1 per question) */
  marks: number;
  /** official duration of the real quiz, in minutes */
  minutes: number;
  /** announced weightage, when the institute gives one */
  weightage?: string;
  /* ---- training config ---- */
  /** minutes on the official mock clock — the mock runs TWICE the
   *  paper (2× the questions, 2× the time) */
  mockMinutes: number;
  /** the full lecture range the quiz draws from */
  range: string;
  blurb: string;
  slivers: Quiz2Sliver[];
}

/* ---------------- quiz day ---------------- */

export const QUIZ2_DAY_1 = "2026-10-31"; // FoC · ATB · FA
export const QUIZ2_DAY_2 = "2026-11-01"; // EBH

/* ---------------- the four subjects ---------------- */

export const QUIZ2_SUBJECTS: Quiz2Subject[] = [
  {
    id: "foc",
    name: "Foundations of Computing",
    short: "FoC",
    sigil: Compass,
    accent: "#f59e0b",
    accent2: "#ea580c",
    dateISO: QUIZ2_DAY_1,
    dateLabel: "Sat · 31 Oct",
    joining: "4:30 PM",
    window: "4:45 – 5:05 PM",
    startMin: 16 * 60 + 45,
    officialQuestions: 60,
    marks: 60,
    minutes: 20,
    mockMinutes: 40,
    range: "L17 – L28",
    blurb:
      "From conditionals to functions — the Python stretch of the course. Sixty questions in twenty minutes: predict-the-output pace is the exam's favourite weapon; the mock bank is loaded with them.",
    slivers: [
      {
        id: "if",
        label: "If statement",
        lectures: "L17 · L18 · L20",
        points: [
          "Conditional tests: == vs =, .lower() case-insensitive checks, and/or/not truth tables",
          "in / not in membership tests, empty lists are falsy",
          "Simple if, if-else, the elif ladder (first true test wins) vs independent ifs",
          "If × lists: special items, empty checks, checking two lists against each other",
        ],
      },
      {
        id: "dicts",
        label: "Dictionaries",
        lectures: "L21 · L22 · L23",
        points: [
          "Key–value pairs: create, read, change, delete; KeyError and the safe .get() lookup",
          "Looping: .items(), .keys(), .values(), sorted() order, set() for unique values",
          "Nesting: lists of dicts, dicts of lists, dict of dicts",
        ],
      },
      {
        id: "while",
        label: "User input & while loops",
        lectures: "L25 · L26",
        points: [
          "input() always returns a string — int() before arithmetic; the % even/odd trick",
          "while condition loops, flags, break, continue",
          "while with data: moving items between lists, removing all instances of a value",
        ],
      },
      {
        id: "functions",
        label: "Functions, lecture 1 & 2",
        lectures: "L27 · L28",
        points: [
          "def, docstrings, parameters vs arguments; positional & keyword arguments, defaults",
          "return values, optional arguments, returning dicts",
          "Passing lists into functions (the slice [:] copy trick), *args / **kwargs, modules & import",
        ],
      },
    ],
  },
  {
    id: "atb",
    name: "Algorithmic Thinking in Business",
    short: "ATB",
    sigil: Route,
    accent: "#f43f5e",
    accent2: "#be123c",
    dateISO: QUIZ2_DAY_1,
    dateLabel: "Sat · 31 Oct",
    joining: "5:10 PM",
    window: "5:25 – 5:45 PM",
    startMin: 17 * 60 + 25,
    officialQuestions: 40,
    marks: 40,
    minutes: 20,
    mockMinutes: 40,
    range: "L12 – L20",
    blurb:
      "The non-linear world: trees, graphs, hashing and blockchain. Forty questions in twenty minutes — definitions, properties and small traces, exactly how the deck teaches it.",
    slivers: [
      {
        id: "treefund",
        label: "Tree fundamentals",
        lectures: "L12",
        points: [
          "Hierarchy vocabulary: root, parent, child, leaf, edge, subtree, siblings",
          "Depth vs height of a node/tree; level of a node",
          "The four tree traversals: pre-order, in-order, post-order, level order",
        ],
      },
      {
        id: "treetypes",
        label: "Tree types & applications",
        lectures: "L14",
        points: [
          "General trees vs binary trees (max two children)",
          "Complete binary trees, Binary Search Tree ordering rule, AVL balancing idea",
          "Heaps: min/max, why priority queues live on heaps; real applications (file systems, org charts, decision trees)",
        ],
      },
      {
        id: "graphfund",
        label: "Graph fundamentals",
        lectures: "L15",
        points: [
          "G = (V, E): vertices, edges, degree; adjacency & incidence",
          "When a tree stops being enough — cycles and many-to-many relationships",
          "Every tree is a graph (the nested Venn)",
        ],
      },
      {
        id: "graphtypes",
        label: "Graph types",
        lectures: "L16",
        points: [
          "Directed vs undirected, in-degree vs out-degree",
          "Weighted vs unweighted; connected vs disconnected; cyclic vs acyclic",
          "Social-network readings: followers are directed, friendships are undirected",
        ],
      },
      {
        id: "traversals",
        label: "Graph traversals",
        lectures: "L17",
        points: [
          "DFS: go deep, backtrack — powered by a stack; the four steps",
          "BFS: go wide level by level — powered by a queue; shortest path on unweighted graphs",
          "What each traversal is actually for (maze escape vs broadcast)",
        ],
      },
      {
        id: "hashing",
        label: "Hashing",
        lectures: "L19",
        points: [
          "Hash function → fixed-length digest; the mod-bucket trick for hash tables",
          "Collisions and chaining; why good hash functions spread keys",
          "Cryptographic hashes: passwords, download verification, tamper evidence",
        ],
      },
      {
        id: "blockchain",
        label: "Blockchain",
        lectures: "L20",
        points: [
          "Blocks chained by hashes: change one block, every later hash breaks",
          "Merkle trees watching every transaction inside a block",
          "The network of copies that outvotes any tamperer — distributed trust",
        ],
      },
    ],
  },
  {
    id: "fa",
    name: "Financial Accounting",
    short: "FA",
    sigil: Scale,
    accent: "#10b981",
    accent2: "#047857",
    dateISO: QUIZ2_DAY_1,
    dateLabel: "Sat · 31 Oct",
    joining: "5:45 PM",
    window: "6:00 – 6:30 PM",
    startMin: 18 * 60,
    officialQuestions: 40,
    marks: 40,
    minutes: 30,
    mockMinutes: 60,
    weightage: "30% of the final course grade",
    range: "L16 – L26",
    blurb:
      "The final-accounts stretch: matching to cash flow. Compute-the-figure questions with the lecture's own worked cases — Vogue, Compass, Ajay, Jaws Photo Plus.",
    slivers: [
      {
        id: "matching",
        label: "Matching concept",
        lectures: "L16",
        points: [
          "Cash basis vs accrual basis — the ₹1,000 received on Jan 1 for a year of service",
          "Periodic matching of costs and revenue; replacement-cost lens",
          "Why profit is measured, not received",
        ],
      },
      {
        id: "adjusting",
        label: "Adjusting entries",
        lectures: "L17 · L19",
        points: [
          "Deferrals: prepaid expenses split across periods, unearned revenue booked then earned",
          "Accruals: accrued expenses owed, accrued (unbilled) revenue earned but not received",
          "Depreciation & supplies consumed — Vogue's six adjusting entries (₹60 insurance, ₹800 supplies, ₹50 depreciation, ₹900 unearned, ₹500 salaries, ₹700 unbilled)",
        ],
      },
      {
        id: "trading1",
        label: "Trading account, part 1",
        lectures: "L18",
        points: [
          "Purpose: did buying and selling pay? Sales value vs cost of goods sold",
          "COGS = opening stock + net purchases + direct expenses − closing stock",
          "Gross profit (or gross loss) — the first of the two questions",
        ],
      },
      {
        id: "trading2",
        label: "Trading account, part 2",
        lectures: "L20",
        points: [
          "T-format trading account: the two sides, balancing figure is GP",
          "Six worked examples from the deck — from the simplest result to the full T-format",
          "Sales returns, carriage inwards, wages — where each line lands",
        ],
      },
      {
        id: "pandl",
        label: "P&L account",
        lectures: "L21",
        points: [
          "Operating expenses & incomes close into the P&L; GP becomes its opening figure",
          "Net profit closes into capital — the ladder to the balance sheet",
          "The statement chain: income statement → retained earnings → balance sheet → cash flow",
        ],
      },
      {
        id: "balancesheet",
        label: "Balance sheet",
        lectures: "L22",
        points: [
          "A photograph, not a video: what the firm owns and owes on one date",
          "Current vs fixed assets; liquidity order vs permanency order",
          "Why the two sides must always agree (the dual aspect, made visible)",
        ],
      },
      {
        id: "cashflow1",
        label: "Cash flow, part 1",
        lectures: "L23",
        points: [
          "Why profit ≠ cash — Cathay Pacific: HK$9.2bn of assets bought while reporting an HK$8.6bn loss",
          "The three activities: operating, investing, financing",
          "What the cash flow statement answers that the P&L cannot",
        ],
      },
      {
        id: "cashflow2",
        label: "Cash flow, part 2",
        lectures: "L25",
        points: [
          "Direct vs indirect method — two routes to the same operating cash",
          "Jaws Photo Plus: ₹73,000 profit → ₹69,700 cash, adjustment by adjustment",
          "Start at net income and walk it back — add back the non-cash, remove the non-operating",
        ],
      },
      {
        id: "cashflow3",
        label: "Cash flow, part 3",
        lectures: "L26",
        points: [
          "The indirect method at work — the three adjustment families applied for real",
          "Compass Company lands at ₹72,000 of operating cash; Ajay walks ₹4,32,000 of profit down to ₹3,48,000",
          "Working-capital signs: asset increase → deduct, asset decrease → add; payables mirror",
        ],
      },
    ],
  },
  {
    id: "ebh",
    name: "Economic & Business History",
    short: "EBH",
    sigil: Landmark,
    accent: "#eab308",
    accent2: "#854d0e",
    dateISO: QUIZ2_DAY_2,
    dateLabel: "Sun · 1 Nov",
    joining: "11:45 AM",
    window: "12:00 – 12:20 PM",
    startMin: 12 * 60,
    officialQuestions: 40,
    marks: 40,
    minutes: 20,
    mockMinutes: 40,
    range: "L15 – L23",
    blurb:
      "The Industrial Revolution stretch: the birth of the factory, the labour movement's three phases, empire as economic architecture, the three economic systems, and Taylor's stopwatch — L15 to L23, exactly as the syllabus reads.",
    slivers: [
      {
        id: "factory",
        label: "The factory is born",
        lectures: "L15 · L16",
        points: [
          "Arkwright's water frame leaves the cottage: patents, Cromford Mill, the cascade of mills",
          "The working class takes shape — mill gates, bells and the clock's new discipline",
          "Watt's engine frees the mill from the river; Manchester counts itself up — Cottonopolis, the first industrial city",
        ],
      },
      {
        id: "labour",
        label: "The labour movement",
        lectures: "L17 · L18 · L20",
        points: [
          "Phase one (1760s–1820s): twelve-hour days, child labour, Ned Ludd's frames, the 1799 Combination Acts, Peterloo",
          "Phase two (1824–1830): Place & Hume repeal 500 years of bans — the strike wave, then the 1825 Act's half-freedom",
          "Phase three (1830s–1850s): Doherty's national union, Owen's grand alliance, the Tolpuddle Martyrs, the Factory Acts, the Ten Hours Act, the Chartists",
        ],
      },
      {
        id: "empire",
        label: "Empire & mercantilism",
        lectures: "L19",
        points: [
          "Chartered companies carry the revolution outward",
          "Colonies as suppliers of raw material and buyers of manufactures",
          "British ships and British credit — empire as economic architecture",
        ],
      },
      {
        id: "systems",
        label: "Economic systems",
        lectures: "L21 · L22",
        points: [
          "One question, three answers — who owns the means of production: Smith's markets, socialism's shared ownership, Marx's classless society",
          "Pros, cons and sector-fit for each system",
          "The human ledger: cities swelling, classes forming, time itself standardised — 'time is money'",
        ],
      },
      {
        id: "taylor",
        label: "Division of labour & Taylorism",
        lectures: "L23",
        points: [
          "Adam Smith's pin factory — division of labour multiplies output",
          "Taylor's time-and-motion studies: rule of thumb → stopwatch; the pig-iron experiment",
          "The human cost of scientific management",
        ],
      },
    ],
  },
];

export const QUIZ2_SUBJECT_IDS = QUIZ2_SUBJECTS.map((s) => s.id);

/** local epoch (ms) when a paper officially STARTS on its quiz day */
export function quizStartMs(dateISO: string, startMin: number): number {
  const [y, m, d] = dateISO.split("-").map(Number);
  return new Date(y, m - 1, d, Math.floor(startMin / 60), startMin % 60, 0, 0).getTime();
}

/** the next paper that hasn't started yet, in announcement order —
 *  Sat FoC 4:45 → ATB 5:25 → FA 6:00, then Sun EBH 12:00.
 *  Returns null once every window has opened. */
export function nextQuizStart(now = Date.now()): { subject: Quiz2Subject; ms: number } | null {
  let best: { subject: Quiz2Subject; ms: number } | null = null;
  for (const s of QUIZ2_SUBJECTS) {
    const ms = quizStartMs(s.dateISO, s.startMin);
    if (ms > now && (!best || ms < best.ms)) best = { subject: s, ms };
  }
  return best;
}
