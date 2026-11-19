"use client";

/* ============================================================
   ATB · PART VI — Lectures 31, 32 & 33 — NEW lectures built
   word-for-word from scripts/atb_lectures/L31.md, L32.md and
   L33.md. PageRank first-round values verified in python:
   A 0.0375+0.85×0.25 = 0.25 · B 0.0375+0.85×0.125 = 0.14375 ·
   C 0.0375+0.85×(0.125+0.25+0.25) = 0.56875 · D 0.0375.
   ============================================================ */

import { Check, Coins, Cpu, Dices, Eye, FileText, Layers, Link2, Network, Scale, Sparkles, Waypoints } from "lucide-react";
import { Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  ATB_OLIVE,
  AtbCells,
  AtbFigure,
  AtbPill,
  AtbStepper,
} from "@/components/atb/AtbStepper";
import { eyebrowOf } from "@/components/atb/lectures";

/* ============================================================
   L31 — INTEGRATION OF SEARCHING AND SORTING IN WEB SEARCH
   (id="websearch")
   ============================================================ */

function PageRankGraphSVG() {
  return (
    <svg viewBox="0 0 640 220" className="h-auto w-full" role="img" aria-label="The four-page PageRank graph: A links to B and C, B links to C, C links back to A, D links to C — pages are nodes and hyperlinks are directed edges">
      <defs>
        <marker id="atbPgA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
      </defs>
      {/* nodes */}
      {[
        { x: 150, y: 50, l: "A", rank: "≈ 0.25" },
        { x: 490, y: 50, l: "B", rank: "≈ 0.14375" },
        { x: 490, y: 170, l: "C", rank: "≈ 0.56875" },
        { x: 150, y: 170, l: "D", rank: "≈ 0.0375" },
      ].map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r={26} fill="#f5c889" stroke="#c2410c" strokeWidth={2.2} />
          <text x={n.x} y={n.y + 6} textAnchor="middle" fontSize={17} fontWeight={900} fill="#2b2014">{n.l}</text>
          <text x={n.x} y={n.y + 44} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#8a4508">{n.rank}</text>
        </g>
      ))}
      {/* edges A→B, A→C, B→C, C→A, D→C */}
      <path d="M176 44 H 458" stroke="#c2410c" strokeWidth={2} fill="none" markerEnd="url(#atbPgA)" />
      <text x={317} y={36} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a4508">A → B · A → C (rank 0.25 split: 0.125 each)</text>
      <path d="M490 78 V 140" stroke="#c2410c" strokeWidth={2} fill="none" markerEnd="url(#atbPgA)" />
      <text x={502} y={112} fontSize={9.5} fontWeight={700} fill="#8a4508">B → C (full 0.25)</text>
      <path d="M462 176 H 182" stroke="#c2410c" strokeWidth={2} fill="none" markerEnd="url(#atbPgA)" />
      <text x={322} y={168} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a4508">C → A (full 0.25)</text>
      <path d="M150 142 V 82" stroke="#c2410c" strokeWidth={2} fill="none" markerEnd="url(#atbPgA)" />
      <text x={138} y={112} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#8a4508">D → C (full 0.25)</text>
      <text x={320} y={206} textAnchor="middle" fontSize={10} fontWeight={800} fill="#7c4a12">G = (V, E): pages are nodes, hyperlinks are directed edges — first-round ranks shown</text>
    </svg>
  );
}

export function AtbWebSearchSection() {
  return (
    <Section id="websearch">
      <SectionHead
        eyebrow={eyebrowOf("websearch")}
        title={
          <>
            Search meets sort — the <span className="grad-text">PageRank</span> story
          </>
        }
        lead="Modern web search combines searching (finding relevant information through graph traversal) and sorting (ranking results by importance). Google’s PageRank — patented in 1998 — is the foundational example of basic algorithmic concepts driving a trillion-dollar product."
      />

      <ReadStep n="1" title="Traditional search vs web search" sub="Traditional search finds exact matches — existence verification and item location with linear and binary search, sensitive to spelling, spacing and character changes. Web search emphasizes relevance over exactness." />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip"><FileText className="h-3.5 w-3.5" aria-hidden /> Traditional search</span>
            <ul className="mt-3 grid gap-2 text-[.85rem] leading-relaxed text-[#2b2014]">
              <li>Finds and retrieves <strong>exact matches</strong></li>
              <li>Concerned with <strong>existence verification</strong> and item location</li>
              <li>Uses <strong>linear and binary search</strong> algorithms</li>
              <li>Returns results <strong>only on an exact match</strong> — spelling, spacing or a changed character breaks it</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="card-warm h-full p-5">
            <span className="chip"><Network className="h-3.5 w-3.5" aria-hidden /> Web search</span>
            <ul className="mt-3 grid gap-2 text-[.85rem] leading-relaxed text-[#2b2014]">
              <li>Emphasizes <strong>relevance</strong> rather than exact matches</li>
              <li>Searches across complex structures — <strong>graphs and networks</strong></li>
              <li>Finds <strong>connections between documents</strong></li>
              <li>Presents results <strong>in order of relevance and authority</strong> — top results, not a fully sorted dataset</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <ReadStep n="2" title="From keyword counting to PageRank" sub="Late 1990s: Yahoo and AltaVista ranked by keyword frequency — repeated keywords ranked higher regardless of relevance, users dug through 8–10 pages, and keyword stuffing gamed everything. Larry Page and Sergei Brin’s PageRank (patented 1998 — named for Larry Page’s surname AND for ranking web pages) fixed relevance." />
      <AtbStepper
        title="What happens next? — PageRank’s two mechanisms"
        steps={[
          {
            label: "Mechanism 1 · links as endorsements: a link from one page to another endorses its authority.",
            detail: "Weighted voting begins — every hyperlink is a ballot.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="link" v="endorsement" tone="twin" />
                <AtbPill k="votes" v="unequal" tone="active" />
              </div>
            ),
          },
          {
            label: "Not all votes weigh the same: Wikipedia or established news outlets outweigh random blogs.",
            detail: "Authority dilution: a page linking to 100 sites gives each only 1/100th of its authority.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="authoritative link" v="heavy" tone="twin" />
                <AtbPill k="blog link" v="light" tone="broken" />
                <AtbPill k="100 outgoing links →" v="1/100th each" tone="active" />
              </div>
            ),
          },
          {
            label: "Mechanism 2 · the random surfer: 85% of the time a user follows links; 15% they jump to a completely new URL or search term.",
            detail: "Probabilistic assumption from large-scale user-behaviour analysis — the percentages live inside the formula.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="follow links" v="85%" tone="twin" />
                <AtbPill k="random jump" v="15%" tone="active" />
              </div>
            ),
          },
          {
            label: "The formula: New Rank = (0.15/N) + 0.85 × (rank received from other pages), N = total pages.",
            detail: "Iterate — each round uses the previous round’s ranks — until ranks stabilize around 13–14 rounds, then sort by final rank.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="New Rank" v="(0.15/N) + 0.85 × received" tone="twin" />
                <AtbPill k="rounds to stabilize" v="13–14" tone="active" />
              </div>
            ),
          },
        ]}
      />

      <ReadStep n="3" title="The implementation, step by step" sub="Represent pages as a directed graph (pages = nodes, hyperlinks = directed edges) · assign equal initial rank (0.25 for four pages) · apply the distribution formula · divide each page’s rank equally among its outgoing links · recalculate for every node · iterate until stable · sort by final rank." />
      <AtbFigure notice="first-round ranks land immediately where authority flows: C collects from three pages and tops the table, while D — no incoming links at all — sinks to the 0.0375 floor.">
        <PageRankGraphSVG />
      </AtbFigure>

      <AtbStepper
        title="What happens next? — first round on A→B, A→C, B→C, C→A, D→C"
        steps={[
          {
            label: "Start: four pages, equal initial rank 0.25 each. Base term (0.15/4) = 0.0375 for every page.",
            detail: "The 15% jump share is split evenly — nobody starts at zero.",
            frame: <AtbCells values={["A 0.25", "B 0.25", "C 0.25", "D 0.25"]} tones={["idle", "idle", "idle", "idle"]} labels={["", "", "", "no incoming"]} />,
          },
          {
            label: "Page A receives C’s full weight (C has one outgoing link): 0.0375 + 0.85 × 0.25 ≈ 0.25.",
            detail: "Endorsement from the round’s authority — A stays strong.",
            frame: <AtbPill k="A" v="0.0375 + 0.85×0.25 ≈ 0.25" tone="twin" />,
          },
          {
            label: "Page B receives half of A’s rank (A splits between B and C): 0.0375 + 0.85 × 0.125 ≈ 0.14375.",
            detail: "Authority dilution in action — the shared link weighs half.",
            frame: <AtbPill k="B" v="0.0375 + 0.85×0.125 ≈ 0.14375" tone="active" />,
          },
          {
            label: "Page C receives from A (0.125) + B (0.25) + D (0.25): 0.0375 + 0.85 × 0.625 ≈ 0.56875.",
            detail: "Three endorsements, one of them authoritative — C dominates the round.",
            frame: <AtbPill k="C" v="0.0375 + 0.85×0.625 ≈ 0.56875" tone="twin" />,
          },
          {
            label: "Page D receives nothing: 0.0375 + 0.85 × 0 = 0.0375.",
            detail: "The pattern: more incoming links from authoritative sources → higher rank; no incoming links → the minimal floor.",
            frame: <AtbCells values={["A ≈0.25", "B ≈0.144", "C ≈0.569", "D ≈0.038"]} tones={["twin", "active", "twin", "broken"]} />,
          },
        ]}
      />

      <Reveal className="mt-6">
        <Callout kind="insight" title="Batch to real-time — the processing evolution">
          <strong>1998–2010 (batch):</strong> PageRank recalculated every 3–4 weeks over static crawl snapshots — the
          “Google Dance” swung rankings between updates, and new pages could take weeks to appear.{" "}
          <strong>2010–present (real-time):</strong> incremental web crawling, dynamic graph integration for new and
          modified pages, PageRank still foundational — now enhanced by <strong>200+ additional ranking factors</strong>{" "}
          and machine-learning signals continuously tuned on user behaviour.
        </Callout>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="An authoritative page links to 100 different sites. Each receives…"
          options={["Its full authority", "1/100th of that page’s authority", "Zero authority", "Authority proportional to its size"]}
          answer={1}
          explain="Authority dilution: a page’s rank divides equally among all its outgoing links — 100 outgoing links mean 1/100th each. Fewer outgoing links concentrate the endorsement."
          source="Lecture 31 · weighted voting"
        />
        <Quiz
          q="In the random surfer model, users follow links 85% of the time and…"
          options={["Close the browser 15%", "Jump to a completely new URL or search term 15%", "Scroll 15% more", "Return to the homepage 15%"]}
          answer={1}
          explain="The 15% is the random jump — abandoning the current path for a completely new URL or search term. Both percentages are baked into New Rank = (0.15/N) + 0.85 × (rank received)."
          source="Lecture 31 · random surfer"
        />
      </div>
    </Section>
  );
}

/* ============================================================
   L32 — ALGORITHMS, AI & MACHINE LEARNING (id="aiml")
   The five-rung ladder; ML eats labelled gigabytes, DL
   tolerates unlabelled terabytes.
   ============================================================ */

function FiveRungsSVG() {
  return (
    <svg viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="The five-rung ladder: algorithm, expert system, machine learning, deep learning, generative AI — each rung eats more data and hands over more of the decision">
      <defs>
        <marker id="atbAiA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      {[
        { y: 8, t: "Algorithm", d: "explicit steps — you write every rule", data: "no training data", tone: "#f5c889" },
        { y: 56, t: "Expert system", d: "expert knowledge as if-then rules — cannot learn", data: "interviews & shadowing", tone: "#f5c889" },
        { y: 104, t: "Machine learning", d: "model learns patterns from labelled examples", data: "labelled GIGABYTES", tone: "#e2c290" },
        { y: 152, t: "Deep learning", d: "neural networks, many layers — finds its own features", data: "unlabelled TERABYTES", tone: "#e2c290" },
        { y: 200, t: "Generative AI", d: "a PRODUCT of self-supervised deep learning — creates new content", data: "the internet’s text, books, media", tone: "#eef4dd" },
      ].map((r, i) => (
        <g key={r.t}>
          <rect x={30 + i * 16} y={r.y} width={430 - i * 16} height={40} rx={9} fill={i >= 4 ? "#eef4dd" : "rgba(245,158,11,.12)"} stroke={i >= 4 ? "#7c9a3e" : "#c99a5b"} strokeWidth={1.6} />
          <text x={50 + i * 16} y={r.y + 17} fontSize={12} fontWeight={900} fill={i >= 4 ? "#3c521b" : "#7c4a12"}>{r.t}</text>
          <text x={50 + i * 16} y={r.y + 32} fontSize={9.5} fontWeight={600} fill={i >= 4 ? "#44621d" : "#8a6b45"}>{r.d}</text>
          <text x={480} y={r.y + 25} fontSize={9.5} fontWeight={800} fill={i >= 2 ? "#5d7a2e" : "#8a6b45"}>{r.data}</text>
          {i < 4 ? <path d={`M ${54 + i * 16} ${r.y + 40} V ${r.y + 52}`} stroke="#c99a5b" strokeWidth={1.6} markerEnd="url(#atbAiA)" fill="none" /> : null}
        </g>
      ))}
      <text x={320} y={254} textAnchor="middle" fontSize={10} fontWeight={800} fill="#7c4a12">each rung up: more data eaten, less hand-written logic — and the top rung is a product, not a technique</text>
    </svg>
  );
}

export function AtbAiMlSection() {
  return (
    <Section id="aiml" dark>
      <SectionHead
        dark
        eyebrow={eyebrowOf("aiml")}
        title={
          <>
            Algorithms, AI &amp; ML — the <span className="grad-text">five-rung ladder</span>
          </>
        }
        lead="Algorithms are most effective for structured, well-defined problems — clear input, predictable output: accounting calculations, payroll, CGPA conversion, ERP. Real life is unstructured: tea making, market analysis, sentiment. Each rung up the ladder buys capability with data."
      />

      <ReadStep n="1" title="The ladder, in one picture" sub="Algorithm → expert system → machine learning → deep learning → generative AI" dark />
      <AtbFigure dark notice="the data appetite is the ladder: hand-written rules need none, machine learning needs labelled gigabytes, deep learning tolerates unlabelled terabytes — and generative AI is a product built on self-supervised deep learning, not a learning technique itself.">
        <FiveRungsSVG />
      </AtbFigure>

      <ReadStep n="2" title="Expert systems — codified experts, zero learning" sub="Complex rule-based algorithms, not true AI: knowledge captured by shadowing and interviewing domain specialists, converted into if-then rules. They reason by citing which rule fired — and cannot learn or adapt after implementation. Dominant from the 1980s to the 2000s." dark />
      <AtbStepper
        dark
        title="What happens next? — the diagnostic rules multiply"
        steps={[
          {
            label: "A patient presents fever + cough. Which rule fires?",
            detail: "The base pair alone is too broad — viral infection, flu, COVID-19 or pneumonia all fit.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="symptoms" v="fever + cough" tone="active" />
                <AtbPill k="candidates" v="4 diagnoses" tone="broken" />
              </div>
            ),
          },
          {
            label: "Rule 1 fires: fever + cough + runny nose + sore throat → likely viral infection.",
            detail: "Each additional symptom narrows the rule — the if-then tree grows.",
            frame: <AtbPill k="IF fever+cough+runny nose+sore throat" v="THEN likely viral" tone="twin" />,
          },
          {
            label: "Rule 2 fires: fever + cough + difficulty breathing + loss of taste/smell → possible COVID-19.",
            detail: "Rules expand dramatically as doctors’ practice is codified symptom by symptom.",
            frame: <AtbPill k="IF fever+cough+breathing+taste loss" v="THEN possible COVID-19" tone="twin" />,
          },
          {
            label: "The system can explain itself — it cites the rule that fired. But it will never learn a new pattern.",
            detail: "The backend stays controlled by solution designers and programmers. Machine learning replaces exactly this rigidity.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="reasoning" v="cites the rule" tone="twin" />
                <AtbPill k="learning" v="none — hard-coded" tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <ReadStep n="3" title="Machine learning — the model decides" sub="ML algorithms create models that make decisions, rather than deciding directly. They need labelled training data (inputs AND known outputs), apply complex statistics to find patterns, and follow the workflow: train → validate → deploy. Use when patterns are hard to define, datasets are relatively large (gigabytes), and the output is clearly known." dark />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-4">
            <p className="flex items-center gap-2 font-extrabold text-[#f5e6cd]"><Layers className="h-4 w-4" style={{ color: "#f5c889" }} /> The ML workflow</p>
            <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">
              1 · labelled training data (input-output pairs) → 2 · the ML algorithm processes it to create a
              predictive model → 3 · the model is validated → 4 · the model makes the actual decisions.
            </p>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="card-warm h-full p-4">
            <p className="flex items-center gap-2 font-extrabold text-[#f5e6cd]"><Check className="h-4 w-4" style={{ color: ATB_OLIVE }} /> Why it beats expert systems</p>
            <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">
              More efficient pattern recognition · handles complex relationships between many variables ·{" "}
              <strong>models can be updated with new data</strong>. Examples: loan default prediction, customer
              segmentation by known criteria.
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep n="4" title="Deep learning and generative AI" sub="Deep learning: artificial neural networks with multiple hierarchical layers, modelled on how the brain consolidates pathways — terabytes or more of data, no labelled output required in many cases. Generative AI: a product of self-supervised deep learning that generates new text, images, audio, video and code — ChatGPT, Google Gemini, Anthropic Claude." dark />
      <Reveal>
        <Callout dark kind="insight" title="The healthcare scenario, five ways">
          One patient, five rungs: <strong>Algorithm</strong> — calculate BMI from height and weight ·{" "}
          <strong>Expert system</strong> — apply medical rules to determine obesity (gender, regional variations,
          history) · <strong>Machine learning</strong> — predict diabetes risk from age, BMI, lifestyle, genetics ·{" "}
          <strong>Deep learning</strong> — analyze medical scans for abnormalities · <strong>Generative AI</strong> —
          create a personalized health report with dietary recommendations and treatment options. The principle:{" "}
          <strong>use the simplest, most economical solution appropriate for the problem</strong> — a calculator for
          simple maths, not an AI system.
        </Callout>
      </Reveal>

      <AtbStepper
        dark
        title="What happens next? — choosing the rung, four business cases"
        steps={[
          {
            label: "Railway shortest route between stations → algorithm.",
            detail: "Structured, well-defined input and output — explicit steps win on cost and predictability.",
            frame: <AtbPill k="case" v="railway route" tone="twin" />,
          },
          {
            label: "Machine faults from sensor readings, rules provided by engineers → expert system.",
            detail: "Expert knowledge exists and can be written down; no learning required.",
            frame: <AtbPill k="case" v="fault codes" tone="twin" />,
          },
          {
            label: "Bank predicting loan default probability from customer data → machine learning.",
            detail: "Clear structured output desired, labelled history available — gigabytes of past loans.",
            frame: <AtbPill k="case" v="loan default" tone="active" />,
          },
          {
            label: "Detecting suspicious human activity in video footage → deep learning.",
            detail: "Output segments are unclear, the data is unstructured and enormous — terabytes of unlabelled video.",
            frame: <AtbPill k="case" v="video surveillance" tone="active" />,
          },
        ]}
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="Machine learning needs labelled training data of roughly…"
          options={["A few rows", "Gigabytes", "Terabytes", "One perfect example"]}
          answer={1}
          explain="The lecture’s scale: ML suits problems with relatively large datasets — gigabytes — where inputs AND expected outputs are known. Deep learning is the terabyte rung."
          source="Lecture 32 · machine learning"
        />
        <Quiz
          q="Generative AI is best described as…"
          options={["A new learning technique", "A product built on self-supervised deep learning", "A rule-based expert system", "A faster sorting algorithm"]}
          answer={1}
          explain="Generative AI is a product, not a learning technique — self-supervised deep learning trained on massive datasets (complete internet content, digitized books), continuously releasing new versions."
          source="Lecture 32 · generative AI"
        />
      </div>

      <Reveal className="mt-4">
        <Takeaways
          dark
          items={[
            <>Algorithms excel on <strong>structured</strong> problems; unstructured real life needs judgment.</>,
            <>Expert systems codify experts into <strong>if-then rules</strong> — explainable, but unable to learn.</>,
            <>ML creates <strong>models that decide</strong> — labelled gigabytes, clear outputs (default prediction, segmentation).</>,
            <>DL runs <strong>neural networks</strong> on unlabelled terabytes (image recognition, scan abnormalities).</>,
            <>Generative AI is the <strong>product</strong> rung — new text, images, audio, video, code.</>,
            <>Always choose the <strong>simplest, most economical</strong> solution that fits.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L33 — SORTING ALGORITHMS & WEB SEARCH RELEVANCE
   (id="pagerank") — the five-sort comparison table + PageRank
   stabilisation (< 0.001 change) closing the course.
   ============================================================ */

const SORT_TABLE: [string, string, string, string, string][] = [
  ["Bubble Sort", "O(n²)", "O(1)", "Frequent", "Educational purposes"],
  ["Selection Sort", "O(n²)", "O(1)", "Minimal", "When swaps are expensive"],
  ["Insertion Sort", "O(n²)", "O(1)", "Varies", "Small / growing datasets"],
  ["Merge Sort", "O(n log n)", "O(n)", "None", "Large datasets, stability required"],
  ["Quick Sort", "O(n log n)", "O(log n)", "Varies", "General-purpose sorting"],
];

export function AtbPageRankSection() {
  return (
    <Section id="pagerank">
      <SectionHead
        eyebrow={eyebrowOf("pagerank")}
        title={
          <>
            Sorting &amp; <span className="grad-text">relevance</span> — the course closes
          </>
        }
        lead="Sorting arranges elements by application requirements — ascending, descending, or by price and rating. Many search algorithms require organized data, so sorting is a crucial component of data structures and algorithms. And its payoff is the web itself."
      />

      <ReadStep n="1" title="The five sorts, one table" sub="Bubble, selection, insertion, merge, quick — the trade-offs between simplicity and efficiency, side by side." />
      <div className="card-warm mt-4 overflow-x-auto p-0">
        <table className="w-full min-w-[640px] text-left text-[.86rem]">
          <thead>
            <tr className="bg-[#fbf3e3]">
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Algorithm</th>
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Time complexity</th>
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Space complexity</th>
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Swaps</th>
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Best use case</th>
            </tr>
          </thead>
          <tbody>
            {SORT_TABLE.map(([a, t, s2, sw, u]) => (
              <tr key={a} className="border-t border-[#f3e2c8] bg-[#fffaf1]">
                <td className="px-4 py-2.5 font-bold text-[#7c4a12]">{a}</td>
                <td className="px-4 py-2.5 font-mono-warm font-bold" style={{ color: t.includes("log") ? "#44621d" : "#92600a" }}>{t}</td>
                <td className="px-4 py-2.5 font-mono-warm text-[#2b2014]">{s2}</td>
                <td className="px-4 py-2.5 text-[#2b2014]">{sw}</td>
                <td className="px-4 py-2.5 text-[#5b4a33]">{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AtbFigure notice="the quadratic row of operations grows brutally: going from 3 to 4 elements raises the work from 9 to 16 — multiplicative, and impractical at scale, which is exactly why merge and quick sort exist.">
        <div className="rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
          <svg viewBox="0 0 620 130" className="h-auto w-full" role="img" aria-label="Quadratic growth bars: 3 elements need 9 operations, 4 elements need 16, and the bar heights grow quadratically toward impracticality">
            {[
              { n: 3, ops: 9, h: 30 },
              { n: 4, ops: 16, h: 52 },
              { n: 10, ops: 100, h: 92 },
            ].map((b, i) => (
              <g key={b.n}>
                <rect x={90 + i * 170} y={116 - b.h} width={90} height={b.h} rx={6} fill={i === 2 ? "#c2410c" : "#f5c889"} />
                <text x={135 + i * 170} y={112 - b.h} textAnchor="middle" fontSize={11} fontWeight={900} fill="#7c4a12">{b.ops}</text>
                <text x={135 + i * 170} y={116} textAnchor="middle" fontSize={0} fill="none">.</text>
                <text x={135 + i * 170} y={126} textAnchor="middle" fontSize={10} fontWeight={800} fill="#8a6b45">{b.n} elements → n² ops</text>
              </g>
            ))}
          </svg>
        </div>
      </AtbFigure>

      <ReadStep n="2" title="The practical application — Google’s PageRank" sub="Web search combines searching, sorting and graph algorithms to rank pages by relevance — not simply checking existence. Link connectivity matters, quality of links matters, and a page linking to many others divides its weight equally among them." />
      <AtbStepper
        title="What happens next? — the PageRank loop until it stabilises"
        steps={[
          {
            label: "Formula: New Rank = 0.15/n + 0.85 × (sum of ranks received from other pages).",
            detail: "0.15 represents the 15% of users randomly jumping to new pages; 0.85 follows links.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="New Rank" v="0.15/n + 0.85 × received" tone="twin" />
                <AtbPill k="jump" v="15%" tone="active" />
                <AtbPill k="follow" v="85%" tone="active" />
              </div>
            ),
          },
          {
            label: "Round 1 runs on the four-page graph: A ≈ 0.25 · B ≈ 0.14375 · C ≈ 0.56875 · D ≈ 0.0375.",
            detail: "The first-round values from Lecture 31 — C dominates with three endorsements.",
            frame: <AtbCells values={["A ≈0.25", "B ≈0.144", "C ≈0.569", "D ≈0.038"]} tones={["twin", "active", "twin", "broken"]} />,
          },
          {
            label: "Round 2 recalculates from round 1’s ranks — authority now flows from C’s new weight.",
            detail: "Iterative recalculation: each round uses the previous round’s weights only for calculation purposes.",
            frame: <AtbPill k="round" v={2} tone="active" />,
          },
          {
            label: "Rounds continue until ranks stabilize — change < 0.001.",
            detail: "The stable values become the final page ranks; typically around 13–14 rounds.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="Δ rank" v="< 0.001" tone="twin" />
                <AtbPill k="rounds" v="13–14" tone="twin" />
              </div>
            ),
          },
          {
            label: "Sort pages by final PageRank score and present the top results.",
            detail: "Google originally recalculated monthly; now it uses dynamic calculation with cloud computing — combining graph traversal (BFS/DFS), sorting by relevance, and complex algorithms.",
            frame: <AtbCells values={["C", "A", "B", "D"]} tones={["done", "done", "done", "done"]} labels={["rank 1", "rank 2", "rank 3", "rank 4"]} />,
          },
        ]}
      />

      <Reveal className="mt-6">
        <Callout kind="insight" title="The course, stitched shut">
          Understanding multiple sorting approaches reveals the complexity trade-offs between simplicity and
          efficiency. Divide and conquer — merge sort and quick sort — delivers superior performance on large
          datasets. Sorting and searching form the foundation of real-world applications like web search; the
          difference between O(n²) and O(n log n) becomes critical as data scales; and the choice of algorithm
          depends on dataset size, memory constraints and the specific application. Every rung of this course —
          properties, linear structures, trees and graphs, hashing and blockchain, complexity, sorting, PageRank —
          is one idea applied at ever-larger scale.
        </Callout>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="Going from 3 to 4 elements under an O(n²) sort raises operations from 9 to…"
          options={["12", "16", "24", "81"]}
          answer={1}
          explain="The lecture’s arithmetic, reproduced exactly: 3² = 9 → 4² = 16. Quadratic growth is why O(n²) becomes impractical for large datasets."
          source="Lecture 33 · why O(n²) is problematic"
        />
        <Quiz
          q="Which sort is listed as ‘minimal swaps — best when swaps are expensive’?"
          options={["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"]}
          answer={1}
          explain="Selection sort compares first and swaps once per pass — fewer swaps than bubble sort but still extensive comparisons. Bubble swaps frequently (educational), insertion varies (small/growing data)."
          source="Lecture 33 · comparison table"
        />
      </div>

      <Reveal className="mt-4">
        <Practice
          title="The final drills"
          items={[
            { q: "Rank the five sorts for a 10-million-record catalogue and justify each pick with the table.", hint: "Merge O(n log n) if stability or pre-segmented data; quick O(n log n) general-purpose in-place; the O(n²) trio only for teaching, expensive-swap niches, or small growing lists." },
            { q: "Why does PageRank need SORTING at the very end of all that graph traversal?", hint: "Traversal computes the scores; the user sees the top results in order of relevance — the final sort is what turns ranks into a results page." },
          ]}
        />
      </Reveal>
    </Section>
  );
}
