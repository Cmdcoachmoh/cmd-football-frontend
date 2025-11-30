import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
<<<<<<< HEAD
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
=======
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

ChartJS.register(BarElement, CategoryScale, LinearScale);
>>>>>>> 7527a98dbff8ecaffb4a43a8c0ce6ba5046caf18

type PlayerGrowthDTO = {
  name: string;
  score: number;
};

const ProgressChart = ({ playerId }: { playerId: number }) => {
  const [data, setData] = useState<PlayerGrowthDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
  useEffect(() => {
    const fetchPlayerGrowth = async () => {
      try {
        const response = await fetch(`/api/player/${playerId}/growth`);
        if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayerGrowth();
  }, [playerId]);

  useEffect(() => {
    if (data && data.score >= 90) animateBadge("Elite");
=======
  const fetchPlayerGrowth = async (id: number) => {
    try {
      const response = await fetch(`/api/player/${id}/growth`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayerGrowth(playerId);
  }, [playerId]);

  useEffect(() => {
    if (data && data.score >= 90) {
      animateBadge("Elite");
    }
>>>>>>> 7527a98dbff8ecaffb4a43a8c0ce6ba5046caf18
  }, [data]);

  const animateBadge = (badge: string) => {
    const badgeElement = document.getElementById("badge");
    if (badgeElement) {
      badgeElement.classList.add("animate");
      setTimeout(() => badgeElement.classList.remove("animate"), 1500);
    }
  };

  const getBadge = (score: number): string => {
    if (score >= 90) return "🏅 Elite";
    if (score >= 75) return "🎖 Advanced";
    if (score >= 50) return "📈 Developing";
    return "🔄 Training";
  };

  const getColor = (score: number): string => {
    if (score >= 90) return "#FFD700"; // Gold
    if (score >= 75) return "#C0C0C0"; // Silver
    if (score >= 50) return "#1E90FF"; // Blue
    return "#A9A9A9"; // Gray
  };

  const exportPDF = () => {
    if (!data) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("CMD Football – Player Growth Report", 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${data.name}`, 10, 30);
    doc.text(`Score: ${data.score}`, 10, 40);
    doc.text(`Badge: ${getBadge(data.score)}`, 10, 50);
    doc.save(`${data.name}-growth.pdf`);
  };

  const exportCSV = () => {
    if (!data) return;
    const csv = `Name,Score,Badge\n${data.name},${data.score},${getBadge(data.score)}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${data.name}-growth.csv`);
  };

<<<<<<< HEAD
  if (loading) return <div className="spinner">⏳ Loading player growth...</div>;
  if (error) return <p className="error">⚠️ Error: {error}</p>;
=======
  if (loading) return <p>Loading player growth...</p>;
  if (error) return <p>Error: {error}</p>;
>>>>>>> 7527a98dbff8ecaffb4a43a8c0ce6ba5046caf18
  if (!data) return <p>No data available.</p>;

  const chartData = {
    labels: [data.name],
    datasets: [
      {
        label: "Growth Score",
        data: [data.score],
<<<<<<< HEAD
        backgroundColor: [getColor(data.score)],
        borderRadius: 6
=======
        backgroundColor: [getColor(data.score)]
>>>>>>> 7527a98dbff8ecaffb4a43a8c0ce6ba5046caf18
      }
    ]
  };

<<<<<<< HEAD
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    }
  };

  return (
    <div className="progress-chart">
      <h2 aria-label={`Player name: ${data.name}`}>{data.name}</h2>
      <p aria-label={`Score: ${data.score}`}>Score: {data.score}</p>
      <p id="badge" className="badge" aria-label={`Badge: ${getBadge(data.score)}`}>
        {getBadge(data.score)}
      </p>

      <Bar data={chartData} options={chartOptions} />

      <div className="export-buttons">
        <button onClick={exportPDF}>📄 Export PDF</button>
        <button onClick={exportCSV}>📊 Export CSV</button>
      </div>
=======
  return (
    <div className="progress-chart">
      <h2>{data.name}</h2>
      <p>Score: {data.score}</p>
      <p id="badge" className="badge">
        {getBadge(data.score)}
      </p>

      <Bar data={chartData} />

      <button onClick={exportPDF}>📄 Export PDF</button>
      <button onClick={exportCSV}>📊 Export CSV</button>
>>>>>>> 7527a98dbff8ecaffb4a43a8c0ce6ba5046caf18
    </div>
  );
};

export default ProgressChart;
