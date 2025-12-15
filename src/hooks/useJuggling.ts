import { useMemo, useState } from "react";
import { JUGGLING_LEVELS } from "../constants/juggling";

export function useJuggling() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return JUGGLING_LEVELS.filter(level =>
      level.name.toLowerCase().includes(search.toLowerCase()) ||
      level.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return {
    levels: filtered,
    search,
    setSearch
  };
}
