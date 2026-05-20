import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";

const AdminManageStaff = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const {
    register: updateRegister,
    handleSubmit: handleUpdateSubmit,
    reset: updateReset,
  } = useForm();

  const { data: staffs = [], isLoading } = useQuery({
    queryKey: ["staffs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/staff");
      return res.data;
    },
  });

  const addStaffMutation = useMutation({
    mutationFn: async (staffInfo) => {
      return axiosSecure.post("/admin/staff", staffInfo);
    },
    onSuccess: () => {
      toast.success("Staff added successfully");
      queryClient.invalidateQueries({
        queryKey: ["staffs"],
      });
      setShowAddModal(false);
      reset();
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Failed to add staff");
    },
  });

  const updateStaffMutation = useMutation({
    mutationFn: async ({ id, updatedData }) => {
      return axiosSecure.patch(`/admin/staff/${id}`, updatedData);
    },
    onSuccess: () => {
      toast.success("Staff updated");
      queryClient.invalidateQueries({
        queryKey: ["staffs"],
      });
      setShowUpdateModal(false);
    },
    onError: () => {
      toast.error("Update failed");
    },
  });

  const deleteStaffMutation = useMutation({
    mutationFn: async (id) => {
      return axiosSecure.delete(`/admin/staff/${id}`);
    },
    onSuccess: () => {
      toast.success("Staff deleted");
      queryClient.invalidateQueries({
        queryKey: ["staffs"],
      });
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });

  const handleAddStaff = (data) => {
    const staffInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      photo: data.photo,
      password: data.password,
    };

    addStaffMutation.mutate(staffInfo);
  };

  const handleUpdateStaff = (data) => {
    const updatedData = {
      name: data.name,
      phone: data.phone,
      photo: data.photo,
    };

    updateStaffMutation.mutate({
      id: selectedStaff._id,
      updatedData,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Staff?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStaffMutation.mutate(id);
      }
    });
  };

  if (isLoading) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl  font-bold mb-4 md:text-4xl text-black">
            Manage Staff
          </h2>

          <p className="text-gray-600 mt-1">Total Staff: {staffs.length}</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="btn btn-primary"
        >
          Add Staff
        </button>
      </div>

      {/* table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {staffs.map((staff, index) => (
              <tr key={staff._id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>

                <td className="font-medium">{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff.phone}</td>
                <td>
                  <span className="badge badge-info">Staff</span>
                </td>

                <td className="flex gap-2">
                  {/* update button */}
                  <button
                    onClick={() => {
                      setSelectedStaff(staff);
                      updateReset({
                        name: staff.name,
                        phone: staff.phone,
                        photo: staff.photo,
                      });

                      setShowUpdateModal(true);
                    }}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </button>

                  {/* delete button */}
                  <button
                    onClick={() => handleDelete(staff._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-2xl mb-5">Add New Staff</h3>

            <form onSubmit={handleSubmit(handleAddStaff)} className="space-y-4">
              {/* name */}
              <input
                type="text"
                placeholder="Staff Name"
                className="input input-bordered w-full"
                {...register("name")}
                required
              />

              {/* email */}
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email")}
                required
              />

              {/* phon */}
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                {...register("phone")}
                required
              />

              {/* photo */}
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                {...register("photo")}
                required
              />

              {/* password */}
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password")}
                required
              />

              <button className="btn btn-primary w-full">Add Staff</button>
            </form>

            <button
              onClick={() => setShowAddModal(false)}
              className="btn btn-outline w-full mt-4"
            >
              Close
            </button>
          </div>
        </dialog>
      )}

      {showUpdateModal && selectedStaff && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-2xl mb-5">Update Staff</h3>

            <form
              onSubmit={handleUpdateSubmit(handleUpdateStaff)}
              className="space-y-4"
            >
              {/* name */}
              <input
                type="text"
                className="input input-bordered w-full"
                {...updateRegister("name")}
                required
              />

              {/* phone */}
              <input
                type="text"
                className="input input-bordered w-full"
                {...updateRegister("phone")}
                required
              />

              {/* photo */}
              <input
                type="text"
                className="input input-bordered w-full"
                {...updateRegister("photo")}
                required
              />

              <button className="btn btn-info w-full">Update Staff</button>
            </form>

            <button
              onClick={() => setShowUpdateModal(false)}
              className="btn btn-outline w-full mt-4"
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AdminManageStaff;
