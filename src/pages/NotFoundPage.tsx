import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page introuvable</h1>
      <p>Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" style={{ color: "#0b3d91" }}>🏠 Retour à l'accueil</Link>
    </div>
  );
};

export default NotFoundPage;
