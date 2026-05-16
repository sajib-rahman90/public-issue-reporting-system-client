import { Link, useNavigate, useSearchParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const PremiumPaymentSuc = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const sessionId = params.get("session_id");
  const email = params.get("email");
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;
    const confirmPayment = async () => {
      try {
        const res = await axiosSecure.post("/confirm-premium-payment", {
          sessionId,
          email,
        });

        if (res.data.success) {
          toast.success("Payment successful. You are now premium");
          navigate("/dashboard/citizen-profile");
        }
      } catch (error) {
        console.log(error);
        toast.error("Payment verification failed");
      }
    };

    if (sessionId && email) {
      confirmPayment();
    }
  }, [sessionId, email, axiosSecure, navigate]);

  return (
    <div className="text-center mt-20 text-xl font-semibold">
      <p className="text-gray-500 mt-3">
        Your Premiume subscription payment was successful.
      </p>
      <Link to={"/dashboard/citizen-profile"} className="btn btn-primary">
        {" "}
        Go to Profile
      </Link>
    </div>
  );
};

export default PremiumPaymentSuc;
