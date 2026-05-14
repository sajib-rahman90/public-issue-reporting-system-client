import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const ReportIssueForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [reportedCount, setReportedCount] = useState(0);

  //  ADD THIS (USER INFO + COUNT FETCH)
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/${user.email}`).then((res) => {
        setUserInfo(res.data);
      });

      axiosSecure.get(`/my-issues-count/${user.email}`).then((res) => {
        setReportedCount(res.data.count);
      });
    }
  }, [user, axiosSecure]);

  const handleReportIssue = async (data) => {
    // ADD THIS (LIMIT CHECK)
    if (!userInfo?.isPremium && reportedCount >= 3) {
      toast.error("Free users can report maximum 3 issues");
      navigate("/dashboard/profile");
      return;
    }
    console.log(data);
    const issueImage = data.photo[0];

    const formData = new FormData();
    formData.append("image", issueImage);

    const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

    const res = await axios.post(image_API_URL, formData);

    // console.log("after image upload", res.data);

    const imageUrl = res.data.data.display_url;
    const issueInfo = {
      title: data.issueTitle,

      category: data.category,

      location: data.location,

      description: data.description,

      image: imageUrl,

      status: "Pending",

      priority: "Normal",

      upvote: 0,

      reporterEmail: user.email,

      reporterName: user.displayName,

      createdAt: new Date(),
    };

    // const issueRes = await axiosSecure.post("/issues", issueInfo);
    // toast.success("Added Report in DB succesfully.");

    // console.log("after saving issue", issueRes.data);

    const issueRes = await axiosSecure.post("/issues", issueInfo);
    //  ADD THIS (TRACKING CREATE + NAVIGATE)
    if (issueRes.data.insertedId) {
      const trackingInfo = {
        issueId: issueRes.data.insertedId,
        status: "Pending",
        message: "Issue reported successfully",
        updatedBy: "Citizen",
        email: user.email,
        time: new Date(),
      };

      await axiosSecure.post("/issue-tracking", trackingInfo);
      toast.success("Issue reported successfully");
      navigate("/dashboard/my-issues");
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-5">
            {/* LEFT INFO SIDE */}
            <div className="lg:col-span-2 bg-blue-600 p-8 sm:p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Report Public Issues Easily
              </h2>

              <p className="mt-5 text-blue-100 text-sm sm:text-base leading-relaxed">
                Submit infrastructure problems like damaged roads, broken
                lights, water leakage and help improve your community faster.
              </p>

              <div className="mt-8 space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  🚧 Fast issue tracking system
                </div>

                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  📍 Real location based reporting
                </div>

                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  ⚡ Quick response management
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div className="lg:col-span-3 p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800">
                  Issue Details
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  Fill out the form below with accurate information.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleReportIssue)}
                className="space-y-6"
              >
                {/* TITLE + CATEGORY */}
                <div className="grid md:grid-cols-2 gap-5">
                  {/* TITLE */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Issue Title
                    </label>

                    <input
                      type="text"
                      {...register("issueTitle", { required: true })}
                      placeholder="Enter issue title"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.issueTitle?.type === "required" && (
                      <p className="text-red-400">Enter Isuue Title.</p>
                    )}
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Category
                    </label>

                    <select
                      {...register("category", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Category</option>
                      <option>Road Damage</option>
                      <option>Broken Streetlight</option>
                      <option>Water Leakage</option>
                      <option>Garbage Overflow</option>
                    </select>
                  </div>
                </div>

                {/* LOCATION + IMAGE */}
                <div className="grid md:grid-cols-2 gap-5">
                  {/* LOCATION */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Location
                    </label>

                    <input
                      type="text"
                      {...register("location", { required: true })}
                      placeholder="Enter location"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* IMAGE */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Upload Image
                    </label>

                    <input
                      type="file"
                      {...register("photo", { required: true })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-500
                file:mr-4
                file:py-2
                file:px-4
                file:rounded-lg
                file:border-0
                file:bg-blue-100
                file:text-blue-700
                hover:file:bg-blue-200"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write detailed information about the issue..."
                    {...register("description", { required: true })}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  {errors.description && (
                    <p className="text-error text-sm mt-1">
                      Description is required
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <div className="pt-2  ">
                  <button
                    type="submit"
                    disabled={!userInfo?.isPremium && reportedCount >= 3}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-md"
                  >
                    Submit Issue
                  </button>

                  {!userInfo?.isPremium && reportedCount >= 3 && (
                    <button
                      type="button"
                      onClick={() => navigate("/dashboard/citizen-profile")}
                      className="mt-4 w-full sm:w-auto px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium"
                    >
                      Subscribe Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssueForm;
