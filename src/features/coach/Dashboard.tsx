import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PlayerSelector from "../../components/PlayerSelector";
import ProgressChart from "../../components/ProgressChart";
import WeeklyGrowthChart from "../../components/WeeklyGrowthChart";
import BadgeLegend from "../../components/BadgeLegend";
import { BackendGate } from "../../components/BackendGate";
import "./Dashboard.css";
import TrackFastHistory from "@components/trackfast/TrackFastHistory";
<TrackFastHistory attempts={player.trackfastAttempts} />

const Dashboard = () => {
  const [players, setPlayers] = useState<{ id: number; name: string; badgeTier?: string }[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [effortScore, setEffortScore] = useState("Loading...");
  const [growthList, setGrowthList] = useState([]);
  const [badgeFilter, setBadgeFilter] = useState("");
  const [lastModified, setLastModified] = useState("");
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const modified = new Date(document.lastModified);
    setLastModified(modified.toLocaleString());

    async function loadPlayers() {
      try {
        const res = await fetch(`${baseUrl}/api/players`);
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        setPlayers(data);
      } catch {
        toast.error("Failed to load players");
      } finally {
        setLoading(false);
      }
    }

    async function loadCoachMetrics() {
      try {
        const res = await fetch(`${baseUrl}/api/dashboard/metrics`, {
          headers: {
            Authorization: "Basic " + btoa("admin:adminpass")
          }
        });
        const data = await res.json();
        setEffortScore(data.effortScore);
        setGrowthList(data.growth);
      } catch {
        setEffortScore("Error loading data");
      }
    }

    loadPlayers();
    loadCoachMetrics();
  }, [baseUrl]);

  const filteredGrowth = badgeFilter
    ? growthList.filter((p: any) => p.badge === badgeFilter)
    : growthList;

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("You’ve been logged out");
    navigate("/");
  };

  return (
    <BackendGate>
      <div className="dashboard-container">
        <header className="cmd-header">
          <img src="/assets/cmd-logo.png" alt="CMD Football Logo" className="cmd-logo" />
        </header>

        <main>
          <div className="dashboard-header">
            <h1>📊 CMD Coach Dashboard</h1>
            <button onClick={() => window.print()}>🖨️ Print</button>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <section>
            <h2>Effort Score</h2>
            <div>{effortScore}</div>

            <h2>Player Growth</h2>
            <select value={badgeFilter} onChange={e => setBadgeFilter(e.target.value)}>
              <option value="">All Badges</option>
              <option value="Gold">🥇 Gold</option>
              <option value="Silver">🥈 Silver</option>
              <option value="Bronze">🥉 Bronze</option>
            </select>

            <ul>
              {filteredGrowth.map((player: any, i: number) => (
                <li key={i}>
                  {player.name}: {player.score}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Player Analytics</h2>
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
          </section>
        </main>

        <footer className="footer">
          <p>&copy; 2025 CMD Football. Built for coaches, powered by effort.</p>
          <p>Last updated: {lastModified}</p>
        </footer>
      </div>
    </BackendGate>
  );
};

export default Dashboard;
