"use client";

/* ============================================================
   MKTG PARTS 6 — Lectures 32–34 (extensions, stretching,
   portfolio strategy, narratives). Prose = the verbatim
   corpus (L32–L34.md); figures & workflows = registered
   components. Source quirks (Kéels, Detal) preserved exactly
   and logged in the wine authoring note.
   ============================================================ */

import React from "react";
import { GitBranch, Milk, Scissors } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { CorpusBlocks } from "@/components/mktg/CorpusBlocks";
import {
  AbcChain,
  AuthoringNote,
  BucketSplit,
  MK,
  MktgStepper,
  StretchMap,
  StrategyBridge,
} from "@/components/mktg/diagrams";

/* ============================================================
   L32 · line-extensions
   ============================================================ */
export function MktgLineExtensionsSection() {
  return (
    <Section id="line-extensions">
      <SectionHead
        eyebrow="Part V · Lecture 32 · Line Extensions and Market Stretching"
        title={<>Line filling — <span style={{ color: MK.teal }}>70% of everything launched</span></>}
        lead="A Nielsen IQ study: 70% of new products are extensions of existing lines. The base product stays the same; the variants serve different segments — Horlicks six ways, Colgate five."
      />
      <CorpusBlocks id="line-extensions" />
      <Reveal className="mt-5">
        <MktgStepper
          title="The Horlicks fill — one base, six segments"
          chip="Lecture 32 · line extension trace"
          icon={<Milk className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Base", line: "The base product stays fundamentally the same.", trace: "powdered energy drink mixed with milk" },
            { k: "Growth Plus", line: "Higher nutrient requirements.", trace: "growing children" },
            { k: "Light", line: "The low-sugar option.", trace: "sugar-conscious consumers" },
            { k: "Junior", line: "A specific age bracket.", trace: "young children" },
            { k: "Mothers", line: "Maternal needs.", trace: "pregnant & nursing mothers" },
            { k: "Women", line: "Post-35 requirements.", trace: "calcium and minerals" },
            { k: "Diabetes Plus", line: "Diabetic consumers.", trace: "sugar-managed segment" },
            { k: "Answer", line: "Each variant keeps the core identity while owning a segment — the risk is cannibalization, the cure is distinct positioning (HUL's ₹17 Lifebuoy / ₹60 Dove / ₹25 Lux).", trace: "70% of launches are fills" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Line extension = <strong>more items within the present range</strong>; the base product fundamentally remains unchanged.</>,
          <>Colgate&apos;s five: Max Fresh (fresh breath), Total (protection), Herbal, Sensitive, Charcoal.</>,
          <>Cannibalization risk: demand shifting to one variant, margin erosion, vulnerability to cheaper entrants.</>,
          <>HUL&apos;s differentiation: each soap occupies a distinct perceptual category — that is what prevents internal competition.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L32 · market-stretching
   ============================================================ */
export function MktgStretchingSection() {
  return (
    <Section id="market-stretching">
      <SectionHead
        eyebrow="Part V · Lecture 32 · Line Extensions and Market Stretching"
        title={<>Stretching the line — <span style={{ color: MK.teal }}>up, down, both ways</span></>}
        lead="Unlike filling, stretching changes the price tier: Jeep falls from ₹80 lakhs to ₹16.5 lakhs, VW rises to Porsche and Bentley, Accor does both at once — and Tata Aria shows what happens when the value boundary doesn't hold."
      />
      <CorpusBlocks id="market-stretching" />
      <Reveal className="mt-8">
        <StretchMap />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Downward stretch: <strong>a new brand name avoids dilution</strong> — Jeep Compass, Armani Exchange (₹8,000–10,000 vs ₹20,000), ITC&apos;s Welcome/Fortune/Storii.</>,
          <>Upward stretch: <strong>new identities protect the premium</strong> — products never carry the Volkswagen name; Absolute Elyx ₹3,300 and Bling ₹9,000 flank the ₹1,600 core.</>,
          <>Two-way stretch: Accor runs IBIS below and Novotel/Pullman/Sofitel above; L&apos;Oréal runs Garnier (₹300–400) against its premium line (₹3,500–4,000).</>,
          <>Tata Harrier vs Aria: the stretch succeeds only when consumers accept the new price-quality tier — perceived value boundaries can be moved, legitimately.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L33 · stretch-consistency
   ============================================================ */
export function MktgStretchConsistencySection() {
  return (
    <Section id="stretch-consistency">
      <SectionHead
        eyebrow="Part V · Lecture 33 · Market Stretch and Product Portfolio Strategy"
        title={<>Consistency analysis — <span style={{ color: MK.teal }}>defending every segment</span></>}
        lead="Line analysis runs on two elements — sales & profit, and market profile & image. Apple groups its line by screen size and price; OnePlus punishes any segment left undefended."
      />
      <CorpusBlocks id="stretch-consistency" />
      <Reveal className="mt-5">
        <MktgStepper
          title="Apple's consistency groups"
          chip="Lecture 33 · the pruning drill"
          icon={<Scissors className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Group", line: "Group products by consistency criteria.", trace: "screen size × price range" },
            { k: "4-inch", line: "Evaluate the small group.", trace: "SE (₹30,000–60,000) retained · 5S, 5, 5C discontinued" },
            { k: "4.7-inch", line: "Evaluate the mid group.", trace: "focused on iPhone 8" },
            { k: "5.5–5.8-inch", line: "Evaluate the large group.", trace: "concentrated on iPhone 12 mini and 15" },
            { k: "Prune", line: "Retain high performers, discontinue the rest — but never abandon a segment entirely.", trace: "OnePlus captured Apple's weak 5.5–5.8-inch overlap" },
            { k: "Answer", line: "Consistency analysis + pruning = a portfolio that stays profitable and defensively complete.", trace: "re-entry into a lost segment is difficult" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Two-way stretch: Accor upward (Pullman, Legend, Novotel) and downward (IBIS) — multiple segments, one group.</>,
          <>L&apos;Oréal premium vs mass: the premium brand (founded 1850, ₹3,500–4,000) and Garnier (₹300–400) keep distinct identities.</>,
          <>Sales &amp; profit analysis finds the winners; market profile &amp; image decides whether a weak seller needs marketing or the axe.</>,
          <>Pruning makes room for launches — competitive emptiness invites encroachment.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L33 · three-strategies
   ============================================================ */
export function MktgThreeStrategiesSection() {
  return (
    <Section id="three-strategies">
      <SectionHead
        eyebrow="Part V · Lecture 33 · Market Stretch and Product Portfolio Strategy"
        title={<>Business · brand · marketing — <span style={{ color: MK.teal }}>the strategy stack</span></>}
        lead="Will we make money? Why buy me? How do we sell? Product strategy sits at the cusp of the last two — and the Dettol case runs the whole stack end to end."
      />
      <CorpusBlocks id="three-strategies" />
      <Reveal className="mt-8">
        <StrategyBridge />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 33" title="Source quirks preserved exactly: “Kéels” and “Detal”">
          <p>
            The compendium consistently renders Kiehl&apos;s as <strong>&ldquo;Kéels&rdquo;</strong> (the two-way stretch case: premium segment,
            founded 1850, ₹3,500–4,000 face cream) and Dettol as <strong>&ldquo;Detal&rdquo;</strong> (the strategy case study below).
            Both spellings are reproduced word-for-word as received and logged in the consolidated register — never corrected.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Business strategy: growth, scalability, profitability — <strong>CEO/CFO level, not product-specific</strong>.</>,
          <>Brand strategy: &ldquo;why buy me&rdquo; — perception, feelings, associations, values, beliefs. Positioning here means mental placement, not financial position.</>,
          <>Marketing strategy: &ldquo;how do we sell&rdquo; — awareness, promotion, pricing, 360-degree campaigns, distribution.</>,
          <>Detal alignment test: as luxury skincare, brand strategy breaks first (trust/protection vs pampering), then messaging, then distribution economics.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L34 · narrative-buckets
   ============================================================ */
export function MktgNarrativeBucketsSection() {
  return (
    <Section id="narrative-buckets">
      <SectionHead
        eyebrow="Part V · Lecture 34 · Product Narratives and Brand Humanization"
        title={<>Epicurus&apos; two buckets — <span style={{ color: MK.teal }}>where loyalty lives</span></>}
        lead="Most human relationships are transactional; the parent-child bond is not. Products placed in the utilitarian bucket are switched without remorse — humanization moves them into the love bucket."
      />
      <CorpusBlocks id="narrative-buckets" />
      <Reveal className="mt-8">
        <BucketSplit />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 34" title="Epicurus' buckets re-taught from Lecture 26">
          <p>
            Lecture 26 already teaches Epicurus&apos; two buckets (utilitarian vs love) alongside attitude and retention;
            Lecture 34 rebuilds the same foundation before extending it into the ABC narrative formula. The overlap is
            recorded in the consolidated register of open questions rather than merged away — each lecture keeps its own
            verbatim treatment.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Utilitarian bucket: give-and-take — husband-wife chores, student-teacher, customer-shopkeeper. <strong>Most human relationships live here.</strong></>,
          <>Love bucket: compassion without expected return — the parent-child relationship is the primary example.</>,
          <>Organizations default to the utilitarian bucket; <strong>successful brands move the product into the love bucket</strong> — switching stops being easy.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L34 · abc-narratives
   ============================================================ */
export function MktgAbcNarrativesSection() {
  return (
    <Section id="abc-narratives">
      <SectionHead
        eyebrow="Part V · Lecture 34 · Product Narratives and Brand Humanization"
        title={<>The ABC formula — <span style={{ color: MK.teal }}>attributes → benefits → human characteristics</span></>}
        lead="Every complete narrative connects all three; missing any link weakens it. CEAT, Asian Paints and Prestige each run the full chain to a human trait."
      />
      <CorpusBlocks id="abc-narratives" />
      <Reveal className="mt-8">
        <AbcChain />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The CEAT narrative builder"
          chip="Lecture 34 · A → B → C trace"
          icon={<GitBranch className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Attribute", line: "Start with what the product actually has — the credibility anchor.", trace: "advanced groove technology · anti-skid" },
            { k: "Benefit", line: "Translate the attribute into outcomes.", trace: "better grip → traction → stability → control" },
            { k: "Human", line: "Connect the benefit to a human trait or relationship.", trace: "a father protecting his daughter in the rain" },
            { k: "Bucket", line: "The narrative lands the product in the love bucket — safety and protection of loved ones.", trace: "relational, not transactional" },
            { k: "Answer", line: "All three components present = a narrative that differentiates where products look identical.", trace: "missing any link weakens the narrative" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Asian Paints: scuff-free paint → fewer marks, less worry → <strong>newlyweds&apos; freedom and independence</strong> — recall happens at moving day, not in the paint aisle.</>,
          <>Prestige: pressure-valve technology → faster, perfect cooking → <strong>more time with family</strong> — a chore becomes togetherness.</>,
          <>The common mistake: benefits + human characteristics <strong>without the attribute</strong> — the narrative loses credibility and relatability.</>,
          <>The analysis habit for any ad: what attribute is highlighted, what benefits result, what human traits are connected — does it humanize?</>,
        ]} />
      </Reveal>
    </Section>
  );
}
