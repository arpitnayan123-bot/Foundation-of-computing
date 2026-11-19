"use client";

/* ============================================================
   AuthoringNote — the wine-accented note attached to lectures
   where the source is genuinely ambiguous or carries a quirk.
   Wine #9f3d54 is reserved for exactly this + removed-lecture
   markers; notes record discrepancies instead of fixing them.
   ============================================================ */

import React from "react";
import { PenLine } from "lucide-react";
import { MK } from "./kit";

export function AuthoringNote({
  title,
  children,
  lecture,
}: {
  title: string;
  lecture: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      aria-label={`Authoring note — ${lecture}`}
      className="rounded-2xl border p-5 md:p-6"
      style={{ background: "#fbf3f5", borderColor: "rgba(159,61,84,.32)" }}
    >
      <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.22em]" style={{ color: MK.wine }}>
        <PenLine className="h-3.5 w-3.5" aria-hidden />
        Authoring note · {lecture}
      </p>
      <h3 className="mt-1.5 text-lg font-extrabold" style={{ color: MK.ink }}>
        {title}
      </h3>
      <div className="mt-2 max-w-3xl space-y-2 text-[.88rem] leading-relaxed text-[#5f4a50]">{children}</div>
    </aside>
  );
}
