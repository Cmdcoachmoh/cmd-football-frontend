import { useState } from "react";
import "./PlayerEvaluation.css";

const players = ["Amine", "Fatou", "Lucas", "Sophie", "Youssef"];

const actions = [
  { label: "Successful pass under pressure", type: "bonus", points: 4 },
  { label: "Lost ball without pressure", type: "malus", points: -2 },
  { label: "Quick defensive recovery", type: "bonus", points: 3 },
  { label: "Unnecessary foul", type: "malus", points: -3 },
  { label: "Positive leadership", type: "bonus", points: 3 }
];

export default function PlayerEvaluation() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [score, setScore] = useState(0);

  const handleClick = (points: number) => {
    if (!selectedPlayer) {
      alert("Please select a player first.");
      return;
    }
    setScore((prev) => prev + points);
  };

  const handleSave = async () => {
    if (!selectedPlayer) {
      alert("Please select a player before saving.");
      return;
    }

    const payload = {
      player: selectedPlayer,
      score,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch("/api/evaluation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Evaluation saved successfully!");
        setScore(0);
        setSelectedPlayer("");
      } else {
        alert("Failed to save evaluation.");
      }
    } catch (error) {
      console.error("Error saving evaluation:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="evaluation-container">
      <h2>Bonus-Malus Evaluation</h2>

      <label htmlFor="player-select">Select a player:</label>
      <select
        id="player-select"
        value={selectedPlayer}
        onChange={(e) => {
          setSelectedPlayer(e.target.value);
          setScore(0);
        }}
      >
        <option value="">-- Choose a player --</option>
        {players.map((player) => (
          <option key={player} value={player}>
            {player}
          </option>
        ))}
      </select>

      {selectedPlayer && (
        <>
          <p>
            <strong>{selectedPlayer}</strong>'s current score: <strong>{score}</strong>
          </p>

          {actions.map((action, index) => (
            <button
              key={index}
              className={`btn ${action.type}`}
              onClick={() => handleClick(action.points)}
            >
              {action.label} ({action.points > 0 ? "+" : ""}
              {action.points})
            </button>
          ))}

          <button className="btn save" onClick={handleSave}>
            Save Evaluation
          </button>
        </>
      )}
    </div>
  );
}
