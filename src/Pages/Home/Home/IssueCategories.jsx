import { motion } from "framer-motion";
import { FaLightbulb, FaRoad, FaTint, FaTrash } from "react-icons/fa";

const categories = [
  {
    icon: <FaLightbulb size={32} />,
    title: "Broken Streetlights",
    description:
      "Report damaged or non-functional streetlights to improve road safety.",
  },
  {
    icon: <FaRoad size={32} />,
    title: "Road Damage",
    description:
      "Identify potholes and damaged roads that require urgent repair.",
  },
  {
    icon: <FaTint size={32} />,
    title: "Water Leakage",
    description: "Notify authorities about water supply leaks and wastage.",
  },
  {
    icon: <FaTrash size={32} />,
    title: "Garbage Overflow",
    description: "Report uncollected waste and overflowing garbage bins.",
  },
];

const IssueCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-base-200">
      <div className="max-w-11/12 mx-auto sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Issues You Can Report
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            Citizens can easily report various public infrastructure issues
            affecting their communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="card bg-white border border-base-300 rounded-3xl hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="text-primary mb-3">{item.icon}</div>

                <h3 className="text-lg md:text-xl font-semibold ">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssueCategories;
