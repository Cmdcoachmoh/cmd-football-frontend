let allJuggling = [];

async function fetchJuggling() {
  try {
    const response = await fetch("/api/juggling", {
      headers: {
        Authorization: "Basic " + btoa("admin:adminpass")
      }
    });

    if (!response.ok) throw new Error("Failed to fetch juggling levels");

    allJuggling = await response.json();
    renderJuggling(allJuggling);
  } catch (err) {
    document.getElementById("jugglingList").innerText = "❌ Error loading juggling levels.";
    console.error("Juggling fetch failed:", err);
  }
}

function renderJuggling(jugglingList) {
  const container = document.getElementById("jugglingList");
  container.innerHTML = "";

  const categories = ["juggling", "fitness"];
  categories.forEach(cat => {
    const filtered = jugglingList.filter(j => j.category === cat);
    if (!filtered.length) return;

    const section = document.createElement("div");
    section.className = "juggling-category";
    section.innerHTML = `<h2>${cat.toUpperCase()} LIBRARY</h2><ul>`;

    filtered.forEach(j => {
      section.innerHTML += `
        <li class="juggling-card">
          <h3>Level ${j.level}: ${j.title} ${j.isTrackable ? "🏃‍♂️" : ""}</h3>
          <p>${j.description}</p>
          <button onclick="editJuggling('${j.title}')">✏️ Edit</button>
        </li>
      `;
    });

    section.innerHTML += "</ul>";
    container.appendChild(section);
  });
}

function applyJugglingFilter() {
  const level = parseInt(document.getElementById("levelFilter")?.value);
  const filtered = isNaN(level)
    ? allJuggling
    : allJuggling.filter(j => j.level >= level);
  renderJuggling(filtered);
}

function editJuggling(title) {
  alert(`Edit logic for "${title}" coming soon.`);
}

fetchJuggling();
