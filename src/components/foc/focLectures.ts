"use client";

/* ============================================================
   FoC — THE SINGLE SOURCE OF TRUTH (shelf 01).

   One strictly-typed, strictly-ordered array of all 34 official
   lectures (L01 → L34), transcribed from the verified compendium
   "FoC_L01-L34_Compiled.pdf". Every consumer derives from this
   table and from nothing else:

     · FocHero's lecture picker        (rows + exam-status pills)
     · FocApp's chapter groups + nav   (GROUPS = f(FOC_LECTURES))
     · the prev/next LecturePager      (array order IS the order)
     · every section's eyebrow badge   ("Lecture NN · …")
     · CHAPTER_INDEX / section-counts / search corpus twins

   Chapter ids are the canonical section keys — the ⌘K palette,
   the search corpus, the progress store and the SM-2 card deck
   all depend on them staying identical. Changing a chapter id
   here requires regenerating the static twins in src/lib.

   examStatus (per Lecture 34):
     · "quiz-only"  → L01–L09 foundations; already assessed by the
                      quizzes, EXCLUDED from the 60-mark end term.
     · "final-exam" → 100% of the 60-mark paper comes from these.
   ============================================================ */

export type FocExamStatus = "quiz-only" | "final-exam";

export interface FocLectureChapter {
  /** the rendered <Section id> — also the ⌘K / flash-jump key */
  id: string;
  label: string;
  desc: string;
  /** optional nav-group override (defaults to the lecture's group) */
  group?: FocGroupId;
}

export type FocGroupId = "foundations" | "pillars" | "pycore" | "decisions" | "loops" | "pro";

export interface FocLecture {
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
  group: FocGroupId;
  groupLabel: string;
  /** where the marks live, per Lecture 34 */
  examStatus: FocExamStatus;
  chapters: FocLectureChapter[];
}

export const FOC_GROUP_ORDER: { id: FocGroupId; label: string }[] = [
  { id: "foundations", label: "Foundations" },
  { id: "pillars", label: "Pillars & Cases" },
  { id: "pycore", label: "Python Core" },
  { id: "decisions", label: "Decisions & Data" },
  { id: "loops", label: "Loops" },
  { id: "pro", label: "Functions & OOP" },
];

const PART_I = "Computing Fundamentals & Data";
const PART_II = "Python Core, Lists & Tuples";
const PART_III = "Conditionals, Dictionaries & Labs";
const PART_IV = "Input, While Loops & Functions";
const PART_V = "Exam Formats, Modules, OOP & Guidelines";

export const FOC_LECTURES: FocLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L01",
    title: "Welcome to Foundations of Computing",
    blurb:
      "From passive user to active developer — the four learning objectives, why Python wins, the learning outcomes, and the sentiment-analysis finale you will build by the end.",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Foundations",
    examStatus: "quiz-only",
    chapters: [
      { id: "course-map", label: "Course map", desc: "Four objectives · why Python · learning outcomes" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L02",
    title: "Introduction to Foundations of Computing and Programming",
    blurb:
      "Computing predates computers by millennia — abacus, navigation tables, WWII human computers. Every app you touch is one Input → Process → Output pipeline, and computing is not the computer.",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Foundations",
    examStatus: "quiz-only",
    chapters: [
      { id: "computing", label: "Computing", desc: "IPO · six everyday examples · computing vs computer" },
      { id: "pillars", label: "4 Pillars", desc: "Data · algorithms · hardware · software" },
      { id: "data", label: "Data & DIKW", desc: "Data → information → knowledge → wisdom" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L03",
    title: "Understanding Data: Classification and Organization",
    blurb:
      "Structured rows vs the 80% unstructured flood, snapshots vs panels vs time series, quantitative vs qualitative — plus the primary-vs-secondary intro. The taxonomy that decides how data gets processed.",
    part: 1,
    partLabel: PART_I,
    group: "foundations",
    groupLabel: "Foundations",
    examStatus: "quiz-only",
    chapters: [
      { id: "data-types", label: "Data types", desc: "Structured · temporal · quant vs qual · origin intro" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L04",
    title: "Introduction to Computing and Programming Foundations",
    blurb:
      "Dr. Raman Pathak opens the course: the evaluation scheme, the vibe-coding trap, why Google and Meta rehired after the AI layoffs — and the enterprise IPO model at zettabyte scale on the cloud.",
    part: 1,
    partLabel: PART_I,
    group: "pillars",
    groupLabel: "Pillars & Cases",
    examStatus: "quiz-only",
    chapters: [
      { id: "why", label: "Why code?", desc: "Vibe coding · enterprise IPO · the cloud" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L05",
    title: "Foundations of Computing: Data Classification and Introduction to Algorithms",
    blurb:
      "The fourth classification — primary vs secondary data and metadata — then the second pillar: Al-Qarizmi's legacy, the odd/even recipe, and the property wall: finiteness, definiteness, input, output, effectiveness.",
    part: 1,
    partLabel: PART_I,
    group: "pillars",
    groupLabel: "Pillars & Cases",
    examStatus: "quiz-only",
    chapters: [
      { id: "data-origin", label: "Data origin", desc: "Primary · secondary · metadata", group: "foundations" },
      { id: "algorithm", label: "Algorithms", desc: "Odd/even · the five properties · structures" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L06",
    title: "Hardware: The Physical Foundation of Computing",
    blurb:
      "AlexNet's 2012 proof that GPUs change everything, the CPU's ALU+CU brain, the 8-row sensor table, RAM that forgets and ROM that can't — then the OS, utility software and productivity apps that run on top.",
    part: 1,
    partLabel: PART_I,
    group: "pillars",
    groupLabel: "Pillars & Cases",
    examStatus: "quiz-only",
    chapters: [
      { id: "hardware", label: "Hardware", desc: "CPU · GPU · memory · sensors & I/O" },
      { id: "system-software", label: "System software", desc: "OS · utilities · productivity apps" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L07",
    title: "Overview of Application Software and Programming Fundamentals",
    blurb:
      "Communication, browsers, entertainment, professional tools — then the translator problem: interpreter vs compiler, why Python's line-by-line style wins, Google Colab, and the 5-step bridge from computing to programming.",
    part: 1,
    partLabel: PART_I,
    group: "pillars",
    groupLabel: "Pillars & Cases",
    examStatus: "quiz-only",
    chapters: [
      { id: "software", label: "Software", desc: "App software · editors & IDEs · translators" },
      { id: "python", label: "Python", desc: "Why Python · Colab · the 5-step bridge" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L08",
    title: "Introduction to Python Programming Foundations",
    blurb:
      "Google Colab and the .ipynb notebook, variables and their seven naming laws, the NameError traceback — then strings: .title()/.upper()/.lower(), concatenation, \\t & \\n, stripping whitespace, alternating quotes, and methods vs functions.",
    part: 1,
    partLabel: PART_I,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "basics", label: "Python, first contact", desc: "Colab · variables · naming · strings · methods" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L09",
    title: "Overview of Computing Models and Data Classification",
    blurb:
      "The foundations lap: IPO at Uber scale, Knight Capital's $440M lesson, AgroStar, the ECG, Zara — then the four pillars, the DIKW pyramid with Netflix at 42:15, redlining ethics, and the full data-classification recap.",
    part: 1,
    partLabel: PART_I,
    group: "pillars",
    groupLabel: "Pillars & Cases",
    examStatus: "quiz-only",
    chapters: [
      { id: "case-files", label: "Case files", desc: "Knight Capital · Netflix · Zara · the recap wall" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Introduction to Python Programming: Variables, Numbers, Strings, Comments, and Lists",
    blurb:
      "Arithmetic and BODMAS, the 0.30000000000000004 surprise, why \"happy\" + 23 explodes and str() fixes it, the # comments professionals live by — and your first look at lists.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "numbers", label: "Numbers & comments", desc: "Arithmetic · BODMAS · floats · str() · lists intro" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Introduction to Lists in Python",
    blurb:
      "Square brackets, zero-based indexing, negative indexing from the end — then modify, append, insert, and the three ways to delete: del, pop, remove — plus the guide to choosing the right one.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "lists", label: "Lists", desc: "Ordered collections, indexing, add & remove" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Organizing a List",
    blurb:
      "sort() rearranges forever, sorted() only pretends to, reverse() flips, len() counts — and the off-by-one index error every beginner donates to the gods.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "list-organize", label: "Organize", desc: "sort · sorted · reverse · len · index errors" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Working with Lists: Looping and Indentation Management",
    blurb:
      "The for loop walks a list so you don't print 250 lines by hand — and indentation stops being style and becomes syntax, with the four classic errors to dodge.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "for-loops", label: "For loops", desc: "Loop a list · the indentation law" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Overview of Computing Fundamentals and Python Programming Introduction",
    blurb:
      "Quiz One checkpoint: 60 MCQs in 20 minutes, best two of three recorded — plus the full fundamentals lap, from quant-vs-qual to the Mac Mini M4 and the offline pen-paper end term.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "checkpoint-1", label: "Checkpoint 1", desc: "Quiz 1 format · the fundamentals lap · rehearsal" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Foundations of Python Programming: Working with Lists",
    blurb:
      "range() never includes its end, list comprehensions fold four lines into one, min/max/sum do the maths, and slices cut lists without wounding them — omitted ends and negative indices included.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "numeric-lists", label: "Numeric lists", desc: "range · comprehensions · statistics · slices" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Foundations of Computing: Working with Lists and Tuples",
    blurb:
      "friend_foods = my_foods[:] copies; friend_foods = my_foods merely aliases. And the tuple: the immutable list whose TypeError is a feature, not a bug.",
    part: 2,
    partLabel: PART_II,
    group: "pycore",
    groupLabel: "Python Core",
    examStatus: "final-exam",
    chapters: [
      { id: "copies-tuples", label: "Copies & tuples", desc: "Copy vs reference · immutable tuples" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Introduction to Conditional Tests in Foundations of Computing",
    blurb:
      "== asks, = assigns. Case-insensitive checks with .lower(), the and/or truth table (True and False = False), in and not in — the True/False heart of every if statement.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "if", label: "If / Else", desc: "Conditional tests, comparisons, logic" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Foundations of Computing: If Statements",
    blurb:
      "One road or many: simple if, if-else, the elif ladder that stops at the first true test — and independent ifs that check every topping, not just the first.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "branches", label: "Branches", desc: "if-else · elif ladders · independent ifs" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Introduction to Python Programming Fundamentals",
    blurb:
      "Everything so far, compressed — the LLM literacy analogy, f-string decimal formatting, the full list toolkit and its comparison tables — then the shipment inventory: eight moves, one list, no mercy.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "skills-lab", label: "Skills lab", desc: "Recap · the 8-step shipment challenge" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Using If Statements with Lists",
    blurb:
      "Special toppings that need apologies, the empty list that is secretly False, and two lists checked against each other before the kitchen fires up.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "if-lists", label: "If × lists", desc: "Special items · empty checks · multiple lists" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Introduction to Dictionaries in Python",
    blurb:
      "Curly braces and key–value pairs: alien_0 gets a colour and 5 points, values change, pairs delete — and favorite_languages connects people to code across multiple lines.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "dicts", label: "Dictionaries", desc: "Key–value pairs, add/modify/delete" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Looping Through a Dictionary in Python",
    blurb:
      ".items() walks pairs, .keys() is optional, sorted() imposes order, and set() quietly deletes the duplicates from your values.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "dict-loops", label: "Dict loops", desc: "items · keys · sorted · values · sets" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Nesting in Dictionaries: Combining Data Structures in Python",
    blurb:
      "Thirty aliens generated by one range(30) loop, a pizza that carries a list of toppings, users who are dictionaries inside a dictionary — the real world is nested.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "nesting", label: "Nesting", desc: "List of dicts · dict of lists · dict of dicts" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Python Lists: Operations, Control Flow, and Data Manipulation",
    blurb:
      "Five students, three scores each: filter the under-60 average without mutating while iterating, reward the 90+ distinction, insert at the front, sort by name — a complete data pipeline in one sitting.",
    part: 3,
    partLabel: PART_III,
    group: "decisions",
    groupLabel: "Decisions & Data",
    examStatus: "final-exam",
    chapters: [
      { id: "records-lab", label: "Records lab", desc: "Filter · reward · insert · sort" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Foundations of Computing: User Input and While Loops",
    blurb:
      "input() pauses and listens, int() turns text into numbers (ValueError when it can't), % reveals even and odd — and the while loop runs as long as its condition holds true.",
    part: 4,
    partLabel: PART_IV,
    group: "loops",
    groupLabel: "Loops",
    examStatus: "final-exam",
    chapters: [
      { id: "while", label: "While loops", desc: "input() · int() · modulo · repeat until done" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Foundations of Computing: User Input and While Loops",
    blurb:
      "One Boolean to rule the loop, break to leave it mid-stride, continue to skip a beat — then while loops that safely move users between lists, scrub every cat, and fill a mountain-poll dictionary.",
    part: 4,
    partLabel: PART_IV,
    group: "loops",
    groupLabel: "Loops",
    examStatus: "final-exam",
    chapters: [
      { id: "loop-control", label: "Loop control", desc: "Flags · break · continue · while with data" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Introduction to Functions in Python",
    blurb:
      "def names a block of code; a docstring explains it; parameters take input, positional and keyword arguments deliver it, defaults make some of it optional — and five equivalent calls prove the point.",
    part: 4,
    partLabel: PART_IV,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "functions", label: "Functions", desc: "Define, call, reuse — first steps" },
      { id: "args", label: "Arguments", desc: "Positional, keyword, defaults & errors" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Second Lecture on Functions: Return Values, Optional Arguments, and List Management",
    blurb:
      "return hands a result back to the caller, optional middle names bend to missing data, dictionaries come back from functions, while loops drive them — and lists travel in and out, protected by the slice trick.",
    part: 4,
    partLabel: PART_IV,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "returns", label: "Return values", desc: "return · optional args · dicts · lists in & out" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Type of Questions in the Final Examination",
    blurb:
      "The exam, decoded: very short with reasoned True/False, three-sentence shorts, five-mark longs, flowcharts and pseudocode, exact-case output prediction, and error spotting with the half-marks rule — plus the pointer to the final updated pattern in Lecture 34.",
    part: 5,
    partLabel: PART_V,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "question-types", label: "Question types", desc: "Very short · short · long · output · errors" },
    ],
  },
  {
    id: "l30",
    n: 30,
    code: "L30",
    title: "Functions: Passing Arguments, Modules, and Imports",
    blurb:
      "The power moves: *toppings packs a tuple, **user_info builds a dictionary, size rides first and arbitrary arguments ride last — then everything moves into pizza.py and imports itself back five different ways.",
    part: 5,
    partLabel: PART_V,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "funcs3", label: "Funcs × args", desc: "*args · **kwargs · modules & imports" },
    ],
  },
  {
    id: "l31",
    n: 31,
    code: "L31",
    title: "Introduction to Classes in Object-Oriented Programming",
    blurb:
      "The blueprint and the house: Dog learns to sit and roll over, __init__ runs itself, self is passed automatically, and my_dog / your_dog live separate lives — plus the Car that returns its own name.",
    part: 5,
    partLabel: PART_V,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "oop-intro", label: "Classes I", desc: "Dog class · instances · self · methods" },
    ],
  },
  {
    id: "l32",
    n: 32,
    code: "L32",
    title: "Foundations of Computing: Classes and Inheritance",
    blurb:
      "Default odometers, the three ways to change an attribute, ElectricCar calling super().__init__, batteries becoming attributes of themselves — and the four-row access matrix that decides who may call what.",
    part: 5,
    partLabel: PART_V,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "oop-inherit", label: "Classes II", desc: "Attributes · inheritance · composition" },
    ],
  },
  {
    id: "l33",
    n: 33,
    code: "L33",
    title: "Last Session on Foundations of Computing: Classes and Importing",
    blurb:
      "Classes move into modules and back: from car import Car, whole modules with dot notation, module-into-module wiring — then the standard library hands you OrderedDict and randint(1, 6) for the dice.",
    part: 5,
    partLabel: PART_V,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "oop-imports", label: "Classes III", desc: "Module imports · the standard library" },
    ],
  },
  {
    id: "l34",
    n: 34,
    code: "L34",
    title: "Course Assessment and Examination Guidelines",
    blurb:
      "The final word: 40% quizzes (best one of two, never the average), 60% on one 2-hour paper, the IIT bell curve, 20 short answers and 5 exact-output questions — and the map showing that 100% of the marks live in the Python syllabus.",
    part: 5,
    partLabel: PART_V,
    group: "pro",
    groupLabel: "Functions & OOP",
    examStatus: "final-exam",
    chapters: [
      { id: "final-exam", label: "Final exam", desc: "60 marks · 25 questions · the syllabus map" },
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

/** Accepts "l14", "L14", "14", "l014" — returns the lecture or null. */
export function lectureByLooseId(raw: string): FocLecture | null {
  const m = raw.trim().toLowerCase().match(/^l?0*(\d{1,2})$/);
  if (!m) return null;
  return FOC_LECTURES.find((l) => l.n === Number(m[1])) ?? null;
}

export const FOC_ALL_CHAPTER_IDS = FOC_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
/** chapter id → nav group id (chapter override wins, else the lecture's) */
export function groupOfChapter(chapterId: string): FocGroupId | null {
  for (const l of FOC_LECTURES) {
    const c = l.chapters.find((ch) => ch.id === chapterId);
    if (c) return c.group ?? l.group;
  }
  return null;
}

/**
 * The chapter menu, derived — never hand-written again. Ordered by
 * lecture order; each chapter inherits its lecture's group unless it
 * overrides. Exam banks key off the same six group ids.
 */
export const FOC_GROUPS: {
  id: FocGroupId;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = FOC_GROUP_ORDER.map((g) => ({
  id: g.id,
  label: g.label,
  items: FOC_LECTURES.flatMap((l) =>
    l.chapters
      .filter((c) => (c.group ?? l.group) === g.id)
      .map((c) => ({ id: c.id, label: c.label, desc: c.desc })),
  ),
}));
