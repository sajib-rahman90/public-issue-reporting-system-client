const AllissuesCard = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-100 px-4 py-10">
        {/* CARD GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* CARD */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
            {/* IMAGE */}
            <div className="relative">
              <img
                src="https://i.ibb.co/4f9Lx4m/road.jpg"
                alt="Issue"
                className="w-full h-52 object-cover"
              />

              {/* STATUS */}
              <span className="absolute top-4 left-4 bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                Pending
              </span>

              {/* PRIORITY */}
              <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                High Priority
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              {/* CATEGORY */}
              <p className="text-sm text-blue-600 font-medium mb-2">
                Road Damage
              </p>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-slate-800 leading-snug">
                Large pothole causing traffic near city market
              </h3>

              {/* LOCATION */}
              <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                <span>📍</span>

                <p>Mirpur 10, Dhaka</p>
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex items-center justify-between">
                {/* UPVOTE */}
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition text-slate-700 text-sm font-medium">
                  👍 24
                </button>

                {/* DETAILS BUTTON */}
                <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
            <div className="relative">
              <img
                src="https://i.ibb.co/B4X6m0S/light.jpg"
                alt="Issue"
                className="w-full h-52 object-cover"
              />

              <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                Resolved
              </span>

              <span className="absolute top-4 right-4 bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                Normal
              </span>
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600 font-medium mb-2">
                Streetlight
              </p>

              <h3 className="text-xl font-semibold text-slate-800 leading-snug">
                Broken streetlight near school road
              </h3>

              <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                <span>📍</span>

                <p>Dhanmondi, Dhaka</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition text-slate-700 text-sm font-medium">
                  👍 12
                </button>

                <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
            <div className="relative">
              <img
                src="https://i.ibb.co/YpcR1oM/water.jpg"
                alt="Issue"
                className="w-full h-52 object-cover"
              />

              <span className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                In Progress
              </span>

              <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                High Priority
              </span>
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600 font-medium mb-2">
                Water Leakage
              </p>

              <h3 className="text-xl font-semibold text-slate-800 leading-snug">
                Underground water leakage beside main road
              </h3>

              <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                <span>📍</span>

                <p>Uttara Sector 7</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition text-slate-700 text-sm font-medium">
                  👍 41
                </button>

                <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllissuesCard;
