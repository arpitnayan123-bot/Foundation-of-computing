"use client";

/* ============================================================
   YONAOSHI — the evening debrief as a cockpit instrument.

   The last instrument on the flight deck, and the quietest:
   two plain lines on what today taught you, saved once per
   day. The streak of debriefs is the discipline; the recent
   lines below it become the week's short autobiography.

   Store: lib/reflection.ts — local-only, backup-covered.
   ============================================================ */

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Flame, MoonStar } from "lucide-react";
import { REFLECTION_MAX_CHARS, recentReflections, reflectionForDay, reflectionStreak, saveReflection } from "@/lib/reflection";

export function YonaoshiPanel() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [recent, setRecent] = useState<Array<{ date: string; text: string }>>([]);

  const refresh = useCallback(() => {
    const today = reflectionForDay();
    setSaved(today?.text ?? null);
    setText(today?.text ?? "");
    setStreak(reflectionStreak());
    setRecent(recentReflections(3));
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => refresh());
    return () => cancelAnimationFrame(raf);
  }, [refresh]);

  const save = () => {
    const trimmed = text.trim();
    if (trimmed.length < 3) return;
    saveReflection(trimmed);
    setSaved(trimmed);
    setStreak(reflectionStreak());
    setRecent(recentReflections(3));
  };

  return (
    <section aria-labelledby="yonaoshi-title" className="mt-12">
      <div className="mb-4">
        <p className="font-mono text-[.58rem] font-bold uppercase tracking-[.24em] text-[#f5c889]">
          Yonaoshi · the evening debrief
        </p>
        <h2 id="yonaoshi-title" className="font-display text-2xl font-black text-[#f7ecdd] sm:text-3xl">
          Close the day the Japanese way.
        </h2>
        <p className="mt-1 text-[.84rem] text-[#a89a86]">
          Two plain lines on what today taught you — spoken as if to a friend. One per day; the streak is the
          discipline.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <MoonStar className="h-4 w-4" style={{ color: "#f5c889" }} aria-hidden />
            <span className="font-mono text-[.62rem] font-bold uppercase tracking-[.16em] text-[#cbb89a]">
              {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}
            </span>
            {streak > 0 ? (
              <span
                className="ml-auto flex items-center gap-1 rounded-full border border-[#e4674a40] bg-[#e4674a14] px-2.5 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.12em] text-[#e4674a]"
                title="Consecutive days with an evening debrief"
              >
                <Flame className="h-3 w-3" aria-hidden />
                {streak === 1 ? "one evening" : `${streak} evenings`}
              </span>
            ) : null}
          </div>

          <label htmlFor="yonaoshi-input" className="sr-only">
            What did today teach you?
          </label>
          <textarea
            id="yonaoshi-input"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setSaved(null);
            }}
            rows={3}
            maxLength={REFLECTION_MAX_CHARS}
            placeholder="What did today teach you? What still feels loose?"
            className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-white/[.05] px-4 py-3 text-[.9rem] leading-relaxed text-[#f7ecdd] outline-none transition placeholder:text-[#a89a86]/70 focus:border-[#f59e0b66] focus:bg-white/[.07]"
          />
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]">
              {saved ? (
                <span className="flex items-center gap-1.5 text-[#a9c977]" role="status">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                  today&apos;s debrief is saved — see you tomorrow night
                </span>
              ) : (
                `${REFLECTION_MAX_CHARS - text.length} characters left`
              )}
            </span>
            <button
              type="button"
              onClick={save}
              disabled={text.trim().length < 3}
              className="rounded-full border border-[#f5c88955] bg-[#f5c88914] px-4 py-2 text-[.64rem] font-black uppercase tracking-[.12em] text-[#f5c889] transition hover:bg-[#f5c88926] disabled:opacity-40"
            >
              {saved ? "update today" : "close the day"}
            </button>
          </div>

          {recent.length > 0 ? (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2 border-t border-white/[.07] pt-4"
              aria-label="Recent debriefs"
            >
              {recent.map((r) => (
                <li key={r.date} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-[.58rem] font-bold uppercase tracking-[.14em] text-[#8d7b63]">
                    {new Date(`${r.date}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </span>
                  <span className="min-w-0 flex-1 text-[.8rem] leading-relaxed text-[#c9b99f]">{r.text}</span>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
