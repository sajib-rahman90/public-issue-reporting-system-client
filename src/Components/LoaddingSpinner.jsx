const LoaddingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoaddingSpinner;
