import { JSX } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: JSX.Element;
  redirectTo?: string;
};

const PrivateRoute = ({ children, redirectTo = "/login" }: PrivateRouteProps): JSX.Element => {
  const token = localStorage.getItem("token");

  // Optional: add basic token validation logic here later
  const isAuthenticated = Boolean(token);

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
