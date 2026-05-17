import { Link } from "react-router";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-linear-to-br from-orange-500 via-orange-600 to-amber-500 relative overflow-hidden">
      {/* subtle glow background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 text-white relative z-10">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          See a Problem in Your Area?
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-white/90"
        >
          Don’t ignore it. Report it and make your community better together.
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/report-issues"
            className="bg-white text-orange-500 px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Report Now
          </Link>

          <Link
            to="/all-issues"
            className="border border-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-white hover:text-orange-500 transition text-sm sm:text-base"
          >
            Explore Issues
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
