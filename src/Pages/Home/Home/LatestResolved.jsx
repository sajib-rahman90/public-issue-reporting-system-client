import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";
import { FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const LatestResolved = () => {
  const axiosSecure = useAxiosSecure();
  const { data = [], isLoading } = useQuery({
    queryKey: ["latestResolvedIssues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-resolved-issues");
      return res.data;
    },
  });

  if (isLoading) {
    return <LoaddingSpinner />;
  }

  return (
    <section className="  py-20 bg-slate-50">
      <div className="max-w-11/12 mx-auto px-4">
        {/* Header */}

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Latest Resolved Issues
          </h2>

          <p className="mt-3 text-slate-500">
            Recently resolved community issues
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((issue) => (
            <div
              key={issue._id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* image */}
              <div className="relative">
                <img
                  src={issue.image}
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <span className="absolute top-4 left-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  {issue.status}
                </span>

                <span className="absolute top-4 right-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                  {issue.priority}
                </span>
              </div>

              {/* content */}

              <div className="p-5">
                <p className="text-sm text-blue-600 font-medium">
                  {issue.category}
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-800">
                  {issue.title}
                </h2>

                <p className="mt-3 text-sm text-slate-500 line-clamp-2">
                  {issue.description}
                </p>

                {/* location */}

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <FaMapMarkerAlt />

                  {issue.location}
                </div>

                {/* footer */}

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-slate-600">
                    <FaArrowUp />

                    {issue.upvote}
                  </div>

                  <Link
                    to={`/issues/${issue._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestResolved;
