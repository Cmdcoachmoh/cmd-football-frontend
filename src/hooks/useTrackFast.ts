import { useState } from "react";
import {
  TrackFastAttempt,
  TrackFastTraits,
  computeCoachScore
} from "@constants/trackfast";

export function useTrackFast() {
  const [attempts, setAttempts] = useState<TrackFastAttempt[]>([]);
  const baseUrl = import.meta.env.VITE_API_BASE;

  async function logAttempt(
    attempt: Omit<TrackFastAttempt, "id" | "createdAt" | "coachScore"> & {
      traits?: TrackFastTraits;
    }
  ) {
    const coachScore = attempt.traits
      ? computeCoachScore(attempt.traits)
      : undefined;

    const payload: TrackFastAttempt = {
      ...attempt,
      coachScore
    };

    const res = await fetch(`${baseUrl}/api/trackfast/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Failed to log attempt");

    const saved: TrackFastAttempt = await res.json();
    setAttempts(prev => [...prev, saved]);
    return saved;
  }

  return { attempts, logAttempt };
}

