"use client";

/* ============================================================
   FA diagrams — the shared kit.

   One visual language for all six interactive diagrams: the
   machine shell, the segmented toggle, the source-note footnote
   and the reduced-motion/print branch. Palette is FA's emerald
   system (#047857 / #10b981 / #a7d7b8) with the FA gold and
   brick-red accents — never FoC's amber gradients.

   Accessibility contract (task §0.5):
   · every toggle is a real <button> with aria-pressed
   · sequences are role="list" / role="listitem"
   · all controls are native buttons/inputs — keyboard-free wins
   · useFaStatic() flips to the final rendered state instantly
     under prefers-reduced-motion AND while printing
   ============================================================ */

import React, { useEffect, useState } from "react";

export const FA_RED = "#b3402c";
export const FA_RED_WASH = "#fbeae5";
export const FA_RED_BORDER = "#e8a896";
export const FA_DARK_GRADIENT = "linear-gradient(165deg,#06281e,#0a3527 60%,#0d3a2c)";

/** ₹ with Indian digit grouping (1,80,50,000), 2-dp figures kept honest. */
export function fmtINR(n: number, dp = 0): string {
  return n.toLocaleString("en-IN", { minimumFractionDigits: dp, maximumFractionDigits: dp });
}

/**
 * true → render the diagram's FINAL state with no motion.
 * Fires under prefers-reduced-motion and whenever the document
 * is being printed (beforeprint / print media), so every diagram
 * degrades to a legible static sheet.
 */
export function useFaStatic(): boolean {
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqPrint = window.matchMedia("print");
    const update = () => setStaticMode(mqMotion.matches || mqPrint.matches);
    const onBeforePrint = () => setStaticMode(true);
    const onAfterPrint = () => update();
    update();
    mqMotion.addEventListener("change", update);
    mqPrint.addEventListener("change", update);
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqPrint.removeEventListener("change", update);
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return staticMode;
}

/* ---------------------------------------------- the machine shell */

export function FaDiagramShell({
  icon,
  title,
  sub,
  children,
  footer,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  sub?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`fa-diag overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9] ${className}`}>
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        {icon}
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: "#047857" }}>
          {title}
        </span>
        {sub ? <span className="text-[.7rem] font-semibold text-muted-warm">{sub}</span> : null}
      </div>
      {children}
      {footer ? <div className="border-t border-[#e4f1ea] bg-white px-4 py-3">{footer}</div> : null}
    </div>
  );
}

/* ---------------------------------------------- segmented toggle */

export interface FaSegOption<T extends string> {
  id: T;
  label: string;
}

/**
 * Segmented control. One option is pressed at a time; rendered as
 * a row of aria-pressed buttons (the pattern every FA machine uses).
 */
export function FaSeg<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className = "",
}: {
  options: FaSegOption<T>[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`grid ${className}`}
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((o) => {
        const on = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            aria-pressed={on}
            className={`px-3 py-2.5 text-[.74rem] font-extrabold uppercase tracking-[.08em] transition-colors sm:text-[.8rem] ${
              on ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------- source-note footnote */

/**
 * The trap disclosure — every rendered discrepancy is disclosed
 * here in the task's exact wording, never silently reconciled.
 */
export function FaSourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-[#cec2a4] bg-[#f5f1e8] px-4 py-3 text-[.76rem] leading-relaxed text-[#7c6248]">
      {children}
    </p>
  );
}

/* ---------------------------------------------- pill badge */

export function FaBadge({
  tone = "ok",
  children,
}: {
  tone?: "ok" | "bad" | "gold";
  children: React.ReactNode;
}) {
  const styles =
    tone === "ok"
      ? { background: "#ecfdf5", color: "#065f46", border: "1px solid #a9dcc4" }
      : tone === "bad"
      ? { background: FA_RED_WASH, color: FA_RED, border: `1px solid ${FA_RED_BORDER}` }
      : { background: "#fbf4e4", color: "#8a5a10", border: "1px solid #e3c98f" };
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[.62rem] font-black uppercase tracking-[.12em]"
      style={styles}
    >
      {children}
    </span>
  );
}
