// ------------------------------------------------------
// CMD FOOTBALL — JUGGLING LEVEL CONSTANTS
// ------------------------------------------------------

export interface JugglingLevel {
  level: number;
  name: string;
  description: string;
}

// ------------------------------------------------------
// MASTER JUGGLING LEVEL LIST
// ------------------------------------------------------

export const JUGGLING_LEVELS: JugglingLevel[] = [
  { level: 1, name: "Level 1", description: "Basic Level" },
  { level: 2, name: "Level 2", description: "Exterior/Interior" },
  { level: 3, name: "Level 3", description: "Sequence 2" },
  { level: 4, name: "Level 4", description: "Sequence 2 Combo" },
  { level: 5, name: "Level 5", description: "Sequence 3" },
  { level: 6, name: "Level 6", description: "Sequence 3 Combo" },
  { level: 7, name: "Level 7", description: "Sequence 4" },
  { level: 8, name: "Level 8", description: "Ladder" },
  { level: 9, name: "Level 9", description: "1st Degree" },
  { level: 10, name: "Level 10", description: "2nd Degree" },
  { level: 11, name: "Level 11", description: "3rd Degree" },
  { level: 12, name: "Level 12", description: "Free Style" }
];

// ------------------------------------------------------
// SIMPLE LIST FOR DROPDOWNS
// ------------------------------------------------------

export const JUGGLING_LEVEL_NAMES = JUGGLING_LEVELS.map(l => l.name);

// ------------------------------------------------------
// SIMPLE LIST FOR BACKEND SEEDING
// ------------------------------------------------------

export const JUGGLING_SEED_DATA = JUGGLING_LEVELS.map(l => ({
  level: l.level,
  description: l.description
}));
