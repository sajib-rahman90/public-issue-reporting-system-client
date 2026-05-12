import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyIssues = () => {
  const { user, loading } = useAuth();

  const axiosSecure = useAxiosSecure();

  const queryClient = useQueryClient();

  const [selectedIssue, setSelectedIssue] = useState(null);

  // Load issue
  const { data: issues = [], isLoading } = useQuery({
    queryKey: ["myIssues", user?.email],

    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/my-issues?email=${user.email}`);

      return res.data;
    },
  });

  // DELETE MUTATION

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/issues/${id}`);

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myIssues"],
      });

      Swal.fire({
        icon: "success",
        title: "Issue Deleted Successfully",
        timer: 1500,
        showConfirmButton: false,
      });
    },
  });

  // UPDATE MUTATION
  const updateMutation = useMutation({
    mutationFn: async (updatedIssue) => {
      const res = await axiosSecure.put(
        `/issues/${updatedIssue._id}`,
        updatedIssue,
      );

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myIssues"],
      });

      Swal.fire({
        icon: "success",
        title: "Issue Updated Successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      document.getElementById("update_modal").close();
    },
  });

  // DELETE HANDLER
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This issue will be deleted permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  // EDIT MODAL
  const handleEditModal = (issue) => {
    setSelectedIssue(issue);

    document.getElementById("update_modal").showModal();
  };

  // UPDATE ISSUE
  const handleUpdateIssue = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedIssue = {
      _id: selectedIssue._id,

      title: form.title.value,

      category: form.category.value,

      location: form.location.value,

      image: form.image.value,

      description: form.description.value,
    };

    updateMutation.mutate(updatedIssue);
  };

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        My Reported Issues
      </h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="table table-xs sm:table-sm md:table-md">
          <thead className="bg-gray-100">
            <tr>
              <th>Image</th>
              <th>Issue Name</th>
              <th>Category</th>
              <th className="hidden md:table-cell">Location</th>
              <th className="hidden lg:table-cell">Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr key={issue._id}>
                <td>
                  <img
                    src={issue.image}
                    alt={issue.title}
                    className="w-14 h-14 sm:w-20 sm:h-16 rounded-lg object-cover"
                  />
                </td>

                <td>
                  <div className="max-w-30 sm:max-w-45 md:max-w-55 truncate font-medium">
                    {issue.title}
                  </div>
                </td>

                <td>
                  <div className="max-w-20 sm:max-w-30 truncate">
                    {issue.category}
                  </div>
                </td>

                <td className="hidden md:table-cell">
                  <div className="max-w-37 truncate">{issue.location}</div>
                </td>

                <td className="hidden lg:table-cell">
                  {new Date(issue.createdAt).toLocaleDateString()}
                </td>

                <td>
                  <span
                    className={`badge badge-sm sm:badge-md ${
                      issue.status === "Pending"
                        ? "badge-warning"
                        : issue.status === "Resolved"
                          ? "badge-success"
                          : "badge-info"
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>

                <td>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <button
                      disabled={issue.status !== "Pending"}
                      onClick={() => handleEditModal(issue)}
                      className="btn btn-xs sm:btn-sm btn-info text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(issue._id)}
                      className="btn btn-xs sm:btn-sm btn-error text-white"
                    >
                      Delete
                    </button>

                    <Link
                      to={`/issues/${issue._id}`}
                      className="btn btn-xs sm:btn-sm btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UPDATE MODAL */}

      <dialog id="update_modal" className="modal px-2">
        <div className="modal-box w-full max-w-2xl">
          <h3 className="font-bold text-xl sm:text-2xl mb-5">Update Issue</h3>

          <form onSubmit={handleUpdateIssue}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                defaultValue={selectedIssue?.title}
                placeholder="Issue Title"
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                name="category"
                defaultValue={selectedIssue?.category}
                placeholder="Category"
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                name="location"
                defaultValue={selectedIssue?.location}
                placeholder="Location"
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                name="image"
                defaultValue={selectedIssue?.image}
                placeholder="Image URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            <textarea
              name="description"
              defaultValue={selectedIssue?.description}
              placeholder="Description"
              className="textarea textarea-bordered w-full mt-4"
              rows={5}
            ></textarea>

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => document.getElementById("update_modal").close()}
                className="btn w-full sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
              >
                Update Issue
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyIssues;
