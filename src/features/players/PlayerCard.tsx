import { jsPDF } from "jspdf";
import { useTranslation } from "react-i18next";

interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  stats: { goals: number; assists: number };
}

export default function PlayerCard({ player }: { player: Player }) {
  const { t } = useTranslation();

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`${t("playerReport")}: ${player.name}`, 10, 10);
    doc.text(`${t("age")}: ${player.age}`, 10, 20);
    doc.text(`${t("position")}: ${player.position}`, 10, 30);
    doc.text(`${t("goals")}: ${player.stats.goals}`, 10, 40);
    doc.text(`${t("assists")}: ${player.stats.assists}`, 10, 50);
    doc.save(`${player.name}-report.pdf`);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{player.name}</h3>
      <p>{t("age")}: {player.age}</p>
      <p>{t("position")}: {player.position}</p>
      <button onClick={downloadPDF} className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
        {t("downloadReport")}
      </button>
    </div>
  );
}
