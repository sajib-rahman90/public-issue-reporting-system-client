import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const CitizenDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["citizen-stats", user?.email],
    enabled: !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(
        `/citizen-dashboard-stats/${user?.email}`,
      );

      return res.data;
    },
  });
  // console.log(stats);

  const chartData = [
    {
      name: "Pending",
      value: stats.pendingIssues || 0,
    },
    {
      name: "In Progress",
      value: stats.inProgressIssues || 0,
    },
    {
      name: "Resolved",
      value: stats.resolvedIssues || 0,
    },
  ];

  const COLORS = ["#facc15", "#38bdf8", "#22c55e"];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8">Citizen Dashboard</h2>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold">Total Issues</h3>

          <p className="text-3xl font-bold mt-3">{stats?.totalIssues || 0}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold">Pending</h3>

          <p className="text-3xl font-bold mt-3">{stats?.pendingIssues || 0}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold">In Progress</h3>

          <p className="text-3xl font-bold mt-3">
            {stats?.inProgressIssues || 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold">Resolved</h3>

          <p className="text-3xl font-bold mt-3">
            {stats?.resolvedIssues || 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold">Payments</h3>

          <p className="text-3xl font-bold mt-3">{stats?.totalPayments || 0}</p>
        </div>
      </div>

      {/* Chart */}

      <div className="bg-white shadow rounded-xl p-6 mt-10">
        <h3 className="text-2xl font-bold mb-5">Issue Status Overview</h3>

        <div className="w-full md:w-8/12 h-87.5 md:h-[450px] mx-auto">
          {chartData.length > 0 && (
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
