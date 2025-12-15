export function getTrackFastBadge(vo2: number) {
  if (vo2 >= 60) return "Elite Sprinter";
  if (vo2 >= 50) return "Advanced Speed";
  if (vo2 >= 40) return "Developing Athlete";
  return "Beginner Speed";
}
