import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE;

export function BackendGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function checkHealth() {
      try {
        const res = await fetch(`${API_BASE}/api/health`, { method: "GET" });
        const text = await res.text();
        if (!cancelled) setOk(res.ok && text.trim() === "OK");
      } catch {
        if (!cancelled) setOk(false);
      }
    }

    checkHealth();
    return () => {
      cancelled = true;
    };
  }, []);

  if (ok === null) return <p>Checking backend…</p>;
  if (!ok) return <p>Backend unavailable. Please try again later.</p>;

  return <>{children}</>;
}
