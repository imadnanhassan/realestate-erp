import ChartCard from "@/components/common/ChartCard";
import Card from "@/components/common/Card";

const monthlyPO = [
  { month: "Jan", value: 4 },
  { month: "Feb", value: 3 },
  { month: "Mar", value: 6 },
  { month: "Apr", value: 5 },
];

const spend = [
  { vendor: "Steel & Co", amount: 18000 },
  { vendor: "GreenScape Supplies", amount: 4200 },
  { vendor: "BuildPro Contractors", amount: 12000 },
];

export default function ProcurementReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Purchase Reports</h1>
      <ChartCard title="PO Count by Month" type="bar" data={monthlyPO} xKey="month" yKeys={[{ key: "value", color: "#4f46e5" }]} />
      <Card title="Vendor Spend">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2 px-3">Vendor</th>
              <th className="py-2 px-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {spend.map((s) => (
              <tr key={s.vendor} className="border-t border-gray-100">
                <td className="py-2 px-3">{s.vendor}</td>
                <td className="py-2 px-3">${s.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}