/* ============================================================
   Lecture clarity tracker — "is this lecture clear or not?"

   Every lecture of a subject can be marked CLEAR (✓ understood)
   or UNCLEAR (still fuzzy) by the reader. The store lives in
   localStorage "atlas:clarity:v1" — subject → lecture id →
   status — and feeds the clarity pills on the lecture reader
   band, the dots in the hero lecture list, and the shelf
   summary line.

   Local-first like everything else in the atlas: no backend,
   no accounts, one JSON blob per browser. Rides the backup
   export via the same pattern as progress/mistakes.
   ============================================================ */

export type ClarityStatus = "clear" | "unclear";

export type ClarityStore = Record<string, Record<string, ClarityStatus>>;

export const CLARITY_KEY = "atlas:clarity:v1";

export function loadClarity(): ClarityStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(CLARITY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ClarityStore;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveClarity(store: ClarityStore): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CLARITY_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — clarity degrades to session-only */
  }
}

/** Set one lecture's clarity. Pass undefined to clear the mark. */
export function setClarity(subject: string, lectureId: string, status: ClarityStatus | undefined): void {
  if (typeof window === "undefined") return;
  const store = loadClarity();
  const rows = store[subject] ?? {};
  if (status) rows[lectureId] = status;
  else delete rows[lectureId];
  store[subject] = rows;
  saveClarity(store);
}

/** All clarity statuses for one subject — lecture id → status. */
export function clarityFor(subject: string): Record<string, ClarityStatus> {
  return loadClarity()[subject] ?? {};
}

/** How many lectures of a subject sit in each state. */
export function clarityCounts(subject: string, lectureIds: string[]): { clear: number; unclear: number } {
  const rows = clarityFor(subject);
  let clear = 0;
  let unclear = 0;
  for (const id of lectureIds) {
    if (rows[id] === "clear") clear += 1;
    else if (rows[id] === "unclear") unclear += 1;
  }
  return { clear, unclear };
}
