import { FaUsers, FaCity, FaCheckCircle, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-11/12 mx-auto sm:px-4">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Community Impact</h2>
          <p className="text-slate-300 mt-3">
            Real data from our platform activity
          </p>
        </motion.div>
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition"
          >
            <div className="text-3xl text-orange-400 flex justify-center mb-3">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-bold">5,000+</h3>
            <p className="text-sm text-slate-300 mt-1">Total Users</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition"
          >
            <div className="text-3xl text-orange-400 flex justify-center mb-3">
              <FaCity />
            </div>
            <h3 className="text-2xl font-bold">12,000+</h3>
            <p className="text-sm text-slate-300 mt-1">Issues Reported</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition"
          >
            <div className="text-3xl text-orange-400 flex justify-center mb-3">
              <FaCheckCircle />
            </div>
            <h3 className="text-2xl font-bold">8,500+</h3>
            <p className="text-sm text-slate-300 mt-1">Resolved Cases</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition"
          >
            <div className="text-3xl text-orange-400 flex justify-center mb-3">
              <FaChartLine />
            </div>
            <h3 className="text-2xl font-bold">92%</h3>
            <p className="text-sm text-slate-300 mt-1">Success Rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
