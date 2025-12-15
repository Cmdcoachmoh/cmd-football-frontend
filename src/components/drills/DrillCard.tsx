import React from "react";
import { DrillDefinition } from "../../constants/drill";

interface Props {
  drill: DrillDefinition;
  onClick?: () => void;
}

export default function DrillCard({ drill, onClick }: Props) {
  return (
    <div className="drill-card" onClick={onClick}>
      <h3>{drill.name}</h3>
      <span className="badge">{drill.category}</span>

      <div className="tags">
        {drill.tags.map(t => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <p className="difficulty">{drill.difficulty}</p>
    </div>
  );
}
