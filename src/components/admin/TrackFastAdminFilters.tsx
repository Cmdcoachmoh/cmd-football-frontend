import React from "react";

interface Filters {
  playerName: string;
  minVo2: string;
  maxVo2: string;
  minCoachScore: string;
  maxCoachScore: string;
}

interface Props {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export default function TrackFastAdminFilters({ filters, setFilters }: Props) {
  return (
    <div className="filters">
      <input
        placeholder="Player name"
        value={filters.playerName}
        onChange={(e) =>
          setFilters({ ...filters, playerName: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Min VO₂"
        value={filters.minVo2}
        onChange={(e) =>
          setFilters({ ...filters, minVo2: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max VO₂"
        value={filters.maxVo2}
        onChange={(e) =>
          setFilters({ ...filters, maxVo2: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Min coach score"
        value={filters.minCoachScore}
        onChange={(e) =>
          setFilters({ ...filters, minCoachScore: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max coach score"
        value={filters.maxCoachScore}
        onChange={(e) =>
          setFilters({ ...filters, maxCoachScore: e.target.value })
        }
      />
    </div>
  );
}
