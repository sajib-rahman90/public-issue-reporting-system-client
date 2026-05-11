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
    ],
  },
]);
