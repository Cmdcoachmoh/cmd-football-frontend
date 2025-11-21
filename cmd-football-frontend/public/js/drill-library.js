let allDrills = [];

async function fetchDrills() {
  try {
    const response = await fetch("/api/drills", {
      headers: {
        Authorization: "Basic " + btoa("admin:adminpass")
      }
    });

    if (!response.ok) throw new Error("Failed to fetch drills");

    allDrills = await response.json();
    renderDrills(allDrills);
  } catch (err) {
    document.getElementById("drillList").innerText = "❌ Error loading drills.";
    console.error("Drill fetch failed:", err);
  }
}

function renderDrills(drills) {
  const container = document.getElementById("drillList");
  container.innerHTML = "";

  const categories = ["juggling", "drill", "fitness"];
  categories.forEach(cat => {
    const filtered = drills.filter(d => d.category === cat);
    if (!filtered.length) return;

    const section = document.createElement("div");
    section.className = "drill-category";
    section.innerHTML = `<h2>${cat.toUpperCase()} LIBRARY</h2><ul>`;

    filtered.forEach(d => {
      section.innerHTML += `
        <li class="drill-card">
          <h3>${d.name} ${d.isTrackable ? "🏃‍♂️" : ""}</h3>
          <p>${d.description}</p>
          <p><strong>Bonus:</strong> ${d.bonus} | <strong>Malus:</strong> ${d.malus}</p>
          <p><strong>Min Level:</strong> ${d.minLevel}</p>
          <button onclick="editDrill('${d.name}')">✏️ Edit</button>
        </li>
      `;
    });

    section.innerHTML += "</ul>";
    container.appendChild(section);
  });
}

function applyDrillFilter() {
  const level = parseInt(document.getElementById("levelFilter")?.value);
  const filtered = isNaN(level)
    ? allDrills
    : allDrills.filter(d => d.minLevel >= level);
  renderDrills(filtered);
}

function editDrill(name) {
  alert(`Edit logic for "${name}" coming soon.`);
}

fetchDrills();
