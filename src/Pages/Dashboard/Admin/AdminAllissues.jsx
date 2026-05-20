import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AllIssues = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // GET ISSUES
  const { data: issues = [] } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/issues");
      return res.data;
    },
  });

  // GET STAFF
  const { data: staffList = [] } = useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const res = await axiosSecure.get("/staff");
      return res.data;
    },
  });

  // ASSIGN MUTATION
  const assignMutation = useMutation({
    mutationFn: async ({ id, staff }) => {
      return axiosSecure.patch(`/admin/issues/assign/${id}`, {
        staffEmail: staff.email,
        staffName: staff.name,
      });
    },
    onSuccess: () => {
      toast.success("Staff assigned successfully");
      queryClient.invalidateQueries(["issues"]);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Assign failed");
    },
  });

  // REJECT MUTATION
  const rejectMutation = useMutation({
    mutationFn: async (id) => {
      return axiosSecure.patch(`/admin/issues/reject/${id}`);
    },
    onSuccess: () => {
      toast.success("Issue rejected");
      queryClient.invalidateQueries(["issues"]);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Reject failed");
    },
  });

  // ASSIGN HANDLER
  const handleAssign = (issue) => {
    Swal.fire({
      title: "Assign Staff",
      html: `
        <select id="staffSelect" class="swal2-input">
          ${staffList
            .map(
              (s) =>
                `<option value="${s.email}|${s.name}">
                  ${s.name} (${s.email})
                </option>`,
            )
            .join("")}
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: "Assign",
      preConfirm: () => {
        const value = document.getElementById("staffSelect").value;

        if (!value) {
          Swal.showValidationMessage("Please select a staff");
          return false;
        }

        const [email, name] = value.split("|");

        return {
          staff: { email, name },
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        assignMutation.mutate({
          id: issue._id,
          staff: result.value.staff,
        });
      }
    });
  };

  // REJECT HANDLER
  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This issue will be rejected",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        rejectMutation.mutate(id);
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-8 md:text-4xl text-black">
        All Issues
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned Staff</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr key={issue._id}>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      issue.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : issue.status === "In-Progress"
                          ? "bg-blue-100 text-blue-700"
                          : issue.status === "Working"
                            ? "bg-indigo-100 text-indigo-700"
                            : issue.status === "Resolved"
                              ? "bg-green-100 text-green-700"
                              : issue.status === "Closed"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-red-100 text-red-700"
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      issue.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {issue.priority}
                  </span>
                </td>

                <td>
                  {issue.assignedStaffName || (
                    <span className="text-gray-400">Not Assigned</span>
                  )}
                </td>

                <td className="flex gap-2">
                  {/* ASSIGN BUTTON */}
                  {!issue.assignedStaffEmail && (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleAssign(issue)}
                    >
                      Assign
                    </button>
                  )}

                  {/* REJECT BUTTON */}
                  {issue.status === "Pending" && (
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleReject(issue._id)}
                    >
                      Reject
                    </button>
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

export default AllIssues;
