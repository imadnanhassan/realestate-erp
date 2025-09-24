import Card from "@/components/common/Card";
import Button from "@/components/ui/Button";

const requisitions = [
  { id: "RQ-1001", item: "Cement OPC", qty: 200, unit: "bag", requester: "Noah Miller", date: "2025-02-11" },
  { id: "RQ-1002", item: "Steel Rod 12mm", qty: 150, unit: "kg", requester: "Site B", date: "2025-02-12" },
];

export default function RequisitionConfirmPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Requisition Confirm</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Item</th>
                <th className="py-2 px-3">Qty</th>
                <th className="py-2 px-3">Requester</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {requisitions.map((r) => (
                <tr key={r.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{r.id}</td>
                  <td className="py-2 px-3">{r.item}</td>
                  <td className="py-2 px-3">{r.qty} {r.unit}</td>
                  <td className="py-2 px-3">{r.requester}</td>
                  <td className="py-2 px-3">{r.date}</td>
                  <td className="py-2 px-3">
                    <div className="flex gap-2">
                      <Button className="px-3 py-1">Confirm</Button>
                      <Button variant="secondary" className="px-3 py-1">Reject</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}