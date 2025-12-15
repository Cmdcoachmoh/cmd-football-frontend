import { useMemo, useState } from "react";
import { DRILLS, DRILL_CATEGORIES, DRILL_DIFFICULTY } from "../constants/drill";

export function useDrills() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  // Extract all unique tags from drills
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    DRILLS.forEach(d => d.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  // Filtered drills
  const filtered = useMemo(() => {
    return DRILLS.filter(drill => {
      const matchesSearch =
        search.trim().length === 0 ||
        drill.name.toLowerCase().includes(search.toLowerCase()) ||
        drill.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = !category || drill.category === category;
      const matchesDifficulty = !difficulty || drill.difficulty === difficulty;
      const matchesTag = !tag || drill.tags.includes(tag);

      return matchesSearch && matchesCategory && matchesDifficulty && matchesTag;
    });
  }, [search, category, difficulty, tag]);

  return {
    drills: filtered,
    search,
    setSearch,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    tag,
    setTag,
    categories: DRILL_CATEGORIES,
    difficulties: DRILL_DIFFICULTY,
    tags: allTags
  };
}
