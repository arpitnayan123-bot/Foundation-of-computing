/* ============================================================
   YONAOSHI (夜直し) — the evening debrief.

   The Japanese study rhythm closes each day the same way:
   a few minutes, spoken plainly, on what today taught you.
   Not a journal — a debrief. Two lines, once a day, and the
   streak of debriefs becomes its own quiet discipline.

   Storage: localStorage "atlas:reflection:v1". One entry per
   day (re-saving overwrites today's line), capped at 200
   entries. backup.ts carries the store; nothing leaves the
   browser.
   ============================================================ */

export interface ReflectionEntry {
  /** the day this debrief belongs to, "YYYY-MM-DD" */
  date: string;
  /** the reader's own words, plain text */
  text: string;
  /** epoch ms when saved (latest save of the day) */
  createdAt: number;
}

export interface ReflectionStore {
  entries: ReflectionEntry[];
}

export const REFLECTION_KEY = "atlas:reflection:v1";
export const REFLECTION_MAX = 200;
/** honest two-liner — plenty for the debrief */
export const REFLECTION_MAX_CHARS = 600;

function emptyStore(): ReflectionStore {
  return { entries: [] };
}

function dayKey(at: number): string {
  const d = new Date(at);
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function loadReflections(): ReflectionStore {
  if (typeof window === "undefined") return emptyStore();
  try {
    const raw = window.localStorage.getItem(REFLECTION_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as Partial<ReflectionStore>;
    if (!parsed || !Array.isArray(parsed.entries)) return emptyStore();
    return {
      entries: parsed.entries.filter(
        (e) => e && typeof e === "object" && typeof e.date === "string" && typeof e.text === "string"
      ),
    };
  } catch {
    return emptyStore();
  }
}

function saveReflections(store: ReflectionStore): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(REFLECTION_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — the debrief degrades to session-only */
  }
}

/** Save (or overwrite) today's debrief. Returns the entry. */
export function saveReflection(text: string, now = Date.now()): ReflectionEntry {
  const entry: ReflectionEntry = {
    date: dayKey(now),
    text: text.trim().slice(0, REFLECTION_MAX_CHARS),
    createdAt: now,
  };
  const store = loadReflections();
  const rest = store.entries.filter((e) => e.date !== entry.date);
  store.entries = [...rest, entry].slice(-REFLECTION_MAX);
  saveReflections(store);
  return entry;
}

/** Today's debrief, when one exists. */
export function reflectionForDay(now = Date.now()): ReflectionEntry | null {
  const date = dayKey(now);
  return loadReflections().entries.find((e) => e.date === date) ?? null;
}

/** Newest debriefs first (today included). */
export function recentReflections(cap = 5): ReflectionEntry[] {
  return [...loadReflections().entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, cap);
}

/** Consecutive days with a debrief, ending today or yesterday —
 *  the same alive-streak rule the practice ledger uses. */
export function reflectionStreak(now = Date.now()): number {
  const dates = new Set(loadReflections().entries.map((e) => e.date));
  if (dates.size === 0) return 0;
  const d = new Date(now);
  const key = (dt: Date) => dayKey(dt.getTime());
  if (!dates.has(key(d))) {
    d.setDate(d.getDate() - 1);
    if (!dates.has(key(d))) return 0;
  }
  let streak = 0;
  while (dates.has(key(d))) {
    streak += 1;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
