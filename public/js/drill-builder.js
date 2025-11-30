document.getElementById("drillForm").addEventListener("submit", async e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const bonus = parseInt(document.getElementById("bonus").value);
  const malus = parseInt(document.getElementById("malus").value);
  const minLevel = parseInt(document.getElementById("minLevel").value);
  const status = document.getElementById("drillStatus");

  if (!name || !description || isNaN(bonus) || isNaN(malus) || isNaN(minLevel)) {
    status.innerText = "❌ Please fill out all fields correctly.";
    return;
  }

  const drill = { name, description, bonus, malus, minLevel };

  try {
    const response = await fetch("/api/drills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("admin:adminpass")
      },
      body: JSON.stringify(drill)
    });

    if (!response.ok) throw new Error("Drill creation failed");

    const msg = await response.text();
    status.innerText = `✅ ${msg}`;
    document.getElementById("drillForm").reset();
  } catch (err) {
    status.innerText = "❌ Error creating drill. Please try again.";
    console.error("Drill creation failed:", err);
  }
});
