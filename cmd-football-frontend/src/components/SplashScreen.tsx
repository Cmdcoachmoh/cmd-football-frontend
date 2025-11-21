// src/components/SplashScreen.tsx
import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <img src="/images/cmd-logo.jpg" alt="CMD Logo" className="logo-animated" />
      <h1 className="slogan">Effort. Élévation. Excellence.</h1>
    </div>
  );
}
