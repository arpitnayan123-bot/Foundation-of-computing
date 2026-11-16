"use client";

/* ============================================================
   FoC — the lecture sequence (shelf 01).

   Mirrors the official deck "Notes_261027_010112.pdf" — 28
   recorded lectures, L1→L28, in exact deck order — plus one
   row for Classes, the on-the-horizon finale whose code is
   already live (the deck's recorded track ends at Functions).

   "Foundations of Computing" is read lecture-wise: the hero
   holds the 29-row sequence, picking a lecture renders exactly
   that lecture's chapter(s), and every lecture opens with a
   "Foundations of Computing Lecture N" band. Editing this one
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
  id: string; // "l1".."l29"
  n: number; // lecture number
  code: string; // badge text: "L1".."L29"
  title: string;
  blurb: string;
  chapters: FocLectureChapter[];
}

export const FOC_LECTURES: FocLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Welcome to Foundations of Computing",
    blurb: "From passive user to active developer — the four learning objectives, why Python wins, and the.sentiment-analysis finale you will build by the end.",
    chapters: [
      { id: "course-map", label: "Course map", desc: "Four objectives · why Python · the finale" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "What Is Computing? The IPO Model",
    blurb: "Computing predates computers by millennia — abacus, navigation tables, WWII human computers. Every app you touch is one Input → Process → Output pipeline.",
    chapters: [
      { id: "computing", label: "Computing", desc: "Input → process → output, everywhere" },
      { id: "pillars", label: "4 Pillars", desc: "Decompose · patterns · abstraction · algorithms" },
      { id: "data", label: "Data & DIKW", desc: "Data → information → knowledge → wisdom" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Data, Classified",
    blurb: "Structured rows vs the 80% unstructured flood, snapshots vs panels vs time series, quantitative vs qualitative — the taxonomy that decides how data gets processed.",
    chapters: [
      { id: "data-types", label: "Data types", desc: "Structured · temporal · quant vs qual" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Programming in the Age of AI",
    blurb: "The evaluation scheme (10·30·60), the vibe-coding trap, why Google and Meta rehired after the AI layoffs, and the enterprise IPO model at zettabyte scale.",
    chapters: [
      { id: "why", label: "Why code?", desc: "What programming actually unlocks" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Algorithms — Recipes a Machine Can Follow",
    blurb: "Al-Qarizmi's 9th-century legacy, the odd/even recipe, and the property wall: finiteness, definiteness, input, output, effectiveness — with the infinite loop you'll never forget.",
    chapters: [
      { id: "algorithm", label: "Algorithms", desc: "Recipes a machine can follow" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Hardware — Silicon That Makes Ideas Run",
    blurb: "Sensors translate the world to signals, the CPU's ALU+CU brain, thousands of GPU cores, RAM that forgets, ROM that can't — and AlexNet's 2012 proof that GPUs change everything.",
    chapters: [
      { id: "hardware", label: "Hardware", desc: "CPU, memory, sensors & I/O" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Software — Telling the Hardware What to Do",
    blurb: "Communication, browsers, entertainment, professional tools — then the translator problem: interpreter vs compiler, and why Python's line-by-line style wins for learning.",
    chapters: [
      { id: "software", label: "Software", desc: "OS, apps, compilers & interpreters" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Python, First Contact",
    blurb: "Google Colab in the browser, .ipynb notebooks, variables and their naming law, the NameError traceback — and the string methods you'll use every single day.",
    chapters: [
      { id: "python", label: "Python", desc: "Meet the language" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "When Computing Meets the World",
    blurb: "Knight Capital loses $440M in 45 minutes, Netflix finds 3.2M people pausing at 42:15, Zara plans six months ahead, and a bank learns why redlining is illegal.",
    chapters: [
      { id: "case-files", label: "Case files", desc: "Knight Capital · Netflix · Zara · redlining" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Numbers, Strings & Comments",
    blurb: "Arithmetic and BODMAS, the 0.30000000000000004 surprise, why \"happy\" + 23 explodes and str() fixes it — and the # comments professionals live by.",
    chapters: [
      { id: "basics", label: "Basics", desc: "Variables, strings, numbers, comments" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Lists — the Workhorse Data Structure",
    blurb: "Square brackets, zero-based indexing, negative indexing from the end — then modify, append, insert, and the three ways to delete: del, pop, remove.",
    chapters: [
      { id: "lists", label: "Lists", desc: "Ordered collections, indexing, add & remove" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Putting Lists in Order",
    blurb: "sort() rearranges forever, sorted() only pretends to, reverse() flips, len() counts — and the off-by-one index error every beginner donates to the gods.",
    chapters: [
      { id: "list-organize", label: "Organize", desc: "sort · sorted · reverse · len · index errors" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Loops & the Indentation Law",
    blurb: "The for loop walks a list so you don't print 250 lines by hand — and indentation stops being style and becomes syntax, with the four classic errors to dodge.",
    chapters: [
      { id: "for-loops", label: "For loops", desc: "Loop a list · the indentation law" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Checkpoint — Quiz One",
    blurb: "60 MCQs in 20 minutes, best two of three recorded. A guided lap around everything so far: data, algorithms, hardware, software, and your first Python.",
    chapters: [
      { id: "checkpoint-1", label: "Checkpoint 1", desc: "Recap · quiz format · predict the output" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Numeric Lists, Ranges & Slices",
    blurb: "range() never includes its end, list comprehensions fold four lines into one, min/max/sum do the maths, and slices cut lists without wounding them.",
    chapters: [
      { id: "numeric-lists", label: "Numeric lists", desc: "range · comprehensions · statistics · slices" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Copies & Tuples",
    blurb: "friend_foods = my_foods[:] copies; friend_foods = my_foods merely aliases. And the tuple: the immutable list whose TypeError is a feature, not a bug.",
    chapters: [
      { id: "copies-tuples", label: "Copies & tuples", desc: "Copy vs reference · immutable tuples" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Conditional Tests",
    blurb: "== asks, = assigns. Case-insensitive checks with .lower(), the and/or truth table, in and not in — the True/False heart of every if statement.",
    chapters: [
      { id: "if", label: "If / Else", desc: "Decisions, comparisons, logic" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "If, Elif, Else",
    blurb: "One road or many: simple if, if-else, the elif ladder that stops at the first true test — and independent ifs that check every topping, not just the first.",
    chapters: [
      { id: "branches", label: "Branches", desc: "if-else · elif ladders · independent ifs" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "The Skills Lab",
    blurb: "Everything so far, compressed — then the shipment-inventory challenge: remove, insert, replace, pop, append, delete. Six moves, one list, no mercy.",
    chapters: [
      { id: "skills-lab", label: "Skills lab", desc: "Recap · the shipment inventory challenge" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "If × Lists",
    blurb: "Special toppings that need apologies, the empty list that is secretly False, and two lists checked against each other before the kitchen fires up.",
    chapters: [
      { id: "if-lists", label: "If × lists", desc: "Special items · empty checks · multiple lists" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Dictionaries — Connecting Pieces of Information",
    blurb: "Curly braces and key–value pairs: alien_0 gets a colour and 5 points, values change, pairs delete — and favourite_languages connects people to code.",
    chapters: [
      { id: "dicts", label: "Dictionaries", desc: "Key–value pairs & the safe lookup" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Looping Through Dictionaries",
    blurb: ".items() walks pairs, .keys() is optional, sorted() imposes order, and set() quietly deletes the duplicates from your values.",
    chapters: [
      { id: "dict-loops", label: "Dict loops", desc: "items · keys · sorted · values · sets" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Nesting — Structures Inside Structures",
    blurb: "Thirty aliens generated by one loop, a pizza that carries a list of toppings, users who are dictionaries inside a dictionary — the real world is nested.",
    chapters: [
      { id: "nesting", label: "Nesting", desc: "List of dicts · dict of lists · dict of dicts" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "The Records Lab",
    blurb: "Five students, three scores each: filter the under-60 average, reward the 90+ distinction, insert at the front, sort by name — a complete data pipeline in one sitting.",
    chapters: [
      { id: "records-lab", label: "Records lab", desc: "Filter · reward · insert · sort" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Input & While Loops",
    blurb: "input() pauses and listens, int() turns text into numbers, % reveals even and odd — and the while loop runs as long as its condition holds true.",
    chapters: [
      { id: "while", label: "While loops", desc: "Repeat until the job is done" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Flags, Break & Continue",
    blurb: "One Boolean to rule the loop, break to leave it mid-stride, continue to skip a beat — then while loops that safely move users between lists and scrub every cat.",
    chapters: [
      { id: "loop-control", label: "Loop control", desc: "Flags · break · continue · while with data" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Functions I — Define & Call",
    blurb: "def names a block of code; a docstring explains it; parameters take input, positional and keyword arguments deliver it, and defaults make some of it optional.",
    chapters: [
      { id: "functions", label: "Functions", desc: "Define, call, reuse — first steps" },
      { id: "args", label: "Arguments", desc: "Positional, keyword, defaults & errors" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Functions II — Return & Deliver",
    blurb: "return hands a result back to the caller, optional arguments bend to missing middle names, lists travel into functions — and the slice trick keeps the original safe.",
    chapters: [
      { id: "returns", label: "Return values", desc: "return · optional args · dict builders" },
      { id: "funcs2", label: "Funcs × Lists", desc: "Passing lists, *args, **kwargs, modules" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Classes — Ahead of the Deck",
    blurb: "The recorded track ends at Functions — but the code for the next lectures is already alive: objects, __init__, inheritance, and a car that becomes electric.",
    chapters: [
      { id: "classes", label: "Classes", desc: "Objects, __init__, inheritance — the finale" },
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

export const FOC_ALL_CHAPTER_IDS = FOC_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
