import fetch from "node-fetch";
import { DRILLS } from "../src/constants/drill.js";

const baseUrl = process.env.VITE_API_BASE;

async function seed() {
  for (const drill of DRILLS) {
    await fetch(`${baseUrl}/api/drills`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(drill)
    });

    console.log("Seeded:", drill.name);
  }
}

seed();
