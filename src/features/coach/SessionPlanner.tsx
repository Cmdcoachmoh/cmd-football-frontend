import { useState } from "react";

interface Session {
  id: string;
  date: string;
  topic: string;
  players: string[];
}

export default function SessionPlanner() {
  const [sessions, setSessions] = useState<Session[]>([]);

  const addSession = () => {
    setSessions([...sessions, { id: Date.now().toString(), date: "2025-12-01", topic: "Joggling drills", players: [] }]);
  };

  return (
    <section className="p-6 bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Coach Session Planner</h2>
      <button onClick={addSession} className="bg-green-600 text-white px-4 py-2 rounded">
        Add Session
      </button>
      <ul className="mt-4">
        {sessions.map(s => (
          <li key={s.id} className="border-b py-2">
            {s.date} — {s.topic}
          </li>
        ))}
      </ul>
    </section>
  );
}
