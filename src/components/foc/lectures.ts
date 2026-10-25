"use client";

/* ============================================================
   FoC — the lecture sequence (shelf 01).

   "Foundations of Computing" is read lecture-wise: the hero
   holds the 17-lecture sequence, picking a lecture renders
   exactly that lecture's chapter, and every lecture opens with
   a "Foundations of Computing Lecture N" band. Editing this one
   table re-maps the whole reader.

   The chapter ids/labels/descs are the canonical section keys —
   the ⌘K palette, the search corpus, the progress store and the
   SM-2 card deck all depend on them staying identical.
   ============================================================ */

export interface FocLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface FocLecture {
  id: string; // "l1".."l17"
  n: number; // lecture number
  code: string; // badge text: "L1".."L17"
  title: string;
  blurb: string;
  chapters: FocLectureChapter[];
}

export const FOC_LECTURES: FocLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Why Code? The Honest Question",
    blurb: "Karpathy's vibe coding, Codex and Claude Code — Day 1 feels amazing, Day 30 the tower crumbles. What programming actually unlocks that prompting never will.",
    chapters: [
      { id: "why", label: "Why code?", desc: "What programming actually unlocks" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "What Is Computing? The IPO Model",
    blurb: "Every device — calculator, ATM, washing machine — is the same Input → Process → Output pipeline. One Uber ride request runs the full IPO cycle in under half a second.",
    chapters: [
      { id: "computing", label: "Computing", desc: "Input → process → output, everywhere" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "The Four Pillars of Computational Thinking",
    blurb: "Decompose, patterns, abstraction, algorithms — the thinking toolkit every solution stands on, before a single line of code is written.",
    chapters: [
      { id: "pillars", label: "4 Pillars", desc: "Decompose · patterns · abstraction · algorithms" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Data — the Raw Material of Computing",
    blurb: "A raw 72 is data; context makes it information. Climb the DIKW ladder — data → information → knowledge → wisdom — with Netflix and the banks as guides.",
    chapters: [
      { id: "data", label: "Data", desc: "Data → information → knowledge → wisdom" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Algorithms — Recipes a Machine Can Follow",
    blurb: "The property wall: finiteness, definiteness, input, output, effectiveness — and finiteness_trap.py, the infinite loop you will never forget.",
    chapters: [
      { id: "algorithm", label: "Algorithms", desc: "Recipes a machine can follow" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Hardware — Silicon That Makes Ideas Run",
    blurb: "CPU anatomy, a few powerful cores vs thousands of small ones, memory that forgets when the power cuts — the physical foundation every pillar stands on.",
    chapters: [
      { id: "hardware", label: "Hardware", desc: "CPU, memory, sensors & I/O" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Software — Telling the Hardware What to Do",
    blurb: "Operating systems, apps, and the translator problem: interpreter vs compiler — why Python runs line by line while C compiles ahead of time.",
    chapters: [
      { id: "software", label: "Software", desc: "OS, apps, compilers & interpreters" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "From Computing to Programming",
    blurb: "Problem → algorithm → Python code → solution. Meet the language: Guido van Rossum, 1991, readable by design — and why Python is this course's first tongue.",
    chapters: [
      { id: "python", label: "Python", desc: "Meet the language" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Variables, Strings, Numbers & Comments",
    blurb: "Four small ideas every program is made of — labelled boxes for values, quoted text, integers and floats, and the comments that explain you to future-you.",
    chapters: [
      { id: "basics", label: "Basics", desc: "Variables, strings, numbers, input" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Lists — the Workhorse Data Structure",
    blurb: "Ordered collections in square brackets: append, insert, remove, sort, slice — plus the famous copy trap and the tuple that protects data forever.",
    chapters: [
      { id: "lists", label: "Lists", desc: "Ordered collections, slices, tuples" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "If Statements — Teaching Code to Decide",
    blurb: "A fork in the road: one yes/no question, one path taken. Comparisons, and/or/not, the elif ladder from baby to teenager — and the classic traps.",
    chapters: [
      { id: "if", label: "If / Else", desc: "Decisions, comparisons, logic" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Dictionaries — Connecting Pieces of Information",
    blurb: "Key–value pairs that connect what belongs together — favourite languages, pizza toppings — then nesting that models the real world: dicts inside lists inside dicts.",
    chapters: [
      { id: "dicts", label: "Dictionaries", desc: "Key–value pairs & nesting" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "User Input & While Loops — Interactive Programs",
    blurb: "input() makes programs listen; while makes them persist. Follow the input() journey from prompt to usable number, then loop until the user says stop.",
    chapters: [
      { id: "while", label: "While Loops", desc: "Repeat until the job is done" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Functions — Named Blocks That Do One Job",
    blurb: "Define once, call anywhere: the anatomy of def, parameters vs arguments, and why naming a block of code is the first act of scale.",
    chapters: [
      { id: "functions", label: "Functions", desc: "Define, call, reuse — first steps" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Arguments In, Answers Out",
    blurb: "Positional vs keyword arguments, defaults that make parameters optional, and the return statement that hands a result back to the caller.",
    chapters: [
      { id: "args", label: "Args & Return", desc: "Positional, keyword, defaults, return" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Functions at Scale",
    blurb: "The power moves: hand whole lists to functions, let *args and **kwargs accept anything, and split programs into modules you can import.",
    chapters: [
      { id: "funcs2", label: "Funcs × Lists", desc: "Passing lists, *args, **kwargs, modules" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Classes — Blueprints for Objects",
    blurb: "From dictionaries to objects: __init__ builds, self remembers, methods act, inheritance extends — object-oriented programming closes the course.",
    chapters: [
      { id: "classes", label: "Classes", desc: "Objects, __init__, inheritance" },
    ],
  },
];

export const FOC_DEFAULT_LECTURE = FOC_LECTURES[0].id;

export function lectureOfChapter(chapterId: string): FocLecture | null {
  return FOC_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): FocLecture | null {
  return FOC_LECTURES.find((l) => l.id === id) ?? null;
}

/** Every chapter id in reading order — the full chapter shelf. */
export const FOC_ALL_CHAPTER_IDS = FOC_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
