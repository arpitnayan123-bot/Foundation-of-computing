/* ============================================================
   THE COCKPIT — the Atlas flight-plan engine.

   One question every reader asks at the desk: "what should I
   study right now?" The ledger already holds the answer in
   pieces — reading progress, the SM-2 due queue, fragile
   trouble spots, per-shelf mastery — but the reader had to
   assemble it themselves. The cockpit assembles it for them.

   The plan is DETERMINISTIC on purpose: every step must deep-
   link to a real chapter or window, so an AI never picks the
   targets. Three moves, always in the same order:

     READ      the next unread chapter on the least-read shelf
     RECHARGE  clear the SM-2 queue (due cards first, then
               trouble spots, then a schedule-seeding drill)
     STRIKE    a targeted drill on the weakest shelf

   The AI lives one panel below in "Ask the Atlas"
   (app/api/ask) — grounded in the notes, cited, never
   inventing targets. This file stays pure data.

   Handoffs reuse the exact contracts the ⌘K palette already
   uses, so no view needed teaching:
     - chapter jump  → sessionStorage "atlas:open-section"
     - ledger window → "atlas:drill-subject" / "atlas:review-subject"
                       / "atlas:mock-open" / "atlas:forge-open"
   ============================================================ */

import { CHAPTER_INDEX } from "@/lib/chapter-index";
import { QUESTION_COUNTS } from "@/lib/question-counts";
import { SECTION_COUNTS } from "@/lib/section-counts";
import { loadProgress } from "@/lib/progress";
import { countCustomCardsByShelf } from "@/lib/custom-cards";
import { dueCounts, masteryFor } from "@/lib/sm2";
import { troubleSpots } from "@/lib/sm2";
import { dueMistakes } from "@/lib/mistakes";
import { currentStreak, loadLedger } from "@/lib/ledger";
import { goalStatus } from "@/lib/goal";
import { SUBJECTS } from "@/components/atlas/subjects";

export type FlightAction =
  | { type: "section"; subject: string; section: string }
  | { type: "drill"; subject: string }
  | { type: "review"; subject: string }
  | { type: "mock" }
  | { type: "forge" }
  | { type: "mistakes" };

export type FlightKind = "read" | "recharge" | "strike";

export interface FlightStep {
  kind: FlightKind;
  /** uppercase mono kicker, e.g. "read · mktg notes" */
  kicker: string;
  /** the headline of the mission */
  title: string;
  /** the data-driven "why" under the headline */
  note: string;
  /** rough minutes this move costs */
  minutes: number;
  /** the shelf's accent, or cockpit amber for atlas-wide moves */
  accent: string;
  action: FlightAction;
}

export interface PlanStats {
  streak: number;
  due: number;
  goalDone: number;
  goalTarget: number;
  read: number;
  chapters: number;
}

export interface FlightPlan {
  /** one line of cockpit telemetry under the title */
  brief: string;
  steps: FlightStep[];
  totalMinutes: number;
  stats: PlanStats;
  generatedAt: number;
}

const COCKPIT_AMBER = "#f5c889";

/* ------------------------------------------------------------
   handoffs — the same contracts the ⌘K palette uses
   ------------------------------------------------------------ */

/** Chapter jump: the flag is consumed once by the subject app
 *  when it mounts (the palette has always worked this way). */
export function enterSection(subject: string, section: string): void {
  try {
    sessionStorage.setItem("atlas:open-section", JSON.stringify({ subject, section }));
  } catch {
    /* private mode — navigation still lands on the shelf */
  }
  window.location.hash = `#/subject/${subject}`;
  window.scrollTo(0, 0);
}

/** Ledger window handoff: the ledger consumes the flag once on
 *  mount and opens the drill / review / mock / forge / mistake
 *  ledger window. */
export function openLedgerWindow(
  flag:
    | "atlas:drill-subject"
    | "atlas:review-subject"
    | "atlas:mock-open"
    | "atlas:forge-open"
    | "atlas:mistakes-open",
  detail: string
): void {
  try {
    sessionStorage.setItem(flag, detail);
  } catch {
    /* private mode — navigation still lands on the ledger */
  }
  window.location.hash = "#/ledger";
  window.scrollTo(0, 0);
}

/** Run one flight step's action. */
export function runFlightAction(action: FlightAction): void {
  switch (action.type) {
    case "section":
      enterSection(action.subject, action.section);
      break;
    case "drill":
      openLedgerWindow("atlas:drill-subject", action.subject);
      break;
    case "review":
      openLedgerWindow("atlas:review-subject", action.subject);
      break;
    case "mock":
      openLedgerWindow("atlas:mock-open", "1");
      break;
    case "forge":
      openLedgerWindow("atlas:forge-open", "1");
      break;
    case "mistakes":
      openLedgerWindow("atlas:mistakes-open", "1");
      break;
  }
}

/* ------------------------------------------------------------
   the plan itself
   ------------------------------------------------------------ */

export function buildFlightPlan(now = Date.now()): FlightPlan {
  const live = SUBJECTS.filter((s) => s.status === "live");
  const byId = new Map(live.map((s) => [s.id, s]));
  const progress = loadProgress();
  const due = dueCounts(now);
  const customs = countCustomCardsByShelf();
  const streak = currentStreak(loadLedger().days, now);
  const goal = goalStatus(now);
  const trouble = troubleSpots(now, 6);

  const readOf = (id: string) => Object.keys(progress[id] ?? {}).length;
  const chaptersOf = (id: string) => SECTION_COUNTS[id] ?? 0;
  const totalRead = live.reduce((n, s) => n + readOf(s.id), 0);
  const totalChapters = live.reduce((n, s) => n + chaptersOf(s.id), 0);
  const totalDue = Object.values(due).reduce((n, x) => n + x, 0);

  const steps: FlightStep[] = [];

  /* ---- move 1 · READ — the next unread chapter, least-read shelf first ---- */
  let readFound = false;
  const shelvesByRead = [...live].sort(
    (a, b) => readOf(a.id) / Math.max(1, chaptersOf(a.id)) - readOf(b.id) / Math.max(1, chaptersOf(b.id))
  );
  for (const shelf of shelvesByRead) {
    const firstUnread = CHAPTER_INDEX.find(
      (c) => c.subject === shelf.id && !progress[shelf.id]?.[c.section]
    );
    if (!firstUnread) continue;
    readFound = true;
    steps.push({
      kind: "read",
      kicker: `read · ${shelf.short.toLowerCase()}`,
      title: firstUnread.label,
      note:
        readOf(shelf.id) === 0
          ? `Fresh territory — ${chaptersOf(shelf.id)} chapters wait on this shelf`
          : `${readOf(shelf.id)} of ${chaptersOf(shelf.id)} chapters read on this shelf — keep the chain unbroken`,
      minutes: 6,
      accent: shelf.accent,
      action: { type: "section", subject: shelf.id, section: firstUnread.section },
    });
    break;
  }
  if (!readFound) {
    /* every chapter read — prove it under the clock instead */
    steps.push({
      kind: "read",
      kicker: "mock · your rules",
      title: "Sit a full mock exam",
      note: "Every chapter is read — prove it against the clock, then let the plan heal the misses",
      minutes: 25,
      accent: COCKPIT_AMBER,
      action: { type: "mock" },
    });
  }

  /* ---- move 2 · RECHARGE — fresh wounds first, then the SM-2 queue ---- */
  const mistakesDue = dueMistakes(now);
  if (mistakesDue.length > 0) {
    const n = mistakesDue.length;
    const worst = mistakesDue[0];
    steps.push({
      kind: "recharge",
      kicker: "recharge · 错题本",
      title: `Re-solve ${n} logged miss${n === 1 ? "" : "es"}`,
      note:
        worst.subject === mistakesDue[mistakesDue.length - 1].subject
          ? "Your own mistakes come back first — close the loop before it costs marks"
          : "Your mistakes from several shelves are due — the gaokao notebook says re-solve today",
      minutes: Math.max(3, Math.min(10, 2 * n)),
      accent: COCKPIT_AMBER,
      action: { type: "mistakes" },
    });
  } else if (totalDue > 0) {
    const shelfId = Object.keys(due).sort((a, b) => due[b] - due[a])[0];
    const shelf = byId.get(shelfId);
    if (shelf) {
      const n = due[shelfId];
      steps.push({
        kind: "recharge",
        kicker: `recharge · ${shelf.short.toLowerCase()}`,
        title: `Clear ${n} due card${n === 1 ? "" : "s"}`,
        note: "Spaced review — the schedule says these memories fade today",
        minutes: Math.max(3, Math.min(10, Math.ceil(n / 2))),
        accent: shelf.accent,
        action: { type: "review", subject: shelfId },
      });
    }
  } else if (trouble.length > 0 && byId.has(trouble[0].subject)) {
    const shelf = byId.get(trouble[0].subject)!;
    steps.push({
      kind: "recharge",
      kicker: `recharge · ${shelf.short.toLowerCase()}`,
      title: "Chase the trouble spots",
      note: `${trouble.length} fragile card${trouble.length === 1 ? "" : "s"} keep biting — the drill pulls them to the front`,
      minutes: 6,
      accent: shelf.accent,
      action: { type: "drill", subject: shelf.id },
    });
  } else {
    steps.push({
      kind: "recharge",
      kicker: "recharge · all shelves",
      title: "Seed the schedule",
      note: "Nothing due yet — a mixed dozen grades fresh cards onto the SM-2 clock",
      minutes: 6,
      accent: COCKPIT_AMBER,
      action: { type: "drill", subject: "all" },
    });
  }

  /* ---- move 3 · STRIKE — the weakest shelf ---- */
  const ranked = live
    .map((s) => ({
      shelf: s,
      m: masteryFor(
        s.id,
        (QUESTION_COUNTS[s.id as keyof typeof QUESTION_COUNTS] ?? 0) + (customs[s.id] ?? 0),
        now
      ),
    }))
    .sort((a, b) => a.m.pct - b.m.pct || b.m.unseen - a.m.unseen);
  const weakest = ranked[0];
  if (weakest) {
    const untouched = weakest.m.learning + weakest.m.review + weakest.m.mastered === 0;
    steps.push({
      kind: "strike",
      kicker: `strike · ${weakest.shelf.short.toLowerCase()}`,
      title: `Strike ${weakest.shelf.title}`,
      note: untouched
        ? "The weakest shelf on the map — a 12-card strike seeds its first grades"
        : `Weakest shelf at ${weakest.m.pct}% mastered — the drill leads with its fragile cards`,
      minutes: 6,
      accent: weakest.shelf.accent,
      action: { type: "drill", subject: weakest.shelf.id },
    });
  }

  /* ---- the telemetry line ---- */
  const briefBits: string[] = [];
  if (streak > 0) briefBits.push(streak === 1 ? "day-one streak" : `day-${streak} streak`);
  briefBits.push(`${totalRead}/${totalChapters} chapters read`);
  if (totalDue > 0) briefBits.push(`${totalDue} due`);
  if (mistakesDue.length > 0) briefBits.push(`${mistakesDue.length} to re-solve`);
  briefBits.push(goal.met ? "goal met" : `${goal.done}/${goal.target} toward today's goal`);

  return {
    brief: briefBits.join(" · "),
    steps,
    totalMinutes: steps.reduce((n, s) => n + s.minutes, 0),
    stats: { streak, due: totalDue, goalDone: goal.done, goalTarget: goal.target, read: totalRead, chapters: totalChapters },
    generatedAt: now,
  };
}
