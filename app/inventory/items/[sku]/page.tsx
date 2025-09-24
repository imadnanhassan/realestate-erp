import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";

export default function InventoryItemDetail({ params }: { params: { sku: string } }) {
  const sku = params.sku;

  return (
    <div className="space-y-4">
      <PageHeader title={`Item: ${sku}`} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Overview">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">SKU</dt>
              <dd className="font-medium">{sku}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="font-medium">Warehouse A</dd>
            </div>
            <div>
              <dt className="text-gray-500">On Hand</dt>
              <dd className="font-medium">520 bag</dd>
            </div>
            <div>
              <dt className="text-gray-500">Min Level</dt>
              <dd className="font-medium">200 bag</dd>
            </div>
          </dl>
        </Card>
        <Card title="Recent Movements">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Type</th>
                <th className="py-2 px-3">Qty</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Ref</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "mv1", type: "IN", qty: 200, date: "2025-02-10", ref: "PO-1005" },
                { id: "mv2", type: "OUT", qty: 50, date: "2025-02-11", ref: "RQ-1012" },
              ].map((m) => (
                <tr key={m.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{m.id}</td>
                  <td className="py-2 px-3">{m.type}</td>
                  <td className="py-2 px-3">{m.qty}</td>
                  <td className="py-2 px-3">{m.date}</td>
                  <td className="py-2 px-3">{m.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}