const LeatestResolveSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
      {/* Image Section */}
      <div className="relative">
        <div className="h-56 w-full bg-slate-300 animate-pulse"></div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 h-8 w-24 bg-slate-200 rounded-full animate-pulse"></div>

        {/* Priority Badge */}
        <div className="absolute top-4 right-4 h-8 w-20 bg-slate-200 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="h-4 w-28 bg-slate-200 rounded animate-pulse"></div>

        {/* Title */}
        <div className="mt-4 h-6 w-3/4 bg-slate-300 rounded animate-pulse"></div>
        <div className="mt-2 h-6 w-1/2 bg-slate-300 rounded animate-pulse"></div>

        {/* Description */}
        <div className="mt-5 space-y-2">
          <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
          <div className="h-4 w-11/12 bg-slate-200 rounded animate-pulse"></div>
        </div>

        {/* Location */}
        <div className="mt-5 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-300 animate-pulse"></div>
          <div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center">
          {/* Upvote */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-300 animate-pulse"></div>
            <div className="h-4 w-8 bg-slate-200 rounded animate-pulse"></div>
          </div>

          {/* Button */}
          <div className="h-11 w-36 rounded-xl bg-slate-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LeatestResolveSkeleton;
