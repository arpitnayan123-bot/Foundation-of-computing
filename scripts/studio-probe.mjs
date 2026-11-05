/* single-shot SDK probe — is the studio reachable from plain node? */
import ZAI from "z-ai-web-dev-sdk";
try {
  const zai = await ZAI.create();
  const res = await zai.audio.tts.create({
    input: "Hello, this is a quick studio check.",
    voice: "tongtong",
    speed: 1.0,
    response_format: "wav",
    stream: false,
  });
  const buf = Buffer.from(new Uint8Array(await res.arrayBuffer()));
  console.log("STUDIO OK —", buf.length, "bytes");
} catch (e) {
  console.log("STUDIO FAIL —", e?.message ?? e);
}
