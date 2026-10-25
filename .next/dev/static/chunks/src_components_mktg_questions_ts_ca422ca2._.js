(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=src_components_mktg_questions_ts_ca422ca2._.js.map