"use client";

/* ============================================================
   MKTG — the lecture sequence (shelf 06).

   "Principles of Marketing" arrived as one PDF covering
   Lectures 1-28. The reader picks a lecture in the hero and the
   page below renders exactly that lecture's chapters. Editing
   this one table re-maps the whole reader.

   Lecture 22's page in the source PDF is blank — its slot keeps
   an honest recap chapter (recap22) instead of inventing notes.
   ============================================================ */

export interface MktgLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface MktgLecture {
  id: string; // "l1".."l28"
  n: number | null; // lecture number
  code: string; // badge text: "L1".."L28"
  title: string;
  blurb: string;
  chapters: MktgLectureChapter[];
}

export const MKTG_LECTURES: MktgLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to Marketing: Customers, Markets, Brands & Value",
    blurb: "Marketing beyond selling: understanding needs, reading purchase decisions, brand preference — and the everyday places it already lives.",
    chapters: [
      { id: "why-mktg", label: "Why marketing?", desc: "Needs, decisions, brands, value — and marketing in everyday life" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Customer Value & Business Success",
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
    code: "L3",
    title: "Definitions, Concepts & the Marketing System",
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
    code: "L4",
    title: "The Closed System of Consumers",
    blurb: "The consumer mind as a closed system, the linear interest-openness relationship, interrupts that break the loop — and the business value of marketing.",
    chapters: [
      { id: "closed-system", label: "The closed system", desc: "Interest × openness — breaking the loop" },
      { id: "biz-value", label: "The business value", desc: "Top line, bottom line & the marketer's job" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Customer Perceived Value",
    blurb: "₹20 chai, ₹250 café chai, ₹500 airport chai — value = benefits − costs, the four benefits, the abstract costs, and how organisations move the equation.",
    chapters: [
      { id: "chai-value", label: "The chai example", desc: "Same tea, three perceived values" },
      { id: "cpv-formula", label: "The value formula", desc: "Benefits − costs, balanced" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Marketing Environment & Exchange Systems",
    blurb: "Micro and macro environments, the Zomato exchange beyond money, exchange vs transaction vs relationship — and the four-party journey map.",
    chapters: [
      { id: "environment", label: "The environment", desc: "Task (micro) & broad (macro) forces" },
      { id: "exchange-system", label: "Exchange systems", desc: "Zomato's real exchange — far beyond money" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Value, Price & the Luxury Lever",
    blurb: "Value ≠ price, features ≠ benefits, benefits become value only against sacrifices — and the extended psychological benefit that sells a ₹100 pen for ₹5,000.",
    chapters: [
      { id: "value-price-features", label: "Value · price · features", desc: "Three distinctions that settle most confusions" },
      { id: "luxury-lever", label: "The luxury lever", desc: "Extended psychological benefit — the uncapped one" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Expectation Gap, Satisfaction & Loyalty",
    blurb: "Existing state vs desired state, the value purchase chain, the asymmetric satisfaction formula — and why AirPods beat Bose.",
    chapters: [
      { id: "es-ds", label: "Existing & desired state", desc: "Itch Guard, Kohler, Clean & Clear — manufacturing the gap" },
      { id: "purchase-chain", label: "The purchase chain", desc: "Value → intention → purchase → satisfaction → loyalty" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Satisfaction, Loyalty & the Financial Impact",
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
    title: "ES/DS Campaigns & Decisions Beyond Purchase",
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
    title: "STP: Segmentation Fundamentals",
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
    title: "Behavioral & Benefit-Based Segmentation",
    blurb: "Surf Excel's four behavioral segments (25% → 75%), Colgate's five benefit variants, and the fitness-app segmentation exercise.",
    chapters: [
      { id: "behavioral-benefit", label: "Behavior & benefits", desc: "Surf Excel · Colgate · the fitness app" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "The Tupo Case Study",
    blurb: "The 3–15 gap nobody served: dual targeting of children and parents, dadi-nani trust, ₹450 vs ₹150 — niche creation end to end.",
    chapters: [
      { id: "tupo-case", label: "Tupo", desc: "Segmentation & targeting in the real world" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Targeting & Positioning",
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
    title: "Positioning Strategy",
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
    title: "STP & Micro-Marketing",
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
    title: "POD & POP in Positioning",
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
    title: "Consumer Behavior: Why People Buy",
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
    title: "The Buying Decision Process",
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
    title: "Purchase Decisions & the Consumer Journey",
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
    title: "The Integrated Behavior Framework",
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
    blurb: "Session notes not captured in the source PDF — an honest recap machine of the Lectures 19–21 arc: stages, loop, framework.",
    chapters: [
      { id: "recap22", label: "Recap · the journey", desc: "L19–21 arc, one machine" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Theories of Motivation",
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
    title: "Perception in Consumer Behavior",
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
    title: "Perception & Gestalt Principles",
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
    title: "Attitude, Retention & Humanizing Brands",
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
    title: "The ABC Model of Brand Humanization",
    blurb: "Attribute → Benefit → Characteristic: CEAT's protecting father, Asian Paints' Har Ghar Kuch Kehta Hai, and Hutch's pug.",
    chapters: [
      { id: "abc-humanization", label: "The ABC model", desc: "Attributes → benefits → human characteristics" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Cognitive Biases in Decision-Making",
    blurb: "Anchoring, bandwagon, scarcity, endowment — the four subconscious shortcuts marketers build on, from 'Save 16%' to Starbucks names.",
    chapters: [
      { id: "bias-lab", label: "The bias lab", desc: "Four biases, four live demos" },
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
   Chapter groups — the top-bar menu AND the eight exam windows
   (one "Test my knowledge" bank per group, see questions.ts).
   ============================================================ */

export const MKTG_GROUPS: {
  id: MktgExamGroup;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = [
  {
    id: "foundations",
    label: "Foundations",
    items: [
      { id: "why-mktg", label: "Why marketing?", desc: "Lecture 1 · needs, decisions, brands, value" },
      { id: "anticipation", label: "Anticipation", desc: "Lecture 2 · BlackBerry · Hertz · Blockbuster" },
      { id: "topline", label: "Top line & bottom line", desc: "Lecture 2 · the cold-coffee P&L" },
      { id: "mktg-vs-selling", label: "Marketing vs selling", desc: "Lecture 2 · the pen test" },
    ],
  },
  {
    id: "concepts",
    label: "Concepts",
    items: [
      { id: "definitions", label: "Definitions", desc: "Lecture 3 · AMA · outside-in vs inside-out" },
      { id: "mktg-system", label: "The marketing system", desc: "Lecture 3 · industry ↔ market, four flows" },
      { id: "marketable", label: "What can be marketed", desc: "Lecture 3 · the ten entities" },
      { id: "need-want-demand", label: "Need · Want · Demand", desc: "Lecture 3 · the triad" },
      { id: "demand-states", label: "Needs & demand states", desc: "Lecture 3 · five needs, eight states" },
      { id: "closed-system", label: "The closed system", desc: "Lecture 4 · interest × openness" },
      { id: "biz-value", label: "The business value", desc: "Lecture 4 · top line, bottom line" },
    ],
  },
  {
    id: "value",
    label: "Value & Exchange",
    items: [
      { id: "chai-value", label: "The chai example", desc: "Lecture 5 · context sets value" },
      { id: "cpv-formula", label: "The value formula", desc: "Lecture 5 · benefits − costs" },
      { id: "environment", label: "The environment", desc: "Lecture 6 · micro & macro forces" },
      { id: "exchange-system", label: "Exchange systems", desc: "Lecture 6 · beyond money-for-product" },
      { id: "value-price-features", label: "Value · price · features", desc: "Lecture 7 · three distinctions" },
      { id: "luxury-lever", label: "The luxury lever", desc: "Lecture 7 · the uncapped benefit" },
    ],
  },
  {
    id: "loyalty",
    label: "Gap & Loyalty",
    items: [
      { id: "es-ds", label: "Existing & desired state", desc: "Lecture 8 · manufacturing the gap" },
      { id: "purchase-chain", label: "The purchase chain", desc: "Lecture 8 · value to loyalty" },
      { id: "context-matters", label: "Context matters", desc: "Lecture 9 · one delivery, two ratings" },
      { id: "loyalty-econ", label: "Loyalty economics", desc: "Lecture 9 · the retention numbers" },
      { id: "campaigns-esds", label: "Campaigns in ES/DS", desc: "Lecture 10 · Samsung vs Sony & co." },
      { id: "beyond-purchase", label: "Beyond purchase", desc: "Lecture 10 · impulse, proxies, ethics" },
    ],
  },
  {
    id: "stp",
    label: "STP",
    items: [
      { id: "heterogeneity", label: "Heterogeneity", desc: "Lecture 11 · 100 users, six audiences" },
      { id: "bases", label: "Bases of segmentation", desc: "Lecture 11 · geo · demo · psychographic" },
      { id: "behavioral-benefit", label: "Behavior & benefits", desc: "Lecture 12 · Surf Excel · Colgate" },
      { id: "tupo-case", label: "Tupo", desc: "Lecture 13 · the 3–15 gap" },
      { id: "safe-targeting", label: "SAFE targeting", desc: "Lecture 14 · the four gates" },
      { id: "pos-3q", label: "Positioning's 3 questions", desc: "Lecture 14 · who · what · why" },
    ],
  },
  {
    id: "positioning",
    label: "Positioning",
    items: [
      { id: "accor-map", label: "The Accor map", desc: "Lecture 15 · perceptual mapping" },
      { id: "frame-podspops", label: "Frames · POPs · PODs", desc: "Lecture 15 · Gypsy King lesson" },
      { id: "four-levels", label: "The four levels", desc: "Lecture 16 · mass → market of one" },
      { id: "pop-pod-evolution", label: "POD → POP evolution", desc: "Lecture 16 · the razor ladder" },
      { id: "three-circles", label: "The three circles", desc: "Lecture 17 · locating POD & POP" },
      { id: "pod-pop-cases", label: "Case files", desc: "Lecture 17 · Oral-B · Dettol vs Savlon" },
    ],
  },
  {
    id: "consumer",
    label: "Consumer Mind",
    items: [
      { id: "why-buy", label: "Why people buy", desc: "Lecture 18 · desired states & stories" },
      { id: "eras-nudges", label: "Eras & nudges", desc: "Lecture 18 · rational → nudged" },
      { id: "five-stages", label: "The five stages", desc: "Lecture 19 · the decision process" },
      { id: "messy-middle", label: "The messy middle", desc: "Lecture 19 · the infinity loop" },
      { id: "journey-variations", label: "Journey variations", desc: "Lecture 20 · skip, reverse, loop" },
      { id: "autopsy-purchase", label: "Autopsy of a purchase", desc: "Lecture 20 · a real purchase, dissected" },
      { id: "touchpoints-framework", label: "Touchpoints & framework", desc: "Lecture 21 · the behavior cycle" },
      { id: "recap22", label: "Recap · the journey", desc: "Lecture 22 · the arc, one machine" },
    ],
  },
  {
    id: "psychology",
    label: "Psych & Bias",
    items: [
      { id: "motivation-theories", label: "Three theories", desc: "Lecture 23 · Freud · Maslow · Herzberg" },
      { id: "theory-match", label: "Theory match", desc: "Lecture 23 · six confessions" },
      { id: "brand-perception", label: "Perception & brands", desc: "Lecture 24 · the brand flip" },
      { id: "almonds-price", label: "The almonds experiment", desc: "Lecture 24 · packaging & price" },
      { id: "sensory-stages", label: "Sensory thresholds", desc: "Lecture 25 · thresholds & 4 stages" },
      { id: "gestalt-lab", label: "The Gestalt lab", desc: "Lecture 25 · five live demos" },
      { id: "attitude-buckets", label: "Attitude & the buckets", desc: "Lecture 26 · utilitarian vs love" },
      { id: "retention-acquisition", label: "Retention vs acquisition", desc: "Lecture 26 · the 1/7th rule" },
      { id: "abc-humanization", label: "The ABC model", desc: "Lecture 27 · CEAT · Asian Paints" },
      { id: "bias-lab", label: "The bias lab", desc: "Lecture 28 · four biases live" },
    ],
  },
];

export type MktgExamGroup =
  | "foundations"
  | "concepts"
  | "value"
  | "loyalty"
  | "stp"
  | "positioning"
  | "consumer"
  | "psychology";

export const MKTG_FLAT_ITEMS = MKTG_GROUPS.flatMap((g) => g.items);
