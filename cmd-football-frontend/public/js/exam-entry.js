document.getElementById("examForm").addEventListener("submit", async e => {
  e.preventDefault();

  const id = document.getElementById("playerId").value.trim();
  const juggles = parseInt(document.getElementById("juggles").value);
  const bonus = parseInt(document.getElementById("bonus").value);
  const malus = parseInt(document.getElementById("malus").value);
  const resultDiv = document.getElementById("examResult");

  if (!id || isNaN(juggles)) {
    resultDiv.innerText = "❌ Please enter a valid Player ID and Juggle Count.";
    return;
  }

  const payload = { id, juggles, bonus, malus };

  try {
    const response = await fetch("/api/submitExam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("admin:adminpass")
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Submission failed");

    const result = await response.json();
    resultDiv.innerText = `✅ ${result.message}`;
  } catch (err) {
    resultDiv.innerText = "❌ Error submitting exam. Please try again.";
    console.error("Exam submission failed:", err);
  }
});
