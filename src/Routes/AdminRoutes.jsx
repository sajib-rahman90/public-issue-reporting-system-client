import { Navigate } from "react-router";
import useRole from "../Hooks/useRole";
import LoaddingSpinner from "../Components/LoaddingSpinner";

const AdminRoutes = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoaddingSpinner />;
  if (role === "admin") return children;
  return <Navigate to="/" replace="true" />;
};

export default AdminRoutes;
