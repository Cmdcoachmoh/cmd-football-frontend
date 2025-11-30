import React from 'react';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page introuvable</h1>
      <p>Cette page n'existe pas. Retournez à l'accueil.</p>
      <a href="/" style={{ color: '#0b3d91' }}>🏠 Accueil</a>
    </div>
  );
}
