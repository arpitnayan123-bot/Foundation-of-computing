/* ============================================================
   Chapter-level reading progress — the Atlas "furthest read"
   ledger.

   As a reader scrolls a subject's notes, each chapter section
   they reach is marked as read here. The store lives in
   localStorage "atlas:progress:v1" — subject → section id →
   epoch ms of the first read — and feeds the ✓ marks in every
   chapter menu, the landing shelf badges, and the ledger's
   "chapters read" bars.

   Local-first like everything else in the atlas: no backend,
   no accounts, one JSON blob per browser.
   ============================================================ */

export type ProgressStore = Record<string, Record<string, number>>;

const PROGRESS_KEY = "atlas:progress:v1";

export function loadProgress(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProgressStore;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress(store: ProgressStore): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(store));
  } catch {
    /* private mode / quota — reading progress degrades to session-only */
  }
}

/** Mark sections as first-read (merge — earlier timestamps win). */
export function markSectionsSeen(subject: string, ids: string[], now = Date.now()): void {
  if (typeof window === "undefined" || ids.length === 0) return;
  const store = loadProgress();
  const rows = store[subject] ?? {};
  let changed = false;
  for (const id of ids) {
    if (!rows[id]) {
      rows[id] = now;
      changed = true;
    }
  }
  if (!changed) return;
  store[subject] = rows;
  saveProgress(store);
}

/** How many sections of a subject are marked read. */
export function seenCountFor(store: ProgressStore, subject: string): number {
  return Object.keys(store[subject] ?? {}).length;
}

/** Read-count per subject that has any progress at all. */
export function readProgressCounts(): Record<string, number> {
  const store = loadProgress();
  const out: Record<string, number> = {};
  for (const subject of Object.keys(store)) {
    const n = Object.keys(store[subject] ?? {}).length;
    if (n > 0) out[subject] = n;
  }
  return out;
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PROGRESS_KEY);
  } catch {
    /* noop */
  }
}

/** Replace the whole store (backup import). Assumes validated data. */
export function writeProgress(store: ProgressStore): void {
  saveProgress(store);
}
