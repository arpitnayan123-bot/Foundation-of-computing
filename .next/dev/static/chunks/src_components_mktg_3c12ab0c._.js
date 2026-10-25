(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mktg/lectures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MKTG_ALL_CHAPTER_IDS",
    ()=>MKTG_ALL_CHAPTER_IDS,
    "MKTG_DEFAULT_LECTURE",
    ()=>MKTG_DEFAULT_LECTURE,
    "MKTG_FLAT_ITEMS",
    ()=>MKTG_FLAT_ITEMS,
    "MKTG_GROUPS",
    ()=>MKTG_GROUPS,
    "MKTG_LECTURES",
    ()=>MKTG_LECTURES,
    "lectureById",
    ()=>lectureById,
    "lectureOfChapter",
    ()=>lectureOfChapter
]);
"use client";
const MKTG_LECTURES = [
    {
        id: "l1",
        n: 1,
        code: "L1",
        title: "Introduction to Marketing: Customers, Markets, Brands & Value",
        blurb: "Marketing beyond selling: understanding needs, reading purchase decisions, brand preference — and the everyday places it already lives.",
        chapters: [
            {
                id: "why-mktg",
                label: "Why marketing?",
                desc: "Needs, decisions, brands, value — and marketing in everyday life"
            }
        ]
    },
    {
        id: "l2",
        n: 2,
        code: "L2",
        title: "Customer Value & Business Success",
        blurb: "Anticipation — BlackBerry, Hertz, Blockbuster; top line vs bottom line with the cold-coffee P&L; selling the pen vs marketing it.",
        chapters: [
            {
                id: "anticipation",
                label: "Anticipation",
                desc: "BlackBerry · Hertz · Blockbuster — the decline pattern"
            },
            {
                id: "topline",
                label: "Top line & bottom line",
                desc: "Revenue → profit — the cold coffee maths"
            },
            {
                id: "mktg-vs-selling",
                label: "Marketing vs selling",
                desc: "The pen, the definition, marketing in the wild"
            }
        ]
    },
    {
        id: "l3",
        n: 3,
        code: "L3",
        title: "Definitions, Concepts & the Marketing System",
        blurb: "The AMA definition, outside-in vs inside-out, the industry-market system with four flows, ten marketable entities, the Need-Want-Demand triad and eight demand states.",
        chapters: [
            {
                id: "definitions",
                label: "Definitions",
                desc: "AMA · outside-in vs inside-out · success stories"
            },
            {
                id: "mktg-system",
                label: "The marketing system",
                desc: "Industry ↔ market — the four key flows"
            },
            {
                id: "marketable",
                label: "What can be marketed",
                desc: "Goods → ideas: the ten entities"
            },
            {
                id: "need-want-demand",
                label: "Need · Want · Demand",
                desc: "The triad — vada pao to Starbucks"
            },
            {
                id: "demand-states",
                label: "Needs & demand states",
                desc: "Five need types · eight demand states"
            }
        ]
    },
    {
        id: "l4",
        n: 4,
        code: "L4",
        title: "The Closed System of Consumers",
        blurb: "The consumer mind as a closed system, the linear interest-openness relationship, interrupts that break the loop — and the business value of marketing.",
        chapters: [
            {
                id: "closed-system",
                label: "The closed system",
                desc: "Interest × openness — breaking the loop"
            },
            {
                id: "biz-value",
                label: "The business value",
                desc: "Top line, bottom line & the marketer's job"
            }
        ]
    },
    {
        id: "l5",
        n: 5,
        code: "L5",
        title: "Customer Perceived Value",
        blurb: "₹20 chai, ₹250 café chai, ₹500 airport chai — value = benefits − costs, the four benefits, the abstract costs, and how organisations move the equation.",
        chapters: [
            {
                id: "chai-value",
                label: "The chai example",
                desc: "Same tea, three perceived values"
            },
            {
                id: "cpv-formula",
                label: "The value formula",
                desc: "Benefits − costs, balanced"
            }
        ]
    },
    {
        id: "l6",
        n: 6,
        code: "L6",
        title: "Marketing Environment & Exchange Systems",
        blurb: "Micro and macro environments, the Zomato exchange beyond money, exchange vs transaction vs relationship — and the four-party journey map.",
        chapters: [
            {
                id: "environment",
                label: "The environment",
                desc: "Task (micro) & broad (macro) forces"
            },
            {
                id: "exchange-system",
                label: "Exchange systems",
                desc: "Zomato's real exchange — far beyond money"
            }
        ]
    },
    {
        id: "l7",
        n: 7,
        code: "L7",
        title: "Value, Price & the Luxury Lever",
        blurb: "Value ≠ price, features ≠ benefits, benefits become value only against sacrifices — and the extended psychological benefit that sells a ₹100 pen for ₹5,000.",
        chapters: [
            {
                id: "value-price-features",
                label: "Value · price · features",
                desc: "Three distinctions that settle most confusions"
            },
            {
                id: "luxury-lever",
                label: "The luxury lever",
                desc: "Extended psychological benefit — the uncapped one"
            }
        ]
    },
    {
        id: "l8",
        n: 8,
        code: "L8",
        title: "Expectation Gap, Satisfaction & Loyalty",
        blurb: "Existing state vs desired state, the value purchase chain, the asymmetric satisfaction formula — and why AirPods beat Bose.",
        chapters: [
            {
                id: "es-ds",
                label: "Existing & desired state",
                desc: "Itch Guard, Kohler, Clean & Clear — manufacturing the gap"
            },
            {
                id: "purchase-chain",
                label: "The purchase chain",
                desc: "Value → intention → purchase → satisfaction → loyalty"
            }
        ]
    },
    {
        id: "l9",
        n: 9,
        code: "L9",
        title: "Satisfaction, Loyalty & the Financial Impact",
        blurb: "Same 34-minute delivery, 2★ and 5★ — context sets the anchor. Retention economics: 5% more retention, 20–90% more profit.",
        chapters: [
            {
                id: "context-matters",
                label: "Context matters",
                desc: "One delivery, two ratings — the anchor decides"
            },
            {
                id: "loyalty-econ",
                label: "Loyalty economics",
                desc: "The numbers that make retention the strategy"
            }
        ]
    },
    {
        id: "l10",
        n: 10,
        code: "L10",
        title: "ES/DS Campaigns & Decisions Beyond Purchase",
        blurb: "Samsung vs Sony, Clean & Clear's dual pull, Kohler's raise — plus impulse buying, attribute-based choices and measuring intention.",
        chapters: [
            {
                id: "campaigns-esds",
                label: "Campaigns in ES/DS",
                desc: "Samsung · Sony · Clean & Clear · Kohler"
            },
            {
                id: "beyond-purchase",
                label: "Beyond purchase",
                desc: "Impulse, attributes, proxies & ethics"
            }
        ]
    },
    {
        id: "l11",
        n: 11,
        code: "L11",
        title: "STP: Segmentation Fundamentals",
        blurb: "Market heterogeneity, meaningful segments, and the geographic, demographic and psychographic bases — Zudio, Bajaj Pulsar, L'Oréal, Nike.",
        chapters: [
            {
                id: "heterogeneity",
                label: "Heterogeneity",
                desc: "100 Netflix users, six very different audiences"
            },
            {
                id: "bases",
                label: "Bases of segmentation",
                desc: "Geographic · demographic · psychographic"
            }
        ]
    },
    {
        id: "l12",
        n: 12,
        code: "L12",
        title: "Behavioral & Benefit-Based Segmentation",
        blurb: "Surf Excel's four behavioral segments (25% → 75%), Colgate's five benefit variants, and the fitness-app segmentation exercise.",
        chapters: [
            {
                id: "behavioral-benefit",
                label: "Behavior & benefits",
                desc: "Surf Excel · Colgate · the fitness app"
            }
        ]
    },
    {
        id: "l13",
        n: 13,
        code: "L13",
        title: "The Tupo Case Study",
        blurb: "The 3–15 gap nobody served: dual targeting of children and parents, dadi-nani trust, ₹450 vs ₹150 — niche creation end to end.",
        chapters: [
            {
                id: "tupo-case",
                label: "Tupo",
                desc: "Segmentation & targeting in the real world"
            }
        ]
    },
    {
        id: "l14",
        n: 14,
        code: "L14",
        title: "Targeting & Positioning",
        blurb: "The SAFE framework, two dangerous assumptions, Netflix/Spotify targeting — and positioning's three questions through Sensodyne.",
        chapters: [
            {
                id: "safe-targeting",
                label: "SAFE targeting",
                desc: "Size · accessibility · fitment · economics"
            },
            {
                id: "pos-3q",
                label: "Positioning's 3 questions",
                desc: "Who · what category · why choose us"
            }
        ]
    },
    {
        id: "l15",
        n: 15,
        code: "L15",
        title: "Positioning Strategy",
        blurb: "Accor's multi-segment map, natural vs extended frames of reference (the Gypsy King lesson), and PODs vs POPs from cabs to phenyl.",
        chapters: [
            {
                id: "accor-map",
                label: "The Accor map",
                desc: "Perceptual mapping across price tiers"
            },
            {
                id: "frame-podspops",
                label: "Frames · POPs · PODs",
                desc: "Natural vs extended reference points"
            }
        ]
    },
    {
        id: "l16",
        n: 16,
        code: "L16",
        title: "STP & Micro-Marketing",
        blurb: "Mass, segment, niche and market-of-one — NikeiD, Share a Coke, Raymond — plus the POD→POP evolution from three blades to five.",
        chapters: [
            {
                id: "four-levels",
                label: "The four levels",
                desc: "Mass → segment → niche → market of one"
            },
            {
                id: "pop-pod-evolution",
                label: "POD → POP evolution",
                desc: "Gillette's razor ladder & commoditisation"
            }
        ]
    },
    {
        id: "l17",
        n: 17,
        code: "L17",
        title: "POD & POP in Positioning",
        blurb: "Oral-B's fading bristles, House of Quirk's covers, Dettol vs Savlon's sting — and the three-circles model that locates every POD.",
        chapters: [
            {
                id: "three-circles",
                label: "The three circles",
                desc: "Desires × competitors × you — where POP and POD live"
            },
            {
                id: "pod-pop-cases",
                label: "Case files",
                desc: "Oral-B · House of Quirk · Dettol vs Savlon"
            }
        ]
    },
    {
        id: "l18",
        n: 18,
        code: "L18",
        title: "Consumer Behavior: Why People Buy",
        blurb: "Minds are never empty — mango ads, TRIA, Forest Essentials; the classical → cognitive → nudge evolution from Kahneman to Thaler.",
        chapters: [
            {
                id: "why-buy",
                label: "Why people buy",
                desc: "Desired states, stimulus & imagination"
            },
            {
                id: "eras-nudges",
                label: "Eras & nudges",
                desc: "Rational → irrational → nudged consumers"
            }
        ]
    },
    {
        id: "l19",
        n: 19,
        code: "L19",
        title: "The Buying Decision Process",
        blurb: "The five stages, heuristics at work, the messy middle where exploration and evaluation loop — and cart abandonment as non-linear proof.",
        chapters: [
            {
                id: "five-stages",
                label: "The five stages",
                desc: "Recognition → search → evaluation → purchase → post-purchase"
            },
            {
                id: "messy-middle",
                label: "The messy middle",
                desc: "The infinity loop of real decisions"
            }
        ]
    },
    {
        id: "l20",
        n: 20,
        code: "L20",
        title: "Purchase Decisions & the Consumer Journey",
        blurb: "Schiffman & Jain's definitions, the stimulus-choice frame, stage skipping/reversal/loops — and the autopsy of a real purchase.",
        chapters: [
            {
                id: "journey-variations",
                label: "Journey variations",
                desc: "Skipping, reversing, looping"
            },
            {
                id: "autopsy-purchase",
                label: "Autopsy of a purchase",
                desc: "The Moroccan-oil shampoo, dissected"
            }
        ]
    },
    {
        id: "l21",
        n: 21,
        code: "L21",
        title: "The Integrated Behavior Framework",
        blurb: "Involvement levels, touchpoints beyond the point of sale, and the need→tension→drive→behavior→consumption→goal-fulfillment cycle.",
        chapters: [
            {
                id: "touchpoints-framework",
                label: "Touchpoints & framework",
                desc: "The full behavior cycle, end to end"
            }
        ]
    },
    {
        id: "l22",
        n: 22,
        code: "L22",
        title: "The Decision Journey — Consolidated",
        blurb: "Session notes not captured in the source PDF — an honest recap machine of the Lectures 19–21 arc: stages, loop, framework.",
        chapters: [
            {
                id: "recap22",
                label: "Recap · the journey",
                desc: "L19–21 arc, one machine"
            }
        ]
    },
    {
        id: "l23",
        n: 23,
        code: "L23",
        title: "Theories of Motivation",
        blurb: "Freud's iceberg (90% below the surface), Maslow's five-level pyramid, Herzberg's free-chai rule — then match the six quotes to their theory.",
        chapters: [
            {
                id: "motivation-theories",
                label: "Three theories",
                desc: "Freud · Maslow · Herzberg"
            },
            {
                id: "theory-match",
                label: "Theory match",
                desc: "Six confessions, three theories"
            }
        ]
    },
    {
        id: "l24",
        n: 24,
        code: "L24",
        title: "Perception in Consumer Behavior",
        blurb: "Selective, subjective, constructive, abstract — brand-flip illusions, the almonds experiment with the price reveal, and Horlicks' perceptual categories.",
        chapters: [
            {
                id: "brand-perception",
                label: "Perception & brands",
                desc: "Same model, three very different ads"
            },
            {
                id: "almonds-price",
                label: "The almonds experiment",
                desc: "Packaging, preference, then the price reveal"
            }
        ]
    },
    {
        id: "l25",
        n: 25,
        code: "L25",
        title: "Perception & Gestalt Principles",
        blurb: "Sensory thresholds, the four perception stages, and the Gestalt lab: figure & ground, continuity, similarity, proximity, closure.",
        chapters: [
            {
                id: "sensory-stages",
                label: "Sensory thresholds",
                desc: "Absolute · subliminal · differential — then 4 stages"
            },
            {
                id: "gestalt-lab",
                label: "The Gestalt lab",
                desc: "Five principles, five live demos"
            }
        ]
    },
    {
        id: "l26",
        n: 26,
        code: "L26",
        title: "Attitude, Retention & Humanizing Brands",
        blurb: "Attitude = f(object, attributes), Borges' attribute war, retention at 1/7th of acquisition — and Epicurus' two buckets.",
        chapters: [
            {
                id: "attitude-buckets",
                label: "Attitude & the buckets",
                desc: "Utilitarian vs love bucket"
            },
            {
                id: "retention-acquisition",
                label: "Retention vs acquisition",
                desc: "CAC, churn and the 1/7th rule"
            }
        ]
    },
    {
        id: "l27",
        n: 27,
        code: "L27",
        title: "The ABC Model of Brand Humanization",
        blurb: "Attribute → Benefit → Characteristic: CEAT's protecting father, Asian Paints' Har Ghar Kuch Kehta Hai, and Hutch's pug.",
        chapters: [
            {
                id: "abc-humanization",
                label: "The ABC model",
                desc: "Attributes → benefits → human characteristics"
            }
        ]
    },
    {
        id: "l28",
        n: 28,
        code: "L28",
        title: "Cognitive Biases in Decision-Making",
        blurb: "Anchoring, bandwagon, scarcity, endowment — the four subconscious shortcuts marketers build on, from 'Save 16%' to Starbucks names.",
        chapters: [
            {
                id: "bias-lab",
                label: "The bias lab",
                desc: "Four biases, four live demos"
            }
        ]
    }
];
const MKTG_DEFAULT_LECTURE = MKTG_LECTURES[0].id;
function lectureOfChapter(chapterId) {
    return MKTG_LECTURES.find((l)=>l.chapters.some((c)=>c.id === chapterId)) ?? null;
}
function lectureById(id) {
    return MKTG_LECTURES.find((l)=>l.id === id) ?? null;
}
const MKTG_ALL_CHAPTER_IDS = MKTG_LECTURES.flatMap(_c = (l)=>l.chapters.map((c)=>c.id));
_c1 = MKTG_ALL_CHAPTER_IDS;
const MKTG_GROUPS = [
    {
        id: "foundations",
        label: "Foundations",
        items: [
            {
                id: "why-mktg",
                label: "Why marketing?",
                desc: "Lecture 1 · needs, decisions, brands, value"
            },
            {
                id: "anticipation",
                label: "Anticipation",
                desc: "Lecture 2 · BlackBerry · Hertz · Blockbuster"
            },
            {
                id: "topline",
                label: "Top line & bottom line",
                desc: "Lecture 2 · the cold-coffee P&L"
            },
            {
                id: "mktg-vs-selling",
                label: "Marketing vs selling",
                desc: "Lecture 2 · the pen test"
            }
        ]
    },
    {
        id: "concepts",
        label: "Concepts",
        items: [
            {
                id: "definitions",
                label: "Definitions",
                desc: "Lecture 3 · AMA · outside-in vs inside-out"
            },
            {
                id: "mktg-system",
                label: "The marketing system",
                desc: "Lecture 3 · industry ↔ market, four flows"
            },
            {
                id: "marketable",
                label: "What can be marketed",
                desc: "Lecture 3 · the ten entities"
            },
            {
                id: "need-want-demand",
                label: "Need · Want · Demand",
                desc: "Lecture 3 · the triad"
            },
            {
                id: "demand-states",
                label: "Needs & demand states",
                desc: "Lecture 3 · five needs, eight states"
            },
            {
                id: "closed-system",
                label: "The closed system",
                desc: "Lecture 4 · interest × openness"
            },
            {
                id: "biz-value",
                label: "The business value",
                desc: "Lecture 4 · top line, bottom line"
            }
        ]
    },
    {
        id: "value",
        label: "Value & Exchange",
        items: [
            {
                id: "chai-value",
                label: "The chai example",
                desc: "Lecture 5 · context sets value"
            },
            {
                id: "cpv-formula",
                label: "The value formula",
                desc: "Lecture 5 · benefits − costs"
            },
            {
                id: "environment",
                label: "The environment",
                desc: "Lecture 6 · micro & macro forces"
            },
            {
                id: "exchange-system",
                label: "Exchange systems",
                desc: "Lecture 6 · beyond money-for-product"
            },
            {
                id: "value-price-features",
                label: "Value · price · features",
                desc: "Lecture 7 · three distinctions"
            },
            {
                id: "luxury-lever",
                label: "The luxury lever",
                desc: "Lecture 7 · the uncapped benefit"
            }
        ]
    },
    {
        id: "loyalty",
        label: "Gap & Loyalty",
        items: [
            {
                id: "es-ds",
                label: "Existing & desired state",
                desc: "Lecture 8 · manufacturing the gap"
            },
            {
                id: "purchase-chain",
                label: "The purchase chain",
                desc: "Lecture 8 · value to loyalty"
            },
            {
                id: "context-matters",
                label: "Context matters",
                desc: "Lecture 9 · one delivery, two ratings"
            },
            {
                id: "loyalty-econ",
                label: "Loyalty economics",
                desc: "Lecture 9 · the retention numbers"
            },
            {
                id: "campaigns-esds",
                label: "Campaigns in ES/DS",
                desc: "Lecture 10 · Samsung vs Sony & co."
            },
            {
                id: "beyond-purchase",
                label: "Beyond purchase",
                desc: "Lecture 10 · impulse, proxies, ethics"
            }
        ]
    },
    {
        id: "stp",
        label: "STP",
        items: [
            {
                id: "heterogeneity",
                label: "Heterogeneity",
                desc: "Lecture 11 · 100 users, six audiences"
            },
            {
                id: "bases",
                label: "Bases of segmentation",
                desc: "Lecture 11 · geo · demo · psychographic"
            },
            {
                id: "behavioral-benefit",
                label: "Behavior & benefits",
                desc: "Lecture 12 · Surf Excel · Colgate"
            },
            {
                id: "tupo-case",
                label: "Tupo",
                desc: "Lecture 13 · the 3–15 gap"
            },
            {
                id: "safe-targeting",
                label: "SAFE targeting",
                desc: "Lecture 14 · the four gates"
            },
            {
                id: "pos-3q",
                label: "Positioning's 3 questions",
                desc: "Lecture 14 · who · what · why"
            }
        ]
    },
    {
        id: "positioning",
        label: "Positioning",
        items: [
            {
                id: "accor-map",
                label: "The Accor map",
                desc: "Lecture 15 · perceptual mapping"
            },
            {
                id: "frame-podspops",
                label: "Frames · POPs · PODs",
                desc: "Lecture 15 · Gypsy King lesson"
            },
            {
                id: "four-levels",
                label: "The four levels",
                desc: "Lecture 16 · mass → market of one"
            },
            {
                id: "pop-pod-evolution",
                label: "POD → POP evolution",
                desc: "Lecture 16 · the razor ladder"
            },
            {
                id: "three-circles",
                label: "The three circles",
                desc: "Lecture 17 · locating POD & POP"
            },
            {
                id: "pod-pop-cases",
                label: "Case files",
                desc: "Lecture 17 · Oral-B · Dettol vs Savlon"
            }
        ]
    },
    {
        id: "consumer",
        label: "Consumer Mind",
        items: [
            {
                id: "why-buy",
                label: "Why people buy",
                desc: "Lecture 18 · desired states & stories"
            },
            {
                id: "eras-nudges",
                label: "Eras & nudges",
                desc: "Lecture 18 · rational → nudged"
            },
            {
                id: "five-stages",
                label: "The five stages",
                desc: "Lecture 19 · the decision process"
            },
            {
                id: "messy-middle",
                label: "The messy middle",
                desc: "Lecture 19 · the infinity loop"
            },
            {
                id: "journey-variations",
                label: "Journey variations",
                desc: "Lecture 20 · skip, reverse, loop"
            },
            {
                id: "autopsy-purchase",
                label: "Autopsy of a purchase",
                desc: "Lecture 20 · a real purchase, dissected"
            },
            {
                id: "touchpoints-framework",
                label: "Touchpoints & framework",
                desc: "Lecture 21 · the behavior cycle"
            },
            {
                id: "recap22",
                label: "Recap · the journey",
                desc: "Lecture 22 · the arc, one machine"
            }
        ]
    },
    {
        id: "psychology",
        label: "Psych & Bias",
        items: [
            {
                id: "motivation-theories",
                label: "Three theories",
                desc: "Lecture 23 · Freud · Maslow · Herzberg"
            },
            {
                id: "theory-match",
                label: "Theory match",
                desc: "Lecture 23 · six confessions"
            },
            {
                id: "brand-perception",
                label: "Perception & brands",
                desc: "Lecture 24 · the brand flip"
            },
            {
                id: "almonds-price",
                label: "The almonds experiment",
                desc: "Lecture 24 · packaging & price"
            },
            {
                id: "sensory-stages",
                label: "Sensory thresholds",
                desc: "Lecture 25 · thresholds & 4 stages"
            },
            {
                id: "gestalt-lab",
                label: "The Gestalt lab",
                desc: "Lecture 25 · five live demos"
            },
            {
                id: "attitude-buckets",
                label: "Attitude & the buckets",
                desc: "Lecture 26 · utilitarian vs love"
            },
            {
                id: "retention-acquisition",
                label: "Retention vs acquisition",
                desc: "Lecture 26 · the 1/7th rule"
            },
            {
                id: "abc-humanization",
                label: "The ABC model",
                desc: "Lecture 27 · CEAT · Asian Paints"
            },
            {
                id: "bias-lab",
                label: "The bias lab",
                desc: "Lecture 28 · four biases live"
            }
        ]
    }
];
const MKTG_FLAT_ITEMS = MKTG_GROUPS.flatMap(_c2 = (g)=>g.items);
_c3 = MKTG_FLAT_ITEMS;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MKTG_ALL_CHAPTER_IDS$MKTG_LECTURES.flatMap");
__turbopack_context__.k.register(_c1, "MKTG_ALL_CHAPTER_IDS");
__turbopack_context__.k.register(_c2, "MKTG_FLAT_ITEMS$MKTG_GROUPS.flatMap");
__turbopack_context__.k.register(_c3, "MKTG_FLAT_ITEMS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mktg/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   TEST MY KNOWLEDGE — MKTG question banks, one per chapter group.
   "Principles of Marketing" is a concepts course, so the bank
   sticks to mcq | output | short — definition checks, case mcqs,
   mini case panels and model answers: the formats that actually
   appear on paper. Every answer follows the lecture notes
   (Lectures 1–28) and has been hand-checked.
   ============================================================ */ __turbopack_context__.s([
    "MKTG_EXAM_BANKS",
    ()=>MKTG_EXAM_BANKS,
    "MKTG_EXAM_GROUPS",
    ()=>MKTG_EXAM_GROUPS,
    "MKTG_TOTAL_QUESTIONS",
    ()=>MKTG_TOTAL_QUESTIONS
]);
/* ------------------------------------------------------------
   GROUP 1 — FOUNDATIONS  (L1–L2 · what marketing really means ·
             anticipation · top line & bottom line · the pen)
   ------------------------------------------------------------ */ const FOUNDATIONS = [
    {
        id: "f1",
        type: "mcq",
        q: "“Marketing is not limited to selling or product promotion.” In Lecture 1's framing, marketing is best described as…",
        options: [
            "The art of pushing finished products to consumers through ads and discounts",
            "Understanding consumer needs and decision-making, exploring why customers prefer certain brands, and creating value rather than just transacting sales",
            "A department that switches on after manufacturing and ends at the billing counter",
            "Another name for advertising and sales promotion"
        ],
        answer: 1,
        explain: "Lecture 1 draws the boundary early: marketing spans understanding consumer behaviour and decision processes, explaining brand preference, and creating value rather than merely transacting sales. Pushing finished products is selling; advertising is one tool inside marketing, never the discipline itself."
    },
    {
        id: "f2",
        type: "mcq",
        q: "BlackBerry, Hertz and Blockbuster all appear as anticipation failures. Which pattern of decline do all three share?",
        options: [
            "An overnight collapse with no warning signs at all",
            "An initial gradual performance drop followed by a sudden collapse — they failed to anticipate the market shift",
            "Steady profits slowly eaten by rising employee costs",
            "Government regulation that shut each company down"
        ],
        answer: 1,
        explain: "The lecture's decline pattern: a gradual drop first, then a sudden collapse. BlackBerry slid after the iPhone (2007), Hertz bled against Uber's asset-light model despite owning its fleet, and Blockbuster's CEO dismissed Netflix while streaming grew. Organisations that anticipate pivot before the cliff; those that cannot, exit fast."
    },
    {
        id: "f3",
        type: "output",
        q: "A cafe hands you the cold-coffee panel below. Work the numbers exactly as the lecture does: state the top line, the total cost, and the bottom line.",
        code: "COLD COFFEE — DAILY SALES\n  Price per glass : ₹120\n  Glasses sold    : 80\n  Cost per glass  : ₹70\n\n  Top line     = price × volume\n  Total cost   = cost × volume\n  Bottom line  = top line − total cost",
        answerText: "Top line (revenue) = ₹120 × 80 = ₹9,600\nTotal cost = ₹70 × 80 = ₹5,600\nBottom line (profit) = ₹9,600 − ₹5,600 = ₹4,000",
        explain: "Top line is revenue: ₹120 × 80 = ₹9,600. Total cost is ₹70 × 80 = ₹5,600. The bottom line is what survives: ₹9,600 − ₹5,600 = ₹4,000. And the lecture's principle rides on top of the arithmetic — there must be a top line (which marketing keeps steady) before a bottom line can exist."
    },
    {
        id: "f4",
        type: "mcq",
        q: "Hertz kept owning its car fleet while Uber outsourced drivers and vehicles; Blockbuster's CEO dismissed Netflix as non-competitive; BlackBerry's stock bottomed in 2010 after the iPhone. The single lesson the lecture extracts is that marketing's core function is to…",
        options: [
            "Advertise louder than the competitor",
            "Cut costs faster than the rival",
            "Anticipate consumer needs and market evolution — predicting future needs before competitors do",
            "Copy the disruptor's model immediately"
        ],
        answer: 2,
        explain: "Lecture 2's definition: marketing is the function that enables organisations to anticipate consumer needs and market evolution. Hertz's capital-heavy fleet lost to Uber's asset-light model, Blockbuster never took Netflix seriously, and BlackBerry missed the touchscreen shift — anticipation, not reaction, is the marketer's job."
    },
    {
        id: "f5",
        type: "short",
        q: "You are handed a pen to sell. Contrast the sales-dominant approach with the marketing approach — what does each one actually do first?",
        answerText: "Sales-dominant approach — push the pen's attributes straight away: it writes flawlessly, it is black, it has a good grip, it will improve your exam marks.\nMarketing approach — ask questions first to understand the customer's requirements: ballpoint, pilot or ink? What is your budget? Fine or broad nib? Which colour do you prefer? Only then present the pen that fits.",
        explain: "Selling starts with the product and pushes features; marketing starts with the customer and asks before it tells. The lecture's point is that understanding needs before presenting the product produces a better fit — and more successful sales outcomes, not fewer."
    },
    {
        id: "f6",
        type: "short",
        q: "State the four-step definition of marketing given in the lectures (understand → … → deliver), and say what customers become when value is successfully delivered.",
        answerText: "Marketing is the process of:\n1. Understanding consumer needs and preferences\n2. Creating value through product or service development\n3. Communicating value to consumers\n4. Delivering value through satisfactory transactions.\nWhen value is delivered, customers become advocates — they speak positively about the brand and generate repeat business and revenue.",
        explain: "Four verbs in order: understand, create, communicate, deliver. The payoff clause earns the mark: delivered value turns customers into advocates whose word-of-mouth and repeat purchases feed straight back into the top line."
    }
];
/* ------------------------------------------------------------
   GROUP 2 — CONCEPTS  (L3–L4 · AMA definition · four flows ·
             ten entities · need-want-demand · demand states ·
             the closed system)
   ------------------------------------------------------------ */ const CONCEPTS = [
    {
        id: "c1",
        type: "mcq",
        q: "Which of the following is the American Marketing Association (AMA) definition as quoted in Lecture 3?",
        options: [
            "Marketing is selling products that do not come back to customers who do.",
            "Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.",
            "Marketing is meeting needs profitably through great products.",
            "Marketing is pushing finished goods from the factory to the retail shelf."
        ],
        answer: 1,
        explain: "The AMA definition runs creating → communicating → delivering → exchanging offerings of value, and it names four audiences: customers, clients, partners, and society at large. “Meeting needs profitably” is Steve Jobs' one-liner from the same lecture, and pushing finished goods is selling — the inside-out approach."
    },
    {
        id: "c2",
        type: "mcq",
        q: "In the marketing system (industry ↔ market), which pair of flows moves FROM the market TOWARD the industry?",
        options: [
            "Communication and goods & services",
            "Money and information",
            "Goods & services and money",
            "Communication and information"
        ],
        answer: 1,
        explain: "Industry (the sellers) sends communication and goods/services to the market (the buyers); the market sends money back — and, crucially, information: feedback that helps organisations redesign and refine products. Money and information are the two return flows."
    },
    {
        id: "c3",
        type: "mcq",
        q: "Imagica markets happiness and family memories rather than rides; Zomato's “Hungry” New Year campaign connects celebration with ordering food. Which two of the ten marketable entities do these illustrate?",
        options: [
            "Goods and services",
            "Experiences and ideas",
            "Properties and organisations",
            "Persons and information"
        ],
        answer: 1,
        explain: "The ten entities run from goods to ideas: goods, services, experiences, financial services, persons, places, properties, organisations, information, ideas. Imagica sells the emotional experience; Zomato's campaign markets an idea. Same logic: Amex sells the experience of having the card, Rajasthan Tourism sells a place."
    },
    {
        id: "c4",
        type: "short",
        q: "Distinguish need, want and demand using the lecture's ₹20 lunch example (pizza, tandoori chicken, vada pao). Which of the three can marketers NOT create?",
        answerText: "Need — the basic human requirement (food); it pre-exists, and marketers cannot create it.\nWant — the need directed at a specific object: pizza, tandoori chicken or vada pao — shaped by marketing, culture and personal preference.\nDemand — want backed by the ability to pay: with ₹20 in pocket the demand collapses to vada pao; with more money all three become possible.\nMarketers cannot create needs — they recognise them; they can shape wants and influence demand through price, availability and promotion.",
        explain: "The triad is cumulative: need (pre-existing) → want (need + specific object) → demand (want + purchasing power). The ₹20 example shows demand's gate is money. Starbucks makes the same point — the want for a ₹300 coffee may exist in Tier-3 cities, but only Tier-1 purchasing power turns it into demand."
    },
    {
        id: "c5",
        type: "mcq",
        q: "Consumers who actively avoid a product — and may even pay to prevent it (dentist appointments; ad-free music subscriptions) — fall into which demand state?",
        options: [
            "Latent demand",
            "Declining demand",
            "Negative demand",
            "Overfull demand"
        ],
        answer: 2,
        explain: "Negative demand: consumers dislike the product and will pay to avoid it. Latent demand is a strong need no current product satisfies (better smartphone cameras), declining demand is falling purchases (floppy disks, CDs), and overfull demand exceeds supply — bread and milk that keep selling out. Eight states in total; learn them as pairs."
    },
    {
        id: "c6",
        type: "short",
        q: "The consumer mind is a “closed system” by default. Explain the linear interest–openness relationship, what an “interrupt” does — and connect the answer to the top line / bottom line framework.",
        answerText: "The mind recycles familiar options and resists new information (information overload); it opens only when genuine interest is sparked. Interest and openness move together in a linear relationship: interested consumers become open to information, and openness signals underlying interest.\nInterrupts — promotional offers, celebrity endorsements, limited-time deals, exclusive collections — break the habitual loop at each consumer's unique breaking point and create openness to new possibilities.\nBusiness value: opening the system creates demand, and demand feeds the top line (products sold × price), from which the bottom line (revenue − costs) is paid. Without a top line there is no bottom line — true for every organisation, even NGOs.",
        explain: "Lecture 4 links the psychology to the P&L: marketing's job is to open closed minds — interest drives openness, and interrupts break the loop — and the payoff arrives as revenue, the top line, which alone makes a bottom line possible. That is why the marketer starts with the customer, not the product."
    }
];
/* ------------------------------------------------------------
   GROUP 3 — VALUE & EXCHANGE  (L5–L7 · the chai example ·
             CPV = benefits − costs · environments · Zomato ·
             value ≠ price · the luxury lever)
   ------------------------------------------------------------ */ const VALUE = [
    {
        id: "v1",
        type: "mcq",
        q: "The same chai sells for ₹20 at a roadside stall, ₹250 in a cafe and ₹500 at the airport. What does the lecture conclude from this?",
        options: [
            "Customers at the airport are being cheated",
            "The roadside tea is of the highest quality",
            "Perceived value is subjective and contextual — the same product carries different value as the consumer's situation changes",
            "Only the price changes; value stays identical"
        ],
        answer: 2,
        explain: "Same tea, three perceived values: economical casual consumption at ₹20, impression management and ambiance at ₹250, and no-alternatives availability at ₹500. Customer perceived value is a calculation made in the consumer's mind — benefits minus costs — so context, not the leaf, decides the number."
    },
    {
        id: "v2",
        type: "mcq",
        q: "In the CPV equation (value = benefits − costs), which of these is an ABSTRACT cost rather than a benefit component or a direct cost?",
        options: [
            "Extended psychological benefit",
            "Psychological stress such as worrying about parking and traffic",
            "The price printed on the bill",
            "Functional benefit such as wind resistance"
        ],
        answer: 1,
        explain: "Costs = the direct cost (price paid) + abstract costs: time, effort and energy, psychological stress, and disposal / after-sales considerations. Stressing about parking while driving for ice cream is abstract cost — which is why app delivery can win despite a higher bill. Benefits, in contrast, are psychological, functional, economic and extended psychological."
    },
    {
        id: "v3",
        type: "output",
        q: "Two music apps, one decision. Using the CPV equation, state which app offers higher customer perceived value — and exactly why.",
        code: "APPLICATION A\n  • Better playlists\n  • Frequent ads\n  • Complex six-step login\n  • Price: free\n\nAPPLICATION B\n  • Simpler playlists\n  • Minimal ads\n  • One-step login\n  • Price: free",
        answerText: "Application B has the higher CPV — even though Application A is free and playlist-rich.\nValue = benefits − costs. A's extra playlist benefit is wiped out by higher abstract costs: ad-attention plus the effort and friction of a six-step login. B slashes those abstract costs (one-step login, minimal ads), so benefits minus costs lands higher. Friction reduction is value creation.",
        explain: "The lecture's punchline: at the same price of zero, the app with less friction wins the value equation. Abstract costs — time, effort, stress — are real costs, and organisations create value either by raising benefits or by cutting these frictions down. Amazon Prime's add-to-cart inside OTT ads works the same way."
    },
    {
        id: "v4",
        type: "mcq",
        q: "GST reforms, inflation, UPI adoption and dietary culture belong to one environment; suppliers, customers and competitors belong to the other. Which classification is correct?",
        options: [
            "All of them are micro (task) environment",
            "GST / inflation / UPI / culture = broad (macro) environment; suppliers / customers / competitors = task (micro) environment",
            "GST / inflation / UPI / culture = task (micro); suppliers / customers / competitors = broad (macro)",
            "Suppliers and customers are macro forces"
        ],
        answer: 1,
        explain: "The task (micro) environment is the immediate circle the firm directly interacts with — suppliers, customers, competitors. The broad (macro) environment is the indirect weather system: demographic, political-legal, economic, socio-cultural, physical and technological elements — GST reforms, recessions, UPI payments, consumption culture, climate."
    },
    {
        id: "v5",
        type: "mcq",
        q: "Ordering a meal on Zomato, the customer pays money — and what else, per the lecture's exchange-system analysis?",
        options: [
            "Nothing else; the platform gives everything",
            "Personal information, time spent searching menus, and ratings/reviews — in return for the meal, convenience, choices, tracking and transparency",
            "Only attention, in return for discounts",
            "Effort only when an order goes wrong"
        ],
        answer: 1,
        explain: "Modern exchanges go far beyond money-for-product: the customer hands over money, personal data (address, contact, dietary preferences), time and ratings; they receive the meal plus convenience, multiple choices, real-time tracking and transparency. The payment moment is the transaction; everything around it is exchange — and repeat orders build the relationship."
    },
    {
        id: "v6",
        type: "short",
        q: "A ₹5 pen and a ₹5,000 pen can both sign the exam paper. Explain why value ≠ price, name the one benefit component that is uncapped, and connect it to the luxury sector (The Camellias).",
        answerText: "Value is subjective and contextual — for exam writing, the ₹5 pen delivers the same functional value as the ₹5,000 pen, so price alone never decides value.\nThe uncapped component is the EXTENDED PSYCHOLOGICAL benefit: social status, acceptability and how others perceive the user. Psychological, functional and economic benefits all have caps; branding can push perception indefinitely — which is how a ₹100 pen sells at ₹5,000.\nThe luxury sector runs on this lever: an ₹85–100 crore apartment at The Camellias sells ambience, views, amenities and association with prominent residents — status, not superior function.",
        explain: "Three distinctions in one answer: value ≠ price (subjective), features ≠ benefits (a fine nib is a feature; spill-free writing is the benefit), and benefits become value only when weighed against sacrifices. Luxury exists because the extended psychological benefit has no ceiling — exclusivity and belonging justify prices that function never could."
    }
];
/* ------------------------------------------------------------
   GROUP 4 — GAP & LOYALTY  (L8–L10 · ES/DS strategies ·
             the purchase chain · asymmetric satisfaction ·
             34-minute delivery · retention economics · impulse)
   ------------------------------------------------------------ */ const LOYALTY = [
    {
        id: "l1",
        type: "mcq",
        q: "Itch Guard shows the embarrassment of scratching in public; Kohler tells affluent buyers “your current state is great, but you deserve better”; Clean & Clear does both at once. Which ES/DS strategy belongs to which brand?",
        options: [
            "Itch Guard → raise desired state; Kohler → reduce existing state; Clean & Clear → reduce existing state only",
            "Itch Guard → reduce existing state; Kohler → elevate desired state; Clean & Clear → dual approach (reduce ES + raise DS)",
            "All three only elevate the desired state",
            "Itch Guard → dual approach; Kohler → reduce existing state; Clean & Clear → elevate desired state"
        ],
        answer: 1,
        explain: "Three ways to manufacture the gap that breaks inertia: pull the existing state down (Itch Guard's public-scratching embarrassment), pull the desired state up (Kohler's premium aspiration — the ES stays positive), or both at once (Clean & Clear: oily skin is a problem AND confident skin is deserved). The bigger the gap, the stronger the motivation to buy. TVs run the same playbook: Samsung pulls ES down and raises DS across mass price points (₹17,000–₹5,00,000), Sony raises DS for aspirational premium buyers."
    },
    {
        id: "l2",
        type: "short",
        q: "Write the value purchase chain in order, from the gap to loyalty — six links.",
        answerText: "Value creation (from the ES–DS gap) → Purchase intention (value perceived) → Actual purchase (impulse buys may skip intention) → Experience (using the product) → Satisfaction (performance vs expectations) → Loyalty (repeated satisfaction over time).",
        explain: "The chain is the backbone of Lecture 8: no gap, no value; no value, no intention; no purchase, no experience to be satisfied with — and loyalty is only satisfaction repeated across transactions. Note the escape hatch: impulse purchases jump straight to purchase, skipping the intention link."
    },
    {
        id: "l3",
        type: "mcq",
        q: "Satisfaction's impact on customers is asymmetric. Which statement matches the lecture?",
        options: [
            "Exceeding expectations delights customers proportionally more than failing hurts them",
            "Failing to meet expectations hurts significantly more than exceeding them pleases — and even delivering far above expectations (pizza in 10 minutes) can create doubt about the product's authenticity",
            "Customers feel exactly as strongly in both directions",
            "Satisfaction depends only on the objective performance delivered"
        ],
        answer: 1,
        explain: "Two asymmetries in one: the negative effect of falling short outweighs the positive effect of over-delivering, and there are upper and lower thresholds — a pizza in 10 minutes sounds great until the customer wonders what is in it. Satisfaction compares perceived performance against expectations; it is never raw quality alone."
    },
    {
        id: "l4",
        type: "output",
        q: "Same restaurant, same app, same 34-minute delivery, same missing cutlery — two very different ratings. From the panel, state each student's rating and the anchor that produced it.",
        code: "DELIVERY PANEL\n  Estimated time : 30–35 minutes\n  Actual time    : 34 minutes (both orders)\n  Food           : warm, packaging intact\n  Cutlery        : missing (both orders)\n\nSTUDENT 1 — previous orders were fast\n  → expectation anchor ≈ 25 minutes\nSTUDENT 2 — ordering during heavy rain\n  → expectation anchor ≈ 45–50 minutes",
        answerText: "Student 1 → 2★: the 34-minute delivery fell short of the 25-minute anchor set by previous fast orders, and the missing cutlery added frustration — likely to switch apps.\nStudent 2 → 5★: rain had set expectations at 45–50 minutes, so 34 minutes with warm food and reliable tracking beat the anchor — likely to become a loyal customer.",
        explain: "One objective performance, two satisfaction outcomes: satisfaction = perceived service − expected service, and context (past speed vs heavy rain) sets the expectation anchor. Marketers cannot change the 34 minutes; they can manage the anchor and the context around it."
    },
    {
        id: "l5",
        type: "mcq",
        q: "Which set of loyalty-economics numbers matches the lecture?",
        options: [
            "+5% retention → 5–10% more profit; new customer $100 vs loyal $90; conversion 60–70% vs 50%",
            "+5% retention → 20–90% more profit; acquiring a new customer costs 5× retention ($100 vs ~$20); conversion 60–70% for loyal customers vs 5–8% for new ones",
            "+5% retention → 200% more profit; new customer $50 vs loyal $40; conversion 30% vs 20%",
            "Retention has no measurable profit impact; conversion is identical for loyal and new customers"
        ],
        answer: 1,
        explain: "The three numbers that make retention the strategy: a 5-point retention lift raises profit 20–90%; acquisition costs five times retention ($100 vs $20); and loyal customers convert 60–70% of their shopping carts versus 5–8% for newcomers. Repeat customers also spend more than twice their original expenditure within two years."
    },
    {
        id: "l6",
        type: "short",
        q: "A customer is delighted with Zomato today and switches to Swiggy tomorrow for a 50%-off coupon. Define satisfaction vs loyalty to explain why this happens — and state what impulse buying is, including how it interacts with the purchase chain.",
        answerText: "Satisfaction is transaction-based — one purchase, one evaluation. Loyalty is continuing to choose, prefer and support a brand even when alternatives are available, built across multiple transactions over time. A satisfied customer can still defect (the 50% coupon), so satisfaction alone does not guarantee loyalty.\nImpulse buying — an unplanned purchase made intuitively, without deliberate thinking about need or want. It skips the intention stage of the purchase chain (stimulus → purchase), though it still has triggers — advertisements, discounts, limited-time offers — and involves some unconscious rational assessment.",
        explain: "The lecture's sharpest distinction: satisfied ≠ loyal. Loyalty only shows itself when alternatives exist and the customer stays anyway. Impulse buying sits at the other end of the chain — it jumps the intention link, but even impulses are triggered and quietly rationalised; point-of-purchase placement like chocolates near the billing counter exploits exactly this."
    }
];
/* ------------------------------------------------------------
   GROUP 5 — STP  (L11–L14 · heterogeneity · bases · behavioral
             & benefit segmentation · Tupo · SAFE · positioning 3Qs)
   ------------------------------------------------------------ */ const STP = [
    {
        id: "s1",
        type: "mcq",
        q: "100 Netflix users look identical from a distance. Zoom in, and the lecture finds…",
        options: [
            "One homogeneous audience",
            "Two segments: heavy and light viewers",
            "Six distinct content-preference segments — K-drama, true crime, anime, sitcoms, documentaries, scrollers — each needing different messaging",
            "Segments that marketers create rather than discover"
        ],
        answer: 2,
        explain: "Market heterogeneity: consumers differ in who they are, what they want, why they buy and how they buy. The 100 users resolve into six content segments, each with its own messaging — K-drama fans get emotional hooks, true-crime fans get mystery and twists. And the principle: marketers do not create segments, they identify them."
    },
    {
        id: "s2",
        type: "mcq",
        q: "Zudio stocks winter jackets in Delhi and monsoon-friendly clothing in Mumbai; Bajaj Pulsar targets males aged 17–24 (“Definitely Male”); Nike splits buyers into fitness-focused, sport aspirers, style & status seekers and sustainability-conscious. Which segmentation bases are these, in order?",
        options: [
            "Demographic, geographic, psychographic",
            "Geographic, demographic, psychographic",
            "Psychographic, geographic, demographic",
            "Behavioral, benefit, psychographic"
        ],
        answer: 1,
        explain: "Geographic = location and climate (Zudio's city-wise stock). Demographic = measurable traits — age, gender, income (Pulsar's 17–24 males; L'Oréal's 20+/30+/40+ face-cream variants, same base product with 70–80% identical ingredients but different promised benefits). Psychographic = how people think — lifestyle, values, attitudes (Nike's four mindsets, 15 segments in all)."
    },
    {
        id: "s3",
        type: "output",
        q: "Surf Excel read the detergent market behaviorally. From the panel, state the product answer for each segment, and the market-coverage jump the lecture credits to this segmentation.",
        code: "SEGMENT             BEHAVIOR                    PRODUCT ANSWER\nHeavy users         wash frequently             ?\nMachine-wash users  convenience + stain removal ?\nOccasional users    buy rarely                  ?\nValue seekers       chase offers                ?\n\nCOVERAGE: from ___% of potential consumers to ___%",
        answerText: "Heavy users → value packs (more washes, economical per wash)\nMachine-wash users → liquid detergents (superior stain removal, machine-friendly formulations)\nOccasional users → small sachets (no product waste)\nValue seekers → promotional mega packs (“buy one get one”)\nCoverage: from 25% of potential consumers to 75%.",
        explain: "Behavioral segmentation divides by usage rate, mode of usage, purchase frequency, pack size and promotional sensitivity — and Surf Excel built a product for each behaviour. The payoff is the exam number: without segmentation only 25% would buy; with it, up to 75% of the market is effectively targeted. Colgate does the same by benefit: Strong Teeth, Max Fresh, Visible White, Sensitive and Total — five variants, five sought benefits."
    },
    {
        id: "s4",
        type: "short",
        q: "Tupo built a personal-care brand nobody had claimed. State the age gap it filled, its dual target audience, the trust lever it used instead of “organic/natural” claims — and the price it commanded against the standard ₹150 for a 300ML shampoo.",
        answerText: "Gap — children aged 3–15: too old for baby products (0–2 years), too young for adult products (16+).\nDual targeting — growing children (who develop their own preferences and ask for the brand) AND parents (who control the wallet and prioritise safety over price).\nTrust lever — positioned as dadi-nani recommended home remedies (turmeric, hibiscus, amla, shikakai) rather than marketed as “organic/natural”.\nPricing — ₹450 for 300ML against the standard ₹150: a 3× premium parents willingly paid for age-appropriate, safe formulation.",
        explain: "Tupo is niche creation end to end: an unclaimed age segment, a two-sided target (preference-maker + purchaser), trust borrowed from grandparents' remedies, and a premium price justified by clear value differentiation. Same playbook as Cetaphil, Mamaearth and Plum — underserved segments become whole categories."
    },
    {
        id: "s5",
        type: "mcq",
        q: "In the SAFE framework for targeting, what does “E” stand for — and which pair are the two dangerous targeting assumptions the lecture warns about?",
        options: [
            "E = Efficiency; mistakes: ignoring competitors and over-spending on ads",
            "E = Economics (serving the segment must make financial sense); mistakes: assuming the largest segment is automatically the best target, and assuming the fastest-growing segment is the right one",
            "E = Engagement; mistakes: targeting everyone and targeting no one",
            "E = Expansion; mistakes: chasing loyal customers only and ignoring new segments"
        ],
        answer: 1,
        explain: "SAFE = Size, Accessibility, Fitment, Economics — the segment must be big enough, reachable, aligned with what the brand offers, and profitable to serve. The two traps: biggest ≠ best (a smaller segment can out-earn it on margin — Spotify's subsidised student plan did exactly that), and fastest-growing ≠ right fit. If everyone is your priority, nobody is."
    },
    {
        id: "s6",
        type: "short",
        q: "Positioning answers three fundamental questions. Answer all three for Sensodyne.",
        answerText: "Who is the target audience? — Consumers experiencing tooth sensitivity (not buyers seeking whiteness, freshness or general oral hygiene).\nWhat category are we competing in? — The toothpaste category.\nWhy should this target choose us? — Specialised sensitivity relief and protection that general-purpose toothpastes like Colgate or Close-Up do not deliver.\nTogether the three answers carve a distinct space in the mind: “the sensitivity toothpaste”.",
        explain: "Who / what category / why us — the three questions make positioning a deliberate act, not an accident. Sensodyne's power comes from narrowing: a specific audience, a known category, a differentiated why. Dettol = safety, Bisleri = mineral water, Coca-Cola = cola — all deliberate mental associations, never accidental ones."
    }
];
/* ------------------------------------------------------------
   GROUP 6 — POSITIONING  (L15–L17 · the Accor map · frames of
             reference · four levels · POD→POP · three circles ·
             Oral-B & Dettol vs Savlon)
   ------------------------------------------------------------ */ const POSITIONING = [
    {
        id: "p1",
        type: "mcq",
        q: "Accor runs Ibis (₹3,000–4,000/night, standard rooms), Novotel & Mercure (₹5,000–7,000, better designs) and Pullman & Sofitel Legend (₹9,000–15,000+). What is the strategic point of this map?",
        options: [
            "Accor is confused about its target market",
            "One parent company can position multiple chains at different price tiers to capture several segments without diluting any single brand",
            "A higher price always means higher value",
            "The chains secretly serve the same single segment"
        ],
        answer: 1,
        explain: "Perceptual mapping across tiers: economy (Ibis), mid-range (Novotel/Mercure), premium (Pullman/Sofitel) — one group, three different minds. Because each chain carries its own positioning, no tier drags the others down; ITC does the same with five-star properties plus boutique chains for price-sensitive travellers."
    },
    {
        id: "p2",
        type: "mcq",
        q: "Maruti's Gypsy (1985) was India's first SUV with no direct rivals. What killed its market share, per the lecture?",
        options: [
            "A factory fire halted production",
            "It ignored the EXTENDED frame of reference — Tata Sumo and Mahindra Scorpio arrived with AC, power steering, power windows, better mileage and ride quality, and consumers switched",
            "The government banned the model",
            "Consumers suddenly stopped liking boxy designs"
        ],
        answer: 1,
        explain: "Step 1 of positioning is the frame of reference. Gypsy's natural frame (direct SUV rivals) was empty — but the extended frame (indirect and future substitutes, like olive oil and ghee versus cooking oil) was not: Sumo and Scorpio redefined what an SUV must offer. One foot in the present, one in the future — positioning that ignores the extended frame wins briefly and loses badly."
    },
    {
        id: "p3",
        type: "mcq",
        q: "NIKEiD lets customers design their own shoes; “Share a Coke with Rahul” prints individual names on bottles. Which level of micro-marketing is this — and which level do Coca-Cola, Amul butter and Dettol occupy?",
        options: [
            "Both are mass marketing",
            "NIKEiD / Share a Coke = individual (market of one); Coca-Cola / Amul / Dettol = mass market",
            "NIKEiD / Share a Coke = niche; Coca-Cola / Amul / Dettol = segment",
            "NIKEiD / Share a Coke = segment; Coca-Cola / Amul / Dettol = market of one"
        ],
        answer: 1,
        explain: "The ladder: mass (everyone — Coca-Cola, Amul, Dettol) → segment (Dove Men Care, Myntra Forward for Gen Z) → niche (Nomatic backpacks, Lush, Beeswrap) → market of one (NIKEiD, Share a Coke, Raymond's Made-to-Measure, matrimonial sites). Maximum personalisation sits at the top: premium prices and the strongest individual relationships."
    },
    {
        id: "p4",
        type: "short",
        q: "Gillette's three-blade razor was once a differentiator; today even five blades barely move the market. Define POP and POD, explain the POD→POP evolution with the Gillette ladder, and state the strategic consequence.",
        answerText: "POP (point of parity) — attributes shared with all competitors; the minimum standard to be considered and credible in the category (every razor shaves). Removing a POP destroys competitive credibility.\nPOD (point of differentiation) — unique attributes competitors do not offer, valued by consumers (Gillette's three blades against two-blade rivals).\nEvolution — competitors copied three blades, so it slid from POD to POP; Gillette answered with the five-blade Fusion as the new POD. PODs have finite lifespans: copied today, commodity tomorrow.\nConsequence — differentiation demands continuous innovation; keep creating new PODs or fade into price competition.",
        explain: "The razor ladder is the exam's favourite cycle: POD → copied → POP → new POD. Lysol's fragrance over plain phenyl, Oral-B's fading bristles — same story. The strategic consequence is the mark-scorer: without continuous innovation, today's advantage becomes tomorrow's entry ticket."
    },
    {
        id: "p5",
        type: "mcq",
        q: "In the three-circles model (consumer desires × competitor features × your features), where exactly do POP and POD live?",
        options: [
            "POP = consumer desire ∩ your features only; POD = all three circles",
            "POP = the intersection of all three circles; POD = consumer desire ∩ your features, excluding competitor features",
            "Both sit inside the competitor circle",
            "POP = your features alone; POD = consumer desires alone"
        ],
        answer: 1,
        explain: "Where all three overlap — consumers want it, competitors have it, you have it — that is parity: the category minimum. Where desire and YOUR features overlap but competitors' do not, that is differentiation: your unique value proposition. Features neither desired nor unique sit in invalid space — and Dettol's motion-sensor dispenser shows even a real POD can stall if impractical for home use."
    },
    {
        id: "p6",
        type: "output",
        q: "Read the case file and state exactly: Savlon's POD, Dettol's counter-reframe, and Oral-B's POD — with what each did to the consumer's narrative.",
        code: "CASE FILE\nDettol : antiseptic market leader; stings on application\nSavlon : matches the antiseptic POP; launches a “no sting”\n         formula + emotional ads (a child feels no pain)\nDettol : response campaign\nOral-B : crowded toothbrush market; blue bristles fade to white\n\nSTATE THE POD / REFRAME FOR EACH",
        answerText: "Savlon's POD — the “no sting” formula, advertised emotionally (a child feels no pain), taking share on a pain point Dettol had ignored.\nDettol's counter-POD — “sting means it's working”: the limitation reframed as proof of effectiveness, regaining market leadership.\nOral-B's POD — colour-changing (blue → white) bristles that signal when to replace the brush: a consumer benefit rather than a product feature, which differentiated the brand overnight — until competitors copied it and it slid toward POP.",
        explain: "Positioning is narrative control: Savlon attacked with the absence of pain; Dettol refused the frame and made the sting the evidence. Oral-B shows the constructive route — a benefit consumers instantly understand. All three prove the rule: a POD must be valued by consumers and clearly communicated, or it is just a spec."
    }
];
/* ------------------------------------------------------------
   GROUP 7 — CONSUMER MIND  (L18–L22 · why people buy · eras &
             nudges · five stages · messy middle · journey
             variations · the autopsy · the framework)
   ------------------------------------------------------------ */ const CONSUMER = [
    {
        id: "k1",
        type: "mcq",
        q: "“Marketing does not operate on an empty mind.” The lecture's answer to WHY people buy is that consumers purchase to…",
        options: [
            "Collect products",
            "Reach, restore, maintain or protect a desired state — the gap between where they are and where they wish to be",
            "Follow instructions from family",
            "Maximise savings on every rupee spent"
        ],
        answer: 1,
        explain: "Every purchase serves the desired state — reaching it, restoring it, maintaining or protecting it. And the mind is never empty: marketing engages existing memories, experiences, expectations, identities, biases and goals. That is why the Swiggy mango ad works on imagined consumption — water droplets and fresh visuals make the fruit feel real before it arrives."
    },
    {
        id: "k2",
        type: "short",
        q: "Trace the three eras of consumer behavior (classical → cognitive → contemporary), and state the exact difference between a heuristic and a nudge.",
        answerText: "Classical era (1950s–60s) — consumers assumed rational; predictable, need-based choices under classical economics.\nCognitive revolution (1970s–90s) — Kahneman & Tversky show consumers are irrational (“Judgment under Uncertainty”); choices ride on memories, beliefs and preferences. Tool: HEURISTICS.\nContemporary era (present) — Richard Thaler's NUDGE theory: design the choice environment so consumers drift toward decisions good for them ethically and socially, without restricting freedom (stairs placed before elevators, bestseller labels, the trash-disposal ramp).\nDifference — heuristics are mental shortcuts INSIDE the consumer used to compare options (ratings, prices, discounts); nudges are designs AROUND the consumer that guide behaviour without direct persuasion.",
        explain: "Rational → irrational → influenced: that arc is the domain's history. The exam distinction is direction — heuristics live in the head (the Nutella listing's 4.5 stars and ₹311 discount are shortcut inputs), nudges live in the environment (a ramp that turns trash disposal into a game). One compares options; the other designs the choice."
    },
    {
        id: "k3",
        type: "mcq",
        q: "Arrange the consumer buying decision process in the theoretical order.",
        options: [
            "Information search → need recognition → purchase → evaluation of alternatives → post-purchase",
            "Need/problem recognition → information search → evaluation of alternatives → purchase decision → post-purchase behavior",
            "Purchase → evaluation → search → recognition → post-purchase",
            "Need recognition → evaluation → information search → post-purchase → purchase"
        ],
        answer: 1,
        explain: "Five stages in order: recognise the gap (hunger to a new laptop), search (Amazon, stores, friends, reviews), evaluate alternatives (weighted attributes — memory, graphics, price), purchase, and post-purchase — the stage theory glosses over but reality punishes: satisfaction, regret or guilt there decides retention and loyalty."
    },
    {
        id: "k4",
        type: "mcq",
        q: "Cart abandonment, wishlists, comparing prices across Amazon, Flipkart and physical stores. The lecture bundles all of this into…",
        options: [
            "Proof that consumers always follow the five stages linearly",
            "The “messy middle”: an exploration–evaluation infinity loop that only breaks when a strong enough trigger converts it into a purchase",
            "A pricing failure by e-commerce firms",
            "The post-purchase stage doing its job"
        ],
        answer: 1,
        explain: "Real journeys are non-linear: consumers loop endlessly between exploring options and evaluating them — carts fill and empty, orders get cancelled. A strong enough stimulus (a discount, a notification, a recommendation) finally breaks the loop into purchase. Abandonment is not a failure of the model; it IS the model."
    },
    {
        id: "k5",
        type: "mcq",
        q: "Buying a 70%-off item you never planned for; a parent instructing you to buy ketchup; going back to searching after new information surfaces during evaluation. Which journey variations are these?",
        options: [
            "Looping; reversing; skipping",
            "Skipping (impulse jumps stimulus → purchase); skipping (direct instruction bypasses the first three stages); reversing (evaluation sends you back to search)",
            "Reversing; looping; skipping",
            "All three are standard linear journeys"
        ],
        answer: 1,
        explain: "Skipping: impulse buys jump from stimulus straight to purchase, and clear instructions (“buy ketchup”) skip recognition, search and evaluation entirely. Reversal: new information pushes the consumer backwards from evaluation to search. Looping: the whole journey can circle on feedback. Linear theory, messy reality."
    },
    {
        id: "k6",
        type: "short",
        q: "State the integrated consumer behavior framework cycle in order. Then run the “autopsy of a purchase”: for the Moroccan-oil shampoo, name the trigger, the search, the alternatives considered, the deciding factor and the post-purchase feeling.",
        answerText: "Framework cycle — unfulfilled need/want/desire → fear or tension → internal drive → behavior (individual-specific) → consumption → goal fulfillment and tension reduction.\nAutopsy (Moroccan oil shampoo) — Trigger: internal (the existing shampoo running out). Search: Nykaa, Amazon, retail stores (price, expiry dates, availability). Alternatives considered: L'Oréal, Kerastase, Nat Habit, Flam. Deciding factor: a 15% discount on Nykaa. Post-purchase: satisfaction and confidence of nourished hair.\nAnd the drive→behavior step bends to the person: the same hunger-tension makes one cook, another order in, another eat what is at home — filtered by perception, personality, learning and attitudes.",
        explain: "The framework explains the engine (tension reduction), and the autopsy shows it running in a real purchase — the discount that closed the deal is a heuristic doing its work in the evaluation stage. Lecture 22's recap compresses the whole L19–21 arc into exactly these pieces: the five stages, the messy-middle loop, and the framework cycle."
    }
];
/* ------------------------------------------------------------
   GROUP 8 — PSYCH & BIAS  (L23–L28 · Freud · Maslow · Herzberg ·
             theory match · perception & almonds · Gestalt ·
             four cognitive biases)
   ------------------------------------------------------------ */ const PSYCHOLOGY = [
    {
        id: "b1",
        type: "mcq",
        q: "“I hit snooze because part of me wants the bed, and part of me fears my boss.” In Freudian terms, which two components are fighting — and what share of decision-making does the conscious mind own?",
        options: [
            "Ego vs Super Ego; 50%",
            "ID vs Super Ego; 10%",
            "ID vs Ego; 90%",
            "Super Ego vs conscious; 10%"
        ],
        answer: 1,
        explain: "The ID wants the bed (basic instinct, immediate desire); the Super Ego sounds the boss alarm (morality, what is correct) — with the Ego mediating reality in between. Freud's iceberg: only 10% of decision-making is conscious; 90% runs below the surface. The same trio eats the samosa: the ID wants it now, the Ego negotiates (just the cover, to balance desire with health), the Super Ego refuses for health reasons."
    },
    {
        id: "b2",
        type: "short",
        q: "Match each confession to its theory and justify: (1) “I can't focus because the hostel Wi-Fi is down.” (2) “My salary is fine, but my work is boring and I nap at my desk.” (3) “I have food, friends and a job; now I want to write a novel.” Then state Maslow's five levels in order.",
        answerText: "(1) Maslow — an unmet basic need (connectivity) blocks everything above it; behaviour is driven by the lowest unmet level.\n(2) Herzberg — hygiene factors (salary, conditions) are satisfied but motivating factors (meaningful work, recognition, growth) are absent; their absence breeds boredom, not dissatisfaction.\n(3) Maslow again — with the lower floors furnished, the drive moves toward self-actualization.\nMaslow's order: Physiological → Safety → Social (belonging, love) → Esteem → Self-actualization.",
        explain: "The matching skill is spotting the driver: a blocked basic need (Maslow — a hungry person buys food, not a luxury watch), hygiene without motivators (Herzberg's Free Chai Rule — removing free chai creates discontent, but its presence never made anyone love the job), and self-actualization after the lower levels (Maslow). Remember too: consumers can skip levels — the climb is not strictly linear."
    },
    {
        id: "b3",
        type: "mcq",
        q: "Consumers store “toothpaste” as a broad category by default. Sensodyne trains them to store “sensitivity relief”, Close-Up “freshness”, Colgate Total “overall protection”. What is this marketing move called — and which perception characteristic does it exploit?",
        options: [
            "Brand extension; perception is permanent",
            "Building perceptual product categories; perception is subjective — the same product means different things to different consumers",
            "Mass marketing; perception is objective",
            "Repositioning; perception is fixed at birth"
        ],
        answer: 1,
        explain: "The default is broad product categories (“toothpaste”, “cars”, “ketchup”); the marketer's goal is perceptual product categories built on specific needs — which cuts direct price competition and grows the market. Horlicks runs five of them (Growth Plus, Light, Jr., Mother's, Women's). Perception is selective, subjective, constructive and abstract — never a camera; and since attitude = f(object, attributes), the attributes a brand attaches (Borges tea's 2× antioxidants and 4× vitamin C against green tea) steer the attitude that follows."
    },
    {
        id: "b4",
        type: "output",
        q: "The almonds experiment, in one panel. State: Option D's pre-price rating, the four prices as revealed, what most budget-conscious consumers did after the reveal — and who stayed with D.",
        code: "ALMONDS EXPERIMENT — same almonds, different packaging\nA  basic packaging         → acceptable, unremarkable\nB  unimpressive packaging  → ~4/10\nC  transparent packaging   → ~6/10 (you can see the product)\nD  premium packaging       → ~9/10 (California almonds, gluten-free,\n     high fibre, antioxidants, reusable zip-lock)\n\nPRICES REVEALED:  A ₹1,000   B ₹800   C ₹550   D ₹2,700",
        answerText: "D's pre-price rating: ~9/10 — the most preferred, though the almonds were essentially identical.\nPrices: A ₹1,000, B ₹800, C ₹550, D ₹2,700.\nAfter the reveal: most switched to Option C (₹550, the most economical) or Option B.\nWho stayed with D: consumers with higher purchasing power — for them price itself became a perceptual cue: expensive = better quality.",
        explain: "Marketing rarely changes the physical product; it changes the meaning attached to it — packaging communicated California, gluten-free and antioxidants, and preference followed the meaning. The price reveal then split the room: price as a constraint for most, price as a quality signal for the affluent. Perception, not almonds, was for sale."
    },
    {
        id: "b5",
        type: "mcq",
        q: "Apple's iPod ads: black background, white cords and device. Sensodyne: white teeth against a black background. Which Gestalt principle are both exploiting?",
        options: [
            "Proximity",
            "Figure and ground",
            "Closure",
            "Continuity"
        ],
        answer: 1,
        explain: "Figure and ground: the object pops because the negative space contrasts with it. The rest of the lab: continuity (the eye follows lines — arrow signs, e-commerce flows from product to price to ratings), grouping/similarity (school uniforms, store sections), proximity (spacing on notice boards; price placed beside original price and discount), and closure (the consumer mentally completes the incomplete). The brain predicts and organises — it never processes like a camera."
    },
    {
        id: "b6",
        type: "mcq",
        q: "Match each to its bias: (1) Zoom's “Save 16%” on annual billing; (2) edX's “15,000 people learning on edX today”; (3) “Only 3 rooms left at this price”; (4) baristas calling out and writing your name on the cup.",
        options: [
            "Scarcity, anchoring, endowment, bandwagon",
            "Anchoring, bandwagon, scarcity, endowment",
            "Bandwagon, anchoring, endowment, scarcity",
            "Endowment, scarcity, bandwagon, anchoring"
        ],
        answer: 1,
        explain: "Anchoring fixes attention on one element (“Save 16%” pulls you into the annual commitment). Bandwagon borrows the crowd's credibility (15,000 learners; 1,157 reviews at 8.5 beating 281 at 8.1). Scarcity accelerates the decision (“only 3 rooms left” — inventory that often restocks within 24 hours). Endowment attaches value to ownership: the classroom gap ran about 50% (sell your ₹20,000 phone at ₹15,000–18,000; offer ₹7,000–10,000 for the same used phone), and the name on the cup manufactures exactly that ownership feeling — one reason retention costs only about 1/7th to 1/10th of acquisition."
    }
];
const MKTG_EXAM_BANKS = {
    foundations: {
        group: "foundations",
        title: "Foundations",
        subtitle: "what marketing really means · anticipation (BlackBerry · Hertz · Blockbuster) · top line & bottom line · the cold-coffee P&L · the pen test",
        topics: "Why marketing · anticipation · top line/bottom line · marketing vs selling",
        questions: FOUNDATIONS
    },
    concepts: {
        group: "concepts",
        title: "Concepts",
        subtitle: "AMA definition · outside-in vs inside-out · industry ↔ market, four flows · ten marketable entities · need-want-demand · eight demand states · the closed system",
        topics: "Definitions · four flows · marketable entities · need/want/demand · demand states · closed system",
        questions: CONCEPTS
    },
    value: {
        group: "value",
        title: "Value & Exchange",
        subtitle: "₹20 / ₹250 / ₹500 chai · CPV = benefits − costs · benefit components & abstract costs · micro & macro environment · the Zomato exchange · value ≠ price · the luxury lever",
        topics: "Chai & CPV · environments · exchange systems · value vs price · luxury lever",
        questions: VALUE
    },
    loyalty: {
        group: "loyalty",
        title: "Gap & Loyalty",
        subtitle: "ES/DS strategies (Itch Guard · Kohler · Clean & Clear) · the value purchase chain · asymmetric satisfaction · the 34-minute delivery · retention economics · impulse buying",
        topics: "ES/DS gap · purchase chain · satisfaction asymmetry · loyalty economics · impulse",
        questions: LOYALTY
    },
    stp: {
        group: "stp",
        title: "STP",
        subtitle: "heterogeneity & the Netflix six · geographic / demographic / psychographic bases · Surf Excel 25% → 75% · Colgate's five benefits · the Tupo case · SAFE targeting · positioning's 3 questions",
        topics: "Heterogeneity · bases · behavioral & benefit · Tupo · SAFE · positioning 3Qs",
        questions: STP
    },
    positioning: {
        group: "positioning",
        title: "Positioning",
        subtitle: "the Accor map · natural vs extended frames (the Gypsy King lesson) · mass → market of one (NIKEiD · Share a Coke) · POD→POP (Gillette's razor ladder) · the three circles · Oral-B & Dettol vs Savlon",
        topics: "Accor map · frames of reference · four levels · POD/POP · three circles · case files",
        questions: POSITIONING
    },
    consumer: {
        group: "consumer",
        title: "Consumer Mind",
        subtitle: "why people buy · rational → irrational → nudged · the five stages · the messy middle · skip / reverse / loop · the shampoo autopsy · the integrated framework",
        topics: "Why buy · eras & nudges · five stages · messy middle · journey variations · autopsy · framework",
        questions: CONSUMER
    },
    psychology: {
        group: "psychology",
        title: "Psych & Bias",
        subtitle: "Freud's iceberg · Maslow's pyramid · Herzberg's free chai · theory match · perception & the almonds experiment · the Gestalt lab · four cognitive biases",
        topics: "Freud · Maslow · Herzberg · perception & Gestalt · attitude & ABC · biases",
        questions: PSYCHOLOGY
    }
};
const MKTG_EXAM_GROUPS = [
    "foundations",
    "concepts",
    "value",
    "loyalty",
    "stp",
    "positioning",
    "consumer",
    "psychology"
];
const MKTG_TOTAL_QUESTIONS = MKTG_EXAM_GROUPS.reduce(_c = (n, g)=>n + MKTG_EXAM_BANKS[g].questions.length, 0);
_c1 = MKTG_TOTAL_QUESTIONS;
var _c, _c1;
__turbopack_context__.k.register(_c, "MKTG_TOTAL_QUESTIONS$MKTG_EXAM_GROUPS.reduce");
__turbopack_context__.k.register(_c1, "MKTG_TOTAL_QUESTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mktg/MktgHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MktgHero",
    ()=>MktgHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   MktgHero — shelf 06 of THE ATLAS.

   "Principles of Marketing" — the lecture sequence hero. Every
   lecture card carries its "Lecture N" eyebrow, and the notes
   below open with a matching "Principles of Marketing Lecture N"
   band (see MktgLectureHead in MktgApp). Palette: Boutique Teal
   & Champagne. All facts from /upload/marketing-lectures.txt.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/lectures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TEAL = "#0f766e";
const TEAL_BRIGHT = "#14b8a6";
const GOLD = "#a97d2c";
const GOLD_LITE = "#e3c26b";
/* floating boutique shapes — tag, bubble, star, ring */ const HERO_SHAPES = [
    {
        kind: "tag",
        top: "14%",
        left: "5%",
        size: 56,
        dur: 7.4,
        delay: 0,
        rot: -10,
        color: TEAL
    },
    {
        kind: "bubble",
        top: "66%",
        left: "8%",
        size: 50,
        dur: 8.6,
        delay: 0.8,
        rot: 8,
        color: GOLD
    },
    {
        kind: "star",
        top: "18%",
        left: "88%",
        size: 52,
        dur: 7.9,
        delay: 0.4,
        rot: 6,
        color: GOLD_LITE
    },
    {
        kind: "ring",
        top: "62%",
        left: "90%",
        size: 48,
        dur: 8.9,
        delay: 1.4,
        rot: -6,
        color: TEAL_BRIGHT
    },
    {
        kind: "tag",
        top: "40%",
        left: "3%",
        size: 42,
        dur: 9.3,
        delay: 2,
        rot: 5,
        color: GOLD
    },
    {
        kind: "bubble",
        top: "82%",
        left: "46%",
        size: 40,
        dur: 8.1,
        delay: 1.1,
        rot: -8,
        color: TEAL_BRIGHT
    }
];
function HeroShape({ b }) {
    const s = b.size;
    const paths = {
        tag: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${s * 0.42} 3 L ${s - 3} ${s * 0.12} L ${s * 0.88} ${s * 0.62} L ${s * 0.34} ${s * 0.5} Z`
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s * 0.74,
                    cy: s * 0.26,
                    r: 2.4
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        bubble: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: `M 4 5 h ${s - 8} v ${s * 0.42} h -${s * 0.42} l -${s * 0.16} ${s * 0.2} v -${s * 0.2} h -${s * 0.26} Z`
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgHero.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, this),
        star: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: `M ${s / 2} 3 L ${s * 0.62} ${s * 0.34} L ${s - 3} ${s * 0.36} L ${s * 0.7} ${s * 0.58} L ${s * 0.8} ${s * 0.9} L ${s / 2} ${s * 0.7} L ${s * 0.2} ${s * 0.9} L ${s * 0.3} ${s * 0.58} L 3 ${s * 0.36} L ${s * 0.38} ${s * 0.34} Z`
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgHero.tsx",
            lineNumber: 45,
            columnNumber: 11
        }, this),
        ring: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.34
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.18,
                    strokeDasharray: "3 4"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": true,
        className: "pointer-events-none absolute",
        style: {
            top: b.top,
            left: b.left,
            rotate: b.rot,
            opacity: 0.5
        },
        animate: {
            y: [
                0,
                -12,
                0
            ]
        },
        transition: {
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s * 0.8,
            viewBox: `0 0 ${s} ${s * 0.8}`,
            fill: "none",
            stroke: b.color,
            strokeWidth: 2,
            children: paths[b.kind]
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgHero.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgHero.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = HeroShape;
function MktgHero({ activeId, onSelect, onPractice, seen, totalQuestions }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const q = query.trim().toLowerCase();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MktgHero.useMemo[filtered]": ()=>{
            const words = q.split(/\s+/).filter(Boolean);
            if (words.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"].filter({
                "MktgHero.useMemo[filtered]": (l)=>{
                    const hay = [
                        l.n ? `lecture ${l.n}` : "recap",
                        l.code.toLowerCase(),
                        l.title.toLowerCase(),
                        l.blurb.toLowerCase(),
                        ...l.chapters.map({
                            "MktgHero.useMemo[filtered].hay": (c)=>`${c.label} ${c.desc}`.toLowerCase()
                        }["MktgHero.useMemo[filtered].hay"])
                    ].join(" ");
                    return words.every({
                        "MktgHero.useMemo[filtered]": (w)=>hay.includes(w)
                    }["MktgHero.useMemo[filtered]"]);
                }
            }["MktgHero.useMemo[filtered]"]);
        }
    }["MktgHero.useMemo[filtered]"], [
        q
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "top",
        className: "relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl",
                        style: {
                            background: "rgba(20,184,166,.16)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl",
                        style: {
                            background: "rgba(227,194,107,.18)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl",
                        style: {
                            background: "rgba(15,118,110,.10)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 1200 620",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute inset-0 h-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M -30 500 C 220 470 300 300 540 330 C 760 356 880 200 1230 140",
                        fill: "none",
                        stroke: GOLD,
                        strokeWidth: "2",
                        strokeDasharray: "3 10",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 0.5
                        },
                        transition: {
                            duration: 2.6,
                            ease: "easeInOut",
                            delay: 0.4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 300,
                            y: 380
                        },
                        {
                            x: 540,
                            y: 330
                        },
                        {
                            x: 940,
                            y: 190
                        }
                    ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: p.x,
                            cy: p.y,
                            r: 6,
                            fill: "none",
                            stroke: TEAL,
                            strokeWidth: 2,
                            style: {
                                transformBox: "fill-box",
                                transformOrigin: "center"
                            },
                            animate: {
                                opacity: [
                                    0.2,
                                    0.85,
                                    0.2
                                ],
                                scale: [
                                    1,
                                    1.4,
                                    1
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.7
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: HERO_SHAPES.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroShape, {
                        b: b
                    }, i, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                "Shelf 06 · Principles of Marketing · IIT Jodhpur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#1f2b2b] md:text-7xl",
                            children: [
                                "Principles of",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-clip-text text-transparent",
                                    style: {
                                        backgroundImage: `linear-gradient(120deg,${TEAL_BRIGHT},${TEAL} 45%,${GOLD})`
                                    },
                                    children: "Marketing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 240,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5f7472]",
                            children: "Why do people buy — and why do they keep buying? From the chai counter to the messy middle of a purchase decision, from anticipation to the four cognitive biases: this course, drawn as living machines — value equations you can balance, gaps you can widen, biases you can watch fire."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-8 w-full max-w-3xl text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "mktg-lecture-search",
                                    className: "sr-only",
                                    children: "Search the lecture sequence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#a97d2c]",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "mktg-lecture-search",
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            placeholder: "Search the sequence — try “5”, “STP”, or “biases”…",
                                            autoComplete: "off",
                                            className: "w-full rounded-2xl border border-[#e3ddcf] bg-[#fdfcfa]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#1f2b2b] shadow-[0_10px_30px_-14px_rgba(31,43,43,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#a97d2c] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "scrollbar-thin mt-3 grid max-h-[23rem] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2",
                                    "aria-label": "Lecture sequence — pick a lecture to open its notes below",
                                    children: filtered.map((l)=>{
                                        const isActive = l.id === activeId;
                                        const readCount = l.chapters.filter((c)=>seen.has(c.id)).length;
                                        const allRead = l.chapters.length > 0 && readCount === l.chapters.length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onSelect(l.id),
                                                "aria-pressed": isActive,
                                                className: `group flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${isActive ? "border-[#0f766e] bg-white shadow-[0_16px_40px_-18px_rgba(15,118,110,.45)] ring-2 ring-[#14b8a6]/25" : "border-[#e3ddcf] bg-[#fdfcfa]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(31,43,43,.4)]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[.72rem] font-black ${isActive ? "text-white" : ""}`,
                                                        style: isActive ? {
                                                            background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`,
                                                            boxShadow: "0 6px 14px -6px rgba(15,118,110,.6)"
                                                        } : {
                                                            background: "#e7f2ef",
                                                            color: TEAL
                                                        },
                                                        children: l.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[.58rem] font-extrabold uppercase tracking-[.18em]",
                                                                        style: {
                                                                            color: GOLD
                                                                        },
                                                                        children: l.n ? `Lecture ${l.n}` : "Recap"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    allRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "h-3.5 w-3.5",
                                                                        style: {
                                                                            color: "#5f9e58"
                                                                        },
                                                                        "aria-label": "Every chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 31
                                                                    }, this) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto font-mono text-[.6rem] font-bold text-[#a97d2c]",
                                                                        children: [
                                                                            readCount,
                                                                            "/",
                                                                            l.chapters.length,
                                                                            " read"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `mt-0.5 block text-[.94rem] font-extrabold leading-tight ${isActive ? "text-[#0f766e]" : "text-[#1f2b2b]"}`,
                                                                children: l.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-[.76rem] leading-snug text-[#5f7472]",
                                                                children: l.blurb
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 flex flex-wrap gap-1.5",
                                                                children: l.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-[#dbeae5] bg-[#f4faf8] px-2 py-0.5 text-[.62rem] font-bold text-[#0f5f58]",
                                                                        children: c.label
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, this),
                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-0.5 shrink-0 self-center rounded-full bg-[#0f766e]/10 px-2 py-1 text-[.55rem] font-black uppercase tracking-[.14em] text-[#0f766e]",
                                                        children: "reading"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 27
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                lineNumber: 192,
                                                columnNumber: 23
                                            }, this)
                                        }, l.id, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-2xl border border-dashed border-[#dbeae5] bg-[#fdfcfa]/70 p-4 text-center text-[.82rem] font-semibold text-[#8aa09b]",
                                    role: "status",
                                    children: [
                                        "No lecture matches “",
                                        query,
                                        "” — try a number, a topic (“positioning”), or clear the search."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onPractice,
                                            title: "The practice hub — pen-paper exam windows with instant checking",
                                            className: "group inline-flex items-center gap-2 rounded-full border border-[#e3ddcf] bg-[#fdfcfa] px-7 py-3 text-sm font-bold text-[#0f5f58] shadow-sm transition hover:bg-[#eef7f4]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                    className: "h-4 w-4 text-[#0f766e] transition-transform duration-300 group-hover:-rotate-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                "Test my knowledge"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.64rem] font-bold uppercase tracking-[.16em] text-[#8aa09b]",
                                            children: [
                                                "pen-paper practice · ",
                                                totalQuestions,
                                                " questions · ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_GROUPS"].length,
                                                " exam windows"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 360,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift h-full p-5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 38
                                                }, this),
                                                " Instructors"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-lg font-extrabold text-[#1f2b2b]",
                                            children: "Dr. Anuj Kapoor · Dr. Anush Pal Kapoor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-[#5f7472]",
                                            children: "School of Management & Entrepreneurship — IIT Jodhpur"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.78rem] leading-relaxed text-[#8a7a5c]",
                                            children: "Consumer insights, market research & innovation · PhD in neuro-marketing and multi-sensory experience (FMS, University of Delhi)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.78rem] font-semibold text-[#0f766e]",
                                            children: "six years of industry across HDFC, Michael Page & Nokia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 430,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift h-full p-5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 38
                                                }, this),
                                                " Reference"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-lg font-extrabold leading-snug text-[#1f2b2b]",
                                            children: "Kotler · Keller · Sheth — 2025 edition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.82rem] text-[#5f7472]",
                                            children: "Marketing Management, Indian context"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[.78rem] leading-relaxed text-[#8a7a5c]",
                                            children: "Every idea in this course is taught through brands you already know — from chai counters to Camellias."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 560,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3",
                            children: [
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"].length),
                                    "lectures"
                                ],
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_ALL_CHAPTER_IDS"].length),
                                    "chapters"
                                ],
                                [
                                    String(totalQuestions),
                                    "exam questions"
                                ]
                            ].map(([n, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bg-clip-text text-3xl font-black text-transparent",
                                            style: {
                                                backgroundImage: `linear-gradient(120deg,${TEAL_BRIGHT},${TEAL} 55%,${GOLD})`
                                            },
                                            children: n
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-bold uppercase tracking-[.18em] text-[#8a7a5c]",
                                            children: l
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, l, true, {
                                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgHero.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-8 z-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#notes-top",
                    "aria-label": "Scroll to the lecture notes",
                    className: "anim-bob rounded-full border border-[#dbeae5] bg-[#fdfcfa]/80 p-3 text-[#0f766e]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgHero.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgHero.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgHero.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgHero.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(MktgHero, "DOWiSTOb/BUd8qeG7DR+mR3x4Qg=");
_c1 = MktgHero;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroShape");
__turbopack_context__.k.register(_c1, "MktgHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mktg/MktgExamWindow.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MktgExamWindow",
    ()=>MktgExamWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* MKTG exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). Principles of Marketing: mcq | output | short. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function MktgExamWindow({ group, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamEngine"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_THEME"],
        bank: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_BANKS"][group],
        draftId: group,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgExamWindow.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = MktgExamWindow;
var _c;
__turbopack_context__.k.register(_c, "MktgExamWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mktg/MktgApp.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/mktg/MktgApp.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_mktg_3c12ab0c._.js.map