import React from "react";
import { TrackFastAttempt } from "@constants/trackfast";

interface Props {
  attempt: TrackFastAttempt;
}

export default function TrackFastCard({ attempt }: Props) {
  return (
    <div className="trackfast-card">
      <h2>TrackFast Summary</h2>

      <p><strong>Player:</strong> {attempt.playerName}</p>
      <p><strong>Distance:</strong> {attempt.distance} m</p>
      <p><strong>Sprint Time:</strong> {attempt.sprintTime}s</p>
      <p><strong>VO₂ Score:</strong> {attempt.vo2} ml/kg/min</p>

      {typeof attempt.coachScore === "number" && (
        <p><strong>Coach Score:</strong> {attempt.coachScore.toFixed(1)}</p>
      )}

      {attempt.traits && (
        <div className="traits">
          <h3>Coach Evaluation Traits</h3>
          <ul>
            <li><strong>Speed:</strong> {attempt.traits.speed}</li>
            <li><strong>Consistency:</strong> {attempt.traits.consistency}</li>
            <li><strong>Race awareness:</strong> {attempt.traits.raceAwareness}</li>
            <li><strong>Tactical intelligence:</strong> {attempt.traits.tacticalIntelligence}</li>
            <li><strong>Courage:</strong> {attempt.traits.courage}</li>
            <li><strong>Endurance:</strong> {attempt.traits.endurance}</li>
            <li><strong>Resilience:</strong> {attempt.traits.resilience}</li>
            <li><strong>Inconsistency:</strong> {attempt.traits.inconsistency}</li>
            <li><strong>Weakness:</strong> {attempt.traits.weakness}</li>
            <li><strong>Bravery:</strong> {attempt.traits.bravery}</li>
          </ul>
        </div>
      )}

      {attempt.coachNotes && (
        <p><strong>Coach Notes:</strong> {attempt.coachNotes}</p>
      )}
    </div>
  );
}
