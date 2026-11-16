/* ============================================================
   THE MODEL CLOCK — one bounded lane for every SDK call.

   ZAI.create() + the model call ride ONE promise raced against
   a clock. A hung gateway connection used to pin routes forever
   (a window sat waiting on "composing…" while a socket never
   answered) — now every model call in the app is bounded: the
   route answers, the lifeboat/fallback replies, and the SDK's
   late reply is simply ignored.

   The clock losing the race is normal life: the boot promise
   gets a no-op catch so a late rejection never becomes an
   unhandled crash.
   ============================================================ */

import ZAI from "z-ai-web-dev-sdk";

const DEFAULT_TIMEOUT_MS = 45_000;

export interface BoundedMessage {
  role: string;
  content: string;
}

/** one bounded chat completion — returns the trimmed content, or ""
    when the model drew a blank; rejects on timeout/transport errors */
export async function boundedChat(
  messages: ReadonlyArray<BoundedMessage>,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string> {
  const boot = (async () => {
    const zai = await ZAI.create();
    const completion = (await zai.chat.completions.create({
      messages: messages as never,
    })) as { choices?: Array<{ message?: { content?: unknown } }> };
    const content = completion?.choices?.[0]?.message?.content;
    return typeof content === "string" ? content.trim() : "";
  })();
  boot.catch(() => {}); // the clock may win — no unhandled rejection
  return Promise.race([
    boot,
    new Promise<never>((_, rej) =>
      setTimeout(() => rej(new Error("model call timed out")), timeoutMs),
    ),
  ]);
}
