// drill-chart.js
// CMD Football Drill Performance Chart

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("drillChart").getContext("2d");

  const drillChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Dribble", "Pass", "Shoot", "Sprint", "Defend"],
      datasets: [{
        label: "Score",
        data: [78, 85, 92, 88, 74],
        backgroundColor: [
          "#4caf50", "#2196f3", "#ff9800", "#9c27b0", "#f44336"
        ],
        borderRadius: 6,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `Score: ${context.parsed.y}`
          }
        },
        title: {
          display: true,
          text: "🏃 Drill Performance Breakdown",
          font: { size: 18 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Performance Score"
          }
        },
        x: {
          title: {
            display: true,
            text: "Drill Type"
          }
        }
      }
    }
  });
});