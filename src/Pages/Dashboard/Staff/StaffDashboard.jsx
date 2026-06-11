import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";

const StaffDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data = {}, isLoading } = useQuery({
    queryKey: ["staffDashboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/staff/dashboard");
      return res.data;
    },
  });

  const { assigned = 0, resolved = 0, inProgress = 0, todayTasks = [] } = data;

  // chart data
  const chartData = [
    { name: "Assigned", value: assigned },
    { name: "In Progress", value: inProgress },
    { name: "Resolved", value: resolved },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#10b981"];

  if (isLoading) {
    return <LoaddingSpinner />;
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl text-center font-bold mb-8 md:text-4xl text-base-content">
        Staff Dashboard Overview
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">Assigned Issues</h3>
          <p className="text-3xl font-bold">{assigned}</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">In Progress</h3>
          <p className="text-3xl font-bold">{inProgress}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">Resolved</h3>
          <p className="text-3xl font-bold">{resolved}</p>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-10 bg-base-100 p-6 rounded-xl shadow border border-base-300">
        <h3 className="text-lg font-bold text-center text-base-content mb-4">
          Issue Statistics
        </h3>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--fallback-b1,oklch(var(--b1)))",
                  borderColor: "var(--fallback-b3,oklch(var(--b3)))",
                  color: "var(--fallback-bc,oklch(var(--bc)))",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TODAY TASK */}
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-4">Today's Tasks</h3>

        <div className="bg-base-100 rounded-xl shadow p-4  border border-base-300">
          {todayTasks.length === 0 ? (
            <p className="text-base-content/60">No tasks for today</p>
          ) : (
            <ul className="space-y-2">
              {todayTasks.map((task) => (
                <li
                  key={task._id}
                  className="p-3 border border-base-300 rounded"
                >
                  {task.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
