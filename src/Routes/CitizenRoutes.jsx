import { Navigate } from "react-router";
import LoaddingSpinner from "../Components/LoaddingSpinner";
import useRole from "../Hooks/useRole";

const CitizenRoutes = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoaddingSpinner />;
  if (role === "citizen") return children;
  return <Navigate to="/" replace="true" />;
};

export default CitizenRoutes;
