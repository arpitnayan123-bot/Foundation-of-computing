"use client";

/* ============================================================
   MKTG registered figures — marketing communications (L38, L40).
   Corpus: attention as a filter (11 million bits vs 40), the
   connection chain to automatic choice, the three Cs with the
   Comfort trace, dual-process theory (System 1 vs System 2),
   and the exam grading split.
   ============================================================ */

import { Arrow, FigSvg, Figure, MK, T } from "./kit";

/** L38/L40 — the three Cs congruency triangle (Comfort ad trace). */
export function ThreeCsTriangle({ trace = true }: { trace?: boolean }) {
  return (
    <Figure
      label="The three Cs of marketing communication — content, context, concept — aligned into congruency"
      caption={
        trace
          ? "The three Cs (L38, re-taught in L40) on the Comfort trace: rigid-to-soft concept, dipping content, rough-clothes context — congruency is what earns engagement."
          : "The three Cs (L40): context sets the circumstance, concept is the storyline, content is the execution — all three must align for attention."
      }
    >
      <FigSvg vb="0 0 620 250" label="Triangle of context, concept and content with the Comfort ad trace at centre">
        <Arrow id="tc-a" color={MK.brass} />
        <polygon points="310,30 170,206 450,206" fill="none" stroke={MK.teal} strokeWidth={2.4} />
        <circle cx={310} cy={30} r={34} fill={MK.paper} stroke={MK.teal} strokeWidth={2.2} />
        <T x={310} y={26} size={11} weight={800} fill={MK.teal}>CONTEXT</T>
        <T x={310} y={41} size={7.8} fill={MK.dim} italic>the circumstance</T>
        <circle cx={170} cy={206} r={34} fill={MK.paper} stroke={MK.brass} strokeWidth={2.2} />
        <T x={170} y={202} size={11} weight={800} fill={MK.brass}>CONTENT</T>
        <T x={170} y={217} size={7.8} fill={MK.dim} italic>the execution</T>
        <circle cx={450} cy={206} r={34} fill={MK.paper} stroke={MK.dim} strokeWidth={2.2} />
        <T x={450} y={202} size={11} weight={800} fill={MK.dim}>CONCEPT</T>
        <T x={450} y={217} size={7.8} fill={MK.dim} italic>the storyline</T>
        {trace ? (
          <>
            <circle cx={310} cy={140} r={62} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.4} strokeDasharray="4 4" />
            <T x={310} y={128} size={10} weight={800} fill={MK.teal}>CONGRUENCY</T>
            <T x={310} y={144} size={8.6} fill={MK.dim} italic>Comfort: rough clothes irritate</T>
            <T x={310} y={157} size={8.6} fill={MK.dim} italic>skin → rigidity dips into softness</T>
          </>
        ) : null}
        <T x={310} y={242} size={10} fill={MK.brass} weight={700}>incongruent ads grab attention but never earn recall</T>
      </FigSvg>
    </Figure>
  );
}

/** L38 — the attention funnel and the connection chain. */
export function AttentionFunnel() {
  return (
    <Figure
      label="Attention as a filter — from 11 million bits to automatic brand choice"
      caption="L38's connection chain: 11,000,000 bits per second of exposure against a 40-bits-per-second brain — attention filters, mental availability stores, recall fires, choice becomes automatic."
    >
      <FigSvg vb="0 0 640 236" label="Funnel narrowing from exposure to processed bits to recall to choice">
        <Arrow id="af-a" />
        {/* exposure bar */}
        <rect x={24} y={22} width={592} height={40} rx={10} fill={MK.brassSoft} stroke={MK.brass} strokeWidth={1.6} />
        <T x={320} y={40} size={11.5} weight={800} fill={MK.brass}>EXPOSED: ~11,000,000 bits per second</T>
        <T x={320} y={55} size={8.6} fill={MK.dim} italic>4,000–10,000 ads a day — notifications, billboards, feeds</T>
        {/* filter */}
        <polygon points="150,86 490,86 400,136 240,136" fill={MK.teal} opacity={0.92} />
        <T x={320} y={108} size={11} weight={800} fill="#f0fdfa">ATTENTION — the filter</T>
        <T x={320} y={124} size={8.6} fill="#c9efe7" italic>the brain processes only ~40 bits per second</T>
        {/* mental availability */}
        <rect x={150} y={152} width={340} height={34} rx={9} fill={MK.paper} stroke={MK.teal} strokeWidth={1.6} />
        <T x={320} y={174} size={10.5} weight={800}>MENTAL AVAILABILITY — the occupied shelf in the brain</T>
        {/* chain */}
        <line x1={240} y1={196} x2={230} y2={206} stroke={MK.teal} strokeWidth={0} />
        <rect x={64} y={196} width={240} height={30} rx={9} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.4} />
        <T x={184} y={216} size={10} weight={800} fill={MK.teal}>RECALL — the brand comes to mind</T>
        <line x1={306} y1={211} x2={334} y2={211} stroke={MK.teal} strokeWidth={2} markerEnd="url(#af-a)" />
        <rect x={336} y={196} width={240} height={30} rx={9} fill={MK.gold} opacity={0.85} />
        <T x={456} y={216} size={10} weight={800} fill="#33260b">AUTOMATIC CHOICE — the reflex purchase</T>
      </FigSvg>
    </Figure>
  );
}

/** L38 — System 1 versus System 2. */
export function System1System2() {
  return (
    <Figure
      label="Dual process theory — System 1 fast and intuitive versus System 2 slow and analytical"
      caption="L38's misalignment problem: marketers brief in System 2 (technical, analytical) while consumers live in System 1 (fast, intuitive) — brain-friendly content leads with System 1 and saves System 2 for later."
    >
      <FigSvg vb="0 0 640 240" label="Two panels for System 1 and System 2 with a feel-act-rationalize strip below">
        <Arrow id="s1-a" color={MK.brass} />
        {/* system 1 */}
        <rect x={20} y={20} width={292} height={128} rx={12} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={2.2} />
        <T x={166} y={48} size={13.5} weight={800} fill={MK.teal}>SYSTEM 1 — fast</T>
        {["automatic and intuitive", "low effort", "operates without deliberation", "dominates cluttered attention"].map((s, i) => (
          <g key={s}>
            <circle cx={48} cy={72 + i * 20} r={3.4} fill={MK.teal} />
            <T x={60} y={76 + i * 20} size={9.6} anchor="start">{s}</T>
          </g>
        ))}
        {/* system 2 */}
        <rect x={328} y={20} width={292} height={128} rx={12} fill={MK.paper} stroke={MK.dim} strokeWidth={2.2} />
        <T x={474} y={48} size={13.5} weight={800} fill={MK.dim}>SYSTEM 2 — slow</T>
        {["deliberate and controlled", "high effort, conscious thinking", "time-intensive", "rational analysis and calculation"].map((s, i) => (
          <g key={s}>
            <circle cx={356} cy={72 + i * 20} r={3.4} fill={MK.dim} />
            <T x={368} y={76 + i * 20} size={9.6} anchor="start">{s}</T>
          </g>
        ))}
        {/* misalignment */}
        <line x1={312} y1={84} x2={328} y2={84} stroke={MK.wine} strokeWidth={2} strokeDasharray="4 4" />
        {/* the modern sequence */}
        <rect x={20} y={164} width={600} height={38} rx={10} fill={MK.paper} stroke={MK.brass} strokeWidth={1.6} />
        <T x={320} y={183} size={10.5} weight={800} fill={MK.brass}>the modern sequence: FEEL first (System 1) → ACT → RATIONALIZE later (System 2)</T>
        <T x={320} y={196} size={8.6} fill={MK.dim} italic>Stroop lesson: when the two systems conflict, quick decisions collapse</T>
        <T x={320} y={226} size={10} fill={MK.teal} weight={800}>brain-friendly content: System 1 first, System 2 on standby</T>
      </FigSvg>
    </Figure>
  );
}

/** L40 — the grading split. */
export function ExamSplit() {
  return (
    <Figure
      label="Course grading split — 40 percent continuous assessment, 60 percent final examination"
      caption="L40's grading split: continuous assessment (quizzes + the one-pager) carries 40%; the final examination carries 60 marks, entirely subjective, all modules included."
    >
      <FigSvg vb="0 0 620 200" label="Donut chart split 40/60 with legends">
        <Arrow id="es-a" color={MK.brass} />
        {/* donut: 40% continuous, 60% final */}
        <g transform="translate(150,100)">
          <circle r={62} fill="none" stroke={MK.teal} strokeWidth={30} strokeDasharray="155.5 233.3" transform="rotate(-90)" />
          <circle r={62} fill="none" stroke={MK.gold} strokeWidth={30} strokeDasharray="233.3 389.6" strokeDashoffset="-155.5" transform="rotate(-90)" />
          <T x={0} y={-2} size={15} weight={800} fill={MK.teal}>40/60</T>
          <T x={0} y={14} size={8.6} fill={MK.dim} italic>the split</T>
        </g>
        {/* legends */}
        <rect x={280} y={30} width={310} height={58} rx={10} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.5} />
        <T x={300} y={52} size={10.5} weight={800} fill={MK.teal} anchor="start">CONTINUOUS ASSESSMENT — 40%</T>
        <T x={300} y={68} size={8.8} fill={MK.dim} anchor="start" italic>quizzes (multiple) · one-pager assignment</T>
        <rect x={280} y={102} width={310} height={58} rx={10} fill={MK.brassSoft} stroke={MK.brass} strokeWidth={1.5} />
        <T x={300} y={124} size={10.5} weight={800} fill={MK.brass} anchor="start">FINAL EXAMINATION — 60%</T>
        <T x={300} y={140} size={8.8} fill={MK.dim} anchor="start" italic>60 marks · entirely subjective · all modules</T>
      </FigSvg>
    </Figure>
  );
}
