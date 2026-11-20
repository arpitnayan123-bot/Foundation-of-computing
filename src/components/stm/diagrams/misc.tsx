"use client";

/* ============================================================
   STM misc diagrams — the structural figures of shelf 05 that
   are not distribution curves: ladders, lanes, trees, bars,
   bridges, control charts. Same colour law (violet population,
   gold decision, grey sample; red never a verdict), same figure
   law (aria-label + figcaption, break-inside avoided).
   ============================================================ */

import React from "react";
import { StmFigure } from "./kit";

const VIOL = "#6d28d9";
const VIOLB = "#8b5cf6";
const GOLD = "#ca8a04";
const GOLDL = "#e6cd7f";
const GREY = "#8b8098";
const INK = "#3d2f55";
const EDGE = "#ddd3ee";

function Frame({ children }: { children: React.ReactNode }) {
  return <div className="card-warm p-3 sm:p-4">{children}</div>;
}

/* ---------------- L01 — the four-scale ladder ---------------- */
export function ScalesLadder({ id }: { id: string }) {
  const rungs = [
    { name: "Nominal", note: "names & labels — no order", ex: "gender, roll numbers" },
    { name: "Ordinal", note: "nominal + ranking", ex: "class rank, academic year" },
    { name: "Interval", note: "ordinal + fixed units", ex: "SAT score, temperature °C" },
    { name: "Ratio", note: "interval + true zero", ex: "price ₹, height, sales" },
  ];
  return (
    <StmFigure
      aria="Ladder diagram of the four measurement scales from nominal up to ratio with downward conversion arrows"
      caption={
        <>
          The measurement ladder: each rung adds one property. Data converts DOWN the ladder (ratio → nominal), never up — climb it correctly and the right summaries choose themselves.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 240" className="h-auto w-full" role="img" aria-label="Four measurement scales as an ascending ladder">
          {rungs.map((r, i) => {
            const y = 210 - i * 46;
            const w = 190 + i * 118;
            return (
              <g key={r.name}>
                <rect x="40" y={y - 34} width={w} height="40" rx="9" fill={i === 3 ? GOLDL : i === 0 ? "#efeaf8" : "#e9e2f6"} stroke={i === 3 ? GOLD : VIOLB} strokeWidth="1.6" />
                <text x="56" y={y - 11} fontSize="14" fontWeight="800" fill={INK}>{r.name}</text>
                <text x="150" y={y - 11} fontSize="11.5" fill="#5a5170">{r.note}</text>
                <text x={40 + w + 12} y={y - 11} fontSize="11" fill={GREY} fontStyle="italic">{r.ex}</text>
                {i < 3 ? (
                  <g>
                    <line x1={44 + w} y1={y - 40} x2={40 + w} y2={y - 62} stroke={GREY} strokeWidth="1.4" markerEnd={`url(#stm-arr-${id})`} />
                  </g>
                ) : null}
              </g>
            );
          })}
          <defs>
            <marker id={`stm-arr-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GREY} />
            </marker>
          </defs>
          <text x="40" y="228" fontSize="10.5" fill={GREY} fontStyle="italic">conversion flows down only — ratio data can become nominal; nominal data can become nothing else</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L01 — data anatomy grid ---------------- */
export function DataAnatomy({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Grid diagram showing elements as rows, variables as columns and observations as complete rows"
      caption={
        <>
          The data anatomy: each student is an element (row), each mark a variable (column), and one complete row is an observation. n elements × k variables = n × k data values.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 210" className="h-auto w-full" role="img" aria-label="Elements by variables grid with one observation highlighted">
          <rect x="150" y="30" width="120" height="30" fill="#efeaf8" stroke={VIOLB} /><text x="210" y="50" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Class 10th</text>
          <rect x="270" y="30" width="120" height="30" fill="#efeaf8" stroke={VIOLB} /><text x="330" y="50" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Class 12th</text>
          <rect x="390" y="30" width="120" height="30" fill="#efeaf8" stroke={VIOLB} /><text x="450" y="50" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Physics</text>
          {["Student A", "Student B", "Student C"].map((s, i) => (
            <g key={s}>
              <rect x="24" y={66 + i * 34} width="126" height="30" fill="#efeaf8" stroke={VIOLB} />
              <text x="87" y={86 + i * 34} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>{s}</text>
              {[0, 1, 2].map((j) => (
                <rect key={j} x={150 + j * 120} y={66 + i * 34} width="120" height="30" fill={i === 0 ? GOLDL : "#fff"} stroke={i === 0 ? GOLD : EDGE} />
              ))}
              {i === 0 ? (
                [0, 1, 2].map((j) => (
                  <text key={j} x={210 + j * 120} y={86} textAnchor="middle" fontSize="11" fill={INK} fontFamily="ui-monospace, monospace">{[81, 78, 82][j]}</text>
                ))
              ) : null}
            </g>
          ))}
          <rect x="150" y="66" width="360" height="30" fill="none" stroke={GOLD} strokeWidth="2.2" strokeDasharray="5 3" />
          <text x="540" y="86" fontSize="11" fontWeight="700" fill={GOLD}>one observation</text>
          <text x="24" y="196" fontSize="11" fill={GREY} fontStyle="italic">variables = the columns · elements = the rows · the highlighted row = one observation · all rows = the dataset</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L02 — the analytics ladder ---------------- */
export function AnalyticsLadder({ id }: { id: string }) {
  const steps = [
    { name: "Descriptive", note: "what happened — summarize the past", tone: VIOLB },
    { name: "Predictive", note: "what will happen — models from past data", tone: VIOL },
    { name: "Prescriptive", note: "what to do — optimal courses of action", tone: GOLD },
  ];
  return (
    <StmFigure
      aria="Three step ladder from descriptive to predictive to prescriptive analytics"
      caption={
        <>
          Analytics transforms data into insight in three climbs — statistics powers every one of them, and the top step (prescriptive) is where the recommendation finally lands.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 170" className="h-auto w-full" role="img" aria-label="Analytics ladder of three ascending steps">
          {steps.map((s, i) => (
            <g key={s.name}>
              <rect x={60 + i * 40} y={120 - i * 34} width="190" height="34" rx="8" fill={i === 2 ? GOLDL : "#e9e2f6"} stroke={s.tone} strokeWidth="1.8" />
              <text x={72 + i * 40} y={142 - i * 34} fontSize="13" fontWeight="800" fill={INK}>{s.name}</text>
              <text x={72 + i * 40} y={158 - i * 34} fontSize="10" fill="#5a5170">{s.note}</text>
            </g>
          ))}
          <defs>
            <marker id={`stm-al-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GREY} />
            </marker>
          </defs>
          <line x1="255" y1="96" x2="290" y2="76" stroke={GREY} strokeWidth="1.6" markerEnd={`url(#stm-al-${id})`} />
          <line x1="455" y1="62" x2="490" y2="42" stroke={GREY} strokeWidth="1.6" markerEnd={`url(#stm-al-${id})`} />
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L03 — the tool install path ---------------- */
export function InstallPath({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Install order diagram showing R installed first from cran.r-project.org then RStudio from rstudio.com"
      caption={
        <>
          The mandated install order: R first from cran.r-project.org, RStudio second from rstudio.com — the interface, not the engine. Excel (any licensed version) or Google Sheets completes the toolkit; a laptop is essential, mobile devices are insufficient.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 150" className="h-auto w-full" role="img" aria-label="Install path from R to RStudio with sources">
          <rect x="30" y="30" width="160" height="56" rx="10" fill="#e9e2f6" stroke={VIOL} strokeWidth="1.8" />
          <text x="110" y="54" textAnchor="middle" fontSize="13.5" fontWeight="800" fill={INK}>R — the engine</text>
          <text x="110" y="72" textAnchor="middle" fontSize="10.5" fill="#5a5170">cran.r-project.org</text>
          <rect x="240" y="30" width="160" height="56" rx="10" fill={GOLDL} stroke={GOLD} strokeWidth="1.8" />
          <text x="320" y="54" textAnchor="middle" fontSize="13.5" fontWeight="800" fill={INK}>RStudio — the interface</text>
          <text x="320" y="72" textAnchor="middle" fontSize="10.5" fill="#6b5620">rstudio.com · Windows & Mac</text>
          <rect x="450" y="30" width="150" height="56" rx="10" fill="#efeaf8" stroke={VIOLB} strokeWidth="1.6" />
          <text x="525" y="54" textAnchor="middle" fontSize="13.5" fontWeight="800" fill={INK}>Excel / Sheets</text>
          <text x="525" y="72" textAnchor="middle" fontSize="10.5" fill="#5a5170">365, 2021, or older</text>
          <defs>
            <marker id={`stm-ip-${id}`} markerWidth="8" markerHeight="8" refX="6" refY="3.2" orient="auto">
              <path d="M0,0 L6.5,3.2 L0,6.4 Z" fill={GREY} />
            </marker>
          </defs>
          <line x1="190" y1="58" x2="238" y2="58" stroke={GREY} strokeWidth="2" markerEnd={`url(#stm-ip-${id})`} />
          <text x="214" y="50" textAnchor="middle" fontSize="9.5" fill={GREY} fontWeight="700">install first</text>
          <text x="30" y="120" fontSize="11" fill={GREY} fontStyle="italic">order matters: RStudio without R is an empty desk — the engine carries the statistics, the interface carries the view</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L03 — AI policy lanes ---------------- */
export function AiPolicyLanes({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Two lane diagram of permitted and prohibited AI uses in the course"
      caption={
        <>
          The AI policy as L03 enumerates it: permitted uses on the violet lane, prohibited uses on the grey lane — and the stakes stated plainly: passing off AI work as your own may lead to candidature cancellation.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 200" className="h-auto w-full" role="img" aria-label="Permitted and prohibited AI use lanes">
          <rect x="24" y="24" width="278" height="150" rx="12" fill="#efeaf8" stroke={VIOLB} strokeWidth="1.6" />
          <text x="163" y="48" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={VIOL}>PERMITTED</text>
          {["Concept clarification", "Alternative perspectives", "Debugging code", "Quality checks & sanity verification"].map((t, i) => (
            <g key={t}>
              <circle cx="44" cy={70 + i * 26} r="4" fill={VIOLB} />
              <text x="56" y={74 + i * 26} fontSize="11.5" fill={INK}>{t}</text>
            </g>
          ))}
          <rect x="318" y="24" width="278" height="150" rx="12" fill="#f4f2f7" stroke={GREY} strokeWidth="1.6" />
          <text x="457" y="48" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#5f5876">PROHIBITED</text>
          {["AI as the sole source of information", "AI-written assignments submitted as yours", "Plagiarizing AI or human work", "Sharing confidential data with AI tools"].map((t, i) => (
            <g key={t}>
              <circle cx="338" cy={70 + i * 26} r="4" fill={GREY} />
              <text x="350" y={74 + i * 26} fontSize="11.5" fill={INK}>{t}</text>
            </g>
          ))}
          <defs>
            <marker id={`stm-ai-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GOLD} />
            </marker>
          </defs>
          <text x="310" y="192" textAnchor="middle" fontSize="10.5" fill={GREY} fontStyle="italic">verify manually before trusting AI output — the supplementary tool, never the primary one</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L04 — histogram shapes ---------------- */
export function HistogramShapes({ id }: { id: string }) {
  const panels = [
    { name: "Symmetric", note: "heights of students", path: "M10,70 Q30,6 50,70", mean: "mean = median" },
    { name: "Left-skewed", note: "exam scores cluster high", path: "M8,28 Q28,20 36,44 Q44,66 54,70", mean: "median > mean" },
    { name: "Right-skewed", note: "housing prices stretch high", path: "M8,70 Q16,66 24,44 Q34,20 54,28", mean: "mean > median" },
  ];
  return (
    <StmFigure
      aria="Three histogram shape panels showing symmetric left skewed and right skewed distributions"
      caption={
        <>
          The three distribution shapes L04 names: tails tell the story, and the mean-vs-median relationship follows the longer tail.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 130" className="h-auto w-full" role="img" aria-label="Three skewness thumbnails">
          {panels.map((p, i) => (
            <g key={p.name} transform={`translate(${i * 206},0)`}>
              <rect x="10" y="10" width="186" height="80" rx="8" fill="#fff" stroke={EDGE} />
              <line x1="20" y1="80" x2="186" y2="80" stroke={INK} strokeWidth="1.2" />
              <path d={p.path} fill="none" stroke={i === 2 ? GOLD : VIOLB} strokeWidth="2.6" transform="translate(10,0) scale(1.55,0.92)" />
              <text x="103" y="104" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>{p.name}</text>
              <text x="103" y="120" textAnchor="middle" fontSize="10" fill={GREY}>{p.mean} · {p.note}</text>
            </g>
          ))}
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L05 — scatter relationships ---------------- */
export function ScatterPanels({ id }: { id: string }) {
  const panels = [
    { name: "Positive", note: "slope m > 0 — interceptions vs points", pts: [[16, 78], [34, 66], [52, 58], [70, 44], [88, 34], [104, 26]] },
    { name: "Negative", note: "slope m < 0 — price vs quantity", pts: [[16, 24], [34, 34], [52, 46], [70, 56], [88, 66], [104, 74]] },
    { name: "None", note: "slope ≈ 0 — no pattern", pts: [[16, 50], [34, 38], [52, 62], [70, 42], [88, 58], [104, 46]] },
  ];
  return (
    <StmFigure
      aria="Three scatter diagram panels showing positive negative and no apparent relationship"
      caption={
        <>
          The trend line reads the relationship: the sign of the slope in y = mx + c is the whole story — positive rises, negative falls, zero stays flat.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 160" className="h-auto w-full" role="img" aria-label="Three scatter thumbnails">
          {panels.map((p, i) => (
            <g key={p.name} transform={`translate(${i * 206},0)`}>
              <rect x="10" y="10" width="186" height="106" rx="8" fill="#fff" stroke={EDGE} />
              <line x1="24" y1="104" x2="180" y2="104" stroke={INK} strokeWidth="1.2" />
              <line x1="24" y1="104" x2="24" y2="20" stroke={INK} strokeWidth="1.2" />
              <line x1="30" y1={i === 0 ? 26 : i === 1 ? 90 : 55} x2="172" y2={i === 0 ? 92 : i === 1 ? 26 : 55} stroke={i === 2 ? GREY : GOLD} strokeWidth="1.6" strokeDasharray="4 3" />
              {p.pts.map(([x, y], j) => (
                <circle key={j} cx={x + 8} cy={y - 6} r="3.4" fill={VIOLB} />
              ))}
              <text x="103" y="132" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>{p.name}</text>
              <text x="103" y="147" textAnchor="middle" fontSize="9.5" fill={GREY}>{p.note}</text>
            </g>
          ))}
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L06/L07 — the box plot ---------------- */
export function BoxPlotDraw({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Box plot anatomy with five number summary and 1.5 IQR fences"
      caption={
        <>
          The box plot drawn from the five-number summary: the box spans Q1–Q3, the median line splits it, whiskers reach the extremes — and any point beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR is marked an outlier.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 150" className="h-auto w-full" role="img" aria-label="Box plot with fences and an outlier">
          <defs>
            <marker id={`stm-bp-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GREY} />
            </marker>
          </defs>
          <line x1="40" y1="62" x2="580" y2="62" stroke={INK} strokeWidth="1.2" />
          <line x1="90" y1="62" x2="180" y2="62" stroke={VIOLB} strokeWidth="2" />
          <line x1="90" y1="50" x2="90" y2="74" stroke={VIOLB} strokeWidth="2" />
          <rect x="180" y="40" width="240" height="44" rx="6" fill="#e9e2f6" stroke={VIOL} strokeWidth="1.8" />
          <line x1="272" y1="40" x2="272" y2="84" stroke={GOLD} strokeWidth="3" />
          <line x1="420" y1="62" x2="500" y2="62" stroke={VIOLB} strokeWidth="2" />
          <line x1="500" y1="50" x2="500" y2="74" stroke={VIOLB} strokeWidth="2" />
          {[
            { x: 90, t: "Min", y: 100 },
            { x: 180, t: "Q1 (25th)", y: 100 },
            { x: 272, t: "Median (Q2)", y: 100 },
            { x: 420, t: "Q3 (75th)", y: 100 },
            { x: 500, t: "Max", y: 100 },
          ].map((m) => (
            <g key={m.t}>
              <text x={m.x} y={m.y} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={INK}>{m.t}</text>
            </g>
          ))}
          <line x1="180" y1="34" x2="90" y2="34" stroke={GOLD} strokeWidth="1.4" strokeDasharray="4 3" markerEnd={`url(#stm-bp-${id})`} />
          <line x1="420" y1="34" x2="512" y2="34" stroke={GOLD} strokeWidth="1.4" strokeDasharray="4 3" markerEnd={`url(#stm-bp-${id})`} />
          <text x="300" y="30" fontSize="10" fill={GOLD} fontWeight="700">1.5 × IQR fences — beyond them, outliers</text>
          <circle cx="560" cy="62" r="5.5" fill={GREY} />
          <text x="560" y="90" textAnchor="middle" fontSize="10.5" fill={GREY} fontWeight="700">outlier</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L06 — the coefficient of variation compare ---------------- */
export function CVCompare({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Two supplier delivery distributions with equal means but different standard deviations compared by coefficient of variation"
      caption={
        <>
          Same mean (5 days), different reliability: Supplier A's σ = 5 gives CV = 1.0; Supplier B's σ = 1 gives CV = 0.2 — lower CV, more consistency, and the contract goes to B.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 150" className="h-auto w-full" role="img" aria-label="Two delivery-time curves compared">
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(${i * 310},0)`}>
              <rect x="14" y="14" width="272" height="94" rx="8" fill="#fff" stroke={EDGE} />
              <line x1="26" y1="94" x2="274" y2="94" stroke={INK} strokeWidth="1.1" />
              {i === 0 ? (
                <path d="M40,92 Q100,58 150,92" fill="none" stroke={GREY} strokeWidth="2.6" />
              ) : (
                <path d="M110,92 Q150,44 190,92" fill="none" stroke={GOLD} strokeWidth="2.6" />
              )}
              <text x="150" y="112" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK}>Supplier {i === 0 ? "A" : "B"}</text>
              <text x="150" y="128" textAnchor="middle" fontSize="10" fill={GREY}>
                σ = {i === 0 ? "5" : "1"} · CV = {i === 0 ? "5/5 = 1.0" : "1/5 = 0.2"}
              </text>
            </g>
          ))}
          <text x="310" y="146" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">equal means hide unequal promises — the spread decides</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L09 — the three set operations ---------------- */
export function VennOps({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Three Venn diagram panels showing complement union and intersection of events A and B"
      caption={
        <>
          The events' grammar: the complement carries everything outside A, the union A ∪ B everything in either, the intersection A ∩ B only what they share — the addition law keeps the overlap from counting twice.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 150" className="h-auto w-full" role="img" aria-label="Complement union intersection Venn panels">
          {[
            { name: "Complement Aᶜ", mode: "comp" },
            { name: "Union A ∪ B", mode: "union" },
            { name: "Intersection A ∩ B", mode: "inter" },
          ].map((p, i) => (
            <g key={p.name} transform={`translate(${i * 206},0)`}>
              <rect x="10" y="10" width="186" height="100" rx="8" fill="#fff" stroke={EDGE} />
              <circle cx="80" cy="60" r="34" fill={p.mode === "inter" ? "none" : GOLDL} fillOpacity="0.55" stroke={VIOL} strokeWidth="1.6" />
              <circle cx="126" cy="60" r="34" fill={p.mode === "union" ? GOLDL : p.mode === "inter" ? GOLDL : "none"} fillOpacity="0.55" stroke={VIOL} strokeWidth="1.6" />
              {p.mode === "comp" ? <text x="150" y="40" fontSize="11" fill={GREY} fontWeight="700">Aᶜ</text> : null}
              <text x="70" y="64" fontSize="10.5" fontWeight="700" fill={INK}>A</text>
              <text x="136" y="64" fontSize="10.5" fontWeight="700" fill={INK}>B</text>
              <text x="103" y="128" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK}>{p.name}</text>
            </g>
          ))}
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L09 — Bayes prior → posterior ---------------- */
export function BayesTree({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Bayes theorem tree from prior probabilities through conditional likelihoods to posterior probabilities"
      caption={
        <>
          Bayes' machine: priors split the world, the information conditions each branch, and the posteriors re-split it — P(Aᵢ | B) = P(Aᵢ ∩ B) / P(B), the tabular form does the bookkeeping.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 190" className="h-auto w-full" role="img" aria-label="Bayes tree with priors likelihoods posteriors">
          <defs>
            <marker id={`stm-bt-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GREY} />
            </marker>
          </defs>
          <rect x="30" y="78" width="130" height="34" rx="8" fill="#e9e2f6" stroke={VIOL} strokeWidth="1.6" />
          <text x="95" y="100" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>Priors P(Aᵢ)</text>
          <rect x="240" y="34" width="160" height="30" rx="8" fill="#fff" stroke={EDGE} />
          <text x="320" y="54" textAnchor="middle" fontSize="11" fill={INK}>P(B | A₁) — likelihood 1</text>
          <rect x="240" y="122" width="160" height="30" rx="8" fill="#fff" stroke={EDGE} />
          <text x="320" y="142" textAnchor="middle" fontSize="11" fill={INK}>P(B | A₂) — likelihood 2</text>
          <rect x="460" y="34" width="140" height="30" rx="8" fill={GOLDL} stroke={GOLD} strokeWidth="1.6" />
          <text x="530" y="54" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK}>Posterior P(A₁|B)</text>
          <rect x="460" y="122" width="140" height="30" rx="8" fill={GOLDL} stroke={GOLD} strokeWidth="1.6" />
          <text x="530" y="142" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK}>Posterior P(A₂|B)</text>
          <line x1="160" y1="88" x2="238" y2="52" stroke={GREY} strokeWidth="1.5" markerEnd={`url(#stm-bt-${id})`} />
          <line x1="160" y1="102" x2="238" y2="136" stroke={GREY} strokeWidth="1.5" markerEnd={`url(#stm-bt-${id})`} />
          <line x1="400" y1="49" x2="458" y2="49" stroke={GREY} strokeWidth="1.5" markerEnd={`url(#stm-bt-${id})`} />
          <line x1="400" y1="137" x2="458" y2="137" stroke={GREY} strokeWidth="1.5" markerEnd={`url(#stm-bt-${id})`} />
          <text x="310" y="180" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">the information B re-weights every branch — priors in, posteriors out</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L10/L13 — the TV demand PMF ---------------- */
export function TVPmf({ id, shift = false }: { id: string; shift?: boolean }) {
  const base = [0.4, 0.25, 0.2, 0.05, 0.1];
  const bars = shift ? [0, 0.25, 0.2, 0.05, 0.1, 0, 0, 0, 0, 0, 0.4] : base;
  const labels = shift ? ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] : ["0", "1", "2", "3", "4"];
  const probs = shift ? ["0", "0.25", "0.20", "0.05", "0.10", "0", "0", "0", "0", "0", "0.40"] : base.map((p) => String(p));
  return (
    <StmFigure
      aria={shift ? "Probability mass function after the demand mix shift with the 80 zero-sale days turned into 10-unit days" : "Probability mass function of daily television sales over 200 observed days"}
      caption={
        shift
          ? "The mix shift the checkpoint runs: the 80 zero-sale days become 10-unit days — E(X) jumps 1.2 → 5.2 units per day, and the demand the inventory plan must survive changes shape entirely."
          : "The 200-day TV record as a probability distribution: P(0) = 0.40, P(1) = 0.25, P(2) = 0.20, P(3) = 0.05, P(4) = 0.10 — and E(X) = 1.2 units per day."
      }
    >
      <Frame>
        <svg viewBox="0 0 620 170" className="h-auto w-full" role="img" aria-label="Probability mass function bar chart">
          {bars.map((p, i) => {
            const bw = 560 / bars.length;
            const h = p * 110;
            return (
              <g key={i}>
                <rect x={30 + i * bw} y={140 - h} width={bw - 8} height={Math.max(h, 1)} fill={p === Math.max(...bars) ? GOLD : VIOLB} fillOpacity={p === Math.max(...bars) ? 0.85 : 0.6} />
                <text x={30 + i * bw + (bw - 8) / 2} y={154} textAnchor="middle" fontSize="10.5" fill={INK} fontWeight="600">{labels[i]}</text>
                <text x={30 + i * bw + (bw - 8) / 2} y={136 - h} textAnchor="middle" fontSize="9.5" fill={GREY}>{probs[i]}</text>
              </g>
            );
          })}
          <text x="310" y="168" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">x = units sold · bar heights = probabilities</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L18 — Poisson arrivals ---------------- */
export function PoissonBars({ id, lambda = 6.8 }: { id: string; lambda?: number }) {
  const pmf = (k: number) => Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
  const ks = Array.from({ length: 14 }, (_, i) => i);
  return (
    <StmFigure
      aria={`Poisson probability mass function with mean ${lambda} arrivals per hour`}
      caption={
        <>
          McNeil's arrivals at λ = {lambda} per hour: random, independent, rate-constant — the Poisson pmf is fully determined by λ alone.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 170" className="h-auto w-full" role="img" aria-label="Poisson pmf bars">
          {ks.map((k) => {
            const bw = 560 / ks.length;
            const p = pmf(k);
            const h = p * 260;
            const isTail = k > 8;
            return (
              <g key={k}>
                <rect x={30 + k * bw} y={140 - h} width={bw - 6} height={h} fill={isTail ? GOLD : VIOLB} fillOpacity={isTail ? 0.75 : 0.55} />
                <text x={30 + k * bw + (bw - 6) / 2} y={154} textAnchor="middle" fontSize="9.5" fill={INK}>{k}</text>
              </g>
            );
          })}
          <text x="310" y="168" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">gold bars — the X &gt; 8 tail McNeil's staffing question asks about</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

function factorial(n: number): number {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

/* ---------------- L19/L25 — the same skeleton bridge ---------------- */
export function SameSkeleton({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Bridge diagram showing the mean skeleton swapped to the proportion skeleton x bar to p hat and sigma over root n to radical p hat one minus p hat over n"
      caption={
        <>
          The same skeleton with swapped bones: the mean's x̄ becomes the proportion's p̂, and the mean's σ/√n becomes √[p̂(1−p̂)/n] — one machine, two parameters.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 150" className="h-auto w-full" role="img" aria-label="Mean to proportion skeleton swap">
          <rect x="30" y="30" width="250" height="70" rx="10" fill="#e9e2f6" stroke={VIOL} strokeWidth="1.8" />
          <text x="155" y="56" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>The mean (σ known)</text>
          <text x="155" y="80" textAnchor="middle" fontSize="13" fill={INK} fontFamily="Georgia, serif" fontStyle="italic">x̄ ± z(α/2) · σ/√n</text>
          <rect x="340" y="30" width="250" height="70" rx="10" fill={GOLDL} stroke={GOLD} strokeWidth="1.8" />
          <text x="465" y="56" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>The proportion</text>
          <text x="465" y="80" textAnchor="middle" fontSize="13" fill={INK} fontFamily="Georgia, serif" fontStyle="italic">p̂ ± z(α/2) · √[p̂(1−p̂)/n]</text>
          <defs>
            <marker id={`stm-ss-${id}`} markerWidth="8" markerHeight="8" refX="6" refY="3.2" orient="auto">
              <path d="M0,0 L6.5,3.2 L0,6.4 Z" fill={GREY} />
            </marker>
          </defs>
          <line x1="280" y1="58" x2="338" y2="58" stroke={GREY} strokeWidth="2" markerEnd={`url(#stm-ss-${id})`} />
          <text x="309" y="50" textAnchor="middle" fontSize="9.5" fill={GREY} fontWeight="700">swap</text>
          <text x="310" y="122" textAnchor="middle" fontSize="10.5" fill={GREY} fontStyle="italic">x̄ → p̂ · σ/√n → √[p̂(1−p̂)/n] · the confidence structure never changes</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L20 — the five sampling designs ---------------- */
export function SamplingDesignsTree({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Tree of five sampling designs split into probability methods and non probability methods"
      caption={
        <>
          One population, five ways to ask: the probability designs (violet) can state their own accuracy; the non-probability designs (grey) cannot — that is the honesty line.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 200" className="h-auto w-full" role="img" aria-label="Sampling designs tree">
          <defs>
            <marker id={`stm-sd-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GREY} />
            </marker>
          </defs>
          <rect x="240" y="16" width="140" height="34" rx="9" fill="#e9e2f6" stroke={VIOL} strokeWidth="1.8" />
          <text x="310" y="38" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK}>The population</text>
          {[
            { x: 40, t: "Stratified", tone: VIOLB },
            { x: 148, t: "Cluster", tone: VIOLB },
            { x: 256, t: "Systematic", tone: VIOLB },
            { x: 374, t: "Convenience", tone: GREY },
            { x: 490, t: "Judgment", tone: GREY },
          ].map((d, i) => (
            <g key={d.t}>
              <line x1="310" y1="50" x2={d.x + 62} y2="96" stroke={i < 3 ? VIOLB : GREY} strokeWidth="1.3" strokeDasharray={i < 3 ? "" : "4 3"} markerEnd={`url(#stm-sd-${id})`} />
              <rect x={d.x} y="96" width="124" height="58" rx="9" fill={i < 3 ? "#e9e2f6" : "#f4f2f7"} stroke={d.tone} strokeWidth="1.5" />
              <text x={d.x + 62} y="120" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK}>{d.t}</text>
              <text x={d.x + 62} y="138" textAnchor="middle" fontSize="9" fill={i < 3 ? VIOL : "#6b6480"}>{i < 3 ? "probability" : "non-probability"}</text>
            </g>
          ))}
          <text x="310" y="182" textAnchor="middle" fontSize="10.5" fill={GREY} fontStyle="italic">can the accuracy of the result be evaluated? only the violet designs answer yes</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L21 — sample size as power ---------------- */
export function PowerBars({ id }: { id: string }) {
  const rows = [
    { n: "50", se: "3.5355", p: "7.86%" },
    { n: "150", se: "2.0412", p: "0.72%" },
    { n: "400", se: "1.2500", p: "0.003%" },
  ];
  return (
    <StmFigure
      aria="Three bar chart of the Marrian Dairies tail probability shrinking from 7.86 to 0.72 to 0.003 percent as n grows"
      caption={
        <>
          Sample size is discriminative power: the same 5-point gap becomes visible only when n is large enough — P(X̄ ≤ 75) collapses 7.86% → 0.72% → 0.003% as n climbs 50 → 150 → 400.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 170" className="h-auto w-full" role="img" aria-label="Tail probability versus sample size bars">
          {rows.map((r, i) => {
            const w = [300, 120, 30][i];
            return (
              <g key={r.n}>
                <rect x="150" y={24 + i * 42} width={w} height="30" rx="5" fill={i === 2 ? GOLD : VIOLB} fillOpacity="0.7" />
                <text x="140" y={44 + i * 42} textAnchor="end" fontSize="12" fontWeight="800" fill={INK}>n = {r.n}</text>
                <text x={150 + w + 10} y={44 + i * 42} fontSize="12" fontWeight="700" fill={i === 2 ? GOLD : INK}>{r.p}</text>
              </g>
            );
          })}
          <text x="310" y="160" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">bar length = P(X̄ ≤ 75) — the signal the launch decision reads</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L22 — the confidence dial ---------------- */
export function ConfidenceDial({ id }: { id: string }) {
  const rows = [
    { level: "90%", z: "1.645", me: "1,234", lo: "39,866", hi: "42,334" },
    { level: "95%", z: "1.960", me: "1,470", lo: "39,630", hi: "42,570" },
    { level: "99%", z: "2.576", me: "1,932", lo: "39,168", hi: "43,032" },
  ];
  return (
    <StmFigure
      aria="Three interval bars at 90 95 and 99 percent confidence stretching wider as confidence rises"
      caption={
        <>
          One sample, three dials: the same x̄ = 41,100 with σ_x̄ = 750 — higher confidence buys width, never certainty about x̄ itself.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 180" className="h-auto w-full" role="img" aria-label="Confidence interval width comparison">
          {rows.map((r, i) => {
            const scale = [0.62, 0.74, 0.97][i];
            const x0 = 310 - 240 * scale;
            return (
              <g key={r.level}>
                <line x1={x0} y1={40 + i * 44} x2={x0 + 480 * scale} y2={40 + i * 44} stroke={i === 1 ? GOLD : VIOLB} strokeWidth="7" strokeLinecap="round" strokeOpacity={i === 1 ? 0.9 : 0.45} />
                <circle cx="310" cy={40 + i * 44} r="5" fill={INK} />
                <text x="60" y={44 + i * 44} fontSize="12.5" fontWeight="800" fill={INK}>{r.level}</text>
                <text x={x0 + 480 * scale + 12} y={44 + i * 44} fontSize="10" fill={GREY}>±{r.me}</text>
                <text x={x0} y={60 + i * 44} fontSize="9.5" fill={GREY}>{r.lo}</text>
                <text x={x0 + 480 * scale} y={60 + i * 44} textAnchor="end" fontSize="9.5" fill={GREY}>{r.hi}</text>
              </g>
            );
          })}
          <text x="310" y="172" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">x̄ = 41,100 — the point never moves; only the promise around it does</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L23 — the SE shrink machine ---------------- */
export function SEShrink({ id }: { id: string }) {
  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const n = 2 + i * 8;
    const se = 4000 / Math.sqrt(n);
    const y = 130 - Math.min(se / 600, 105);
    pts.push(`${i === 0 ? "M" : "L"}${40 + (i / 60) * 540},${y.toFixed(1)}`);
  }
  return (
    <StmFigure
      aria="Curve of standard error shrinking as sample size grows with marks at 50 150 and 400"
      caption={
        <>
          The SE shrink machine: σ_x̄ = σ/√n halves when n quadruples — precision is bought at the square root, which is why the last doubling of quality costs four times the sample.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 160" className="h-auto w-full" role="img" aria-label="Standard error versus sample size curve">
          <line x1="40" y1="130" x2="580" y2="130" stroke={INK} strokeWidth="1.2" />
          <line x1="40" y1="130" x2="40" y2="18" stroke={INK} strokeWidth="1.2" />
          <path d={pts.join(" ")} fill="none" stroke={VIOL} strokeWidth="2.6" />
          {[[50, 3.5355], [150, 2.041], [400, 1.25]].map(([n, se], i) => {
            const px = 40 + Math.min((n - 2) / 480, 1) * 540;
            const py = 130 - Math.min((se as number) / 600, 105);
            return (
              <g key={i}>
                <circle cx={px} cy={py} r="5" fill={i === 2 ? GOLD : GREY} />
                <text x={px} y={py - 10} textAnchor="middle" fontSize="10" fill={INK} fontWeight="700" fontFamily="ui-monospace, monospace">n = {n}</text>
              </g>
            );
          })}
          <text x="320" y="152" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">σ_x̄ = σ/√n — the curve that prices precision</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L26 — the transmission histogram ---------------- */
export function MetroHistogram({ id }: { id: string }) {
  const bars = [
    { x: "30k", h: 0.16 }, { x: "45k", h: 0.28 }, { x: "60k", h: 0.34 },
    { x: "75k", h: 0.3 }, { x: "90k", h: 0.22 }, { x: "105k", h: 0.14 }, { x: "120k", h: 0.06 },
  ];
  return (
    <StmFigure
      aria="Histogram of transmission failure mileage with the confidence interval bounds marked"
      caption={
        <>
          The 50-record transmission file: failures spread wide (σ = 24,849), skew slightly right, and 19 vehicles died below the interval's lower bound — averages comfort, distributions decide.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 180" className="h-auto w-full" role="img" aria-label="Transmission failure histogram">
          {bars.map((b, i) => (
            <g key={b.x}>
              <rect x={40 + i * 80} y={140 - b.h * 300} width="66" height={b.h * 300} fill={i < 2 ? GOLD : VIOLB} fillOpacity={i < 2 ? 0.75 : 0.5} />
              <text x={40 + i * 80 + 33} y={156} textAnchor="middle" fontSize="10" fill={INK}>{b.x}</text>
            </g>
          ))}
          <line x1="40" y1="140" x2="600" y2="140" stroke={INK} strokeWidth="1.2" />
          <line x1="120" y1="140" x2="120" y2="40" stroke={GOLD} strokeWidth="1.6" strokeDasharray="4 3" />
          <text x="120" y="32" textAnchor="middle" fontSize="9.5" fill={GOLD} fontWeight="700">LCL 66,264 · 19 cars below</text>
          <text x="320" y="174" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">mean 73,340 · median 72,700 · σ = 24,849 · no mode</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L27/L29 — the 2x2 error courtroom ---------------- */
export function ErrorMatrix({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Two by two decision matrix of Type I and Type II errors against the true state of the null hypothesis"
      caption={
        <>
          The courtroom: H₀ is the defendant. Rejecting a true H₀ is the Type I false positive; failing to reject a false H₀ is the Type II false negative — and the two errors trade off inversely.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 190" className="h-auto w-full" role="img" aria-label="Type I and Type II error matrix">
          <rect x="150" y="40" width="210" height="60" fill="#e9e2f6" stroke={EDGE} />
          <rect x="360" y="40" width="210" height="60" fill="#e9e2f6" stroke={EDGE} />
          <rect x="150" y="100" width="210" height="60" fill={GOLDL} stroke={GOLD} strokeWidth="1.6" />
          <rect x="360" y="100" width="210" height="60" fill="#f4f2f7" stroke={GREY} strokeWidth="1.6" />
          <text x="255" y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>Reject H₀</text>
          <text x="255" y="84" textAnchor="middle" fontSize="10" fill={GREY}>the decision</text>
          <text x="465" y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>Fail to Reject H₀</text>
          <text x="465" y="84" textAnchor="middle" fontSize="10" fill={GREY}>the decision</text>
          <text x="255" y="126" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={GOLD}>Type I error — α</text>
          <text x="255" y="146" textAnchor="middle" fontSize="10.5" fill="#6b5620">false positive · alarm with no fire</text>
          <text x="465" y="126" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={GREY}>Type II error — β</text>
          <text x="465" y="146" textAnchor="middle" fontSize="10.5" fill="#5f5876">false negative · no alarm, real fire</text>
          <text x="80" y="66" fontSize="11.5" fontWeight="700" fill={INK}>H₀ true</text>
          <text x="80" y="126" fontSize="11.5" fontWeight="700" fill={INK}>H₀ false</text>
          <text x="255" y="178" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">correct decisions live in the remaining cells — the verdict language is reject or fail to reject, never accept</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L29 — the α/β trade-off ---------------- */
export function TradeoffCurve({ id }: { id: string }) {
  return (
    <StmFigure
      aria="Inverse relationship curve showing alpha falling as beta rises with a dial point marked"
      caption={
        <>
          The inverse law: tightening α starves the rejection region and feeds β; loosening α does the opposite. The α-dial is a business decision about which error costs more.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 170" className="h-auto w-full" role="img" aria-label="Alpha versus beta trade-off curves">
          <line x1="40" y1="130" x2="580" y2="130" stroke={INK} strokeWidth="1.2" />
          <line x1="40" y1="130" x2="40" y2="18" stroke={INK} strokeWidth="1.2" />
          <path d="M50,26 Q320,60 570,118" fill="none" stroke={VIOL} strokeWidth="2.6" />
          <path d="M50,118 Q320,60 570,26" fill="none" stroke={GREY} strokeWidth="2.4" strokeDasharray="6 4" />
          <circle cx="310" cy="62" r="5.5" fill={GOLD} />
          <text x="310" y="50" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={GOLD}>the chosen α</text>
          <text x="90" y="40" fontSize="10.5" fill={VIOL} fontWeight="700">β — missing a real effect</text>
          <text x="90" y="122" fontSize="10.5" fill={GREY} fontWeight="700">α — false alarm</text>
          <text x="320" y="160" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">α down → β up · α up → β down · both at zero does not exist</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L32 — the SPC control chart ---------------- */
export function SpcChart({ id }: { id: string }) {
  const samples = [
    { k: 1, z: 11.96, p: "0.28" },
    { k: 2, z: 12.03, p: "0.77" },
    { k: 3, z: 11.89, p: "0.003" },
    { k: 4, z: 12.08, p: "0.28" },
  ];
  const y = (v: number) => 150 - ((v - 11.8) / 0.4) * 110;
  return (
    <StmFigure
      aria="Statistical process control chart with four sample means against control limits at 11.90 and 12.10"
      caption={
        <>
          The control chart of the four samples: means hover inside 11.90–12.10 except Sample 3 (11.89) — below the lower limit, p = 0.003, the line stops and corrective action begins.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 190" className="h-auto w-full" role="img" aria-label="Control chart with limits and four samples">
          <defs>
            <marker id={`stm-spc-${id}`} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={GREY} />
            </marker>
          </defs>
          <rect x="60" y={y(12.1)} width="530" height={y(11.9) - y(12.1)} fill={GOLDL} fillOpacity="0.35" />
          <line x1="60" y1={y(12.1)} x2="590" y2={y(12.1)} stroke={GOLD} strokeWidth="1.8" />
          <line x1="60" y1={y(11.9)} x2="590" y2={y(11.9)} stroke={GOLD} strokeWidth="1.8" />
          <line x1="60" y1={y(12.0)} x2="590" y2={y(12.0)} stroke={GREY} strokeWidth="1.3" strokeDasharray="5 4" />
          <text x="596" y={y(12.1) + 4} fontSize="10" fontWeight="700" fill={GOLD}>UCL 12.10</text>
          <text x="596" y={y(12.0) + 4} fontSize="10" fill={GREY}>12.00</text>
          <text x="596" y={y(11.9) + 4} fontSize="10" fontWeight="700" fill={GOLD}>LCL 11.90</text>
          {samples.map((s, i) => {
            const cx = 130 + i * 120;
            const out = s.k === 3;
            return (
              <g key={s.k}>
                {i < 3 ? <line x1={cx} y1={y(samples[i].z)} x2={cx + 120} y2={y(samples[i + 1].z)} stroke={GREY} strokeWidth="1.4" markerEnd={`url(#stm-spc-${id})`} /> : null}
                <circle cx={cx} cy={y(s.z)} r="6.5" fill={out ? GOLD : VIOLB} stroke="#fff" strokeWidth="1.6" />
                <text x={cx} y={y(s.z) - 13} textAnchor="middle" fontSize="10" fontWeight="700" fill={out ? GOLD : INK} fontFamily="ui-monospace, monospace">
                  {s.z.toFixed(2)}
                </text>
                <text x={cx} y="178" textAnchor="middle" fontSize="9.5" fill={GREY}>sample {s.k} · p = {s.p}</text>
              </g>
            );
          })}
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L33 — the exam coverage map ---------------- */
export function ExamCoverageMap({ id }: { id: string }) {
  const blocks = [
    { t: "Ch. 1-2 · Data & displays", m: 1 },
    { t: "Ch. 3 · Numerical measures", m: 1 },
    { t: "Ch. 4 · Probability", m: 1 },
    { t: "Ch. 5 · Discrete distributions", m: 1 },
    { t: "Ch. 6 · Continuous distributions", m: 1 },
    { t: "Ch. 7 · Sampling & CLT", m: 1 },
    { t: "Ch. 8 · Interval estimation", m: 1 },
    { t: "Ch. 9 · Hypothesis testing", m: 0 },
  ];
  return (
    <StmFigure
      aria="Coverage map of chapters one to nine with emphasis on one to eight and chapter nine lighter"
      caption={
        <>
          The end-term map as L33 states it: Chapters 1-9 with emphasis on 1-8 — the violet blocks carry the emphasis, the lighter ninth block completes the sweep. Calculator: scientific, non-programmable, mandatory; z-tables come supplied in the paper.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 120" className="h-auto w-full" role="img" aria-label="Chapters one to nine emphasis map">
          {blocks.map((b, i) => (
            <g key={b.t}>
              <rect x={16 + i * 74} y="24" width="66" height="52" rx="7" fill={b.m ? "#e9e2f6" : "#f4f2f7"} stroke={b.m ? VIOLB : GREY} strokeWidth="1.5" />
              <text x={16 + i * 74 + 33} y={44} textAnchor="middle" fontSize="10" fontWeight="800" fill={INK}>Ch {i + 1}</text>
              <text x={16 + i * 74 + 33} y={60} textAnchor="middle" fontSize="8" fill={b.m ? VIOL : GREY}>{b.m ? "emphasis" : "covered"}</text>
            </g>
          ))}
          <text x="310" y="106" textAnchor="middle" fontSize="10.5" fill={GREY} fontStyle="italic">2 hours · 60 marks · very-short + medium + multi-part · sample paper by the end of the week</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}

/* ---------------- L12 — the exponential lifetime curve ---------------- */
export function ExponentialCurve({ id }: { id: string }) {
  const pts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const t = (i / 80) * 8;
    const p = Math.exp(-t / 2.5);
    pts.push(`${i === 0 ? "M" : "L"}${(30 + (i / 80) * 550).toFixed(1)},${(140 - p * 105).toFixed(1)}`);
  }
  return (
    <StmFigure
      aria="Exponential decay curve of device lifetime probability"
      caption={
        <>
          The exponential distribution: memoryless lifetimes — Al's pump-style hazard where only λ matters, P(X &gt; t) = e^(−t/μ), the long right tail that never quite touches down.
        </>
      }
    >
      <Frame>
        <svg viewBox="0 0 620 160" className="h-auto w-full" role="img" aria-label="Exponential decay curve">
          <line x1="30" y1="140" x2="590" y2="140" stroke={INK} strokeWidth="1.2" />
          <path d={pts.join(" ")} fill="none" stroke={VIOL} strokeWidth="2.6" />
          <text x="310" y="156" textAnchor="middle" fontSize="10" fill={GREY} fontStyle="italic">P(X &gt; t) = e^(−t/μ) — memoryless: the past says nothing about the next hour</text>
        </svg>
      </Frame>
    </StmFigure>
  );
}
