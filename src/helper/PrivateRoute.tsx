import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthProvider } from "../context/auth-context";

export function PrivateRoute() {
  const { token } = useAuthProvider();
  const location = useLocation();
  if (token) {
    return <Outlet />;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
