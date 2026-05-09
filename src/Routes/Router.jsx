import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Allissues from "../Pages/Allissues/Allissues";
import Login from "../Pages/Login/Login";
import Resigter from "../Pages/Register/Resigter";
import PrivateRoute from "./PrivateRoute";

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
            <Allissues />
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
]);
