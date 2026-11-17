"use client";

/* ============================================================
   FA DIAGRAM 5 — straight line vs diminishing balance race
   (section ppe-depreciation, L33).

   The printing press: cost ₹57,000 · residual ₹10,000 · life
   5 years · depreciable amount ₹47,000. Two animated carrying-
   amount series race down toward a dashed ₹10,000 residual
   line — and the raw 40% diminishing-balance series visibly
   BREAKS THROUGH the floor (Trap B): total depreciation
   ₹52,567.68, overshoot ₹5,567.68, carrying ₹4,432.32. The
   "solve for the rate" toggle re-runs the series at the exact
   rate (1 − (10,000/57,000)^(1/5) ≈ 29.397%) and lands on the
   residual — turning the stated rule into a discovered one.

   No residual cap anywhere: the honest schedule is the point.
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cog, Play, RotateCcw } from "lucide-react";
import {
  FA_RED,
  FaBadge,
  FaDiagramShell,
  FaSeg,
  FaSourceNote,
  fmtINR,
  useFaStatic,
} from "./kit";
import {
  DEPRECIABLE,
  PRESS,
  RATE_SOLVE,
  RATE_SOLVE_PCT_3DP,
  dbSchedule,
  overshoot,
  slSchedule,
  totalDepreciation,
} from "./calcs";

type MethodId = "sl" | "db";

const pct = (v: number) => (v / PRESS.cost) * 100;

export function FaDepreciationRace() {
  const [method, setMethod] = useState<MethodId>("sl");
  const [solved, setSolved] = useState(false);
  const [scrub, setScrub] = useState(5);
  const [playing, setPlaying] = useState(false);
  const statik = useFaStatic();
  const scrubRef = useRef(5);

  const sl = slSchedule();
  const dbRaw = dbSchedule(0.4);
  const dbSolved = dbSchedule(RATE_SOLVE);
  const db = solved ? dbSolved : dbRaw;
  const dbOver = overshoot(dbRaw);
  const dbTotal40 = totalDepreciation(dbRaw);

  /** manual scrub: stops the race, jumps the playhead */
  const scrubTo = (v: number) => {
    scrubRef.current = v;
    setScrub(v);
    setPlaying(false);
  };

  // the race playhead — a self-terminating interval; under reduced
  // motion / print the play button just pins the final year
  useEffect(() => {
    if (!playing) return;
    let n = scrubRef.current;
    const id = window.setInterval(() => {
      n += 1;
      scrubRef.current = Math.min(n, 5);
      setScrub(scrubRef.current);
      if (n >= 5) {
        window.clearInterval(id);
        setPlaying(false);
      }
    }, 650);
    return () => window.clearInterval(id);
  }, [playing]);

  const visible = (yr: number) => statik || yr <= scrub;

  return (
    <FaDiagramShell
      icon={<Cog className="h-4 w-4" style={{ color: "#047857" }} />}
      title="The printing press — ₹57,000 cost · ₹10,000 residual · 5 years"
      sub="race the two methods"
    >
      <div className="px-4 py-5 sm:px-6">
        <div className="rounded-xl border border-[#e4f1ea] bg-white p-1">
          <FaSeg
            ariaLabel="Depreciation method"
            options={[
              { id: "sl" as MethodId, label: "Straight line — ₹9,400 flat" },
              { id: "db" as MethodId, label: "Diminishing balance" },
            ]}
            value={method}
            onChange={setMethod}
            className="grid-cols-2"
          />
        </div>

        {method === "db" ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSolved((v) => !v)}
              aria-pressed={solved}
              className={`rounded-full border px-3.5 py-1.5 text-[.72rem] font-extrabold transition-colors ${
                solved
                  ? "border-[#a9dcc4] bg-[#ecfdf5] text-[#065f46]"
                  : "border-[#e4f1ea] bg-white text-[#9db8a9] hover:text-[#5c7a6b]"
              }`}
            >
              {solved ? `✓ solved — rate ${fmtINR(RATE_SOLVE_PCT_3DP, 3)}%` : "Solve for the rate →"}
            </button>
            <span className="text-[.72rem] font-semibold text-muted-warm">
              {solved
                ? "the rate that lands exactly on the ₹10,000 residual"
                : "40% is the lecture's rate — watch it overshoot the residual"}
            </span>
          </div>
        ) : null}

        {/* the race chart — carrying amounts falling toward the dashed residual line */}
        <div className="relative mt-5" style={{ height: 220 }}>
          {/* dashed residual reference line at ₹10,000 */}
          <div
            className="pointer-events-none absolute inset-x-0 border-t-2 border-dashed"
            style={{ bottom: `${pct(PRESS.resid)}%`, borderColor: "#b45309" }}
            role="img"
            aria-label={`Dashed reference line: residual value ₹${fmtINR(PRESS.resid)}`}
          >
            <span className="absolute -top-5 right-0 rounded bg-[#fbf4e4] px-1.5 py-0.5 font-mono text-[.6rem] font-black text-[#8a5a10]">
              residual ₹{fmtINR(PRESS.resid)}
            </span>
          </div>

          <div className="grid h-full grid-cols-5 gap-1 sm:gap-3">
            {Array.from({ length: PRESS.life }, (_, i) => i + 1).map((yr) => {
              const slR = sl[yr - 1];
              const dbR = db[yr - 1];
              const show = visible(yr);
              const breaksFloor = !solved && yr === PRESS.life;
              return (
                <div key={yr} className="relative flex h-full flex-col justify-end">
                  {/* bars sit in an absolutely-positioned track so the dashed line overlays them */}
                  <div className="relative h-full">
                    {/* straight-line bar */}
                    <motion.div
                      data-bar=""
                      initial={false}
                      animate={{
                        height: show ? `${pct(slR.carrying)}%` : "0%",
                        opacity: method === "sl" ? 1 : 0.32,
                      }}
                      transition={statik ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 w-[38%] rounded-t-md sm:w-[42%]"
                      style={{ background: "linear-gradient(180deg,#047857,#10b981)", "--fa-bar": "#047857" } as React.CSSProperties}
                      aria-hidden
                    />
                    {/* diminishing-balance bar */}
                    <motion.div
                      data-bar=""
                      initial={false}
                      animate={{
                        height: show ? `${pct(dbR.carrying)}%` : "0%",
                        opacity: method === "db" ? 1 : 0.32,
                      }}
                      transition={statik ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.08 }}
                      className="absolute bottom-0 right-0 w-[38%] rounded-t-md sm:w-[42%]"
                      style={{ background: solved ? "#059669" : "#b45309", "--fa-bar": solved ? "#059669" : "#b45309" } as React.CSSProperties}
                      aria-hidden
                    />
                        {/* the overshoot band: from the year-5 bar top UP to the residual line */}
                        {breaksFloor && show ? (
                          <div
                            data-bar=""
                            className="absolute right-0 w-[38%] rounded-t-md sm:w-[42%]"
                            style={{
                              bottom: `${pct(dbR.carrying)}%`,
                              height: `${pct(PRESS.resid) - pct(dbR.carrying)}%`,
                              backgroundImage: `repeating-linear-gradient(135deg, ${FA_RED}, ${FA_RED} 4px, #e4674a 4px, #e4674a 8px)`,
                              backgroundColor: FA_RED,
                              "--fa-bar": "#b3402c",
                            } as React.CSSProperties}
                            role="img"
                            aria-label={`Overshoot band: the 40% schedule over-depreciates by ₹${fmtINR(dbOver, 2)}, ending ₹${fmtINR(PRESS.resid - dbR.carrying, 2)} below the residual`}
                          />
                        ) : null}
                        {/* value chips — sm and up; mobile reads the exact values in the schedule cards */}
                        {show ? (
                          <div className="absolute inset-x-0 top-0 hidden justify-between font-mono text-[.56rem] font-black leading-none sm:flex sm:text-[.62rem]">
                            <span style={{ color: "#047857" }}>{fmtINR(slR.carrying)}</span>
                            <span style={{ color: solved ? "#059669" : "#b45309" }}>{fmtINR(dbR.carrying, 2)}</span>
                          </div>
                        ) : null}
                      </div>
                      <span className="mt-1 text-center font-mono text-[.62rem] font-black text-[#8a6b45] sm:text-[.68rem]">
                        Y{yr}
                      </span>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-[.66rem] font-bold text-[#8a6b45]">
          <span className="flex items-center gap-1.5">
            <span data-bar="" className="h-2.5 w-4 rounded" style={{ background: "linear-gradient(180deg,#047857,#10b981)" }} /> straight line
          </span>
          <span className="flex items-center gap-1.5">
            <span data-bar="" className="h-2.5 w-4 rounded" style={{ backgroundColor: solved ? "#059669" : "#b45309" }} />{" "}
            diminishing {solved ? fmtINR(RATE_SOLVE_PCT_3DP, 3) : 40}%
          </span>
          <span className="hidden sm:inline">carrying amount = written down value = cost − accumulated depreciation</span>
        </div>

        {/* scrub + play */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (playing) {
                scrubTo(5);
              } else {
                scrubTo(statik ? 5 : 1);
                setPlaying(!statik);
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[.74rem] font-bold text-white"
            style={{ background: "linear-gradient(135deg,#10b981,#047857)" }}
            aria-label={playing ? "Stop the race and show the final year" : "Play the race year by year"}
          >
            {playing ? <RotateCcw className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? "Show final" : "Play the race"}
          </button>
          <div className="flex min-w-[180px] flex-1 items-center gap-2">
            <label htmlFor="fa-race-scrub" className="shrink-0 font-mono text-[.66rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">
              year {scrub}/5
            </label>
            <input
              id="fa-race-scrub"
              type="range"
              min={0}
              max={5}
              step={1}
              value={scrub}
              onChange={(e) => scrubTo(Number(e.target.value))}
              className="w-full accent-[#047857]"
              aria-valuetext={`showing through year ${scrub}`}
            />
          </div>
        </div>

        {/* the honest schedule — stacked cards, no horizontal scroll */}
        <ul className="mt-5 grid gap-2 sm:grid-cols-5" role="list" aria-label="Full depreciation schedule, honest and uncapped">
          {db.map((r) => (
            <li
              key={r.yr}
              role="listitem"
              className="rounded-xl border border-[#e4f1ea] bg-white p-2.5"
              aria-label={`Year ${r.yr}: straight line depreciation ${fmtINR(sl[r.yr - 1].dep)}, diminishing ${fmtINR(r.dep, 2)}, carrying ${fmtINR(r.carrying, 2)}`}
            >
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.12em] text-[#8a6b45]">Year {r.yr}</p>
              <div className="mt-1.5 grid gap-1 font-mono text-[.72rem] leading-tight">
                <span className="text-[#3e2c1d]">
                  SL dep <b>{fmtINR(sl[r.yr - 1].dep)}</b>
                </span>
                <span style={{ color: solved ? "#059669" : "#b45309" }}>
                  DB dep <b>{fmtINR(r.dep, 2)}</b>
                </span>
                <span className="text-muted-warm">
                  DB carrying <b>{fmtINR(r.carrying, 2)}</b>
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* summary readout */}
        <div className="mt-4 rounded-xl border p-3.5 text-[.82rem] leading-relaxed" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
          <p className="flex flex-wrap items-center gap-2 text-[#3e2c1d]">
            <FaBadge tone="ok">straight line</FaBadge>
            total depreciation <b className="font-mono">₹{fmtINR(DEPRECIABLE)}</b> ✓ lands exactly on the residual.
          </p>
          <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[#3e2c1d]">
            <FaBadge tone="bad">diminishing {solved ? fmtINR(RATE_SOLVE_PCT_3DP, 3) : 40}%</FaBadge>
            {solved ? (
              <>
                total depreciation <b className="font-mono">₹{fmtINR(totalDepreciation(dbSolved))}</b> ✓ lands exactly on
                the residual — the invariant holds because the rate was solved for.
              </>
            ) : (
              <>
                total depreciation <b className="font-mono">₹{fmtINR(dbTotal40, 2)}</b> ✗ overshoots the ₹47,000
                depreciable amount by <b className="font-mono" style={{ color: FA_RED }}>₹{fmtINR(dbOver, 2)}</b> — carrying
                crashes to <b className="font-mono">₹{fmtINR(dbRaw[4].carrying, 2)}</b>, ₹
                {fmtINR(PRESS.resid - dbRaw[4].carrying, 2)} below the floor.
              </>
            )}
          </p>
        </div>
      </div>

      {/* teaching payoff — Trap B, framed honestly */}
      <footer className="border-t border-[#e4f1ea] bg-white px-4 py-3">
        <p className="text-[.8rem] leading-relaxed text-[#2b2014]">
          <b>The principle vs the practice.</b> Both methods are supposed to allocate the same ₹47,000 depreciable
          amount — that is the principle. But a fixed 40% rate on the reducing balance does not land on the ₹10,000
          residual after 5 years; it overshoots to ₹4,432.32 carrying amount. In practice a firm either solves for the
          rate that hits the residual (29.397% here) or takes a final-year catch-up adjustment. The invariant holds{" "}
          <b>by design, not automatically</b>.
        </p>
        <div className="mt-2">
          <FaSourceNote>
            <b>Source note.</b> L33 prints the 40% example for years 1–3 (₹22,800 / ₹13,680 / ₹8,208) and asserts the
            total is the depreciable amount &ldquo;regardless of method&rdquo;. Years 4–5 at a flat 40% (₹4,924.80 /{" "}
            ₹2,954.88) contradict that assertion — the schedule above shows them honestly rather than capping the
            final-year charge to force the landing.
          </FaSourceNote>
        </div>
      </footer>
    </FaDiagramShell>
  );
}
