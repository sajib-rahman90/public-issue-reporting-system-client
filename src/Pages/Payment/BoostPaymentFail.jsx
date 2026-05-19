import { Link } from "react-router";
import { XCircle } from "lucide-react";

const BoostPaymentFail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 sm:p-10 text-center border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="text-red-600 w-8 h-8" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Payment Cancelled
        </h1>

        <p className="text-slate-500 mt-3 leading-relaxed">
          Your boost payment was cancelled. No charges were made. You can try
          again whenever you're ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={"/all-issues"}
            className="px-5 py-2 rounded-xl bg-blue-100 text-slate-700 hover:bg-blue-500 transition"
          >
            Back to Issues
          </Link>
        </div>

        <p className="text-xs text-slate-400 mt-6">
          If money was deducted, it will be refunded automatically within a
          short time.
        </p>
      </div>
    </div>
  );
};

export default BoostPaymentFail;
