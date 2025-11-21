async function loadTeamReport() {
  const container = document.getElementById("report");
  container.innerHTML = "Loading...";

  try {
    const response = await fetch("/api/teams", {
      headers: {
        Authorization: "Basic " + btoa("admin:adminpass")
      }
    });

    if (!response.ok) throw new Error("Failed to fetch team data");

    const teams = await response.json();
    container.innerHTML = "";

    teams.forEach(team => {
      const block = document.createElement("div");
      block.className = "team-report-block";
      block.innerHTML = `
        <h2>${team.name}</h2>
        <ul>
          ${team.players
            .map(p => {
              const drillCount = p.completedDrills?.length || 0;
              const drillEmoji = drillCount >= 5 ? "✅" : drillCount >= 1 ? "⚙️" : "❌";
              return `
                <li>
                  <strong>${p.fullName}</strong> — Level ${p.currentJugglingLevel} (${p.badge})<br>
                  Completed: ${drillCount} drills ${drillEmoji}
                </li>
              `;
            })
            .join("")}
        </ul>
      `;
      container.appendChild(block);
    });
  } catch (err) {
    container.innerHTML = "❌ Error loading team report.";
    console.error("Team report fetch failed:", err);
  }
}

loadTeamReport();
