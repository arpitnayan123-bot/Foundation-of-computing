"use client";

/* ============================================================
   Practice heatmap — the ledger's last 17 weeks, one square per
   day. Greener the more attempts finished that day (the same
   green as mastery), today ringed, future days invisible but
   present so the week columns stay aligned. Data comes straight
   from the attempt ledger — no extra storage.
   ============================================================ */

import { useMemo } from "react";
import { dayKeyFor } from "@/lib/ledger";

export interface DayHit {
  /** attempts finished that day */
  a: number;
  /** questions faced that day */
  q: number;
}

const WEEKS = 17;

function tier(count: number): string {
  if (count <= 0) return "rgba(255,255,255,0.05)";
  if (count === 1) return "rgba(143,174,93,0.30)";
  if (count <= 3) return "rgba(143,174,93,0.55)";
  if (count <= 5) return "rgba(143,174,93,0.80)";
  return "rgba(143,174,93,1)";
}

export function PracticeHeatmap({ hits }: { hits: Map<string, DayHit> }) {
  const grid = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dow = (today.getDay() + 6) % 7; // Mon = 0 … Sun = 6
    const start = new Date(today);
    start.setDate(today.getDate() - dow - (WEEKS - 1) * 7);
    const cells: { key: string; d: Date; a: number; q: number; future: boolean; today: boolean }[] = [];
    for (let i = 0; i < WEEKS * 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const key = dayKeyFor(d.getTime());
      const hit = hits.get(key);
      cells.push({
        key,
        d,
        a: hit?.a ?? 0,
        q: hit?.q ?? 0,
        future: d.getTime() > today.getTime(),
        today: d.getTime() === today.getTime(),
      });
    }
    const active = cells.filter((c) => c.a > 0).length;
    return {
      cells,
      active,
      startMonth: cells[0].d.toLocaleDateString(undefined, { month: "short" }),
      endMonth: cells[cells.length - 1].d.toLocaleDateString(undefined, { month: "short" }),
    };
  }, [hits]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#8d7b63]">
        <span>
          {grid.startMonth} → {grid.endMonth}
        </span>
        <span>
          <strong className="text-[#c9b99f]">{grid.active}</strong>/{WEEKS * 7} days active
        </span>
      </div>
      <div
        className="mt-2.5 grid grid-flow-col grid-rows-7 gap-[3px]"
        role="img"
        aria-label={`Practice heatmap: the last ${WEEKS} weeks, ${grid.active} active day${grid.active === 1 ? "" : "s"}`}
      >
        {grid.cells.map((c) => (
          <span
            key={c.key}
            className={`h-3 w-3 rounded-[3px] ${c.today ? "ring-1 ring-white/30" : ""} ${c.future ? "opacity-0" : ""}`}
            style={{ background: tier(c.a) }}
            title={
              c.future
                ? undefined
                : `${c.d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })} — ${
                    c.a === 0
                      ? "no attempts"
                      : `${c.a} attempt${c.a === 1 ? "" : "s"} · ${c.q} question${c.q === 1 ? "" : "s"}`
                  }`
            }
          />
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-end gap-1.5 font-mono text-[.56rem] uppercase tracking-[.14em] text-[#77685a]">
        <span>less</span>
        {[0, 1, 3, 5, 6].map((n) => (
          <span key={n} className="h-2.5 w-2.5 rounded-[3px]" style={{ background: tier(n) }} />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}
