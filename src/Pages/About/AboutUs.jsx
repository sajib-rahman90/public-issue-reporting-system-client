import { motion } from "framer-motion";
import { Shield, MapPin, Clock, Users } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white py-16 sm:py-20 px-4">
      <div className="max-w-11/12 mx-auto sm:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold  md:leading-tight">
            A Transparent Way to Report and Track Public Issues
          </h1>

          <p className="text-slate-400 mt-5 sm:mt-6 text-sm sm:text-lg leading-6 sm:leading-8">
            This system connects citizens and local authorities in one place.
            People can report infrastructure problems, track progress, and see
            real improvements happening in their area.
          </p>
        </motion.div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-12 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="p-2 sm:p-3 rounded-xl bg-cyan-500/10">
                <MapPin className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-lg sm:text-2xl font-semibold ">
                Location-Based Reporting
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Users can report issues with exact location details. This helps
              authorities identify and fix problems faster without confusion or
              delay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="p-2 sm:p-3 rounded-xl bg-emerald-500/10">
                <Clock className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-lg sm:text-2xl font-semibold ">
                Real-Time Tracking System
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Every issue goes through a clear status flow. Users can see what
              is being reviewed, what is in progress, and what is already
              solved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="p-2 sm:p-3 rounded-xl bg-violet-500/10">
                <Shield className="text-violet-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-lg sm:text-2xl font-semibold ">
                Transparent Process
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              All reports are publicly trackable, making the process more
              accountable and transparent between citizens and authorities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="p-2 sm:p-3 rounded-xl bg-amber-500/10">
                <Users className="text-amber-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-lg sm:text-2xl font-semibold">
                Community Driven System
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Citizens actively contribute to improving their surroundings by
              reporting issues and helping prioritize local infrastructure
              needs.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-16 sm:mt-24 text-center rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-slate-800 overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 via-slate-950 to-emerald-500/10" />
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold ">
              Smarter Reporting. Faster Action. Better Cities.
            </h2>

            <p className="text-slate-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-lg leading-6 sm:leading-8">
              When citizens report issues in real time and authorities respond
              with clarity, infrastructure stops breaking silently and starts
              improving visibly.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                to="/report-issues"
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 transition text-sm sm:text-base"
              >
                Report Issue
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                to="/all-issues"
                className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl transition text-sm sm:text-base"
              >
                Explore Issues
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
