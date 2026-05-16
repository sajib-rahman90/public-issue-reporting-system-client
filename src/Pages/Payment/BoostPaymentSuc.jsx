import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";

const BoostPaymentSuc = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const res = await axiosSecure.post("/confirm-boost-payment", {
          sessionId,
        });

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (sessionId) {
      confirmPayment();
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Issue Boosted payment Successfull.
        </h1>

        <p className="text-gray-500 mt-3">
          Your payment was successful and priority is now High.
        </p>
        <Link to={"/all-issues"} className="btn btn-primary">
          {" "}
          All Detalis page
        </Link>
      </div>
    </div>
  );
};

export default BoostPaymentSuc;
