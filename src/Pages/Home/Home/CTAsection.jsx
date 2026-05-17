import { Link } from "react-router";
const CTASection = () => {
  return (
    <section className="py-20 bg-orange-500">
      <div className="max-w-4xl mx-auto text-center px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          See a Problem in Your Area?
        </h2>

        <p className="mt-4 text-white/90">
          Don’t ignore it. Report it and make your community better together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/report-issues"
            className="bg-white text-orange-500 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Report Now
          </Link>

          <Link
            to="/all-issues"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-orange-500 transition"
          >
            Explore Issues
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
