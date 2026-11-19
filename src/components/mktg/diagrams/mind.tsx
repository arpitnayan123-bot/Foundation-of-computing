"use client";

/* ============================================================
   MKTG registered figures — the consumer mind (L23, L28).
   Corpus: theories of motivation (Maslow's five-level pyramid)
   and cognitive biases (anchoring · bandwagon · scarcity ·
   endowment). Level/bias labels match the shelf's verified
   machines byte-for-byte.
   ============================================================ */

import { Arrow, FigSvg, Figure, MK, T } from "./kit";

const LEVELS = [
  { t: "Self-actualization", d: "becoming what one is capable of becoming" },
  { t: "Esteem needs", d: "recognition, social status and respect" },
  { t: "Social needs", d: "belonging, love, trust and affection" },
  { t: "Safety needs", d: "security and protection for one's family" },
  { t: "Physiological needs", d: "food, water, shelter — survival first" },
];

/** Maslow's pyramid — the five-level hierarchy of needs. */
export function MaslowPyramid({ highlight = -1 }: { highlight?: number }) {
  // trapezoid rows, top (index 0) → base (index 4)
  const rows = [
    { pts: "200,18 226,72 174,72", w: 52 },
    { pts: "170,78 230,78 244,132 156,132", w: 88 },
    { pts: "152,138 248,138 262,192 138,192", w: 124 },
    { pts: "134,198 266,198 280,252 120,252", w: 160 },
    { pts: "116,258 284,258 300,312 100,312", w: 200 },
  ];
  return (
    <Figure
      label="Maslow's hierarchy of needs — the five-level pyramid"
      caption="Maslow's pyramid (L23): physiological needs form the base; consumers do not climb until the current level is satisfied. The verified L23 machine animates the same climb."
    >
      <FigSvg vb="0 0 620 340" label="Pyramid with five levels from physiological base to self-actualization apex">
        <Arrow id="mp-a" color={MK.brass} />
        {rows.map((r, i) => {
          const on = highlight === 4 - i || highlight === i; // accept either direction
          const fill = on ? MK.gold : i % 2 === 0 ? MK.tealSoft : MK.paper;
          const stroke = on ? MK.brass : MK.teal;
          return (
            <g key={LEVELS[i].t}>
              <polygon points={r.pts} fill={fill} stroke={stroke} strokeWidth={1.8} />
              <T x={200} y={i === 0 ? 56 : 58 + i * 60} size={10.5} weight={700} fill={on ? "#33260b" : MK.ink}>{LEVELS[i].t}</T>
            </g>
          );
        })}
        {/* annotations */}
        {LEVELS.map((l, i) => (
          <g key={l.t}>
            <line x1={300} y1={48 + i * 60} x2={352} y2={48 + i * 60} stroke={MK.dim} strokeWidth={1} strokeDasharray="3 3" />
            <T x={362} y={44 + i * 60} size={11.5} weight={700} anchor="start">{l.t}</T>
            <T x={362} y={58 + i * 60} size={9.5} fill={MK.dim} anchor="start" italic>{l.d}</T>
          </g>
        ))}
        <T x={200} y={332} size={10} fill={MK.brass} weight={700}>climb order — no level is skipped</T>
      </FigSvg>
    </Figure>
  );
}

const BIASES = [
  { t: "Anchoring", hook: "\u201cSave 16%\u201d", d: "the first number seen becomes the reference point" },
  { t: "Bandwagon", hook: "15,000 learning", d: "everyone else is doing it — so it must be right" },
  { t: "Scarcity", hook: "only 6 rooms left", d: "limited supply speeds low-involvement purchases" },
  { t: "Endowment", hook: "your name on the cup", d: "ownership — even symbolic — raises perceived worth" },
];

/** The four-bias grid of L28. */
export function BiasGrid() {
  return (
    <Figure
      label="Four cognitive biases marketers build on — anchoring, bandwagon, scarcity, endowment"
      caption="The bias lab (L28): four subconscious shortcuts with the shelf's own live-demo hooks. L28's corpus ends by promising four more biases (Pratfall, Halo, Decoy, Framing) that no later lecture delivers — recorded, not fixed."
    >
      <FigSvg vb="0 0 620 236" label="Two-by-two grid of bias cards with hooks and one-line mechanics">
        <Arrow id="bg-a" color={MK.brass} />
        {BIASES.map((b, i) => {
          const x = i % 2 === 0 ? 18 : 322;
          const y = i < 2 ? 12 : 122;
          return (
            <g key={b.t}>
              <rect x={x} y={y} width={280} height={100} rx={12} fill={MK.paper} stroke={MK.teal} strokeWidth={1.6} />
              <rect x={x} y={y} width={54} height={26} rx={8} fill={MK.teal} />
              <T x={x + 27} y={y + 17} size={9.5} fill="#f0fdfa" weight={800}>{`0${i + 1}`}</T>
              <T x={x + 66} y={y + 20} size={13.5} weight={800} anchor="start">{b.t}</T>
              <T x={x + 140} y={y + 46} size={11.5} weight={700} anchor="middle" fill={MK.brass}>{b.hook}</T>
              <T x={x + 140} y={y + 70} size={9.5} fill={MK.dim} italic>{b.d}</T>
            </g>
          );
        })}
        <T x={310} y={228} size={10} fill={MK.brass} weight={700}>mental shortcuts — useful, but often irrational at the till</T>
      </FigSvg>
    </Figure>
  );
}
