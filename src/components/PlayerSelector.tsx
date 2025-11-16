import React from "react";

type Player = {
  id: number;
  name: string;
  badgeTier?: string;
};

type Props = {
  players: Player[];
  onSelect: (id: number) => void;
};

const badgeIcons: Record<string, string> = {
  Elite: "🏅",
  Advanced: "🎖️",
  Starter: "🔰",
};

const badgeColors: Record<string, string> = {
  Elite: "green",
  Advanced: "blue",
  Starter: "gray",
};

const PlayerSelector = ({ players, onSelect }: Props) => {
  return (
    <select
      onChange={(e) => onSelect(Number(e.target.value))}
      style={{ padding: "8px", fontSize: "16px" }}
    >
      <option value="">Select Player</option>
      {players.map((p) => {
        const icon = badgeIcons[p.badgeTier || ""] || "";
        const color = badgeColors[p.badgeTier || ""] || "black";

        return (
          <option key={p.id} value={p.id} style={{ color }}>
            {icon} {p.name} {p.badgeTier ? `(${p.badgeTier})` : ""}
          </option>
        );
      })}
    </select>
  );
};

export default PlayerSelector;
