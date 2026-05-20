import {
  ShieldCheck,
  MapPinned,
  BellRing,
  Users,
  BarChart3,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-11/12 mx-auto sm:px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black ">
            Application Features
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            A complete platform to report, track, assign, and resolve civic
            issues with transparency and control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <MapPinned size={34} />
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
              Smart Issue Reporting
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Citizens can report issues with images, location, category, and
              description in seconds with a simple interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Clock3 size={34} />
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
              Real-Time Tracking
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Track issue progress live from pending to resolved with full
              transparency and timeline updates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <BellRing size={34} />
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
              Instant Notifications
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Get real-time alerts when issues are assigned, updated, or
              resolved instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck size={34} />
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
              Secure Role System
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Role-based access for Admin, Staff, and Users ensures secure and
              controlled system operation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <BarChart3 size={34} />
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
              Analytics Dashboard
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Visual dashboards with charts and insights to monitor system
              performance and issue trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Users size={34} />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3">
              Staff Assignment
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Admins can assign issues to staff and track progress efficiently
              in real time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
