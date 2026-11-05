/* ============================================================
   THE SHELF REGISTER — lecture tables, fetched one shelf at a
   time. The Revision Radio needs a shelf's lecture outlines
   (title · blurb · chapters) only while that shelf is open, so
   each table lazy-loads here instead of riding in the shell
   bundle — the landing's first paint stays untouched.
   ============================================================ */

export interface RadioLecture {
  id: string;
  n: number;
  code: string;
  title: string;
  blurb: string;
  chapters: { id: string; label: string; desc: string }[];
}

type TableLoader = () => Promise<{ lectures: RadioLecture[] }>;

const LOADERS: Record<string, TableLoader> = {
  foc: () =>
    import("@/components/foc/lectures").then((m) => ({
      lectures: m.FOC_LECTURES as RadioLecture[],
    })),
  atb: () =>
    import("@/components/atb/lectures").then((m) => ({
      lectures: m.ATB_LECTURES as RadioLecture[],
    })),
  fa: () =>
    import("@/components/fa/lectures").then((m) => ({
      lectures: m.FA_LECTURES as RadioLecture[],
    })),
  ebh: () =>
    import("@/components/ebh/lectures").then((m) => ({
      lectures: m.EBH_LECTURES as RadioLecture[],
    })),
  stm: () =>
    import("@/components/stm/lectures").then((m) => ({
      lectures: m.STM_LECTURES as RadioLecture[],
    })),
  mktg: () =>
    import("@/components/mktg/lectures").then((m) => ({
      lectures: m.MKTG_LECTURES as RadioLecture[],
    })),
};

const cache = new Map<string, RadioLecture[]>();

/** the shelf's lecture table — null when the shelf isn't wired for radio */
export async function lectureTableFor(shelfId: string): Promise<RadioLecture[] | null> {
  const hit = cache.get(shelfId);
  if (hit) return hit;
  const loader = LOADERS[shelfId];
  if (!loader) return null;
  try {
    const table = await loader();
    cache.set(shelfId, table.lectures);
    return table.lectures;
  } catch {
    return null;
  }
}
