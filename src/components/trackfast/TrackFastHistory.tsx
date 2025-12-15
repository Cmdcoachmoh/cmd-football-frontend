import React from "react";
import { TrackFastAttempt } from "@constants/trackfast";

interface Props {
  attempts: TrackFastAttempt[];
}

export default function TrackFastHistory({ attempts }: Props) {
  if (!attempts || attempts.length === 0) {
    return <p>No TrackFast attempts recorded yet.</p>;
  }

  return (
    <div className="trackfast-history">
      <h3>TrackFast History</h3>

      <ul>
        {attempts.map((a) => (
          <li key={a.id ?? `${a.playerId}-${a.createdAt ?? Math.random()}`}>
            <strong>{a.createdAt?.slice(0, 10) ?? "Session"}</strong> —{" "}
            {a.playerName} — VO₂: {a.vo2}
            {typeof a.coachScore === "number" && (
              <> — Coach Score: {a.coachScore.toFixed(1)}</>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
