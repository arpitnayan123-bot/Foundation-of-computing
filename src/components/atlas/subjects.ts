import { Compass, Landmark, Megaphone, Route, Scale, Sigma, type LucideIcon } from "lucide-react";

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
  /** topic chips previewed on the card */
  topics: string[];
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
    topics: ["IPO & Four Pillars", "Data & DIKW", "Algorithms", "Hardware", "Python core", "Functions", "Classes & OOP"],
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
    topics: ["Algorithms & flowcharts", "9 properties", "Arrays & lists", "Stacks & queues", "Trees & graphs", "Hashing & blockchain"],
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
    topics: ["Dual aspect & equation", "Journal & ledger", "Trial balance", "Five statements", "Adjusting entries", "Trading account & GP"],
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
    topics: ["Rules & players", "Agrarian & guilds", "Industrial Revolution", "Labor movement", "Taylor & Fayol", "World Wars", "Indian business history"],
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
    topics: ["Scales & data anatomy", "Displays", "Location & spread", "Probability & Bayes", "Distributions", "Sampling cases"],
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
    topics: ["Value & exchange", "ES/DS & loyalty", "STP", "Positioning & POD/POP", "Consumer journey", "Perception & biases"],
    accent: "#14b8a6",
    accent2: "#0f766e",
    icon: Megaphone,
    status: "live",
    ambience: "beacon",
  },
];

export const LIVE_SUBJECTS = SUBJECTS.filter((s) => s.status === "live");
export const SUBJECT_IDS = SUBJECTS.map((s) => s.id);
