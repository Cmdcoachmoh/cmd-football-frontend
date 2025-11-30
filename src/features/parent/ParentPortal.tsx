import PaymentTracker from "./PaymentTracker";
import EmailReports from "./EmailReports";

export default function ParentPortal() {
  return (
    <section className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Parent Portal</h2>
      <PaymentTracker />
      <EmailReports />
    </section>
  );
}
