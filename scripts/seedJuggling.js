import fetch from "node-fetch";
import { JUGGLING_SEED_DATA } from "../src/constants/juggling.js";

const baseUrl = process.env.VITE_API_BASE;

async function seedJuggling() {
  console.log("🌱 Seeding juggling levels...");

  for (const level of JUGGLING_SEED_DATA) {
    await fetch(`${baseUrl}/api/juggling/levels`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(level)
    });

    console.log("✅ Seeded:", level.level);
  }

  console.log("✅ Juggling seeding complete");
}

seedJuggling();
