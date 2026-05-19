import { Link } from "react-router";
import { XCircle } from "lucide-react";

const PremiumePymentFail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 sm:p-10 text-center border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="text-red-600 w-8 h-8" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Payment Failed
        </h1>

        <p className="text-slate-500 mt-3 leading-relaxed">
          Your premium subscription payment was cancelled. No charges were
          applied. You can try again anytime.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={"/dashboard/citizen-profile"}
            className="px-5 py-2 rounded-xl bg-blue-100 text-slate-700 hover:bg-blue-500 transition"
          >
            Go to Profile
          </Link>
        </div>

        <p className="text-xs text-slate-400 mt-6">
          If you were charged, the amount will be refunded automatically
          according to your payment provider policy.
        </p>
      </div>
    </div>
  );
};

export default PremiumePymentFail;
