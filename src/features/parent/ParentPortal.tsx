import React from "react";

const ParentPortal: React.FC = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Parent Portal</h1>
      <p>Access your child's progress, attendance, and updates.</p>

      <div style={{ marginTop: "1.5rem" }}>
        <h3>Child Overview</h3>
        <ul>
          <li>Name: —</li>
          <li>Team: —</li>
          <li>Progress Score: —</li>
        </ul>
      </div>

      <p style={{ marginTop: "1rem" }}>Parent tools will load here ✅</p>
    </div>
  );
};

export default ParentPortal;


