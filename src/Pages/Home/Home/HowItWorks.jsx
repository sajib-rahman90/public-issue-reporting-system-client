import { ClipboardList, UserCheck, Settings, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-11/12 mx-auto sm:px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black ">
            How It Works
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            A simple and transparent workflow that explains how issues move from
            reporting to resolution.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gray-200"></div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-md">
              1
            </div>

            <div className="mt-6 flex justify-center text-blue-600">
              <ClipboardList size={34} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Report an Issue
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Users submit issues with title, description, category, image, and
              location using a simple form.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-md">
              2
            </div>

            <div className="mt-6 flex justify-center text-blue-600">
              <UserCheck size={34} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Admin Review
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Admin verifies submitted issues and checks validity before moving
              forward.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-md">
              3
            </div>

            <div className="mt-6 flex justify-center text-blue-600">
              <Settings size={34} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Assign to Staff
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Issues are assigned to relevant staff based on category and
              location.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-md">
              4
            </div>

            <div className="mt-6 flex justify-center text-blue-600">
              <CheckCircle2 size={34} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Resolve & Update
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Staff resolves issues and updates status so users can track
              progress in real time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
