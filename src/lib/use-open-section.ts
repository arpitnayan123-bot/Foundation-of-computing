/* ============================================================
   Open-a-chapter handoff — the receiving end of the ⌘K palette's
   "Chapters" group.

   A chapter jump arrives in two ways:
   • cross-view — the palette leaves sessionStorage
     "atlas:open-section" = {"subject","section"} before switching
     the hash; the freshly-mounted subject app consumes it here.
   • same shelf — the palette dispatches the live
     "atlas:open-section" event and this hook scrolls right away.

   The mount path polls requestAnimationFrame until the section's
   DOM node exists (the shelf chunk may still be loading behind
   the view transition), capped at ~4s, then smooth-scrolls to it
   and flashes a soft amber ring so the reader sees where they
   landed. A short watchdog re-checks the arrival — very long
   smooth scrolls on a still-settling page can land a few pixels
   short or get interrupted — and nudges the window until the
   chapter sits under the fixed nav. Honors prefers-reduced-motion.
   ============================================================ */

import { useEffect, useRef } from "react";

const FLAG = "atlas:open-section";
const EVENT = "atlas:open-section";
const FLASH_MS = 2400;
const MAX_FRAMES = 240; // ~4s at 60fps — chunk load + shelf transition
/** the section's own scroll-mt-20 — where "arrived" means */
const SCROLL_MARGIN = 80;
/** viewport-top band inside which the section counts as arrived */
const BAND = { min: 52, max: 116 };
const WATCHDOG_TICKS = 6;
const WATCHDOG_MS = 420;

let watchdogId: number | null = null;

export function jumpTo(el: HTMLElement): void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  el.classList.remove("atlas-jump-flash");
  void el.offsetWidth; // restart the animation when the same section repeats
  el.classList.add("atlas-jump-flash");
  window.setTimeout(() => el.classList.remove("atlas-jump-flash"), FLASH_MS);

  /* convergence watchdog — stop as soon as the chapter rests under
     the nav, the document clamps (can't scroll further), or the
     tick budget runs out; a newer jump always wins */
  if (watchdogId !== null) window.clearInterval(watchdogId);
  let checks = 0;
  let lastY = -1;
  watchdogId = window.setInterval(() => {
    checks += 1;
    if (checks > WATCHDOG_TICKS) {
      window.clearInterval(watchdogId ?? 0);
      watchdogId = null;
      return;
    }
    const top = el.getBoundingClientRect().top;
    if (top >= BAND.min && top <= BAND.max) return; // arrived
    const y = window.scrollY;
    const docTop = top + y;
    window.scrollTo({ top: Math.max(0, docTop - SCROLL_MARGIN), behavior: "auto" });
    if (window.scrollY === y && y === lastY) {
      // clamped at the document edge — no further nudge will help
      window.clearInterval(watchdogId ?? 0);
      watchdogId = null;
      return;
    }
    lastY = window.scrollY;
  }, WATCHDOG_MS);
}

/** Mount inside a subject app; call once per app with its own id.
 *
 * `onSection` — optional router hook for subject apps whose chapters are
 * conditionally rendered (e.g. ATB's lecture-filtered reader): instead of
 * jumping straight to the DOM node, the app receives the section id and is
 * responsible for making it exist (switching the active lecture) and then
 * calling jumpTo itself.
 */
export function useOpenSection(subject: string, onSection?: (section: string) => void): void {
  /* keep the latest callback without re-subscribing the listeners */
  const onSectionRef = useRef(onSection);
  useEffect(() => {
    onSectionRef.current = onSection;
  }, [onSection]);

  useEffect(() => {
    const route = (section: string) => {
      if (onSectionRef.current) {
        onSectionRef.current(section);
        return;
      }
      const el = document.getElementById(section);
      if (el) jumpTo(el);
    };

    /* queued handoff from another view (landing, ledger, another shelf) */
    let queued: string | null = null;
    try {
      const raw = sessionStorage.getItem(FLAG);
      if (raw) {
        const parsed = JSON.parse(raw) as { subject?: string; section?: string };
        if (parsed?.subject === subject && typeof parsed.section === "string") {
          queued = parsed.section;
        }
        sessionStorage.removeItem(FLAG); // consumed or stale — either way it's spent
      }
    } catch {
      /* private mode — live events still work */
    }

    const onLive = (e: Event) => {
      const section = (e as CustomEvent<string>).detail;
      if (typeof section !== "string" || !section) return;
      route(section);
    };
    window.addEventListener(EVENT, onLive);

    if (queued) {
      if (onSectionRef.current) {
        onSectionRef.current(queued);
      } else {
        let frames = 0;
        const tick = () => {
          const el = document.getElementById(queued as string);
          if (el) {
            jumpTo(el);
            return;
          }
          if (++frames < MAX_FRAMES) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }

    return () => window.removeEventListener(EVENT, onLive);
  }, [subject]);
}
