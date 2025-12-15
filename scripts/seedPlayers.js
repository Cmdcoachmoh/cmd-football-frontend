import fetch from "node-fetch";

const baseUrl = process.env.VITE_API_BASE;

const PLAYERS = [
  { name: "Player One", age: 12, position: "Forward" },
  { name: "Player Two", age: 13, position: "Midfielder" },
  { name: "Player Three", age: 11, position: "Defender" }
];

async function seedPlayers() {
  console.log("🌱 Seeding players...");

  for (const p of PLAYERS) {
    await fetch(`${baseUrl}/api/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p)
    });

    console.log("✅ Seeded:", p.name);
  }

  console.log("✅ Player seeding complete");
}

seedPlayers();
