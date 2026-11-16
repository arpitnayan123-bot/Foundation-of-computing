import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ------------------------------------------------------------
   In-page scrolling, the atlas way.

   Subject pages used to scroll with bare anchor links
   (<a href="#notes-top">) — which REWROTE the URL hash and
   destroyed the #/subject/<id> route riding in it. One refresh
   later the reader was back on the landing with the page still
   claiming a subject. Every in-page scroll now goes through
   this helper: the URL is never touched, and the motion
   respects prefers-reduced-motion.
   ------------------------------------------------------------ */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
