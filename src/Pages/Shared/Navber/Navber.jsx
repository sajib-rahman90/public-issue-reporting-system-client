import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, signOutUserFunc } = useAuth();
  // const { handleSubmit } = useForm();

  const handleLogout = () => {
    signOutUserFunc()
      .then((res) => {
        toast.success("Logout Successful.");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown z-9">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/all-issues"}
                >
                  All Issues
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-semibold ">Public Issues</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-orange-500 font-semibold"
                    : "text-[16px] font-semibold"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-orange-500 font-semibold"
                    : "text-[16px] font-semibold"
                }
                to={"/all-issues"}
              >
                All Issues
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-orange-500 font-semibold"
                    : "text-[16px] font-semibold"
                }
                to={"/report-issues"}
              >
                Report Issue
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10  rounded-full">
                  <img
                    alt=""
                    src={
                      user?.photoURL ||
                      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-blue-50 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold text-gray-700">
                    {user?.displayName}
                  </li>
                  <li className="text-xs text-gray-700">{user?.email}</li>
                </div>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-md text-orange-500 font-semibold"
                        : "text-md font-semibold text-gray-800"
                    }
                    to={"/dashboard"}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="btn rounded-lg mt-1.5 btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-sm rounded-lg bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
