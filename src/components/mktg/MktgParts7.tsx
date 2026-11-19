"use client";

/* ============================================================
   MKTG PARTS 7 — Lectures 35–38 (the triad, co-branding,
   pricing, marcom). Prose = the verbatim corpus (L35–L38.md,
   including "Parleji Surakshah" preserved as received).
   Figures & workflows = registered components.
   ============================================================ */

import React from "react";
import { Coins, Handshake, ListOrdered, Radio } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { CorpusBlocks } from "@/components/mktg/CorpusBlocks";
import {
  AuthoringNote,
  AttentionFunnel,
  CoBrandTypes,
  MK,
  MktgStepper,
  PricingLadder,
  PricingTriad,
  System1System2,
  ThreeCsTriangle,
  TriadTriangle,
} from "@/components/mktg/diagrams";

/* ============================================================
   L35 · product-strategy-triad
   ============================================================ */
export function MktgTriadSection() {
  return (
    <Section id="product-strategy-triad">
      <SectionHead
        eyebrow="Part VI · Lecture 35 · Overview of Product Strategy and Co-Branding"
        title={<>The strategy triad — <span style={{ color: MK.teal }}>product · value · connect</span></>}
        lead="Product strategy is the plan that defines a product's vision and how it will be realized — differentiation, value and the experiential connect, integrated or failed."
      />
      <CorpusBlocks id="product-strategy-triad" />
      <Reveal className="mt-8">
        <TriadTriangle />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 35" title="Source quirk preserved exactly: “Parleji Surakshah”">
          <p>
            The compendium carries the post-COVID hand-sanitizer case as <strong>&ldquo;Parleji Surakshah&rdquo;</strong> —
            the spelling is reproduced word-for-word as received and logged in the consolidated register, never corrected.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>The triad: <strong>Product</strong> (the differentiator — the problem it solves) × <strong>Value</strong> (benefits for business and consumer) × <strong>Connect</strong> (the experiential demand driver).</>,
          <>Dove: a moisturizing bar, not positioned as soap — real beauty, no airbrushing, lasting association even without purchase.</>,
          <>Pampers: &ldquo;best overnight dryness&rdquo; — the connect targets the decision-maker&apos;s own sleep.</>,
          <>Five failures, one lesson each: Colgate lasagna (no connect), Pepsi Crystal (no defined need), Cheetos lip balm (no value), Pepsi AM (wrong occasion), Parleji Surakshah (context-dependent success without positioning).</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L35 · co-branding
   ============================================================ */
export function MktgCoBrandSection() {
  return (
    <Section id="co-branding">
      <SectionHead
        eyebrow="Part VI · Lecture 35 · Overview of Product Strategy and Co-Branding"
        title={<>Co-branding — <span style={{ color: MK.teal }}>borrowed credibility, shared risk</span></>}
        lead="Two established brands combine into a third offering — or one brand lives inside another's manufacturing. And Levi's + Deepika Padukone is the boundary case that isn't co-branding at all."
      />
      <CorpusBlocks id="co-branding" />
      <Reveal className="mt-8">
        <CoBrandTypes />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The co-branding evaluator"
          chip="Lecture 35 · classify before you commit"
          icon={<Handshake className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Type?", line: "Two equal brands making a third offering, or a brand inside the manufacturing?", trace: "composite vs ingredient" },
            { k: "Composite", line: "Equal partners fuse offerings.", trace: "Axis Bank + Air Vistara → the co-branded travel card" },
            { k: "Ingredient", line: "A renowned brand becomes part of the process.", trace: "Goodyear soles in Skechers · Intel in laptops" },
            { k: "Check", line: "Is the partner an individual? Then it is co-marketing — no new product is created.", trace: "Levi's + Deepika Padukone = co-marketing" },
            { k: "Answer", line: "Benefits: equity transfer, audience expansion, faster credibility. Risks: reciprocal damage, dilution, dependency — the alliance succeeds or fails together.", trace: "a top organizational priority for 2025" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Co-branding = <strong>the synergy of combining two well-known brands into a third unique branded product or service</strong>.</>,
          <>Why it exists: import credibility faster than building it, leverage each brand&apos;s competence, answer blurred business boundaries.</>,
          <>Composite examples: MasterCard + Apple Pay, Amazon Prime + Airbnb, Clarks + Zara. Ingredient examples: Dolby in PVR, Android TV in Sony Bravia.</>,
          <>Risks: reciprocal damage, consumer skepticism, brand dilution, dependency — misaligned partnerships weaken both brands.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L36 · pricing-3c
   ============================================================ */
export function MktgPricing3cSection() {
  return (
    <Section id="pricing-3c">
      <SectionHead
        eyebrow="Part VI · Lecture 36 · Pricing Strategy: Frameworks, Psychology, and Implementation"
        title={<>Price, pricing, strategy — <span style={{ color: MK.teal }}>and the psychology shelf</span></>}
        lead="The 3C framework sets the arena: cost is the floor, competitors anchor the range, customer value is the uncapped ceiling. The psychology does the rest."
      />
      <CorpusBlocks id="pricing-3c" />
      <Reveal className="mt-8">
        <PricingTriad />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 36" title="Rebuilt math, and an overlap with Lecture 37">
          <p>
            <strong>Rebuilt as ordinary prose (authorised):</strong> the source of Lecture 36 arrived with LaTeX dollar-math
            shattered into letter-spaced junk around <strong>$9.99</strong>, <strong>$4.99</strong> and <strong>₹49,199</strong>.
            The compendium carries the rebuilt prose with every currency symbol intact, and this text reproduces it exactly
            as received. Logged in the consolidated register.
          </p>
          <p>
            <strong>Overlap:</strong> L36&apos;s pricing objectives reappear in L37&apos;s execution catalogue, and the 3C triangle
            returns as L37&apos;s effective-pricing triangle — both duplications are recorded, not merged away.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Price = the amount paid ($99 Netflix); pricing = the process of determining it; pricing strategy = the approach that meets objectives and reaches segments.</>,
          <>Reference price: $9.99 → $4.99 feels like savings even when the original was artificial; Lifebuoy positions below Dettol deliberately.</>,
          <>Price endings: $4.99 vs $5.00; PepperFry&apos;s ₹49,199 (not ₹49,999); Grofers&apos; street-market ₹99/₹44/₹59.</>,
          <>Framing (&ldquo;just ₹10,000 more&rdquo;) and the decoy (Starbucks ₹220/₹330/₹370) change choices without changing prices.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L36 · pricing-steps
   ============================================================ */
export function MktgPricingStepsSection() {
  return (
    <Section id="pricing-steps">
      <SectionHead
        eyebrow="Part VI · Lecture 36 · Pricing Strategy: Frameworks, Psychology, and Implementation"
        title={<>The six-step pricing ladder</>}
        lead="Objective → demand → cost → competitors → method → final price. Each rung carries the lecture's own example, from Netflix's survival cut to Forest Essentials' perceived value."
      />
      <CorpusBlocks id="pricing-steps" />
      <Reveal className="mt-8">
        <PricingLadder />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="Six steps, one walk-through"
          chip="Lecture 36 · the pricing process"
          icon={<ListOrdered className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Objective", line: "Select the pricing objective — it shapes everything downstream.", trace: "Netflix: ₹2,500 → ₹400/month to survive" },
            { k: "Demand", line: "Determine whether demand is elastic or inelastic.", trace: "Funflips: ₹4 → ₹20, buyers stayed (inelastic)" },
            { k: "Cost", line: "Estimate fixed and variable costs — the minimum acceptable price.", trace: "cost structure = the floor" },
            { k: "Competitors", line: "Benchmark competitor costs, prices and value.", trace: "Vodafone · Jio · Airtel parity" },
            { k: "Method", line: "Select the pricing method — cost-based or market-based.", trace: "Forest Essentials: perceived value pricing" },
            { k: "Answer", line: "Set the final price by integrating every analysis — then keep evaluating, because markets stay dynamic.", trace: "BMW ₹80L vs Ignis ₹5L = perception, not cost" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Five objectives: survival (Netflix), profit maximization (Samsung across tiers), market share (Jio&apos;s free data), skimming (iPhone ₹1,50,000+ falling over 5–7 years), quality leadership.</>,
          <>Cost-based methods: markup (₹100 + 5% = ₹105), target return, cost-plus.</>,
          <>Market-based methods: value pricing, perceived value (Forest Essentials), EDLP (Walmart — volume over margin).</>,
          <>The close: successful organizations <strong>master the ability to manipulate customer perception while delivering genuine value</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L37 · pricing-strategy-types
   ============================================================ */
export function MktgPricingTypesSection() {
  return (
    <Section id="pricing-strategy-types">
      <SectionHead
        eyebrow="Part VI · Lecture 37 · Common Pricing Strategies and Their Execution"
        title={<>The execution catalogue — <span style={{ color: MK.teal }}>razors, cartridges, fares, tiers</span></>}
        lead="Promotional and loss-leader pricing (Gillette, HP), special event and special customer pricing, differentiated and product-form pricing, freemium, and yield."
      />
      <CorpusBlocks id="pricing-strategy-types" />
      <Reveal className="mt-5">
        <MktgStepper
          title="The captive-pricing machine"
          chip="Lecture 37 · Gillette → HP"
          icon={<Coins className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Barrier", line: "The razor launches as a premium entry.", trace: "Mach 3 at ₹499 vs ₹20–40 alternatives" },
            { k: "Lower", line: "The entry barrier comes down, twice.", trace: "₹499 → ₹399 → ₹99" },
            { k: "Captive", line: "Once committed to the ecosystem, the ongoing purchase carries the margin.", trace: "blades at ₹150–200 each" },
            { k: "Same play", line: "HP prices the printer low and the consumable high.", trace: "cartridges ₹10,000–12,000+ · 1,500 printer varieties" },
            { k: "Answer", line: "Loss-leader / captive pricing: sell the razor near cost, monetize the blade.", trace: "captive = ancillary pricing" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Loss-leader / captive pricing: products below cost to stimulate sales of profitable goods — Gillette&apos;s ₹99 razor lives on ₹150–200 blades.</>,
          <>Special event pricing rides festive willingness (Diwali, New Year); special customer pricing (Amazon Prime, Zomato Pro) makes customers feel chosen.</>,
          <>Differentiated pricing: Indigo&apos;s segment fares — armed forces, students, senior citizens, doctors, nurses.</>,
          <>Product-form pricing: Office 365 at ₹125 / ₹545 / ₹660 per user-month; Netflix tiers by quality and streams. Freemium: Spotify free vs ₹200–300 premium. Yield: the same Taj room at ₹7,800 on Dec 8 and ₹20,000 on Dec 31.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L37 · pricing-effectiveness
   ============================================================ */
export function MktgPricingEffectivenessSection() {
  return (
    <Section id="pricing-effectiveness">
      <SectionHead
        eyebrow="Part VI · Lecture 37 · Common Pricing Strategies and Their Execution"
        title={<>What makes a price <span style={{ color: MK.teal }}>effective</span></>}
        lead="Maximize sales, deliver superior value, cover costs — and balance the customer value triangle: perceived value, competitor pricing, cost."
      />
      <CorpusBlocks id="pricing-effectiveness" />
      <Reveal className="mt-8">
        <PricingTriad />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 37" title="L36 and L37 overlap on pricing — recorded, not merged">
          <p>
            L36&apos;s pricing objectives (survival → quality leadership) and the 3C framework return here as the
            effective-pricing triangle and the catalogue&apos;s implicit objectives. The lecture teaches both days
            as delivered; the duplication is logged in the consolidated register of open questions.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>A good pricing decision must <strong>maximize company sales, deliver superior customer value, and cover costs</strong> — all three.</>,
          <>The triangle: customer perceived value × competitor pricing × cost of production/delivery.</>,
          <>The flywheel: value → purchase → sales → cost recovery — value for business and customer alike.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L38 · attention-filter
   ============================================================ */
export function MktgAttentionSection() {
  return (
    <Section id="attention-filter">
      <SectionHead
        eyebrow="Part VI · Lecture 38 · Marketing Communications"
        title={<>11 million bits meet a <span style={{ color: MK.teal }}>40-bit brain</span></>}
        lead="Consumers see 4,000–10,000 ads a day; the brain processes 40 bits per second. Attention is the filter — and occupied attention becomes mental availability, recall, and finally automatic choice."
      />
      <CorpusBlocks id="attention-filter" />
      <Reveal className="mt-8">
        <AttentionFunnel />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The connection chain"
          chip="Lecture 38 · from exposure to reflex"
          icon={<Radio className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Exposure", line: "The daily flood a consumer stands in.", trace: "~11,000,000 bits per second · 4,000–10,000 ads" },
            { k: "Filter", line: "The brain's processing ceiling forces a filter.", trace: "~40 bits per second processed" },
            { k: "Availability", line: "What grabs attention occupies mental space.", trace: "mental availability" },
            { k: "Recall", line: "Occupied space produces recall — the brand comes to mind unprompted.", trace: "Coca-Cola for cola · Bisleri for water" },
            { k: "Answer", line: "Right attention leads to mental availability, which leads to recall, and ultimately to brand choice as an automatic reflex.", trace: "choice = automatic" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>The processing gap is structural: <strong>11 million bits in, 40 bits handled</strong> — no brand can rely on being &ldquo;seen&rdquo;.</>,
          <>Attention is a resource; mental availability is where it is stored.</>,
          <>The chain is fixed: right attention → mental availability → recall → <strong>automatic brand choice</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L38 · three-cs-marcom
   ============================================================ */
export function MktgThreeCsSection() {
  return (
    <Section id="three-cs-marcom">
      <SectionHead
        eyebrow="Part VI · Lecture 38 · Marketing Communications"
        title={<>The three Cs — <span style={{ color: MK.teal }}>congruency earns engagement</span></>}
        lead="Content, context, concept — aligned, they create congruency and engagement. The Comfort film runs all three; the failure files (Viko, Flamingo, Lux) show what incongruency costs."
      />
      <CorpusBlocks id="three-cs-marcom" />
      <Reveal className="mt-8">
        <ThreeCsTriangle />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 38" title="L38 and L40 duplicate the three Cs and attention material">
          <p>
            The three Cs framework, the Comfort ad, the 4,000–10,000 ads figure and the 11-million/40-bit processing gap
            appear in <strong>both L38 and L40</strong> (the final class re-teaches them before the exam guidelines).
            Each lecture keeps its own verbatim treatment; the duplication is logged in the consolidated register rather
            than merged away.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Content: the substantive message, imagery, verbatim. Context: the situational environment. Concept: the idea that ties them together.</>,
          <>Successes: Volkswagen&apos;s porcupine precision-parking, Comfort&apos;s rigidity-to-softness dip, Chupa Chups&apos; sugar-free ants.</>,
          <>Failures: Viko Vajadanti with Alia Bhatt (misaligned audience), Flamingo pain relief with a fitness icon, Lux&apos; crowded bathtub concept.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L38 · dual-process
   ============================================================ */
export function MktgDualProcessSection() {
  return (
    <Section id="dual-process">
      <SectionHead
        eyebrow="Part VI · Lecture 38 · Marketing Communications"
        title={<>System 1 versus System 2 — <span style={{ color: MK.teal }}>feel first, rationalize later</span></>}
        lead="Kahneman and Tversky's dual process theory: marketers brief in System 2 while consumers live in System 1. Brain-friendly content leads with intuition and saves analysis for later."
      />
      <CorpusBlocks id="dual-process" />
      <Reveal className="mt-8">
        <System1System2 />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>System 1: fast, intuitive, low effort — <strong>it dominates initial attention in cluttered environments</strong>. System 2: slow, deliberate, analytical.</>,
          <>The misalignment: marketers provide technical System 2 information; consumers decide with System 1 — brain-friendly content prioritizes System 1 first, System 2 later.</>,
          <>Stroop lesson: when the two systems conflict (words vs colors), quick decisions collapse — ads with internal conflicts fail the same way.</>,
          <>Proof: Hyphen&apos;s 60% unaided recall vs 30% industry average; Tom Ford&apos;s 4% conversion; Zara&apos;s 6% CTR vs 2% — all System 1-first.</>,
          <>The filter: 100 → 10 → 1 — System 1 narrows the field, integrated System 1+2 closes the choice.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
