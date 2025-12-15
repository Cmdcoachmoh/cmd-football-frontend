import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Drill {
  id: number;
  title: string;
  description: string;
  category: string;
  videoUrl?: string;
  createdAt?: string;
}

export default function DrillViewerPage() {
  const { id } = useParams();
  const [drill, setDrill] = useState<Drill | null>(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    async function loadDrill() {
      try {
        const res = await fetch(`${baseUrl}/api/drills/${id}`);
        if (!res.ok) throw new Error("Failed to load drill");
        const data = await res.json();
        setDrill(data);
      } catch {
        toast.error("Unable to load drill details");
      } finally {
        setLoading(false);
      }
    }

    loadDrill();
  }, [id, baseUrl]);

  if (loading) return <p>Loading drill...</p>;
  if (!drill) return <p>Drill not found</p>;

  return (
    <div className="page-container">
      <h1>{drill.title}</h1>
      <span className="badge">{drill.category}</span>

      <p style={{ marginTop: "1rem" }}>{drill.description}</p>

      {drill.videoUrl && (
        <video
          src={drill.videoUrl}
          controls
          style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }}
        />
      )}

      {drill.createdAt && (
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
          Created: {new Date(drill.createdAt).toLocaleString()}
        </p>
      )}
    </div>
  );
}
