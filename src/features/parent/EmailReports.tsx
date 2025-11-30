export default function EmailReports() {
  const reports = [
    { id: 1, player: "Ali", status: "Sent" },
    { id: 2, player: "Sara", status: "Pending" }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold">Email Reports</h3>
      <ul>
        {reports.map(r => (
          <li key={r.id} className="border-b py-2">
            {r.player} — {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
