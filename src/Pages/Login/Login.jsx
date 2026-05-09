import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
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
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="space-y-5"
          >
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
                    Password must contain uppercase, lowercase, number and be at
                    least 6 characters.
                  </p>
                )}

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {/* ICON */}
                </button>
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
            <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
              Login
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-gray-400 text-sm">OR</span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* GOOGLE */}
          <button className="w-full py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3 text-gray-700 font-medium">
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
