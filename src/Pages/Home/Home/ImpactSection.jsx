import { FaUsers, FaCity, FaCheckCircle, FaChartLine } from "react-icons/fa";

const stats = [
  {
    id: 1,
    label: "Total Users",
    value: "5,000+",
    icon: <FaUsers />,
  },
  {
    id: 2,
    label: "Issues Reported",
    value: "12,000+",
    icon: <FaCity />,
  },
  {
    id: 3,
    label: "Resolved Cases",
    value: "8,500+",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    label: "Success Rate",
    value: "92%",
    icon: <FaChartLine />,
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Community Impact</h2>

          <p className="text-slate-300 mt-3">
            Real data from our platform activity
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition"
            >
              <div className="text-3xl text-orange-400 flex justify-center mb-3">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">{item.value}</h3>

              <p className="text-sm text-slate-300 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ImpactSection;
