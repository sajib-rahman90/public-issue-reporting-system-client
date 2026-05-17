import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-11/12 mx-auto sm:px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by the Community
          </h2>
          <p className="text-gray-400 mt-3">
            Real feedback from people using the platform
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              “I reported a broken streetlight and it got fixed within 48 hours.
              Super fast response.”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/60?img=12"
                alt="user"
                className="w-10 h-10 rounded-full border border-white/20"
              />
              <div className="text-orange-400 font-semibold">Rahim Uddin</div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              “Finally a system where we can actually track civic problems in
              real time.”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/60?img=32"
                alt="user"
                className="w-10 h-10 rounded-full border border-white/20"
              />
              <div className="text-orange-400 font-semibold">Ayesha Khan</div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              “The transparency is amazing. I can see every step from report to
              resolution.”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/60?img=45"
                alt="user"
                className="w-10 h-10 rounded-full border border-white/20"
              />
              <div className="text-orange-400 font-semibold">
                Shamima Hossain
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
