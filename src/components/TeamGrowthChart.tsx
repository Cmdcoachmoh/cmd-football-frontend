import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

type PlayerGrowthDTO = {
  name: string;
  score: number;
};

const getColor = (score: number): string => {
  if (score >= 90) return "#FFD700";
  if (score >= 75) return "#C0C0C0";
  if (score >= 50) return "#1E90FF";
  return "#A9A9A9";
};

const getBadge = (score: number): string => {
  if (score >= 90) return "Elite";
  if (score >= 75) return "Advanced";
  if (score >= 50) return "Developing";
  return "Training";
};

const TeamGrowthChart = () => {
  const [players, setPlayers] = useState<PlayerGrowthDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/players/growth")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("CMD Football – Team Growth Report", 10, 10);
    doc.setFontSize(12);
    players.forEach((p, i) => {
      doc.text(`${p.name} – Score: ${p.score} – Badge: ${getBadge(p.score)}`, 10, 30 + i * 10);
    });
    doc.save("team-growth.pdf");
  };

  const exportCSV = () => {
    const csv = "Name,Score,Badge\n" + players
      .map((p) => `${p.name},${p.score},${getBadge(p.score)}`)
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "team-growth.csv");
  };

  if (loading) return <p>Loading team growth...</p>;

  const chartData = {
    labels: players.map((p) => p.name),
    datasets: [
      {
        label: "Growth Score",
        data: players.map((p) => p.score),
        backgroundColor: players.map((p) => getColor(p.score)),
      },
    ],
  };

  return (
    <div>
      <h2>Team Growth Chart</h2>
      <Bar data={chartData} />
      <button onClick={exportPDF}>📄 Export PDF</button>
      <button onClick={exportCSV}>📊 Export CSV</button>
    </div>
  );
};

export default TeamGrowthChart;
