import React from "react";
import DrillCard from "./DrillCard";
import { DrillDefinition } from "../../constants/drill";

interface Props {
  drills: DrillDefinition[];
  onSelect?: (drill: DrillDefinition) => void;
}

export default function DrillList({ drills, onSelect }: Props) {
  if (drills.length === 0) {
    return <p>No drills match your filters.</p>;
  }

  return (
    <div className="drill-grid">
      {drills.map(d => (
        <DrillCard
          key={d.name}
          drill={d}
          onClick={() => onSelect?.(d)}
        />
      ))}
    </div>
  );
}
