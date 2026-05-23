import { Link } from "react-router";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
        <aside>
          <Link to="/" className="flex items-center gap-2 group">
            <img
              className="w-12 h-12 bg-sky-50 object-contain transition-transform duration-300 group-hover:scale-110"
              src="/City resolve-logo.png"
              alt="City Resolve Logo"
            />

            <span className="text-xl font-semibold text-blue-500 hover:text-blue-700">
              CityResolve
            </span>
          </Link>
          <p className="font-bold">
            CityResolve Industries Ltd.
            <br />
            Public Infrastructure Issue Reporting System
          </p>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            CityResolve
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              to={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              to={"https://github.com/sajib-rahman90"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 " />
            </Link>
            <Link
              to={"https://x.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
