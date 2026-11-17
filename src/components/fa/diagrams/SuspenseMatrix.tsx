"use client";

/* ============================================================
   FA DIAGRAM 2 — error → trial-balance impact matrix
   (section suspense, L15).

   The ABC Startup case as a live machine. Rows = the four error
   classes; each toggles on/off while a live trial balance and
   suspense account react. The teaching moment is the INVISIBLE
   errors: toggle the three no-impact errors on with commission
   off and the columns still agree — the badge reads "Balanced.
   Still wrong. 3 errors present." Agreement is arithmetic, not
   honesty. Start state: commission only — debit short ₹50,000,
   Suspense A/c Dr ₹50,000 (Trap D resolution in the footer).

   The resolution walk uses the shared StepsFlow primitive.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileWarning, Scale } from "lucide-react";
import { StepsFlow } from "@/components/notes/ui";
import { FA_RED, FaBadge, FaDiagramShell, FaSourceNote, fmtINR, useFaStatic } from "./kit";
import { ABC_TB, ERROR_ROWS, suspensePlacement, type ErrorKind } from "./calcs";

const IMPACT_WHY: Record<ErrorKind, string> = {
  omission: "₹0 — both sides absent",
  principle: "₹0 — debit exists, wrong account",
  commission: "₹50,000 — one side only",
  compensating: "₹0 net — the two cancel",
};

export function FaSuspenseMatrix() {
  const [on, setOn] = useState<Record<ErrorKind, boolean>>({
    omission: false,
    principle: false,
    commission: true,
    compensating: false,
  });
  const statik = useFaStatic();

  const commissionOn = on.commission;
  const invisibleCount = (["omission", "principle", "compensating"] as ErrorKind[]).filter((k) => on[k]).length;

  // the live trial balance — the clean framing, plus the one-sided ₹50,000 when commission is present
  const dr = commissionOn ? ABC_TB.dr : ABC_TB.cr;
  const cr = ABC_TB.cr;
  const placement = suspensePlacement(dr, cr);

  const toggle = (k: ErrorKind) => setOn((s) => ({ ...s, [k]: !s[k] }));

  return (
    <FaDiagramShell
      icon={<Scale className="h-4 w-4" style={{ color: "#047857" }} />}
      title="ABC Startup — the error → trial-balance matrix"
      sub="toggle errors on and off — the suspense account reacts"
      footer={
        <FaSourceNote>
          <b>Source note.</b> The source summary states debit ₹1,80,00,000 and credit ₹1,90,00,000 yet calls the gap
          ₹50,000 — a transcription slip. The ₹50,000 figure is independently confirmed by the commission error
          (₹85,000 recorded as ₹35,000), so it is used here.
        </FaSourceNote>
      }
    >
      <div className="px-4 py-5 sm:px-6">
        {/* the matrix */}
        <ul className="grid gap-2" role="list" aria-label="Error classes and their trial-balance impact">
          {ERROR_ROWS.map((e) => {
            const isOn = on[e.kind];
            return (
              <li key={e.kind} role="listitem">
                <button
                  type="button"
                  onClick={() => toggle(e.kind)}
                  aria-pressed={isOn}
                  aria-label={`${e.label} error: ${e.detail}. Toggling ${isOn ? "off" : "on"}`}
                  className={`w-full rounded-xl border p-3.5 text-left transition-all duration-300 ${
                    isOn
                      ? e.agrees
                        ? "border-[#a9dcc4] bg-[#ecfdf5]"
                        : "border-[#e8a896] bg-[#fbeae5]"
                      : "border-[#e4f1ea] bg-white hover:border-[#a9dcc4]"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="flex h-5 w-9 shrink-0 items-center rounded-full px-0.5"
                      style={{ background: isOn ? "#047857" : "#c9d9d0" }}
                      aria-hidden
                    >
                      <motion.span
                        className="h-4 w-4 rounded-full bg-white shadow-sm"
                        animate={{ x: isOn ? 16 : 0 }}
                        transition={statik ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 32 }}
                        style={{ marginLeft: isOn ? 0 : 0 }}
                      />
                    </span>
                    <span className="text-[.9rem] font-extrabold text-[#3e2c1d]">{e.label}</span>
                    <FaBadge tone={e.agrees ? "ok" : "bad"}>{e.agrees ? "TB still agrees" : "TB breaks"}</FaBadge>
                    <span className={`ml-auto font-mono text-[.74rem] font-black ${isOn && !e.agrees ? "" : "text-[#8a6b45]"}`} style={isOn && !e.agrees ? { color: FA_RED } : undefined}>
                      {IMPACT_WHY[e.kind]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{e.detail}</p>
                </button>
              </li>
            );
          })}
        </ul>

        {/* live trial balance + suspense */}
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-[#e4f1ea] bg-white p-3 text-center">
            <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">Debit column</p>
            <p className="mt-1 font-mono text-[1.02rem] font-black text-[#3e2c1d]">₹{fmtINR(dr)}</p>
          </div>
          <div className="rounded-xl border border-[#e4f1ea] bg-white p-3 text-center">
            <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">Credit column</p>
            <p className="mt-1 font-mono text-[1.02rem] font-black text-[#3e2c1d]">₹{fmtINR(cr)}</p>
          </div>
          <div
            className="rounded-xl border p-3 text-center"
            style={placement.side === "balanced" ? { borderColor: "#a9dcc4", background: "#ecfdf5" } : { borderColor: "#e8a896", background: "#fbeae5" }}
          >
            <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: placement.side === "balanced" ? "#065f46" : FA_RED }}>
              {placement.side === "balanced" ? "Columns agree" : `Difference — ${placement.side === "dr" ? "debit" : "credit"} short`}
            </p>
            <p className="mt-1 font-mono text-[1.02rem] font-black" style={{ color: placement.side === "balanced" ? "#065f46" : FA_RED }}>
              ₹{fmtINR(placement.amount)}
            </p>
          </div>
        </div>

        {/* the verdict badge — the single most important idea in L15 */}
        <div aria-live="polite" className="mt-4">
          {commissionOn ? (
            <p className="flex flex-wrap items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[.84rem] font-bold" style={{ borderColor: "#e8a896", background: "#fbeae5", color: "#7c2d12" }}>
              <FaBadge tone="bad">disagreed</FaBadge>
              the trial balance caught exactly one thing — the one-sided ₹50,000. The other errors (if any) are invisible to it.
            </p>
          ) : invisibleCount > 0 ? (
            <p className="flex flex-wrap items-center gap-2 rounded-xl border-2 px-3.5 py-2.5 text-[.9rem] font-black" style={{ borderColor: FA_RED, background: "#fbeae5", color: FA_RED }} role="status">
              <FileWarning className="h-4 w-4 shrink-0" aria-hidden />
              Balanced. Still wrong. {invisibleCount} error{invisibleCount > 1 ? "s" : ""} present.
            </p>
          ) : (
            <p className="flex flex-wrap items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[.84rem] font-bold" style={{ borderColor: "#a9dcc4", background: "#ecfdf5", color: "#065f46" }}>
              <FaBadge tone="ok">clean</FaBadge>
              columns agree — and this time the books really are honest.
            </p>
          )}
        </div>

        {/* the suspense account — the two rules, stated AND applied */}
        <div className="mt-4 overflow-hidden rounded-xl border border-[#e4f1ea]">
          <div className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: "#047857" }}>
            The suspense account — two rules, applied live
          </div>
          <ul className="grid gap-px bg-[#eef3ef]" role="list">
            <li role="listitem" className="bg-white px-4 py-2.5 text-[.8rem] leading-relaxed text-[#2b2014]">
              <span className="font-bold">Rule 1 — debit total is the lesser → suspense is DEBITED with the difference.</span>{" "}
              {placement.side === "dr" ? (
                <b style={{ color: "#065f46" }}>Active now: Suspense A/c Dr ₹{fmtINR(placement.amount)}.</b>
              ) : (
                <span className="text-muted-warm"> Not active — the debit side is not short.</span>
              )}
            </li>
            <li role="listitem" className="bg-white px-4 py-2.5 text-[.8rem] leading-relaxed text-[#2b2014]">
              <span className="font-bold">Rule 2 — credit total is the lesser → suspense is CREDITED with the difference.</span>{" "}
              {placement.side === "cr" ? (
                <b style={{ color: "#065f46" }}>Active now: Suspense A/c Cr ₹{fmtINR(placement.amount)}.</b>
              ) : (
                <span className="text-muted-warm"> Not active — the credit side is not short.</span>
              )}
            </li>
          </ul>
        </div>

        {/* the resolution walk */}
        <div className="mt-5">
          <p className="mb-2 text-[.7rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">The resolution, in order</p>
          <StepsFlow
            steps={[
              { label: "Book it", sub: "the ₹25,000 cloud-server invoice — both sides restored; the TB never noticed" },
              { label: "Correct", sub: "the ₹40,000 desk: Dr Furniture & Fixtures · Cr Office Repairs" },
              { label: "Rectify", sub: "Dr Bank ₹50,000 · Cr Suspense ₹50,000 — suspense closes to nil" },
              { label: "Columns meet", sub: "₹1,80,\u200B50,\u200B000 on both sides — deadline met, books honest now" },
            ]}
          />
        </div>
      </div>
    </FaDiagramShell>
  );
}
