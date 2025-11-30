import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

type WeeklyGrowthDTO = {
  weekLabel: string;
  score: number;
};

const WeeklyGrowthChart = ({ playerId }: { playerId: number }) => {
  const [data, setData] = useState<WeeklyGrowthDTO[]>([]);

  useEffect(() => {
    fetch(`/api/player/${playerId}/weekly-growth`)
      .then((res) => res.json())
      .then(setData);
  }, [playerId]);

  const chartData = {
    labels: data.map((d) => d.weekLabel),
    datasets: [
      {
        label: "Weekly Growth",
        data: data.map((d) => d.score),
        borderColor: "#1E90FF",
        fill: false
      }
    ]
  };

  return <Line data={chartData} />;
};

export default WeeklyGrowthChart;
