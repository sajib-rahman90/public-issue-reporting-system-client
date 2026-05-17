import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PaymentInvoice from "../../../Components/PaymentInvoice";

const AdminPayments = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const { data = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/payments");
      return res.data;
    },
  });

  const filtered = data.filter((p) => {
    const s = search.toLowerCase();
    const matchSearch =
      p.customerName?.toLowerCase().includes(s) ||
      p.customerEmail?.toLowerCase().includes(s) ||
      p.transactionId?.toLowerCase().includes(s);

    const matchStatus = status ? p.paymentStatus === status : true;

    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Payments Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-xl">
          <p className="text-sm">Total Payments</p>
          <h2 className="text-2xl font-bold">{data.length}</h2>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-xl">
          <p className="text-sm">Total Amount</p>
          <h2 className="text-2xl font-bold">
            ৳ {data.reduce((sum, p) => sum + (p.amount || 0), 0)}
          </h2>
        </div>
      </div>
      <div className="flex gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded-lg"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
          <option value="Boosted">Boosted</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full min-w-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Transaction</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.customerName}</td>
                <td>{p.customerEmail}</td>
                <td>৳ {p.amount}</td>
                <td>{p.transactionId}</td>
                <td>{p.paymentStatus}</td>

                <td>
                  <PDFDownloadLink
                    document={<PaymentInvoice payment={p} />}
                    fileName={`invoice_${p.transactionId}.pdf`}
                  >
                    {({ loading }) =>
                      loading ? (
                        <span>Loading...</span>
                      ) : (
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                          Download
                        </button>
                      )
                    }
                  </PDFDownloadLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayments;
