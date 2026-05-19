import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Resigter from "../Pages/Register/Resigter";
import PrivateRoute from "./PrivateRoute";
import ReportIssue from "../Pages/ReportIssue/ReportIssue";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserReportIssue from "../Pages/Dashboard/Citizen/UserReportIssue";
import MyIssues from "../Pages/Dashboard/Citizen/MyIssues";
import Allissues from "../Pages/Home/Home/Allissues/Allissues";
import IssueDetails from "../Pages/Home/Home/IssueDetails/IssueDetails";
import BoostPaymentSuc from "../Pages/Payment/BoostPaymentSuc";
import CitizenDashboard from "../Pages/Dashboard/Citizen/CitizenDashboard";
import CitizenProfile from "../Pages/Dashboard/Citizen/CitizenProfile";
import AdminAllissues from "../Pages/Dashboard/Admin/AdminAllissues";
import AdminManageUsers from "../Pages/Dashboard/Admin/AdminManageUsers";
import AdminManageStaff from "../Pages/Dashboard/Admin/AdminManageStaff";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import StaffProfile from "../Pages/Dashboard/Staff/StaffProfile";
import StaffAssignedIssues from "../Pages/Dashboard/Staff/StaffAssignedIssues";
import StaffDashboard from "../Pages/Dashboard/Staff/StaffDashboard";
import PremiumPaymentSuc from "../Pages/Payment/PremiumPaymentSuc";
import NotFound from "../Components/NotFound";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import AdminPayments from "../Pages/Dashboard/Admin/AdminPayments";
import BoostPaymentFail from "../Pages/Payment/BoostPaymentFail";
import PremiumePymentFail from "../Pages/Payment/PremiumePymentFail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-issues",
        element: <Allissues></Allissues>,
      },
      {
        path: "/report-issues",
        element: (
          <PrivateRoute>
            <ReportIssue />
          </PrivateRoute>
        ),
      },
      {
        path: "/issues/:id",
        element: (
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Resigter />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-report-issue",
        element: (
          <PrivateRoute>
            <UserReportIssue />
          </PrivateRoute>
        ),
      },
      {
        path: "my-issues",
        element: (
          <PrivateRoute>
            <MyIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "citizen-stats",
        element: (
          <PrivateRoute>
            <CitizenDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "citizen-profile",
        element: (
          <PrivateRoute>
            <CitizenProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-dashboard-stats",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-all-issues",
        element: (
          <PrivateRoute>
            <AdminAllissues />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-manage-users",
        element: (
          <PrivateRoute>
            <AdminManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-manage-staff",
        element: <AdminManageStaff />,
      },
      {
        path: "admin-payments",
        element: (
          <PrivateRoute>
            <AdminPayments />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <PrivateRoute>
            <AdminProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "staff-dashboard",
        element: (
          <PrivateRoute>
            <StaffDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "staff-profile",
        element: (
          <PrivateRoute>
            <StaffProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "staff-assigned-issues",
        element: (
          <PrivateRoute>
            <StaffAssignedIssues />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/boost-success",
    element: <BoostPaymentSuc />,
  },
  {
    path: "/boost-cancel",
    element: <BoostPaymentFail />,
  },
  {
    path: "/premium-success",
    element: <PremiumPaymentSuc />,
  },
  {
    path: "/premium-cancel",
    element: <PremiumePymentFail />,
  },
]);
