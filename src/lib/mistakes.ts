/* ============================================================
   THE MISTAKE LEDGER — 错题本 (cuòtí běn).

   The gaokao tradition: top students keep a notebook of every
   mistake — what went wrong, the correct answer, why it
   happened — and re-solve it until it never bites again.
   This store is that notebook, kept automatically: every wrong
   answer in an exam, drill or cockpit check lands here the
   moment it happens.

   The close-the-loop rule:
     - a miss is filed with the question, the correct answer
       and a kind (concept gap / careless / misread)
     - the re-solve comes due the NEXT day (spaced, like SM-2)
     - "nailed it" schedules the next re-solve two days out
     - two consecutive re-solves later, the miss is CLOSED
     - miss the same question again anywhere and it reopens —
       with a higher hit count

   Storage: localStorage "atlas:mistakes:v1". No backend — the
   mistakes stay private to the reader's browser, like every
   other atlas store. backup.ts carries the store, and the
   cockpit's RECHARGE move reads the due count.
   ============================================================ */

export type MissKind = "concept" | "careless" | "misread";

export interface MistakeEntry {
  /** shelf the question grades into, e.g. "mktg" */
  subject: string;
  /** the question's id in its own shelf's schedule */
  id: string;
  /** the reader's own diagnosis — the three-colour pen */
  kind: MissKind;
  /** question text (kept short — the notebook is skimmed) */
  q: string;
  /** the correct answer, plain text */
  answer: string;
  /** MCQ options when the question had them (re-solve fidelity) */
  options?: string[];
  /** how many times this question has been missed */
  hits: number;
  /** epoch ms of the first miss */
  firstAt: number;
  /** epoch ms of the latest miss */
  lastAt: number;
  /** epoch ms when the next re-solve unlocks */
  reDue: number;
  /** consecutive correct re-solves since the last miss */
  streak: number;
  /** epoch ms when the entry was closed — null while open */
  closedAt: number | null;
}

export interface MistakeStore {
  entries: MistakeEntry[];
}

export const MISTAKES_KEY = "atlas:mistakes:v1";
/** the notebook is skimmed, not archived — newest misses win */
export const MAX_MISTAKES = 300;
const DAY = 86_400_000;

function emptyStore(): MistakeStore {
  return { entries: [] };
}

export function loadMistakes(): MistakeStore {
  if (typeof window === "undefined") return emptyStore();
  try {
    const raw = window.localStorage.getItem(MISTAKES_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as Partial<MistakeStore>;
    if (!parsed || !Array.isArray(parsed.entries)) return emptyStore();
    return { entries: parsed.entries.filter((e) => e && typeof e === "object" && typeof e.id === "string") };
  } catch {
    return emptyStore();
  }
}

function saveMistakes(store: MistakeStore): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(MISTAKES_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — the notebook degrades to session-only */
  }
}

function clip(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export interface MissPayload {
  q: string;
  answer: string;
  options?: string[];
}

/** File one miss (or re-miss an existing entry — reopens it). */
export function captureMiss(subject: string, id: string, miss: MissPayload, now = Date.now()): void {
  if (typeof window === "undefined" || !subject || !id) return;
  const store = loadMistakes();
  const existing = store.entries.find((e) => e.subject === subject && e.id === id);
  if (existing) {
    existing.hits += 1;
    existing.lastAt = now;
    existing.reDue = now + DAY;
    existing.streak = 0;
    existing.closedAt = null;
    if (miss.q.trim()) existing.q = clip(miss.q.trim(), 240);
    if (miss.answer.trim()) existing.answer = clip(miss.answer.trim(), 220);
    if (miss.options && miss.options.length > 0) existing.options = miss.options.slice(0, 4).map((o) => clip(o, 160));
    saveMistakes(store);
    return;
  }
  const entry: MistakeEntry = {
    subject,
    id,
    kind: "concept",
    q: clip(miss.q.trim() || id, 240),
    answer: clip(miss.answer.trim(), 220),
    ...(miss.options && miss.options.length > 0 ? { options: miss.options.slice(0, 4).map((o) => clip(o, 160)) } : {}),
    hits: 1,
    firstAt: now,
    lastAt: now,
    reDue: now + DAY,
    streak: 0,
    closedAt: null,
  };
  store.entries = [...store.entries, entry].slice(-MAX_MISTAKES);
  saveMistakes(store);
}

/** The reader re-solved an entry: "true" books a longer gap and
 *  closes the loop on the second consecutive success; "false"
 *  treats it as a fresh miss. Only counts when the re-solve was
 *  actually due (the UI unlocks the buttons at reDue). */
export function recordResolve(subject: string, id: string, ok: boolean, now = Date.now()): void {
  if (typeof window === "undefined") return;
  const store = loadMistakes();
  const entry = store.entries.find((e) => e.subject === subject && e.id === id);
  if (!entry) return;
  if (ok) {
    entry.streak += 1;
    entry.reDue = now + 2 * DAY;
    if (entry.streak >= 2 && now - entry.lastAt >= DAY) entry.closedAt = now;
  } else {
    entry.hits += 1;
    entry.lastAt = now;
    entry.reDue = now + DAY;
    entry.streak = 0;
    entry.closedAt = null;
  }
  saveMistakes(store);
}

/** Move an entry between the three-colour kinds. */
export function setMistakeKind(subject: string, id: string, kind: MissKind): void {
  if (typeof window === "undefined") return;
  const store = loadMistakes();
  const entry = store.entries.find((e) => e.subject === subject && e.id === id);
  if (!entry || entry.kind === kind) return;
  entry.kind = kind;
  saveMistakes(store);
}

/** Open entries, newest misses first. */
export function openMistakes(now = Date.now()): MistakeEntry[] {
  return loadMistakes()
    .entries.filter((e) => e.closedAt === null)
    .sort((a, b) => b.lastAt - a.lastAt || b.hits - a.hits)
    .slice(0, 60);
}

/** Open entries whose re-solve is due now — the cockpit reads this. */
export function dueMistakes(now = Date.now()): MistakeEntry[] {
  return openMistakes(now).filter((e) => e.reDue <= now);
}

/** Recently closed — the quiet trophy shelf of the notebook. */
export function closedMistakes(now = Date.now(), cap = 8): MistakeEntry[] {
  void now;
  return loadMistakes()
    .entries.filter((e) => e.closedAt !== null)
    .sort((a, b) => (b.closedAt ?? 0) - (a.closedAt ?? 0))
    .slice(0, cap);
}

export interface MistakeStats {
  open: number;
  due: number;
  closed: number;
}

export function mistakeStats(now = Date.now()): MistakeStats {
  const store = loadMistakes();
  let open = 0;
  let due = 0;
  let closed = 0;
  for (const e of store.entries) {
    if (e.closedAt !== null) {
      closed += 1;
      continue;
    }
    open += 1;
    if (e.reDue <= now) due += 1;
  }
  return { open, due, closed };
}
