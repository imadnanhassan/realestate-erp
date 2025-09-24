import Card from "@/components/common/Card";

const requisitions = [
  { id: "rq1", item: "Cement (100 bags)", requester: "Noah Miller", date: "2025-02-01", status: "Pending" },
  { id: "rq2", item: "Steel Rods", requester: "Build Team A", date: "2025-02-02", status: "Approved" },
];

const purchaseOrders = [
  { id: "po1", vendor: "Steel & Co", amount: 18000, date: "2025-02-05", status: "Issued" },
  { id: "po2", vendor: "GreenScape Supplies", amount: 4200, date: "2025-02-08", status: "Delivered" },
];

export default function ProcurementPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Procurement</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Purchase Requisitions">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Item</th>
                <th className="py-2 px-3">Requester</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {requisitions.map((r) => (
                <tr key={r.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{r.id}</td>
                  <td className="py-2 px-3">{r.item}</td>
                  <td className="py-2 px-3">{r.requester}</td>
                  <td className="py-2 px-3">{r.date}</td>
                  <td className="py-2 px-3">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card title="Purchase Orders">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Vendor</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((p) => (
                <tr key={p.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{p.id}</td>
                  <td className="py-2 px-3">{p.vendor}</td>
                  <td className="py-2 px-3">${p.amount.toLocaleString()}</td>
                  <td className="py-2 px-3">{p.date}</td>
                  <td className="py-2 px-3">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}