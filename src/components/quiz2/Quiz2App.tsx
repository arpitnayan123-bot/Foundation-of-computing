"use client";

/* ============================================================
   QUIZ 2 — the war room (#/quiz2).

   A separate wing of the Atlas: pick a subject, read the
   syllabus sliver by sliver (each mapped to its exact
   lectures), tick slivers off the readiness checklist, then
   train — one timed FULL mock per subject plus untimed
   per-sliver drills, all powered by the shared ExamEngine.

   Reads nothing from, and writes nothing to, the subject
   shelves — the only thing it shares is the exam engine
   itself (and through it, the ledger, where mock attempts
   are filed under subject "quiz2").
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlarmClock,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Flame,
  ListChecks,
  LogIn,
  Timer,
  Trophy,
} from "lucide-react";
import { ExamEngine, type EngineBank } from "../notes/ExamEngine";
import {
  QUIZ2_DAY_1,
  QUIZ2_SUBJECTS,
  type Quiz2Subject,
} from "./quiz2-data";
import { QUIZ2_TOTAL_QUESTIONS, quiz2DrillBank, quiz2MockBank, quiz2MockCount, quiz2SliverCount } from "./quiz2-banks";
import { QUIZ2_EXAM_THEME } from "./quiz2-theme";
import { pad2, useMockStats, useNextQuizCountdown, useSliverProgress, useSubjectCountdown, type CountdownParts } from "./use-quiz2";

const EASE = [0.22, 1, 0.36, 1] as const;

type ExamTarget = { mode: "mock" } | { mode: "drill"; sliverId: string };

/* ---------------- small pieces ---------------- */

function CountdownTiles({ parts }: { parts: CountdownParts }) {
  const c = parts;
  if (c.done) {
    return (
      <span className="flex items-center gap-2 rounded-full border border-[#ef444455] bg-[#ef444414] px-4 py-2 text-[.68rem] font-extrabold uppercase tracking-[.18em] text-[#ffb4a8]">
        <Flame aria-hidden className="h-3.5 w-3.5" />
        it&apos;s quiz day — go get it
      </span>
    );
  }
  const tiles = [
    { v: String(c.days), l: "days" },
    { v: pad2(c.hours), l: "hrs" },
    { v: pad2(c.mins), l: "min" },
    { v: pad2(c.secs), l: "sec" },
  ];
  return (
    <div className="flex items-stretch gap-1.5" role="timer" aria-label={`Countdown to the quiz: ${c.days} days ${c.hours} hours ${c.mins} minutes`}>
      {tiles.map((t) => (
        <div
          key={t.l}
          className="flex min-w-[3rem] flex-col items-center rounded-xl border border-[#ef44444d] bg-[#ef444412] px-2 py-1.5"
        >
          <span className="font-mono text-[1rem] font-black leading-none tabular-nums text-[#ffb4a8]">
            {t.v}
          </span>
          <span className="mt-1 text-[.5rem] font-extrabold uppercase tracking-[.2em] text-[#8d7b63]">{t.l}</span>
        </div>
      ))}
    </div>
  );
}

function SubjectTab({
  subject,
  active,
  onSelect,
  index,
}: {
  subject: Quiz2Subject;
  active: boolean;
  onSelect: () => void;
  index: number;
}) {
  const isSunday = subject.dateISO !== QUIZ2_DAY_1;
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: EASE }}
      aria-pressed={active}
      className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 md:p-5 ${
        active ? "border-white/30 bg-white/[.07]" : "border-white/10 bg-black/40 hover:border-white/20"
      }`}
      style={active ? { boxShadow: `0 20px 50px -24px ${subject.accent}90` } : undefined}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${subject.accent}, transparent)`, opacity: active ? 1 : 0.35 }}
      />
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          style={{ background: `${subject.accent}14`, borderColor: `${subject.accent}45` }}
        >
          <subject.sigil className="h-4 w-4" style={{ color: subject.accent }} />
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-[.88rem] font-black leading-tight text-[#f7ecdd]">{subject.name}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[.6rem] font-bold uppercase tracking-[.14em]" style={{ color: subject.accent }}>
            <CalendarDays aria-hidden className="h-2.5 w-2.5" />
            {subject.dateLabel}
            {!isSunday ? <Flame aria-hidden className="h-2.5 w-2.5 text-[#ef4444]" /> : null}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[.56rem] font-bold uppercase tracking-[.12em] text-[#8d7b63]">
            <Clock3 aria-hidden className="h-2.5 w-2.5" />
            {subject.window}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

/* ---------------- the official schedule strip ---------------- */

function ScheduleStrip() {
  return (
    <section aria-label="Official Quiz 2 schedule" className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[.07] px-5 py-4 md:px-7">
          <div>
            <h3 className="font-display text-lg font-black text-[#f7ecdd]">The official schedule</h3>
            <p className="mt-0.5 text-[.62rem] font-extrabold uppercase tracking-[.18em] text-[#8d7b63]">
              as announced — joining time, paper window, marks
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-[#ef444445] bg-[#ef444412] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.16em] text-[#ffb4a8]">
            <AlarmClock aria-hidden className="h-3 w-3" />
            sat evening · sunday noon
          </span>
        </div>
        <ol className="divide-y divide-white/[.06]">
          {QUIZ2_SUBJECTS.map((s) => (
            <li key={s.id} className="flex flex-col gap-2.5 px-5 py-4 md:flex-row md:items-center md:justify-between md:gap-5 md:px-7">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                  style={{ background: `${s.accent}14`, borderColor: `${s.accent}45` }}
                >
                  <s.sigil className="h-4 w-4" style={{ color: s.accent }} />
                </span>
                <div>
                  <p className="font-display text-[.92rem] font-black leading-tight text-[#f7ecdd]">
                    {s.short}
                    <span className="ml-2 hidden text-[.72rem] font-bold text-[#a89a86] sm:inline">{s.name}</span>
                  </p>
                  <p className="text-[.58rem] font-extrabold uppercase tracking-[.16em]" style={{ color: s.accent }}>
                    {s.dateLabel}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1.5 text-[.72rem] font-bold text-[#c4b39c]">
                  <LogIn aria-hidden className="h-3 w-3 text-[#8d7b63]" />
                  joining {s.joining}
                </span>
                <span className="flex items-center gap-1.5 text-[.72rem] font-bold text-[#c4b39c]">
                  <Clock3 aria-hidden className="h-3 w-3 text-[#8d7b63]" />
                  paper {s.window}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                  {s.officialQuestions} Q · {s.marks} marks
                </span>
                {s.weightage ? (
                  <span
                    className="rounded-full border px-2.5 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em]"
                    style={{ borderColor: `${s.accent}55`, background: `${s.accent}14`, color: s.accent }}
                  >
                    {s.weightage}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- the app ---------------- */

export function Quiz2App({
  initialSubject,
  onExitAtlas,
}: {
  /** deep link — #/quiz2/<subjectId> */
  initialSubject?: string;
  onExitAtlas: () => void;
}) {
  const valid = QUIZ2_SUBJECTS.some((s) => s.id === initialSubject) ? (initialSubject as Quiz2Subject["id"]) : undefined;
  const [activeId, setActiveId] = useState<Quiz2Subject["id"]>(valid ?? "foc");
  const [exam, setExam] = useState<ExamTarget | null>(null);
  /* the paper is built ONCE, at open time, and frozen in state — the
     countdown ticks re-render this component every second, and the sim
     bank shuffles its draw per build, so a render-time bank would deal
     a fresh sample under the running engine (and its states map) */
  const [bank, setBank] = useState<EngineBank | null>(null);
  /* bumped whenever an exam window closes — re-reads the ledger so a
     just-finished mock/drill shows in the stats card immediately */
  const [statsEpoch, setStatsEpoch] = useState(0);
  const { isDone, toggle, doneCount } = useSliverProgress();

  const subject = useMemo(() => QUIZ2_SUBJECTS.find((s) => s.id === activeId) ?? QUIZ2_SUBJECTS[0], [activeId]);
  const stats = useMockStats(subject.id, statsEpoch);
  const { parts: nextParts, target: nextTarget } = useNextQuizCountdown();
  const subjectCountdown = useSubjectCountdown(subject);

  const openExam = (t: ExamTarget) => {
    const b =
      t.mode === "mock"
        ? quiz2MockBank(subject)
        : quiz2DrillBank(subject, t.sliverId);
    if (!b) return;
    setBank(b);
    setExam(t);
    window.scrollTo(0, 0);
  };

  const closeExam = () => {
    setExam(null);
    setBank(null);
    setStatsEpoch((e) => e + 1);
  };

  return (
    <div className="quiz2-root flex min-h-screen flex-col bg-[#0d0709] text-[#f7ecdd]">
      {/* ------- top bar ------- */}
      <nav aria-label="Quiz 2 war room" className="sticky top-0 z-40 border-b border-white/[.07] bg-[#0d0709]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
          <button
            type="button"
            onClick={onExitAtlas}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-[.62rem] font-extrabold uppercase tracking-[.16em] text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f7ecdd]"
          >
            <ArrowLeft aria-hidden className="h-3 w-3" />
            Atlas
          </button>
          <span className="flex items-center gap-2 font-display text-[.92rem] font-black tracking-tight">
            <span className="flex h-6 w-6 items-center justify-center rounded-md" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
              <ListChecks aria-hidden className="h-3.5 w-3.5 text-[#fff5f0]" />
            </span>
            Quiz 2 — War Room
          </span>
          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <span className="rounded-full border border-[#ef444445] bg-[#ef444412] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.16em] text-[#ffb4a8]">
              {QUIZ2_SUBJECTS.filter((s) => s.dateISO === QUIZ2_DAY_1).length} papers sat
            </span>
            <span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.16em] text-[#cbb89a]">
              1 paper sun
            </span>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* ------- hero ------- */}
        <header className="relative overflow-hidden border-b border-white/[.07]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-[#ef444412] blur-3xl" />
            <span className="absolute -right-4 top-6 select-none font-display text-[9rem] font-black leading-none text-white/[.03] md:text-[13rem]">
              Q2
            </span>
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <span className="flex items-center gap-2 text-[.66rem] font-extrabold uppercase tracking-[.24em] text-[#fca5a5]">
              <span className="h-px w-8 bg-gradient-to-r from-[#ef4444] to-transparent" />
              the atlas · mission quiz 2
            </span>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="font-display text-4xl font-black leading-[1.02] md:text-6xl">
                  Four papers.
                  <br />
                  <span className="bg-gradient-to-b from-[#ffd9d0] via-[#fca5a5] to-[#ef4444] bg-clip-text text-transparent">
                    One war room.
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-[.92rem] leading-relaxed text-[#a89a86]">
                  The official schedule is in — joining times, paper windows, marks. Every syllabus sliver mapped
                  to its lectures, {QUIZ2_TOTAL_QUESTIONS} mock questions, and one official mock that runs twice
                  the real paper, minute for minute.
                </p>
              </div>
              <div className="shrink-0">
                <p className="mb-2.5 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8d7b63]">
                  <AlarmClock aria-hidden className="h-3.5 w-3.5 text-[#ef4444]" />
                  {nextTarget
                    ? `until ${nextTarget.short} begins · ${nextTarget.dateLabel}, ${nextTarget.window}`
                    : "every paper has begun — well fought"}
                </p>
                <CountdownTiles parts={nextParts} />
                <p className="mt-2.5 text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]">
                  {nextTarget && nextTarget.id !== "ebh" ? (
                    <>
                      then EBH on sunday — <span className="text-[#cbb89a]">Sun · 1 Nov · 12:00 PM</span>
                    </>
                  ) : (
                    "the last paper of Quiz 2 — finish strong"
                  )}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ------- the official announcement, schedule strip ------- */}
        <ScheduleStrip />

        {/* ------- subject selector ------- */}
        <section aria-label="Choose a subject" className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUIZ2_SUBJECTS.map((s, i) => (
              <SubjectTab key={s.id} subject={s} active={s.id === activeId} onSelect={() => setActiveId(s.id)} index={i} />
            ))}
          </div>
        </section>

        {/* ------- active subject ------- */}
        <section aria-label={`${subject.name} prep room`} className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6">
          <motion.div key={subject.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }}>
            {/* subject header */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-6 md:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${subject.accent}, transparent)` }}
              />
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border md:h-14 md:w-14"
                    style={{
                      background: `${subject.accent}14`,
                      borderColor: `${subject.accent}45`,
                      boxShadow: `0 14px 34px -14px ${subject.accent}90`,
                    }}
                  >
                    <subject.sigil className="h-6 w-6" style={{ color: subject.accent }} />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-black leading-tight md:text-3xl">{subject.name}</h2>
                    <p className="mt-1.5 max-w-xl text-[.85rem] leading-relaxed text-[#a89a86]">{subject.blurb}</p>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em]" style={{ borderColor: `${subject.accent}50`, background: `${subject.accent}12`, color: subject.accent }}>
                        <CalendarDays aria-hidden className="h-3 w-3" />
                        Quiz: {subject.dateLabel}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                        <LogIn aria-hidden className="h-3 w-3" />
                        Joining {subject.joining}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                        <Clock3 aria-hidden className="h-3 w-3" />
                        {subject.window}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                        {subject.officialQuestions} Q · {subject.marks} marks
                      </span>
                      {subject.weightage ? (
                        <span className="rounded-full border px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em]" style={{ borderColor: `${subject.accent}55`, background: `${subject.accent}14`, color: subject.accent }}>
                          {subject.weightage}
                        </span>
                      ) : null}
                      <span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                        Syllabus: {subject.range}
                      </span>
                      {stats.attempts > 0 ? (
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                          <Trophy aria-hidden className="h-3 w-3 text-[#f5c889]" />
                          best {stats.bestPct}% · {stats.attempts} mock{stats.attempts > 1 ? "s" : ""}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <CountdownTiles parts={subjectCountdown} />
                  <a
                    href={`#/subject/${subject.id}`}
                    onClick={onExitAtlas}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-4 py-1.5 text-[.62rem] font-extrabold uppercase tracking-[.16em] text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f7ecdd]"
                  >
                    <BookOpen aria-hidden className="h-3 w-3" />
                    Open the {subject.short} shelf
                    <ArrowUpRight aria-hidden className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-5">
              {/* syllabus, sliver by sliver */}
              <div className="lg:col-span-3">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl font-black">The syllabus, sliver by sliver</h3>
                    <p className="mt-1 text-[.8rem] text-[#a89a86]">
                      Each sliver names the exact lectures to revise. Tick it when you can teach it.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[.62rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                    {doneCount(subject)}/{subject.slivers.length} ready
                  </span>
                </div>

                <div className="grid gap-3">
                  {subject.slivers.map((sl) => {
                    const done = isDone(subject.id, sl.id);
                    const qCount = quiz2SliverCount(subject.id, sl.id);
                    return (
                      <div
                        key={sl.id}
                        className={`rounded-2xl border p-5 transition-colors ${
                          done ? "border-[#10b98140] bg-[#10b9810a]" : "border-white/10 bg-black/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h4 className="font-display text-[1.02rem] font-black text-[#f7ecdd]">{sl.label}</h4>
                              <span
                                className="rounded-full border px-2 py-0.5 text-[.58rem] font-extrabold uppercase tracking-[.12em]"
                                style={{ borderColor: `${subject.accent}45`, background: `${subject.accent}10`, color: subject.accent }}
                              >
                                {sl.lectures}
                              </span>
                            </div>
                            <ul className="mt-3 grid gap-1.5">
                              {sl.points.map((p) => (
                                <li key={p} className="flex gap-2 text-[.8rem] leading-relaxed text-[#c4b39c]">
                                  <span aria-hidden className="mt-[.45rem] h-1 w-1 shrink-0 rounded-full" style={{ background: subject.accent }} />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggle(subject.id, sl.id)}
                            aria-pressed={done}
                            aria-label={done ? `Mark ${sl.label} as not ready` : `Mark ${sl.label} as ready`}
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                              done
                                ? "border-[#10b98166] bg-[#10b98122] text-[#6ee7b7]"
                                : "border-white/15 bg-white/[.04] text-transparent hover:border-white/35"
                            }`}
                          >
                            <Check aria-hidden className="h-4 w-4" strokeWidth={3} />
                          </button>
                        </div>
                        <div className="mt-3.5 flex items-center justify-between border-t border-white/[.06] pt-3">
                          <span className="text-[.6rem] font-extrabold uppercase tracking-[.16em] text-[#8d7b63]">
                            {qCount} drill questions
                          </span>
                          <button
                            type="button"
                            onClick={() => openExam({ mode: "drill", sliverId: sl.id })}
                            disabled={qCount === 0}
                            className="flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[.62rem] font-extrabold uppercase tracking-[.14em] transition disabled:opacity-40"
                            style={{ borderColor: `${subject.accent}45`, background: `${subject.accent}0d`, color: subject.accent }}
                          >
                            <Timer aria-hidden className="h-3 w-3" />
                            Drill this sliver
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* mock windows */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <h3 className="font-display text-xl font-black">Train here</h3>
                  <p className="mt-1 text-[.8rem] text-[#a89a86]">
                    One official mock — twice the paper — plus targeted drills per sliver.
                  </p>
                </div>

                {/* the official mock — twice the paper, one mode */}
                <motion.button
                  type="button"
                  onClick={() => openExam({ mode: "mock" })}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  className="quiz2-mock-card group relative w-full overflow-hidden rounded-3xl p-6 text-left"
                  aria-label={`Start the official mock: ${quiz2MockCount(subject)} questions in ${subject.mockMinutes} minutes`}
                >
                  <span aria-hidden className="pointer-events-none absolute -right-8 -top-10 select-none font-display text-[7rem] font-black leading-none text-white/[.05]">
                    {subject.short}
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)", boxShadow: "0 14px 34px -14px rgba(239,68,68,.9)" }}>
                      <Timer aria-hidden className="h-5 w-5 text-[#fff5f0]" />
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-[#ef444455] bg-[#ef444414] px-2.5 py-1 text-[.56rem] font-extrabold uppercase tracking-[.14em] text-[#ffb4a8]">
                      <Flame aria-hidden className="h-2.5 w-2.5" />
                      twice the paper
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-black text-[#fff5f0]">The Official Mock</h4>
                  <p className="mt-1.5 text-[.82rem] leading-relaxed text-[#d8b8ae]">
                    Twice the questions on twice the clock — {quiz2MockCount(subject)} exam-predictable questions on
                    the {subject.minutes * 2}-minute clock. A fresh draw from the bank every attempt.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[.62rem] font-extrabold uppercase tracking-[.14em]">
                    <span className="rounded-full border border-white/20 bg-white/[.08] px-2.5 py-1 text-[#ffd9d0]">{quiz2MockCount(subject)} questions</span>
                    <span className="flex items-center gap-1 rounded-full border border-white/20 bg-white/[.08] px-2.5 py-1 text-[#ffd9d0]">
                      <Timer aria-hidden className="h-2.5 w-2.5" />
                      {subject.mockMinutes} min
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/[.08] px-2.5 py-1 text-[#ffd9d0]">{subject.marks * 2} marks · 1 each</span>
                    <span className="rounded-full border border-white/20 bg-white/[.08] px-2.5 py-1 text-[#ffd9d0]">instant model answers</span>
                  </div>
                  <span className="mt-5 flex items-center gap-1.5 text-[.66rem] font-black uppercase tracking-[.18em] text-[#ffb4a8]">
                    Sit the paper
                    <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>

                {/* stats / guidance */}
                <div className="mt-4 grid gap-3">
                  {stats.lastPct != null ? (
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <p className="text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#8d7b63]">Last mock</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-display text-2xl font-black text-[#f7ecdd]">{stats.lastPct}%</span>
                        <span className="text-[.62rem] font-extrabold uppercase tracking-[.14em] text-[#cbb89a]">
                          best {stats.bestPct}%
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-white/15 bg-black/30 p-4 text-center">
                      <p className="text-[.78rem] leading-relaxed text-[#a89a86]">
                        No mock attempted yet. The first one is the hardest — after that it&apos;s just climbing.
                      </p>
                    </div>
                  )}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#8d7b63]">The drill rack</p>
                    <div className="mt-2.5 grid gap-1.5">
                      {subject.slivers.map((sl) => (
                        <button
                          key={sl.id}
                          type="button"
                          onClick={() => openExam({ mode: "drill", sliverId: sl.id })}
                          className="flex items-center justify-between rounded-xl border border-white/[.08] bg-white/[.03] px-3.5 py-2.5 text-left transition hover:border-white/25 hover:bg-white/[.07]"
                        >
                          <span className="truncate text-[.76rem] font-bold text-[#e9d7bf]">{sl.label}</span>
                          <span className="ml-2 flex shrink-0 items-center gap-2">
                            <span className="text-[.6rem] font-extrabold uppercase tracking-[.12em] text-[#8d7b63]">
                              {quiz2SliverCount(subject.id, sl.id)} Qs
                            </span>
                            <ArrowRight aria-hidden className="h-3 w-3" style={{ color: subject.accent }} />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ------- footer (sticks to the bottom on short screens) ------- */}
      <footer className="mt-auto border-t border-white/[.07] py-8">
        <p className="text-center text-[.66rem] font-bold uppercase tracking-[.22em] text-[#8d7b63]">
          The Atlas · Quiz 2 war room — three papers sat, one on sunday. You&apos;ve got this.
        </p>
      </footer>

      {/* ------- the exam window (shared engine, war-room skin) ------- */}
      {exam && bank ? (
        <ExamEngine
          theme={QUIZ2_EXAM_THEME}
          bank={bank}
          draftId={
            exam.mode === "mock"
              ? `quiz2-${subject.id}-mock`
              : `quiz2-${subject.id}-${exam.sliverId}`
          }
          minutes={exam.mode === "mock" ? subject.mockMinutes : undefined}
          onClose={closeExam}
        />
      ) : null}
    </div>
  );
}
