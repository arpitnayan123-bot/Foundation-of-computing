/* ============================================================
   SYNC — cross-device transfer via a 6-character code.

   POST   /api/sync   { code, payload }  → 200 { ok, code, updatedAt }
   GET    /api/sync?code=ABC234       → 200 { ok, payload, updatedAt }
   DELETE /api/sync?code=ABC234       → 200 { ok, code }   ("burn")

   One code parks ONE Atlas backup payload (the exact string
   lib/backup.ts exportBackup() produces, re-validated here
   before it is ever stored). Anyone with the code can pull the
   data — the code is treated like a password by the UI copy.

   The code alphabet drops I, O, 0 and 1 so it survives being
   read aloud, handwritten, or typed on a phone keyboard.

   Deployment honesty: the SQLite file may not exist on some
   deploys — every DB call is wrapped and a 503 with a human
   message lets the UI degrade to plain export/import.
   ============================================================ */

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { validateBackupShape } from "@/lib/backup";

export const dynamic = "force-dynamic";

/** six chars, no ambiguous glyphs: A–Z minus I,O + 2–9 */
const CODE_RE = /^[A-HJ-NP-Z2-9]{6}$/;
/** 512 KB of JSON string — the whole local memory with room to spare */
const MAX_PAYLOAD_BYTES = 512 * 1024;

const UNAVAILABLE = "sync storage unavailable on this deployment";

function normalizeCode(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const code = raw.trim().toUpperCase();
  return CODE_RE.test(code) ? code : null;
}

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function unavailable(error: unknown, where: string) {
  console.error(`[api/sync] ${where}:`, error);
  return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
}

export async function POST(request: Request) {
  let body: { code?: unknown; payload?: unknown };
  try {
    body = (await request.json()) as { code?: unknown; payload?: unknown };
  } catch {
    return bad("The request body must be JSON: { code, payload }.");
  }
  const code = normalizeCode(body.code);
  if (!code) {
    return bad("The code must be 6 characters from A–Z (never I or O) and 2–9.");
  }
  const { payload } = body;
  if (typeof payload !== "string" || payload.length === 0) {
    return bad("The payload must be a non-empty Atlas backup string.");
  }
  if (new TextEncoder().encode(payload).length > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { error: "This backup is too large to park on a code (512 KB limit) — export a file instead." },
      { status: 413 },
    );
  }
  /* validate BEFORE storing: a code only ever holds a whole,
     well-shaped Atlas bundle — never arbitrary JSON */
  const shape = validateBackupShape(payload);
  if (!shape.ok) {
    return bad(`That payload is not a valid Atlas backup — ${shape.error}`);
  }
  try {
    const blob = await db.syncBlob.upsert({
      where: { code },
      update: { payload },
      create: { code, payload },
    });
    return NextResponse.json({ ok: true, code, updatedAt: blob.updatedAt });
  } catch (error) {
    return unavailable(error, "POST");
  }
}

export async function GET(request: Request) {
  const code = normalizeCode(new URL(request.url).searchParams.get("code"));
  if (!code) {
    return bad("The code must be 6 characters from A–Z (never I or O) and 2–9.");
  }
  try {
    const blob = await db.syncBlob.findUnique({ where: { code } });
    if (!blob) {
      return NextResponse.json({ error: "No data is parked under that code." }, { status: 404 });
    }
    return NextResponse.json({ ok: true, payload: blob.payload, updatedAt: blob.updatedAt });
  } catch (error) {
    return unavailable(error, "GET");
  }
}

export async function DELETE(request: Request) {
  const code = normalizeCode(new URL(request.url).searchParams.get("code"));
  if (!code) {
    return bad("The code must be 6 characters from A–Z (never I or O) and 2–9.");
  }
  try {
    await db.syncBlob.delete({ where: { code } });
    return NextResponse.json({ ok: true, code });
  } catch (error) {
    /* a miss on delete means the code was already empty —
       burning it is still a success from the reader's view */
    if (error instanceof Error && error.message.includes("does not exist")) {
      return NextResponse.json({ ok: true, code });
    }
    return unavailable(error, "DELETE");
  }
}
