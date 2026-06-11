import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";
import useAuth from "../../../Hooks/useAuth";

const StaffProfile = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { updateUserProfileFunc } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  const { data: staff = {}, isLoading } = useQuery({
    queryKey: ["staffProfile"],
    queryFn: async () => {
      const res = await axiosSecure.get("/staff/profile");
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: staff,
  });

  const updateMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.put("/staff/profile", data);
      await updateUserProfileFunc({
        displayName: data.name,
        photoURL: data.photo,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["staffProfile"],
      });
      setIsEdit(false);
    },
    onError: () => {
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
      <div className="bg-base-100 shadow-lg rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={staff.photo}
            alt="staff"
            className="w-28 h-28 rounded-full object-cover border border-base-300"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-base-content">
              {staff.name}
            </h2>
            <p className="text-base-content/60">{staff.email}</p>
            <p className="mt-1 text-sm text-base-content/70">
              Role: {staff.role}
            </p>

            <button
              onClick={() => {
                setIsEdit(!isEdit);
                reset(staff);
              }}
              className="mt-4 text-white btn bg-blue-500 hover:bg-blue-600 btn-sm"
            >
              {isEdit ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* form */}
        {isEdit && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* name */}
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered w-full bg-base-100 text-base-content"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-400">Name is required</p>
            )}

            {/* photo */}
            <input
              {...register("photo", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered w-full bg-base-100 text-base-content"
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

export default StaffProfile;
