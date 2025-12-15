import { useState } from "react";
import { toast } from "react-toastify";

export default function DrillBuilderPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");

  const baseUrl = import.meta.env.VITE_API_BASE;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/api/drills`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, category })
      });

      if (!res.ok) throw new Error("Failed to create drill");

      toast.success("✅ Drill created successfully!");
      setTitle("");
      setDescription("");
      setCategory("General");
    } catch {
      toast.error("Failed to save drill");
    }
  }

  return (
    <div className="page-container">
      <h1>🛠️ Drill Builder</h1>

      <form className="drill-form" onSubmit={handleSubmit}>
        <label>Drill Title</label>
        <input
          type="text"
          value={title}
          placeholder="Enter drill name"
          onChange={e => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          placeholder="Describe the drill"
          onChange={e => setDescription(e.target.value)}
          required
        />

        <label>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Passing">Passing</option>
          <option value="Shooting">Shooting</option>
          <option value="Dribbling">Dribbling</option>
          <option value="Fitness">Fitness</option>
        </select>

        <button type="submit">Save Drill</button>
      </form>
    </div>
  );
}

