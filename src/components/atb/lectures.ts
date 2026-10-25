"use client";

/* ============================================================
   ATB — the lecture sequence.

   The reader picks a lecture in the hero and the page below
   shows exactly that lecture's chapters. Lectures 1-7 have
   been sent by the course (integrated into the notes with
   "Lecture N ·" markers); Module 3 rode in with the original
   course PDFs and will get its lecture number when the user
   sends it. Editing this one table re-maps the whole reader.
   ============================================================ */

export interface AtbLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface AtbLecture {
  id: string; // "l1".."l7" | "m3"
  n: number | null; // lecture number; null = the Module 3 appendix card
  code: string; // badge text: "L1".."L7" | "M3"
  title: string;
  blurb: string;
  chapters: AtbLectureChapter[];
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
    title: "Functions, pseudocode & the first program",
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
    title: "Properties & types of algorithms",
    blurb: "What makes an algorithm a good algorithm — and the greedy, divide-and-conquer and dynamic-programming families.",
    chapters: [
      { id: "properties", label: "9 properties", desc: "Finiteness, determinism, feasibility & friends" },
      { id: "algotypes", label: "Algorithm types", desc: "Divide & conquer · greedy · dynamic programming" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Arrays — the first linear structure",
    blurb: "Numbered boxes in a row: direct access, two-dimensional grids, and the five operations every structure is measured against.",
    chapters: [
      { id: "arrays", label: "Arrays", desc: "Indexed, contiguous, direct access" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Stacks & queues",
    blurb: "LIFO undo machines, FIFO first-come-first-served lines, and the whole queue family from circular to priority.",
    chapters: [
      { id: "stacks", label: "Stacks", desc: "LIFO — the undo machine" },
      { id: "queues", label: "Queues", desc: "FIFO — first come, first served" },
      { id: "qtypes", label: "Queue types", desc: "Linear · circular · priority · deque" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Tree types, hashing & the blockchain",
    blurb: "BSTs and heaps, mod hashing with collisions and passwords, and tamper-evident chains of blocks.",
    chapters: [
      { id: "treetypes", label: "Tree types", desc: "BST · AVL · heaps" },
      { id: "hashing", label: "Hashing", desc: "mod, tables, collisions, passwords" },
      { id: "blockchain", label: "Blockchain", desc: "Tamper-evident chains of blocks" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Introduction to Linked Lists & Linear Data Structures",
    blurb: "The playlist chain: nodes and pointers, scattered memory, three flavours, pointer surgery, shuffles — and lists of lists.",
    chapters: [
      { id: "linkedlists", label: "Linked lists", desc: "Flexible chains of songs — nodes, pointers & shuffles" },
    ],
  },
  {
    id: "m3",
    n: null,
    code: "M3",
    title: "Module 3 · Trees & graphs",
    blurb: "From the original course PDFs — this appendix gets its lecture number as soon as the course reaches it.",
    chapters: [
      { id: "trees", label: "Trees", desc: "Hierarchy: roots, parents & leaves" },
      { id: "traversals", label: "Traversals", desc: "Pre · in · post · level order" },
      { id: "graphs", label: "Graphs", desc: "G = (V, E) — relationships" },
      { id: "dfsbfs", label: "DFS & BFS", desc: "Stack vs queue traversal" },
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

/** Every chapter id in reading order — the full 19-chapter shelf. */
export const ATB_ALL_CHAPTER_IDS = ATB_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
