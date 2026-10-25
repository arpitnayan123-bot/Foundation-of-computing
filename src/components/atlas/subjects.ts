import { Compass, Landmark, Lock, Megaphone, Route, Scale, Sigma, type LucideIcon } from "lucide-react";
import { QUESTION_COUNTS } from "@/lib/question-counts";

/* ============================================================
   THE ATLAS — subject registry.
   Every subject on the shelf is described here. A subject is
   either `live` (mounted by the Atlas router when clicked) or
   `soon` (a reserved shelf waiting for its PDF to arrive).

   Adding a subject later = one new entry here + mounting its
   component in src/app/page.tsx. Nothing else changes.
   ============================================================ */

export type SubjectStatus = "live" | "soon";

/** every box is poured from the same mould — this is the one
 *  whisper of motion that makes each box its own (minimal,
 *  ambient, premium). Nothing else differs. */
export type SubjectAmbience = "sweep" | "aura" | "scan" | "spotlight" | "shimmer" | "beacon" | "drift";

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
  /** the box's single minimal ambient animation */
  ambience: SubjectAmbience;
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
    questions: QUESTION_COUNTS.foc,
    examWindows: 4,
    accent: "#f59e0b",
    accent2: "#ea580c",
    icon: Compass,
    status: "live",
    ambience: "sweep",
  },
  {
    id: "atb",
    shelf: "02",
    title: "Algorithmic Thinking in Business",
    short: "ATB Notes",
    tagline: "Data structures & algorithms — no code, all logic.",
    description:
      "The whole no-code course rebuilt as living notes: animated flowcharts, a nine-property wall, memory-box machines, stack & queue machines, a hash table you can poke, and 30 exam-style questions across 6 windows.",
    topics: ["Algorithms & flowcharts", "9 properties", "Arrays & lists", "Stacks & queues", "Trees & graphs", "Hashing & blockchain"],
    chapters: 19,
    questions: QUESTION_COUNTS.atb,
    examWindows: 6,
    accent: "#f43f5e",
    accent2: "#be123c",
    icon: Route,
    status: "live",
    ambience: "aura",
  },
  {
    id: "fa",
    shelf: "03",
    title: "Financial Accounting",
    short: "FA Notes",
    tagline: "Every rupee tells two stories — the whole course, in balance.",
    description:
      "The whole course rebuilt as living notes: a working accounting equation, T-accounts posted for real, a trial balance you can sort, prepaid rupees that split themselves, and 40 exam-style questions across 4 pen-paper windows.",
    topics: ["Dual aspect & equation", "Journal & ledger", "Trial balance", "Five statements", "Adjusting entries", "Trading account & GP"],
    chapters: 16,
    questions: QUESTION_COUNTS.fa,
    examWindows: 4,
    accent: "#10b981",
    accent2: "#047857",
    icon: Scale,
    status: "live",
    ambience: "scan",
  },
  {
    id: "ebh",
    shelf: "04",
    title: "Economic & Business History",
    short: "EBH Notes",
    tagline: "Rules and players — followed across five centuries of change.",
    description:
      "The whole course rebuilt as living notes: a two-by-two that names the field, the guild ladder you can climb, a Silk Road speedometer, the thread race between spinners and weavers, Manchester's mills counting themselves up, and 40 exam-style questions across 4 pen-paper windows.",
    topics: ["Rules & players", "License Raj", "Agrarian & guilds", "Trade routes", "Industrial Revolution", "Labor movement"],
    chapters: 18,
    questions: QUESTION_COUNTS.ebh,
    examWindows: 4,
    accent: "#eab308",
    accent2: "#854d0e",
    icon: Landmark,
    status: "live",
    ambience: "spotlight",
  },
  {
    id: "stm",
    shelf: "05",
    title: "Statistics for Managers",
    short: "STM Notes",
    tagline: "Data → describe → decide — every figure computed, not memorised.",
    description:
      "The whole course rebuilt as living notes: a measurement-scale ladder you can climb, the mean-vs-median outlier machine, a Venn laboratory for the probability laws, Bayes' prior-to-posterior bar, the empirical-rule bell, and 40 exam-style questions across 5 pen-paper windows.",
    topics: ["Scales & data anatomy", "Displays", "Location & spread", "Probability & Bayes", "Distributions", "Sampling cases"],
    chapters: 16,
    questions: QUESTION_COUNTS.stm,
    examWindows: 5,
    accent: "#8b5cf6",
    accent2: "#6d28d9",
    icon: Sigma,
    status: "live",
    ambience: "shimmer",
  },
  {
    id: "mktg",
    shelf: "06",
    title: "Principles of Marketing",
    short: "MKTG Notes",
    tagline: "Why people buy — and why they keep buying.",
    description:
      "The whole course rebuilt as living notes: decline curves for BlackBerry, Hertz and Blockbuster, a cold-coffee P&L you can tune, the ES/DS gap machine, the three-circles POP/POD finder, a Gestalt lab, and 48 exam-style questions across 8 pen-paper windows.",
    topics: ["Value & exchange", "ES/DS & loyalty", "STP", "Positioning & POD/POP", "Consumer journey", "Perception & biases"],
    chapters: 53,
    questions: QUESTION_COUNTS.mktg,
    examWindows: 8,
    accent: "#14b8a6",
    accent2: "#0f766e",
    icon: Megaphone,
    status: "live",
    ambience: "beacon",
  },
  {
    id: "shelf-07",
    shelf: "07",
    title: "Reserved shelf",
    short: "Shelf 07",
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
    ambience: "drift",
  },
];

export const LIVE_SUBJECTS = SUBJECTS.filter((s) => s.status === "live");
export const SUBJECT_IDS = SUBJECTS.map((s) => s.id);
