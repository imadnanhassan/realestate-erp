import Card from "@/components/common/Card";

const materials = [
  { sku: "CEM-OPC", name: "Cement OPC", stock: 520, unit: "bag", min: 200, location: "Warehouse A" },
  { sku: "STEEL-12", name: "Steel Rod 12mm", stock: 1200, unit: "kg", min: 800, location: "Warehouse B" },
  { sku: "BRICK", name: "Bricks", stock: 30000, unit: "pcs", min: 20000, location: "Yard" },
];

const movements = [
  { id: "mv1", sku: "CEM-OPC", type: "IN", qty: 200, date: "2025-02-10", ref: "PO-1005" },
  { id: "mv2", sku: "STEEL-12", type: "OUT", qty: 150, date: "2025-02-11", ref: "RQ-1012" }
];

export default function InventoryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Material Inventory</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Stock Overview">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 px-3">SKU</th>
                  <th className="py-2 px-3">Item</th>
                  <th className="py-2 px-3">Stock</th>
                  <th className="py-2 px-3">Min Level</th>
                  <th className="py-2 px-3">Location</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => (
                  <tr key={m.sku} className="border-t border-gray-100">
                    <td className="py-2 px-3">{m.sku}</td>
                    <td className="py-2 px-3">{m.name}</td>
                    <td className="py-2 px-3">{m.stock} {m.unit}</td>
                    <td className="py-2 px-3">{m.min} {m.unit}</td>
                    <td className="py-2 px-3">{m.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card title="Stock Movements">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 px-3">ID</th>
                  <th className="py-2 px-3">SKU</th>
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Qty</th>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Ref</th>
                </tr>
              </thead>
              <tbody>
                {movements.map((mv) => (
                  <tr key={mv.id} className="border-t border-gray-100">
                    <td className="py-2 px-3">{mv.id}</td>
                    <td className="py-2 px-3">{mv.sku}</td>
                    <td className="py-2 px-3">{mv.type}</td>
                    <td className="py-2 px-3">{mv.qty}</td>
                    <td className="py-2 px-3">{mv.date}</td>
                    <td className="py-2 px-3">{mv.ref}</td>
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