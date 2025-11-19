import { SetStateAction, useEffect, useState } from "react";
import { Player, fetchPlayers } from "@/features/players/api";

export default function PlayersList() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlayers()
      .then(setPlayers)
      .catch((err: { message: SetStateAction<string | null> }) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading players...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {players.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.position} - Effort ({p.effortScore})
          </li>
        ))}
      </ul>
    </div>
  );
}
