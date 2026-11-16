import { NextResponse } from "next/server";

/* the front door — a quiet health line. Reveals nothing about
   internals; anything sensitive lives behind the guarded routes. */
export function GET() {
  return NextResponse.json({ ok: true, service: "the-atlas" });
}
