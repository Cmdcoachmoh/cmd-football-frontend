import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token); // ✅ Store token
      navigate("/dashboard"); // ✅ Redirect
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>CMD Football</h1>
        <p>Effort. Elevation. Excellence.</p>
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <footer>
          <p>© 2025 CMD Football. Built for coaches, powered by effort.</p>
        </footer>
      </div>
    </div>
  );
}
