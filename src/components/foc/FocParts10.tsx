"use client";

/* ============================================================
   FocParts10 — the FoC rebuild, file 10.

   #data-origin       (Lecture 05 — the fourth classification:
                       primary vs secondary data + metadata)
   #system-software   (Lecture 06 — system software: the OS,
                       utility software, productivity apps)

   Lecture 05 completes the data taxonomy with its fourth lens —
   where data comes from. Lecture 06 splits the old software
   chapter in two: the machine-side half (OS functions, the OS
   table, utilities, productivity apps, key-concept hierarchies)
   is re-homed here, aligned word-for-word with the source deck.
   ============================================================ */

import React from "react";
import {
  AppWindow,
  BookMarked,
  Camera,
  Cpu,
  Database,
  FileArchive,
  FileText,
  FlaskConical,
  FolderOpen,
  FolderTree,
  HardDrive,
  Info,
  Keyboard,
  Library,
  Lock,
  MemoryStick,
  Monitor,
  MessageCircle,
  Presentation,
  Server,
  ShieldCheck,
  Table2,
  Wrench,
  Zap,
} from "lucide-react";
import {
  Callout,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   LECTURE 05 — #data-origin
   ============================================================ */

type OriginCard = {
  icon: React.ReactNode;
  name: string;
  def: string;
  listLabel: string;
  list: string[];
  pros: string[];
  cons: string[];
};

const PRIMARY_CARD: OriginCard = {
  icon: <FlaskConical className="h-5 w-5" />,
  name: "Primary data",
  def: "Data collected firsthand by researchers for a specific purpose — original, not previously published.",
  listLabel: "Collection methods",
  list: [
    "Creating and distributing surveys — Google Forms sent via email, WhatsApp and social media",
    "Conducting experiments and recording observations",
    "Collecting sensor readings from deployed IoT (Internet of Things) devices",
    "Arduino microcontrollers and weather stations collecting physical data — the course pipeline: Arduino MKR IoT Carrier + Wi-Fi module → Weather Station web service → Snowflake data repository",
  ],
  pros: [
    "Tailored to the exact research questions and purposes",
    "Reliable source with known collection methods",
    "Direct control over the data-gathering process",
  ],
  cons: [
    "Time-consuming — creating, distributing and collecting responses all take time",
    "Expensive, requiring financial and human resources",
    "Often limited to smaller sample sizes due to cost and time constraints",
  ],
};

const SECONDARY_CARD: OriginCard = {
  icon: <BookMarked className="h-5 w-5" />,
  name: "Secondary data",
  def: "Data collected by someone else for a different purpose, which is then reused for new analysis.",
  listLabel: "Sources",
  list: [
    "Bloomberg and Prolific databases",
    "SEBI (Securities and Exchange Board of India) data",
    "IRDAI (Insurance Regulatory and Development Authority) data",
    "NSSO (National Sample Survey Office) survey data",
    "WHO Global Health Statistics",
    "Government census data",
    "Wikipedia structured data",
  ],
  pros: [
    "Large-scale collection possible thanks to organizational resources",
    "Often available for free or at minimal cost",
    "Authoritative and controlled by established organizations",
    "No need to conduct individual data collection",
  ],
  cons: [
    "May not perfectly match specific research questions",
    "Data quality depends on the original collector",
    "Limited control over how the data was collected",
    "Possible subscription or licensing fees required for access",
  ],
};

function OriginCardView({ card }: { card: OriginCard }) {
  return (
    <div className="card-warm flex h-full flex-col p-6">
      <div className="flex items-center gap-2">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
        >
          {card.icon}
        </span>
        <h4 className="text-lg font-bold">{card.name}</h4>
      </div>
      <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">{card.def}</p>
      <p className="mt-4 text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
        {card.listLabel}
      </p>
      <ul className="mt-2 space-y-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
        {card.list.map((e) => (
          <li key={e}>• {e}</li>
        ))}
      </ul>
      <div className="mt-4 grid gap-2">
        <div className="rounded-xl p-3" style={{ background: "#f4f7ec", border: "1px dashed #c4d3a4" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#5f7a33" }}>
            Advantages
          </p>
          <ul className="mt-1.5 space-y-1 text-[.84rem] leading-relaxed text-[#2b2014]">
            {card.pros.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-3" style={{ background: "#fbe9e4", border: "1px dashed #eec0b3" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#be4a4a" }}>
            Disadvantages
          </p>
          <ul className="mt-1.5 space-y-1 text-[.84rem] leading-relaxed text-[#2b2014]">
            {card.cons.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const META_EXAMPLES = [
  {
    icon: <Camera className="h-5 w-5" />,
    name: "Photo metadata",
    fields: ["File name", "File size", "Creation date", "GPS location", "Camera model", "Image resolution"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    name: "Database metadata",
    fields: ["Column names", "Data types", "Primary keys", "Foreign keys", "Number of rows and columns"],
  },
  {
    icon: <Library className="h-5 w-5" />,
    name: "Library catalog",
    fields: ["Book title", "Author name", "Publication details", "Availability status", "Subject area"],
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    name: "WhatsApp messages",
    fields: ["Sender ID", "Recipient ID", "Timestamp", "Read status", "Device type"],
  },
];

export function DataOriginSection() {
  return (
    <Section id="data-origin">
      <SectionHead
        eyebrow="Lecture 05 · where data comes from"
        title={
          <>
            Data classification: origin —{" "}
            <span className="grad-text">primary, secondary &amp; metadata</span>
          </>
        }
        lead="The fourth and final classification of data, completing the taxonomy: format, time, nature — and now origin. Where data comes from decides how much you can trust it, what it costs, and whether it actually fits the question you are asking."
      />

      <ReadStep n="1" title="Primary data — collected firsthand" sub="Original, not previously published — gathered by the researchers who will use it" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <OriginCardView card={PRIMARY_CARD} />
          <div className="grid content-start gap-4">
            <Callout kind="insight" title="When to go primary">
              When the question is <strong>yours</strong> — a screen-time survey of your school, an
              experiment you designed, sensors you deployed. You pay with time, money and human
              resources, but you get data that fits <strong>exactly</strong> and methods you can
              defend.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="Secondary data — collected by someone else" sub="Collected for a different purpose, reused for new analysis" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <OriginCardView card={SECONDARY_CARD} />
          <Callout kind="story" title="When to go secondary">
            When the question is <strong>big</strong> — national income, insurance trends, global
            health. NSSO surveys, SEBI filings and WHO statistics were built by organizations with
            resources no individual can match. The catch: someone else decided{" "}
            <strong>what</strong> to measure, and sometimes a subscription stands between you and
            the data.
          </Callout>
        </div>
      </Reveal>

      <ReadStep n="3" title="Metadata — data about data" sub="Describes the characteristics and context of data without being the actual data itself" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Info className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Metadata: <span className="grad-text">data about data</span>
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-[.92rem] leading-relaxed text-[#2b2014]">
            A photo file holds <strong>the actual data</strong> — the image pixels, what we see —
            plus <strong>metadata</strong> that describes it: file name, file size, creation date,
            GPS location, camera model, resolution. The pixels are the data; everything that
            describes them is metadata. Four everyday examples:
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {META_EXAMPLES.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="h-full rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
                  >
                    {m.icon}
                  </span>
                  <p className="mt-2 font-bold text-[#7c4a12]">{m.name}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.fields.map((f) => (
                      <span
                        key={f}
                        className="inline-block rounded-md bg-[#fbf3e3] px-2 py-0.5 text-[.72rem] font-semibold text-[#7c4a12]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-[#fdf1e0] p-4">
            <p className="text-[.78rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
              Why metadata matters
            </p>
            <ul className="mt-2 grid gap-1.5 text-[.88rem] leading-relaxed text-[#2b2014] md:grid-cols-3">
              <li>• Critical for <strong>organizing, finding and governing</strong> large datasets</li>
              <li>• <strong>Reveals information without exposing</strong> the actual content</li>
              <li>• Essential for <strong>data management and system organization</strong></li>
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="A researcher downloads SEBI market records and WHO Global Health Statistics instead of running her own survey. The downloaded material is:"
            options={["Primary data", "Secondary data", "Metadata", "Quantitative data"]}
            answer={1}
            explain="Collected by someone else for a different purpose and reused for new analysis — that is secondary data. SEBI, IRDAI, NSSO, WHO statistics, census tables and Wikipedia structured data are all classic secondary sources."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Which of the following is metadata — data about data — rather than the data itself?"
            options={["The pixels of a photo — what you actually see", "The photo's file size, creation date and GPS location", "The patients a hospital treated last year", "A WHO health-statistics spreadsheet"]}
            answer={1}
            explain="Metadata describes the characteristics and context of data without being the data: file name, size, creation date, GPS location, camera model and resolution all describe the photo — the pixels themselves are the data."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Primary data is <strong>collected firsthand</strong> for your exact question — tailored, reliable and controlled, but slow, expensive and often limited to small samples.</>,
            <>Secondary data is <strong>someone else&apos;s collection, reused</strong> — large-scale, often free and authoritative; but it may not match your question, and quality depends on the original collector.</>,
            <>Metadata is <strong>data about data</strong> — photo EXIF, database schemas, library catalogs, WhatsApp message logs — revealing information without exposing content.</>,
            <>Metadata is what makes large datasets <strong>organizable, findable and governable</strong> — the index-card system of the digital world.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 06 — #system-software
   ============================================================ */

type OsJob = { icon: React.ReactNode; k: string; v: string };

const OS_JOBS: OsJob[] = [
  {
    icon: <Server className="h-5 w-5" />,
    k: "Process management",
    v: "Decides which programs run and for how long on the CPU — dozens of simultaneous processes, switched at millisecond level.",
  },
  {
    icon: <MemoryStick className="h-5 w-5" />,
    k: "Memory management",
    v: "Allocates RAM to each program, ensures programs don't interfere with each other, and reclaims the memory when programs close.",
  },
  {
    icon: <FolderTree className="h-5 w-5" />,
    k: "File system management",
    v: "Organizes storage into files and folders, gives every program consistent methods to save and load data, and stays independent of the underlying hardware.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    k: "Device drivers",
    v: "Translate generic instructions into specific hardware commands — printer, Wi-Fi, touchscreen. Drivers are why phones work with thousands of different peripherals.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    k: "Security management",
    v: "Controls which programs and users access which resources, prevents apps from reading other apps' private data, and defines permissions for each application.",
  },
  {
    icon: <AppWindow className="h-5 w-5" />,
    k: "User interface",
    v: "GUI — desktop icons, windows, touchscreen interaction (Windows, macOS). CLI — the terminal and shell scripting for file and system management.",
  },
];

const OS_TABLE = [
  { os: "Windows 11", use: "Personal computers", key: "Most widely used desktop OS; dominates enterprise" },
  { os: "macOS Sequoia", use: "Apple computers", key: "Tight hardware-software integration; popular with developers" },
  { os: "Linux", use: "Servers, IoT", key: "Open source; runs 96% of the world's web servers" },
  { os: "Android", use: "Smartphones", key: "72% global smartphone market share; open-source base" },
  { os: "iOS", use: "Apple phones & tablets", key: "Proprietary; closed ecosystem; known for security and performance" },
  { os: "Chrome OS", use: "Chromebooks", key: "Cloud-first; runs Android apps; everything stored and accessed via the internet" },
];

type UtilityGroup = { icon: React.ReactNode; k: string; rows: { name: string; v: string }[] };

const UTILITIES: UtilityGroup[] = [
  {
    icon: <FolderOpen className="h-5 w-5" />,
    k: "File management",
    rows: [
      { name: "GUI tools", v: "Windows Explorer and macOS Finder — create, copy, move, rename and delete files and folders" },
      { name: "Command line", v: "ls, cp, mv, rm (Linux/macOS) · dir, copy, move (Windows)" },
    ],
  },
  {
    icon: <HardDrive className="h-5 w-5" />,
    k: "Disk management",
    rows: [
      { name: "Disk Cleanup", v: "Removes temporary files, browser caches and unused installers" },
      { name: "Defragmentation", v: "Reorganizes fragmented files to improve access speed" },
      { name: "Partitioning", v: "Divides storage into logical sections — a C: drive for the OS, separate drives for data" },
      { name: "Disk Checking", v: "Scans for bad sectors and file-system errors; identifies corrupt storage devices" },
    ],
  },
  {
    icon: <Lock className="h-5 w-5" />,
    k: "Security",
    rows: [
      { name: "Antivirus & anti-malware", v: "Scan for and remove malicious software using signature databases and heuristics — Kaspersky, Norton, McAfee" },
      { name: "Firewall", v: "Monitors incoming and outgoing network traffic; blocks unauthorized connections" },
      { name: "Encryption tools", v: "Full-drive encryption — BitLocker (Windows), FileVault (macOS) — renders data unreadable without the correct key" },
      { name: "VPN clients", v: "Encrypt traffic, mask IP addresses and redirect requests from different locations for privacy" },
    ],
  },
  {
    icon: <FileArchive className="h-5 w-5" />,
    k: "Compression & archiving",
    rows: [
      { name: "Lossless", v: "ZIP, 7Z, TAR — entire folders compress into single files and restore identically" },
      { name: "Lossy", v: "JPEG removes invisible pixel variations; MP3 removes inaudible frequencies — data is permanently discarded for significantly smaller sizes" },
    ],
  },
];

const PRODUCTIVITY = [
  {
    icon: <FileText className="h-5 w-5" />,
    k: "Word processors",
    v: "Create, edit and format text documents. Microsoft Word (Windows), Google Docs.",
  },
  {
    icon: <Table2 className="h-5 w-5" />,
    k: "Spreadsheet software",
    v: "Organize, calculate and visualize tabular data — formulas act as algorithms, and sorting, pivot tables and computational analysis come built in. Microsoft Excel (Windows), Google Sheets.",
  },
  {
    icon: <Presentation className="h-5 w-5" />,
    k: "Presentation tools",
    v: "Structure and display visual content. Microsoft PowerPoint, Google Slides.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    k: "Database tools",
    v: "Create, query and manage structured data — rows and columns for easy querying. MySQL Workbench, Excel tables.",
  },
];

export function SystemSoftwareSection() {
  return (
    <Section id="system-software" dark>
      <SectionHead
        dark
        eyebrow="Lecture 06 · system software"
        title={
          <>
            <span className="grad-text">System software</span> — the OS, utilities &amp; productivity apps
          </>
        }
        lead="The master program that starts first, runs always, and never stops until shutdown — plus the maintenance crew that keeps the machine safe, and the user-focused programs that live on top of it all."
      />

      <ReadStep dark n="1" title="The operating system" sub="Six core functions standing between your programs and the hardware" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>System software</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">What an operating system does</h3>
          <p className="mt-3 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            The OS is the <strong>master program</strong>: it starts first, runs always, and never
            stops until shutdown. System software manages hardware resources and provides the
            platform on which every other program runs.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {OS_JOBS.map((j) => (
              <div key={j.k} className="flex gap-3 rounded-xl p-4" style={{ background: "rgba(255,236,210,.05)", border: "1px solid rgba(255,214,160,.14)" }}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                  {j.icon}
                </span>
                <div>
                  <p className="font-bold text-[#f5e6cd]">{j.k}</p>
                  <p className="mt-1 text-[.86rem] leading-relaxed text-[#cbb392]">{j.v}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="warm-table min-w-[680px]">
              <thead>
                <tr><th>Operating System</th><th>Primary use</th><th>Key features</th></tr>
              </thead>
              <tbody>
                {OS_TABLE.map((r) => (
                  <tr key={r.os}>
                    <td className="font-bold text-[#7c4a12]">{r.os}</td>
                    <td>{r.use}</td>
                    <td>{r.key}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout dark kind="why" title="Python asks the OS — an important connection">
            When Python programs read files or print output, they{" "}
            <strong>request the operating system to perform the action</strong>. Python itself is
            just another program running on the OS — the intermediary between our code and the
            hardware.
          </Callout>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="Utility software — the maintenance crew" sub="Four crews that maintain, optimize and protect the system itself" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Utility software</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">
            System maintenance and protection
          </h3>
          <p className="mt-3 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Utility software <strong>maintains, optimizes and protects</strong> the computing
            system itself — and users interact with utilities directly whenever something needs
            managing.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {UTILITIES.map((u) => (
              <div key={u.k} className="rounded-xl p-4" style={{ background: "rgba(255,236,210,.05)", border: "1px solid rgba(255,214,160,.14)" }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                    {u.icon}
                  </span>
                  <p className="font-bold text-[#f5e6cd]">{u.k}</p>
                </div>
                <div className="mt-3 grid gap-2">
                  {u.rows.map((r) => (
                    <div key={r.name} className="rounded-lg px-3 py-2" style={{ background: "rgba(245,158,11,.08)" }}>
                      <p className="text-[.78rem] font-extrabold uppercase tracking-[.14em] text-[#f5c889]">{r.name}</p>
                      <p className="mt-0.5 text-[.84rem] leading-relaxed text-[#cbb392]">{r.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="3" title="Application software — user-focused programs" sub="Every app on your phone, every program on your laptop, every website you open" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Application software</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">
            Built to help users accomplish specific tasks
          </h3>
          <p className="mt-3 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Application software is what users actually live in — <strong>every app on phones,
            every program on laptops, every website</strong> is built to help users accomplish
            specific tasks. The first family everyone meets: productivity applications.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {PRODUCTIVITY.map((p) => (
              <div key={p.k} className="flex gap-3 rounded-xl p-4" style={{ background: "rgba(255,236,210,.05)", border: "1px solid rgba(255,214,160,.14)" }}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                  {p.icon}
                </span>
                <div>
                  <p className="font-bold text-[#f5e6cd]">{p.k}</p>
                  <p className="mt-1 text-[.85rem] leading-relaxed text-[#cbb392]">{p.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="4" title="Key concepts review" sub="Two hierarchies and the memory ladder — the whole lecture in three strips" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Key concepts review</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">The hardware hierarchy</h3>
          <p className="mt-2 text-[.9rem] text-[#cbb392]">
            Data enters, gets processed, waits in memory, and leaves as output:
          </p>
          <div className="mt-4">
            <StepsFlow
              steps={[
                { label: "INPUT DEVICES", sub: "sensors, keyboard, mouse", icon: <Keyboard className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "PROCESSING UNITS", sub: "CPU, GPU", icon: <Cpu className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "MEMORY", sub: "RAM, ROM, storage", icon: <MemoryStick className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "OUTPUT DEVICES", sub: "display, printer, speakers", icon: <Monitor className="h-5 w-5" style={{ color: "#f5c889" }} /> },
              ]}
            />
          </div>

          <h3 className="mt-8 text-2xl font-bold text-[#f5e6cd]">The software layers</h3>
          <p className="mt-2 text-[.9rem] text-[#cbb392]">
            Each layer exists for the one above it:
          </p>
          <div className="mt-4">
            <StepsFlow
              steps={[
                { label: "SYSTEM SOFTWARE", sub: "manages the hardware", icon: <Server className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "UTILITY SOFTWARE", sub: "maintains and protects the system", icon: <Wrench className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "APPLICATION SOFTWARE", sub: "helps users accomplish tasks", icon: <AppWindow className="h-5 w-5" style={{ color: "#f5c889" }} /> },
              ]}
            />
          </div>

          <h3 className="mt-8 text-2xl font-bold text-[#f5e6cd]">The memory hierarchy</h3>
          <p className="mt-2 text-[.9rem] text-[#cbb392]">
            Speed falls as permanence rises:
          </p>
          <div className="mt-4">
            <StepsFlow
              steps={[
                { label: "CPU REGISTERS", sub: "fastest, most temporary", icon: <Zap className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "RAM", sub: "very fast, temporary", icon: <MemoryStick className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "ROM", sub: "very fast, permanent", icon: <Lock className="h-5 w-5" style={{ color: "#f5c889" }} /> },
                { label: "SECONDARY STORAGE", sub: "slower but permanent", icon: <HardDrive className="h-5 w-5" style={{ color: "#f5c889" }} /> },
              ]}
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Dozens of apps run at once, each gets CPU time in milliseconds, and no app can read another app's private data. Which two OS functions make that possible?"
            options={["File system management and device drivers", "Process management and security management", "Disk cleanup and defragmentation", "Compression and archiving"]}
            answer={1}
            explain="Process management decides which programs run and for how long on the CPU, with millisecond-level switching; security management controls which programs and users access which resources, and defines permissions."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="A JPEG photo and a ZIP archive both make files smaller. What is the difference?"
            options={["Both are lossless", "Both are lossy", "ZIP is lossless — identical restoration; JPEG is lossy — pixel variations are permanently discarded", "JPEG is lossless; ZIP is lossy"]}
            answer={2}
            explain="Lossless compression (ZIP, 7Z, TAR) restores identical data. Lossy compression (JPEG for images, MP3 for audio) permanently discards data humans barely notice — invisible pixel variations, inaudible frequencies — for much smaller files."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>The OS is the <strong>master program</strong> — starts first, runs always, never stops until shutdown. Its six jobs: process, memory, file system, device drivers, security and the user interface.</>,
            <>Utility software is the <strong>maintenance crew</strong> — file management, disk tools, security (antivirus, firewall, BitLocker, VPN) and compression: <strong>lossless restores identically, lossy discards forever</strong>.</>,
            <>Application software is the layer users touch — <strong>productivity apps</strong> (Word, Excel, PowerPoint, database tools) help us accomplish specific tasks.</>,
            <>The software layers: <strong>system software manages hardware → utility software maintains and protects → application software helps users</strong> — and when Python reads or prints, it asks the OS.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
