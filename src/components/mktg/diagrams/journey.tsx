"use client";

/* ============================================================
   MKTG registered figures — the decision journey (L19).
   Corpus: "Overview of Consumer Buying Decision Process" —
   the five stages, heuristics, the messy middle loop, and the
   non-linear rewrite (skip / reverse / loop).
   ============================================================ */

import { Arrow, FigSvg, Figure, MK, T } from "./kit";

const STAGES = [
  { x: 78, k: "Problem recognition", d: "existing state ≠ desired state" },
  { x: 214, k: "Information search", d: "internal memory · external sources" },
  { x: 350, k: "Evaluation of alternatives", d: "criteria · heuristics" },
  { x: 486, k: "Purchase decision", d: "intention → transaction" },
  { x: 622, k: "Post-purchase behaviour", d: "satisfaction → loyalty" },
];

/** The 5-stage buying journey with its non-linear rewrite. */
export function JourneyFive() {
  return (
    <Figure
      label="The five-stage buying decision process with its non-linear rewrite"
      caption="The five-stage buying decision process (L19) — and the non-linear rewrite real consumers perform: stages get skipped, reversed and looped before a purchase settles."
    >
      <FigSvg vb="0 0 700 236" label="Five stages: problem recognition, information search, evaluation of alternatives, purchase decision, post-purchase behaviour, with dashed non-linear rewrite arrows">
        <Arrow id="jf-a" />
        <Arrow id="jf-d" color={MK.brass} />
        {/* stage cards */}
        {STAGES.map((s, i) => (
          <g key={s.k}>
            <rect x={s.x - 62} y={64} width={124} height={62} rx={10} fill={MK.paper} stroke={MK.teal} strokeWidth={1.6} />
            <circle cx={s.x} cy={46} r={13} fill={MK.teal} />
            <T x={s.x} y={50} size={11} fill="#f0fdfa" weight={700}>{i + 1}</T>
            <T x={s.x} y={88} size={10.5} weight={700}>{s.k}</T>
            <T x={s.x} y={106} size={9} fill={MK.dim} italic>{s.d}</T>
            {i < STAGES.length - 1 ? (
              <line x1={s.x + 64} y1={95} x2={STAGES[i + 1].x - 66} y2={95} stroke={MK.teal} strokeWidth={1.8} markerEnd="url(#jf-a)" />
            ) : null}
          </g>
        ))}
        {/* the non-linear rewrite */}
        <path d="M 140 168 C 200 210 320 210 350 172" fill="none" stroke={MK.brass} strokeWidth={1.8} strokeDasharray="5 5" markerEnd="url(#jf-d)" />
        <path d="M 420 172 C 470 214 560 208 610 132" fill="none" stroke={MK.brass} strokeWidth={1.8} strokeDasharray="5 5" markerEnd="url(#jf-d)" />
        <path d="M 560 62 C 470 18 300 18 200 60" fill="none" stroke={MK.brass} strokeWidth={1.8} strokeDasharray="5 5" markerEnd="url(#jf-d)" />
        <T x={350} y={228} size={11} fill={MK.brass} weight={700}>the non-linear rewrite — skip · reverse · loop</T>
        <T x={352} y={22} size={10} fill={MK.brass} weight={700}>re-loop to search</T>
      </FigSvg>
    </Figure>
  );
}

/** The messy-middle infinity loop. */
export function MessyLoop() {
  return (
    <Figure
      label="The messy middle — the infinity loop of exploration and evaluation"
      caption="The messy middle (L19): between trigger and purchase, consumers loop endlessly between exploration and evaluation — the infinity loop where brands win or lose the shortlist."
    >
      <FigSvg vb="0 0 700 250" label="Infinity loop between exploration and evaluation, from trigger to purchase">
        <Arrow id="ml-a" />
        <Arrow id="ml-b" color={MK.brass} />
        <T x={62} y={30} size={11} fill={MK.brass} weight={700}>TRIGGER</T>
        <T x={640} y={30} size={11} fill={MK.brass} weight={700}>PURCHASE</T>
        <rect x={26} y={40} width={72} height={34} rx={8} fill={MK.paper} stroke={MK.brass} strokeWidth={1.5} />
        <rect x={602} y={40} width={72} height={34} rx={8} fill={MK.paper} stroke={MK.brass} strokeWidth={1.5} />
        {/* infinity curve */}
        <path d="M 98 57 C 170 57 190 165 260 165 C 330 165 330 57 400 57" fill="none" stroke={MK.teal} strokeWidth={2.4} markerEnd="url(#ml-a)" />
        <path d="M 400 57 C 470 57 490 165 560 165 C 630 165 640 90 676 62" fill="none" stroke={MK.teal} strokeWidth={2.4} markerEnd="url(#ml-a)" />
        <path d="M 560 165 C 480 172 340 172 260 165" fill="none" stroke={MK.brass} strokeWidth={2} strokeDasharray="6 5" markerEnd="url(#ml-b)" />
        {/* hubs */}
        <ellipse cx={260} cy={165} rx={74} ry={26} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.8} />
        <ellipse cx={560} cy={165} rx={74} ry={26} fill={MK.brassSoft} stroke={MK.brass} strokeWidth={1.8} />
        <T x={260} y={169} size={12.5} weight={800} fill={MK.teal}>Exploration</T>
        <T x={560} y={169} size={12.5} weight={800} fill={MK.brass}>Evaluation</T>
        <T x={350} y={116} size={11} weight={700} fill={MK.dim}>the messy middle</T>
        <T x={350} y={132} size={10} fill={MK.dim} italic>shortlists are built and broken here</T>
        <T x={410} y={196} size={10} fill={MK.brass} weight={700}>loop until a brand feels automatic</T>
      </FigSvg>
    </Figure>
  );
}
