import { Navigate } from "react-router";
import LoaddingSpinner from "../Components/LoaddingSpinner";
import useRole from "../Hooks/useRole";

const StaffRoutes = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoaddingSpinner />;
  if (role === "staff") return children;
  return <Navigate to="/" replace="true" />;
};

export default StaffRoutes;
