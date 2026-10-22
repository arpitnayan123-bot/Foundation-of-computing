/* ============================================================
   SHELF 03 — question banks (SCAFFOLD SEED).

   The pen-paper engine behind this file is the same lineage as
   FoC (120 Qs) and ATB (30 Qs): mcq | output | short, instant
   checking, model answers, navigator, timer, results report.

   The SIX questions below are SEEDS — they exercise every
   answer format so the windows are fully playable on day one.
   When the shelf-03 syllabus drops, replace the seed banks
   with the real question sets (keep the interfaces, rename the
   groups to the real chapter clusters) and update:
     · Shelf03ExamGroup / SHELF03_EXAM_GROUPS / SHELF03_EXAM_BANKS
     · ATB-style chapter GROUPS inside Shelf03App.tsx
   Nothing in the engine or the shell needs to change.
   ============================================================ */

export type Shelf03ExamGroup = "core" | "kit";
export type Shelf03QuestionType = "mcq" | "output" | "short";

export interface Shelf03ExamQuestion {
  id: string;
  type: Shelf03QuestionType;
  q: string;
  code?: string; // optional panel shown with the question
  options?: string[]; // mcq only
  answer?: number; // mcq only — index of the correct option
  answerText?: string; // output → exact printed result; short → model answer
  explain?: string;
}

export interface Shelf03ExamBank {
  group: Shelf03ExamGroup;
  title: string;
  subtitle: string;
  topics: string;
  questions: Shelf03ExamQuestion[];
}

/* ------------------------------------------------------------
   SEED GROUP 1 — CORE  (how an Atlas subject is read)
   ------------------------------------------------------------ */
const CORE: Shelf03ExamQuestion[] = [
  {
    id: "s1",
    type: "mcq",
    q: "(Seed) You open a chapter on an Atlas shelf. What is the reading path designed to do?",
    options: [
      "Dump the entire PDF onto one page",
      "Number the concepts so a first-time reader always knows where they are",
      "Hide the exam questions until the end of the course",
      "Replace the lecturer's slides entirely",
    ],
    answer: 1,
    explain:
      "Every chapter is numbered into a reading path — follow the numbers and the story of the concept unfolds in order. It is a guide rail, not a PDF dump, not a slide replacement, and the exam windows are open from the very first screen.",
  },
  {
    id: "s2",
    type: "short",
    q: "(Seed) In one or two lines: why does the Atlas insist on pen-paper style exam windows instead of auto-graded flashcards?",
    answerText:
      "Because the real assessment is written by hand — write-the-output, trace-the-steps, definitions. Practising in the same format you will be examined in is the whole point; the model answers then let you self-check like a marking scheme would.",
    explain:
      "Match the exam's format, not a gamified approximation. Every window mirrors pen-paper question styles and hands you model answers to mark yourself against — that transfer is where the marks live.",
  },
  {
    id: "s3",
    type: "mcq",
    q: "(Seed) A concept diagram on an Atlas page is animated and pokeable. What is that animation FOR?",
    options: [
      "Decoration — it just looks premium",
      "It shows process: states changing over time, which a static picture freezes",
      "It tests your mouse skills",
      "It saves bandwidth compared to images",
    ],
    answer: 1,
    explain:
      "The machines move because the concepts move — a stack pushes and pops, a queue rotates, a hash chains. Animation exposes the process over time that a static textbook figure has to freeze, and poking it builds the mental model faster than re-reading.",
  },
];

/* ------------------------------------------------------------
   SEED GROUP 2 — KIT  (what this staging build already carries)
   ------------------------------------------------------------ */
const KIT: Shelf03ExamQuestion[] = [
  {
    id: "k1",
    type: "output",
    q: "(Seed) This pseudocode from the staging build runs. What exactly appears on screen?",
    code: 'CHAPTERS ← "waiting for the syllabus"\nOUTPUT "shelf 03 · status: staging"\nOUTPUT LENGTH(CHAPTERS), "characters of anticipation"',
    answerText: "shelf 03 · status: staging\n24 characters of anticipation",
    explain:
      'Line 1 prints the literal. Line 2: LENGTH("waiting for the syllabus") — waiting(7) + for(3) + the(3) + syllabus(8) = 21 letters, plus the 3 spaces between the words = 24. Exact printed output, exact count — the format real exams love. Replace this seed with the real bank when the PDF drops.',
  },
  {
    id: "k2",
    type: "mcq",
    q: "(Seed) Which parts of this staging build are already live and pokeable right now?",
    options: [
      "Nothing — it is a pure placeholder page",
      "The grouped chapter nav, scroll-spy, quiz drills and both exam windows",
      "Only the footer signature",
      "Only the exam windows",
    ],
    answer: 1,
    explain:
      "Everything structural is live: the grouped chapter navigation with scroll-spy and progress rail, the in-page quiz and drill widgets, the practice band, and two seeded pen-paper exam windows with timer, navigator and results report. Only the SUBJECT CONTENT waits for the syllabus.",
  },
  {
    id: "k3",
    type: "short",
    q: "(Seed) When the shelf-03 syllabus arrives, list the four things that get poured in (the recipe).",
    answerText:
      "1) Chapters — every section of the PDF rebuilt as animated, numbered reading-path sections.\n2) Machines — one pokeable diagram or widget per concept.\n3) Exam bank — real pen-paper questions grouped per chapter cluster, replacing the seeds.\n4) The flip — subjects.ts status → live, and the reserved box on the Atlas shelf opens.",
    explain:
      "The pour recipe: chapters, machines, exam bank, flip. The scaffold exists so that step four is a one-line change — the shell, engine and design system are already armed.",
  },
];

export const SHELF03_EXAM_BANKS: Record<Shelf03ExamGroup, Shelf03ExamBank> = {
  core: {
    group: "core",
    title: "The Atlas method — seed window",
    subtitle: "how these notes are meant to be read",
    topics: "reading path · pen-paper practice · living diagrams",
    questions: CORE,
  },
  kit: {
    group: "kit",
    title: "The staging kit — seed window",
    subtitle: "what is already armed on this shelf",
    topics: "scaffold inventory · the pour recipe",
    questions: KIT,
  },
};

export const SHELF03_EXAM_GROUPS: Shelf03ExamGroup[] = ["core", "kit"];
export const SHELF03_TOTAL_QUESTIONS =
  Object.values(SHELF03_EXAM_BANKS).reduce((n, b) => n + b.questions.length, 0);
