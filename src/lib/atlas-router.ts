/* ============================================================
   THE ATLAS — the one canonical route parser.

   The whole atlas rides a tiny hash router on a single Next.js
   route (/), so every URL/view agreement bug starts here. This
   module is the ONLY place that turns a location.hash into a
   view; src/app/page.tsx consumes it, and the unit tests in
   atlas-router.test.ts pin its contract.

     #/atlas                → the dark landing (subject shelf)
     #/ledger               → the ledger (progress · review · forge)
     #/cockpit              → the cockpit (flight plan + ask the atlas)
     #/subject/<id>         → a subject's revision app
     #/subject/<id>/<tail>  → a subject with an in-shelf deep link
                              (e.g. #/subject/foc/l14 → FoC, lecture 14)
     #<anchor>              → in-page anchors inside a view (null —
                              the current view stays on stage)
     anything else          → the landing (never a dead end)

   Subject ids are normalized (trimmed, lowercased) so deep
   links like #/subject/FOC land on the same shelf as clicks.
   ============================================================ */

export const SUBJECT_ROUTE = "#/subject/";

export type View =
  | { name: "atlas" }
  | { name: "ledger" }
  | { name: "cockpit" }
  | { name: "subject"; id: string; lecture?: string }
  | { name: "reserved"; id: string };

/** the live shelf ids — kept in sync with subjects.ts by the
 *  registry itself (imported here to avoid a second list) */
import { SUBJECT_IDS } from "@/components/atlas/subjects";

export function parseRouteHash(hash: string, subjectIds: readonly string[] = SUBJECT_IDS): View | null {
  // only route-style hashes (#/…) drive the view; bare anchors
  // (#notes-top) belong to the view's own scroll navigation and
  // are ignored — the visible page must never change for them.
  if (!hash.startsWith("#/")) return null;
  if (hash === "#/atlas") return { name: "atlas" };
  if (hash === "#/ledger") return { name: "ledger" };
  if (hash === "#/cockpit") return { name: "cockpit" };
  if (hash.startsWith(SUBJECT_ROUTE)) {
    // normalize: decode, trim, lowercase — deep links are typed
    // by humans and pasted from address bars
    let tail = hash.slice(SUBJECT_ROUTE.length);
    try {
      tail = decodeURIComponent(tail);
    } catch {
      /* malformed escape — keep the raw tail */
    }
    tail = tail.trim().toLowerCase().replace(/\/+$/, "");
    // split "foc/l14" → subject "foc" + optional in-shelf tail ("l14")
    const slash = tail.indexOf("/");
    const id = (slash === -1 ? tail : tail.slice(0, slash)).trim();
    const inner = slash === -1 ? "" : tail.slice(slash + 1).trim();
    if (subjectIds.includes(id)) {
      return inner ? { name: "subject", id, lecture: inner } : { name: "subject", id };
    }
    // a shelf deep-linked before its syllabus drops — show the
    // honest reserved bay (with a way back) instead of silently
    // bouncing home
    return { name: "reserved", id };
  }
  return { name: "atlas" }; // unknown route → the shelf
}

/** read the view straight off the address bar (client only) */
export function viewFromLocation(subjectIds?: readonly string[]): View {
  if (typeof window === "undefined") return { name: "atlas" };
  return parseRouteHash(window.location.hash, subjectIds) ?? { name: "atlas" };
}
