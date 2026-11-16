"use client";

import {
  Banknote,
  Blocks,
  BrainCircuit,
  Cloud,
  Compass,
  Cpu,
  Database,
  GraduationCap,
  Landmark,
  MapPin,
  MonitorSmartphone,
  PlayCircle,
  Quote,
  Scale,
  Search,
  Server,
  Smartphone,
  SpellCheck,
  Timer,
  TriangleAlert,
  Workflow,
} from "lucide-react";
import { jumpTo } from "@/lib/use-open-section";
import { lectureOfChapter } from "@/components/foc/focLectures";
import { Reveal, Section, SectionHead, Callout, Quiz, StepsFlow, Pill, KV, Takeaways } from "./ui";

/* ============================================================
   LECTURE 04 — WHY LEARN PROGRAMMING
   The vibe-coding reality check, the enterprise IPO model,
   the cloud — and the honest answer to the LLM question.
   ============================================================ */
const VIBE_RISKS = [
  {
    name: "Debugging complexity",
    desc: "Code generation is easy — identifying and fixing errors becomes extremely hard without programming knowledge.",
  },
  {
    name: "Token costs",
    desc: "Each interaction with LLMs consumes expensive tokens; repeated requests for AI assistance exhaust budgets quickly.",
  },
  {
    name: "Code quality issues",
    desc: "Spaghetti code, security vulnerabilities, non-existent (hallucinated) library imports, logical errors in complex applications.",
  },
  {
    name: "Production failures",
    desc: "When AI-generated scripts fail in live production, developers without programming knowledge cannot troubleshoot the issues.",
  },
];

const PROD_STACK = [
  "Kubernetes", "Docker", "CI/CD", "Databases", "Encryption", "Firewalls",
  "WebSockets", "Caching", "Load balancers", "Rate limiting", "Sharding",
  "Queues (Kafka/RabbitMQ)", "Logging", "Auth & identity", "Monitoring",
  "Backups", "Deployments", "Testing", "Version control", "Availability",
];

export function WhySection() {
  return (
    <Section id="why">
      <SectionHead
        eyebrow="Lecture 04 · programming in the age of AI"
        title={
          <>
            Why learn programming when I can{" "}
            <span className="grad-text">vibe code</span> everything with LLMs?
          </>
        }
        lead="A fair question for 2025 — and Lecture 04 answers it head-on. AI coding assistants like Codex (OpenAI), Claude Code and Gemini Code Assist can write impressive code from plain English. But what happens on Day 30?"
      />

      {/* Instructor + evaluation scheme */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
              >
                <GraduationCap className="h-6 w-6" style={{ color: "#c2410c" }} />
              </span>
              <div>
                <p className="eyebrow">Your instructor</p>
                <h3 className="mt-1 text-xl font-bold">Dr. Raman Pathak</h3>
              </div>
            </div>
            <p className="mt-4 text-[.92rem] leading-relaxed text-[#2b2014]">
              PhD in <strong>Information Systems Management</strong> from{" "}
              <strong>IIT Kanpur</strong> — expertise spanning technology and management,
              including <strong>AI adoption in the BFSI sector</strong> (Banking, Finance,
              Securities and Insurance).
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <p className="eyebrow">Evaluation scheme — as announced in this lecture</p>
            <div className="mt-3 grid gap-2">
              <KV k="Participation" v="10% — assignments submitted after lectures" />
              <KV k="Quizzes" v="Best 2 of 3 recorded · 15% each (30% total)" />
              <KV k="Final exam" v="60% · offline mode" />
              <KV k="Platform" v="Python on Google Colab — a cloud-based IDE, no local installation" />
            </div>
            <p className="mt-3 text-[.75rem] italic text-muted-warm">
              Lecture 34 supersedes this scheme — see the final word.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Karpathy quote */}
      <Reveal className="mt-10">
        <div className="card-warm relative mx-auto max-w-3xl p-7">
          <Quote className="absolute -top-4 left-6 h-8 w-8" style={{ color: "#e8b878" }} />
          <p className="text-lg italic leading-relaxed text-[#2b2014]">
            “There’s a new kind of coding I call ‘vibe coding’, where you fully give in
            to the vibes, embrace exponentials, and forget that the code even exists.
            It’s possible because the LLMs are getting too good.”
          </p>
          <p className="mt-4 text-sm font-bold text-[#8a4508]">
            — Andrej Karpathy, Feb 2025 · former AI Director at Tesla & co-founder of
            OpenAI, who coined the term: prompting AI with plain-language instructions
            instead of traditional programming syntax.
          </p>
        </div>
      </Reveal>

      {/* Day 1 vs Day 30 */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm lift h-full p-6">
            <span className="chip">Day 1 of vibe coding</span>
            <h3 className="mt-3 text-xl font-bold">Feels amazing</h3>
            <ul className="mt-3 space-y-2 text-[.92rem] text-[#2b2014]">
              <li>• Ship fast, build ideas, look good, feel productive</li>
              <li>• Happy path only, minimal setup, just enough code</li>
              <li>• No overthinking — a demo is ready in hours</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm lift h-full p-6">
            <span className="chip" style={{ background: "#fbe9e4", color: "#9c3a3a", borderColor: "#eec0b3" }}>
              Day 30 of vibe coding
            </span>
            <h3 className="mt-3 flex items-center gap-2 text-xl font-bold">
              <TriangleAlert className="h-5 w-5" style={{ color: "#be4a4a" }} />
              The tower crumbles
            </h3>
            <div className="mt-3 grid gap-2.5">
              {VIBE_RISKS.map((r) => (
                <div key={r.name} className="rounded-xl bg-[#fffdf9] p-3" style={{ border: "1px solid #eec0b3" }}>
                  <p className="text-[.85rem] font-bold text-[#9c3a3a]">{r.name}</p>
                  <p className="mt-0.5 text-[.8rem] leading-relaxed text-[#2b2014]">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[.9rem] leading-relaxed text-muted-warm">
              Vibe coding is fun. <strong>Vibe debugging</strong> is the horror story —
              when you don’t understand the code, you can’t fix it either.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Iceberg */}
      <Reveal className="mt-10">
        <div className="card-warm overflow-hidden p-6 md:p-8">
          <h3 className="text-center text-2xl font-bold">
            The iceberg: vibe coding vs <span className="grad-text">production reality</span>
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-[.92rem] text-muted-warm">
            The gap between a prototype and a production-ready app is enormous — and it
            is filled with <strong>structural programming knowledge</strong>. The waterline below is where real engineers live.
          </p>

          {/* waterline above */}
          <div className="mt-8 rounded-2xl border border-[#f3e2c8] bg-gradient-to-b from-[#fff8ec] to-[#fdeed6] p-6">
            <p className="text-center text-[.74rem] font-extrabold uppercase tracking-[.2em] text-[#8a5a10]">
              above the surface — what the demo shows
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Working demo", "Looks good", "Happy path", "Quick prototype"].map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>

          {/* waterline */}
          <div className="h-2 w-full rounded-full" style={{ background: "linear-gradient(90deg,#f6d7a8,#c2410c,#f6d7a8)" }} />

          {/* below */}
          <div className="rounded-b-2xl p-6" style={{ background: "linear-gradient(180deg,#f9e9d2,#f3dcbc)" }}>
            <p className="text-center text-[.74rem] font-extrabold uppercase tracking-[.2em] text-[#8a5a22]">
              below the surface — what production demands
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {PROD_STACK.map((t, i) => (
                <span
                  key={t}
                  className="ice-tag rounded-lg bg-[#fffdf9] px-2.5 py-1 text-[.74rem] font-semibold text-[#7c4a12] shadow-sm"
                  style={{ border: "1px solid #ecd9bd", animationDelay: `${(i % 8) * 0.5}s` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Architect principle */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Reveal>
          <div className="card-warm lift h-full p-6 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
            >
              <Blocks className="h-6 w-6" style={{ color: "#c2410c" }} />
            </div>
            <h3 className="mt-3 font-bold">The LLM is the junior builder</h3>
            <p className="mt-1 text-[.88rem] text-muted-warm">
              You are the architect. AI writes code, but you must design, judge and own it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm lift h-full p-6 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
            >
              <Scale className="h-6 w-6" style={{ color: "#c2410c" }} />
            </div>
            <h3 className="mt-3 font-bold">Accountability stops with you</h3>
            <p className="mt-1 text-[.88rem] text-muted-warm">
              A broken age-checker or leaked API key in production is your failure, not the model’s —
              developers and managers stay legally and financially accountable even for AI-generated code.
            </p>
            <p className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">
              The deck names the regulators: <strong>RBI</strong> for banking, <strong>SEBI</strong> for
              financial markets, <strong>IRDAI</strong> for insurance — heavy penalties for violations.
              Real case: <strong>Paytm (PTM)</strong> faced bans for data-security mismanagement in its apps.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="card-warm lift h-full p-6 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
            >
              <Timer className="h-6 w-6" style={{ color: "#c2410c" }} />
            </div>
            <h3 className="mt-3 font-bold">Use LLMs to speed up execution</h3>
            <p className="mt-1 text-[.88rem] text-muted-warm">
              Engineers who understand code ship the “vibe-coded slop” properly — clean
              logic, not thousands of nested-ifs.
            </p>
          </div>
        </Reveal>
      </div>

      {/* The current reality of LLM capabilities */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">The current reality of LLM capabilities</h3>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(124,154,62,.12)", border: "1px solid rgba(124,154,62,.3)" }}
            >
              <p className="font-bold" style={{ color: "#647d2e" }}>Where LLMs excel</p>
              <ul className="mt-2 grid gap-1.5 text-[.87rem] text-[#2b2014]">
                <li>• Generating <strong>simple code</strong></li>
                <li>• About <strong>80% of prototype work</strong></li>
              </ul>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(190,74,74,.12)", border: "1px solid rgba(190,74,74,.3)" }}
            >
              <p className="font-bold" style={{ color: "#be4a4a" }}>Where LLMs struggle</p>
              <ul className="mt-2 grid gap-1.5 text-[.87rem] text-[#2b2014]">
                <li>• <strong>Complex programming</strong></li>
                <li>• <strong>Architecture design</strong></li>
                <li>• Integration with <strong>legacy systems</strong></li>
              </ul>
            </div>
          </div>
          <p className="mt-4 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Recent industry trends show <strong>Google, Meta and OpenAI actively rehiring engineers</strong>{" "}
            after the initial AI-driven layoffs — tokens are expensive, and human expertise remains
            irreplaceable. Programming knowledge is essential for the <strong>next 10+ years</strong>:
            AI is a <strong>powerful assistant, not a replacement</strong>.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Callout kind="story" title="Proof from industry">
              <strong>Forbes:</strong> Ford hired 350 engineers after its AI-first attempt
              failed — human engineering value is rising, not falling, in the AI era.
            </Callout>
            <Callout kind="story" title="The AI talent war">
              <strong>Business Standard:</strong> Google is re-hiring former engineers amid
              the global AI talent war, while rivals poach DeepMind staff with $100M offers.
              Deep understanding is the scarcest skill.
            </Callout>
          </div>
        </div>
      </Reveal>

      {/* The enterprise IPO model */}
      <Reveal className="mt-12">
        <div className="card-warm p-7 md:p-9">
          <p className="eyebrow">The same IPO skeleton — updated for our era</p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">The enterprise IPO model</h3>
          <p className="mt-2 max-w-3xl text-[.95rem] text-muted-warm">
            Input → Process → Output never changed — what changed is the scale of every stage.
          </p>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl p-5" style={{ background: "#fffdf9", border: "1px solid #f0e2c8" }}>
              <p className="eyebrow">Traditional IPO — 30 years ago</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[.85rem] font-bold text-[#7c4a12]">
                <span className="rounded-lg bg-[#fbf3e3] px-3 py-1.5">Input · keyboard</span>
                <span aria-hidden>→</span>
                <span className="rounded-lg bg-[#fbf3e3] px-3 py-1.5">Process · CPU</span>
                <span aria-hidden>→</span>
                <span className="rounded-lg bg-[#fbf3e3] px-3 py-1.5">Output · screen</span>
              </div>
              <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
                The user provides input via the keyboard, the CPU processes the data, the
                output appears on the screen. One user, one machine, one pipeline.
              </p>
            </div>
            <div
              className="rounded-2xl p-5"
              style={{ background: "linear-gradient(160deg,#fff8ec,#fdeed6)", border: "1px solid #f0d9ba" }}
            >
              <p className="eyebrow">Enterprise IPO — the current era</p>
              <ul className="mt-4 grid gap-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                <li>
                  • <strong>Input:</strong> high-velocity, high-variety, high-volume data streams —
                  real-time sensor data, structured and unstructured, in multiple formats
                  (text, audio, video, sensor readings) — measured in <strong>zettabytes (10²¹ bytes)</strong>
                </li>
                <li>
                  • <strong>Process:</strong> automated algorithms on cloud infrastructure execute
                  logical steps <strong>billions of times per second</strong> — computational cost near zero
                </li>
                <li>
                  • <strong>Output:</strong> actionable insights and business decisions, translated
                  into <strong>revenue growth or cost reduction</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Real-world IPO examples at enterprise scale */}
      <Reveal className="mt-10">
        <div className="card-warm overflow-hidden">
          <div className="px-6 pt-6 md:px-8">
            <p className="eyebrow">IPO at enterprise scale — six systems you use daily</p>
            <h3 className="mt-2 text-2xl font-bold">Real-world computing examples</h3>
            <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
              Every one of them is the same Input → Process → Output pipeline — with a business
              impact riding on the output.
            </p>
          </div>
          <div className="mt-5 overflow-x-auto px-4 pb-6 md:px-8">
            <table className="warm-table min-w-[880px]">
              <thead>
                <tr>
                  <th>System</th>
                  <th>Input</th>
                  <th>Process</th>
                  <th>Output</th>
                  <th>Business impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Weather forecasting</td>
                  <td>Billions of live data points every hour — wind speed, precipitation, humidity — from global satellite networks and ground stations</td>
                  <td>Physics-based and AI computer models analyzing the data streams</td>
                  <td>Local weather forecasts for the coming days</td>
                  <td>Critical for agriculture, logistics and disaster management</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Search engines (Google / Gemini)</td>
                  <td>User search query</td>
                  <td>Algorithm mapping query relevance across billions of indexed web pages</td>
                  <td>Most relevant web results, ranked by relevance</td>
                  <td>Advertising revenue and user engagement</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">UPI</td>
                  <td>User PIN and transaction amount</td>
                  <td>Request routed payer bank → NPCI server → payee bank, with multiple authentication checkpoints</td>
                  <td>Transaction-completion notification to both parties</td>
                  <td>Digital payment ecosystem at scale — completed within 3–4 seconds</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Google Maps</td>
                  <td>Satellite data, GPS signals, real-time traffic conditions, current road status</td>
                  <td>Route-optimization algorithms considering multiple variables</td>
                  <td>Optimal routes displayed on device screens</td>
                  <td>Navigation services and location-based advertising</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Recommendation engines (Amazon / YouTube)</td>
                  <td>Browsing history, purchase data, viewing patterns</td>
                  <td>Users clustered into segments; probability-based prediction models</td>
                  <td>Personalized product or video recommendations</td>
                  <td>Increased user engagement and sales conversion</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Uber</td>
                  <td>Driver GPS locations (sensor data), user ride requests, local traffic API, weather information, real-time demand metrics</td>
                  <td>Dynamic pricing algorithm (surge fares when demand spikes — think rain hour), route optimization, matching engine connecting riders to drivers within a 500-metre radius</td>
                  <td>Driver dispatch with precise ETA, dynamic price quote on the rider’s screen, transaction execution</td>
                  <td>Maximizes platform yield and operational efficiency — surge pricing balances supply and demand</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      {/* The role of cloud computing */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Cloud className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">The role of cloud computing</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.95rem] leading-relaxed text-[#2b2014]">
            Traditional computing required expensive <strong>on-premise server infrastructure</strong>.
            Cloud providers — <strong>AWS</strong>, <strong>Google Cloud Platform</strong>,{" "}
            <strong>Microsoft Azure</strong> — deliver computing power over the internet, enabling:
          </p>
          <ul className="mt-4 grid gap-2 text-[.9rem] text-[#2b2014] md:grid-cols-2">
            <li>• Processing of massive data streams globally</li>
            <li>• Scalability to billions of simultaneous requests</li>
            <li>• Dramatic reduction in infrastructure costs</li>
            <li>• Real-time data processing and response delivery</li>
          </ul>
        </div>
      </Reveal>

      {/* Quizzes */}
      <Reveal className="mt-10">
        <div className="grid gap-5 md:grid-cols-2">
          <Quiz
            source="From the lecture"
            q="Your AI-generated script worked on Day 1 but now fails in live production — and nobody on the team can tell why. Which vibe-coding risk is this?"
            options={[
              "Token costs — the LLM ran out of tokens",
              "Production failures — when AI scripts fail in live production, developers without programming knowledge cannot troubleshoot them",
              "Non-existent library imports",
              "The model is offline for maintenance",
            ]}
            answer={1}
            explain="This is the fourth risk the lecture names. Code generation is easy; production is not. Without programming knowledge, live failures cannot be troubleshot — debugging complexity, token burn and code-quality issues all funnel into the same lesson."
          />
          <Quiz
            source="From the lecture"
            q="Which sentence best describes the ENTERPRISE IPO model of today — versus the traditional model of 30 years ago?"
            options={[
              "Keyboard input → CPU processes → output on screen — unchanged, just faster now",
              "Zettabyte-scale streams of text, audio, video and sensor data → automated algorithms on cloud infrastructure executing logical steps billions of times per second → insights translated into revenue growth or cost reduction",
              "Input is now optional — LLMs generate their own data",
              "The model only applies to social-media companies",
            ]}
            answer={1}
            explain="Traditional IPO: keyboard → CPU → screen. Enterprise IPO: high-velocity/high-variety/high-volume data streams measured in zettabytes (10²¹ bytes), cloud algorithms executing billions of steps per second at near-zero computational cost, and output measured in business impact."
          />
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways
          items={[
            <>Programming knowledge remains essential despite AI — it enables <strong>code auditing, debugging and professional accountability</strong>.</>,
            <>The four vibe-coding risks: <strong>debugging complexity, token costs, code quality issues and production failures</strong>.</>,
            <>Computing means solving problems through <strong>defined logical steps</strong> — whether performed by humans or machines.</>,
            <>The <strong>enterprise IPO model</strong> runs on cloud infrastructure: zettabyte-scale inputs, billions of steps per second, output measured in business impact.</>,
            <>AI is a <strong>powerful assistant, not a replacement</strong> — architecture, design and system oversight still need human expertise.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 02 — WHAT IS COMPUTING
   Definitions, history, the IPO model and the six everyday
   IPO pipelines — plus the computing-vs-computer distinction.
   ============================================================ */
const TIMELINE = [
  {
    era: "Ancient Abacus · 3000 BC",
    icon: <Landmark className="h-5 w-5" />,
    text: "Merchants ran addition and subtraction on the ancient abacus — demonstrating that computing existed before electronic machines, as a methodology rather than a technology.",
  },
  {
    era: "Navigation Tables · 1600s–1800s",
    icon: <Compass className="h-5 w-5" />,
    text: "Sailors fixed their position at sea by processing coordinates through pre-calculated mathematical tables — computing on paper, centuries before silicon.",
  },
  {
    era: "Human Computers · World War II",
    icon: <Server className="h-5 w-5" />,
    text: "Women performed complex arithmetic calculations to determine artillery trajectories — and their job title was literally “computers”. The term referred to humans before it referred to machines.",
  },
  {
    era: "The machine era",
    icon: <Cpu className="h-5 w-5" />,
    text: "Room-sized electronic computers took over the arithmetic — same human idea of step-by-step calculation, executed at machine speed.",
  },
];

const IPO_EXAMPLES = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    name: "Smartphone applications",
    input: "User touches and swipes on the screen — e.g. selecting food items in a delivery app",
    process: "App logic executes based on user actions — adding items to cart, processing payments",
    output: "Visual feedback appears on the screen for each action",
  },
  {
    icon: <Search className="h-5 w-5" />,
    name: "Google Search",
    input: "Natural language query typed into the search bar",
    process: "An algorithm searches billions of web pages in milliseconds, ranking them by keyword relevance, page speed, mobile friendliness and domain trustworthiness",
    output: "Ranked search results displayed on the screen",
  },
  {
    icon: <Banknote className="h-5 w-5" />,
    name: "UPI payments",
    input: "Amount to transfer and the UPI PIN",
    process: "Bank verifies identity, checks account balance, debits the sender’s account, credits the receiver’s account",
    output: "Confirmation notifications sent to both parties",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    name: "Google Maps",
    input: "Current location and destination address",
    process: "A shortest-path algorithm evaluates hundreds of possible routes, considering current traffic, roadblocks and other factors",
    output: "Recommended route displayed with estimated travel time",
  },
  {
    icon: <PlayCircle className="h-5 w-5" />,
    name: "YouTube recommendation engine",
    input: "Video watched, watch duration, sections skipped",
    process: "The algorithm compares user behaviour with millions of other users globally, identifying viewing patterns — a machine-learning process",
    output: "Personalized video recommendations related to the user’s interests",
  },
  {
    icon: <SpellCheck className="h-5 w-5" />,
    name: "Smartphone autocorrect",
    input: "Letters and words typed by the user",
    process: "The algorithm analyzes typed letters and previous words, predicting the next word from patterns learned from millions of user sentences",
    output: "Suggested next word for user selection",
  },
];

export function ComputingSection() {
  return (
    <Section id="computing">
      <SectionHead
        eyebrow="Lecture 02 · what is computing"
        title={
          <>
            What exactly <span className="grad-text">is</span> computing?
          </>
        }
        lead="Before touching a single line of code, we build the mental model that everything else in this course sits on top of."
      />

      {/* Definitions */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-7">
            <p className="eyebrow">Working definition</p>
            <p className="mt-3 text-lg leading-relaxed">
              <strong className="term">Computing</strong> is the process of using{" "}
              <strong>well-defined steps</strong> to solve problems by{" "}
              <strong>collecting information</strong>, <strong>processing it</strong>, and
              producing a <strong>useful result</strong>.
            </p>
            <p className="mt-4 text-[.92rem] leading-relaxed text-muted-warm">
              Notice: no mention of screens, keyboards or silicon. Computing is a{" "}
              <em>process</em> — the machine is just its fastest executor.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-7" style={{ background: "linear-gradient(150deg,#fffaf0,#fdeed6)" }}>
            <p className="eyebrow">The formal definition</p>
            <p className="mt-3 text-lg italic leading-relaxed text-[#2b2014]">
              “Computing is any goal-oriented activity requiring, benefiting from, or
              creating computers.”
            </p>
            <p className="mt-4 text-sm font-bold text-[#8a4508]">
              — ACM (Association for Computing Machinery)
            </p>
            <p className="mt-3 text-[.9rem] leading-relaxed text-muted-warm">
              Every example you’ll meet in this course obeys one deep pattern:
            </p>
            <p className="mt-2 rounded-xl bg-[#fffdf9] p-3 text-center text-[.95rem] font-bold text-[#7c4a12]" style={{ border: "1px dashed #e5c79d" }}>
              a defined set of instructions → acting on data → to produce a result
            </p>
          </div>
        </Reveal>
      </div>

      {/* Timeline */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">Computing did not start with computers</h3>
      </Reveal>
      <div className="relative mt-6">
        <div
          aria-hidden
          className="absolute left-6 top-0 h-full w-[2px] md:left-1/2"
          style={{ background: "linear-gradient(180deg,#f3dcbc,#c2410c,#f3dcbc)" }}
        />
        <div className="grid gap-6">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.era} delay={i * 90}>
              <div
                className={`relative flex flex-col gap-3 pl-16 md:w-1/2 ${
                  i % 2 === 0 ? "md:pl-0 md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#fdf6ee] text-white shadow-lg ${
                    i % 2 === 0 ? "left-0 md:-right-6 md:left-auto" : "left-0"
                  }`}
                  style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
                >
                  {t.icon}
                </span>
                <div className="card-warm lift p-5">
                  <h4 className="font-bold text-[#7c4a12]">{t.era}</h4>
                  <p className="mt-1 text-[.92rem] leading-relaxed text-[#2b2014]">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* IPO model */}
      <Reveal className="mt-14">
        <div className="card-warm p-7 md:p-9">
          <p className="eyebrow">The IPO model — foundation of all computing</p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Input → Process → Output
          </h3>
          <p className="mt-2 max-w-3xl text-[.95rem] text-muted-warm">
            The fundamental principle underlying every computing process. It applies
            universally — from a simple calculator to artificial intelligence — and it appears
            in every digital application and device you touch.
          </p>

          <div className="mt-8">
            <StepsFlow
              steps={[
                {
                  label: "INPUT",
                  sub: "Raw data or information provided to the system",
                  icon: <Database className="h-5 w-5" style={{ color: "#c2410c" }} />,
                },
                {
                  label: "PROCESS",
                  sub: "The execution of algorithms and logical operations on the input",
                  icon: <Workflow className="h-5 w-5" style={{ color: "#c2410c" }} />,
                },
                {
                  label: "OUTPUT",
                  sub: "The meaningful result produced after processing",
                  icon: <MonitorSmartphone className="h-5 w-5" style={{ color: "#c2410c" }} />,
                },
              ]}
            />
          </div>
        </div>
      </Reveal>

      {/* Six real-world IPO examples */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Real-world examples of the <span className="grad-text">IPO model</span>
        </h3>
        <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
          Six systems you already use today — each one is the same three-stage pipeline.
        </p>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {IPO_EXAMPLES.map((e, i) => (
          <Reveal key={e.name} delay={i * 80}>
            <div className="card-warm lift h-full p-5">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
                >
                  {e.icon}
                </span>
                <h4 className="text-[.95rem] font-bold leading-snug">{e.name}</h4>
              </div>
              <div className="mt-3 grid gap-1.5 text-[.8rem] leading-relaxed text-[#2b2014]">
                <p className="rounded-lg bg-[#fbf3e3] px-2.5 py-1.5">
                  <strong className="text-[#a0410a]">Input:</strong> {e.input}
                </p>
                <p className="rounded-lg bg-[#fbf3e3] px-2.5 py-1.5">
                  <strong className="text-[#a0410a]">Process:</strong> {e.process}
                </p>
                <p className="rounded-lg bg-[#fbf3e3] px-2.5 py-1.5">
                  <strong className="text-[#a0410a]">Output:</strong> {e.output}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Computing vs Computer */}
      <Reveal className="mt-14">
        <h3 className="text-2xl font-bold">
          Computing vs. Computer — <span className="grad-text">a critical distinction</span>
        </h3>
        <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
          The lecture draws a line the exam rewards: one is an idea, the other is the machine
          that runs the idea fast.
        </p>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
              >
                <Workflow className="h-5 w-5" style={{ color: "#c2410c" }} />
              </span>
              <h4 className="text-lg font-bold">Computing</h4>
            </div>
            <p className="mt-3 text-[.92rem] leading-relaxed text-[#2b2014]">
              The <strong>abstract intellectual concept</strong> of problem-solving through
              defined, step-by-step procedures.
            </p>
            <ul className="mt-3 grid gap-1.5 text-[.86rem] text-[#2b2014]">
              <li>• Existed for <strong>thousands of years</strong> before electronic computers were invented</li>
              <li>• Can be performed with <strong>pen and paper, an abacus, or any computational tool</strong></li>
              <li>• The intelligence comes from the <strong>humans who design the algorithms</strong></li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
              >
                <Cpu className="h-5 w-5" style={{ color: "#c2410c" }} />
              </span>
              <h4 className="text-lg font-bold">Computer</h4>
            </div>
            <p className="mt-3 text-[.92rem] leading-relaxed text-[#2b2014]">
              The <strong>physical electronic tool</strong> that executes computing processes
              with speed and precision.
            </p>
            <ul className="mt-3 grid gap-1.5 text-[.86rem] text-[#2b2014]">
              <li>• A <strong>fast executor</strong> of computing processes — not a thinker</li>
              <li>• The problem-solving methodology still comes from the humans who design the algorithms</li>
              <li>• Just one possible executor — computing also runs on pen and paper, or an abacus</li>
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Callout kind="warn" title="Exam tip — from the lecture">
          When asked to define computing, <strong>avoid mentioning computers</strong> — focus on
          the <strong>process and methodology</strong>. Computing predates machines by millennia;
          the computer is just its fastest executor.
        </Callout>
      </Reveal>

      {/* Four pillars pointer */}
      <Reveal className="mt-10">
        <div className="card-warm flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
          <span className="chip shrink-0">Up next</span>
          <p className="text-[.92rem] leading-relaxed text-[#2b2014]">
            All computing processes depend equally on <strong>four essential pillars</strong> —{" "}
            <strong>data</strong>, <strong>algorithms</strong>, <strong>hardware</strong> and{" "}
            <strong>software</strong>. The failure of any single pillar causes the entire
            computing process to fail. The pillars overview is the next chapter.
          </p>
        </div>
      </Reveal>

      {/* Quizzes */}
      <Reveal className="mt-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Quiz
            source="From the lecture"
            q="In a food-delivery app, tapping “add to cart” and paying runs the app logic — which IPO stage is that?"
            options={[
              "Input — the tap is the data entering the system",
              "Process — the app logic executes: cart updates, payment is processed",
              "Output — the screen feedback",
              "Storage — the cart is saved for later",
            ]}
            answer={1}
            explain="Input is the touch or swipe itself; PROCESS is the app logic executing (adding to cart, processing payments); output is the visual feedback for each action. Every app you use is this same IPO pipeline."
          />
          <Quiz
            source="From the lecture"
            q="Which answer defines COMPUTING the way this course wants it defined in the exam?"
            options={[
              "Computing is what a computer does — you can’t define one without the other",
              "Computing is the abstract problem-solving process through defined step-by-step procedures — the computer is just the fast executor",
              "Computing is the physical electronic tool that executes processes with speed and precision",
              "Computing is another word for programming",
            ]}
            answer={1}
            explain="Computing existed for thousands of years before electronic computers — pen and paper, an abacus. The intelligence comes from the humans who design the algorithms; the computer is the physical tool that executes them fast. In the exam, define computing WITHOUT mentioning computers — focus on process and methodology."
          />
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways
          items={[
            <>Computing is about <strong>solving problems through well-defined steps</strong>, not about machines — it predates computers by millennia.</>,
            <>The <strong>IPO model — Input → Process → Output — is universal</strong>: smartphone apps, search, UPI, maps, recommendations, autocorrect.</>,
            <>Computing is the <strong>method</strong>; the computer is the <strong>machine that executes it fast</strong>. In the exam, define computing without mentioning computers.</>,
            <>Four pillars carry every computing process — <strong>data, algorithm, hardware, software</strong>. Lose any one and the process collapses.</>,
            <>Data must be <strong>contextualized</strong> to become meaningful information: “38.5” is raw data; “patient’s temperature is 38.5°C” is information.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   FOUR PILLARS OVERVIEW
   ============================================================ */
const PILLARS = [
  {
    id: "data",
    icon: <Database className="h-7 w-7" />,
    n: "Pillar 1",
    name: "Data",
    line: "The raw material — facts and figures that everything acts upon.",
    hue: "linear-gradient(135deg,#fde8cf,#fbcf9f)",
  },
  {
    id: "algorithm",
    icon: <Workflow className="h-7 w-7" />,
    n: "Pillar 2",
    name: "Algorithm",
    line: "The intellectual core — the method for solving a problem.",
    hue: "linear-gradient(135deg,#fce7d4,#f9c79a)",
  },
  {
    id: "hardware",
    icon: <Cpu className="h-7 w-7" />,
    n: "Pillar 3",
    name: "Hardware",
    line: "The physical foundation — silicon that actually runs the steps.",
    hue: "linear-gradient(135deg,#f9e4d0,#f6bd8e)",
  },
  {
    id: "software",
    icon: <MonitorSmartphone className="h-7 w-7" />,
    n: "Pillar 4",
    name: "Software",
    line: "The instructions — what tells the hardware what to do.",
    hue: "linear-gradient(135deg,#f7dfc8,#f2b283)",
  },
];

/* Chapter jump — the four cards deep-link to their pillar chapters.
   Same contract the ⌘K palette uses (src/lib/use-open-section.ts):
   if the chapter is already mounted, jumpTo scrolls and flashes it;
   otherwise dispatch the live "atlas:open-section" event with the
   section id as detail — FocApp's useOpenSection("foc") listener makes
   the chapter exist (switching lecture slices if needed) and scrolls. */
function jumpToPillar(id: string): void {
  if (!lectureOfChapter(id)) return;
  const el = document.getElementById(id);
  if (el) {
    jumpTo(el);
    return;
  }
  window.dispatchEvent(new CustomEvent("atlas:open-section", { detail: id }));
}

export function PillarsSection() {
  return (
    <Section id="pillars" dark>
      <SectionHead
        dark
        eyebrow="The big picture"
        title={
          <>
            What constitutes computing?{" "}
            <span className="grad-text">The Four Pillars</span>
          </>
        }
        lead="Everything in this course — and everything in computing — rests on four pillars. Each pillar gets its own deep-dive section in these notes."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <button
              type="button"
              onClick={() => jumpToPillar(p.id)}
              aria-label={`Open the ${p.name} chapter`}
              className="block h-full w-full cursor-pointer text-left"
            >
              <div className="card-warm lift h-full p-6 text-center">
                <span
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: p.hue, color: "#8a3d10" }}
                >
                  {p.icon}
                </span>
                <p className="mt-4 text-[.7rem] font-extrabold uppercase tracking-[.22em] text-[#e8b878]">
                  {p.n}
                </p>
                <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#cbb392]">{p.line}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <Callout dark kind="insight" title="How the pillars connect">
          Data flows <strong>into</strong> algorithms, algorithms are executed{" "}
          <strong>by</strong> hardware, and software <strong>orchestrates</strong> the
          whole dance. Remove any pillar and computing collapses. In Python later on,
          you’ll write all four: data in variables, algorithms in your logic, hardware
          executing it, and your program as the software.
        </Callout>
      </Reveal>
    </Section>
  );
}
