import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <FaExclamationTriangle className="text-red-500 text-4xl" />
          </div>
        </div>
        <h1 className="text-6xl font-extrabold text-slate-800">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mt-3">
          Page Not Found
        </h2>
        <p className="text-slate-500 mt-3 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
