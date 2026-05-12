import { Link, useNavigate, useParams } from "react-router";
import { FaMapMarkerAlt, FaArrowUp, FaEdit, FaTrash } from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";

import LoaddingSpinner from "../../../../Components/LoaddingSpinner";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const IssueDetails = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  // let [isOpen, setIsOpen] = useState()

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: issue = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["issue", id],
    queryFn: async () => {
      const result = await axiosSecure.get(`/issues/${id}`);
      return result.data;
    },
  });
  console.log(issue);
  const isOwner = user?.email === issue?.reporterEmail;

  // delate functions
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This issue will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/issues/${issue._id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Issue deleted successfully",
            icon: "success",
          });
          navigate("/all-issues");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  /* ================= BOOST ================= */
  const handleBoost = async () => {
    try {
      const res = await axiosSecure.post(
        `/issues/${id}/create-checkout-session`,
        {
          email: issue?.email,
          title: issue?.title,
        },
      );
      window.location.href = res.data.url;
    } catch (err) {
      toast.error(err.response?.data?.error || "Boost failed");
    }
  };

  if (isLoading) return <LoaddingSpinner />;
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200">
        {/* IMAGE */}
        <img
          src={issue?.image}
          alt={issue?.title}
          className="w-full h-[250px] md:h-[400px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-5 md:p-8">
          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-yellow-100 text-yellow-700 text-sm font-medium px-4 py-1 rounded-full">
              {issue?.status}
            </span>

            <span
              className={`text-sm font-medium px-4 py-1 rounded-full ${
                issue?.priority === "high"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {issue?.priority} Priority
            </span>

            <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1 rounded-full">
              {issue?.category}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            {issue?.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-5 leading-7">{issue?.description}</p>

          {/* LOCATION */}
          <div className="flex items-center gap-2 mt-6 text-gray-500">
            <FaMapMarkerAlt />

            <span>{issue?.location}</span>
          </div>

          {/* INFO SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {/* REPORTER */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Reported By
              </h3>

              <div className="flex items-center gap-4">
                <img
                  src={issue?.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-medium text-gray-800">
                    {issue?.reporterName}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {issue?.reporterEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* STAFF */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Assigned Staff
              </h3>

              {issue?.assignedStaff ? (
                <div>
                  <h4 className="font-medium text-gray-800">
                    {issue?.assignedStaff?.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {issue?.assignedStaff?.email}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No staff assigned yet.</p>
              )}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* UPVOTE */}
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl transition">
              <FaArrowUp />
              {issue?.upvote} Upvotes
            </button>

            {/* BOOST */}
            {issue?.priority !== "high" && (
              <button
                onClick={handleBoost}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition"
              >
                Boost Priority (100tk)
              </button>
            )}

            {/* EDIT */}
            {isOwner && issue?.status === "Pending" && (
              <Link
                to={`/update-issue/${issue?._id}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
              >
                <FaEdit />
                Edit
              </Link>
            )}

            {/* DELETE */}
            {isOwner && (
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition"
              >
                <FaTrash />
                Delete
              </button>
            )}
          </div>

          {/* TIMELINE */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-5 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Issue Timeline
            </h3>

            <div className="space-y-3">
              {issue?.timeline?.map((item, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <p className="font-medium text-gray-800">{item?.title}</p>

                  <p className="text-sm text-gray-500">{item?.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
