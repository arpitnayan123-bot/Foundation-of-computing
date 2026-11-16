/* ============================================================
   Regenerate the FoC slices of the static twins:
     · src/lib/chapter-index.ts   (the ⌘K palette's chapter catalog)
     · src/lib/search-corpus.json (MiniSearch note documents)
   derived from src/components/foc/focLectures.ts (the registry)
   plus the real section source files (text extracted).

   Run: bun scripts/regen-foc-twins.ts
   ============================================================ */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const SRC = path.join(ROOT, "src");

/* ---------- 1. load the registry by light static parsing ----------
   (importing the TSX-free registry via bun works, but it is a
   "use client" data module — plain import is fine under bun) */
const registrySrc = fs.readFileSync(
  path.join(SRC, "components/foc/focLectures.ts"),
  "utf8",
);

/* pull the chapter fields straight out of the array literal */
interface Chapter {
  id: string;
  label: string;
  desc: string;
  group: string;
  groupLabel: string;
  lecture: number;
}

const GROUP_LABELS: Record<string, string> = {
  foundations: "Foundations",
  pillars: "Pillars & Cases",
  pycore: "Python Core",
  decisions: "Decisions & Data",
  loops: "Loops",
  pro: "Functions & OOP",
};

const lectures: { n: number; group: string; chaptersRaw: string }[] = [];
const lectureRe = /n:\s*(\d+),[\s\S]*?group:\s*"(\w+)"[\s\S]*?chapters:\s*\[([\s\S]*?)\n\s*\],\n\s*\},/g;
for (const m of registrySrc.matchAll(lectureRe)) {
  lectures.push({ n: Number(m[1]), group: m[2], chaptersRaw: m[3] });
}

const chapters: Chapter[] = [];
for (const l of lectures) {
  const chapterRe = /\{\s*id:\s*"([\w-]+)",\s*label:\s*"([^"]*)",\s*desc:\s*"([^"]*)"(?:,\s*group:\s*"(\w+)")?\s*\}/g;
  for (const c of l.chaptersRaw.matchAll(chapterRe)) {
    chapters.push({
      id: c[1],
      label: c[2],
      desc: c[3],
      group: c[4] ?? l.group,
      groupLabel: GROUP_LABELS[c[4] ?? l.group] ?? l.group,
      lecture: l.n,
    });
  }
}

console.log(`registry parsed: ${lectures.length} lectures, ${chapters.length} chapters`);
if (lectures.length !== 34) throw new Error("expected 34 lectures — registry parse failed");
if (chapters.length !== 40) throw new Error("expected 40 chapters — registry parse failed");

/* ---------- 2. map chapter id → source file ---------- */
const SECTION_FILES = [
  "components/notes/Part1.tsx",
  "components/notes/Part2.tsx",
  "components/notes/Part3.tsx",
  "components/notes/Part4.tsx",
  "components/notes/Part5.tsx",
  "components/notes/Part6.tsx",
  "components/notes/Part7.tsx",
  "components/notes/Part8.tsx",
  "components/notes/Part10.tsx",
  "components/foc/FocParts1.tsx",
  "components/foc/FocParts2.tsx",
  "components/foc/FocParts3.tsx",
  "components/foc/FocParts4.tsx",
  "components/foc/FocParts5.tsx",
  "components/foc/FocParts6.tsx",
  "components/foc/FocParts7.tsx",
  "components/foc/FocParts8.tsx",
  "components/foc/FocParts9.tsx",
  "components/foc/FocParts10.tsx",
  "components/foc/FocParts11.tsx",
  "components/foc/FocParts12.tsx",
  "components/foc/FocParts13.tsx",
  "components/foc/FocParts17.tsx",
];

const fileTexts = new Map<string, string>();
for (const f of SECTION_FILES) fileTexts.set(f, fs.readFileSync(path.join(SRC, f), "utf8"));

/** slice a component body out of a source file: from the export
 *  whose body opens `<Section id="X"` to the matching `</Section>` */
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

/* ---------- 3. text extraction: keep literals + JSX text ---------- */
function extractText(jsx: string): string {
  const bucket: string[] = [];
  let rest = jsx;
  // template literals (code blocks)
  rest = rest.replace(/`(?:[^`\\]|\\.)*`/gs, (m) => {
    bucket.push(m.slice(1, -1).replace(/\\\$/g, "$").replace(/\\`/g, "`").replace(/\\\n/g, "\n").replace(/\\"/g, '"').replace(/\\'/g, "'"));
    return " ";
  });
  // double-quoted strings
  rest = rest.replace(/"(?:[^"\\]|\\.)*"/g, (m) => {
    bucket.push(m.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, " ").replace(/\\t/g, " "));
    return " ";
  });
  // single-quoted strings
  rest = rest.replace(/'(?:[^'\\]|\\.)*'/g, (m) => {
    bucket.push(m.slice(1, -1).replace(/\\'/g, "'").replace(/\\n/g, " "));
    return " ";
  });
  // strip tags and comments from the remaining JSX text
  rest = rest.replace(/\{\/\*[\s\S]*?\*\/\}/g, " ");
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

/* ---------- 4. build the foc corpus chapters ---------- */
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
    shelfId: "foc",
    chapterKey: c.id,
    label: c.label,
    group: c.group,
    groupLabel: c.groupLabel,
    text,
  };
});

/* ---------- 5. rewrite search-corpus.json (foc replaced, other shelves kept) ---------- */
const corpusPath = path.join(SRC, "lib/search-corpus.json");
const oldCorpus = JSON.parse(fs.readFileSync(corpusPath, "utf8")) as {
  generatedAt: string;
  chapters: { shelfId: string; chapterKey: string; label: string; group: string; groupLabel: string; text: string }[];
};
const kept = oldCorpus.chapters.filter((c) => c.shelfId !== "foc");
const nextCorpus = {
  generatedAt: new Date().toISOString(),
  chapters: [...kept, ...corpusChapters],
};
fs.writeFileSync(corpusPath, JSON.stringify(nextCorpus, null, 1) + "\n");
console.log(`search-corpus.json: kept ${kept.length} non-foc chapters, wrote ${corpusChapters.length} foc chapters`);

/* ---------- 6. rewrite the foc block of chapter-index.ts ---------- */
const indexPath = path.join(SRC, "lib/chapter-index.ts");
let indexSrc = fs.readFileSync(indexPath, "utf8");

const focEntries = corpusChapters.map((c) =>
  `  { subject: "foc", section: "${c.chapterKey}", label: ${JSON.stringify(c.label)}, desc: ${JSON.stringify(chapters.find((x) => x.id === c.chapterKey)!.desc)}, group: "${c.group}", groupLabel: "${c.groupLabel}" },`,
);
const focBlock = focEntries.join("\n");

/* replace the consecutive foc entries with the fresh block */
const firstAt = indexSrc.indexOf('{ subject: "foc"');
if (firstAt === -1) throw new Error("could not locate the foc block in chapter-index.ts");
// walk entries from firstAt: each entry ends at "},\n"; stop when the
// next entry belongs to another subject or the array closes
let cursor = firstAt;
let endAt = -1;
const OTHERS = ['{ subject: "atb"', '{ subject: "fa"', '{ subject: "ebh"', '{ subject: "stm"', '{ subject: "mktg"'];
while (true) {
  const entryEnd = indexSrc.indexOf("},\n", cursor);
  if (entryEnd === -1) throw new Error("unterminated foc block");
  const after = entryEnd + 3;
  const nextIsOther = OTHERS.some((o) => indexSrc.startsWith(o, after));
  const nextIsArrayEnd = indexSrc.startsWith("];", indexSrc.indexOf("{", after) === -1 ? after : after);
  if (nextIsOther) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(after).trimStart().startsWith("];")) { endAt = entryEnd + 3; break; }
  const nextEntry = indexSrc.indexOf("{ subject: ", after);
  if (nextEntry === -1 || nextEntry > indexSrc.indexOf("];", after)) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(nextEntry).startsWith('{ subject: "foc"')) { cursor = nextEntry; continue; }
  endAt = entryEnd + 3;
  break;
}
indexSrc = indexSrc.slice(0, firstAt) + focBlock + "\n" + indexSrc.slice(endAt);

/* refresh the counts note in the header comment */
indexSrc = indexSrc.replace(
  /counts asserted\s*against lib\/section-counts\.ts — foc \d+/,
  `counts asserted against lib/section-counts.ts — foc 40`,
);
fs.writeFileSync(indexPath, indexSrc);
console.log("chapter-index.ts: foc block regenerated");
