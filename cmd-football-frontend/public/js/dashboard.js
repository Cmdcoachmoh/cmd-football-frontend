export async function fetchDashboard(auth = { user: "admin", pass: "adminpass" }) {
  try {
    const response = await fetch("/api/dashboard", {
      headers: {
        Authorization: "Basic " + btoa(`${auth.user}:${auth.pass}`)
      }
    });

    if (!response.ok) throw new Error("Failed to fetch dashboard data");

    const data = await response.json();
    renderDashboard(data);
  } catch (err) {
    console.error("❌ Error loading dashboard:", err);
    const container = document.getElementById("dashboard");
    container.innerText = "Failed to load player data.";
  }

  const badge = document.getElementById("badgeFilter")?.value;

team.players
  .filter(p => {
    const badgeMatch = !badge || p.badge === badge;
    return ageMatch && levelMatch && badgeMatch;
  })

}

export function renderDashboard(players = []) {
  const container = document.getElementById("dashboard");
  container.innerHTML = ""; // Clear previous content

  players.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <img src="${player.photoUrl}" class="player-photo" alt="${player.name}">
      <h3>${player.badgeEmoji || "🎯"} ${player.name}</h3>
      <p><strong>Team:</strong> ${player.team}</p>
      <p><strong>Level:</strong> ${player.level}</p>
      <p><strong>Juggling Level:</strong> ${player.jugglingLevel}</p>
      <p><strong>Badge:</strong> ${player.badge}</p>
      <p><strong>Position:</strong> ${player.position}</p>
      <p><strong>Age Group:</strong> ${player.ageGroup}</p>
    `;

    container.appendChild(card);
  });
}
