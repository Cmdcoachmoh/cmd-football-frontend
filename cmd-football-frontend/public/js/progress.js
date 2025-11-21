function loadProgress() {
  const id = document.getElementById("playerId").value;
  const div = document.getElementById("progress");
  div.innerHTML = "Loading...";

  fetch(`/api/player/${id}`, {
    headers: {
      Authorization: "Basic " + btoa("admin:adminpass")
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Player not found");
      return res.json();
    })
    .then(p => {
      const milestone =
        p.currentJugglingLevel >= 85
          ? "🌟 Elite Performer"
          : p.currentJugglingLevel >= 70
          ? "🔥 Rising Star"
          : p.currentJugglingLevel >= 55
          ? "💪 Keep Pushing"
          : "🎯 Just Getting Started";

      const drillList = p.completedDrills?.length
        ? p.completedDrills.map(d => `<li>${d}</li>`).join("")
        : "<li>No drills completed yet.</li>";

      div.innerHTML = `
        <div class="progress-card">
          <h2>${p.fullName}</h2>
          <p><strong>Team:</strong> ${p.team}</p>
          <p><strong>Level:</strong> ${p.level}</p>
          <p><strong>Juggling Level:</strong> ${p.currentJugglingLevel} (${p.badge})</p>
          <p><strong>Last Juggle Count:</strong> ${p.lastJuggleCount}</p>
          <p><strong>Milestone:</strong> ${milestone}</p>
          <h3>✅ Completed Drills</h3>
          <ul>${drillList}</ul>
        </div>
      `;
    })
    .catch(err => {
      div.innerHTML = "❌ Player not found or error loading progress.";
      console.error("Progress load failed:", err);
    });
}
