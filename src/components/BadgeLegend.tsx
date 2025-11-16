const badgeLegend = [
  { tier: "Elite", icon: "🏅", color: "green", description: "Top 5% performers" },
  { tier: "Advanced", icon: "🎖️", color: "blue", description: "Consistent growth" },
  { tier: "Starter", icon: "🔰", color: "gray", description: "New or developing players" },
];

export default function BadgeLegend() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>🏅 Badge Legend</h4>
      <ul>
        {badgeLegend.map(({ tier, icon, color, description }) => (
          <li key={tier} style={{ color }}>
            {icon} <strong>{tier}</strong>: {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
