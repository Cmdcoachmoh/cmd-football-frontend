// ------------------------------------------------------
// CMD FOOTBALL — DRILL CONSTANTS
// ------------------------------------------------------

export interface DrillDefinition {
  name: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
}

// ------------------------------------------------------
// MASTER DRILL LIST
// ------------------------------------------------------

export const DRILLS: DrillDefinition[] = [
  {
    name: "2V1UpDown",
    category: "Transition",
    difficulty: "Intermediate",
    tags: ["2v1", "transition", "speed", "decision"]
  },
  {
    name: "2V2TwoNet",
    category: "Finishing",
    difficulty: "Intermediate",
    tags: ["2v2", "finishing", "shooting", "pressure"]
  },
  {
    name: "3v2Fixing",
    category: "Attacking",
    difficulty: "Advanced",
    tags: ["3v2", "fixing defender", "overload", "passing"]
  },
  {
    name: "3v2BackPass",
    category: "Build-Up",
    difficulty: "Intermediate",
    tags: ["3v2", "back pass", "support", "movement"]
  },
  {
    name: "Musketeer1",
    category: "Passing",
    difficulty: "Beginner",
    tags: ["passing", "movement", "triangle"]
  },
  {
    name: "Musketeer2",
    category: "Passing",
    difficulty: "Intermediate",
    tags: ["passing", "support", "timing"]
  },
  {
    name: "TrackFast",
    category: "Speed",
    difficulty: "Advanced",
    tags: ["speed", "agility", "reaction"]
  },
  {
    name: "4V4TwoNet",
    category: "Small-Sided",
    difficulty: "Intermediate",
    tags: ["4v4", "two nets", "decision making"]
  },
  {
    name: "3v2BackPass2",
    category: "Build-Up",
    difficulty: "Advanced",
    tags: ["3v2", "support", "timing", "passing"]
  },
  {
    name: "4V4Possession",
    category: "Possession",
    difficulty: "Intermediate",
    tags: ["4v4", "possession", "rondo", "support"]
  },
  {
    name: "4V4BonusMalus",
    category: "Game IQ",
    difficulty: "Advanced",
    tags: ["4v4", "bonus", "malus", "decision"]
  },
  {
    name: "5V5TwoJokers",
    category: "Possession",
    difficulty: "Intermediate",
    tags: ["5v5", "jokers", "possession", "support"]
  },
  {
    name: "6V4HitOnGoal",
    category: "Finishing",
    difficulty: "Advanced",
    tags: ["6v4", "finishing", "overload"]
  },
  {
    name: "6V6CloseNet",
    category: "Small-Sided",
    difficulty: "Intermediate",
    tags: ["6v6", "close net", "pressure"]
  },
  {
    name: "8V8Transmission",
    category: "Build-Up",
    difficulty: "Advanced",
    tags: ["8v8", "transmission", "switch play"]
  },
  {
    name: "7V7Zona",
    category: "Tactical",
    difficulty: "Advanced",
    tags: ["7v7", "zonal", "shape", "tactics"]
  },
  {
    name: "8V8BreakCone",
    category: "Transition",
    difficulty: "Intermediate",
    tags: ["8v8", "break line", "speed"]
  },
  {
    name: "9v9HowToPlay",
    category: "Tactical",
    difficulty: "Advanced",
    tags: ["9v9", "structure", "team shape"]
  },
  {
    name: "6V6Ronda",
    category: "Possession",
    difficulty: "Intermediate",
    tags: ["6v6", "rondo", "possession", "support"]
  }
];

// ------------------------------------------------------
// SIMPLE LIST OF DRILL NAMES (for dropdowns)
// ------------------------------------------------------

export const DRILL_NAMES = DRILLS.map(d => d.name);

// ------------------------------------------------------
// CATEGORY LIST
// ------------------------------------------------------

export const DRILL_CATEGORIES = [
  "Transition",
  "Finishing",
  "Attacking",
  "Build-Up",
  "Passing",
  "Speed",
  "Small-Sided",
  "Possession",
  "Game IQ",
  "Tactical"
];

// ------------------------------------------------------
// DIFFICULTY LEVELS
// ------------------------------------------------------

export const DRILL_DIFFICULTY = ["Beginner", "Intermediate", "Advanced"] as const;
