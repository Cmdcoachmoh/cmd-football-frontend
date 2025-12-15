import { useJuggling } from "@/hooks/useJuggling";
import JugglingFilters from "../components/juggling/JugglingFilters";
import JugglingList from "../components/juggling/JugglingList";

export default function JugglingLibraryPage() {
  const { levels, search, setSearch } = useJuggling();

  return (
    <div className="page-container">
      <h1>Juggling Levels</h1>

      <JugglingFilters search={search} setSearch={setSearch} />

      <JugglingList levels={levels} />
    </div>
  );
}
