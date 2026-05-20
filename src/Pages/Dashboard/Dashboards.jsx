import LoaddingSpinner from "../../Components/LoaddingSpinner";
import useRole from "../../Hooks/useRole";
import AdminDashboard from "./Admin/AdminDashboard";
import CitizenDashboard from "./Citizen/CitizenDashboard";
import StaffDashboard from "./Staff/StaffDashboard";

const Dashboards = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoaddingSpinner />;
  return (
    <div>
      {role === "citizen" && <CitizenDashboard />}
      {role === "staff" && <StaffDashboard />}
      {role === "admin" && <AdminDashboard />}
    </div>
  );
};

export default Dashboards;
