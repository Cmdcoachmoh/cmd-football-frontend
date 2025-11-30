// src/context/AuthContext.tsx
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  role: string;
  setRole: (role: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
  initialRole = "guest"
}: {
  children: React.ReactNode;
  initialRole?: string;
}) {
  const [role, setRole] = useState(initialRole);
  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
