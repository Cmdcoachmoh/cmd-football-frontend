import { JugglingLevel } from "../../constants/juggling";
import JugglingCard from "./JugglingCard";

interface Props {
  levels: JugglingLevel[];
  onSelect?: (level: JugglingLevel) => void;
}

export default function JugglingList({ levels, onSelect }: Props) {
  if (levels.length === 0) {
    return <p>No levels found.</p>;
  }

  return (
    <div className="juggling-grid">
      {levels.map(l => (
        <JugglingCard
          key={l.level}
          level={l}
          onClick={() => onSelect?.(l)}
        />
      ))}
    </div>
  );
}
