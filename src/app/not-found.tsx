import Link from "next/link";

/* ============================================================
   THE ATLAS — 404.
   One canonical page lives behind "/" (the hash router drives
   every view), so any stray URL still lands on brand: dusk,
   serif, and one honest way back.
   ============================================================ */

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 text-center"
      style={{ background: "linear-gradient(165deg,#070509 0%,#160d06 55%,#241608 100%)" }}
    >
      <p
        aria-hidden
        className="font-display select-none text-[7rem] font-black leading-none text-transparent md:text-[9rem]"
        style={{ WebkitTextStroke: "1px rgba(245,158,11,.4)" }}
      >
        404
      </p>
      <h1 className="font-display text-3xl font-black text-[#f7ecdd] md:text-4xl">
        This page isn&apos;t on the map.
      </h1>
      <p className="max-w-md text-[.95rem] leading-relaxed text-[#a89a86]">
        The atlas keeps everything behind its one shelf — whatever you were looking for
        may still be waiting there.
      </p>
      <Link
        href="/"
        className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/[.05] px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition-colors hover:bg-white/[.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f59e0b]"
      >
        ← Back to the atlas
      </Link>
    </div>
  );
}
