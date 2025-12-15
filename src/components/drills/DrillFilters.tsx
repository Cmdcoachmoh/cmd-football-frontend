import React from "react";
import { DRILL_CATEGORIES, DRILL_DIFFICULTY } from "../../constants/drill";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string | null;
  setCategory: (v: string | null) => void;
  difficulty: string | null;
  setDifficulty: (v: string | null) => void;
  tags: string[];
  tag: string | null;
  setTag: (v: string | null) => void;
}

export default function DrillFilters({
  search,
  setSearch,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  tags,
  tag,
  setTag
}: Props) {
  return (
    <div className="drill-filters">
      {/* Search */}
      <input
        type="text"
        placeholder="Search drills..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="drill-search"
      />

      {/* Category */}
      <select
        value={category || ""}
        onChange={e => setCategory(e.target.value || null)}
      >
        <option value="">All Categories</option>
        {DRILL_CATEGORIES.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Difficulty */}
      <select
        value={difficulty || ""}
        onChange={e => setDifficulty(e.target.value || null)}
      >
        <option value="">All Levels</option>
        {DRILL_DIFFICULTY.map(d => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      {/* Tags */}
      <select
        value={tag || ""}
        onChange={e => setTag(e.target.value || null)}
      >
        <option value="">All Tags</option>
        {tags.map(t => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
