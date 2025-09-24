import data from "@/data/products.json";
import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/ui/Badge";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const p = data.find((x) => x.id === params.id);
  if (!p) return <div className="text-sm text-gray-500">Product not found.</div>;
  return (
    <div className="space-y-4">
      <PageHeader title={p.title} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <img
            src={`https://picsum.photos/seed/${encodeURIComponent(p.id)}/1200/600`}
            alt={p.title}
            className="w-full h-64 object-cover rounded-xl border border-gray-100"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xl font-semibold">${p.price.toLocaleString()}</div>
            <Badge tone="muted">{p.type}</Badge>
          </div>
          <div className="text-sm text-gray-600 mt-2">{p.location}</div>
        </Card>
        <Card title="Features">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Prime location</li>
            <li>Secure documentation</li>
            <li>Flexible payment plans</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}