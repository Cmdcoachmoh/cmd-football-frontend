import { useState } from "react";
import { toast } from "react-toastify";
import { JUGGLING_LEVELS } from "../constants/juggling";

export default function LogAttemptPage() {
  const [playerId, setPlayerId] = useState("");
  const [level, setLevel] = useState<number | "">("");
  const [score, setScore] = useState("");

  const baseUrl = import.meta.env.VITE_API_BASE;

  async function submitAttempt(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/api/juggling/log`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId,
          level,
          score: Number(score)
        })
      });

      if (!res.ok) throw new Error();

      toast.success("Attempt logged successfully");
      setScore("");
    } catch {
      toast.error("Failed to log attempt");
    }
  }

  return (
    <div className="page-container">
      <h1>Log Juggling Attempt</h1>

      <form onSubmit={submitAttempt}>
        <label>Player ID</label>
        <input
          value={playerId}
          onChange={e => setPlayerId(e.target.value)}
          required
        />

        <label>Level</label>
        <select
          value={level}
          onChange={e => setLevel(Number(e.target.value))}
          required
        >
          <option value="">Select Level</option>
          {JUGGLING_LEVELS.map(l => (
            <option key={l.level} value={l.level}>
              {l.name}
            </option>
          ))}
        </select>

        <label>Score</label>
        <input
          type="number"
          value={score}
          onChange={e => setScore(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
