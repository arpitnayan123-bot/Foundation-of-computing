"use client";

/* ============================================================
   MKTG diagrams kit — shared primitives for every registered
   figure of the Principles of Marketing rebuild.

   Subject palette (locked): teal #0f766e · brass #a97d2c ·
   gold #e3c26b · ink #1f2b2b · paper #f2efe7 · wine #9f3d54
   (wine is RESERVED for removed-lecture markers & authoring
   notes — never a decorative colour).
   ============================================================ */

import React from "react";

export const MK = {
  teal: "#0f766e",
  tealSoft: "rgba(15,118,110,.12)",
  brass: "#a97d2c",
  brassSoft: "rgba(169,125,44,.14)",
  gold: "#e3c26b",
  ink: "#1f2b2b",
  paper: "#f2efe7",
  wine: "#9f3d54",
  wineSoft: "rgba(159,61,84,.10)",
  dim: "#5f7472",
  line: "#e3ddcf",
  ok: "#5f9e58",
} as const;

/** A registered figure: real SVG + mandatory caption. */
export function Figure({
  label,
  caption,
  children,
  className = "",
}: {
  label: string;
  caption: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure role="group" aria-label={label} className={`card-warm lift p-4 md:p-6 ${className}`}>
      {children}
      <figcaption className="mt-3 text-[.8rem] leading-relaxed text-[#5f7472]">
        <span className="font-extrabold" style={{ color: MK.brass }}>
          Fig ·{" "}
        </span>
        {caption}
      </figcaption>
    </figure>
  );
}

/** The SVG itself — role img + aria-label, always. */
export function FigSvg({
  vb,
  label,
  children,
  max = "",
}: {
  vb: string;
  label: string;
  children: React.ReactNode;
  max?: string;
}) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className={`h-auto w-full ${max}`}>
      {children}
    </svg>
  );
}

/** Unique-per-svg arrow marker. Never reuse an id across two SVGs. */
export function Arrow({ id, color = MK.teal }: { id: string; color?: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 1 L 9 5 L 0 9 z" fill={color} />
      </marker>
    </defs>
  );
}

/** SVG label text helpers — ink by default, uppercase micro-labels in brass. */
export function T({
  x,
  y,
  children,
  size = 12,
  fill = MK.ink,
  weight = 600,
  anchor = "middle",
  italic = false,
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  fill?: string;
  weight?: number;
  anchor?: "start" | "middle" | "end";
  italic?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={fill}
      fontWeight={weight}
      textAnchor={anchor}
      fontStyle={italic ? "italic" : undefined}
      fontFamily="inherit"
    >
      {children}
    </text>
  );
}
