import React, { useEffect, useState } from "react";
import { fetchPlayers, Player } from "../../api/playersApi";

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (err) {
        setError("Unable to load players");
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  if (loading) return <p>Loading players...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Players</h1>
      <p>All registered players from CMD Football Backend.</p>

      <ul style={{ marginTop: "1rem" }}>
        {players.map((player) => (
          <li key={player.id} style={{ marginBottom: "0.5rem" }}>
            <strong>{player.name}</strong> — {player.position} ({player.team})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;



