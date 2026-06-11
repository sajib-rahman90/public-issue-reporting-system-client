import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";
import useAuth from "../../../Hooks/useAuth";

const AdminProfile = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const { updateUserProfileFunc } = useAuth();

  const { data: admin = {}, isLoading } = useQuery({
    queryKey: ["adminProfile"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/profile");
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: admin,
  });

  const updateMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.put("/admin/profile", data);
      await updateUserProfileFunc({
        displayName: data.name,
        photoURL: data.photo,
      });
      return res.data;
    },

    onSuccess: () => {
      toast.success("Profile updated successfully");
      // instant profile page update
      queryClient.invalidateQueries({
        queryKey: ["adminProfile"],
      });
      setIsEdit(false);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Update failed");
    },
  });
  const onSubmit = (data) => {
    updateMutation.mutate(data);
  };

  if (isLoading) {
    return <LoaddingSpinner />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* card */}
      <div className="bg-base-100 shadow-lg rounded-2xl p-6 border border-base-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={admin.photo}
            alt="admin"
            className="w-28 h-28 rounded-full object-cover border border-base-300"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-base-content">
              {admin.name}
            </h2>
            <p className="text-base-content/60">{admin.email}</p>
            <p className="mt-1 text-sm text-base-content/70">
              Role: {admin.role}
            </p>

            <button
              onClick={() => {
                setIsEdit(!isEdit);
                reset(admin);
              }}
              className="mt-4 btn text-white bg-blue-500 hover:bg-blue-600 btn-sm"
            >
              {isEdit ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* form*/}
        {isEdit && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered w-full bg-base-100 text-base-content"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-400">Name is required</p>
            )}

            <input
              {...register("photo")}
              placeholder="Photo URL"
              className="input input-bordered w-full md:col-span-2 bg-base-100 text-base-content"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-400">Photo is required</p>
            )}

            <button type="submit" className="btn btn-success md:col-span-2">
              Update Profile
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
