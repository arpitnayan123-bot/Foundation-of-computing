"use client";

/* ============================================================
   MKTG — the official 40-lecture sequence (shelf 06).

   The canonical sequence below is the official course order:
   Lectures 1–40 in six teaching arcs, from the verified
   compendium (34,414 words on its cover; 31,960 measured body
   words after furniture stripping). Registry ids of lectures
   1–28 are preserved exactly; L29–L40 are authored from the
   corpus. L22 and L39 are RESERVED — deliberately removed from
   the course, they keep their numbers and positions and render
   a removal card, never content.

   Part map (the six teaching arcs):
     I  L01–L10  Foundations, Value & Exchange
     II L11–L17  Expectation Gap, Loyalty & STP
     III L18–L22 Positioning
     IV L23–L28  The Consumer Mind
     V  L29–L34  Psychology, Brand & Behaviour
     VI L35–L40  Marketing in Practice
   ============================================================ */

import type { MktgExamGroup } from "./questions";

export interface MktgLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface MktgLecture {
  id: string; // "l1".."l40"
  n: number | null; // lecture number
  code: string; // badge text: "L01".."L40"
  title: string;
  blurb: string;
  chapters: MktgLectureChapter[];
  reserved?: boolean; // removed from the course — numbering preserved
}

export const MKTG_LECTURES: MktgLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L01",
    title: "Introduction to Marketing: Understanding Customers, Markets, Brands and Value",
    blurb: "Marketing beyond selling: understanding needs, reading purchase decisions, brand preference — and the everyday places it already lives.",
    chapters: [
      { id: "why-mktg", label: "Why marketing?", desc: "Needs, decisions, brands, value — and marketing in everyday life" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L02",
    title: "Introduction to Marketing: Understanding Customer Value and Business Success",
    blurb: "Anticipation — BlackBerry, Hertz, Blockbuster; top line vs bottom line with the cold-coffee P&L; selling the pen vs marketing it.",
    chapters: [
      { id: "anticipation", label: "Anticipation", desc: "BlackBerry · Hertz · Blockbuster — the decline pattern" },
      { id: "topline", label: "Top line & bottom line", desc: "Revenue → profit — the cold coffee maths" },
      { id: "mktg-vs-selling", label: "Marketing vs selling", desc: "The pen, the definition, marketing in the wild" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L03",
    title: "Understanding Marketing: Definitions, Concepts, and Application",
    blurb: "The AMA definition, outside-in vs inside-out, the industry-market system with four flows, ten marketable entities, the Need-Want-Demand triad and eight demand states.",
    chapters: [
      { id: "definitions", label: "Definitions", desc: "AMA · outside-in vs inside-out · success stories" },
      { id: "mktg-system", label: "The marketing system", desc: "Industry ↔ market — the four key flows" },
      { id: "marketable", label: "What can be marketed", desc: "Goods → ideas: the ten entities" },
      { id: "need-want-demand", label: "Need · Want · Demand", desc: "The triad — vada pao to Starbucks" },
      { id: "demand-states", label: "Needs & demand states", desc: "Five need types · eight demand states" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L04",
    title: "Introduction to Marketing and Understanding Consumer Behavior",
    blurb: "The consumer mind as a closed system, the linear interest-openness relationship, interrupts that break the loop — and the business value of marketing.",
    chapters: [
      { id: "closed-system", label: "The closed system", desc: "Interest × openness — breaking the loop" },
      { id: "biz-value", label: "The business value", desc: "Top line, bottom line & the marketer's job" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L05",
    title: "Understanding Customer Perceived Value",
    blurb: "₹20 chai, ₹250 café chai, ₹500 airport chai — value = benefits − costs, the four benefits, the abstract costs, and how organisations move the equation.",
    chapters: [
      { id: "chai-value", label: "The chai example", desc: "Same tea, three perceived values" },
      { id: "cpv-formula", label: "The value formula", desc: "Benefits − costs, balanced" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L06",
    title: "Marketing Environment and Exchange Systems",
    blurb: "Micro and macro environments, the Zomato exchange beyond money, exchange vs transaction vs relationship — and the four-party journey map.",
    chapters: [
      { id: "environment", label: "The environment", desc: "Task (micro) & broad (macro) forces" },
      { id: "exchange-system", label: "Exchange systems", desc: "Zomato's real exchange — far beyond money" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L07",
    title: "Fundamental Concepts in Customer Perceived Value and Marketing Exchange",
    blurb: "Value ≠ price, features ≠ benefits, benefits become value only against sacrifices — and the extended psychological benefit that sells a ₹100 pen for ₹5,000.",
    chapters: [
      { id: "value-price-features", label: "Value · price · features", desc: "Three distinctions that settle most confusions" },
      { id: "luxury-lever", label: "The luxury lever", desc: "Extended psychological benefit — the uncapped one" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L08",
    title: "Expectation Gap, Satisfaction, and Loyalty in Marketing",
    blurb: "Existing state vs desired state, the value purchase chain, the asymmetric satisfaction formula — and why AirPods beat Bose.",
    chapters: [
      { id: "es-ds", label: "Existing & desired state", desc: "Itch Guard, Kohler, Clean & Clear — manufacturing the gap" },
      { id: "purchase-chain", label: "The purchase chain", desc: "Value → intention → purchase → satisfaction → loyalty" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L09",
    title: "Understanding Customer Satisfaction and Loyalty: Key Concepts and Financial Impact",
    blurb: "Same 34-minute delivery, 2★ and 5★ — context sets the anchor. Retention economics: 5% more retention, 20–90% more profit.",
    chapters: [
      { id: "context-matters", label: "Context matters", desc: "One delivery, two ratings — the anchor decides" },
      { id: "loyalty-econ", label: "Loyalty economics", desc: "The numbers that make retention the strategy" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Understanding Existing State, Desired State, and Consumer Decision-Making in Marketing",
    blurb: "Samsung vs Sony, Clean & Clear's dual pull, Kohler's raise — plus impulse buying, attribute-based choices and measuring intention.",
    chapters: [
      { id: "campaigns-esds", label: "Campaigns in ES/DS", desc: "Samsung · Sony · Clean & Clear · Kohler" },
      { id: "beyond-purchase", label: "Beyond purchase", desc: "Impulse, attributes, proxies & ethics" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Segmentation, Targeting, and Positioning (STP): Fundamentals and Market Strategy",
    blurb: "Market heterogeneity, meaningful segments, and the geographic, demographic and psychographic bases — Zudio, Bajaj Pulsar, L'Oréal, Nike.",
    chapters: [
      { id: "heterogeneity", label: "Heterogeneity", desc: "100 Netflix users, six very different audiences" },
      { id: "bases", label: "Bases of segmentation", desc: "Geographic · demographic · psychographic" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Behavioral and Benefit-Based Market Segmentation",
    blurb: "Surf Excel's four behavioral segments (25% → 75%), Colgate's five benefit variants, and the fitness-app segmentation exercise.",
    chapters: [
      { id: "behavioral-benefit", label: "Behavior & benefits", desc: "Surf Excel · Colgate · the fitness app" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Segmentation and Targeting in Real-World Marketing: The Tupo Case Study",
    blurb: "The 3–15 gap nobody served: dual targeting of children and parents, dadi-nani trust, ₹450 vs ₹150 — niche creation end to end.",
    chapters: [
      { id: "tupo-case", label: "Tupo", desc: "Segmentation & targeting in the real world" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Targeting and Positioning in Marketing Strategy",
    blurb: "The SAFE framework, two dangerous assumptions, Netflix/Spotify targeting — and positioning's three questions through Sensodyne.",
    chapters: [
      { id: "safe-targeting", label: "SAFE targeting", desc: "Size · accessibility · fitment · economics" },
      { id: "pos-3q", label: "Positioning's 3 questions", desc: "Who · what category · why choose us" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Understanding Positioning Strategy in Marketing",
    blurb: "Accor's multi-segment map, natural vs extended frames of reference (the Gypsy King lesson), and PODs vs POPs from cabs to phenyl.",
    chapters: [
      { id: "accor-map", label: "The Accor map", desc: "Perceptual mapping across price tiers" },
      { id: "frame-podspops", label: "Frames · POPs · PODs", desc: "Natural vs extended reference points" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Segmentation, Targeting, Positioning, and Micro-Marketing in Modern Marketing",
    blurb: "Mass, segment, niche and market-of-one — NikeiD, Share a Coke, Raymond — plus the POD→POP evolution from three blades to five.",
    chapters: [
      { id: "four-levels", label: "The four levels", desc: "Mass → segment → niche → market of one" },
      { id: "pop-pod-evolution", label: "POD → POP evolution", desc: "Gillette's razor ladder & commoditisation" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Points of Differentiation (POD) and Points of Parity (POP) in Marketing Strategy",
    blurb: "Oral-B's fading bristles, House of Quirk's covers, Dettol vs Savlon's sting — and the three-circles model that locates every POD.",
    chapters: [
      { id: "three-circles", label: "The three circles", desc: "Desires × competitors × you — where POP and POD live" },
      { id: "pod-pop-cases", label: "Case files", desc: "Oral-B · House of Quirk · Dettol vs Savlon" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Understanding Consumer Behavior: Perception, Opinion Formation, and Purchase Decisions",
    blurb: "Minds are never empty — mango ads, TRIA, Forest Essentials; the classical → cognitive → nudge evolution from Kahneman to Thaler.",
    chapters: [
      { id: "why-buy", label: "Why people buy", desc: "Desired states, stimulus & imagination" },
      { id: "eras-nudges", label: "Eras & nudges", desc: "Rational → irrational → nudged consumers" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Overview of Consumer Buying Decision Process",
    blurb: "The five stages, heuristics at work, the messy middle where exploration and evaluation loop — and cart abandonment as non-linear proof.",
    chapters: [
      { id: "five-stages", label: "The five stages", desc: "Recognition → search → evaluation → purchase → post-purchase" },
      { id: "messy-middle", label: "The messy middle", desc: "The infinity loop of real decisions" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Consumer Behavior: Understanding Purchase Decisions and Consumer Journey",
    blurb: "Schiffman & Jain's definitions, the stimulus-choice frame, stage skipping/reversal/loops — and the autopsy of a real purchase.",
    chapters: [
      { id: "journey-variations", label: "Journey variations", desc: "Skipping, reversing, looping" },
      { id: "autopsy-purchase", label: "Autopsy of a purchase", desc: "The Moroccan-oil shampoo, dissected" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Overview of Consumer Decision-Making Journey and Integrated Behavior Framework",
    blurb: "Involvement levels, touchpoints beyond the point of sale, and the need→tension→drive→behavior→consumption→goal-fulfillment cycle.",
    chapters: [
      { id: "touchpoints-framework", label: "Touchpoints & framework", desc: "The full behavior cycle, end to end" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "The Decision Journey — Consolidated",
    blurb: "Deliberately removed from the official course sequence — the page keeps its number and position and renders a removal card, never content.",
    reserved: true,
    chapters: [
      { id: "reserved-22", label: "Numbering preserved", desc: "Removed from the course · page intentionally left blank" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Understanding Theories of Motivation in Consumer Behavior",
    blurb: "Freud's iceberg (90% below the surface), Maslow's five-level pyramid, Herzberg's free-chai rule — then match the six quotes to their theory.",
    chapters: [
      { id: "motivation-theories", label: "Three theories", desc: "Freud · Maslow · Herzberg" },
      { id: "theory-match", label: "Theory match", desc: "Six confessions, three theories" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Understanding Perception in Consumer Behavior",
    blurb: "Selective, subjective, constructive, abstract — brand-flip illusions, the almonds experiment with the price reveal, and Horlicks' perceptual categories.",
    chapters: [
      { id: "brand-perception", label: "Perception & brands", desc: "Same model, three very different ads" },
      { id: "almonds-price", label: "The almonds experiment", desc: "Packaging, preference, then the price reveal" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Understanding Perception and Gestalt Principles in Marketing",
    blurb: "Sensory thresholds, the four perception stages, and the Gestalt lab: figure & ground, continuity, similarity, proximity, closure.",
    chapters: [
      { id: "sensory-stages", label: "Sensory thresholds", desc: "Absolute · subliminal · differential — then 4 stages" },
      { id: "gestalt-lab", label: "The Gestalt lab", desc: "Five principles, five live demos" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Understanding Consumer Behavior: Motivation, Perception, and Brand Humanization",
    blurb: "Attitude = f(object, attributes), Borges' attribute war, retention at 1/7th of acquisition — and Epicurus' two buckets.",
    chapters: [
      { id: "attitude-buckets", label: "Attitude & the buckets", desc: "Utilitarian vs love bucket" },
      { id: "retention-acquisition", label: "Retention vs acquisition", desc: "CAC, churn and the 1/7th rule" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Understanding Humanizing a Brand Through Product Attributes and Human Characteristics",
    blurb: "Attribute → Benefit → Characteristic: CEAT's protecting father, Asian Paints' Har Ghar Kuch Kehta Hai, and Hutch's pug.",
    chapters: [
      { id: "abc-humanization", label: "The ABC model", desc: "Attributes → benefits → human characteristics" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Understanding Cognitive Biases in Consumer Decision-Making",
    blurb: "Anchoring, bandwagon, scarcity, endowment — the four subconscious shortcuts marketers build on, from 'Save 16%' to Starbucks names.",
    chapters: [
      { id: "bias-lab", label: "The bias lab", desc: "Four biases, four live demos" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Product and Product Strategy",
    blurb: "Products move consumers from existing to desired state — great products = great experience + high value, the five product levels, and the failures that teach (Paper Boat, Tata Tea combo, Graco).",
    chapters: [
      { id: "product-value-experience", label: "Product · value · experience", desc: "What a product is, great products, failures, product vs brand" },
      { id: "product-levels", label: "The five product levels", desc: "Core benefit → potential product, hotel · McDonald's · Fossil" },
    ],
  },
  {
    id: "l30",
    n: 30,
    code: "L30",
    title: "Overview of Product Concepts and Portfolio Management",
    blurb: "Netflix's five product levels, then the product mix: width, depth and length — Fab India (6 lines), Apple India (8 lines), and the growth-plateau-decline cycle.",
    chapters: [
      { id: "netflix-product-levels", label: "Netflix's product levels", desc: "Entertainment core → gaming future — retention across levels" },
      { id: "product-mix-wdl", label: "Width · depth · length", desc: "The product mix dimensions, Fab India & Apple India, pruning" },
    ],
  },
  {
    id: "l31",
    n: 31,
    code: "L31",
    title: "Product Portfolio, Mix, and Strategy Fundamentals",
    blurb: "Anchoring bias in pricing, then the portfolio fundamentals: width = 3 lines, depth = 4 creams or 16 iPhone variants, length = 12 items — HUL's 50+ brands and the brand-manager structure.",
    chapters: [
      { id: "portfolio-basics", label: "Portfolio & anchoring", desc: "Why product mix comes before strategy — and the ₹500 anchor" },
      { id: "width-depth-length", label: "The three dimensions", desc: "Width 3 · depth 16 · length 12 — the parent-company maths" },
      { id: "portfolio-pruning", label: "Growth & pruning", desc: "Plateau economics, Apple's discontinuations, HUL, brand managers" },
    ],
  },
  {
    id: "l32",
    n: 32,
    code: "L32",
    title: "Deepening into Product Strategy: Line Extensions and Market Stretching",
    blurb: "70% of new products are extensions: Horlicks' six variants, Colgate's five — then stretching up (Porsche, Absolute Elyx), down (Jeep Compass, Armani Exchange) and both ways (Accor).",
    chapters: [
      { id: "line-extensions", label: "Line extensions", desc: "Line filling — Horlicks · Colgate · cannibalization · HUL's soap answer" },
      { id: "market-stretching", label: "Market stretching", desc: "Up · down · two-way — Jeep, VW, Absolute, Tata Harrier, Accor" },
    ],
  },
  {
    id: "l33",
    n: 33,
    code: "L33",
    title: "Market Stretch and Product Portfolio Strategy",
    blurb: "Two-way stretch (Accor, L'Oréal's Kéels vs Garnier), consistency analysis (Apple by screen size), pruning — and the business/brand/marketing stack through Dettol's 'germ-free home'.",
    chapters: [
      { id: "stretch-consistency", label: "Stretch · consistency · pruning", desc: "Aria vs Harrier, Apple's consistency groups, OnePlus' opening" },
      { id: "three-strategies", label: "Three strategies", desc: "Business · brand · marketing — the Detal case study end to end" },
    ],
  },
  {
    id: "l34",
    n: 34,
    code: "L34",
    title: "Understanding Product Narratives and Brand Humanization",
    blurb: "Epicurus' two buckets — utilitarian vs love — and the ABC narrative formula: CEAT's protecting father, Asian Paints' newlyweds, Prestige's family table.",
    chapters: [
      { id: "narrative-buckets", label: "The two buckets", desc: "Epicurus' utilitarian vs love — where loyalty lives" },
      { id: "abc-narratives", label: "The ABC narratives", desc: "Attributes → benefits → human characteristics, three cases" },
    ],
  },
  {
    id: "l35",
    n: 35,
    code: "L35",
    title: "Overview of Product Strategy and Co-Branding",
    blurb: "The product strategy triad (product · value · connect) with Dove, Pampers, Red Bull, Cetaphil — five famous failures, Parleji Surakshah — then composite vs ingredient co-branding.",
    chapters: [
      { id: "product-strategy-triad", label: "The strategy triad", desc: "Product · value · connect — successes and five failures" },
      { id: "co-branding", label: "Co-branding", desc: "Composite vs ingredient — Axis+Vistara, Intel inside, Levi's caveat" },
    ],
  },
  {
    id: "l36",
    n: 36,
    code: "L36",
    title: "Pricing Strategy: Frameworks, Psychology, and Implementation",
    blurb: "Price vs pricing vs pricing strategy, the 3C framework, the psychology shelf (reference price, price-quality, endings, framing, decoy) — and the six-step process.",
    chapters: [
      { id: "pricing-3c", label: "The 3Cs & psychology", desc: "Cost · competitors · customer value — $9.99 → $4.99, ₹49,199" },
      { id: "pricing-steps", label: "The six steps", desc: "Objective → demand → cost → competitors → method → final price" },
    ],
  },
  {
    id: "l37",
    n: 37,
    code: "L37",
    title: "Common Pricing Strategies and Their Execution",
    blurb: "Gillette's ₹99 razor and ₹150 blades, HP's cartridge economics, Indigo's segment fares, Office 365 tiers, Spotify freemium, Taj's New-Yeve yield — and the effective-pricing triangle.",
    chapters: [
      { id: "pricing-strategy-types", label: "The strategy catalogue", desc: "Loss leader · special event · differentiated · freemium · yield" },
      { id: "pricing-effectiveness", label: "Effective pricing", desc: "Sales · value · costs — the triangle that qualifies a price" },
    ],
  },
  {
    id: "l38",
    n: 38,
    code: "L38",
    title: "Principles of Marketing and Marketing Communications",
    blurb: "11 million bits per second against a 40-bit brain: attention filters, mental availability builds, the three Cs decide congruency — and System 1 must lead.",
    chapters: [
      { id: "attention-filter", label: "Attention as a filter", desc: "11M → 40 bits · mental availability · the connection chain" },
      { id: "three-cs-marcom", label: "The three Cs", desc: "Content · context · concept — Comfort vs the failure files" },
      { id: "dual-process", label: "System 1 vs System 2", desc: "Kahneman's two systems, Stroop, brain-friendly content" },
    ],
  },
  {
    id: "l39",
    n: 39,
    code: "L39",
    title: "Lecture 39",
    blurb: "Deliberately removed from the official course sequence — the page keeps its number and position and renders a removal card, never content.",
    reserved: true,
    chapters: [
      { id: "reserved-39", label: "Numbering preserved", desc: "Removed from the course · page intentionally left blank" },
    ],
  },
  {
    id: "l40",
    n: 40,
    code: "L40",
    title: "Final Class: Three C's in Marketing Communication and Examination Guidelines",
    blurb: "The last recorded session: the three Cs on Comfort, brain-friendly recall, subjective-exam craft (quality over quantity, framework + example) — and the 40/60 grading split.",
    chapters: [
      { id: "three-cs-final", label: "The three Cs, final pass", desc: "Context · concept · content — the Comfort breakdown, Coca-Cola & Bisleri" },
      { id: "exam-guidelines", label: "Examination guidelines", desc: "Subjective 60 marks · answer craft · MCQ elimination · 40/60 split" },
    ],
  },
];

export const MKTG_DEFAULT_LECTURE = MKTG_LECTURES[0].id;

export function lectureOfChapter(chapterId: string): MktgLecture | null {
  return MKTG_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): MktgLecture | null {
  return MKTG_LECTURES.find((l) => l.id === id) ?? null;
}

/** Every chapter id in reading order — the full chapter shelf. */
export const MKTG_ALL_CHAPTER_IDS = MKTG_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));

/* ============================================================
   The six teaching arcs — the sidebar's top-level structure.
   Reserved lectures sit inside the arc their number falls in.
   ============================================================ */

export interface MktgPart {
  id: string; // "part1".."part6"
  label: string; // full arc label
  from: number; // first lecture number (inclusive)
  to: number; // last lecture number (inclusive)
}

export const MKTG_PARTS: MktgPart[] = [
  { id: "part1", label: "Part I · Foundations, Value & Exchange", from: 1, to: 10 },
  { id: "part2", label: "Part II · Expectation Gap, Loyalty & STP", from: 11, to: 17 },
  { id: "part3", label: "Part III · Positioning", from: 18, to: 22 },
  { id: "part4", label: "Part IV · The Consumer Mind", from: 23, to: 28 },
  { id: "part5", label: "Part V · Psychology, Brand & Behaviour", from: 29, to: 34 },
  { id: "part6", label: "Part VI · Marketing in Practice", from: 35, to: 40 },
];

export function partOfLecture(n: number | null): MktgPart | null {
  if (n === null) return null;
  return MKTG_PARTS.find((p) => n >= p.from && n <= p.to) ?? null;
}

/** Lectures of a part, in official order. */
export function lecturesOfPart(part: MktgPart): MktgLecture[] {
  return MKTG_LECTURES.filter((l) => l.n !== null && l.n >= part.from && l.n <= part.to);
}

/* ============================================================
   Exam banks ↔ arcs. The ten banks keep the established
   6-questions-per-group shape; the eight pre-existing keys are
   intact, and two new banks cover the authored material
   (product & portfolio; marketing in practice).
   ============================================================ */

export const MKTG_PART_BANKS: Record<string, MktgExamGroup[]> = {
  part1: ["foundations", "concepts", "value", "loyalty"],
  part2: ["stp", "positioning"],
  part3: ["consumer"],
  part4: ["psychology"],
  part5: ["product"],
  part6: ["practice"],
};
