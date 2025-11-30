import { Navigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext"; // ✅ correct relative path




export default function PrivateRoute({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: React.ReactNode;
}) {
  const { role } = useAuth();
  return allowedRoles.includes(role) ? <>{children}</> : <Navigate to="/" replace />;
}

