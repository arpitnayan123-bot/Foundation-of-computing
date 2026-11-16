/* ============================================================
   ACHIEVEMENTS — milestones derived, never stored.

   Every badge is a predicate over a snapshot of the existing
   local stores (attempt ledger, SM-2 schedule, chapter
   progress). There is no fourth store to back up, no unlock
   dates to fake, nothing to corrupt: if the underlying work
   is in the stores, the badge is earned — erase the stores
   and the badge honestly goes with them.

   The snapshot is cheap: the ledger and SM-2 stores are tiny,
   chapter progress is a few dozen keys, and section counts
   are plain literals.
   ============================================================ */

import { BookOpenCheck, CheckCheck, Crown, Flame, Library, Medal, Mountain, PenLine, Sparkles, Sprout, Target, Trophy, type LucideIcon } from "lucide-react";
import { longestStreak, loadLedger, currentStreak } from "./ledger";
import { loadSm2, MASTERED_INTERVAL } from "./sm2";
import { readProgressCounts } from "./progress";
import { SECTION_COUNTS, TOTAL_SECTIONS } from "./section-counts";

export interface AtlasSnapshot {
  attempts: number;
  answered: number;
  accuracyPct: number | null;
  /** any single attempt at a perfect score (≥8 questions) */
  topper: boolean;
  streakNow: number;
  streakBest: number;
  days: number;
  /** SM-2 cards grown to the mastered interval */
  mastered: number;
  /** cards with any schedule at all */
  scheduled: number;
  chaptersRead: number;
  /** shelves whose every chapter has been read */
  shelvesComplete: number;
}

export function computeSnapshot(now = Date.now()): AtlasSnapshot {
  const ledger = loadLedger();
  const answered = ledger.attempts.reduce((n, a) => n + a.total, 0);
  const correct = ledger.attempts.reduce((n, a) => n + a.correct, 0);
  const topper = ledger.attempts.some((a) => a.pct === 100 && a.total >= 8);

  let mastered = 0;
  let scheduled = 0;
  for (const rows of Object.values(loadSm2())) {
    for (const card of Object.values(rows)) {
      scheduled += 1;
      if (card.interval >= MASTERED_INTERVAL) mastered += 1;
    }
  }

  const reads = readProgressCounts();
  let chaptersRead = 0;
  let shelvesComplete = 0;
  for (const [sid, total] of Object.entries(SECTION_COUNTS)) {
    const seen = reads[sid] ?? 0;
    chaptersRead += seen;
    if (seen >= total) shelvesComplete += 1;
  }

  return {
    attempts: ledger.attempts.length,
    answered,
    accuracyPct: answered > 0 ? Math.round((correct / answered) * 100) : null,
    topper,
    streakNow: currentStreak(ledger.days, now),
    streakBest: longestStreak(ledger.days),
    days: ledger.days.length,
    mastered,
    scheduled,
    chaptersRead,
    shelvesComplete,
  };
}

export interface BadgeDef {
  id: string;
  title: string;
  /** one-line hint shown on the locked card */
  hint: string;
  icon: LucideIcon;
  tone: string;
  test: (s: AtlasSnapshot) => boolean;
}

export const BADGES: BadgeDef[] = [
  {
    id: "first-mark",
    title: "First mark",
    hint: "Finish your first practice window",
    icon: PenLine,
    tone: "#f59e0b",
    test: (s) => s.attempts >= 1,
  },
  {
    id: "warmed-up",
    title: "Warmed up",
    hint: "Finish five practice windows",
    icon: Flame,
    tone: "#ea580c",
    test: (s) => s.attempts >= 5,
  },
  {
    id: "week-one",
    title: "Week one",
    hint: "Practice seven days in a row",
    icon: Sparkles,
    tone: "#f5c889",
    test: (s) => s.streakBest >= 7,
  },
  {
    id: "fortnight",
    title: "Fortnight",
    hint: "Fourteen days without missing",
    icon: Medal,
    tone: "#f43f5e",
    test: (s) => s.streakBest >= 14,
  },
  {
    id: "month-straight",
    title: "Month straight",
    hint: "Thirty days of daily practice",
    icon: Trophy,
    tone: "#8b5cf6",
    test: (s) => s.streakBest >= 30,
  },
  {
    id: "century",
    title: "Century",
    hint: "Face one hundred questions",
    icon: Target,
    tone: "#10b981",
    test: (s) => s.answered >= 100,
  },
  {
    id: "five-hundred",
    title: "Five hundred",
    hint: "Five hundred questions faced",
    icon: Mountain,
    tone: "#059669",
    test: (s) => s.answered >= 500,
  },
  {
    id: "sharpshooter",
    title: "Sharpshooter",
    hint: "Hold 90% accuracy over 40+ answers",
    icon: CheckCheck,
    tone: "#8fae5d",
    test: (s) => s.answered >= 40 && (s.accuracyPct ?? 0) >= 90,
  },
  {
    id: "topper",
    title: "Topper",
    hint: "A perfect score on a full window",
    icon: Crown,
    tone: "#eab308",
    test: (s) => s.topper,
  },
  {
    id: "green-thumb",
    title: "Green thumb",
    hint: "Grow ten cards to mastery",
    icon: Sprout,
    tone: "#a9c977",
    test: (s) => s.mastered >= 10,
  },
  {
    id: "bookworm",
    title: "Bookworm",
    hint: "Read every chapter of a shelf",
    icon: BookOpenCheck,
    tone: "#d9a441",
    test: (s) => s.shelvesComplete >= 1,
  },
  {
    id: "librarian",
    title: "Librarian",
    hint: `Walk all ${TOTAL_SECTIONS} chapters of the atlas`,
    icon: Library,
    tone: "#f59e0b",
    test: (s) => s.chaptersRead >= TOTAL_SECTIONS,
  },
];

/** how many of the badges the snapshot has earned */
export function earnedCount(snap: AtlasSnapshot): number {
  return BADGES.reduce((n, b) => n + (b.test(snap) ? 1 : 0), 0);
}
