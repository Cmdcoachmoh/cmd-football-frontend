import React from "react";
import "./CoachDashboard.css"; // Optional: if you had styles in the original HTML

const CoachDashboard: React.FC = () => {
  return (
    <main className="coach-dashboard">
      <h1>Coach Dashboard</h1>
      <section>
        <p>
          Welcome to CMD Football’s coaching interface. Elevate your game with data-driven insights.
        </p>
        {/* Add your dashboard widgets, charts, or components here */}
      </section>
    </main>
  );
};

export default CoachDashboard;
