"use client";

/* ============================================================
   MKTG PARTS 5 — Lectures 29–31 (the authored product arc).
   Prose = the verbatim corpus (CorpusBlocks, generated
   word-for-word from scripts/mktg_lectures/L29–L31.md).
   Figures & workflows = the registered diagram components.
   Palette: teal #0f766e · brass #a97d2c · gold #e3c26b ·
   ink #1f2b2b · paper #f2efe7 · wine #9f3d54 (notes only).
   ============================================================ */

import React from "react";
import { Boxes, Layers, Scissors, TrendingUp } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { CorpusBlocks } from "@/components/mktg/CorpusBlocks";
import {
  AuthoringNote,
  GrowthCurve,
  MK,
  MktgStepper,
  ProductLevelsTower,
  WidthDepthGrid11,
  WidthDepthGrid12,
} from "@/components/mktg/diagrams";

/* ============================================================
   L29 · product-value-experience
   ============================================================ */
export function MktgProductValueSection() {
  return (
    <Section id="product-value-experience">
      <SectionHead
        eyebrow="Part V · Lecture 29 · Product and Product Strategy"
        title={<>What is a product? The bridge from <span style={{ color: MK.teal }}>existing to desired state</span></>}
        lead="Products solve consumer problems and relieve stress — value is a function of the overall experience, and great products create brands rather than borrowing them."
      />
      <CorpusBlocks id="product-value-experience" />
      <Reveal className="mt-8">
        <Takeaways items={[
          <>A product is an <strong>offering or attribute that enables a consumer to move from their existing state to a desired state</strong>.</>,
          <>Value is not solely utilitarian — it is <strong>a function of the overall experience</strong> (functional, emotional, economic, extended-psychological).</>,
          <>Strong products <strong>create brands</strong>; weak products require extensive branding efforts.</>,
          <>Great products are not tech-only: Tide, Parachute, Gillette Mach 3, Zandu Balm — and the failures (Paper Boat&apos;s pricing, the Tata tea-coffee combo) teach as loudly.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L29 · product-levels
   ============================================================ */
export function MktgProductLevelsSection() {
  return (
    <Section id="product-levels">
      <SectionHead
        eyebrow="Part V · Lecture 29 · Product and Product Strategy"
        title={<>The five product levels — <span style={{ color: MK.teal }}>build progressively</span></>}
        lead="Core benefit → basic product → expected product → augmented product → potential product. Start with the foundation; advanced features before core problems lead to failure."
      />
      <CorpusBlocks id="product-levels" />
      <Reveal className="mt-8">
        <ProductLevelsTower />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The hotel climb — five levels, one trace"
          chip="Lecture 29 · the value hierarchy"
          icon={<Layers className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Core", line: "The fundamental problem the product solves — without it, nothing else matters.", trace: "rest and sleep" },
            { k: "Basic", line: "The tangible, physical product consumers see and interact with.", trace: "bed · bathroom · towels · desk · Wi-Fi" },
            { k: "Expected", line: "Features and qualities consumers take as standard — the baseline.", trace: "clean beds · fresh towels · good food" },
            { k: "Augmented", line: "Features that exceed expectations — value beyond the basic.", trace: "seamless check-in · welcome drinks" },
            { k: "Potential", line: "Futuristic enhancements — the innovations on the roadmap.", trace: "bathrobes to keep · biometrics · sleep reports" },
            { k: "Answer", line: "A coffee shop should perfect its coffee quality before investing in Wi-Fi or premium interiors — strengthen the base before building higher.", trace: "core first, always" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Every brand&apos;s foundation is a <strong>strong product</strong> — the levels framework tells you what to deliver, how to differentiate, and what to improve next.</>,
          <>The hotel trace runs the full ladder: rest → bed &amp; bathroom → cleanliness → check-in rituals → sleep reports.</>,
          <>McDonald&apos;s: hunger → burger &amp; drink → same taste everywhere → happy meals → healthier options. Fossil: timekeeping → dial &amp; strap → accuracy → touchscreen → heart-rate monitoring.</>,
          <>Avoid premature enhancement — augmented features cannot rescue an unsolved core problem.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L30 · netflix-product-levels
   ============================================================ */
export function MktgNetflixLevelsSection() {
  return (
    <Section id="netflix-product-levels">
      <SectionHead
        eyebrow="Part V · Lecture 30 · Overview of Product Concepts and Portfolio Management"
        title={<>The product levels, <span style={{ color: MK.teal }}>streamed</span></>}
        lead="Netflix runs the same five-level hierarchy — entertainment at the core, gaming on the horizon. Retention means a complete experience across every level."
      />
      <CorpusBlocks id="netflix-product-levels" />
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Core benefit: <strong>entertainment services</strong> — the consumer&apos;s primary need.</>,
          <>Expected product: HD streaming, no buffering, smooth playback, multi-device access.</>,
          <>Augmented: personalized recommendations, skip-intro, customized viewing.</>,
          <>Potential: gaming features and cultural identity services — and the retention rule: <strong>solve the problem while delivering value across all levels</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L30 · product-mix-wdl
   ============================================================ */
export function MktgProductMixSection() {
  return (
    <Section id="product-mix-wdl">
      <SectionHead
        eyebrow="Part V · Lecture 30 · Overview of Product Concepts and Portfolio Management"
        title={<>Width · depth · length — <span style={{ color: MK.teal }}>the product mix counted</span></>}
        lead="The complete product assortment has three dimensions: lines carried, variants per product, and the total item count. Fab India runs width 6; Apple India runs width 8."
      />
      <CorpusBlocks id="product-mix-wdl" />
      <Reveal className="mt-8">
        <WidthDepthGrid11 />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 30" title="The 11-item portfolio — L31 retells the same exercise with 12">
          <p>
            This lecture&apos;s parent-company exercise counts personal care 6 + home decor <strong>1</strong> + clothing 4 ={" "}
            <strong>11 items</strong>. Lecture 31 re-teaches width/depth/length on the same three-line company with home decor
            holding <strong>2</strong> items, for <strong>12</strong>. Both days are reproduced exactly as taught; the
            discrepancy is recorded in the consolidated register of open questions rather than reconciled.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The 11-item count-up"
          chip="Lecture 30 · length, step by step"
          icon={<Boxes className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Lines", line: "Count the distinct product lines the company carries — that is width.", trace: "width = 3 (personal care · home decor · clothing)" },
            { k: "Personal care", line: "Count every variant inside the first line.", trace: "1 face wash + 1 shampoo + 4 cream variants = 6 items" },
            { k: "Home decor", line: "Count the second line.", trace: "1 item" },
            { k: "Clothing", line: "Count the third line.", trace: "4 items" },
            { k: "Answer", line: "Length = all items across all lines.", trace: "6 + 1 + 4 = 11" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Product mix = the complete set of products offered — <strong>width counts lines, depth counts variants, length counts everything</strong>.</>,
          <>L30&apos;s own exercise lands at <strong>11</strong>; L31 runs the same parent company to <strong>12</strong> — recorded in the authoring notes, never reconciled.</>,
          <>Fab India: width 6 (food, furniture, home living, kids, men, women). Apple India: width 8; the iPhone 18 Pro Max alone shows 4 colors × 4 storage = 16 variants.</>,
          <>Portfolios grow, plateau and decline — pruning (Apple retiring old iPhones, L&apos;Oréal reformulating) keeps revenue honest.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L31 · portfolio-basics
   ============================================================ */
export function MktgPortfolioBasicsSection() {
  return (
    <Section id="portfolio-basics">
      <SectionHead
        eyebrow="Part V · Lecture 31 · Product Portfolio, Mix, and Strategy Fundamentals"
        title={<>Before strategy, <span style={{ color: MK.teal }}>the portfolio</span> — and one anchoring refresher</>}
        lead="Product mix is a prerequisite for product strategy: organizations manage increasingly complex portfolios, and the session opens with the anchoring bias that pricing will exploit."
      />
      <CorpusBlocks id="portfolio-basics" />
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Anchoring bias: an artificially inflated reference price (&ldquo;originally ₹500, now ₹300&rdquo;) manufactures perceived savings.</>,
          <>A genuine discount is not a bias — <strong>most discounts are anchoring biases</strong> because they play on consumer psychology.</>,
          <>Product mix = the complete set of products and lines; managing it is a significant operational challenge.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L31 · width-depth-length
   ============================================================ */
export function MktgWdlSection() {
  return (
    <Section id="width-depth-length">
      <SectionHead
        eyebrow="Part V · Lecture 31 · Product Portfolio, Mix, and Strategy Fundamentals"
        title={<>The three dimensions, <span style={{ color: MK.teal }}>recounted to 12</span></>}
        lead="Width = 3 lines. Depth = 4 creams, or 16 iPhone variants. Length = 12 items. Same parent company as L30, one more home-decor item — both totals stand as taught."
      />
      <CorpusBlocks id="width-depth-length" />
      <Reveal className="mt-8">
        <WidthDepthGrid12 />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 31" title="L30 and L31 both teach width/depth/length — with different totals">
          <p>
            L30&apos;s parent-company example counts personal care 6 + home decor 1 + clothing 4 = <strong>11 items</strong>.
            L31 re-teaches the same structure with home decor holding 2 items (1 furniture item + 1 home good): 6 + 2 + 4 = <strong>12 items</strong>.
          </p>
          <p>
            Both totals are reproduced exactly as the source teaches them — this note records the discrepancy instead of silently
            reconciling it. It is listed in the consolidated register of open questions for the course owner.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Width: the number of distinct lines (the parent company = <strong>3</strong>; Apple = <strong>8</strong>).</>,
          <>Depth: variants within a line (creams = <strong>4</strong>; iPhone 18 Pro = <strong>4 colors × 4 storages = 16</strong>) — depth is never measured for standalone products.</>,
          <>Length: the whole portfolio&apos;s item count (<strong>12</strong> here) — the most comprehensive measure.</>,
          <>Apple strategy note: only current-generation iPhones display; 14/13/12/11 are discontinued to avoid cannibalization.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L31 · portfolio-pruning
   ============================================================ */
export function MktgPortfolioPruningSection() {
  return (
    <Section id="portfolio-pruning">
      <SectionHead
        eyebrow="Part V · Lecture 31 · Product Portfolio, Mix, and Strategy Fundamentals"
        title={<>Growth, plateau, decline — <span style={{ color: MK.teal }}>and the pruning shears</span></>}
        lead="Adding products lifts revenue until costs bite: storage, marketing, logistics, overhead. Pruning — Apple retiring generations, L'Oréal cycling variants — keeps the portfolio profitable."
      />
      <CorpusBlocks id="portfolio-pruning" />
      <Reveal className="mt-8">
        <GrowthCurve />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The HUL scale check"
          chip="Lecture 31 · why portfolios need managers"
          icon={<TrendingUp className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Brands", line: "Hindustan Unilever's portfolio scale.", trace: "50+ brands" },
            { k: "Categories", line: "The FMCG categories those brands cover.", trace: "16 categories" },
            { k: "Manufacturing", line: "Annual production volume (as of 2024).", trace: "90+ billion units" },
            { k: "Distribution", line: "Retail reach across platforms.", trace: "9 million outlets" },
            { k: "Answer", line: "At this scale, each line gets a dedicated brand manager — a mini-CEO reporting to a group CEO. Portfolio management is an organizational structure, not a spreadsheet.", trace: "brand manager = mini-CEO" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Growth requires balance: new products raise revenue <strong>and</strong> costs; unmanaged expansion ends in decline.</>,
          <>Pruning targets: products consumers no longer prefer, costs exceeding revenue contribution, obsolete technology.</>,
          <>L&apos;Oréal leverages perceptual repositioning — the same base product repackaged as new and improved.</>,
          <>Dove body wash: dedicated brand managers, regular discontinuation, constant testing — market presence balanced with operational efficiency.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
