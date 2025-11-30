function loadCertificate() {
  const id = document.getElementById("playerId").value;
  const certDiv = document.getElementById("certificate");
  certDiv.innerHTML = "Loading...";

  Promise.all([
    fetch(`/api/certificate/${id}`).then(res => res.json()),
    fetch(`/api/player/${id}`).then(res => res.json()),
    fetch("/api/drills").then(res => res.json())
  ])
    .then(([cert, player, drills]) => {
      const unlockedDrills = drills.filter(d => player.currentJugglingLevel >= d.minLevel);
      const completedDrills = unlockedDrills.filter(d => player.completedDrills?.includes(d.name));

      const completedList = completedDrills.length
        ? completedDrills.map(d => `<li>${d.name} ✅</li>`).join("")
        : "<li>No drills completed yet.</li>";

      const unlockedList = unlockedDrills.map(d => `
        <li>
          <strong>${d.name}</strong>: ${d.description}<br>
          Bonus: ${d.bonus}, Malus: ${d.malus}
        </li>
      `).join("");

      certDiv.innerHTML = `
        <div class="certificate-card">
          <h2>${cert.badge} Certificate of Achievement</h2>
          <p>This certifies that <strong>${cert.name}</strong></p>
          <p>has successfully reached <strong>Level ${cert.level}</strong></p>
          <p>Badge: <strong>${cert.badge}</strong></p>
          <p>${cert.message}</p>

          <h3>✅ Completed Drills</h3>
          <ul>${completedList}</ul>

          <h3>🛠️ Unlocked Drills</h3>
          <ul>${unlockedList}</ul>
        </div>
      `;
    })
    .catch(err => {
      certDiv.innerHTML = "❌ Error loading certificate or player data.";
      console.error("Certificate load failed:", err);
    });
}
