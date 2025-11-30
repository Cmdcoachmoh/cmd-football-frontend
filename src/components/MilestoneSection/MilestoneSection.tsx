const milestones = [
  { label: "Évaluations", value: 1200 },
  { label: "Joueurs actifs", value: 340 },
  { label: "Rapports générés", value: 870 },
  { label: "Communautés connectées", value: 15 }
];

export default function MilestoneSection() {
  return (
    <section className="bg-gray-50 py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Nos Réalisations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {milestones.map((m) => (
          <div key={m.label} className="text-lg">
            <span className="block text-3xl font-bold text-indigo-600">{m.value}</span>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
