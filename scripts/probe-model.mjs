/* Direct probe of the model + tts behind the narration backend. */
import ZAI from "z-ai-web-dev-sdk";

const zai = await ZAI.create();
const t0 = Date.now();
try {
  const completion = (await zai.chat.completions.create({
    messages: [
      { role: "system", content: "Reply with exactly: PONG" },
      { role: "user", content: "ping" },
    ],
  }));
  console.log("chat OK in", Date.now() - t0, "ms →", completion?.choices?.[0]?.message?.content);
} catch (e) {
  console.log("chat FAILED:", e.message);
}

const t1 = Date.now();
try {
  const res = await zai.audio.tts.create({
    input: "Quick studio sound check.",
    voice: "tongtong",
    speed: 1.0,
    response_format: "wav",
    stream: false,
  });
  const buf = Buffer.from(new Uint8Array(await res.arrayBuffer()));
  console.log("tts OK in", Date.now() - t1, "ms →", buf.length, "bytes");
} catch (e) {
  console.log("tts FAILED:", e.message);
}
