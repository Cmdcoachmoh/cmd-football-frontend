// scripts/generatePlayerPDF.js
import fs from 'fs';
import PDFDocument from 'pdfkit';
import fetch from 'node-fetch';

const API_BASE = process.env.VITE_API_BASE || 'https://cmd-football-backend-production.up.railway.app';

async function getPlayers() {
  const res = await fetch(`${API_BASE}/api/players`);
  if (!res.ok) throw new Error('Failed to fetch players');
  return await res.json(); // [{ id, name, number, milestones }]
}

async function getBonusMalus(playerId) {
  const res = await fetch(`${API_BASE}/api/bonus-malus?playerId=${playerId}`);
  if (!res.ok) throw new Error(`Failed bonus-malus for ${playerId}`);
  return await res.json();
}

function sectionTitle(doc, text) {
  doc.fontSize(16).fillColor('#111').text(text, { underline: true });
  doc.moveDown(0.5);
}

function bulletList(doc, items) {
  items.forEach(item => doc.fontSize(12).fillColor('#222').text(`• ${item}`));
  doc.moveDown();
}

function addChart(doc, playerId) {
  const chartPath = `docs/player_${playerId}_chart.png`;
  if (fs.existsSync(chartPath)) {
    doc.image(chartPath, { fit: [500, 280], align: 'center' });
  } else {
    doc.fontSize(12).fillColor('#c0392b').text('Chart unavailable / Graphique non disponible');
  }
  doc.moveDown();
}

function generateBilingualPDF(player, bonusMalus) {
  const outputPath = `docs/player_${player.id}_report.pdf`;
  const doc = new PDFDocument({ margin: 40 });
  doc.pipe(fs.createWriteStream(outputPath));

  // Header
  doc.fontSize(20).fillColor('#0b3d91').text(`${player.name} — #${player.number}`, { align: 'center' });
  doc.moveDown();

  // Chart
  addChart(doc, player.id);

  // French section
  sectionTitle(doc, 'Rapport de progression (FR)');
  bulletList(doc, (player.milestones || []).length ? player.milestones : ['Aucune note pour le moment']);
  sectionTitle(doc, 'Bonus–Malus par semaine');
  doc.fontSize(12).fillColor('#333').text(
    bonusMalus.map(d => `Semaine ${d.week}: Bonus ${d.bonus}, Malus ${d.malus}`).join('\n')
  );
  doc.moveDown();

  // Divider
  doc.moveTo(40, doc.y).lineTo(555, doc.y).strokeColor('#ddd').stroke();
  doc.moveDown();

  // English section
  sectionTitle(doc, 'Progress report (EN)');
  const enMilestones = (player.milestones || []).length ? player.milestones : ['No notes yet'];
  bulletList(doc, enMilestones);
  sectionTitle(doc, 'Bonus–Malus by week');
  doc.fontSize(12).fillColor('#333').text(
    bonusMalus.map(d => `Week ${d.week}: Bonus ${d.bonus}, Malus ${d.malus}`).join('\n')
  );

  // Footer
  doc.moveDown();
  doc.fontSize(10).fillColor('#555').text('CMD Football • Growth, fairness, inclusion | Croissance, équité, inclusion', { align: 'center' });

  doc.end();
  console.log(`✅ PDF generated: ${outputPath}`);
}

(async () => {
  const players = await getPlayers();
  for (const player of players) {
    const data = await getBonusMalus(player.id);
    if (data.length > 0) generateBilingualPDF(player, data);
  }
})();
