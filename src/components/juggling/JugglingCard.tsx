import { JugglingLevel } from "../../constants/juggling";

interface Props {
  level: JugglingLevel;
  onClick?: () => void;
}

export default function JugglingCard({ level, onClick }: Props) {
  return (
    <div className="juggling-card" onClick={onClick}>
      <h3>{level.name}</h3>
      <p>{level.description}</p>
    </div>
  );
}
