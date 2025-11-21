async function loadTeams() {
  const container = document.getElementById("teams");
  container.innerHTML = "Loading...";

  try {
    const response = await fetch("/api/teams", {
      headers: {
        Authorization: "Basic " + btoa("admin:adminpass")
      }
    });

    if (!response.ok) throw new Error("Failed to fetch teams");

    const data = await response.json();
    container.innerHTML = "";

    data.forEach(team => {
      const block = document.createElement("div");
      block.className = "team-block";
      block.innerHTML = `<h2>${team.name} (${team.ageGroup})</h2><ul>`;

      team.players.forEach(p => {
        block.innerHTML += `
          <li>
            <strong>${p.fullName}</strong> — ${p.position}, Level ${p.level}
          </li>
        `;
      });

      block.innerHTML += "</ul>";
      container.appendChild(block);
    });
  } catch (err) {
    container.innerHTML = "❌ Error loading team data.";
    console.error("Team fetch failed:", err);
  }
}

loadTeams();
