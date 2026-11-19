/* ============================================================
   Regenerate the ATB slices of the static twins:
     · src/lib/chapter-index.ts   (the ⌘K palette's chapter catalog)
     · src/lib/search-corpus.json (MiniSearch note documents)
     · src/lib/section-counts.ts  (atb: N)
     · src/lib/question-counts.ts (atb: ATB_TOTAL_QUESTIONS)
   derived from src/components/atb/lectures.ts (the registry),
   the GROUPS table in AtbApp.tsx (group/groupLabel mapping)
   and the real section source files (text extracted).

   Run: bun scripts/regen-atb-twins.ts

   RESTRUCTURE NOTE — the 33-lecture PDF: after atb/lectures.ts
   and the AtbParts files are rewritten, set EXPECTED_CHAPTERS
   below to the new chapter count (from the audit script output)
   so this script hard-fails on any parse drift. Until then it
   stays null (report-only) and EXPECTED_LECTURES = 33 guards
   the restructured registry.
   ============================================================ */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const SRC = path.join(ROOT, "src");

/* ---------- expected shape (pin EXPECTED_CHAPTERS after the PDF) ----------
   --lectures=N overrides the expected lecture count so the write path
   can be dry-validated against the CURRENT registry (e.g. --lectures=28)
   before the 33-lecture restructure lands. */
const EXPECTED_LECTURES = Number((process.argv.find((a) => a.startsWith("--lectures=")) ?? "").split("=")[1]) || 33;
const EXPECTED_CHAPTERS: number | null = Number((process.argv.find((a) => a.startsWith("--chapters=")) ?? "").split("=")[1]) || null;

/* ---------- 1. parse the registry (light static extraction) ---------- */
const registrySrc = fs.readFileSync(
  path.join(SRC, "components/atb/lectures.ts"),
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

/* ATB lectures carry no per-lecture group — chapters are matched to
   the nav GROUPS in AtbApp.tsx below */
const lectures: { n: number; chaptersRaw: string }[] = [];
const lectureRe = /n:\s*(\d+),[\s\S]*?chapters:\s*\[([\s\S]*?)\n\s*\],\n\s*\},/g;
for (const m of registrySrc.matchAll(lectureRe)) {
  lectures.push({ n: Number(m[1]), chaptersRaw: m[2] });
}

const chapterRe =
  /\{\s*id:\s*"([\w-]+)",\s*label:\s*"([^"]*)",\s*desc:\s*"([^"]*)"\s*\}/g;
const chapters: Chapter[] = [];
for (const l of lectures) {
  for (const c of l.chaptersRaw.matchAll(chapterRe)) {
    chapters.push({
      id: c[1],
      label: c[2],
      desc: c[3],
      group: "ungrouped",
      groupLabel: "Ungrouped",
      lecture: l.n,
    });
  }
}

console.log(`registry parsed: ${lectures.length} lectures, ${chapters.length} chapters`);
if (lectures.length !== EXPECTED_LECTURES) {
  throw new Error(`expected ${EXPECTED_LECTURES} lectures — registry parse failed (got ${lectures.length})`);
}
if (EXPECTED_CHAPTERS !== null && chapters.length !== EXPECTED_CHAPTERS) {
  throw new Error(`expected ${EXPECTED_CHAPTERS} chapters — registry parse failed (got ${chapters.length})`);
}

/* ---------- 2. chapter id → nav group, from AtbApp GROUPS ---------- */
const appSrc = fs.readFileSync(path.join(SRC, "components/atb/AtbApp.tsx"), "utf8");
const gStart = appSrc.indexOf("const GROUPS");
const gEnd = appSrc.indexOf("const FLAT_ITEMS");
const groupsBlock = appSrc.slice(gStart, gEnd);

const headerRe = /\{\s*id:\s*"(\w+)",\s*label:\s*"([^"]+)",\s*items:\s*\[/g;
const headers = [...groupsBlock.matchAll(headerRe)].map((m) => ({
  id: m[1],
  label: m[2],
  at: m.index! + m[0].length,
}));
/* label + desc come from the NAV GROUPS (what the app actually shows);
   the ⌘K chapter-index and corpus stay word-identical to the app */
const navMap = new Map<string, { label: string; desc: string; group: string; groupLabel: string }>();
const itemRe = /\{\s*id:\s*"([a-z0-9-]+)",\s*label:\s*"([^"]*)",\s*desc:\s*"([^"]*)"/g;
for (let i = 0; i < headers.length; i++) {
  const zoneEnd = i + 1 < headers.length ? headers[i + 1].index! : groupsBlock.length;
  const zone = groupsBlock.slice(headers[i].at, zoneEnd);
  for (const it of zone.matchAll(itemRe)) {
    navMap.set(it[1], { label: it[2], desc: it[3], group: headers[i].id, groupLabel: headers[i].label });
    const ch = chapters.find((c) => c.id === it[1]);
    if (ch) {
      ch.group = headers[i].id;
      ch.groupLabel = headers[i].label;
    }
  }
}
const ungrouped = chapters.filter((c) => c.group === "ungrouped");
if (ungrouped.length) {
  throw new Error(`chapters not matched to any nav GROUP: ${ungrouped.map((c) => c.id).join(", ")}`);
}
console.log(`nav groups: ${headers.length}`);

/* ---------- 3. chapter id → source file ---------- */
const SECTION_FILES = Array.from({ length: 10 }, (_, i) => `components/atb/AtbParts${i + 1}.tsx`);

const fileTexts = new Map<string, string>();
for (const f of SECTION_FILES) fileTexts.set(f, fs.readFileSync(path.join(SRC, f), "utf8"));

function sliceSection(sectionId: string): string | null {
  for (const [, text] of fileTexts) {
    /* anchor on the real opening tag — a bare `id="…"` search can hit
       a comment BEFORE the section itself (AtbParts1: `MODULE 1 ·
       INTRODUCTION (id="intro")` sits 20 lines above the tag) */
    const m = text.match(new RegExp(`<Section\\s+id="${sectionId}"[\\s\\S]*?</Section>`));
    if (m) return m[0];
  }
  return null;
}

/* ---------- 4. text extraction: literals + JSX text ---------- */
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

/* ---------- 5. build the atb corpus chapters ---------- */
const corpusChapters = chapters.map((c) => {
  const slice = sliceSection(c.id);
  if (!slice) throw new Error(`no section slice found for chapter "${c.id}"`);
  const nav = navMap.get(c.id)!;
  return {
    shelfId: "atb",
    chapterKey: c.id,
    label: nav.label,
    group: c.group,
    groupLabel: c.groupLabel,
    text: `Lecture ${String(c.lecture).padStart(2, "0")} · ${nav.label}. ${nav.desc}. ${extractText(slice)}`,
  };
});

/* ---------- 6. rewrite search-corpus.json (atb replaced, others kept) ---------- */
const corpusPath = path.join(SRC, "lib/search-corpus.json");
const oldCorpus = JSON.parse(fs.readFileSync(corpusPath, "utf8")) as {
  generatedAt: string;
  chapters: { shelfId: string; chapterKey: string; label: string; group: string; groupLabel: string; text: string }[];
};
const kept = oldCorpus.chapters.filter((c) => c.shelfId !== "atb");
const nextCorpus = {
  generatedAt: new Date().toISOString(),
  chapters: [...kept, ...corpusChapters],
};
fs.writeFileSync(corpusPath, JSON.stringify(nextCorpus, null, 1) + "\n");
console.log(`search-corpus.json: kept ${kept.length} non-atb chapters, wrote ${corpusChapters.length} atb chapters`);

/* ---------- 7. rewrite the atb block of chapter-index.ts ---------- */
const indexPath = path.join(SRC, "lib/chapter-index.ts");
let indexSrc = fs.readFileSync(indexPath, "utf8");

const atbEntries = corpusChapters.map((c) =>
  `  { subject: "atb", section: "${c.chapterKey}", label: ${JSON.stringify(c.label)}, desc: ${JSON.stringify(navMap.get(c.chapterKey)!.desc)}, group: "${c.group}", groupLabel: "${c.groupLabel}" },`,
);
const atbBlock = atbEntries.join("\n");

const firstAt = indexSrc.indexOf('{ subject: "atb"');
if (firstAt === -1) throw new Error("could not locate the atb block in chapter-index.ts");
/* back up over the old entry's leading spaces so the new block does
   not inherit them as extra indentation */
let blockStart = firstAt;
while (blockStart > 0 && indexSrc[blockStart - 1] === " ") blockStart--;
let cursor = firstAt;
let endAt = -1;
const OTHERS = ['{ subject: "foc"', '{ subject: "fa"', '{ subject: "ebh"', '{ subject: "stm"', '{ subject: "mktg"'];
while (true) {
  const entryEnd = indexSrc.indexOf("},\n", cursor);
  if (entryEnd === -1) throw new Error("unterminated atb block");
  const after = entryEnd + 3;
  if (OTHERS.some((o) => indexSrc.startsWith(o, after))) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(after).trimStart().startsWith("];")) { endAt = entryEnd + 3; break; }
  const nextEntry = indexSrc.indexOf("{ subject: ", after);
  if (nextEntry === -1 || nextEntry > indexSrc.indexOf("];", after)) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(nextEntry).startsWith('{ subject: "atb"')) { cursor = nextEntry; continue; }
  endAt = entryEnd + 3;
  break;
}
indexSrc = indexSrc.slice(0, blockStart) + atbBlock + "\n" + indexSrc.slice(endAt);

/* refresh the counts note in the header comment */
indexSrc = indexSrc.replace(/atb \d+/, `atb ${chapters.length}`);
fs.writeFileSync(indexPath, indexSrc);
console.log("chapter-index.ts: atb block regenerated");

/* ---------- 8. section-counts.ts + question-counts.ts ---------- */
const scPath = path.join(SRC, "lib/section-counts.ts");
let sc = fs.readFileSync(scPath, "utf8");
sc = sc.replace(/atb:\s*\d+/, `atb: ${chapters.length}`);
fs.writeFileSync(scPath, sc);
console.log(`section-counts.ts: atb → ${chapters.length}`);

/* count questions straight out of questions.ts — every
   AtbExamQuestion object carries exactly one `id: "…"`, and
   nothing else in the file does */
const qSrc = fs.readFileSync(path.join(SRC, "components/atb/questions.ts"), "utf8");
const total = (qSrc.match(/id:\s*"/g) ?? []).length;
const qcPath = path.join(SRC, "lib/question-counts.ts");
let qc = fs.readFileSync(qcPath, "utf8");
qc = qc.replace(/atb:\s*\d+/, `atb: ${total}`);
fs.writeFileSync(qcPath, qc);
console.log(`question-counts.ts: atb → ${total}`);
