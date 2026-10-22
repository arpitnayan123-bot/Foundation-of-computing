import { Compass, Lock, Route, type LucideIcon } from "lucide-react";
import { TOTAL_QUESTIONS } from "@/components/notes/questions";
import { ATB_TOTAL_QUESTIONS } from "@/components/atb/questions";

/* ============================================================
   THE ATLAS — subject registry.
   Every subject on the shelf is described here. A subject is
   either `live` (mounted by the Atlas router when clicked) or
   `soon` (a reserved shelf waiting for its PDF to arrive).

   Adding a subject later = one new entry here + mounting its
   component in src/app/page.tsx. Nothing else changes.
   ============================================================ */

export type SubjectStatus = "live" | "soon";

export interface Subject {
  /** stable id — used in the hash route (#/subject/<id>) */
  id: string;
  /** shelf number, zero-padded for display */
  shelf: string;
  title: string;
  /** compact name for tight spaces (nav chips) */
  short: string;
  tagline: string;
  /** one-line promise shown under the title */
  description: string;
  /** topic chips previewed on the card */
  topics: string[];
  /** null while the shelf is reserved */
  chapters: number | null;
  /** null while the shelf is reserved */
  questions: number | null;
  /** number of exam windows this subject ships (null while reserved) */
  examWindows: number | null;
  accent: string;
  accent2: string;
  icon: LucideIcon;
  status: SubjectStatus;
}

export const SUBJECTS: Subject[] = [
  {
    id: "foc",
    shelf: "01",
    title: "Foundations of Computing",
    short: "FoC Notes",
    tagline: "From the IPO model to object-oriented Python — the whole course, alive.",
    description:
      "Every concept of the course distilled into living notes: animated diagrams, 120 exam-style questions across 4 pen-paper windows, and real CPython 3.12 running in the browser.",
    topics: ["IPO & Four Pillars", "Data & DIKW", "Algorithms", "Hardware", "Python core", "Functions", "Classes & OOP"],
    chapters: 17,
    questions: TOTAL_QUESTIONS,
    examWindows: 4,
    accent: "#f59e0b",
    accent2: "#ea580c",
    icon: Compass,
    status: "live",
  },
  {
    id: "atb",
    shelf: "02",
    title: "Algorithmic Thinking in Business",
    short: "ATB Notes",
    tagline: "Data structures & algorithms — no code, all logic.",
    description:
      "The whole no-code course rebuilt as living notes: animated flowcharts, a nine-property wall, memory-box machines, stack/queue/BST/hash/graph labs you can poke, and 30 exam-style questions across 6 windows.",
    topics: ["Algorithms & flowcharts", "9 properties", "Arrays & lists", "Stacks & queues", "Trees & graphs", "Hashing & blockchain"],
    chapters: 19,
    questions: ATB_TOTAL_QUESTIONS,
    examWindows: 6,
    accent: "#f43f5e",
    accent2: "#be123c",
    icon: Route,
    status: "live",
  },
  {
    id: "shelf-03",
    shelf: "03",
    title: "Reserved shelf",
    short: "Shelf 03",
    tagline: "The next PDF drops here.",
    description: "This shelf fills in as each subject is rebuilt Atlas-style — same living diagrams, same exam simulators, same pen-paper soul.",
    topics: ["awaiting syllabus"],
    chapters: null,
    questions: null,
    examWindows: null,
    accent: "#84cc16",
    accent2: "#3f6212",
    icon: Lock,
    status: "soon",
  },
  {
    id: "shelf-04",
    shelf: "04",
    title: "Reserved shelf",
    short: "Shelf 04",
    tagline: "The next PDF drops here.",
    description: "This shelf fills in as each subject is rebuilt Atlas-style — same living diagrams, same exam simulators, same pen-paper soul.",
    topics: ["awaiting syllabus"],
    chapters: null,
    questions: null,
    examWindows: null,
    accent: "#eab308",
    accent2: "#854d0e",
    icon: Lock,
    status: "soon",
  },
  {
    id: "shelf-05",
    shelf: "05",
    title: "Reserved shelf",
    short: "Shelf 05",
    tagline: "The next PDF drops here.",
    description: "This shelf fills in as each subject is rebuilt Atlas-style — same living diagrams, same exam simulators, same pen-paper soul.",
    topics: ["awaiting syllabus"],
    chapters: null,
    questions: null,
    examWindows: null,
    accent: "#2dd4bf",
    accent2: "#0f766e",
    icon: Lock,
    status: "soon",
  },
  {
    id: "shelf-06",
    shelf: "06",
    title: "Reserved shelf",
    short: "Shelf 06",
    tagline: "The next PDF drops here.",
    description: "This shelf fills in as each subject is rebuilt Atlas-style — same living diagrams, same exam simulators, same pen-paper soul.",
    topics: ["awaiting syllabus"],
    chapters: null,
    questions: null,
    examWindows: null,
    accent: "#fb923c",
    accent2: "#c2410c",
    icon: Lock,
    status: "soon",
  },
];

export const LIVE_SUBJECTS = SUBJECTS.filter((s) => s.status === "live");
export const SUBJECT_IDS = SUBJECTS.map((s) => s.id);
