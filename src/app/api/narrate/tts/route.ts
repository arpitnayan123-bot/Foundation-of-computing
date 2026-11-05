/* ============================================================
   THE NARRATOR'S STUDIO.

   POST /api/narrate/tts   { text, voice? }
     → 200 audio/mpeg  (X-Narrator-Cache: hit | miss)
     → 400 { error }   bad input
     → 502 { error }   the studio is unreachable

   One spoken bite per call (the client splits the script into
   ≤950-char sentence groups — the API takes ≤1024). The synth
   lands as 24 kHz mono WAV, then ffmpeg folds it down to a
   64 kbps MP3 — roughly 8 KB/s, so a full briefing rides a
   mobile connection like a podcast, not a download.

   Every bite is file-cached by sha1(voice|text): first play
   synthesises, every replay after that is a disk read. The
   browser's Cache API adds a second layer on the client, so
   the walk-to-class replay costs zero bytes.
   ============================================================ */

import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import ZAI from "z-ai-web-dev-sdk";
import { rateLimit, sameOrigin } from "@/lib/api-guard";

export const dynamic = "force-dynamic";

const MAX_TEXT = 1000; // API ceiling is 1024 — stay clear
/* ONE voice on the air — TARA (tongtong), the ASR-QA'd winner. The
   allow-list doubles as a security wall: an unknown voice id can never
   be smuggled into the synth — it falls through to the house default. */
const ALLOWED_VOICES = new Set(["tongtong"]);
const DEFAULT_VOICE = "tongtong"; // Tara — warm, friendly, Indian-English host
const CACHE_DIR = path.join(process.cwd(), "db", "narration-audio");
const SYNTH_TIMEOUT_MS = 45_000;
const CACHE_KEY_VERSION = "r6"; // bump: Tara-only policy + spoken-text normalization

/* spoken-text normalization — symbols that make a neural voice stumble
   get said the way the host would say them: "₹40" → "40 rupees",
   "94.6%" → "94.6 percent", "e.g." → "for example". Applied BEFORE the
   cache key, so every stored bite is the clean take. */
function normalizeForSpeech(text: string): string {
  return text
    .replace(/[–—]/g, ", ")
    .replace(/&/g, " and ")
    .replace(/₹\s?([0-9][0-9,.]*)/g, "$1 rupees")
    .replace(/\$\s?([0-9][0-9,.]*)/g, "$1 dollars")
    .replace(/%/g, " percent ")
    .replace(/\be\.g\./gi, "for example")
    .replace(/\bi\.e\./gi, "that is")
    .replace(/\bvs\.?\b/gi, "versus")
    .replace(/→/g, " to ")
    .replace(/·/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

/* quota-storm guard — when the upstream limiter answers 429, further
   attempts inside the cooldown window fail FAST (no retry storm: every
   retry is itself a request against a hot limit). The client hears the
   502 immediately and its device-voice fallback takes over at once. */
let coolUntil = 0;
const COOL_MS = 25_000;

/** one synthesis in flight per key — parallel prefetches dedupe here */
const inflight = new Map<string, Promise<Buffer>>();

function synthOnce(text: string, voice: string): Promise<Buffer> {
  return (async () => {
    let lastErr: unknown;
    let rateLimited = false; // 429 — a quota nap, not a dead studio
    for (let attempt = 1; attempt <= 2; attempt++) {
      if (Date.now() < coolUntil) break; // the storm gate is closed
      try {
        /* SDK boot + synthesis together are bounded by the clock — a hung
           gateway connection used to leak the inflight slot forever */
        const boot = (async () => {
          const zai = await ZAI.create();
          return zai.audio.tts.create({
            input: text,
            voice,
            speed: 1.0, // pace rides on the client's playbackRate — one synth serves all speeds
            response_format: "wav",
            stream: false,
          });
        })();
        boot.catch(() => {}); // the race may time out first — no unhandled rejection
        const res = await Promise.race([
          boot,
          new Promise<never>((_, rej) =>
            setTimeout(() => rej(new Error("synth timed out")), SYNTH_TIMEOUT_MS),
          ),
        ]);
        const wav = Buffer.from(new Uint8Array(await res.arrayBuffer()));
        if (wav.length < 1000) throw new Error("synth returned an empty bite");
        coolUntil = 0; // the studio breathed — reopen the gate
        const mp3 = await masterAudio(wav).catch(() => wav); // fall back to raw wav
        return mp3;
      } catch (e) {
        lastErr = e;
        const msg = String((e as Error)?.message);
        if (/429|too many/i.test(msg)) {
          rateLimited = true;
          coolUntil = Date.now() + COOL_MS; // close the gate — fail fast below
          break;
        }
        const retriable = /rate|timeout|ECONN|5\d\d/i.test(msg);
        if (!retriable || attempt === 2) break;
        await new Promise((r) => setTimeout(r, 2500));
      }
    }
    const err = lastErr instanceof Error ? lastErr : new Error("synthesis failed");
    (err as Error & { rateLimited?: boolean }).rateLimited = rateLimited;
    throw err;
  })();
}

/** wav (24 kHz mono 16-bit) → broadcast-loud mp3 via ffmpeg on stdio.
    Chain: highpass clears studio rumble → acompressor evens the host's
    dynamics (no syllable vanishing, none shouting) → loudnorm pulls every
    bite to −16 LUFS (podcast level) with a −1.5 dB true-peak ceiling.
    96 kbps mono keeps the codec artifacts out of the raised floor. */
function masterAudio(wav: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const ff = spawn("ffmpeg", [
      "-hide_banner", "-loglevel", "error",
      "-f", "wav", "-i", "pipe:0",
      "-af",
      "highpass=f=65,acompressor=threshold=-19dB:ratio=2.2:attack=12:release=170:makeup=1.5dB,loudnorm=I=-16:TP=-1.5:LRA=11",
      "-codec:a", "libmp3lame", "-b:a", "96k", "-ar", "24000", "-ac", "1",
      "-f", "mp3", "pipe:1",
    ]);
    const out: Buffer[] = [];
    const kill = setTimeout(() => ff.kill("SIGKILL"), 30_000);
    ff.stdout.on("data", (d: Buffer) => out.push(d));
    ff.stderr.on("data", () => {/* loglevel error only — ignore */});
    ff.on("error", (e) => { clearTimeout(kill); reject(e); });
    ff.on("close", (code) => {
      clearTimeout(kill);
      const buf = Buffer.concat(out);
      if (code === 0 && buf.length > 500) resolve(buf);
      else reject(new Error(`ffmpeg exited ${code}`));
    });
    ff.stdin.write(wav);
    ff.stdin.end();
  });
}

export async function POST(req: Request) {
  const guard = sameOrigin(req) ?? rateLimit(req, "tts", 60, 60_000);
  if (guard) return guard;
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Request body must be JSON." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Request body must be a JSON object." }, { status: 400 });
  }
  const { text, voice } = body as Record<string, unknown>;
  const requested = typeof text === "string" ? text.replace(/\s+/g, " ").trim() : "";
  const spoken = normalizeForSpeech(requested);
  if (!spoken) {
    console.error("[narrate/tts] rejected empty bite — client sent text length", typeof text === "string" ? text.length : typeof text);
    return NextResponse.json({ error: "Nothing to speak." }, { status: 400 });
  }
  if (spoken.length > MAX_TEXT) {
    console.error("[narrate/tts] rejected long bite —", spoken.length, "chars:", spoken.slice(0, 60), "…");
    return NextResponse.json({ error: `Bite too long — ${spoken.length} > ${MAX_TEXT} chars.` }, { status: 400 });
  }
  const v = typeof voice === "string" && ALLOWED_VOICES.has(voice) ? voice : DEFAULT_VOICE;

  const key = createHash("sha1").update(`${CACHE_KEY_VERSION}\n${v}\n${spoken}`).digest("hex");
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const file = path.join(CACHE_DIR, `${key}.mp3`);

  try {
    if (fs.existsSync(file) && fs.statSync(file).size > 500) {
      const buf = fs.readFileSync(file);
      return audio(buf, "hit");
    }
    /* the storm gate — a cooling studio answers instantly, no queue.
       Requests whose synthesis is already in flight still wait on it. */
    if (Date.now() < coolUntil && !inflight.has(key)) {
      return NextResponse.json(
        { error: "The studio is cooling down — the device voice will carry this." },
        { status: 503, headers: { "Retry-After": String(Math.ceil((coolUntil - Date.now()) / 1000)) } },
      );
    }
    let buf: Buffer;
    const pending = inflight.get(key);
    if (pending) {
      buf = await Promise.race([
        pending,
        new Promise<Buffer>((_, rej) => setTimeout(() => rej(new Error("synth timed out")), SYNTH_TIMEOUT_MS)),
      ]);
    } else {
      const job = synthOnce(spoken, v).finally(() => inflight.delete(key));
      inflight.set(key, job);
      buf = await Promise.race([
        job,
        new Promise<Buffer>((_, rej) => setTimeout(() => rej(new Error("synth timed out")), SYNTH_TIMEOUT_MS)),
      ]);
    }
    try {
      fs.writeFileSync(file, buf);
    } catch {
      /* cache write is best-effort */
    }
    return audio(buf, "miss");
  } catch (e) {
    console.error("[narrate/tts] synthesis failed:", (e as Error)?.message ?? e);
    /* a 429 quota nap answers 503 + Retry-After (the client latches for
       exactly that long); anything else is a real outage — 502 */
    const rateLimited = Boolean((e as { rateLimited?: boolean })?.rateLimited);
    const retryAfter = Math.max(1, Math.ceil((coolUntil - Date.now()) / 1000));
    return NextResponse.json(
      { error: rateLimited ? "The studio's quota is napping — the device voice will carry this." : "The studio is unreachable — try again in a moment." },
      {
        status: rateLimited ? 503 : 502,
        headers: rateLimited ? { "Retry-After": String(retryAfter) } : undefined,
      },
    );
  }
}

/* the limiter's face — surfaced in dev logs so a 502 is never a mystery */
export async function GET() {
  const cooling = Date.now() < coolUntil;
  return NextResponse.json({
    ok: true,
    studio: "narrator",
    voicePolicy: "tara-only",
    defaultVoice: DEFAULT_VOICE,
    cooling,
    cooldownEndsIn: cooling ? Math.ceil((coolUntil - Date.now()) / 1000) : 0,
  });
}

function audio(buf: Buffer, cache: "hit" | "miss") {
  const isMp3 = buf.length > 2 && buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0;
  return new NextResponse(new Uint8Array(buf), {
    status: 200,
    headers: {
      "Content-Type": isMp3 ? "audio/mpeg" : "audio/wav",
      "Content-Length": String(buf.length),
      "Cache-Control": "private, max-age=31536000, immutable",
      "X-Narrator-Cache": cache,
    },
  });
}
