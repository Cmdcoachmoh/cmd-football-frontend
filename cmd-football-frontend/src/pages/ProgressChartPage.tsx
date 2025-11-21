import React from "react";
import ProgressChart from "../components/ProgressChart";

const ProgressChartPage = () => {
  return (
    <div>
      <h2>📊 Progress Tracking</h2>
      <p>Track juggling levels, drill attempts, and growth metrics.</p>
      <ProgressChart playerId={1} /> {/* Replace with selected player logic */}
    </div>
  );
};

export default ProgressChartPage;
