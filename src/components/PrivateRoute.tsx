import React, { JSX } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: JSX.Element;
  redirectTo?: string;
};

const PrivateRoute = ({ children, redirectTo = "/login" }: PrivateRouteProps): JSX.Element => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;

