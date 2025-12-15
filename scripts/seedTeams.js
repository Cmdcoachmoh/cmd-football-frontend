import fetch from "node-fetch";

const baseUrl = process.env.VITE_API_BASE;

const TEAMS = [
  { name: "CMD U11", level: "U11" },
  { name: "CMD U13", level: "U13" },
  { name: "CMD U15", level: "U15" }
];

async function seedTeams() {
  console.log("🌱 Seeding teams...");

  for (const t of TEAMS) {
    await fetch(`${baseUrl}/api/teams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });

    console.log("✅ Seeded:", t.name);
  }

  console.log("✅ Team seeding complete");
}

seedTeams();
