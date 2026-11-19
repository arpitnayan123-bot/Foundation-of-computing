"use client";

/* ============================================================
   MKTG registered figures — foundations arc (L1, L7, L12,
   L14, L18). Every figure fills a lecture the baseline audit
   flagged as diagram-less; data matches the shelf's verified
   machines exactly.
   ============================================================ */

import { Arrow, FigSvg, Figure, MK, T } from "./kit";

const SURFACES = [
  "Mobile devices and technology",
  "Clothing and fashion choices",
  "Food and dining preferences",
  "Mobile applications and digital platforms",
  "Brand trust and loyalty decisions",
];

/** L1 — marketing already orbits the consumer's everyday life. */
export function EverydayOrbit() {
  return (
    <Figure
      label="Marketing in everyday life — five surfaces orbiting the consumer"
      caption="Lecture 1's five everyday surfaces (L1): you were a consumer long before you were a student of consumers — each surface is a place marketing already lives."
    >
      <FigSvg vb="0 0 620 260" label="Centre circle labelled consumer with five orbiting surfaces">
        <Arrow id="eo-a" color={MK.brass} />
        <circle cx={310} cy={130} r={54} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={2} />
        <T x={310} y={124} size={13} weight={800} fill={MK.teal}>You,</T>
        <T x={310} y={141} size={13} weight={800} fill={MK.teal}>the consumer</T>
        <ellipse cx={310} cy={130} rx={196} ry={82} fill="none" stroke={MK.brass} strokeWidth={1.4} strokeDasharray="4 6" />
        {[
          { x: 310, y: 40, t: SURFACES[0] },
          { x: 100, y: 96, t: SURFACES[1] },
          { x: 520, y: 96, t: SURFACES[2] },
          { x: 148, y: 208, t: SURFACES[3] },
          { x: 472, y: 208, t: SURFACES[4] },
        ].map((n) => (
          <g key={n.t}>
            <rect x={n.x - 78} y={n.y - 15} width={156} height={30} rx={9} fill={MK.paper} stroke={MK.teal} strokeWidth={1.4} />
            <T x={n.x} y={n.y + 4} size={9.3} weight={700}>{n.t}</T>
          </g>
        ))}
      </FigSvg>
    </Figure>
  );
}

/** L7 — value = benefits − sacrifices, and the luxury lever. */
export function ValueEquation() {
  return (
    <Figure
      label="Value equals benefits minus sacrifices — the balance and the luxury lever"
      caption="Lecture 7's three distinctions in one shape (L7): benefits minus sacrifices — and the uncapped extended psychological benefit that sells a ₹100 pen for ₹5,000."
    >
      <FigSvg vb="0 0 620 236" label="Balance beam: benefits side heavier, sacrifices side lighter, luxury lever annotation">
        <Arrow id="ve-a" color={MK.brass} />
        {/* fulcrum */}
        <polygon points="310,196 330,196 320,166" fill={MK.brass} />
        {/* beam tilted toward benefits */}
        <line x1={110} y1={132} x2={530} y2={158} stroke={MK.ink} strokeWidth={4} strokeLinecap="round" />
        {/* benefit pan (lower = heavier) */}
        <line x1={150} y1={136} x2={150} y2={168} stroke={MK.ink} strokeWidth={2} />
        <rect x={70} y={168} width={160} height={46} rx={8} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.6} />
        <T x={150} y={188} size={11.5} weight={800} fill={MK.teal}>BENEFITS</T>
        <T x={150} y={204} size={9} fill={MK.dim} italic>functional · psychological · economic · extended-psych</T>
        {/* sacrifice pan */}
        <line x1={490} y1={155} x2={490} y2={184} stroke={MK.ink} strokeWidth={2} />
        <rect x={400} y={184} width={180} height={38} rx={8} fill={MK.paper} stroke={MK.dim} strokeWidth={1.4} />
        <T x={490} y={200} size={11} weight={800} fill={MK.dim}>SACRIFICES</T>
        <T x={490} y={214} size={9} fill={MK.dim} italic>price · time · effort · psychology</T>
        {/* value label */}
        <T x={310} y={120} size={14} weight={800}>Value = Benefits − Sacrifices</T>
        <line x1={250} y1={224} x2={370} y2={224} stroke={MK.brass} strokeWidth={0} />
        <T x={310} y={224} size={10.5} fill={MK.brass} weight={700}>the luxury lever: extended psychological benefit has no cap</T>
      </FigSvg>
    </Figure>
  );
}

const SURF_NAMES = ["Heavy Users", "Machine-Wash Users", "Occasional Users", "Value Seekers"];

/** L12 — behavioral segments turn 25% penetration into 75%. */
export function SegmentBars() {
  return (
    <Figure
      label="Surf Excel's four behavioral segments lifting market penetration from 25 to 75 percent"
      caption="Lecture 12's behavioral segmentation machine, as a shape (L12): four behaviours, four products — penetration 25% without segmentation, up to 75% with it."
    >
      <FigSvg vb="0 0 620 240" label="Penetration bar 25 percent grey and 75 percent teal, four segment cards below">
        <Arrow id="sb-a" color={MK.brass} />
        {/* penetration bar */}
        <T x={14} y={26} size={10.5} anchor="start" fill={MK.dim} weight={700}>MARKET PENETRATION</T>
        <rect x={14} y={36} width={592} height={34} rx={10} fill={MK.paper} stroke={MK.line} />
        <rect x={14} y={36} width={148} height={34} rx={10} fill={MK.line} />
        <rect x={162} y={36} width={444} height={34} rx={10} fill="url(#sb-grad)" />
        <defs>
          <linearGradient id="sb-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        <T x={88} y={58} size={11} weight={800} fill={MK.dim}>25% without</T>
        <T x={384} y={58} size={12} weight={800} fill="#f0fdfa">up to 75% with behavioral segmentation</T>
        {/* segment cards */}
        {SURF_NAMES.map((n, i) => {
          const x = 14 + i * 150;
          return (
            <g key={n}>
              <rect x={x} y={104} width={142} height={106} rx={12} fill={MK.paper} stroke={MK.teal} strokeWidth={1.5} />
              <circle cx={x + 71} cy={134} r={17} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.4} />
              <T x={x + 71} y={139} size={11} weight={800} fill={MK.teal}>{i + 1}</T>
              <T x={x + 71} y={168} size={11} weight={800}>{n}</T>
              <T x={x + 71} y={188} size={8.8} fill={MK.dim} italic>{["value packs", "liquids & machines", "small sachets", "BOGO mega packs"][i]}</T>
            </g>
          );
        })}
        <T x={310} y={230} size={10} fill={MK.brass} weight={700}>four behaviors · four products — one detergent line</T>
      </FigSvg>
    </Figure>
  );
}

const GATES = [
  { k: "S", t: "Size", d: "demand large enough to justify investment" },
  { k: "A", t: "Accessibility", d: "reachable and serviceable" },
  { k: "F", t: "Fitment", d: "aligns with needs & brand capability" },
  { k: "E", t: "Economics", d: "sustainable, profitable model" },
];

/** L14 — the SAFE targeting funnel. */
export function SafeGates() {
  return (
    <Figure
      label="SAFE targeting — four gates from many segments to the chosen target"
      caption="Lecture 14's SAFE pipeline as a shape (L14): every candidate segment must pass all four gates before targeting resources commit."
    >
      <FigSvg vb="0 0 620 220" label="Funnel narrowing through four gates labelled Size, Accessibility, Fitment, Economics">
        <Arrow id="sg-a" />
        {GATES.map((g, i) => {
          const inset = i * 52;
          const y = 18 + i * 44;
          return (
            <g key={g.k}>
              <path
                d={`M ${60 + inset} ${y} L ${560 - inset} ${y} L ${520 - inset} ${y + 34} L ${100 + inset} ${y + 34} Z`}
                fill={i % 2 === 0 ? MK.tealSoft : MK.paper}
                stroke={MK.teal}
                strokeWidth={1.5}
                opacity={1 - i * 0.06}
              />
              <circle cx={92 + inset} cy={y + 17} r={13} fill={MK.teal} />
              <T x={92 + inset} y={y + 21} size={11} fill="#f0fdfa" weight={800}>{g.k}</T>
              <T x={118 + inset} y={y + 15} size={11.5} weight={800} anchor="start">{g.t}</T>
              <T x={118 + inset} y={y + 28} size={8.8} fill={MK.dim} anchor="start" italic>{g.d}</T>
            </g>
          );
        })}
        <T x={310} y={206} size={10.5} fill={MK.brass} weight={700}>every gate must pass — a big market you can't reach is not a target</T>
      </FigSvg>
    </Figure>
  );
}

const ERAS = [
  { t: "Classical", d: "the rational consumer", note: "weighs utility, decides logically" },
  { t: "Cognitive", d: "bounded rationality", note: "heuristics, biases, mental shortcuts" },
  { t: "Nudge", d: "choice architecture", note: "Kahneman → Thaler — behaviour is designed" },
];

/** L18 — the three eras of consumer thought. */
export function ErasFlow() {
  return (
    <Figure
      label="The evolution of consumer thought — classical, cognitive and nudge eras"
      caption="Lecture 18's eras (L18): from the rational consumer to bounded rationality to the nudged consumer — the arc the whole consumer-mind part builds on."
    >
      <FigSvg vb="0 0 620 170" label="Three era panels connected by arrows">
        <Arrow id="ef-a" />
        {ERAS.map((e, i) => {
          const x = 30 + i * 204;
          return (
            <g key={e.t}>
              <rect x={x} y={26} width={168} height={104} rx={12} fill={i === 2 ? MK.tealSoft : MK.paper} stroke={MK.teal} strokeWidth={1.6} />
              <T x={x + 84} y={54} size={13} weight={800}>{e.t}</T>
              <T x={x + 84} y={76} size={10.5} weight={700} fill={MK.teal}>{e.d}</T>
              <T x={x + 84} y={98} size={9} fill={MK.dim} italic>{e.note}</T>
              {i < 2 ? <line x1={x + 170} y1={78} x2={x + 202} y2={78} stroke={MK.teal} strokeWidth={2} markerEnd="url(#ef-a)" /> : null}
            </g>
          );
        })}
        <T x={310} y={156} size={10} fill={MK.brass} weight={700}>minds are never empty — mango ads fill them first</T>
      </FigSvg>
    </Figure>
  );
}
