/* ============================================================
   The Atlas ledger — a persistent, local-first attempt log.

   Every finished exam window (and every spaced-review session)
   appends one attempt row here. The ledger view (#/ledger)
   reads this store plus the SM-2 schedule to render the
   reader's progress: accuracy per shelf, mastery, streaks.

   Storage: localStorage "atlas:ledger:v1". No backend — the
   notes stay private to the reader's browser, exactly like the
   exam drafts.
   ============================================================ */

export interface LedgerAttempt {
  /** subject id, e.g. "foc" */
  subject: string;
  /** exam group id, or "review-<date>" for spaced-review sessions */
  group: string;
  /** window title as shown in the header */
  title: string;
  correct: number;
  total: number;
  pct: number;
  /** seconds on the clock when finished */
  seconds: number;
  /** epoch ms of the finish */
  at: number;
}

export interface LedgerStore {
  attempts: LedgerAttempt[];
  /** YYYY-MM-DD days on which any attempt finished — powers the streak */
  days: string[];
}

const LEDGER_KEY = "atlas:ledger:v1";
const MAX_ATTEMPTS = 400;

export function loadLedger(): LedgerStore {
  if (typeof window === "undefined") return { attempts: [], days: [] };
  try {
    const raw = window.localStorage.getItem(LEDGER_KEY);
    if (!raw) return { attempts: [], days: [] };
    const parsed = JSON.parse(raw) as Partial<LedgerStore>;
    return {
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
      days: Array.isArray(parsed.days) ? parsed.days : [],
    };
  } catch {
    return { attempts: [], days: [] };
  }
}

function saveLedger(store: LedgerStore): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LEDGER_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — the ledger degrades to session-only */
  }
}

function dayKey(at: number): string {
  const d = new Date(at);
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

/** Public day key ("YYYY-MM-DD") for an epoch ms timestamp —
 *  the practice heatmap groups attempts by this key. */
export function dayKeyFor(at: number): string {
  return dayKey(at);
}

/** Append a finished attempt (deduped per subject+group+question-count burst:
 *  the engine guards against double-finish, so plain append is correct). */
export function logAttempt(attempt: Omit<LedgerAttempt, "at">, now = Date.now()): void {
  if (typeof window === "undefined") return;
  const store = loadLedger();
  const row: LedgerAttempt = { ...attempt, at: now };
  const day = dayKey(now);
  store.attempts = [...store.attempts, row].slice(-MAX_ATTEMPTS);
  if (!store.days.includes(day)) store.days = [...store.days, day].slice(-400);
  saveLedger(store);
}

/** Current streak of consecutive practiced days, ending today or yesterday. */
export function currentStreak(days: string[], now = Date.now()): number {
  if (days.length === 0) return 0;
  const set = new Set(days);
  const d = new Date(now);
  // streak may end today or yesterday and still be "alive"
  const key = (dt: Date) => dayKey(dt.getTime());
  if (!set.has(key(d))) {
    d.setDate(d.getDate() - 1);
    if (!set.has(key(d))) return 0;
  }
  let streak = 0;
  while (set.has(key(d))) {
    streak += 1;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

export interface SubjectLedgerStats {
  attempts: number;
  bestPct: number;
  lastPct: number | null;
  lastAt: number | null;
  totalAnswered: number;
  totalCorrect: number;
}

export function statsFor(store: LedgerStore, subject: string): SubjectLedgerStats {
  const rows = store.attempts.filter((a) => a.subject === subject);
  if (rows.length === 0) {
    return { attempts: 0, bestPct: 0, lastPct: null, lastAt: null, totalAnswered: 0, totalCorrect: 0 };
  }
  const totalAnswered = rows.reduce((n, a) => n + a.total, 0);
  const totalCorrect = rows.reduce((n, a) => n + a.correct, 0);
  const last = rows[rows.length - 1];
  return {
    attempts: rows.length,
    bestPct: rows.reduce((b, a) => Math.max(b, a.pct), 0),
    lastPct: last.pct,
    lastAt: last.at,
    totalAnswered,
    totalCorrect,
  };
}

export function clearLedger(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(LEDGER_KEY);
  } catch {
    /* noop */
  }
}
