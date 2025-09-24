import Card from "@/components/common/Card";

const payroll = [
  { id: "e1", name: "Emma Wilson", base: 3000, bonus: 300, deductions: 100 },
  { id: "e2", name: "Liam Brown", base: 2600, bonus: 0, deductions: 120 },
  { id: "e3", name: "Olivia Davis", base: 2400, bonus: 200, deductions: 80 },
];

export default function PayrollPage() {
  const total = payroll.reduce((a, p) => a + (p.base + p.bonus - p.deductions), 0);
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Payroll</h1>
      <Card title="Summary">
        <div className="text-sm">Total Payout: <span className="font-semibold">${total.toLocaleString()}</span></div>
      </Card>
      <Card title="Payroll Details">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Employee</th>
                <th className="py-2 px-3">Base</th>
                <th className="py-2 px-3">Bonus</th>
                <th className="py-2 px-3">Deductions</th>
                <th className="py-2 px-3">Net</th>
              </tr>
            </thead>
            <tbody>
              {payroll.map((p) => {
                const net = p.base + p.bonus - p.deductions;
                return (
                  <tr key={p.id} className="border-t border-gray-100">
                    <td className="py-2 px-3">{p.name}</td>
                    <td className="py-2 px-3">${p.base.toLocaleString()}</td>
                    <td className="py-2 px-3">${p.bonus.toLocaleString()}</td>
                    <td className="py-2 px-3">${p.deductions.toLocaleString()}</td>
                    <td className="py-2 px-3 font-medium">${net.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}