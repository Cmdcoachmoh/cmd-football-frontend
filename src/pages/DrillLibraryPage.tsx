import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Drill {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function DrillLibraryPage() {
  const [drills, setDrills] = useState<Drill[]>([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    async function loadDrills() {
      try {
        const res = await fetch(`${baseUrl}/api/drills`);
        if (!res.ok) throw new Error("Failed to load drills");
        const data = await res.json();
        setDrills(data);
      } catch {
        toast.error("Unable to load drill library");
      } finally {
        setLoading(false);
      }
    }
    loadDrills();
  }, [baseUrl]);

  return (
    <div className="page-container">
      <h1>📚 Drill Library</h1>

      {loading ? (
        <p>Loading drills...</p>
      ) : (
        <div className="drill-grid">
          {drills.map(drill => (
            <div key={drill.id} className="drill-card">
              <h3>{drill.title}</h3>
              <p>{drill.description}</p>
              <span className="badge">{drill.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
