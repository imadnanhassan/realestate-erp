import ChartCard from "@/components/common/ChartCard";
import Card from "@/components/common/Card";
import sales from "@/data/sales.json";

const monthly = [
  { month: "Jan", bookings: 10, revenue: 200000 },
  { month: "Feb", bookings: 8, revenue: 180000 },
  { month: "Mar", bookings: 12, revenue: 240000 },
  { month: "Apr", bookings: 9, revenue: 210000 },
  { month: "May", bookings: 14, revenue: 260000 },
  { month: "Jun", bookings: 11, revenue: 230000 }
];

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Sales Report</h1>
      <ChartCard
        title="Revenue by Month"
        type="bar"
        data={monthly}
        xKey="month"
        yKeys={[{ key: "revenue", color: "#4f46e5", label: "Revenue" }]}
      />
      <Card title="Recent Sales">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Project</th>
                <th className="py-2 px-3">Customer</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((s) => (
                <tr key={s.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{s.id}</td>
                  <td className="py-2 px-3">{s.project}</td>
                  <td className="py-2 px-3">{s.customer}</td>
                  <td className="py-2 px-3">${s.amount.toLocaleString()}</td>
                  <td className="py-2 px-3">{s.status}</td>
                  <td className="py-2 px-3">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}