import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PlayerSelector from "../components/PlayerSelector";
import ProgressChart from "../components/ProgressChart";
import WeeklyGrowthChart from "../components/WeeklyGrowthChart";
import BadgeLegend from "../components/BadgeLegend";
import { BackendGate } from "../components/BackendGate";

const Dashboard = () => {
  const [players, setPlayers] = useState<{ id: number; name: string; badgeTier?: string }[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    async function loadPlayers() {
      try {
        const res = await fetch(`${baseUrl}/api/players`, { method: "GET" });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        setPlayers(data);
      } catch (error) {
        toast.error("Failed to load players");
      } finally {
        setLoading(false);
      }
    }
    loadPlayers();
  }, [baseUrl]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("You’ve been logged out");
    navigate("/");
  };

  return (
    <BackendGate>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Dashboard</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>

        {loading ? (
          <p>Loading players...</p>
        ) : (
          <>
            <PlayerSelector players={players} onSelect={setSelectedId} />
            {selectedId && (
              <>
                <ProgressChart playerId={selectedId} />
                <WeeklyGrowthChart playerId={selectedId} />
                <BadgeLegend />
              </>
            )}
          </>
        )}
      </div>
    </BackendGate>
  );
};

export default Dashboard;
