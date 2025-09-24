import Card from "@/components/common/Card";

const commissions = [
  { id: "cm-1001", agent: "Agent A", booking: "s1", amount: 6000, rate: "5%", status: "Pending" },
  { id: "cm-1002", agent: "Broker B", booking: "s3", amount: 8000, rate: "5%", status: "Approved" }
];

export default function CommissionPage() {
  const total = commissions.reduce((a, c) => a + c.amount, 0);
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Commission Tracking</h1>
      <Card title="Summary">
        <div className="text-sm">Total Commission: <span className="font-semibold">${total.toLocaleString()}</span></div>
      </Card>
      <Card title="Commissions">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Agent</th>
                <th className="py-2 px-3">Booking</th>
                <th className="py-2 px-3">Rate</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((c) => (
                <tr key={c.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{c.id}</td>
                  <td className="py-2 px-3">{c.agent}</td>
                  <td className="py-2 px-3">{c.booking}</td>
                  <td className="py-2 px-3">{c.rate}</td>
                  <td className="py-2 px-3">${c.amount.toLocaleString()}</td>
                  <td className="py-2 px-3">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}