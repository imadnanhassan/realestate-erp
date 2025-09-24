import Card from "@/components/common/Card";

const performance = [
  { vendor: "BuildPro Contractors", onTimeDelivery: 96, qualityScore: 92, disputes: 1 },
  { vendor: "Steel & Co", onTimeDelivery: 91, qualityScore: 88, disputes: 3 },
  { vendor: "GreenScape Supplies", onTimeDelivery: 98, qualityScore: 94, disputes: 0 },
];

export default function VendorPerformancePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Supplier Rating & Performance</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Vendor</th>
                <th className="py-2 px-3">On-time Delivery</th>
                <th className="py-2 px-3">Quality Score</th>
                <th className="py-2 px-3">Disputes</th>
              </tr>
            </thead>
            <tbody>
              {performance.map((p) => (
                <tr key={p.vendor} className="border-t border-gray-100">
                  <td className="py-2 px-3">{p.vendor}</td>
                  <td className="py-2 px-3">{p.onTimeDelivery}%</td>
                  <td className="py-2 px-3">{p.qualityScore}%</td>
                  <td className="py-2 px-3">{p.disputes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}