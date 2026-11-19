"use client";

/* ============================================================
   MKTG registered figures — product & portfolio arc
   (L29–L35). Data comes verbatim from the L29–L35 corpus:
   the five product levels, the 11-item and 12-item width ×
   depth × length portfolios, the growth-plateau-decline
   curve, stretch maps, the strategy bridge, Epicurus'
   buckets, the ABC chain, the strategy triad and co-branding.
   ============================================================ */

import { Arrow, FigSvg, Figure, MK, T } from "./kit";

const LEVEL_ROWS = [
  { t: "Potential", d: "futuristic enhancements", ex: "sleep reports · biometrics" },
  { t: "Augmented", d: "exceeds expectations", ex: "seamless check-in · happy meals" },
  { t: "Expected", d: "standard baseline", ex: "cleanliness · same taste everywhere" },
  { t: "Basic product", d: "the tangible product", ex: "bed & bathroom · burger & drink" },
  { t: "Core benefit", d: "the fundamental problem solved", ex: "rest · hunger satisfaction · time" },
];

/** L29 — the five product levels as a tower. */
export function ProductLevelsTower() {
  return (
    <Figure
      label="The five levels of products — core benefit to potential product"
      caption="L29's customer value hierarchy: start with the foundation and build progressively — advanced features before core problems lead to failure."
    >
      <FigSvg vb="0 0 620 258" label="Tower of five levels with the core benefit at the base">
        <Arrow id="pl-a" color={MK.brass} />
        {LEVEL_ROWS.map((r, i) => {
          const w = 200 + (4 - i) * 66; // base widest
          const x = (620 - w) / 2;
          const y = 12 + i * 46;
          return (
            <g key={r.t}>
              <rect x={x} y={y} width={w} height={38} rx={9} fill={i === 4 ? MK.teal : i % 2 === 0 ? MK.tealSoft : MK.paper} stroke={MK.teal} strokeWidth={1.6} />
              <T x={x + 16} y={y + 24} size={11.5} weight={800} anchor="start" fill={i === 4 ? "#f0fdfa" : MK.ink}>{r.t}</T>
              <T x={620 - x - 14} y={y + 16} size={9} anchor="end" fill={i === 4 ? "#c9efe7" : MK.dim} italic>{r.d}</T>
              <T x={620 - x - 14} y={y + 29} size={8.8} anchor="end" fill={i === 4 ? "#c9efe7" : MK.teal}>{r.ex}</T>
            </g>
          );
        })}
        <T x={310} y={248} size={10} fill={MK.brass} weight={700}>perfect the coffee before selling the Wi-Fi — build progressively</T>
      </FigSvg>
    </Figure>
  );
}

/** Width × depth × length grid — data-driven, used by L30 (11 items) and L31 (12 items). */
export function WidthDepthGrid({
  title,
  lines,
  note,
}: {
  title: string;
  lines: { name: string; items: string[] }[];
  note: string;
}) {
  const width = lines.length;
  const length = lines.reduce((a, l) => a + l.items.length, 0);
  const maxCols = Math.max(...lines.map((l) => l.items.length));
  const cw = 560 / maxCols;
  return (
    <Figure
      label={`${title} — width ${width}, depth by line, length ${length}`}
      caption={`${title}: width ${width} lines · depth varies by line · length ${length} items. ${note}`}
    >
      <FigSvg vb={`0 0 640 ${48 + lines.length * 64 + 16}`} label={`Grid of ${width} product lines with their variants`}>
        <Arrow id={`wd-${width}-${length}`} color={MK.brass} />
        {/* header chips */}
        <rect x={14} y={8} width={86} height={26} rx={8} fill={MK.teal} />
        <T x={57} y={25} size={10.5} fill="#f0fdfa" weight={800}>{`width = ${width}`}</T>
        <rect x={108} y={8} width={86} height={26} rx={8} fill={MK.brass} />
        <T x={151} y={25} size={10.5} fill="#f7f1e3" weight={800}>{`length = ${length}`}</T>
        {lines.map((l, r) => {
          const y = 48 + r * 64;
          return (
            <g key={l.name}>
              <rect x={14} y={y} width={118} height={52} rx={9} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.5} />
              <T x={73} y={y + 22} size={10.5} weight={800} fill={MK.teal}>{l.name}</T>
              <T x={73} y={y + 38} size={9} fill={MK.dim}>{`depth ${l.items.length}`}</T>
              {l.items.map((it, c) => (
                <rect key={it} x={144 + c * cw + 2} y={y + 4} width={cw - 8} height={44} rx={7} fill={MK.paper} stroke={MK.line} strokeWidth={1.2} />
              ))}
              {l.items.map((it, c) => (
                <T key={it} x={144 + c * cw + (cw - 6) / 2 - 1} y={y + 29} size={8.6}>{it}</T>
              ))}
            </g>
          );
        })}
      </FigSvg>
    </Figure>
  );
}

/** L30's 11-item portfolio (personal care 6 · home decor 1 · clothing 4). */
export function WidthDepthGrid11() {
  return (
    <WidthDepthGrid
      title="L30's parent-company portfolio"
      note="L30 and L31 both teach width/depth/length on this same parent company with different totals — recorded in the open-questions register, never silently reconciled."
      lines={[
        { name: "Personal care", items: ["face wash", "shampoo", "cream 50", "cream 200", "day cream", "night cream"] },
        { name: "Home decor", items: ["1 item"] },
        { name: "Clothing", items: ["shirts", "jeans", "jackets", "1 more"] },
      ]}
    />
  );
}

/** L31's 12-item portfolio (personal care 6 · home decor 2 · men's clothing 4). */
export function WidthDepthGrid12() {
  return (
    <WidthDepthGrid
      title="L31's parent-company portfolio"
      note="The home-decor line carries 2 items here and 1 in L30 — the source's totals are 12 and 11. Both are reproduced as received."
      lines={[
        { name: "Personal care", items: ["face wash", "shampoo", "cream 50", "cream 200", "day cream", "night cream"] },
        { name: "Home decor", items: ["furniture", "home good"] },
        { name: "Men's clothing", items: ["round neck", "V-neck", "normal jeans", "tapered jeans"] },
      ]}
    />
  );
}

/** L31 — growth, plateau, decline and the pruning arrow. */
export function GrowthCurve() {
  return (
    <Figure
      label="Portfolio growth, plateau and decline with the pruning intervention"
      caption="L31's portfolio phases: expansion lifts revenue until inventory, storage and cannibalization costs bite — pruning (Apple retiring old iPhones) is what returns the curve to growth."
    >
      <FigSvg vb="0 0 640 240" label="Revenue curve rising, plateauing, then declining with a pruning arrow back to growth">
        <Arrow id="gc-a" color={MK.brass} />
        {/* axes */}
        <line x1={56} y1={206} x2={610} y2={206} stroke={MK.dim} strokeWidth={1.5} />
        <line x1={56} y1={206} x2={56} y2={22} stroke={MK.dim} strokeWidth={1.5} />
        <T x={28} y={116} size={10.5} fill={MK.dim} weight={700}>net revenue ↑</T>
        <T x={330} y={226} size={10.5} fill={MK.dim} weight={700}>products added →</T>
        {/* curve: growth → plateau → decline */}
        <path d="M 60 200 C 150 190 220 120 320 92 C 380 76 430 76 480 92 C 520 104 560 140 600 178" fill="none" stroke={MK.teal} strokeWidth={3} />
        {/* phase bands */}
        <T x={150} y={60} size={11} weight={800} fill={MK.teal}>GROWTH</T>
        <T x={150} y={74} size={9} fill={MK.dim} italic>wider audiences, new variants</T>
        <T x={400} y={44} size={11} weight={800} fill={MK.brass}>PLATEAU</T>
        <T x={400} y={58} size={9} fill={MK.dim} italic>storage costs · blocked capital</T>
        <T x={560} y={64} size={11} weight={800} fill={MK.wine}>DECLINE</T>
        <T x={556} y={78} size={9} fill={MK.dim} italic>cannibalization · obsolete stock</T>
        {/* pruning arrow */}
        <path d="M 520 120 C 470 70 380 52 300 70" fill="none" stroke={MK.brass} strokeWidth={2} strokeDasharray="6 5" markerEnd="url(#gc-a)" />
        <T x={352} y={40} size={10.5} fill={MK.brass} weight={800}>prune here</T>
        <T x={352} y={54} size={9} fill={MK.dim} italic>discontinue underperformers, free capital</T>
      </FigSvg>
    </Figure>
  );
}

/** L32 — upward, downward and two-way market stretch. */
export function StretchMap() {
  return (
    <Figure
      label="Market stretching — upward, downward and two-way, with corpus price points"
      caption="L32's stretch map with the lecture's own price points: Absolute ₹1,600 → Elyx ₹3,300 → Bling ₹9,000 upward; Jeep ₹80 lakhs → Compass ₹16.5 lakhs downward; Accor stretches both ways at once."
    >
      <FigSvg vb="0 0 640 250" label="Vertical price ladder with three stretch modes and brand examples">
        <Arrow id="sm-a" color={MK.brass} />
        {/* tiers */}
        <rect x={170} y={16} width={300} height={54} rx={10} fill={MK.paper} stroke={MK.gold} strokeWidth={2} />
        <T x={320} y={38} size={12} weight={800} fill={MK.brass}>UPWARD STRETCH — premium tiers</T>
        <T x={320} y={56} size={9.5} fill={MK.dim} italic>VW → Porsche · Bentley · Samsung Fold · Absolute Elyx ₹3,300 → Bling ₹9,000 · Tata Harrier ₹30L</T>
        <rect x={170} y={98} width={300} height={44} rx={10} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={2} />
        <T x={320} y={118} size={12} weight={800} fill={MK.teal}>BASELINE — the current line</T>
        <T x={320} y={134} size={9.5} fill={MK.dim} italic>Absolute Vodka ₹1,600 · Tata ₹4,000–7,000 range</T>
        <rect x={170} y={170} width={300} height={54} rx={10} fill={MK.paper} stroke={MK.teal} strokeWidth={2} />
        <T x={320} y={192} size={12} weight={800} fill={MK.teal}>DOWNWARD STRETCH — volume tiers</T>
        <T x={320} y={210} size={9.5} fill={MK.dim} italic>Jeep ₹80L → Compass ₹16.5L · Armani Exchange ₹8,000–10,000 · ITC → Fortune · Storii</T>
        {/* arrows */}
        <line x1={340} y1={96} x2={340} y2={74} stroke={MK.gold} strokeWidth={2.2} markerEnd="url(#sm-a)" />
        <line x1={340} y1={168} x2={340} y2={146} stroke={MK.teal} strokeWidth={2.2} markerEnd="url(#sm-a)" />
        {/* two-way badge */}
        <rect x={16} y={98} width={132} height={44} rx={10} fill="none" stroke={MK.brass} strokeWidth={1.6} strokeDasharray="5 4" />
        <T x={82} y={116} size={10.5} weight={800} fill={MK.brass}>TWO-WAY</T>
        <T x={82} y={131} size={9} fill={MK.dim} italic>Accor: IBIS ↔ Sofitel</T>
        {/* success condition */}
        <rect x={500} y={98} width={126} height={44} rx={10} fill="#fbf3f5" stroke={MK.wine} strokeWidth={1.4} />
        <T x={563} y={114} size={9.5} weight={800} fill={MK.wine}>Tata Aria ✗</T>
        <T x={563} y={130} size={8.6} fill={MK.dim} italic>value boundary rejected</T>
        <T x={320} y={240} size={10} fill={MK.brass} weight={700}>a stretch works only when consumers accept the new price-quality tier</T>
      </FigSvg>
    </Figure>
  );
}

/** L33 — business, brand and marketing strategy with product strategy bridging. */
export function StrategyBridge() {
  return (
    <Figure
      label="Business, brand and marketing strategy — product strategy sits at the cusp"
      caption="L33's strategy stack: business asks 'will we make money?', brand asks 'why buy me?', marketing asks 'how do we sell?' — product strategy bridges the last two."
    >
      <FigSvg vb="0 0 640 210" label="Three strategy columns with product strategy arching between brand and marketing">
        <Arrow id="stb-a" color={MK.brass} />
        {[
          { x: 30, t: "BUSINESS", q: "\u201cWill we make money?\u201d", d: "growth · profitability · risk — CEO/CFO level", c: MK.dim },
          { x: 235, t: "BRAND", q: "\u201cWhy buy me?\u201d", d: "perception · feelings · associations", c: MK.teal },
          { x: 440, t: "MARKETING", q: "\u201cHow do we sell?\u201d", d: "awareness · promotion · distribution", c: MK.brass },
        ].map((s) => (
          <g key={s.t}>
            <rect x={s.x} y={30} width={170} height={104} rx={12} fill={MK.paper} stroke={s.c} strokeWidth={2} />
            <T x={s.x + 85} y={58} size={12.5} weight={800} fill={s.c}>{s.t}</T>
            <T x={s.x + 85} y={82} size={10.5} weight={700}>{s.q}</T>
            <T x={s.x + 85} y={104} size={8.8} fill={MK.dim} italic>{s.d}</T>
          </g>
        ))}
        {/* product strategy bridge */}
        <path d="M 320 176 C 280 150 300 142 320 140" fill="none" stroke={MK.brass} strokeWidth={0} />
        <rect x={222} y={168} width={196} height={34} rx={10} fill={MK.teal} />
        <T x={320} y={190} size={11.5} weight={800} fill="#f0fdfa">PRODUCT STRATEGY — the cusp</T>
        <path d="M 268 166 C 250 150 250 142 258 136" fill="none" stroke={MK.teal} strokeWidth={2} markerEnd="url(#stb-a)" />
        <path d="M 372 166 C 390 150 390 142 382 136" fill="none" stroke={MK.teal} strokeWidth={2} markerEnd="url(#stb-a)" />
        <T x={560} y={188} size={9.5} fill={MK.dim} italic>{"Detal: brand = \u201cgerm-free home\u201d"}</T>
      </FigSvg>
    </Figure>
  );
}

/** L34 — Epicurus' two buckets. */
export function BucketSplit() {
  return (
    <Figure
      label="Epicurus' two relationship buckets — utilitarian and love"
      caption="L34's philosophical foundation: transactional relationships fill the utilitarian bucket; the parent-child bond fills the love bucket. Humanized brands move into the love bucket — where switching is hard."
    >
      <FigSvg vb="0 0 640 210" label="Two buckets, utilitarian and love, with an arrow moving products across">
        <Arrow id="bs-a" color={MK.brass} />
        {/* utilitarian bucket */}
        <path d="M 80 70 L 96 170 L 264 170 L 280 70 Z" fill={MK.paper} stroke={MK.dim} strokeWidth={2} />
        <T x={180} y={60} size={12.5} weight={800} fill={MK.dim}>UTILITARIAN BUCKET</T>
        <T x={180} y={100} size={10} fill={MK.dim}>give-and-take · transactional</T>
        <T x={180} y={118} size={9} fill={MK.dim} italic>husband–wife chores · student–teacher ·</T>
        <T x={180} y={132} size={9} fill={MK.dim} italic>customer–shopkeeper</T>
        <T x={180} y={156} size={9.5} weight={700} fill={MK.wine}>switching is easy here</T>
        {/* love bucket */}
        <path d="M 360 70 L 376 170 L 544 170 L 560 70 Z" fill={MK.tealSoft} stroke={MK.teal} strokeWidth={2.4} />
        <T x={460} y={60} size={12.5} weight={800} fill={MK.teal}>LOVE BUCKET</T>
        <T x={460} y={100} size={10} fill={MK.teal}>compassion without expected return</T>
        <T x={460} y={118} size={9} fill={MK.dim} italic>the parent–child bond — the primary example</T>
        <T x={460} y={156} size={9.5} weight={700} fill={MK.teal}>loyalty lives here</T>
        {/* the move */}
        <path d="M 292 118 C 320 96 340 96 368 118" fill="none" stroke={MK.brass} strokeWidth={2.4} markerEnd="url(#bs-a)" />
        <T x={330} y={88} size={10.5} weight={800} fill={MK.brass}>humanization moves the product</T>
        <T x={330} y={198} size={10} fill={MK.dim}>attributes → benefits → human characteristics</T>
      </FigSvg>
    </Figure>
  );
}

/** L34 — the ABC brand-humanisation chain (CEAT trace). */
export function AbcChain() {
  return (
    <Figure
      label="The ABC framework — attributes to benefits to human characteristics"
      caption="L34's narrative formula on CEAT's own trace: groove technology → grip, traction, stability, control → a father protecting his daughter in the rain. Missing any link weakens the narrative."
    >
      <FigSvg vb="0 0 640 190" label="Three linked blocks A, B, C with the CEAT trace underneath">
        <Arrow id="ab-a" />
        {[
          { x: 24, L: "A", t: "ATTRIBUTES", d: "what the product has", ex: "groove technology" },
          { x: 236, L: "B", t: "BENEFITS", d: "what it does for me", ex: "grip → traction → stability → control" },
          { x: 448, L: "C", t: "HUMAN CHARACTERISTICS", d: "what it means to me", ex: "a father protects his daughter" },
        ].map((s, i) => (
          <g key={s.L}>
            <rect x={s.x} y={26} width={172} height={92} rx={12} fill={i === 2 ? MK.tealSoft : MK.paper} stroke={MK.teal} strokeWidth={1.8} />
            <circle cx={s.x + 26} cy={52} r={15} fill={MK.teal} />
            <T x={s.x + 26} y={57} size={12} fill="#f0fdfa" weight={800}>{s.L}</T>
            <T x={s.x + 50} y={48} size={9.8} weight={800} anchor="start">{s.t}</T>
            <T x={s.x + 50} y={63} size={8.6} fill={MK.dim} anchor="start" italic>{s.d}</T>
            <T x={s.x + 86} y={92} size={9.5} weight={700} fill={MK.teal}>{s.ex}</T>
          </g>
        ))}
        <line x1={198} y1={72} x2={234} y2={72} stroke={MK.teal} strokeWidth={2.2} markerEnd="url(#ab-a)" />
        <line x1={410} y1={72} x2={446} y2={72} stroke={MK.teal} strokeWidth={2.2} markerEnd="url(#ab-a)" />
        <T x={320} y={152} size={10} fill={MK.brass} weight={700}>benefit-only narratives lack credibility — the attribute is the proof</T>
        <T x={320} y={172} size={9.5} fill={MK.dim} italic>Asian Paints: scuff-free → less worry → newlyweds' freedom · Prestige: steam valve → more family time</T>
      </FigSvg>
    </Figure>
  );
}

/** L35 — the product strategy triad. */
export function TriadTriangle() {
  return (
    <Figure
      label="The product strategy triad — product, value, connect"
      caption="L35's triad: a differentiated product, real value, and a consumer connect. Strategies fail when a corner stays weak — Colgate beef lasagna had product but no connect."
    >
      <FigSvg vb="0 0 620 224" label="Triangle with product, value and connect corners and failure notes">
        <Arrow id="tt-a" color={MK.brass} />
        <polygon points="310,26 176,190 444,190" fill="none" stroke={MK.teal} strokeWidth={2.2} />
        <circle cx={310} cy={26} r={30} fill={MK.teal} />
        <T x={310} y={31} size={11.5} fill="#f0fdfa" weight={800}>PRODUCT</T>
        <circle cx={176} cy={190} r={30} fill={MK.paper} stroke={MK.teal} strokeWidth={2} />
        <T x={176} y={195} size={11} fill={MK.teal} weight={800}>VALUE</T>
        <circle cx={444} cy={190} r={30} fill={MK.paper} stroke={MK.brass} strokeWidth={2} />
        <T x={444} y={195} size={11} fill={MK.brass} weight={800}>CONNECT</T>
        <T x={318} y={128} size={10.5} weight={800} fill={MK.teal}>product strategy</T>
        <T x={318} y={143} size={9} fill={MK.dim} italic>differentiator + vision</T>
        {/* corner traces */}
        <T x={96} y={216} size={9} fill={MK.dim} anchor="start" italic>Dove: moisturizing bar · Tide: stain removal</T>
        <T x={470} y={216} size={9} fill={MK.dim} anchor="end" italic>Pampers: overnight dryness · Kit Kat: the break</T>
      </FigSvg>
    </Figure>
  );
}

/** L35 — composite vs ingredient co-branding. */
export function CoBrandTypes() {
  return (
    <Figure
      label="Co-branding types — composite and ingredient, against co-marketing"
      caption="L35's two co-branding types: composite partners fuse into a third offering (Axis Bank + Air Vistara's card); ingredient brands live inside the manufacturing (Intel in laptops, Goodyear soles in Skechers). Celebrity pairings are co-marketing, not co-branding."
    >
      <FigSvg vb="0 0 640 226" label="Two panels of co-branding types with partner equations and a co-marketing footnote">
        <Arrow id="cb-a" />
        {/* composite */}
        <rect x={18} y={22} width={292} height={132} rx={12} fill={MK.paper} stroke={MK.teal} strokeWidth={1.8} />
        <T x={164} y={48} size={12} weight={800} fill={MK.teal}>1 · COMPOSITE</T>
        <T x={164} y={64} size={9} fill={MK.dim} italic>two equal brands → a third offering</T>
        {[
          "Axis Bank + Air Vistara → co-branded card",
          "MasterCard + Apple Pay → payments",
          "Manish Malhotra + Starbucks → cups",
          "Clarks + Zara → footwear",
        ].map((s, i) => (
          <g key={s}>
            <circle cx={44} cy={88 + i * 18} r={3.4} fill={MK.teal} />
            <T x={56} y={92 + i * 18} size={9.3} anchor="start">{s}</T>
          </g>
        ))}
        {/* ingredient */}
        <rect x={330} y={22} width={292} height={132} rx={12} fill={MK.paper} stroke={MK.brass} strokeWidth={1.8} />
        <T x={476} y={48} size={12} weight={800} fill={MK.brass}>2 · INGREDIENT</T>
        <T x={476} y={64} size={9} fill={MK.dim} italic>one brand inside another's manufacturing</T>
        {[
          "Intel / AMD processors in laptops",
          "Dolby Digital in PVR cinemas",
          "Goodyear soles in Skechers",
          "Sony Bravia with Android TV",
        ].map((s, i) => (
          <g key={s}>
            <circle cx={356} cy={88 + i * 18} r={3.4} fill={MK.brass} />
            <T x={368} y={92 + i * 18} size={9.3} anchor="start">{s}</T>
          </g>
        ))}
        {/* distinction strip */}
        <rect x={18} y={168} width={604} height={40} rx={10} fill={MK.tealSoft} stroke={MK.teal} strokeWidth={1.4} />
        <T x={320} y={184} size={9.8} weight={800} fill={MK.teal}>not co-branding: Levi's + Deepika Padukone — an endorser is co-MARKETING</T>
        <T x={320} y={199} size={9} fill={MK.dim} italic>risks to manage: reciprocal damage · brand dilution · dependency</T>
      </FigSvg>
    </Figure>
  );
}
