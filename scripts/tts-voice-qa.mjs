/* Voice QA — pick the narrator's studio voice.
   For each candidate voice: TTS a greeting → mp3, then ASR round-trip
   the mp3 and print the transcription so we can verify the English
   survives the synthesis intact. */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = "/tmp/voice-qa";
fs.mkdirSync(OUT, { recursive: true });

const TEXT =
  "Welcome to the Foundations of Computing. This course transforms you, from a passive user of technology, into an active developer. Let me explain what computing really is.";

const VOICES = ["jam", "kazi", "tongtong", "luodo", "xiaochen"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function synth(zai, voice) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return await zai.audio.tts.create({
        input: TEXT,
        voice,
        speed: 1.0,
        response_format: "wav",
        stream: false,
      });
    } catch (e) {
      if (attempt < 3 && /429|Too many/i.test(e.message)) {
        await sleep(3500 * attempt);
        continue;
      }
      throw e;
    }
  }
}

async function main() {
  const zai = await ZAI.create();
  for (const voice of VOICES) {
    const file = path.join(OUT, `${voice}.wav`);
    try {
      const t0 = Date.now();
      const res = await synth(zai, voice);
      const buf = Buffer.from(new Uint8Array(await res.arrayBuffer()));
      fs.writeFileSync(file, buf);
      await sleep(1600);
      const ms = Date.now() - t0;
      let heard = "(asr failed)";
      try {
        const asr = await zai.audio.asr.create({
          file_base64: buf.toString("base64"),
        });
        heard = (asr.text ?? JSON.stringify(asr) + "").trim();
      } catch (e) {
        heard = "(asr error: " + e.message + ")";
      }
      console.log(`\n=== ${voice} ===  ${buf.length} bytes · ${ms} ms`);
      console.log(`heard: ${heard}`);
    } catch (e) {
      console.log(`\n=== ${voice} ===  FAILED: ${e.message}`);
    }
  }
}

main().catch((e) => {
  console.error("QA crashed:", e.message);
  process.exit(1);
});
