import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // optional stylesheet

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="glass-card">
          <img src="/images/cmd-logo.jpg" alt="CMD Football Logo" className="logo" />
          <h1>CMD Football</h1>
          <p className="subtitle">Effort. Elevation. Excellence.</p>
          <Link to="/dashboard" className="btn">
            Enter Dashboard
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid-section">
        <div className="grid-item">
          <h2>📊 Progress Tracking</h2>
          <p>Track juggling levels, drill attempts, and growth metrics.</p>
          <Link to="/progress-chart">View Charts</Link>
        </div>
        <div className="grid-item">
          <h2>🛠️ Drill Builder</h2>
          <p>Design and assign drills with visual clarity and coach feedback.</p>
          <Link to="/drill-builder">Build Drills</Link>
        </div>
        <div className="grid-item">
          <h2>🎓 Exam Entry</h2>
          <p>Submit results, unlock levels, and celebrate effort.</p>
          <Link to="/exam-entry">Submit Exam</Link>
        </div>
        <div className="grid-item">
          <h2>📋 Team Report</h2>
          <p>Compare players, badges, and team-wide performance.</p>
          <Link to="/team-report">View Report</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CMD Football. Built for coaches, powered by effort.</p>
        <p>Last updated: {new Date(document.lastModified).toLocaleString()}</p>
      </footer>
    </div>
  );
};

export default HomePage;
