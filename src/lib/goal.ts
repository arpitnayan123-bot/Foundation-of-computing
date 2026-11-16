/* ============================================================
   THE DAILY GOAL — a small, local-first habit target.

   One number: how many questions the reader wants to face per
   day. The target lives in localStorage ("atlas:goal:v1");
   today's progress is derived from the attempt ledger (every
   finished window and drill appends its rows there), so the
   goal needs no store of its own beyond the target itself.

   The ring reads: answers faced TODAY (correct or not — the
   goal is showing up, not being right).
   ============================================================ */

import { dayKeyFor, loadLedger } from "./ledger";

const GOAL_KEY = "atlas:goal:v1";
export const GOAL_DEFAULT = 10;
export const GOAL_MIN = 5;
export const GOAL_MAX = 50;
export const GOAL_STEP = 5;

export interface GoalStore {
  target: number;
  /** when the target was last changed */
  setAt: number;
}

export function loadGoal(): GoalStore {
  if (typeof window === "undefined") return { target: GOAL_DEFAULT, setAt: 0 };
  try {
    const raw = window.localStorage.getItem(GOAL_KEY);
    if (!raw) return { target: GOAL_DEFAULT, setAt: 0 };
    const parsed = JSON.parse(raw) as Partial<GoalStore>;
    const target = typeof parsed.target === "number" && Number.isFinite(parsed.target) ? parsed.target : GOAL_DEFAULT;
    return { target: clampTarget(target), setAt: typeof parsed.setAt === "number" ? parsed.setAt : 0 };
  } catch {
    return { target: GOAL_DEFAULT, setAt: 0 };
  }
}

function saveGoal(store: GoalStore): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(GOAL_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — the goal degrades to session-only */
  }
}

export function clampTarget(n: number): number {
  if (!Number.isFinite(n)) return GOAL_DEFAULT;
  return Math.max(GOAL_MIN, Math.min(GOAL_MAX, Math.round(n)));
}

/** Nudge the target up/down by GOAL_STEP and persist. Returns the new store. */
export function bumpGoal(delta: number): GoalStore {
  const cur = loadGoal();
  const next: GoalStore = { target: clampTarget(cur.target + delta * GOAL_STEP), setAt: Date.now() };
  saveGoal(next);
  return next;
}

/** Answers faced today — every question inside today's finished
 *  attempts counts, right or wrong. */
export function todayAnswered(now = Date.now()): number {
  const today = dayKeyFor(now);
  let n = 0;
  for (const a of loadLedger().attempts) {
    if (dayKeyFor(a.at) === today) n += a.total;
  }
  return n;
}

export interface GoalStatus {
  target: number;
  done: number;
  met: boolean;
}

export function goalStatus(now = Date.now()): GoalStatus {
  const { target } = loadGoal();
  const done = todayAnswered(now);
  return { target, done, met: done >= target };
}
