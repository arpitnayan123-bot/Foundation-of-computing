"use client";

/* ============================================================
   MKTG registered figures — pricing (L36).
   Corpus: the 3C pricing framework, consumer psychology
   (reference price · price-quality inference · price endings ·
   framing · decoy) and the six-step pricing process.
   ============================================================ */

import { Arrow, FigSvg, Figure, MK, T } from "./kit";

/** L36 — the 3C pricing framework as intersecting circles. */
export function PricingTriad() {
  return (
    <Figure
      label="The 3C pricing framework — cost, competitors, customer value"
      caption="L36's pricing triangle: cost sets the floor, competitors anchor the range, customer value is the uncapped ceiling — 'the most critical and dynamic element'."
    >
      <FigSvg vb="0 0 620 240" label="Three intersecting circles labelled cost to company, competitors' pricing and customer value">
        <Arrow id="pt-a" color={MK.brass} />
        <circle cx={228} cy={104} r={86} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={2} opacity={0.9} />
        <circle cx={392} cy={104} r={86} fill={MK.paper} stroke={MK.dim} strokeWidth={2} opacity={0.85} />
        <circle cx={310} cy={182} r={86} fill={MK.brassSoft} stroke={MK.brass} strokeWidth={2} opacity={0.85} />
        <T x={196} y={82} size={11.5} weight={800} fill={MK.teal}>COST TO</T>
        <T x={196} y={97} size={11.5} weight={800} fill={MK.teal}>COMPANY</T>
        <T x={196} y={113} size={8.8} fill={MK.dim} italic>manufacturing · marketing · overheads</T>
        <T x={430} y={82} size={11.5} weight={800} fill={MK.dim}>COMPETITORS'</T>
        <T x={430} y={97} size={11.5} weight={800} fill={MK.dim}>PRICING</T>
        <T x={430} y={113} size={8.8} fill={MK.dim} italic>the range the market expects</T>
        <T x={310} y={196} size={11.5} weight={800} fill={MK.brass}>CUSTOMER VALUE</T>
        <T x={310} y={211} size={8.8} fill={MK.dim} italic>perception · willingness to pay — no upper limit</T>
        <T x={310} y={140} size={10.5} weight={800}>the pricing decision</T>
        <T x={310} y={26} size={10} fill={MK.brass} weight={700}>psychology lives here: reference price · price-quality · endings · framing · decoy</T>
      </FigSvg>
    </Figure>
  );
}

const LADDER = [
  { n: 1, t: "Select the objective", d: "survival · profit max · share · skimming · quality leadership", ex: "Netflix ₹2,500 → ₹400 to survive" },
  { n: 2, t: "Determine demand", d: "elastic or inelastic", ex: "Funflips ₹4 → ₹20 without losing buyers" },
  { n: 3, t: "Estimate cost", d: "fixed + variable → the floor price", ex: "cost structure sets the minimum" },
  { n: 4, t: "Analyse competitors", d: "benchmark costs, prices, value", ex: "Vodafone · Jio · Airtel parity" },
  { n: 5, t: "Select the method", d: "markup · target return · value · EDLP", ex: "Forest Essentials: perceived value" },
  { n: 6, t: "Set the final price", d: "integrate every analysis", ex: "the shelf price, finally" },
];

/** L36 — the six-step pricing ladder. */
export function PricingLadder() {
  return (
    <Figure
      label="The six-step pricing ladder from objective to final price"
      caption="L36's six steps in order — each rung carries the lecture's own example. Skipping a rung is how prices get set by habit instead of strategy."
    >
      <FigSvg vb="0 0 620 330" label="Stepped ladder of six rungs rising left to right">
        <Arrow id="pl6-a" color={MK.brass} />
        {LADDER.map((s, i) => {
          const x = 18 + i * 98;
          const y = 258 - i * 40;
          return (
            <g key={s.n}>
              <rect x={x} y={y} width={150} height={58} rx={9} fill={i === 5 ? MK.teal : MK.paper} stroke={MK.teal} strokeWidth={1.6} />
              <circle cx={x + 20} cy={y + 18} r={11} fill={i === 5 ? MK.gold : MK.teal} />
              <T x={x + 20} y={y + 22} size={10} fill={i === 5 ? "#33260b" : "#f0fdfa"} weight={800}>{s.n}</T>
              <T x={x + 36} y={y + 22} size={9.6} weight={800} anchor="start" fill={i === 5 ? "#f0fdfa" : MK.ink}>{s.t}</T>
              <T x={x + 12} y={y + 40} size={8.2} anchor="start" fill={i === 5 ? "#c9efe7" : MK.dim} italic>{s.d}</T>
              <T x={x + 12} y={y + 51} size={8} anchor="start" fill={i === 5 ? "#c9efe7" : MK.brass}>{s.ex}</T>
            </g>
          );
        })}
        <T x={310} y={318} size={10} fill={MK.brass} weight={700}>each rung shapes the next — the objective drives everything downstream</T>
      </FigSvg>
    </Figure>
  );
}
