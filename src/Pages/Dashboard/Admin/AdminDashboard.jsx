import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import {
  FaMoneyBill,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";
const COLORS = ["#22c55e", "#facc15", "#ef4444"];
const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/dashboard-stats");
      return res.data;
    },
  });

  if (isLoading) {
    <LoaddingSpinner />;
  }

  return (
    <div className="p-6 space-y-10">
      {/* All cards section */}
      <h2 className="text-3xl text-center font-bold mb-8 md:text-4xl text-black ">
        Admin Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-blue-500 text-white rounded-3xl p-6 shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Total Issues</p>
              <h2 className="text-3xl font-bold mt-2">{data.totalIssues}</h2>
            </div>
            <FaClipboardList className="text-3xl" />
          </div>
        </div>

        <div className="bg-green-500 text-white rounded-3xl p-6 shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Resolved</p>
              <h2 className="text-3xl font-bold mt-2">{data.resolvedIssues}</h2>
            </div>
            <FaCheckCircle className="text-3xl" />
          </div>
        </div>

        <div className="bg-yellow-500 text-white rounded-3xl p-6 shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Pending</p>
              <h2 className="text-3xl font-bold mt-2">{data.pendingIssues}</h2>
            </div>
            <FaClock className="text-3xl" />
          </div>
        </div>

        <div className="bg-red-500 text-white rounded-3xl p-6 shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Rejected</p>
              <h2 className="text-3xl font-bold mt-2">{data.rejectedIssues}</h2>
            </div>
            <FaTimesCircle className="text-3xl" />
          </div>
        </div>

        <div className="bg-purple-500 text-white rounded-3xl p-6 shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Payments</p>
              <h2 className="text-3xl font-bold mt-2">৳ {data.totalPayment}</h2>
            </div>
            <FaMoneyBill className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div>
        {/* chart */}
        <div className="bg-white p-5 rounded-3xl shadow">
          <h3 className="font-bold mb-5">Issue Overview</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.chartData?.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/*  Latest sectoin */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Issues */}
        <div className="bg-white p-5 rounded-3xl shadow">
          <h2 className="font-bold mb-4">Latest Issues</h2>

          {data.latestIssues?.map((issue) => (
            <div key={issue._id} className="border-b py-3">
              <p className="font-medium">{issue.title}</p>
              <span className="text-sm text-gray-500">{issue.status}</span>
            </div>
          ))}
        </div>

        {/* Payments */}
        <div className="bg-white p-5 rounded-3xl shadow">
          <h2 className="font-bold mb-4">Latest Payments</h2>

          {data.latestPayments?.map((payment) => (
            <div key={payment._id} className="border-b py-3">
              <p>{payment.customerName}</p>
              <span className="text-sm text-gray-500">৳ {payment.amount}</span>
            </div>
          ))}
        </div>

        {/* Users */}
        <div className="bg-white p-5 rounded-3xl shadow">
          <h2 className="font-bold mb-4">New Users</h2>

          {data.latestUsers?.map((user) => (
            <div key={user._id} className="border-b py-3">
              <p>{user.name}</p>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
