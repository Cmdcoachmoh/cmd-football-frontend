import React from "react";
import { TrackFastAttempt } from "@constants/trackfast";

interface Props {
  attempts: TrackFastAttempt[];
}

export default function TrackFastAdminTable({ attempts }: Props) {
  if (!attempts || attempts.length === 0) {
    return <p>No TrackFast attempts available.</p>;
  }

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Player</th>
          <th>VO₂</th>
          <th>Coach Score</th>
          <th>Speed</th>
          <th>Consistency</th>
          <th>Awareness</th>
          <th>Intelligence</th>
        </tr>
      </thead>

      <tbody>
        {attempts.map((a) => (
          <tr key={a.id ?? `${a.playerId}-${a.createdAt ?? Math.random()}`}>
            <td>{a.createdAt?.slice(0, 10) ?? ""}</td>
            <td>{a.playerName}</td>
            <td>{a.vo2}</td>

            <td>
              {typeof a.coachScore === "number"
                ? a.coachScore.toFixed(1)
                : "-"}
            </td>

            <td>{a.traits?.speed ?? "-"}</td>
            <td>{a.traits?.consistency ?? "-"}</td>
            <td>{a.traits?.raceAwareness ?? "-"}</td>
            <td>{a.traits?.tacticalIntelligence ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
