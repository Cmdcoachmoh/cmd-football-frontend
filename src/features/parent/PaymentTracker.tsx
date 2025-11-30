export default function PaymentTracker() {
  const payments = [
    { id: 1, player: "Ali", status: "Paid", amount: "$100" },
    { id: 2, player: "Sara", status: "Pending", amount: "$100" }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Payments</h3>
      <ul>
        {payments.map(p => (
          <li key={p.id} className="border-b py-2">
            {p.player} — {p.amount} — {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
