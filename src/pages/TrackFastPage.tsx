import { useState } from "react";
import { useTrackFast } from "@hooks/useTrackFast";
import { TrackFastTraits, TRACKFAST_DISTANCE_DEFAULT } from "@constants/trackfast";
import TrackFastCard from "@components/trackfast/TrackFastCard";
import TrackFastHistory from "@components/trackfast/TrackFastHistory";

export default function TrackFastPage() {
  const [playerName, setPlayerName] = useState("");
  const [sprintTime, setSprintTime] = useState("");
  const [distance, setDistance] = useState(String(TRACKFAST_DISTANCE_DEFAULT));
  const [coachNotes, setCoachNotes] = useState("");
  const [traits, setTraits] = useState<TrackFastTraits>({
    speed: 0,
    consistency: 0,
    raceAwareness: 0,
    tacticalIntelligence: 0,
    courage: 0,
    endurance: 0,
    resilience: 0,
    inconsistency: 0,
    weakness: 0,
    bravery: 0
  });

  const [lastAttempt, setLastAttempt] = useState<any | null>(null);
  const { attempts, logAttempt } = useTrackFast();

  async function handleSubmit() {
    const time = parseFloat(sprintTime);
    const dist = parseFloat(distance);

    if (!playerName || isNaN(time) || isNaN(dist) || time <= 0 || dist <= 0) {
      return;
    }

    const speed = dist / time;
    const vo2 = parseFloat((speed * 3.5).toFixed(2));

    const saved = await logAttempt({
      playerId: playerName.toLowerCase().replace(/\s+/g, "-"),
      playerName,
      distance: dist,
      sprintTime: time,
      vo2,
      coachNotes,
      traits
    });

    setLastAttempt(saved);
  }

  function updateTrait(key: keyof TrackFastTraits, value: string) {
    setTraits(prev => ({
      ...prev,
      [key]: Number(value)
    }));
  }

  return (
    <div className="trackfast-container">
      <h1>TrackFast Sprint Endurance Test</h1>

      <label>Player Name</label>
      <input
        value={playerName}
        onChange={e => setPlayerName(e.target.value)}
        placeholder="Enter player name"
      />

      <label>Sprint Time (seconds)</label>
      <input
        type="number"
        value={sprintTime}
        onChange={e => setSprintTime(e.target.value)}
        placeholder="e.g. 25.4"
      />

      <label>Distance (meters)</label>
      <input
        type="number"
        value={distance}
        onChange={e => setDistance(e.target.value)}
        placeholder="e.g. 100"
      />

      <h2>Coach Evaluation (Traits)</h2>

      <div className="traits-grid">
        <label>
          Speed
          <input
            type="number"
            min={0}
            max={5}
            value={traits.speed}
            onChange={e => updateTrait("speed", e.target.value)}
          />
        </label>

        <label>
          Consistency
          <input
            type="number"
            min={0}
            max={5}
            value={traits.consistency}
            onChange={e => updateTrait("consistency", e.target.value)}
          />
        </label>

        <label>
          Race awareness
          <input
            type="number"
            min={0}
            max={5}
            value={traits.raceAwareness}
            onChange={e => updateTrait("raceAwareness", e.target.value)}
          />
        </label>

        <label>
          Tactical intelligence
          <input
            type="number"
            min={0}
            max={5}
            value={traits.tacticalIntelligence}
            onChange={e => updateTrait("tacticalIntelligence", e.target.value)}
          />
        </label>

        <label>
          Courage
          <input
            type="number"
            min={0}
            max={3}
            value={traits.courage}
            onChange={e => updateTrait("courage", e.target.value)}
          />
        </label>

        <label>
          Endurance
          <input
            type="number"
            min={0}
            max={3}
            value={traits.endurance}
            onChange={e => updateTrait("endurance", e.target.value)}
          />
        </label>

        <label>
          Resilience
          <input
            type="number"
            min={0}
            max={3}
            value={traits.resilience}
            onChange={e => updateTrait("resilience", e.target.value)}
          />
        </label>

        <label>
          Inconsistency
          <input
            type="number"
            min={0}
            max={1}
            value={traits.inconsistency}
            onChange={e => updateTrait("inconsistency", e.target.value)}
          />
        </label>

        <label>
          Weakness
          <input
            type="number"
            min={0}
            max={1}
            value={traits.weakness}
            onChange={e => updateTrait("weakness", e.target.value)}
          />
        </label>

        <label>
          Bravery
          <input
            type="number"
            min={0}
            max={6}
            value={traits.bravery}
            onChange={e => updateTrait("bravery", e.target.value)}
          />
        </label>
      </div>

      <label>Coach Notes</label>
      <textarea
        value={coachNotes}
        onChange={e => setCoachNotes(e.target.value)}
        placeholder="Observations about pacing, courage, intelligence..."
      />

      <button onClick={handleSubmit}>Save TrackFast Attempt</button>

      {lastAttempt && <TrackFastCard attempt={lastAttempt} />}

      <TrackFastHistory attempts={attempts} />
    </div>
  );
}
