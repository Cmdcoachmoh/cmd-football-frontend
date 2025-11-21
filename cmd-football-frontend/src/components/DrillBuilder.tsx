import React, { ChangeEvent, useState } from "react";
import "./DrillBuilder.css";

type Drill = {
  name: string;
  completed: boolean;
};

const DrillBuilder: React.FC = () => {
  const [drills, setDrills] = useState<Drill[]>([]);
  const [newDrill, setNewDrill] = useState<string>("");

  const addDrill = (): void => {
    if (newDrill.trim()) {
      setDrills((prev) => [...prev, { name: newDrill, completed: false }]);
      setNewDrill("");
    }
  };

  const toggleDrill = (index: number): void => {
    setDrills((prevDrills) =>
      prevDrills.map((drill, i) =>
        i === index ? { ...drill, completed: !drill.completed } : drill
      )
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewDrill(e.target.value);
  };

  return (
    <div className="drill-builder">
      <h2>🛠️ Drill Builder</h2>
      <input
        type="text"
        placeholder="Enter drill name"
        value={newDrill}
        onChange={handleInputChange}
      />
      <button onClick={addDrill}>Add Drill</button>

      <ul>
        {drills.map((drill, index) => (
          <li
            key={index}
            className={drill.completed ? "completed" : ""}
            onClick={() => toggleDrill(index)}
          >
            {drill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrillBuilder;
