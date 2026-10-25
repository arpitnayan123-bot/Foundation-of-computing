"use client";

/* ============================================================
   useSectionProgress — marks chapters as read while the reader
   scrolls, and returns the set of read section ids for the
   chapter menus to decorate.

   Semantics mirror the scroll-spy in each subject's top nav:
   a section counts as read once its top rises above ~1/3 of
   the viewport — and everything above the furthest-reached
   section is swept in too (furthest-read semantics, like a
   Kindle). Reaching the very bottom reads the last chapter,
   which plain probe logic would miss.

   Writes go to lib/progress.ts ("atlas:progress:v1"); state
   updates fire only when a NEW section becomes read, never
   per scroll tick.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { loadProgress, markSectionsSeen } from "@/lib/progress";

export function useSectionProgress(subject: string, orderedIds: string[]): ReadonlySet<string> {
  const [seen, setSeen] = useState<ReadonlySet<string>>(() => new Set<string>());
  const seenRef = useRef<ReadonlySet<string>>(new Set<string>());
  /* ids identity is stable per module (each app passes a module-scope
     constant) — but guard anyway so effect deps stay honest */
  const idsKey = orderedIds.join("|");

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    if (ids.length === 0) return;

    let raf = 0;
    let maxIdx = -1; // furthest index already swept this visit
    let ticking = false;

    const restore = () => {
      const saved = loadProgress()[subject] ?? {};
      const initial = new Set<string>(ids.filter((id) => saved[id]));
      seenRef.current = initial;
      setSeen(initial);
    };

    const sweep = () => {
      ticking = false;
      const probe = window.innerHeight * 0.32;
      const doc = document.documentElement;
      const atBottom = doc.scrollHeight - doc.scrollTop - doc.clientHeight < 40;

      let furthest = -1;
      for (let i = 0; i < ids.length; i += 1) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= probe) furthest = i;
      }
      if (atBottom) furthest = ids.length - 1;
      if (furthest <= maxIdx) return;
      maxIdx = furthest;

      const fresh: string[] = [];
      for (let i = 0; i <= furthest; i += 1) {
        if (!seenRef.current.has(ids[i])) fresh.push(ids[i]);
      }
      if (fresh.length === 0) return;
      const next = new Set(seenRef.current);
      for (const id of fresh) next.add(id);
      seenRef.current = next;
      setSeen(next);
      markSectionsSeen(subject, fresh);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    };

    /* rAF-deferred restore + first sweep — keeps first paint
       hydration-stable and satisfies set-state-in-effect lint */
    raf = requestAnimationFrame(() => {
      restore();
      sweep();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [subject, idsKey]);

  return seen;
}
