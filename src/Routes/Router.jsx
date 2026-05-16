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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-issues",
        element: (
          <PrivateRoute>
            <Allissues></Allissues>
          </PrivateRoute>
        ),
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
        element: <UserReportIssue />,
      },
      {
        path: "my-issues",
        element: <MyIssues />,
      },
      {
        path: "citizen-stats",
        element: <CitizenDashboard />,
      },
      {
        path: "citizen-profile",
        element: <CitizenProfile />,
      },
      {
        path: "admin-all-issues",
        element: <AdminAllissues />,
      },
      {
        path: "admin-manage-users",
        element: <AdminManageUsers />,
      },
      {
        path: "admin-manage-staff",
        element: <AdminManageStaff />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "staff-dashboard",
        element: <StaffDashboard />,
      },
      {
        path: "staff-profile",
        element: <StaffProfile />,
      },
      {
        path: "staff-assigned-issues",
        element: <StaffAssignedIssues />,
      },
    ],
  },
  {
    path: "/boost-success",
    element: <BoostPaymentSuc />,
  },
  {
    path: "/premium-success",
    element: <PremiumPaymentSuc />,
  },
]);
