import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";

const AdminManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });

  const blockMutation = useMutation({
    mutationFn: async (id) => {
      return axiosSecure.patch(`/admin/users/block/${id}`);
    },
    onSuccess: (res) => {
      if (res.data.isBlocked) {
        toast.success("User blocked");
      } else {
        toast.success("User unblocked");
      }
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: () => {
      toast.error("Action failed");
    },
  });

  const handleBlock = (user) => {
    Swal.fire({
      title: user.isBlocked ? "Unblock User?" : "Block User?",
      text: user.isBlocked
        ? "User will regain access."
        : "User will lose access.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: user.isBlocked ? "Yes, Unblock" : "Yes, Block",
    }).then((result) => {
      if (result.isConfirmed) {
        blockMutation.mutate(user._id);
      }
    });
  };

  if (isLoading) {
    return <LoaddingSpinner />;
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl text-center font-bold mb-8 md:text-4xl text-base-content">
        Manage Users
      </h2>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table w-full text-base-content border border-base-300">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscription</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isPremium ? (
                    <span className="badge badge-success">Premium</span>
                  ) : (
                    <span className="badge badge-outline">Free</span>
                  )}
                </td>

                <td>
                  {user.isBlocked ? (
                    <span className="badge badge-error font-medium">
                      Blocked
                    </span>
                  ) : (
                    <span className="badge badge-success font-medium">
                      Active
                    </span>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleBlock(user)}
                    className={`btn btn-sm ${
                      user.isBlocked ? "btn-success" : "btn-error"
                    }`}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageUsers;
