import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { logInUserFunc, user, signInWithGoogleFunc } = useAuth();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to={from} replace={true} />;

  const fillAdminDemo = () => {
    setValue("email", "admin@gmail.com");
    setValue("password", "Admin1234");
  };

  const fillCitizenDemo = () => {
    setValue("email", "citizen@gmail.com");
    setValue("password", "Citizen1234");
  };

  const handleLogin = (data) => {
    setLoading(true);
    // console.log(data);
    logInUserFunc(data.email, data.password)
      .then((res) => {
        // console.log(res);
        navigate(from, { replace: true });
        toast.success("Login Successfull.");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogle = () => {
    signInWithGoogleFunc()
      .then((res) => {
        // console.log(res);
        // navigate(from, { replace: true });
        toast.success("Google Sign in Successfull. ");

        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
          photo: res.user.photoURL,
          isBlocked: false,
          isPremium: false,
          subscriptionDate: null,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          // console.log("user data has been stored", res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      {/* FORM CONTAINER */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200">
        <div className="p-6 sm:p-8">
          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
            Welcome Back
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mb-7 text-center">
            Login to manage and track infrastructure issues.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
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
                <p className="text-red-400">Enter your email.</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">Valid password are required.</p>
                )}
              </div>
            </div>

            {/* FORGOT */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>

            {/* DEMO LOGIN */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                onClick={fillCitizenDemo}
                className="py-2 rounded-lg bg-green-100 text-green-700 font-medium hover:bg-green-200"
              >
                Citizen Demo
              </button>
              <button
                type="button"
                onClick={fillAdminDemo}
                className="py-2 rounded-lg bg-purple-100 text-purple-700 font-medium hover:bg-purple-200"
              >
                Admin Demo
              </button>
            </div>
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

          {/* REGISTER */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?
            <Link to="/register" className="text-blue-600 ml-1 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
