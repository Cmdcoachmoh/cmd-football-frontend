export interface TrackFastTraits {
  speed: number;
  consistency: number;
  raceAwareness: number;
  tacticalIntelligence: number;
  courage: number;
  endurance: number;
  resilience: number;
  inconsistency: number;
  weakness: number;
  bravery: number;
}

export interface TrackFastAttempt {
  id?: string;
  playerId: string;
  playerName: string;
  distance: number;
  sprintTime: number;
  vo2: number;
  createdAt?: string;

  coachNotes?: string;
  coachScore?: number;
  traits?: TrackFastTraits;
}

export const TRACKFAST_DISTANCE_DEFAULT = 100; // meters (full track perimeter)

export function computeCoachScore(traits: TrackFastTraits): number {
  // Weighted sum based on your grid
  return (
    traits.speed * 5 +
    traits.consistency * 5 +
    traits.raceAwareness * 5 +
    traits.tacticalIntelligence * 5 +
    traits.courage * 3 +
    traits.endurance * 3 +
    traits.resilience * 3 +
    traits.inconsistency * 1 +
    traits.weakness * 1 +
    traits.bravery * 5.5
  );
}

