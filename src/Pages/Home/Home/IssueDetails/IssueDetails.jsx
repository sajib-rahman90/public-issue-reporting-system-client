import { useNavigate, useParams } from "react-router";
import { FaMapMarkerAlt, FaArrowUp, FaEdit, FaTrash } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoaddingSpinner from "../../../../Components/LoaddingSpinner";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";
import { useForm } from "react-hook-form";

const IssueDetails = () => {
  const { user } = useAuth();
  // console.log(user);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { data: issue = {}, isLoading } = useQuery({
    queryKey: ["issue", id],
    queryFn: async () => {
      const result = await axiosSecure.get(`/issues/${id}`);
      return result.data;
    },
  });
  // console.log(issue);
  const isOwner = user?.email === issue?.reporterEmail;

  const updateMutation = useMutation({
    mutationFn: async (updatedData) => {
      const res = await axiosSecure.patch(`/issues/update/${id}`, updatedData);
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["issue", id],
      });

      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });
      toast.success("Issue updated successfully");
      setShowModal(false);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Update failed");
    },
  });

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

  const handleUpdate = (data) => {
    updateMutation.mutate({
      title: data.title,
      category: data.category,
      description: data.description,
      location: data.location,
    });
  };

  // Boost
  const handleBoost = async () => {
    try {
      const res = await axiosSecure.post(
        `/issues/${id}/create-checkout-session`,
        {
          email: user?.email,
          title: issue?.title,
          userName: user?.displayName,
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
          className="w-full h-62.5 md:h-100 object-cover"
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
            {/* STAFF */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Assigned Staff
              </h3>

              {issue?.assignedStaffName || issue?.assignedStaffEmail ? (
                <div>
                  {issue?.assignedStaffName && (
                    <h4 className="font-medium text-gray-800">
                      {issue.assignedStaffName}
                    </h4>
                  )}

                  {issue?.assignedStaffEmail && (
                    <p className="text-sm text-gray-500 mt-1">
                      {issue.assignedStaffEmail}
                    </p>
                  )}
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
              <button
                onClick={() => {
                  reset({
                    title: issue?.title,
                    category: issue?.category,
                    description: issue?.description,
                    location: issue?.location,
                  });
                  setShowModal(true);
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
              >
                <FaEdit />
                Edit
              </button>
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

          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
              <div className="bg-white w-[95%] md:w-150 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-5">Update Issue</h2>

                <form
                  onSubmit={handleSubmit(handleUpdate)}
                  className="space-y-4"
                >
                  <input
                    {...register("title")}
                    placeholder="Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <select
                    {...register("category")}
                    className="w-full border p-3 rounded-xl"
                  >
                    <option value="Road Damage">Road Damage</option>

                    <option value="Broken Streelight">Broken Streelight</option>

                    <option value="Water Leakage">Water Leakage</option>

                    <option value="Garbage Overflow">Garbage Overflow</option>
                  </select>

                  <input
                    {...register("location")}
                    placeholder="Location"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    {...register("description")}
                    placeholder="Description"
                    rows={4}
                    className="w-full border p-3 rounded-xl"
                  />

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-5 py-2 bg-gray-300 rounded-xl"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={updateMutation.isPending}
                      className="px-5 py-2 bg-blue-600 text-white rounded-xl"
                    >
                      {updateMutation.isPending ? "Updating..." : "Update"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
