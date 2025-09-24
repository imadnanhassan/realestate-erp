import sales from "@/data/sales.json";
import Card from "@/components/common/Card";

export default function SaleDetail({ params }: { params: { id: string } }) {
  const s = sales.find((x) => x.id === params.id);
  if (!s) return <div className="text-sm text-gray-500">Booking not found.</div>;

  const emi = Array.from({ length: 6 }).map((_, i) => ({
    no: i + 1,
    dueDate: `2025-0${i + 3}-10`,
    amount: Math.round(s.amount / 6),
    status: i < 2 ? "Paid" : "Due",
  }));

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Booking {s.id}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Overview" className="lg:col-span-2">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Project</dt>
              <dd className="font-medium">{s.project}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Customer</dt>
              <dd className="font-medium">{s.customer}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Amount</dt>
              <dd className="font-medium">${s.amount.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="font-medium">{s.status}</dd>
            </div>
          </dl>
        </Card>
        <Card title="EMI Plan" subtitle="Dummy installments">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">Due Date</th>
                  <th className="py-2 px-3">Amount</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {emi.map((e) => (
                  <tr key={e.no} className="border-t border-gray-100">
                    <td className="py-2 px-3">{e.no}</td>
                    <td className="py-2 px-3">{e.dueDate}</td>
                    <td className="py-2 px-3">${e.amount.toLocaleString()}</td>
                    <td className="py-2 px-3">{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}