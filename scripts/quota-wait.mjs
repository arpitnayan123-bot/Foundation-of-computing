/* foreground quota probe — poll until the studio's model quota
   recovers, capped to fit one Bash call (~9 min). Exit 0 = ready. */
import ZAI from "z-ai-web-dev-sdk";

const DEADLINE = Date.now() + 8.5 * 60_000;
let i = 0;
while (Date.now() < DEADLINE) {
  i++;
  try {
    const zai = await ZAI.create();
    await zai.chat.completions.create({
      messages: [{ role: "user", content: "Say READY." }],
      max_tokens: 8,
    });
    console.log(`probe ${i}: MODEL OK — quota recovered`);
    process.exit(0);
  } catch {
    console.log(`probe ${i}: ${new Date().toISOString().slice(11, 19)} still napping`);
  }
  await new Promise((r) => setTimeout(r, 105_000));
}
console.log("TIMEOUT — still napping after probe", i);
process.exit(1);
