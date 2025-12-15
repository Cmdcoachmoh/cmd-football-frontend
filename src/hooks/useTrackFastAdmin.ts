import { useEffect, useState } from "react";
import { TrackFastAttempt } from "@constants/trackfast";

interface TrackFastAdminFilters {
  playerName: string;
  minVo2: string;
  maxVo2: string;
  minCoachScore: string;
  maxCoachScore: string;
}

export function useTrackFastAdmin() {
  const [attempts, setAttempts] = useState<TrackFastAttempt[]>([]);
  const [filters, setFilters] = useState<TrackFastAdminFilters>({
    playerName: "",
    minVo2: "",
    maxVo2: "",
    minCoachScore: "",
    maxCoachScore: ""
  });

  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    async function load() {
      const res = await fetch(`${baseUrl}/api/trackfast/all`);
      const data: TrackFastAttempt[] = await res.json();

      let filtered = [...data];

      if (filters.playerName) {
        filtered = filtered.filter(a =>
          a.playerName.toLowerCase().includes(filters.playerName.toLowerCase())
        );
      }

      if (filters.minVo2) {
        filtered = filtered.filter(a => a.vo2 >= Number(filters.minVo2));
      }

      if (filters.maxVo2) {
        filtered = filtered.filter(a => a.vo2 <= Number(filters.maxVo2));
      }

      if (filters.minCoachScore) {
        filtered = filtered.filter(
          a =>
            (a.coachScore ?? 0) >= Number(filters.minCoachScore)
        );
      }

      if (filters.maxCoachScore) {
        filtered = filtered.filter(
          a =>
            (a.coachScore ?? 0) <= Number(filters.maxCoachScore)
        );
      }

      setAttempts(filtered);
    }

    load();
  }, [filters, baseUrl]);

  return { attempts, filters, setFilters };
}
