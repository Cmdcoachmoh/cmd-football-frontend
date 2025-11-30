const roles = [
  { title: "Coach", description: "Planifiez, évaluez, inspirez", color: "bg-blue-100" },
  { title: "Joueur", description: "Progressez, recevez du feedback", color: "bg-green-100" },
  { title: "Parent", description: "Suivez, soutenez, célébrez", color: "bg-yellow-100" },
  { title: "Admin", description: "Gérez, analysez, développez", color: "bg-red-100" }
];

export default function RoleCards() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
      {roles.map((role) => (
        <div key={role.title} className={`p-4 rounded shadow ${role.color}`}>
          <h2 className="text-xl font-semibold">{role.title}</h2>
          <p>{role.description}</p>
        </div>
      ))}
    </section>
  );
}
