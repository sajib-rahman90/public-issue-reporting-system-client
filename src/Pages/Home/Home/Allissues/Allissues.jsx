import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import LoaddingSpinner from "../../../../Components/LoaddingSpinner";
import useAuth from "../../../../Hooks/useAuth";
import LeatestResolveSkeleton from "../../../../Components/LeatestResolveSkeleton";

const Allissues = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [page, setPage] = useState(1);
  const { loading } = useAuth();
  // console.log(user);

  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["issues", search, category, status, priority, page],
    // enabled: !loading && !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/issues?search=${search}&category=${category}&status=${status}&priority=${priority}&page=${page}`,
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const upvoteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.patch(`/issues/${id}/upvote`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message ||
          "Failed to update issue",
      );
    },
  });

  const handleUpvote = (issueId) => {
    upvoteMutation.mutate(issueId);
  };

  if (loading) {
    return <LoaddingSpinner />;
  }

  return (
    <div className="max-w-11/12 mx-auto sm:px-4 py-9">
      {/* FILTERS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        {/* SEARCH */}
        <input
          className="input input-bordered w-full rounded-2xl"
          placeholder="Search issue..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* CATEGORY */}
        <select
          className="select select-bordered w-full rounded-2xl"
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Category</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Broken Streelight">Broken Streelight</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Garbage Overflow">Garbage Overflow</option>
        </select>

        {/* STATUS */}
        <select
          className="select select-bordered w-full rounded-2xl"
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Working">Working</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* PRIORITY */}
        <select
          className="select select-bordered w-full rounded-2xl"
          onChange={(e) => {
            setPriority(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Priority</option>
          <option value="High">High</option>
          <option value="Normal">Normal</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading
          ? [...Array(4)].map((_, index) => (
              <LeatestResolveSkeleton key={index} />
            ))
          : data?.issues?.map((issue) => (
              <div
                key={issue._id}
                className="bg-base-100 rounded-3xl overflow-hidden border border-base-300 shadow-sm hover:shadow-lg transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img src={issue.image} className="w-full h-52 object-cover" />

                  <span className="absolute top-4 left-4 bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                    {issue.status}
                  </span>

                  <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${
                      issue.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {issue.priority === "High" ? "🔥 High" : "✓ Normal"}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {issue.category}
                  </p>

                  <h3 className="text-xl font-semibold text-base-content">
                    {issue.title}
                  </h3>

                  <p className="text-sm text-base-content/70 mt-2 line-clamp-2">
                    {issue.description}
                  </p>

                  <div className="mt-4 text-sm text-base-content/70 flex items-center gap-2">
                    📍 {issue.location}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => handleUpvote(issue._id)}
                      disabled={upvoteMutation.isPending}
                      className="px-4 py-2 bg-base-200 rounded-xl text-sm hover:bg-base-300"
                    >
                      👍 {issue.upvote}
                    </button>

                    <Link
                      to={`/issues/${issue._id}`}
                      className="btn btn-primary btn-sm rounded-xl"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-10 gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-base-300 rounded-xl disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">{page}</span>

        <button
          disabled={!data?.hasMore}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-base-300 rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Allissues;
