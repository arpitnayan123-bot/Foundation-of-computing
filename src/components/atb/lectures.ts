"use client";

/* ============================================================
   ATB — THE SINGLE SOURCE OF TRUTH (shelf 02).

   One strictly-typed, strictly-ordered array of all 33 official
   lectures (L1 → L33), transcribed from the verified compendium
   "ATB_L01-L33_Compiled.pdf" (30,674 verified words, L01 → L33,
   zero gaps). Every consumer derives from this table and from
   nothing else:

     · AtbHero's lecture picker            (rows + search corpus)
     · AtbApp's chapter groups + nav       (GROUPS = f(ATB_LECTURES))
     · the prev/next LecturePager          (array order IS the order)
     · every section's eyebrow badge       (derived, never hard-coded)
     · CHAPTER_INDEX / section-counts / search corpus twins

   Sidebar order therefore follows lecture order automatically —
   the FA failure (a wrongly assigned group silently reordering
   L28 ahead of L29) is structurally impossible now: the eight
   groups partition L01→L33 in strict ascending runs.

   Record field order is FIXED — parsers (regen/audit/bundle) are
   written against it:
     part, partLabel, group, groupLabel, examStatus.

   Six teaching arcs, anchored on the recap rhythm at 8 · 13 ·
   18 · 23 · 28 plus the final lecture 33:
     Part I   L1–L8   Algorithms: Properties & Representation
     Part II  L9–L13  Linear Data Structures
     Part III L14–L18 Non-Linear Data Structures
     Part IV  L19–L23 Hashing, Blockchain & Networks
     Part V   L24–L28 Search & Complexity
     Part VI  L29–L33 Sorting, Search at Scale & AI
   (The official course places L12 "Trees" inside Part II and the
   recaps inside their parts — reproduced verbatim, never "fixed".)

   examStatus — where the lecture's marks live, per the official
   assessment plan: Quiz One (weekend of October 3rd) covers
   Modules 1–2 → L1–L11; Quiz Two (October 31st) covers the
   complete non-linear data structures including blockchain →
   L12–L20; everything from L21 on is final-exam territory
   (quizzes 40% best two of three, major exam 60%).
   ============================================================ */

export type AtbExamStatus = "quiz-1" | "quiz-2" | "final-exam";

export type AtbGroupId =
  | "intro"
  | "props"
  | "linear"
  | "stackq"
  | "trees"
  | "hash"
  | "search"
  | "algo";

/** the 8 exam banks bind 1:1 to the 8 nav groups (bank ids untouched) */
export type AtbExamGroup = AtbGroupId;

export interface AtbLectureChapter {
  /** the rendered <Section id> — also the ⌘K / flash-jump key */
  id: string;
  label: string;
  desc: string;
  /** the eyebrow theme — rendered as `Part <N> · Lecture <NN> · ${theme}` */
  theme: string;
}

export interface AtbLecture {
  /** "l1".."l33" */
  id: string;
  /** 1–33 */
  n: number;
  /** badge text: "L1".."L33" (official, not zero-padded) */
  code: string;
  /** the official lecture title, byte-exact from the compendium TOC */
  title: string;
  blurb: string;
  /** official course part — verbatim from the compendium TOC headers */
  part: 1 | 2 | 3 | 4 | 5 | 6;
  partLabel: string;
  /** nav group id — the 8 ascending runs */
  group: AtbGroupId;
  groupLabel: string;
  /** where the marks live, per the assessment plan */
  examStatus: AtbExamStatus;
  chapters: AtbLectureChapter[];
}

const PART_I = "Part I · Algorithms: Properties & Representation";
const PART_II = "Part II · Linear Data Structures";
const PART_III = "Part III · Non-Linear Data Structures";
const PART_IV = "Part IV · Hashing, Blockchain & Networks";
const PART_V = "Part V · Search & Complexity";
const PART_VI = "Part VI · Sorting, Search at Scale & AI";

const GL = {
  intro: "Intro",
  props: "Properties",
  linear: "Linear DS",
  stackq: "Stacks & Queues",
  trees: "Trees & Graphs",
  hash: "Hash & Chain",
  search: "Search & Complexity",
  algo: "Sorting at Scale & AI",
} as const;

export const ATB_GROUP_ORDER: { id: AtbGroupId; label: string }[] = [
  { id: "intro", label: GL.intro },
  { id: "props", label: GL.props },
  { id: "linear", label: GL.linear },
  { id: "stackq", label: GL.stackq },
  { id: "trees", label: GL.trees },
  { id: "hash", label: GL.hash },
  { id: "search", label: GL.search },
  { id: "algo", label: GL.algo },
];

export const ATB_LECTURES: AtbLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to Algorithmic Thinking",
    blurb:
      "The tea recipe, the five flowchart symbols, and an ATM that decides — the vocabulary the whole course runs on.",
    part: 1,
    partLabel: PART_I,
    group: "intro",
    groupLabel: GL.intro,
    examStatus: "quiz-1",
    chapters: [
      { id: "intro", label: "Why algorithms?", desc: "From making tea to running an ATM", theme: "Why algorithms" },
      { id: "flowcharts", label: "Flowcharts", desc: "The five symbols every algorithm is drawn with", theme: "Flowcharts" },
      { id: "atm", label: "Decisions", desc: "The ATM machine — branching in action", theme: "ATM decisions" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Introduction to Pseudo Code Representation",
    blurb:
      "From English steps to pseudocode to FIRST CLASS — memory boxes, data types and the average, traced by hand.",
    part: 1,
    partLabel: PART_I,
    group: "intro",
    groupLabel: GL.intro,
    examStatus: "quiz-1",
    chapters: [
      { id: "pseudocode", label: "Pseudocode", desc: "Functions, pseudocode and real code", theme: "Pseudo code" },
      { id: "average", label: "Average, step-by-step", desc: "Memory boxes, data types & FIRST CLASS", theme: "The average, traced" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Introduction to Algorithms and Course Overview",
    blurb:
      "The course itself: the professor's map, the 40/60 assessment, algorithm-vs-code, subjective machines, and the business-analyst bridge.",
    part: 1,
    partLabel: PART_I,
    group: "intro",
    groupLabel: GL.intro,
    examStatus: "quiz-1",
    chapters: [
      { id: "coursemap", label: "Course map", desc: "Assessment · objectives · live & TA rhythm", theme: "The course map" },
      { id: "algvscode", label: "Algorithm vs code", desc: "Logic vs implementation · machines can't 'look okay'", theme: "Algorithm vs code" },
      { id: "babridge", label: "Types & the BA bridge", desc: "Data types · validation · SRS · real-time calls", theme: "Types & the BA bridge" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Properties of Algorithms in Real-World Business Contexts",
    blurb:
      "The five core technical properties, each with a valid twin and a broken one — the classroom counter, the ambiguous tea, the loan that always answers, the 50-unit reorder line.",
    part: 1,
    partLabel: PART_I,
    group: "props",
    groupLabel: GL.props,
    examStatus: "quiz-1",
    chapters: [
      { id: "finiteness", label: "Finiteness", desc: "Countable steps · the store counter that never ends", theme: "Finiteness" },
      { id: "definiteness", label: "Definiteness", desc: "Exact measures · the AGI connection", theme: "Definiteness" },
      { id: "inputs-outputs", label: "Inputs & outputs", desc: "Rectangle area · the loan that always answers", theme: "Well-defined inputs & outputs" },
      { id: "effectiveness", label: "Effectiveness", desc: "The 50-unit reorder line · properties interlock", theme: "Effectiveness" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Second Set of Algorithm Properties and Types of Algorithms",
    blurb:
      "The execution family in depth — language independence, determinism, feasibility, generality — then the three algorithm instincts and the matching exercise.",
    part: 1,
    partLabel: PART_I,
    group: "props",
    groupLabel: GL.props,
    examStatus: "quiz-1",
    chapters: [
      { id: "props2", label: "Execution properties", desc: "Loan vs visa · cloud & ML · the Rahul bonus", theme: "Execution properties" },
      { id: "algotypes", label: "Algorithm types", desc: "Divide & conquer · greedy · dynamic programming", theme: "Types of algorithms" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Introduction to Linear Data Structures and Arrays",
    blurb:
      "Numbered boxes in a row: direct access, two-dimensional grids, and the five operations every structure is measured against.",
    part: 1,
    partLabel: PART_I,
    group: "linear",
    groupLabel: GL.linear,
    examStatus: "quiz-1",
    chapters: [
      { id: "arrays", label: "Arrays", desc: "Indexed, contiguous, direct access", theme: "Arrays" },
      { id: "arrayops", label: "Five operations", desc: "Read · search · insert · update · delete", theme: "The five array operations" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Introduction to Linked Lists and Linear Data Structures",
    blurb:
      "The playlist chain: nodes and pointers, scattered memory, three flavours, pointer surgery, shuffles — and lists of lists.",
    part: 1,
    partLabel: PART_I,
    group: "linear",
    groupLabel: GL.linear,
    examStatus: "quiz-1",
    chapters: [
      { id: "linkedlists", label: "Linked lists", desc: "Flexible chains of songs — nodes, pointers & shuffles", theme: "Linked lists" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Understanding Algorithm Properties and Linear Data Structures",
    blurb:
      "The first live consolidation: the 9 properties re-stacked, the three approaches, and the arrays-vs-linked-lists Venn that settles the choice.",
    part: 1,
    partLabel: PART_I,
    group: "linear",
    groupLabel: GL.linear,
    examStatus: "quiz-1",
    chapters: [
      { id: "recap8", label: "LIVE recap · properties & linear DS", desc: "Lecture 8 · the 9 properties + the three approaches", theme: "Consolidation" },
      { id: "venn8", label: "Arrays vs lists", desc: "The Venn that settles the choice", theme: "Arrays vs lists" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Stacks: A Linear Data Structure with Last-In-First-Out Operations",
    blurb:
      "One door in, one door out: push, pop, peek and size; static vs dynamic builds; overflow, underflow and stacks of stacks.",
    part: 2,
    partLabel: PART_II,
    group: "stackq",
    groupLabel: GL.stackq,
    examStatus: "quiz-1",
    chapters: [
      { id: "stacks", label: "Stacks", desc: "LIFO — the undo machine", theme: "Stacks" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Fundamentals of Queue (Q) Data Structure",
    blurb:
      "The popcorn-counter principle: enqueue at the rear, dequeue at the front, pointer choreography, errors and real deployments.",
    part: 2,
    partLabel: PART_II,
    group: "stackq",
    groupLabel: GL.stackq,
    examStatus: "quiz-1",
    chapters: [
      { id: "queues", label: "Queues", desc: "FIFO — first come, first served", theme: "Queues" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Queue Types and Applications (Part 2)",
    blurb:
      "Linear, circular, priority and double-ended queues — plus the queue of queues that streams your movies.",
    part: 2,
    partLabel: PART_II,
    group: "stackq",
    groupLabel: GL.stackq,
    examStatus: "quiz-1",
    chapters: [
      { id: "qtypes", label: "Queue types", desc: "Linear · circular · priority · deque", theme: "Queue types" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Introduction to Nonlinear Data Structures: Trees",
    blurb:
      "Hierarchy beats sequence: roots, parents and leaves, depth vs height, subtrees — and the four ways to walk a tree.",
    part: 2,
    partLabel: PART_II,
    group: "stackq",
    groupLabel: GL.stackq,
    examStatus: "quiz-2",
    chapters: [
      { id: "trees", label: "Trees", desc: "Hierarchy: roots, parents & leaves", theme: "Trees" },
      { id: "traversals", label: "Traversals", desc: "Pre · in · post · level order", theme: "The four traversals" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Linear Data Structures: Stacks and Queues",
    blurb:
      "The second live consolidation: one Venn that separates LIFO from FIFO, the operations strip, error pairs and the application tour — plus the Quiz One briefing.",
    part: 2,
    partLabel: PART_II,
    group: "stackq",
    groupLabel: GL.stackq,
    examStatus: "quiz-1",
    chapters: [
      { id: "recap13", label: "LIVE recap · stacks & queues", desc: "Lecture 13 · the stack-vs-queue Venn · Quiz One briefing", theme: "Consolidation" },
      { id: "ops13", label: "Ops, errors & apps", desc: "The operations strip · overflow & underflow · where they run", theme: "Operations, errors & applications" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Introduction to Non-Linear Data Structures: Trees and Their Applications",
    blurb:
      "From general trees to heaps: binary, complete, BST, AVL and the parent-child ordering that powers priority queues.",
    part: 3,
    partLabel: PART_III,
    group: "trees",
    groupLabel: GL.trees,
    examStatus: "quiz-2",
    chapters: [
      { id: "treetypes", label: "Tree types", desc: "General → binary → complete · the tree ladder", theme: "Tree types" },
      { id: "bstavl", label: "BST & AVL", desc: "Ordered children · the |h(left)−h(right)| ≤ 1 rule", theme: "BST & the AVL balance rule" },
      { id: "heaps", label: "Heaps", desc: "Complete trees · the parent-child ordering that powers priority queues", theme: "Heaps" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Understanding Graphs: A Non-Linear Data Structure",
    blurb:
      "G = (V, E): vertices, edges and degree — and the honest answer to when a tree stops being enough.",
    part: 3,
    partLabel: PART_III,
    group: "trees",
    groupLabel: GL.trees,
    examStatus: "quiz-2",
    chapters: [
      { id: "graphs", label: "Graphs", desc: "G = (V, E) — relationships", theme: "Graphs" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Graph Properties and Relationship Representation in Networks",
    blurb:
      "Directed vs undirected, in/out-degree, weighted vs unweighted, connected vs disconnected, cyclic vs acyclic — with social-media proof.",
    part: 3,
    partLabel: PART_III,
    group: "trees",
    groupLabel: GL.trees,
    examStatus: "quiz-2",
    chapters: [
      { id: "graphprops", label: "Graph properties", desc: "Direction · weight · connectivity · cycles", theme: "Graph properties" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Graph Traversals: Depth First Search and Breadth First Search",
    blurb:
      "Go deep with a stack or wide with a queue: the two algorithms, their four steps, and what each one is actually for.",
    part: 3,
    partLabel: PART_III,
    group: "trees",
    groupLabel: GL.trees,
    examStatus: "quiz-2",
    chapters: [
      { id: "dfsbfs", label: "DFS & BFS", desc: "Stack vs queue traversal", theme: "DFS & BFS" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Introduction to Non-Linear Data Structures",
    blurb:
      "The third live sweep of trees and graphs — vocabulary, traversals, G = (V, E) — ending in the nested Venn: every tree is a graph.",
    part: 3,
    partLabel: PART_III,
    group: "trees",
    groupLabel: GL.trees,
    examStatus: "quiz-2",
    chapters: [
      { id: "recap18", label: "LIVE recap · trees & graphs", desc: "Lecture 18 · the vocabulary sweep", theme: "Consolidation" },
      { id: "venn18", label: "Every tree is a graph", desc: "The nested Venn", theme: "Every tree is a graph" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Hash Data Structures and Their Applications",
    blurb:
      "Fixed-length digests, mod buckets, collisions and chaining — then the crypto-grade hashes guarding passwords and downloads.",
    part: 4,
    partLabel: PART_IV,
    group: "hash",
    groupLabel: GL.hash,
    examStatus: "quiz-2",
    chapters: [
      { id: "hashing", label: "Hashing", desc: "mod, tables, collisions, passwords", theme: "Hashing" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Conclusion of Non-Linear Data Structures: Introduction to Blockchain",
    blurb:
      "Blocks chained by hashes, Merkle trees watching every transaction, and a network of copies that outvotes any tamperer.",
    part: 4,
    partLabel: PART_IV,
    group: "hash",
    groupLabel: GL.hash,
    examStatus: "quiz-2",
    chapters: [
      { id: "blockchain", label: "Blockchain", desc: "Tamper-evident chains of blocks", theme: "Blockchain" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Search Algorithms and Algorithmic Complexity",
    blurb:
      "Growth rate beats stopwatch: best/average/worst cases, the Big O family drawn as curves, and what every operation really costs.",
    part: 5,
    partLabel: PART_V,
    group: "hash",
    groupLabel: GL.hash,
    examStatus: "final-exam",
    chapters: [
      { id: "complexity", label: "Complexity", desc: "Big O · best/avg/worst · DS costs", theme: "Complexity" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Search Algorithms Overview",
    blurb:
      "Linear, binary, jump, exponential and hash-based search — five strategies, five complexities, one use-case map.",
    part: 5,
    partLabel: PART_V,
    group: "hash",
    groupLabel: GL.hash,
    examStatus: "final-exam",
    chapters: [
      { id: "search", label: "Search", desc: "Linear · binary · jump · exponential · hash", theme: "The five searches" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Tree Types, Hashing, and Blockchain: Concluding Non-Linear Data Structures",
    blurb:
      "The live finale of the non-linear block: the tree ladder, the hash pipeline, the chained block — one three-circle Venn ties all three together, and the Quiz Two briefing lands.",
    part: 4,
    partLabel: PART_IV,
    group: "hash",
    groupLabel: GL.hash,
    examStatus: "quiz-2",
    chapters: [
      { id: "recap23", label: "LIVE recap · trees, hashing & blockchain", desc: "Lecture 23 · the finale rehearsal · Quiz Two briefing", theme: "Consolidation" },
      { id: "venn23", label: "The three-circle finale", desc: "Trees · hashing · blockchain — the Venn view", theme: "The three-circle finale" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Network Search Algorithms: Overview and Implementation",
    blurb:
      "From mapping a network to navigating it: weighted costs, Dijkstra's five steps traced live, A* and the whole variant family.",
    part: 5,
    partLabel: PART_V,
    group: "search",
    groupLabel: GL.search,
    examStatus: "final-exam",
    chapters: [
      { id: "dijkstra", label: "Shortest paths", desc: "Dijkstra · A* · the variant family", theme: "Dijkstra & A*" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Introduction to Sorting Algorithms and Bubble Sort",
    blurb:
      "Why sorted data unlocks search, and how bubble sort bubbles the largest value home — pass by pass, down to O(n²).",
    part: 5,
    partLabel: PART_V,
    group: "search",
    groupLabel: GL.search,
    examStatus: "final-exam",
    chapters: [
      { id: "sorting", label: "Bubble sort", desc: "Why sorted · bubble passes · O(n²)", theme: "Bubble sort" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Selection Sort: A Comprehensive Overview",
    blurb:
      "Select the minimum, swap it home, one swap per pass — and why every variant still pays the O(n²) bill.",
    part: 5,
    partLabel: PART_V,
    group: "search",
    groupLabel: GL.search,
    examStatus: "final-exam",
    chapters: [
      { id: "selectionsort", label: "Selection sort", desc: "Select · swap · one swap per pass · O(n²)", theme: "Selection sort" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Insertion Sort: Concept, Implementation, and Use Cases",
    blurb:
      "Movement, not swapping: each key slides into its sorted home — unbeatable when new items keep arriving.",
    part: 5,
    partLabel: PART_V,
    group: "search",
    groupLabel: GL.search,
    examStatus: "final-exam",
    chapters: [
      { id: "insertionsort", label: "Insertion sort", desc: "Keys · movements · nearly-sorted wins", theme: "Insertion sort" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Overview of Search Algorithms and Complexity Analysis",
    blurb:
      "The search block stitched shut: the Big O ladder, every data structure's price list, the five searches on one final map — and the exam logistics.",
    part: 5,
    partLabel: PART_V,
    group: "search",
    groupLabel: GL.search,
    examStatus: "final-exam",
    chapters: [
      { id: "recap28", label: "Final recap", desc: "Big O ladder · cost tables · five searches · the exam map", theme: "The final overview" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Merge Sort: A Divide and Conquer Sorting Algorithm",
    blurb:
      "Split until trivial, merge until sorted: O(n log n) time, O(n) space, and not a single swap — divide and conquer made visible.",
    part: 6,
    partLabel: PART_VI,
    group: "algo",
    groupLabel: GL.algo,
    examStatus: "final-exam",
    chapters: [
      { id: "mergesort", label: "Merge sort", desc: "Divide & conquer · O(n log n) · O(n) space · no swaps", theme: "Merge sort" },
    ],
  },
  {
    id: "l30",
    n: 30,
    code: "L30",
    title: "Quick Sort: A Divide and Conquer Sorting Algorithm",
    blurb:
      "Partition around a pivot: best case O(n log n), worst case O(n²), and the median-of-three defence taken from first, last and last÷2.",
    part: 6,
    partLabel: PART_VI,
    group: "algo",
    groupLabel: GL.algo,
    examStatus: "final-exam",
    chapters: [
      { id: "quicksort", label: "Quick sort", desc: "Partition · pivot · worst O(n²) · median-of-three", theme: "Quick sort" },
    ],
  },
  {
    id: "l31",
    n: 31,
    code: "L31",
    title: "Integration of Searching and Sorting in Web Search",
    blurb:
      "Why the web's billions of pages are findable at all: sort once, search forever — the pipeline that turns crawling into answers.",
    part: 6,
    partLabel: PART_VI,
    group: "algo",
    groupLabel: GL.algo,
    examStatus: "final-exam",
    chapters: [
      { id: "websearch", label: "Search meets sort", desc: "Crawl · index · sort · search — the pipeline", theme: "Search & sort in web search" },
    ],
  },
  {
    id: "l32",
    n: 32,
    code: "L32",
    title: "Understanding the Relationship Between Algorithms, AI, and Machine Learning",
    blurb:
      "The five-rung ladder — algorithm → expert system → machine learning → deep learning → generative AI — and what each rung eats: labelled gigabytes, unlabelled terabytes.",
    part: 6,
    partLabel: PART_VI,
    group: "algo",
    groupLabel: GL.algo,
    examStatus: "final-exam",
    chapters: [
      { id: "aiml", label: "The five-rung ladder", desc: "Algorithm → expert system → ML → DL → generative AI", theme: "Algorithms, AI & ML" },
    ],
  },
  {
    id: "l33",
    n: 33,
    code: "L33",
    title: "Sorting Algorithms and Web Search Relevance",
    blurb:
      "PageRank closes the course: New Rank = (0.15/N) + 0.85 × (rank received) — 85% following links, 15% jumping, stabilising in 13–14 rounds.",
    part: 6,
    partLabel: PART_VI,
    group: "algo",
    groupLabel: GL.algo,
    examStatus: "final-exam",
    chapters: [
      { id: "pagerank", label: "PageRank", desc: "The rank equation · 85/15 · 13–14 rounds", theme: "PageRank & relevance" },
    ],
  },
];

export const ATB_DEFAULT_LECTURE = ATB_LECTURES[0].id;

export function lectureOfChapter(chapterId: string): AtbLecture | null {
  return ATB_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): AtbLecture | null {
  return ATB_LECTURES.find((l) => l.id === id) ?? null;
}

/** Accepts "l14", "L14", "14", "l014" — returns the lecture or null. */
export function lectureByLooseId(raw: string): AtbLecture | null {
  const m = raw.trim().toLowerCase().match(/^l?0*(\d{1,2})$/);
  if (!m) return null;
  const n = Number(m[1]);
  return ATB_LECTURES.find((l) => l.n === n) ?? null;
}

export const ATB_ALL_CHAPTER_IDS = ATB_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));

/** chapter id → nav group id (chapter override wins, else the lecture's) */
export function groupOfChapter(chapterId: string): AtbGroupId | null {
  for (const l of ATB_LECTURES) {
    const c = l.chapters.find((ch) => ch.id === chapterId);
    if (c) return l.group;
  }
  return null;
}

/** The derived eyebrow — `Part <N> · Lecture <NN> · theme` — never hard-coded.
 *  Throws on an unknown chapter id instead of emitting a fallback, so a
 *  stale section can never ship with a wrong (or silently generic) eyebrow. */
export function eyebrowOf(chapterId: string): string {
  for (const l of ATB_LECTURES) {
    const c = l.chapters.find((ch) => ch.id === chapterId);
    if (c) {
      const roman = ["I", "II", "III", "IV", "V", "VI"][l.part - 1];
      return `Part ${roman} · Lecture ${String(l.n).padStart(2, "0")} · ${c.theme}`;
    }
  }
  throw new Error(`[atb] unknown chapter id "${chapterId}" — add it to atb/lectures.ts first`);
}

/** exam window each nav group's "Test my knowledge" opens (1:1 by id) */
export const ATB_GROUP_EXAMS: Record<AtbGroupId, AtbExamGroup[]> = {
  intro: ["intro"],
  props: ["props"],
  linear: ["linear"],
  stackq: ["stackq"],
  trees: ["trees"],
  hash: ["hash"],
  search: ["search"],
  algo: ["algo"],
};

/**
 * The chapter menu, derived — never hand-written again. The eight groups
 * partition L1→L33 in strict ascending runs, so the sidebar can never
 * reorder lectures (the FA L28-before-L29 failure is structurally impossible).
 */
export const ATB_GROUPS: {
  id: AtbGroupId;
  label: string;
  exams: AtbExamGroup[];
  items: { id: string; label: string; desc: string }[];
}[] = ATB_GROUP_ORDER.map((g) => ({
  id: g.id,
  label: g.label,
  exams: ATB_GROUP_EXAMS[g.id],
  items: ATB_LECTURES.flatMap((l) =>
    l.group === g.id ? l.chapters.map((c) => ({ id: c.id, label: c.label, desc: c.desc })) : [],
  ),
}));

/* ---------- dev-time structural assertions (fail loudly, not politely) ---------- */
if (process.env.NODE_ENV !== "production") {
  const seen: AtbGroupId[] = [];
  for (const l of ATB_LECTURES) {
    if (!seen.includes(l.group)) seen.push(l.group);
  }
  const runsAscending = seen.every((g, i) => {
    const ns = ATB_LECTURES.filter((l) => l.group === g).map((l) => l.n);
    return ns.every((n, j) => j === 0 || n > ATB_LECTURES.filter((l) => l.group === g).map((x) => x.n)[j - 1]);
  });
  const groupRunContiguous = seen.every((g, i) => {
    const ns = ATB_LECTURES.filter((l) => l.group === g).map((l) => l.n);
    return ns.length > 0 && ns.every((n, j) => j === 0 || n === ns[j - 1] + 1);
  });
  // every group appears exactly once as a run, in ATB_GROUP_ORDER order
  const runsMatchOrder = seen.length === ATB_GROUP_ORDER.length && seen.every((g, i) => g === ATB_GROUP_ORDER[i].id);
  if (!(runsAscending && groupRunContiguous && runsMatchOrder)) {
    throw new Error(
      `[atb] group partition broken — groups must partition L1→L33 in ascending contiguous runs in ATB_GROUP_ORDER order (got: ${seen.join(" → ")})`,
    );
  }
}
