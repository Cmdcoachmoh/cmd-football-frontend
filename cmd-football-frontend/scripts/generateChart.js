import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import fs from 'fs';
import fetch from 'node-fetch';

const width = 800;
const height = 400;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });
const API_BASE = process.env.VITE_API_BASE || 'https://cmd-football-backend-production.up.railway.app';

// Step 1: Fetch all player IDs
async function getPlayerList() {
  try {
    const res = await fetch(`${API_BASE}/api/players`);
    if (!res.ok) throw new Error(`Player list error: ${res.statusText}`);
    const players = await res.json();
    return players.map(p => p.id); // assuming each player has an `id`
  } catch (err) {
    console.error('❌ Failed to fetch player list:', err);
    return [];
  }
}

// Step 2: Fetch Bonus–Malus data for a player
async function getPlayerData(playerId) {
  try {
    const res = await fetch(`${API_BASE}/api/bonus-malus?playerId=${playerId}`);
    if (!res.ok) throw new Error(`Data error for player ${playerId}: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error(`❌ Failed to fetch data for player ${playerId}:`, err);
    return [];
  }
}

// Step 3: Generate chart for a player
async function generateChartForPlayer(playerId, data) {
  const labels = data.map(d => `Week ${d.week}`);
  const bonus = data.map(d => d.bonus);
  const malus = data.map(d => d.malus);

  const config = {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Bonus', data: bonus, backgroundColor: 'rgba(54, 162, 235, 0.7)' },
        { label: 'Malus', data: malus, backgroundColor: 'rgba(255, 99, 132, 0.7)' },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: `Bonus–Malus: Player ${playerId}`,
          font: { size: 18 }
        },
        legend: { position: 'top' }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Points' }
        }
      }
    },
  };

  const image = await chartJSNodeCanvas.renderToBuffer(config);
  fs.writeFileSync(`docs/player_${playerId}_chart.png`, image);
  console.log(`✅ Chart saved: docs/player_${playerId}_chart.png`);
}

// Step 4: Loop through all players
(async () => {
  const playerIds = await getPlayerList();
  for (const playerId of playerIds) {
    const data = await getPlayerData(playerId);
    if (data.length > 0) {
      await generateChartForPlayer(playerId, data);
    }
  }
})();
