/* Voice QA harness — synthesize the radio's greeting with every
   candidate voice, save WAVs for loudness analysis, and run an
   ASR round-trip to score English fluency. */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "scripts", "voice-qa-out");
fs.mkdirSync(OUT, { recursive: true });

const GREET =
  "Welcome to the Foundation of Computing. Computing is the art of turning a messy, real-world problem into a clear, step-by-step solution that a machine can follow. In this lecture, we will meet the input-process-output model, the heartbeat of every program you will ever write.";

const VOICES = ["tongtong", "xiaochen", "chuichui", "luodo", "kazi", "jam"];

async function synth(zai, voice, text, volume) {
  const res = await zai.audio.tts.create({
    input: text,
    voice,
    speed: 1.0,
    volume,
    response_format: "wav",
    stream: false,
  });
  return Buffer.from(new Uint8Array(await res.arrayBuffer()));
}

async function asr(zai, file) {
  const b64 = fs.readFileSync(file).toString("base64");
  const res = await zai.audio.asr.create({ file_base64: b64 });
  return res?.text ?? "(no text)";
}

const zai = await ZAI.create();
const report = [];

for (const v of VOICES) {
  for (const vol of [1.0, 1.6]) {
    const file = path.join(OUT, `${v}-v${vol}.wav`);
    try {
      const buf = await synth(zai, v, GREET, vol);
      if (buf.length < 2000) throw new Error(`tiny buffer ${buf.length}B`);
      fs.writeFileSync(file, buf);
      let transcript = "";
      try {
        transcript = await asr(zai, file);
      } catch (e) {
        transcript = `(asr failed: ${e.message})`;
      }
      report.push({ voice: v, volume: vol, bytes: buf.length, transcript });
      console.log(`OK  ${v} @vol${vol}  ${buf.length}B`);
    } catch (e) {
      report.push({ voice: v, volume: vol, error: e.message });
      console.log(`ERR ${v} @vol${vol}: ${e.message}`);
    }
  }
}

fs.writeFileSync(path.join(OUT, "asr-report.json"), JSON.stringify(report, null, 2));
console.log("\n--- ASR ROUND TRIP ---");
for (const r of report) {
  console.log(`\n[${r.voice} vol=${r.volume}] ${r.error ?? ""}`);
  if (r.transcript) console.log(`  "${r.transcript}"`);
}
