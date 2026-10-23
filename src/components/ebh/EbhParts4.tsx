"use client";

/* ============================================================
   Economic & Business History — PART 4 of 4 (shelf 04 of The
   Atlas). Module 3 — the machine age: why the machines came,
   the textile wave (shuttle → jenny → water frame), Watt's
   steam liberation and Cottonopolis, the labor movement that
   answered the factories, and the empire + mercantilism that
   fed the whole engine.
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Cog,
  Crown,
  Factory,
  Flame,
  Gavel,
  Landmark,
  ScrollText,
  Ship,
  Users,
  Wind,
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
   CHAPTER 14 — WHY MACHINES?  (#why-machines)
   ============================================================ */
export function EbhWhyMachinesSection() {
  return (
    <Section id="why-machines">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 10 — the demand explosion"
          title={
            <>
              Why did people begin using{" "}
              <span className="grad-gold">machines</span> for production?
            </>
          }
          lead="Nobody woke up one morning and invented the factory out of curiosity. Labour had been freed, demand had exploded — and the old way of making things hit a wall made of human muscle."
        />

        <EbhReadStep n="01" title="Engine one — labour becomes available" sub="The agricultural revolution's gift" />
        <EbhCallout kind="insight" title="From Module 3's opening">
          The Agricultural Revolution (enclosure, rotation, the seed drill) had already done its
          work: <b>availability of labour</b>. Hands were leaving the countryside — the factories
          would be waiting for them.
        </EbhCallout>

        <EbhReadStep n="02" title="Engine two — demand explodes" sub="Population and global trade, both compounding" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Population rise</p>
              <p className="mt-2 font-mono text-[1.05rem] font-black" style={{ color: EBH_G[800] }}>
                5–6.5 million → 9–11 million
              </p>
              <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">
                1700 → 1801. More mouths, and more buyers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Global trade rising</p>
              <p className="mt-2 font-mono text-[1.05rem] font-black" style={{ color: EBH_G[800] }}>
                £6.5M → £14.7M → £43.2M
              </p>
              <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">
                1700 → 1760 → 1800. The export market multiplies over six-fold.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-5">
            <Cog className="h-5 w-5" style={{ color: EBH_G[700] }} />
            <p className="text-[.9rem] leading-relaxed text-[#2b2014]">
              <b>Textiles accounted for 70% to 90% of all manufactured exports.</b> Whatever
              transformed cloth-making transformed the economy.
            </p>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Engine three — the old system's ceiling" sub="The putting-out system's limits of human muscle" />
        <EbhCallout kind="warn" title="Where putting-out broke">
          A <b>de-centralized system</b>: time and money spent moving raw materials to rural
          households and collecting finished goods. And beneath it all, the <b>limits of human
          muscle</b>. Productivity had to be increased — in the old system,{" "}
          <b>it took four spinners to keep up with one weaver</b>.
        </EbhCallout>

        <EbhReadStep n="04" title="The production chain" sub="Where the machines would strike first" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <p className="text-center font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
              Textile production chain — the machine map
            </p>
            <div className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
              {[
                { t: "Raw cotton / wool", d: "the fibre" },
                { t: "Spinning", d: "fibre → yarn", hot: true, tag: "Jenny 1764 · Water Frame 1769" },
                { t: "Yarn", d: "the thread" },
                { t: "Weaving", d: "yarn → cloth", hot: true, tag: "Flying Shuttle 1733" },
                { t: "Cloth", d: "the product" },
              ].map((s, i, arr) => (
                <React.Fragment key={s.t}>
                  <div
                    className="rounded-2xl border p-3 text-center"
                    style={
                      s.hot
                        ? { borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", boxShadow: "0 8px 20px -12px rgba(161,98,7,.4)" }
                        : { borderColor: "#e0cb84", background: "#fffdf6" }
                    }
                  >
                    <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                    <p className="text-[.7rem] text-muted-warm">{s.d}</p>
                    {s.tag ? (
                      <p className="mt-1.5 text-[.62rem] font-black uppercase tracking-[.12em]" style={{ color: EBH_G[700] }}>
                        {s.tag}
                      </p>
                    ) : null}
                  </div>
                  {i < arr.length - 1 ? (
                    <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 10"
              q="Put the lecture's three engines of mechanisation in order: why machines, why then?"
              options={[
                "Invention first, then demand, then labour",
                "Labour freed by the agricultural revolution + demand exploding (population 5–6.5M → 9–11M; trade £6.5M → £43.2M; textiles 70–90% of exports) + the putting-out system's muscle ceiling",
                "Government policy alone",
                "Cheap coal replacing expensive wood",
              ]}
              answer={1}
              explain="The lecture's causal stack: the agricultural revolution freed labour; population (5–6.5M in 1700 → 9–11M by 1801) and global trade (£6.5M → £14.7M → £43.2M) exploded demand — with textiles at 70–90% of manufactured exports; and the putting-out system, decentralised and muscle-bound (four spinners per weaver), simply could not keep up. Machines answered all three pressures at once."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Three engines: <b>freed labour</b> + <b>exploding demand</b> (population, trade, textiles at 70–90%) + the <b>putting-out ceiling</b>.</>,
              <>The chain: <b>raw fibre → spinning → yarn → weaving → cloth</b> — machines struck at spinning and weaving first.</>,
              <>The ratio to remember: <b>four spinners kept pace with one weaver</b> — productivity had to rise.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 15 — TEXTILE MACHINES  (#textile-machines)
   with Machine 04 — the Thread Race
   ============================================================ */
const ERAS = [
  {
    id: "before",
    year: "Before 1733",
    t: "The old balance",
    spinners: "4 spinners per weaver",
    spindles: 4,
    status: "Equilibrium",
    statusColor: "#44621d",
    statusBg: "#eef4dd",
    note: "The traditional wheel spins one single thread of yarn at a time. Slow, manual, skilled labour — four spinners keep one weaver fed with yarn.",
  },
  {
    id: "shuttle",
    year: "Flying Shuttle · 1733",
    t: "The supply crisis",
    spinners: "MORE than 4 per weaver",
    spindles: 6,
    status: "Crisis",
    statusColor: "#b3402c",
    statusBg: "#fbeae5",
    note: "John Kay's shuttle lets one weaver weave much faster, produce fabrics of any width alone — twice as much cloth. Suddenly the weaver outruns the spinners: it now takes MORE spinners to supply one weaver.",
  },
  {
    id: "jenny",
    year: "Spinning Jenny · 1764",
    t: "The crisis breaks",
    spinners: "1 spinner × 8 spindles",
    spindles: 8,
    status: "Eightfold",
    statusColor: EBH_G[800],
    statusBg: "#fdf6dc",
    note: "James Hargreaves' Jenny rotates multiple spindles at once — yarn production rises EIGHTFOLD. The bottleneck snaps: spinning catches up with weaving, and the race goes to the machine.",
  },
];

function ThreadRace() {
  const [era, setEra] = useState(0);
  const e = ERAS[era];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 04 — the thread race · spinners vs weavers
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {ERAS.map((ee, i) => (
          <button
            key={ee.id}
            type="button"
            onClick={() => setEra(i)}
            aria-pressed={i === era}
            className="rounded-2xl border p-3 text-center transition-all duration-200"
            style={
              i === era
                ? { borderColor: "transparent", background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", boxShadow: "0 10px 22px -12px rgba(161,98,7,.45)" }
                : { borderColor: "#e0cb84", background: "#fffdf6" }
            }
          >
            <p className="font-mono text-[.72rem] font-black" style={{ color: i === era ? EBH_G[800] : "#8a6d4f" }}>{ee.year}</p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={e.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-5 rounded-2xl border p-5"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[1.02rem] font-black" style={{ color: EBH_G[800] }}>{e.t}</p>
            <span className="rounded-full px-3 py-1 text-[.7rem] font-black" style={{ color: e.statusColor, background: e.statusBg }}>
              {e.status}
            </span>
          </div>
          <p className="mt-3 font-mono text-[.86rem] font-bold" style={{ color: EBH_G[700] }}>{e.spinners}</p>
          <div className="mt-2 flex items-center gap-1.5">
            {Array.from({ length: e.spindles }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="flex h-6 w-6 items-center justify-center rounded-md text-[.6rem] font-black text-white"
                style={{ background: EBH_BTN_GRAD }}
              >
                {i + 1}
              </motion.span>
            ))}
            <span className="ml-2 text-[.72rem] font-bold text-muted-warm">
              {e.id === "before" ? "threads spun in the time one weaver weaves" : e.id === "shuttle" ? "…and the weaver still outruns them" : "threads at once — per single spinner"}
            </span>
          </div>
          <p className="mt-3 text-[.85rem] leading-relaxed text-[#2b2014]">{e.note}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EbhTextileSection() {
  return (
    <Section id="textile-machines">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lectures 10–11 — the first wave"
          title={
            <>
              How machines transformed{" "}
              <span className="grad-gold">textile production</span>
            </>
          }
          lead="Three machines, three inventors, three mobs. The shuttle, the jenny and the water frame doubled, then eightfold-ed, then industrialised the making of cloth — and resistance met every step."
        />

        <EbhReadStep n="01" title="Weaving — the Flying Shuttle (1730s)" sub="John Kay, 1733 — one weaver, twice the cloth" />
        <EbhCallout kind="insight" title="The machine and its mathematics">
          <b>John Kay (1733)</b>: one weaver could weave much faster and produce fabrics of{" "}
          <b>any width alone</b> — earlier, two workers were needed. Productivity: a single
          weaver produced <b>twice as much cloth</b>; <b>one weaver instead of 2 or 3</b>. The
          side-effect: a <b>supply crisis</b> — it took <b>more spinners</b> to supply one weaver.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="warn" title="The response — 1753">
            An <b>angry mob attacked</b> — smashing his furniture and destroying his models. The
            problem lay with the weavers (whose livelihoods the machine threatened). Meanwhile{" "}
            <b>factory owners quickly pirated his design</b> — the &ldquo;Shuttle Club&rdquo; —{" "}
            <b>to avoid paying royalty</b> to John Kay. <b>Kay fled to France.</b>
          </EbhCallout>
        </div>

        <EbhReadStep n="02" title="Spinning — the Spinning Jenny (1760s)" sub="James Hargreaves, 1764 — eight threads at once" />
        <EbhCallout kind="insight" title="The machine and its mathematics">
          <b>James Hargreaves — 1764</b>: a single worker turned a wheel to rotate{" "}
          <b>multiple spindles at once</b>. The traditional spinning wheel could spin only{" "}
          <b>one single thread of yarn</b> at a time. Productivity: an individual&rsquo;s yarn
          production rose <b>eightfold</b>.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="warn" title="The response — 1768">
            Problems with the spinners: a <b>mob of local spinners broke into Hargreaves&rsquo;
            house in Blackburn</b> — <b>smashed his spinning jennies</b> and <b>forced him to
            flee the town</b>.
          </EbhCallout>
        </div>

        <Reveal>
          <ThreadRace />
        </Reveal>

        <EbhReadStep n="03" title="The leap — the Water Frame (1769)" sub="Richard Arkwright: barber, wigmaker, and the birth of the factory" />
        <EbhCallout kind="insight" title="From muscle to water">
          Spinning had relied <b>strictly on human muscle</b> — limited in strength and speed.{" "}
          <b>Richard Arkwright — 1769</b> (a barber and wigmaker by trade) patented the{" "}
          <b>water frame</b>: <b>water-powered machinery</b>. The machines were{" "}
          <b>too heavy for homes</b> — sparking the <b>birth of the factory system</b> — and{" "}
          <b>enabled mass production of cloth</b>.
        </EbhCallout>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Cromford Mill — 1771</p>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                In Derbyshire — the <b>world&rsquo;s first water-powered cotton spinning
                mill</b>. Presently the centerpiece of the <b>Derwent Valley Mills UNESCO World
                Heritage Site</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Birkacre Mill — 1777</p>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                Lancashire — <b>burnt</b> in the <b>1779 machine-breaking riots</b>, as{" "}
                Lancashire became an epicenter of cotton production.
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="04" title="The Arkwright monopoly" sub="Patents, courts, and a cascade of mills" />
        <Reveal>
          <EbhPanel label="Arkwright's rise and fall">
{`1769  patents the water frame
1775  GRAND PATENT — second massive patent,
      covering the preparatory carding process
1785  monopoly BROKE — court invalidated
      and overturned the patents
1788  Arkwright-style water mills → 143
1800  300 of the 900 factories are massive,
      centralized "Arkwright-type" complexes
      → 300–400 workers each`}
          </EbhPanel>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="why" title="The pattern to carry forward">
            Every machine in this chapter repeats one rhythm: <b>productivity leaps</b> →{" "}
            <b>resistance from spinners &amp; weavers</b> → <b>mass production</b> →{" "}
            <b>the factory system</b> → <b>working-class resistance</b>. Hold that rhythm — the
            next chapter is what it did to geography, and the one after is what it did to people.
          </EbhCallout>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lectures 10–11"
              q="Three inventors, three escapes: what happened to Kay (1753) and Hargreaves (1768) — and why is Arkwright the exception?"
              options={[
                "All three fled to France",
                "Mobs attacked Kay (smashing his models) and Hargreaves (smashing his jennies) — but Arkwright became a rich & successful businessman, his patents building a mill empire until courts broke them in 1785",
                "None faced resistance — the machines were welcomed",
                "Kay and Hargreaves were executed; Arkwright fled",
              ]}
              answer={1}
              explain="Kay: 1753 mob, furniture and models smashed, fled to France — while factory owners pirated the design (the 'Shuttle Club'). Hargreaves: 1768 Blackburn mob, jennies smashed, forced to flee. Arkwright played a different game — patents (1769, Grand Patent 1775), a monopoly of water-powered mills (143 by 1788; 300 of 900 factories by 1800, 300–400 workers each) — until the courts invalidated the patents in 1785."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Flying Shuttle <b>(Kay, 1733)</b>: 2× cloth, any width, one weaver — and a supply crisis in spinning.</>,
              <>Spinning Jenny <b>(Hargreaves, 1764)</b>: multiple spindles, <b>eightfold yarn</b>.</>,
              <>Water Frame <b>(Arkwright, 1769)</b>: water power, machines too heavy for homes → <b>factory system</b>; Cromford 1771; patents broken 1785.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 16 — STEAM & COTTONOPOLIS  (#steam-cottonopolis)
   with Machine 05 — the Cottonopolis counter
   ============================================================ */
const COTTON_YEARS = [
  { y: 1802, mills: 50, label: "Over 50 textile mills", note: "Steam has begun its work — the mill count climbs." },
  { y: 1816, mills: 43, label: "43 large-scale working mills", note: "McConnel & Kennedy employed over 1,000 workers in a single location." },
  { y: 1853, mills: 108, label: "108 massive cotton mills", note: "Cottonopolis at full roar — the town built around the factory." },
];

function useCountUp(target: number, duration = 650) {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function CottonopolisCounter() {
  const [idx, setIdx] = useState(2);
  const y = COTTON_YEARS[idx];
  const mills = useCountUp(y.mills);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 05 — the Cottonopolis counter · Manchester&rsquo;s mills, year by year
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {COTTON_YEARS.map((cy, i) => (
          <button
            key={cy.y}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            className="rounded-full border px-5 py-2 font-mono text-[.8rem] font-black transition-all duration-200"
            style={
              i === idx
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 8px 18px -8px rgba(161,98,7,.55)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            {cy.y}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={y.y}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="mt-5 rounded-2xl border p-5 text-center"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <p className="font-display text-5xl font-black" style={{ color: EBH_G[800] }}>
            {mills}
            {y.mills === 50 ? "+" : ""}
          </p>
          <p className="mt-1 text-[.92rem] font-extrabold text-[#3e2c1d]">{y.label}</p>
          <p className="mx-auto mt-2 max-w-md text-[.82rem] leading-relaxed text-muted-warm">{y.note}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-[#e0cb84] bg-white p-3 text-center">
          <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">Population 1771</p>
          <p className="mt-1 font-mono text-[1.05rem] font-black" style={{ color: EBH_G[800] }}>20,000</p>
        </div>
        <div className="rounded-xl border p-3 text-center" style={{ borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)" }}>
          <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>Population 1851</p>
          <p className="mt-1 font-mono text-[1.05rem] font-black" style={{ color: EBH_G[800] }}>3,00,000</p>
        </div>
      </div>
    </div>
  );
}

export function EbhSteamSection() {
  return (
    <Section id="steam-cottonopolis">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 12 — the liberation"
          title={
            <>
              Steam &amp; <span className="grad-gold">Cottonopolis</span>
            </>
          }
          lead="Water power had a catch written into geography: fast-flowing rivers. James Watt's rotary steam engine erased the catch — and Manchester grew from a market town into Cottonopolis."
        />

        <EbhReadStep n="01" title="The limitation — geography and nature" sub="Water wheels only turn where rivers run fast" />
        <EbhCallout kind="warn" title="Before steam">
          Water-powered mills were <b>dependent on geography and nature</b> — they required{" "}
          <b>fast-flowing rivers to turn water wheels</b>. Which meant mills sat in{" "}
          <b>rural / mountainous river valleys</b> — <b>away from consumer markets and ports</b>.
        </EbhCallout>

        <EbhReadStep n="02" title="Watt's rotary steam engine — 1781" sub="Heat in, motion out — anywhere" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
              {[
                { icon: Flame, t: "Heat energy", d: "burning fuel" },
                { icon: Wind, t: "Pressurized steam", d: "the working fluid" },
                { icon: Cog, t: "Mechanical work", d: "rotation, on demand" },
              ].map((s, i, arr) => (
                <React.Fragment key={s.t}>
                  <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fffdf6] p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[.9rem] font-extrabold leading-tight text-[#3e2c1d]">{s.t}</p>
                      <p className="text-[.74rem] text-muted-warm">{s.d}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 ? (
                    <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-4 text-center text-[.85rem] leading-relaxed text-muted-warm">
              <b>James Watt&rsquo;s rotary steam engine — patented 1781</b> — a mechanical device
              that converts heat energy into mechanical work by using pressurized steam.{" "}
              <b style={{ color: EBH_G[700] }}>It broke the limitation.</b>
            </p>
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="insight" title="Geographical liberation">
            Factories could now be built <b>anywhere</b> — and they{" "}
            <b>relocated to urban centers closer to ports</b>. Around them grew{" "}
            <b>steam mill towns</b>: towns organized around <b>factories</b>.
          </EbhCallout>
        </div>

        <EbhReadStep n="03" title="Manchester — Cottonopolis" sub="A town that reorganised itself around the mill" />
        <Reveal>
          <CottonopolisCounter />
        </Reveal>

        <EbhReadStep n="04" title="The inputs — coal and cotton" sub="Why here, why then" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Flame, t: "Coal supply", d: "Coal was available nearby — the South Lancashire coalfield" },
            { icon: Ship, t: "Bridgewater Canal — 1761", d: "10 miles / 16 km — carried coal to Manchester" },
            { icon: Ship, t: "Liverpool port", d: "Cotton arriving from across the seas" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.9rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4">
          <EbhCallout kind="why" title="What steam left behind">
            Geographical liberation · steam mill towns · the <b>rise of the factory system</b> ·
            the <b>rise of the corporation (joint stock company)</b> — and, gathering in the
            streets, the <b>labor movement: the Luddites, et cetera</b>. Next chapter.
          </EbhCallout>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 12"
              q="A mill owner in 1800 weighs two sites: a fast river in a mountain valley, or a coal-and-canal town near a port. After Watt (1781), what decides it — and what grew around the choice?"
              options={[
                "Rivers still win — steam was only for mines",
                "Steam broke the geography limitation: factories could be built anywhere and relocated to urban centers closer to ports — steam mill towns organized around factories",
                "The guilds chose the sites",
                "Parliament assigned each mill a town",
              ]}
              answer={1}
              explain="Watt's rotary steam engine (patented 1781) converts heat into mechanical work via pressurized steam — no fast-flowing river required. Geographical liberation followed: factories left the rural valleys for urban centres near ports, and steam mill towns grew organized around factories. Manchester — fed by South Lancashire coal (via the Bridgewater Canal, 1761) and Liverpool cotton — became Cottonopolis: 50+ mills by 1802, 108 by 1853, population 20,000 → 3,00,000."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Water power was <b>captive to geography</b> — fast rivers, far from markets.</>,
              <>Watt&rsquo;s rotary engine <b>(patented 1781)</b>: heat → pressurized steam → mechanical work, anywhere.</>,
              <>Manchester — <b>Cottonopolis</b>: 50+ (1802) → 43 (1816) → <b>108 mills (1853)</b>; population <b>20,000 → 3,00,000</b>; coal + canal + port.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 17 — THE LABOR MOVEMENT  (#labor-movement)
   ============================================================ */
const LABOR_PHASE_1 = [
  { y: "1760s", t: "Unorganized, secret resistance", d: "The first murmurs under the factory roof" },
  { y: "1799–1800", t: "The Combination Acts", d: "Outlaw trade unions and collective bargaining" },
  { y: "1811–1816", t: "The Luddite protests", d: "Smashing automated knitting frames and power looms — 'collective bargaining by riot'" },
  { y: "1812–1813", t: "The state answers in blood", d: "Frame Breaking Act 1812 — machine-wrecking a capital crime; 1813: seventeen Luddites executed" },
  { y: "1819", t: "The Peterloo Massacre", d: "60,000 peaceful workers in Manchester; cavalry charges; 18 dead, hundreds injured" },
];
const LABOR_PHASE_2 = [
  { y: "1824", t: "Repeal of the Combination Act", d: "35 statutes over 520 years — undone; a wave of strikes follows through late 1824 and early 1825" },
  { y: "1825", t: "Combinations of Workmen Act", d: "'Statutory unions' legalized — but stripped of effective collective action: wages and hours only" },
];

export function EbhLaborSection() {
  return (
    <Section id="labor-movement">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 13 — the answer from below"
          title={
            <>
              The <span className="grad-gold">labor movement</span> during the Industrial
              Revolution
            </>
          }
          lead="The factories had created a new class — and the class answered. From secret societies to a massacre to a half-freedom written into law: the working class learning to organise."
        />

        <EbhReadStep n="01" title="Why a movement at all?" sub="The factory's conditions built its own opposition" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Dangerous conditions", d: "Unguarded machines, dust, injury" },
            { t: "Long hours", d: "12–16 hours a day" },
            { t: "Child labor", d: "Small hands, smaller wages" },
            { t: "Secret resistance", d: "Unorganized — from the 1760s" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="h-full rounded-2xl border p-4" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
                <p className="text-[.88rem] font-extrabold" style={{ color: "#b3402c" }}>{c.t}</p>
                <p className="mt-1 text-[.78rem] leading-relaxed text-[#5a2a24]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="card-warm mt-4 p-5">
            <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
              <b>The labor movement</b> — the <b>collective organisation of the working class to
              further their shared political and economic interests</b>. Its tool:{" "}
              <b>collective bargaining</b> — the negotiation process between employers and a{" "}
              <b>labor union</b> (representing the workers) to set <b>wages, working hours, and
              employment conditions</b>. Its form: <b>trade unions</b>.
            </p>
          </div>
        </Reveal>

        <EbhReadStep n="02" title="Phase 1 — secret resistance & the Luddite myth (1760s–1820s)" sub="Ned Ludd, the Combination Acts, and Peterloo" />
        <EbhCallout kind="story" title="The folklore first">
          <b>Ned Ludd</b> — folklore about a young weaver&rsquo;s apprentice who broke two
          knitting frames. His name became the flag for everyone who answered the machine with a
          hammer.
        </EbhCallout>
        <Reveal delay={80}>
          <div className="mt-4 space-y-2">
            {LABOR_PHASE_1.map((s, i) => (
              <motion.div
                key={s.y}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-3 rounded-2xl border border-[#e0cb84] bg-[#fffdf6] p-4"
              >
                <span className="w-20 shrink-0 pt-0.5 font-mono text-[.72rem] font-black" style={{ color: EBH_G[700] }}>
                  {s.y}
                </span>
                <div>
                  <p className="text-[.9rem] font-extrabold leading-tight text-[#3e2c1d]">{s.t}</p>
                  <p className="mt-0.5 text-[.8rem] leading-relaxed text-muted-warm">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="warn" title="Byron's protest, 1812">
            The British government <b>prioritized industrial property over human lives</b> — the
            Frame Breaking Act made machine-wrecking a capital crime, punishable by death.{" "}
            <i>&ldquo;Is there not blood enough upon your penal code?&rdquo;</i> —{" "}
            <b>Lord Byron</b>. In <b>1813, seventeen Luddites were executed</b> under the new law.
          </EbhCallout>
        </div>
        <Reveal delay={80}>
          <div className="card-warm mt-4 p-5">
            <p className="flex items-start gap-2 text-[.92rem] leading-relaxed text-[#2b2014]">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#b3402c" }} />
              <span>
                <b>Peterloo, 1819.</b> A peaceful crowd of <b>60,000 workers</b> gathered in
                Manchester — demanding <b>parliamentary reform</b>. The cavalry charged the
                crowd: <b>18 people died</b> and hundreds were injured.
              </span>
            </p>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Phase 2 — legalization and grand alliances (1824–1830s)" sub="Repeal, strikes, and the half-freedom of 1825" />
        <Reveal>
          <div className="mt-1 space-y-2">
            {LABOR_PHASE_2.map((s, i) => (
              <motion.div
                key={s.y}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border p-4"
                style={{ borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)" }}
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-[.78rem] font-black" style={{ color: EBH_G[800] }}>{s.y}</span>
                  <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                </div>
                <p className="mt-1 text-[.84rem] leading-relaxed text-[#54430f]">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="insight" title="Read the 1825 Act like a lawyer">
            <b>Legalized</b>: unions may exist — as &ldquo;statutory unions&rdquo;.{" "}
            <b>Permitted</b>: meeting and combining to discuss and agree upon their{" "}
            <b>own wages, prices, or hours of work</b>. <b>Still illegal</b>: combining to strike
            over <b>machinery use</b>, <b>hiring/firing practices</b>, or the{" "}
            <b>number of apprentices</b> a shop took on. Result: a{" "}
            <b>drive toward underground and alternate methods</b>.
          </EbhCallout>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 13"
              q="Sequence the state's four answers to worker organising: what came first, and what came last?"
              options={[
                "Peterloo → Combination Acts → Frame Breaking Act → Repeal",
                "Combination Acts (1799–1800) → Frame Breaking Act (1812) + executions (1813) → Peterloo (1819) → Repeal (1824) and the 1825 Act",
                "Repeal first, then the Combination Acts",
                "The 1825 Act preceded all violence",
              ]}
              answer={1}
              explain="The arc: Combination Acts 1799 & 1800 (unions outlawed) → Frame Breaking Act 1812 (machine-wrecking = capital crime; 17 executed 1813) → Peterloo 1819 (60,000 crowd, cavalry, 18 dead) → Repeal 1824 (strike wave) → Combinations of Workmen Act 1825 (statutory unions, wages-and-hours-only). The state's first three answers were bans and blood; the last was a supervised half-freedom."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The movement = <b>collective organisation of the working class</b> for shared political &amp; economic interests — via <b>collective bargaining</b> and <b>trade unions</b>.</>,
              <>Phase 1: <b>secret societies → Combination Acts (1799/1800) → Luddites (1811–16) → Frame Breaking Act (1812) → Peterloo (1819)</b>.</>,
              <>Phase 2: <b>Repeal 1824 → strike wave → 1825 Act</b>: unions legal, but <b>wages &amp; hours only</b> — everything else still illegal.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 18 — EMPIRE & MERCANTILISM  (#empire)
   ============================================================ */
export function EbhEmpireSection() {
  return (
    <Section id="empire">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Live Session 4 — the global engine"
          title={
            <>
              Growth of Britain&rsquo;s empire &amp;{" "}
              <span className="grad-gold">mercantilist policies</span>
            </>
          }
          lead="The Industrial Revolution didn't happen in isolation in a single country. Its raw materials came from colonies; its goods sold back to them. The lecture closes the module by wiring Britain to the world."
        />

        <EbhReadStep n="01" title="Companies, not crowns" sub="How Britain's empire actually began" />
        <EbhCallout kind="story" title="The 1600s — a corporate land-grab">
          Efforts to establish overseas settlements began in the <b>1500s</b>. Then the{" "}
          <b>1600s</b>: in America — British colonies in <b>New England, Virginia, and
          Maryland</b>: the <b>Virginia Company of London</b> established <b>Jamestown in 1607</b>;
          the <b>Massachusetts Bay Company</b> took New England; <b>Maryland</b> was granted to{" "}
          <b>Cecilius Calvert (Lord Baltimore)</b>. In the East, the{" "}
          <b>East India Company began establishing trading posts in India in 1600</b> — leading,
          by the <b>1700s</b>, to the <b>1757 Battle of Plassey</b>. The kicker: early colonies
          were efforts of <b>particular companies</b> rather than of the <b>English crown</b>.
        </EbhCallout>

        <EbhReadStep n="02" title="Mercantilism — the empire's operating system" sub="Raw materials in, manufactured goods out, British ships between" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <p className="text-center font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
              The mercantilist loop
            </p>
            <div className="mt-4 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-2xl border border-[#e0cb84] bg-[#fffdf6] p-4">
                <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                  <Landmark className="h-4 w-4" style={{ color: EBH_G[700] }} /> The colonies
                </p>
                <ul className="mt-2 space-y-1 text-[.82rem] leading-relaxed text-muted-warm">
                  <li>· A <b>source of necessary raw materials</b> for England</li>
                  <li>· Monopolies on their products — <b>tobacco, cotton, indigo, &amp; sugar</b> — in the British market</li>
                  <li>· <b>Markets</b> for British manufactured goods</li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 py-1">
                <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} />
                <Ship className="h-4 w-4" style={{ color: EBH_G.sepia }} />
                <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-180" style={{ color: EBH_G[700] }} />
              </div>
              <div className="rounded-2xl border p-4" style={{ borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)" }}>
                <p className="flex items-center gap-2 text-[.95rem] font-extrabold" style={{ color: EBH_G[800] }}>
                  <Crown className="h-4 w-4" /> Britain
                </p>
                <ul className="mt-2 space-y-1 text-[.82rem] leading-relaxed text-[#54430f]">
                  <li>· Processes raw materials into <b>manufactured goods</b></li>
                  <li>· All colonial trade conducted by <b>British ships</b> — the <b>Navigation Act (1600s)</b></li>
                  <li>· <b>Excluded other countries</b> from trading with its colonies — the flow was focused onto Britain</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="The Industrial Revolution, globalised" sub="No island industrialises alone" />
        <EbhCallout kind="insight" title="The lecture's closing frame">
          The <b>globalization of the Industrial Revolution</b>: it <b>didn&rsquo;t happen in
          isolation</b> — not in a single country. The <b>Industrial Revolution and the
          colonies</b>: colonies supplied <b>raw material</b> and served as{" "}
          <b>markets for manufactured goods</b>. Recall the demand numbers from Lecture 10 —
          trade climbing to £43.2 million by 1800 — and you can see the empire inside the
          arithmetic.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="why" title="And so the course closes its first loop">
            Rules and players — you have now watched both move at every scale: a student&rsquo;s
            pocket money, a zamindar&rsquo;s ledger, a guild&rsquo;s masterpiece, a mill owner&rsquo;s
            patent, a Luddite&rsquo;s hammer, a company&rsquo;s charter. Module 4 (History of
            Business, 1850–1950) and Module 5 (Indian Business History, pre-1947) will pick up
            the players&rsquo; thread: division of labour, scientific management, the rise of
            large corporations — and India&rsquo;s entrepreneurs between the wars.
          </EbhCallout>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Live Session 4"
              q="Jamestown (1607) and the East India Company's trading posts (1600) share one surprising feature, per the lecture. What is it?"
              options={[
                "Both were royal expeditions commanded by the crown",
                "Both were efforts of particular companies rather than of the English crown",
                "Both were religious missions",
                "Both were financed by French investors",
              ]}
              answer={1}
              explain="Early colonies were corporate projects: the Virginia Company of London planted Jamestown in 1607; the Massachusetts Bay Company took New England; Maryland was granted to Lord Baltimore; the East India Company opened its Indian trading posts from 1600 (leading to Plassey, 1757). Empire began as business — the crown came later."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The empire began as <b>company business</b>: Jamestown 1607, Massachusetts Bay, Maryland, EIC posts from 1600, Plassey 1757.</>,
              <>Mercantilism: colonies = <b>raw materials + captive markets</b>; trade on <b>British ships</b> (Navigation Act); rivals <b>excluded</b>.</>,
              <>The IR was <b>global from birth</b> — colonies fed it raw material and bought its goods.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
