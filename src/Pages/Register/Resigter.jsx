import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

import { toast } from "react-toastify";

const Resigter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUserFunc, signInWithGoogleFunc } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleRegister = (data) => {
    console.log(data);
    createUserFunc(data.email, data.password)
      .then((res) => {
        console.log(res);
        navigate(from, { replace: true });
        toast.success("Registration Successful.");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  const handleGoogle = () => {
    signInWithGoogleFunc()
      .then((res) => {
        console.log(res);
        navigate(from, { replace: true });
        toast.success("Google Sign in Successfull. ");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
        {/* FORM CONTAINER */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="p-6 sm:p-8">
            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
              Create Account
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mb-7 text-center">
              Register to report and track infrastructure issues.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  {...register("text", { required: true })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.text?.type === "required" && (
                  <p className="text-red-400">Enter Your Full name.</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-400">First name is required</p>
                )}
              </div>

              {/* PHOTO URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>

                <input
                  type="text"
                  {...register("text")}
                  placeholder="Enter your photo URL"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/,
                    })}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-400">Valid password are required.</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-400">
                      Password must contain uppercase, lowercase, number and be
                      at least 6 characters.
                    </p>
                  )}
                </div>
              </div>

              {/* REGISTER BUTTON */}
              <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
                Register
              </button>
            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="text-gray-400 text-sm">OR</span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* GOOGLE */}
            <button
              onClick={handleGoogle}
              className="w-full py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3 text-gray-700 font-medium"
            >
              <FcGoogle size={22} />
              Continue with Google
            </button>

            {/* LOGIN */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Already have an account?
              <Link to="/login" className="text-blue-600 ml-1 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resigter;
