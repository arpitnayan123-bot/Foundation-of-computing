"use client";

/* ============================================================
   ATB — the lecture sequence.

   The reader picks a lecture in the hero and the page below
   shows exactly that lecture's chapters. The numbering now
   follows the official course deck one-to-one: 28 recorded
   lectures, L1–L28, in the order the PDF sends them
   (lectures 8 · 13 · 18 · 23 are the live sessions, flagged
   `live`). Editing this one table re-maps the whole reader.
   ============================================================ */

export interface AtbLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface AtbLecture {
  id: string; // "l1".."l28"
  n: number | null; // lecture number
  code: string; // badge text: "L1".."L28"
  title: string;
  blurb: string;
  chapters: AtbLectureChapter[];
  live?: boolean; // live session — repeated the recorded lectures' content
}

export const ATB_LECTURES: AtbLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to Algorithmic Thinking",
    blurb: "The tea recipe, the five flowchart symbols, and an ATM that decides — the vocabulary the whole course runs on.",
    chapters: [
      { id: "intro", label: "Why algorithms?", desc: "From making tea to running an ATM" },
      { id: "flowcharts", label: "Flowcharts", desc: "The five symbols every algorithm is drawn with" },
      { id: "atm", label: "Decisions", desc: "The ATM machine — branching in action" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Introduction to Pseudo Code Representation",
    blurb: "From English steps to pseudocode to FIRST CLASS — memory boxes, data types and the average, traced by hand.",
    chapters: [
      { id: "pseudocode", label: "Pseudocode", desc: "Functions, pseudocode and real code" },
      { id: "average", label: "Average, step-by-step", desc: "Memory boxes, data types & FIRST CLASS" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Introduction to Algorithms and Course Overview",
    blurb: "The course itself: no-code by design, the 40/60 assessment, the business-analyst bridge, and why machines can't 'look okay'.",
    chapters: [
      { id: "coursemap", label: "Course map", desc: "Assessment · objectives · the BA bridge · real-time processing" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Properties of Algorithms in Real-World Business Contexts",
    blurb: "What makes an algorithm a good algorithm — the five core technical properties, each with a valid twin and a broken one.",
    chapters: [
      { id: "properties", label: "9 properties", desc: "Finiteness, definiteness, feasibility & friends" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Second Set of Algorithm Properties and Types of Algorithms",
    blurb: "The execution family in depth — language independence, determinism, feasibility, generality — then the three algorithm instincts.",
    chapters: [
      { id: "props2", label: "Execution properties", desc: "Loan vs visa · cloud & ML · the Rahul bonus" },
      { id: "algotypes", label: "Algorithm types", desc: "Divide & conquer · greedy · dynamic programming" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Introduction to Linear Data Structures and Arrays",
    blurb: "Numbered boxes in a row: direct access, two-dimensional grids, and the five operations every structure is measured against.",
    chapters: [
      { id: "arrays", label: "Arrays", desc: "Indexed, contiguous, direct access" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Introduction to Linked Lists and Linear Data Structures",
    blurb: "The playlist chain: nodes and pointers, scattered memory, three flavours, pointer surgery, shuffles — and lists of lists.",
    chapters: [
      { id: "linkedlists", label: "Linked lists", desc: "Flexible chains of songs — nodes, pointers & shuffles" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    live: true,
    title: "LIVE · Understanding Algorithm Properties and Linear Data Structures",
    blurb: "The live recap: the 9 properties, the three algorithm approaches, and an arrays-vs-linked-lists Venn that settles the choice.",
    chapters: [
      { id: "recap8", label: "LIVE recap", desc: "Properties & linear DS — the Venn view" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Stacks — A Linear Data Structure with Last-In-First-Out Operations",
    blurb: "One door in, one door out: push, pop, peek and size; static vs dynamic builds; overflow, underflow and stacks of stacks.",
    chapters: [
      { id: "stacks", label: "Stacks", desc: "LIFO — the undo machine" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Fundamentals of Queue (Q) Data Structure",
    blurb: "The popcorn-counter principle: enqueue at the rear, dequeue at the front, pointer choreography, errors and real deployments.",
    chapters: [
      { id: "queues", label: "Queues", desc: "FIFO — first come, first served" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Queue Types and Applications (Part 2)",
    blurb: "Linear, circular, priority and double-ended queues — plus the queue of queues that streams your movies.",
    chapters: [
      { id: "qtypes", label: "Queue types", desc: "Linear · circular · priority · deque" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Introduction to Nonlinear Data Structures: Trees",
    blurb: "Hierarchy beats sequence: roots, parents and leaves, depth vs height, subtrees — and the four ways to walk a tree.",
    chapters: [
      { id: "trees", label: "Trees", desc: "Hierarchy: roots, parents & leaves" },
      { id: "traversals", label: "Traversals", desc: "Pre · in · post · level order" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    live: true,
    title: "LIVE · Linear Data Structures: Stacks and Queues",
    blurb: "The live recap: one Venn that separates LIFO from FIFO, the operations strip, error pairs and the application tour.",
    chapters: [
      { id: "recap13", label: "LIVE recap", desc: "Stack vs queue — the Venn view" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Introduction to Non-Linear Data Structures: Trees and Their Applications",
    blurb: "From general trees to heaps: binary, complete, BST, AVL and the parent-child ordering that powers priority queues.",
    chapters: [
      { id: "treetypes", label: "Tree types", desc: "General · binary · complete · BST · AVL · heaps" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Understanding Graphs — A Non-Linear Data Structure",
    blurb: "G = (V, E): vertices, edges and degree — and the honest answer to when a tree stops being enough.",
    chapters: [
      { id: "graphs", label: "Graphs", desc: "G = (V, E) — relationships" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Graph Properties and Relationship Representation in Networks",
    blurb: "Directed vs undirected, in/out-degree, weighted vs unweighted, connected vs disconnected, cyclic vs acyclic — with social-media proof.",
    chapters: [
      { id: "graphprops", label: "Graph properties", desc: "Direction · weight · connectivity · cycles" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Graph Traversals — Depth First Search and Breadth First Search",
    blurb: "Go deep with a stack or wide with a queue: the two algorithms, their four steps, and what each one is actually for.",
    chapters: [
      { id: "dfsbfs", label: "DFS & BFS", desc: "Stack vs queue traversal" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    live: true,
    title: "LIVE · Introduction to Non-Linear Data Structures",
    blurb: "The live sweep of trees and graphs — vocabulary, traversals, G = (V, E) — ending in the nested Venn: every tree is a graph.",
    chapters: [
      { id: "recap18", label: "LIVE recap", desc: "Trees & graphs — the Venn view" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Hash Data Structures and Their Applications",
    blurb: "Fixed-length digests, mod buckets, collisions and chaining — then the crypto-grade hashes guarding passwords and downloads.",
    chapters: [
      { id: "hashing", label: "Hashing", desc: "mod, tables, collisions, passwords" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Conclusion of Non-Linear Data Structures: Introduction to Blockchain",
    blurb: "Blocks chained by hashes, Merkle trees watching every transaction, and a network of copies that outvotes any tamperer.",
    chapters: [
      { id: "blockchain", label: "Blockchain", desc: "Tamper-evident chains of blocks" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Search Algorithms and Algorithmic Complexity",
    blurb: "Growth rate beats stopwatch: best/average/worst cases, the Big O family drawn as curves, and what every operation really costs.",
    chapters: [
      { id: "complexity", label: "Complexity", desc: "Big O · best/avg/worst · DS costs" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Search Algorithms Overview",
    blurb: "Linear, binary, jump, exponential and hash-based search — five strategies, five complexities, one use-case map.",
    chapters: [
      { id: "search", label: "Search", desc: "Linear · binary · jump · exponential · hash" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    live: true,
    title: "LIVE · Tree Types, Hashing, and Blockchain",
    blurb: "The live finale: the tree ladder, the hash pipeline, the chained block — one three-circle Venn ties all three together.",
    chapters: [
      { id: "recap23", label: "LIVE recap", desc: "Trees · hashing · blockchain — the Venn view" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Network Search Algorithms: Overview and Implementation",
    blurb: "From mapping a network to navigating it: weighted costs, Dijkstra's five steps traced live, A* and the whole variant family.",
    chapters: [
      { id: "dijkstra", label: "Shortest paths", desc: "Dijkstra · A* · the variant family" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Introduction to Sorting Algorithms and Bubble Sort",
    blurb: "Why sorted data unlocks search, and how bubble sort bubbles the largest value home — pass by pass, down to O(n²).",
    chapters: [
      { id: "sorting", label: "Sorting", desc: "Bubble sort · passes · O(n²)" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Selection Sort — A Comprehensive Overview",
    blurb: "Select the minimum, swap it home, one swap per pass — and why every variant still pays the O(n²) bill.",
    chapters: [
      { id: "selectionsort", label: "Selection sort", desc: "Select · swap · one swap per pass · O(n²)" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Insertion Sort — Concept, Implementation, and Use Cases",
    blurb: "Movement, not swapping: each key slides into its sorted home — unbeatable when new items keep arriving.",
    chapters: [
      { id: "insertionsort", label: "Insertion sort", desc: "Keys · movements · nearly-sorted wins" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Overview of Search Algorithms and Complexity Analysis",
    blurb: "The module stitched shut: the Big O ladder, every data structure's price list, and the five searches on one final map.",
    chapters: [
      { id: "recap28", label: "Final recap", desc: "Big O ladder · cost tables · five searches" },
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

/** Every chapter id in reading order — the full 33-chapter shelf. */
export const ATB_ALL_CHAPTER_IDS = ATB_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
