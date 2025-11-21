async function fetchTeams() {
  const response = await fetch("/api/teams", {
    headers: {
      Authorization: "Basic " + btoa("admin:adminpass")
    }
  });
  return await response.json();
}

function countBadges(players) {
  const counts = { Gold: 0, Silver: 0, Bronze: 0, None: 0 };
  players.forEach(p => {
    const badge = p.badge || "None";
    counts[badge] = (counts[badge] || 0) + 1;
  });
  return counts;
}

function renderBadgeChart(teams) {
  const labels = teams.map(t => t.name);
  const gold = teams.map(t => countBadges(t.players).Gold);
  const silver = teams.map(t => countBadges(t.players).Silver);
  const bronze = teams.map(t => countBadges(t.players).Bronze);

  new Chart(document.getElementById("badgeChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "🥇 Gold", data: gold, backgroundColor: "#FFD700" },
        { label: "🥈 Silver", data: silver, backgroundColor: "#C0C0C0" },
        { label: "🥉 Bronze", data: bronze, backgroundColor: "#CD7F32" }
      ]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: "Badge Distribution by Team" } }
    }
  });
}

function renderGrowthChart(teams) {
  const labels = teams.map(t => t.name);
  const avgGrowth = teams.map(t => {
    const scores = t.players.map(p => p.jugglingLevel || 0);
    return scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : 0;
  });

  new Chart(document.getElementById("growthChart"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "📈 Avg Juggling Level",
          data: avgGrowth,
          borderColor: "#4CAF50",
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: "Average Growth by Team" } }
    }
  });
}

fetchTeams().then(teams => {
  renderBadgeChart(teams);
  renderGrowthChart(teams);
});
