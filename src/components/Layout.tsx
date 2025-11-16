import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"; // optional scoped styles

const Layout = () => {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <img src="/images/cmd-logo.jpg" alt="CMD Logo" className="logo" />
        <div className="branding">
          <h1>CMD Football</h1>
          <p className="subtitle">Effort. Elevation. Excellence.</p>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CMD Football. Built for coaches, powered by effort.</p>
        <p>Last updated: {new Date(document.lastModified).toLocaleString()}</p>
      </footer>
    </div>
  );
};

export default Layout;
