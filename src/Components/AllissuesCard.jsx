import { Link } from "react-router";

const AllissuesCard = ({ issue }) => {
  // console.log(issue);
  return (
    <div>
      <div>
        {/* CARD GRID */}
        <div className=" ">
          {/* CARD */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
            {/* IMAGE */}
            <div className="relative">
              <img
                src={issue.image}
                alt="Issue"
                className="w-full h-52 object-cover"
              />

              {/* STATUS */}
              <span className="absolute top-4 left-4 bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                {issue.status}
              </span>

              {/* PRIORITY */}
              <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                {issue.priority}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              {/* CATEGORY */}
              <p className="text-sm text-blue-600 font-medium mb-2">
                {issue.category}
              </p>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-slate-800 leading-snug">
                {issue.description}
              </h3>

              {/* LOCATION */}
              <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                <span>📍</span>

                <p>{issue.location}</p>
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex items-center justify-between">
                {/* UPVOTE */}
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition text-slate-700 text-sm font-medium">
                  👍 {issue.upvote}
                </button>

                {/* DETAILS BUTTON */}
                <Link
                  to={"/issues/${_id}"}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllissuesCard;
