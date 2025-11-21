export function getBadgeEmoji(level) {
  if (level >= 85) return "🥇";
  if (level >= 70) return "🥈";
  if (level >= 55) return "🥉";
  return "🎯";
}

export function getBadgeLabel(level) {
  if (level >= 85) return "Gold";
  if (level >= 70) return "Silver";
  if (level >= 55) return "Bronze";
  return "No Badge";
}
