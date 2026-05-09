import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import LoaddingSpinner from "../Components/LoaddingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoaddingSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;
