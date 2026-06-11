import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";

const statusFlow = {
  Pending: ["In-progress"],
  "In-progress": ["Working"],
  Working: ["Resolved"],
  Resolved: ["Closed"],
  Closed: [],
};

const StaffAssignedIssues = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const { data: issues = [], isLoading } = useQuery({
    queryKey: ["assignedIssues", statusFilter, priorityFilter],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/staff/assigned-issues?status=${statusFilter}&priority=${priorityFilter}`,
      );
      return res.data;
    },
  });

  const statusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      return axiosSecure.patch(`/staff/issues/status/${id}`, { status });
    },

    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries(["assignedIssues"]);
    },

    onError: () => {
      toast.error("Failed to update status");
    },
  });

  const handleStatusChange = (id, status) => {
    Swal.fire({
      title: "Change status?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        statusMutation.mutate({ id, status });
      }
    });
  };

  // BOOSTED SORT
  const sortedIssues = [...issues].sort((a, b) => {
    return (b.upvote || 0) - (a.upvote || 0);
  });

  if (isLoading) {
    return <LoaddingSpinner />;
  }

  return (
    <div className="p-4 md:p-8">
      {/* HEADER */}
      <h2 className="text-3xl text-center font-bold mb-8 md:text-4xl text-base-content">
        Assigned Issues
      </h2>

      {/* FILTERS */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <select
          className="select select-bordered bg-base-100 text-base-content"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Pending</option>
          <option>In-progress</option>
          <option>Working</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>

        <select
          className="select select-bordered bg-base-100 text-base-content "
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All Priority</option>
          <option>Normal</option>
          <option>High</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow border border-base-300">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Assigned Staff</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {sortedIssues.map((issue) => (
              <tr
                key={issue._id}
                className="
                hover:bg-base-200
                "
              >
                <td>{issue.title}</td>
                <td>{issue.category}</td>

                <td>
                  <span className="badge badge-info">{issue.priority}</span>
                </td>

                <td>
                  <span className="badge badge-warning">{issue.status}</span>
                </td>

                <td>{issue.assignedStaffName}</td>

                <td>
                  {statusFlow[issue.status]?.length > 0 ? (
                    <select
                      className="select select-sm select-bordered bg-base-100
                    text-base-content"
                      onChange={(e) =>
                        handleStatusChange(issue._id, e.target.value)
                      }
                      defaultValue=""
                    >
                      <option disabled value="">
                        Change Status
                      </option>

                      {statusFlow[issue.status].map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="text-base-content/50">No Action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffAssignedIssues;
