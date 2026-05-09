import { Outlet } from "react-router";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navber />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
