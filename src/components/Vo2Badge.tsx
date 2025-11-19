import React from "react";

type Vo2BadgeProps = {
  vo2: number;
};

const Vo2Badge: React.FC<Vo2BadgeProps> = ({ vo2 }) => {
  const isElite = vo2 >= 160;

  return (
    <span
      style={{
        backgroundColor: isElite ? "#28a745" : "#6c757d",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "12px",
        fontWeight: "bold",
        marginLeft: "10px"
      }}
    >
      {isElite ? "🏅 Elite" : "Training"}
    </span>
  );
};

export default Vo2Badge;
