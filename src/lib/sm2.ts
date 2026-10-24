/* ============================================================
   SM-2 spaced repetition — the Atlas review scheduler.

   Every graded answer (exam MCQ, self-check, review session)
   feeds one card per question. Cards live in localStorage,
   keyed by subject → question id, so a schedule survives
   reloads without any backend.

   Grading contract (quality 0–5, SuperMemo original):
     5  exam MCQ answered correctly first try
     3  self-check "I got it" (the answer was visible — trust less)
     2  exam MCQ answered wrong  (EF drops, interval resets)
     1  self-check "Not yet"
   ============================================================ */

export interface Sm2Card {
  /** easiness factor — starts at 2.5, clamped to [1.3, 2.8] */
  ef: number;
  /** current interval in days */
  interval: number;
  /** consecutive successful reps (reset on quality < 3) */
  reps: number;
  /** epoch ms when the card is next due */
  due: number;
  /** epoch ms of the last grade */
  last: number;
}

export type Sm2Store = Record<string, Record<string, Sm2Card>>;

const SM2_KEY = "atlas:sm2:v1";
const DAY = 86_400_000;
const MIN_EF = 1.3;
const MAX_EF = 2.8;
/** a card is "mastered" once its interval reaches three weeks */
export const MASTERED_INTERVAL = 21;

function emptyCard(now: number): Sm2Card {
  return { ef: 2.5, interval: 0, reps: 0, due: now, last: 0 };
}

export function loadSm2(): Sm2Store {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(SM2_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Sm2Store;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveSm2(store: Sm2Store): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SM2_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — the schedule silently degrades to session-only */
  }
}

/** SuperMemo-2 grade for one card. Returns the next state. */
export function gradeCard(prev: Sm2Card | undefined, quality: number, now = Date.now()): Sm2Card {
  const card = prev ? { ...prev } : emptyCard(now);
  const q = Math.max(0, Math.min(5, quality));

  if (q < 3) {
    card.reps = 0;
    card.interval = 0;
  } else {
    card.reps += 1;
    if (card.reps === 1) card.interval = 1;
    else if (card.reps === 2) card.interval = 6;
    else card.interval = Math.round(card.interval * card.ef);
  }

  card.ef = Math.max(MIN_EF, Math.min(MAX_EF, card.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))));
  card.last = now;
  card.due = now + Math.max(1, card.interval) * DAY;
  return card;
}

/** Grade one question inside a subject's schedule (creates the row on first grade). */
export function gradeQuestion(subject: string, questionId: string, quality: number, now = Date.now()): void {
  if (typeof window === "undefined") return;
  const store = loadSm2();
  const next = gradeCard(store[subject]?.[questionId], quality, now);
  store[subject] = { ...(store[subject] ?? {}), [questionId]: next };
  saveSm2(store);
}

/** Due (not yet mastered-today) card ids per subject. */
export function dueIds(subject: string, now = Date.now()): string[] {
  const rows = loadSm2()[subject];
  if (!rows) return [];
  return Object.keys(rows).filter((id) => rows[id].due <= now);
}

/** Due-card count for every subject that has a schedule. */
export function dueCounts(now = Date.now()): Record<string, number> {
  const store = loadSm2();
  const out: Record<string, number> = {};
  for (const subject of Object.keys(store)) {
    const rows = store[subject];
    let n = 0;
    for (const id of Object.keys(rows)) if (rows[id].due <= now) n += 1;
    if (n > 0) out[subject] = n;
  }
  return out;
}

export interface SubjectMastery {
  unseen: number;
  learning: number;
  review: number;
  mastered: number;
  total: number;
  /** mastered / (total or scheduled) as 0–100, safe when total is 0 */
  pct: number;
}

/** Mastery split for a subject — counts every bank question, seen or not. */
export function masteryFor(subject: string, bankTotal: number, now = Date.now()): SubjectMastery {
  const rows = loadSm2()[subject] ?? {};
  const m: SubjectMastery = { unseen: 0, learning: 0, review: 0, mastered: 0, total: bankTotal, pct: 0 };
  // classify from the schedule itself, then fill the remainder as unseen
  let learning = 0;
  let review = 0;
  let mastered = 0;
  for (const id of Object.keys(rows)) {
    const c = rows[id];
    if (c.interval >= MASTERED_INTERVAL) mastered += 1;
    else if (c.reps >= 1) learning += 1;
    else review += 1; // graded once, failed — still learning, but weakest tier
  }
  const seen = learning + review + mastered;
  m.learning = learning;
  m.review = review;
  m.mastered = mastered;
  m.unseen = Math.max(0, bankTotal - seen);
  m.pct = bankTotal > 0 ? Math.round((mastered / bankTotal) * 100) : 0;
  return m;
}
