const LoaddingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4">
      <div className="flex flex-col items-center gap-5">
        {/* Outer pulse ring */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 animate-ping"></div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium">
            Loading your content
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Please wait a moment...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoaddingSpinner;
