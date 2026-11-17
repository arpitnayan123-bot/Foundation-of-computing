/* ============================================================
   Regenerate the FA slices of the static twins:
     · src/lib/chapter-index.ts   (the ⌘K palette's chapter catalog)
     · src/lib/search-corpus.json (MiniSearch note documents)
     · src/lib/section-counts.ts  (fa: 41)
     · src/lib/question-counts.ts (fa: FA_TOTAL_QUESTIONS)
   derived from src/components/fa/faLectures.ts (the registry)
   plus the real section source files (text extracted).

   Run: bun scripts/regen-fa-twins.ts
   ============================================================ */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const SRC = path.join(ROOT, "src");

/* ---------- 1. parse the registry (light static extraction) ---------- */
const registrySrc = fs.readFileSync(
  path.join(SRC, "components/fa/faLectures.ts"),
  "utf8",
);

interface Chapter {
  id: string;
  label: string;
  desc: string;
  group: string;
  groupLabel: string;
  lecture: number;
}

const GROUP_LABELS: Record<string, string> = {
  foundations: "Orientation",
  concepts: "Concepts & Conventions",
  equation: "The Equation & Elements",
  recording: "Recording",
  cycle: "The Cycle",
  closing: "Final Accounts",
  cashflow: "Cash Flow",
  analysis: "Analysis & Assets",
};

const lectures: { n: number; group: string; chaptersRaw: string }[] = [];
const lectureRe = /n:\s*(\d+),[\s\S]*?group:\s*"(\w+)"[\s\S]*?chapters:\s*\[([\s\S]*?)\n\s*\],\n\s*\},/g;
for (const m of registrySrc.matchAll(lectureRe)) {
  lectures.push({ n: Number(m[1]), group: m[2], chaptersRaw: m[3] });
}

const chapters: Chapter[] = [];
for (const l of lectures) {
  const chapterRe =
    /\{\s*id:\s*"([\w-]+)",\s*label:\s*"([^"]*)",\s*desc:\s*"([^"]*)",\s*theme:\s*"([^"]*)"(?:,\s*group:\s*"(\w+)")?\s*\}/g;
  for (const c of l.chaptersRaw.matchAll(chapterRe)) {
    chapters.push({
      id: c[1],
      label: c[2],
      desc: c[3],
      group: c[5] ?? l.group,
      groupLabel: GROUP_LABELS[c[5] ?? l.group] ?? l.group,
      lecture: l.n,
    });
  }
}

console.log(`registry parsed: ${lectures.length} lectures, ${chapters.length} chapters`);
if (lectures.length !== 34) throw new Error("expected 34 lectures — registry parse failed");
if (chapters.length !== 41) throw new Error("expected 41 chapters — registry parse failed");

/* ---------- 2. chapter id → source file ---------- */
const SECTION_FILES = [
  "components/fa/FaParts1.tsx",
  "components/fa/FaParts2.tsx",
  "components/fa/FaParts3.tsx",
  "components/fa/FaParts4.tsx",
  "components/fa/FaParts5.tsx",
  "components/fa/FaParts6.tsx",
  "components/fa/FaParts7.tsx",
  "components/fa/FaParts8.tsx",
  "components/fa/FaParts9.tsx",
  "components/fa/FaParts10.tsx",
  "components/fa/FaParts11.tsx",
  "components/fa/FaParts12.tsx",
  "components/fa/FaParts13.tsx",
  "components/fa/FaParts14.tsx",
  "components/fa/FaParts15.tsx",
  "components/fa/FaParts16.tsx",
];

const fileTexts = new Map<string, string>();
for (const f of SECTION_FILES) fileTexts.set(f, fs.readFileSync(path.join(SRC, f), "utf8"));

function sliceSection(file: string, sectionId: string): string | null {
  const text = fileTexts.get(file);
  if (!text) return null;
  const marker = `id="${sectionId}"`;
  const at = text.indexOf(marker);
  if (at === -1) return null;
  const start = text.lastIndexOf("<Section", at);
  const end = text.indexOf("</Section>", at);
  if (start === -1 || end === -1) return null;
  return text.slice(start, end + "</Section>".length);
}

/* ---------- 3. text extraction: literals + JSX text ---------- */
function extractText(jsx: string): string {
  const bucket: string[] = [];
  let rest = jsx;
  rest = rest.replace(/`(?:[^`\\]|\\.)*`/gs, (m) => {
    bucket.push(m.slice(1, -1).replace(/\\\$/g, "$").replace(/\\`/g, "`").replace(/\\\n/g, "\n").replace(/\\"/g, '"').replace(/\\'/g, "'"));
    return " ";
  });
  rest = rest.replace(/"(?:[^"\\]|\\.)*"/g, (m) => {
    bucket.push(m.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, " ").replace(/\\t/g, " "));
    return " ";
  });
  rest = rest.replace(/'(?:[^'\\]|\\.)*'/g, (m) => {
    bucket.push(m.slice(1, -1).replace(/\\'/g, "'").replace(/\\n/g, " "));
    return " ";
  });
  rest = rest.replace(/\{\/\*[\s\S]*?\*\//g, " ");
  rest = rest.replace(/<[^<>]*>/g, " ");
  bucket.push(rest);
  return bucket
    .join(" ")
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&mdash;|&ndash;/g, "-")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 6000);
}

/* ---------- 4. build the fa corpus chapters ---------- */
const corpusChapters = chapters.map((c) => {
  let text: string | null = null;
  for (const f of SECTION_FILES) {
    const slice = sliceSection(f, c.id);
    if (slice) {
      text = `Lecture ${String(c.lecture).padStart(2, "0")} · ${c.label}. ${c.desc}. ${extractText(slice)}`;
      break;
    }
  }
  if (!text) throw new Error(`no section slice found for chapter "${c.id}"`);
  return {
    shelfId: "fa",
    chapterKey: c.id,
    label: c.label,
    group: c.group,
    groupLabel: c.groupLabel,
    text,
  };
});

/* ---------- 5. rewrite search-corpus.json (fa replaced, others kept) ---------- */
const corpusPath = path.join(SRC, "lib/search-corpus.json");
const oldCorpus = JSON.parse(fs.readFileSync(corpusPath, "utf8")) as {
  generatedAt: string;
  chapters: { shelfId: string; chapterKey: string; label: string; group: string; groupLabel: string; text: string }[];
};
const kept = oldCorpus.chapters.filter((c) => c.shelfId !== "fa");
const nextCorpus = {
  generatedAt: new Date().toISOString(),
  chapters: [...kept, ...corpusChapters],
};
fs.writeFileSync(corpusPath, JSON.stringify(nextCorpus, null, 1) + "\n");
console.log(`search-corpus.json: kept ${kept.length} non-fa chapters, wrote ${corpusChapters.length} fa chapters`);

/* ---------- 6. rewrite the fa block of chapter-index.ts ---------- */
const indexPath = path.join(SRC, "lib/chapter-index.ts");
let indexSrc = fs.readFileSync(indexPath, "utf8");

const faEntries = corpusChapters.map((c) =>
  `  { subject: "fa", section: "${c.chapterKey}", label: ${JSON.stringify(c.label)}, desc: ${JSON.stringify(chapters.find((x) => x.id === c.chapterKey)!.desc)}, group: "${c.group}", groupLabel: "${c.groupLabel}" },`,
);
const faBlock = faEntries.join("\n");

const firstAt = indexSrc.indexOf('{ subject: "fa"');
if (firstAt === -1) throw new Error("could not locate the fa block in chapter-index.ts");
let cursor = firstAt;
let endAt = -1;
const OTHERS = ['{ subject: "foc"', '{ subject: "atb"', '{ subject: "ebh"', '{ subject: "stm"', '{ subject: "mktg"'];
while (true) {
  const entryEnd = indexSrc.indexOf("},\n", cursor);
  if (entryEnd === -1) throw new Error("unterminated fa block");
  const after = entryEnd + 3;
  if (OTHERS.some((o) => indexSrc.startsWith(o, after))) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(after).trimStart().startsWith("];")) { endAt = entryEnd + 3; break; }
  const nextEntry = indexSrc.indexOf("{ subject: ", after);
  if (nextEntry === -1 || nextEntry > indexSrc.indexOf("];", after)) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(nextEntry).startsWith('{ subject: "fa"')) { cursor = nextEntry; continue; }
  endAt = entryEnd + 3;
  break;
}
indexSrc = indexSrc.slice(0, firstAt) + faBlock + "\n" + indexSrc.slice(endAt);

/* refresh the counts note in the header comment */
indexSrc = indexSrc.replace(/fa \d+/, "fa 41");
fs.writeFileSync(indexPath, indexSrc);
console.log("chapter-index.ts: fa block regenerated");

/* ---------- 7. section-counts.ts + question-counts.ts ---------- */
const scPath = path.join(SRC, "lib/section-counts.ts");
let sc = fs.readFileSync(scPath, "utf8");
sc = sc.replace(/fa:\s*\d+/, "fa: 41");
fs.writeFileSync(scPath, sc);
console.log("section-counts.ts: fa → 41");

/* count questions straight out of questions.ts — every
   FaExamQuestion object carries exactly one `id: "…"`, and
   nothing else in the file does */
const qSrc = fs.readFileSync(path.join(SRC, "components/fa/questions.ts"), "utf8");
const total = (qSrc.match(/id:\s*"/g) ?? []).length;
const qcPath = path.join(SRC, "lib/question-counts.ts");
let qc = fs.readFileSync(qcPath, "utf8");
qc = qc.replace(/fa:\s*\d+/, `fa: ${total}`);
fs.writeFileSync(qcPath, qc);
console.log(`question-counts.ts: fa → ${total}`);
