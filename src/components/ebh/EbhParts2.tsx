"use client";

/* ============================================================
   Economic & Business History — PART 2 of 4 (shelf 04 of The
   Atlas). Module 1's three currents: how the ECONOMY flows into
   business (the License Raj, and Bajaj Auto living under it),
   how SOCIETY flows into business (McDonald's and Cadbury), and
   how BUSINESS flows back into society, economies and
   technology (the weekend, 2008, Netflix, PESTLE).
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  Bike,
  Candy,
  Clapperboard,
  Factory,
  Globe2,
  IndianRupee,
  Landmark,
  Ship,
  Stamp,
  Sunrise,
  TrendingDown,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  EBH_BTN_GRAD,
  EBH_G,
  EbhCallout,
  EbhPanel,
  EbhQuiz,
  EbhReadStep,
} from "@/components/ebh/EbhParts1";

/* ============================================================
   CHAPTER 5 — ECONOMY → BUSINESS: THE LICENSE RAJ (#license-raj)
   ============================================================ */
export function EbhLicenseRajSection() {
  return (
    <Section id="license-raj">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 3 — the first current"
          title={
            <>
              Economy → business: the <span className="grad-gold">License Raj</span>
            </>
          }
          lead="How does the economy influence businesses? India's answer for four decades was brutally concrete: almost nothing important could be done without a government licence."
        />

        <EbhReadStep n="01" title="What was the License Raj?" sub="Extensive government controls, after independence" />
        <EbhCallout kind="insight" title="The definition">
          The License Raj refers to the system of <b>extensive government controls</b> — through{" "}
          <b>licences and regulations</b> that governed most <b>economic activities</b> in India
          after independence.
        </EbhCallout>

        <EbhReadStep n="02" title="What all did it control?" sub="Six levers, every one of them inside the firm" />
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Stamp, t: "Starting companies", d: "A licence was required just to start a new company" },
              { icon: Factory, t: "Manufacturing", d: "Producing new products — or expanding production capacities — needed approval" },
              { icon: IndianRupee, t: "Prices", d: "Government control over prices" },
              { icon: Users, t: "Hiring & firing", d: "Government approval needed for laying off workers — and for shutting down" },
              { icon: Landmark, t: "Finance", d: "Capital and credit sat inside the controlled zone" },
              { icon: Ship, t: "Import", d: "High tariffs, low import quotas — and outright bans on certain products" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="card-warm lift h-full p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                    <c.icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="mt-3 text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                  <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Industrial Policy Resolution 1956" sub="The constitution of the licence system" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { s: "Schedule A", n: "17 industries", d: "The exclusive responsibility of the Government (Central & State): arms and ammunition, atomic energy, railways and air transport, heavy industries, utilities & mining.", tone: "state" },
              { s: "Schedule B", n: "12 industries", d: "Open to both the private and public sectors — the automobile sector lived here.", tone: "mixed" },
              { s: "Schedule C", n: "Everything else", d: "All industries not included in the two schedules — open to the private sector.", tone: "private" },
            ].map((c, i) => (
              <Reveal key={c.s} delay={i * 90}>
                <div className="card-warm lift h-full p-5">
                  <p className="font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>{c.s} — {c.n}</p>
                  <p className="mt-2 text-[.85rem] leading-relaxed text-[#2b2014]">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="why" title="The mood behind the schedules">
            Adoption of the <b>socialist pattern</b> of society/economy · a <b>state-led
            development</b> mode · expansion of the <b>public sector</b> in core and
            capital-intensive industries · <b>equitable</b> distribution of <b>income and
            wealth</b> · balanced regional industrial growth · promotion of small-scale and
            cottage industries · encouragement of cooperative enterprises and workers&rsquo;
            participation in management.
          </EbhCallout>
        </div>

        <EbhReadStep n="04" title="One sector under the lens: automobiles" sub="Schedule B, a scooter order, and a foreign-exchange act" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">Scooters (Distribution &amp; Sales) Control Order, 1960</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Distribution (and sales) of scooters by manufacturers; sales by dealers</li>
                <li>· <b>Procedure to purchase:</b> apply to the dealer → a written guarantee from the bank to pay the dealer <b style={{ color: EBH_G[700] }}>₹250</b></li>
                <li>· Maintenance of a register by the dealer; re-sale of scooters regulated</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">Then the dial turned</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· <b>1960–1969</b> — collaborations with foreign firms were encouraged</li>
                <li>· <b>1970</b> — FERA Act (foreign exchange regulation)</li>
                <li>· Late 1960s &amp; early 1970s — <b>nationalisation of banks</b>, <b>privy purse abolished</b></li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 3"
              q="You want to launch a new scooter model and double your factory's output in 1970s India. Which items on the licence checklist will you meet?"
              options={[
                "Only the import desk",
                "Manufacturing approval for the new product AND for expanding production capacity — with prices, hiring/firing and imports all separately controlled",
                "Nothing — Schedule C left automobiles free",
                "Only a marketing permit",
              ]}
              answer={1}
              explain="Automobiles sat in Schedule B (both sectors allowed) — but operating inside the License Raj still meant licences for producing new products and for expanding capacity, with prices controlled, layoffs and shutdowns needing approval, and imports tariffed, quoted and banned. The economy didn't nudge the business — it held the keys."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>License Raj = <b>extensive government controls</b> via licences and regulations over most economic activity.</>,
              <>IPR 1956: <b>Schedule A</b> (17, state-exclusive) · <b>Schedule B</b> (12, both) · <b>Schedule C</b> (rest, private) — in a socialist-pattern, state-led frame.</>,
              <>Even a scooter purchase was scripted: <b>dealer, ₹250 bank guarantee, register</b>. Economy → business, at the counter.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 6 — CASE: BAJAJ AUTO  (#bajaj)
   ============================================================ */
const BAJAJ_ROWS = [
  { year: "1945", eco: "—", co: "Incorporated" },
  { year: "1948", eco: "—", co: "Started selling imported two- and three-wheelers in India" },
  { year: "1959/60", eco: "—", co: "Obtained licence from the Govt. of India to manufacture two- and three-wheelers — 6,000 a year" },
  { year: "1960", eco: "—", co: "Obtained a licence from Piaggio (Italian company) to manufacture Vespa — the Vespa 150" },
  { year: "1960–1969", eco: "Collaborations with foreign firms were encouraged", co: "Riding the Piaggio collaboration" },
  { year: "1970", eco: "Policy promoted domestic companies", co: "—" },
  { year: "1971", eco: "—", co: "Collaboration with Piaggio ended — began selling the Bajaj 150 and the Bajaj Chetak" },
];

export function EbhBajajSection() {
  return (
    <Section id="bajaj">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 3 — the case"
          title={
            <>
              Case: <span className="grad-gold">Bajaj Auto</span> under the licence system
            </>
          }
          lead="Two tracks run side by side in the lecture's table: what the economy allowed, and what the company did. Read them together and the License Raj stops being an abstraction."
        />

        <EbhReadStep n="01" title="The two-track table" sub="Economy level on the left rail · company level on the right" />
        <Reveal>
          <div className="card-warm overflow-x-auto p-4 sm:p-5">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr>
                  <th className="w-24">Year</th>
                  <th>Economy level</th>
                  <th>Company level — Bajaj Auto</th>
                </tr>
              </thead>
              <tbody>
                {BAJAJ_ROWS.map((r) => (
                  <tr key={r.year}>
                    <td className="whitespace-nowrap font-mono text-[.78rem] font-bold" style={{ color: EBH_G[700] }}>{r.year}</td>
                    <td className={r.eco === "—" ? "text-[#a08a5a]" : ""}>{r.eco}</td>
                    <td>{r.co}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <EbhReadStep n="02" title="Read the two tracks together" sub="Where policy ends and the firm begins" />
        <EbhCallout kind="story" title="The licence that built the middle-class dream">
          In 1959/60 Bajaj obtained the Government of India licence to manufacture two- and
          three-wheelers — capped at <b>6,000 a year</b>. In 1960 it licensed Piaggio&rsquo;s{" "}
          <b>Vespa 150</b> design. When policy turned to promoting domestic companies, the
          Piaggio collaboration ended (1971) — and Bajaj began selling its own <b>Bajaj 150</b>{" "}
          and the legendary <b>Bajaj Chetak</b>.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="insight" title="What the case teaches">
            Every milestone on the company track is enabled, capped or redirected by the economy
            track: the licence set the volume (6,000/yr), the Scooter Control Order scripted the
            selling, the foreign-collaboration window (1960–69) shaped the technology partner,
            and the 1970 pivot ended it. <b>The economy didn&rsquo;t influence Bajaj Auto — it
            drew the railway tracks the firm ran on.</b>
          </EbhCallout>
        </div>

        <Reveal>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
              <Bike className="h-5 w-5" />
            </span>
            <p className="text-[.9rem] leading-relaxed text-[#2b2014]">
              <b>6,000 two- and three-wheelers a year</b> — the licensed ceiling. Scarcity by
              paperwork: waiting lists, not showrooms, were the Indian car market&rsquo;s native
              habitat.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 3"
              q="Bajaj's collaboration with Piaggio ended in 1971 — the same era in which policy began promoting domestic companies. What did Bajaj begin selling afterwards?"
              options={[
                "Imported Vespas under a new licence",
                "The Bajaj 150 and the Bajaj Chetak",
                "Only three-wheelers",
                "Nothing — the firm paused production",
              ]}
              answer={1}
              explain="After the Piaggio collaboration ended in 1971, Bajaj began selling the Bajaj 150 and the Bajaj Chetak — its own scooters, inside a policy climate that now favoured domestic companies. The company's product line turned exactly when the economy's track turned."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Bajaj timeline: <b>1945</b> incorporated → <b>1948</b> imports → <b>1959/60</b> licence (6,000/yr) → <b>1960</b> Piaggio Vespa 150 → <b>1971</b> own bikes.</>,
              <>Economy track: <b>1960–69</b> foreign collaborations encouraged → <b>1970</b> domestic promotion (FERA era).</>,
              <>Read the tracks <b>together</b> — the firm&rsquo;s every turn is the economy&rsquo;s rule made visible.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 7 — SOCIETY → BUSINESS  (#society-business)
   ============================================================ */
const SOCIETY_CHIPS = [
  "Culture — food, clothing, language",
  "Religion",
  "Traditions",
  "Values",
  "Family structures",
  "Education",
  "Demographics",
  "Social norms",
];

export function EbhSocietySection() {
  return (
    <Section id="society-business">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 4 — the second current"
          title={
            <>
              Society → <span className="grad-gold">business</span>
            </>
          }
          lead="Two lecture questions open this current: why don't all businesses sell the same products across every country? And why do companies change their advertisements, products and services over time?"
        />

        <EbhReadStep n="01" title="The burger that explains a country" sub="McDonald's in India — the McAloo Tikki" />
        <EbhCallout kind="story" title="The case">
          McDonald&rsquo;s in India: the <b>McAloo Tikki Burger</b>, introduced in <b>1998</b>,
          has become the face of the McDonald&rsquo;s menu in India. Why? Indian society consumes{" "}
          <b>vegetarian food in a major way</b> — different from the countries where McDonald&rsquo;s
          originated and operates.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="insight" title="The chain of causation">
            Society → food habits → the business&rsquo;s product — what they produce and sell.
            The menu is not a recipe decision; it is a <b>society decision</b>.
          </EbhCallout>
        </div>

        <EbhReadStep n="02" title="The chocolate ad that aged into a mirror" sub="Cadbury Dairy Milk — mid-1990s vs 2021" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.68rem] font-black uppercase tracking-[.18em]" style={{ color: EBH_G[700] }}>
                <Candy className="h-3.5 w-3.5" /> Mid-1990s
              </p>
              <p className="mt-2 text-[.95rem] font-extrabold text-[#3e2c1d]">&ldquo;Kya Swad hai Zindagi mein&rdquo;</p>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                The girl sneaking chocolate — indulgence framed for its time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.68rem] font-black uppercase tracking-[.18em]" style={{ color: EBH_G[700] }}>
                <Candy className="h-3.5 w-3.5" /> 2021
              </p>
              <p className="mt-2 text-[.95rem] font-extrabold text-[#3e2c1d]">The same jingle, a different India</p>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                The ad is remade for a society where <b>women&rsquo;s position</b> has shifted —
                the business&rsquo;s advertisement tracking the socio-cultural environment.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-4">
          <EbhCallout kind="insight" title="The lecture's two-line verdict">
            <b>Businesses are embedded within society.</b> As society changes, businesses{" "}
            <b>change / adapt</b>. Society has strongly influenced businesses — what they{" "}
            <b>produce</b>, how they <b>operate</b>, whom they <b>employ</b>, and what{" "}
            <b>consumers choose to buy</b>.
          </EbhCallout>
        </div>

        <EbhReadStep n="03" title="What counts as 'society'?" sub="The eight-layer environment the business lives in" />
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {SOCIETY_CHIPS.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full border border-[#e0cb84] bg-[#fdfae9] px-3.5 py-1.5 text-[.78rem] font-semibold text-[#54430f]"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 text-center text-[.82rem] leading-relaxed text-muted-warm">
            <UtensilsCrossed className="mr-1 inline h-3.5 w-3.5" style={{ color: EBH_G[700] }} />
            Food habits are just one layer — the <b>socio-cultural environment</b> wraps every
            product, ad and hire.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 4"
              q="Put the lecture's causation in order for the McAloo Tikki Burger."
              options={[
                "Business's product → society's food habits → vegetarian society",
                "Indian society consumes vegetarian food in a major way → society's food habits → business's product (McAloo Tikki, 1998)",
                "McDonald's global strategy → Indian law → menu change",
                "Supply chain costs → menu change → society adapts",
              ]}
              answer={1}
              explain="Society sits upstream: vegetarian-majority food culture → food habits → what the business produces and sells. The McAloo Tikki (1998) is the downstream result — and it became the face of the Indian menu because it answered the society it was born into."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Products differ across countries because <b>society differs</b> — McAloo Tikki, 1998, the vegetarian majority.</>,
              <>Ads change because <b>society changes</b> — Cadbury mid-1990s vs 2021, women&rsquo;s position.</>,
              <>Businesses are <b>embedded within society</b>: as society changes, businesses change/adapt.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 8 — BUSINESS → SOCIETY: THE WEEKEND  (#weekend)
   ============================================================ */
const WEEKEND_STEPS = [
  { year: "1886", t: "The eight-hour day", d: "The Labor Movement wins the eight-hour day" },
  { year: "1908", t: "US first five-day workweek", d: "So Jewish workers could attend sabbath on Saturday" },
  { year: "1926", t: "Ford shuts Sat–Sun", d: "Ford stops its factories on Saturday and Sunday" },
  { year: "1938", t: "Fair Labor Standards Act", d: "40-hour workweek · overtime pay · national minimum wage · child labor bans" },
];

export function EbhWeekendSection() {
  return (
    <Section id="weekend">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 5 — the current reversed"
          title={
            <>
              Business → society: the <span className="grad-gold">story of the weekend</span>
            </>
          }
          lead="If society influences business, can businesses also change or influence society? The lecture's proof is something you are using right now: Saturday and Sunday."
        />

        <EbhReadStep n="01" title="Which society invented the weekend?" sub="Industrial — during and after the Industrial Revolution" />
        <Reveal>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Industrial society", d: "During / after the industrial revolution", win: true },
              { t: "Agrarian society", d: "Farming-based communities / society", win: false },
              { t: "Feudal society", d: "Related to agrarian society", win: false },
              { t: "Nomadic society", d: "Hunter-gatherers and nomadic cultures", win: false },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <div
                  className="h-full rounded-2xl border p-4"
                  style={
                    s.win
                      ? { borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", boxShadow: "0 10px 24px -14px rgba(161,98,7,.5)" }
                      : { borderColor: "#e0cb84", background: "#fffdf6" }
                  }
                >
                  <p className="text-[.88rem] font-extrabold" style={{ color: s.win ? EBH_G[800] : "#3e2c1d" }}>{s.t}</p>
                  <p className="mt-1 text-[.76rem] leading-relaxed text-muted-warm">{s.d}</p>
                  {s.win ? (
                    <p className="mt-2 text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>
                      ✓ the weekend is born here
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="02" title="Why only industrial society could need one" sub="How work was organized — before and after the machine" />
        <Reveal>
          <div className="card-warm overflow-x-auto p-4 sm:p-5">
            <table className="warm-table min-w-[560px]">
              <thead>
                <tr>
                  <th className="w-36">Society</th>
                  <th>How was work organized?</th>
                  <th>Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold" style={{ color: EBH_G[800] }}>Industrial society</td>
                  <td>Machines, factories, artificial light</td>
                  <td><b>24-hour work possible</b> — workers moved into factories</td>
                </tr>
                <tr>
                  <td className="font-bold" style={{ color: EBH_G[800] }}>Agrarian society</td>
                  <td>Seasons (of the year), daylight</td>
                  <td>Work happened in agricultural fields, depended on rains, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="why" title="The trap, then the fight">
            Industrial society made <b>24-hour work possible</b> — and delivered{" "}
            <b>long working hours (10–12 hours a day)</b>. Work-life balance — the effective
            management of time and energy between professional responsibilities and personal
            life — had to be <b>won</b>, by the <b>working class</b> through the Labor/Working
            Class Movement (1870s–80s).
          </EbhCallout>
        </div>

        <EbhReadStep n="03" title="The weekend, assembled step by step" sub="1886 → 1938 — four moves, one institution" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <div className="relative">
              <div className="absolute left-0 right-0 top-[1.35rem] hidden h-0.5 sm:block" style={{ background: "linear-gradient(90deg,#e0cb84,#ca8a04,#e0cb84)" }} />
              <div className="grid gap-4 sm:grid-cols-4">
                {WEEKEND_STEPS.map((s, i) => (
                  <motion.div
                    key={s.year}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative text-center sm:text-left"
                  >
                    <span
                      className="relative z-10 mx-auto flex h-11 w-11 items-center justify-center rounded-full font-mono text-[.62rem] font-black text-white shadow-md sm:mx-0"
                      style={{ background: EBH_BTN_GRAD, boxShadow: "0 6px 14px -6px rgba(161,98,7,.6)" }}
                    >
                      {s.year}
                    </span>
                    <p className="mt-3 text-[.88rem] font-extrabold leading-tight text-[#3e2c1d]">{s.t}</p>
                    <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{s.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-3 text-center text-[.8rem] leading-relaxed text-muted-warm">
            <Sunrise className="mr-1 inline h-3.5 w-3.5" style={{ color: EBH_G[700] }} />
            The weekend — Saturday and Sunday, off/holidays — is an <b>industrial-society
            artifact</b>: built by machines, artificial light, and the labor movement that
            answered them.
          </p>
        </Reveal>

        <EbhReadStep n="04" title="The full ledger of business on society" sub="Positive and negative — both columns are real" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border p-5" style={{ borderColor: "#9ab86b", background: "#f4f8ea" }}>
              <p className="text-[.8rem] font-black uppercase tracking-[.16em]" style={{ color: "#44621d" }}>Positive</p>
              <ul className="mt-2 grid grid-cols-2 gap-1.5 text-[.85rem] leading-relaxed text-[#3a4a22]">
                <li>· Employment</li>
                <li>· Innovation</li>
                <li>· Growth</li>
                <li>· Taxes</li>
                <li>· Technology</li>
                <li>· CSR</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: "#e2a1a1", background: "#fdf1ee" }}>
              <p className="text-[.8rem] font-black uppercase tracking-[.16em]" style={{ color: "#8c2f2f" }}>Negative</p>
              <ul className="mt-2 grid grid-cols-2 gap-1.5 text-[.85rem] leading-relaxed text-[#5a2a24]">
                <li>· Pollution</li>
                <li>· Inequality</li>
                <li>· Exploitation</li>
                <li>· Consumerism</li>
                <li className="col-span-2">· Environmental damage</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 5"
              q="Agrarian society had daylight and seasons; industrial society had machines, factories and artificial light. What did that difference make POSSIBLE — and what did workers then have to WIN?"
              options={[
                "Possible: 24-hour work and 10–12 hour days; won: the eight-hour day, the five-day week, and finally the 1938 Fair Labor Standards Act",
                "Possible: remote work; won: the weekend by royal decree",
                "Possible: child labor bans immediately; won: nothing further",
                "Possible: unemployment insurance; won: the minimum wage in 1886",
              ]}
              answer={0}
              explain="Artificial light + factories made round-the-clock work possible — and 10–12 hour days came with it. The labor movement answered: 1886 eight-hour day, 1908 US five-day workweek (sabbath), 1926 Ford's Sat–Sun shutdown, 1938 FLSA — 40-hour week, overtime pay, national minimum wage, child labor bans. The weekend is a negotiated artifact, not a natural law."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The weekend was invented by <b>industrial society</b> — machines and artificial light made 24-hour work possible.</>,
              <>Timeline: <b>1886</b> eight-hour day → <b>1908</b> five-day week → <b>1926</b> Ford → <b>1938</b> FLSA.</>,
              <>Business on society runs both ways: <b>employment, innovation, growth, taxes, technology, CSR</b> vs <b>pollution, inequality, exploitation, consumerism, environmental damage</b>.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 9 — BUSINESS → ECONOMIES & TECHNOLOGY  (#business-econ-tech)
   ============================================================ */
const PESTLE = [
  { l: "P", t: "Political" },
  { l: "E", t: "Economic" },
  { l: "S", t: "Social" },
  { l: "T", t: "Technological" },
  { l: "L", t: "Legal" },
  { l: "E", t: "Environment" },
];

export function EbhBizEconTechSection() {
  return (
    <Section id="business-econ-tech">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Live Session 2 — the current completes"
          title={
            <>
              Business → economies, and technology →{" "}
              <span className="grad-gold">business</span>
            </>
          }
          lead="Ford's assembly lines lift an economy; bundled mortgages sink one; a DVD-by-mail startup eats Hollywood. The last current of Module 1 is the loudest."
        />

        <EbhReadStep n="01" title="Business → economies: the positive ledger" sub="Ford and mass production" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: TrendingUp, t: "Job creation" },
            { icon: TrendingUp, t: "Rising incomes" },
            { icon: Factory, t: "Growth of industries" },
            { icon: TrendingUp, t: "Faster economic growth" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-warm lift flex h-full items-center gap-3 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="text-[.88rem] font-extrabold leading-tight text-[#3e2c1d]">{c.t}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="02" title="…and the negative ledger" sub="The financial crisis of 2007–2008" />
        <Reveal>
          <EbhPanel label="How risky home loans became a global crisis">
{`Risky home loans (subprime mortgages)
        ↓
Bundled into complex financial products
and sold to investors globally
        ↓
Many borrowers could not repay their loans
        ↓
FINANCIAL CRISIS

Falling dominoes: rising unemployment ·
slower economic growth in many countries ·
decline in international trade`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="03" title="Technology → business: the Netflix story" sub="DVD by mail (1997) → streaming (2007) → standalone (2010) → discs retired (2020/2023)" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { y: "1997", t: "Founded in the US", d: "A DVD rental business" },
            { y: "2007", t: "Streaming & video-on-demand", d: "High-speed internet; consumers watching movies online" },
            { y: "2010", t: "Standalone streaming", d: "Offered separately from DVD rentals" },
            { y: "2020/2023", t: "DVD rentals discontinued", d: "The original business retired" },
          ].map((s, i) => (
            <Reveal key={s.y} delay={i * 80}>
              <div className="card-warm lift h-full p-4">
                <p className="flex items-center gap-1.5 font-mono text-[.72rem] font-black" style={{ color: EBH_G[700] }}>
                  <Clapperboard className="h-3.5 w-3.5" /> {s.y}
                </p>
                <p className="mt-1.5 text-[.88rem] font-extrabold leading-tight text-[#3e2c1d]">{s.t}</p>
                <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4">
          <EbhCallout kind="insight" title="What the internet actually changed">
            Not just the product — <b>the complete business, and the business model itself</b>.
            Older technologies became obsolete. The enablers were ordinary: the internet (modem),
            wireless tech (broadband, WiFi), mobile phones (smartphones), microphones, cameras,
            laptops/computers, software platforms.
          </EbhCallout>
        </div>

        <EbhReadStep n="04" title="The general law of technology" sub="Four doors it kicks open in every business" />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: "Technology changes products", d: "It can create new markets and products — streaming created a market that DVDs never could" },
            { t: "Technology changes production", d: "How things get made — the whole of Module 3 is this sentence" },
            { t: "Technology changes advertising / promotional campaigns", d: "Where the Cadbury ads of 1998 met their 2021 remakes" },
            { t: "Technology changes distribution", d: "DVD-by-mail to broadband — the pipe is the business" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-warm lift h-full p-5">
                <p className="flex items-center gap-2 text-[.9rem] font-extrabold text-[#3e2c1d]">
                  <Wifi className="h-4 w-4 shrink-0" style={{ color: EBH_G[700] }} />
                  {c.t}
                </p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="05" title="One frame to hold them all" sub="PESTLE — the environment a business stands in" />
        <Reveal>
          <div className="card-warm p-5">
            <p className="text-center text-[.82rem] leading-relaxed text-muted-warm">
              Economies → business · Society → business · Technology → business — plus{" "}
              <b>Environment → business</b>. The lecture bundles them:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {PESTLE.map((p, i) => (
                <motion.div
                  key={p.t + i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-3 text-center"
                >
                  <p className="font-display text-2xl font-black" style={{ color: EBH_G[700] }}>{p.l}</p>
                  <p className="mt-0.5 text-[.72rem] font-bold text-[#3e2c1d]">{p.t}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-center text-[.78rem] font-semibold" style={{ color: EBH_G[800] }}>
              Political · Economic · Social · Technological · Legal · Environment
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Live Session 2"
              q="Match the mechanism: (1) subprime mortgages bundled and sold globally, (2) high-speed internet meeting a DVD-by-mail firm. What does each demonstrate?"
              options={[
                "Both demonstrate technology changing products",
                "(1) Business → economy: firm behaviour can crash the whole system; (2) Technology → business: the internet rewrote the complete business model",
                "(1) Society → business; (2) Business → society",
                "(1) Political change; (2) Legal change",
              ]}
              answer={1}
              explain="The 2007–08 crisis is the negative 'business → economies' ledger: risky home loans, bundled into complex products sold to investors globally, defaults — then rising unemployment, slower growth, declining trade. Netflix is 'technology → business': 2007 streaming, 2010 standalone, 2020/2023 discs retired — the internet changed the complete business and the model itself."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Business → economies: <b>jobs, incomes, industry growth</b> (Ford) — and <b>2007–08</b>: subprime → bundled products → default → crisis.</>,
              <>Technology → business: <b>Netflix</b> 1997 → 2007 → 2010 → 2020/23; the internet changed the <b>complete business and its model</b>.</>,
              <>Technology changes <b>products, production, advertising, distribution</b> — all held in the <b>PESTLE</b> frame.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
