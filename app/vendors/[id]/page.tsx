import vendors from "@/data/vendors.json";
import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import { Star } from "lucide-react";

export default function VendorDetail({ params }: { params: { id: string } }) {
  const v = vendors.find((x) => x.id === params.id);
  if (!v) return <div className="text-sm text-gray-500">Vendor not found.</div>;

  return (
    <div className="space-y-4">
      <PageHeader title={`Vendor: ${v.name}`} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Overview" className="lg:col-span-2">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Contact</dt>
              <dd className="font-medium">{v.contact}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Rating</dt>
              <dd className="font-medium inline-flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" /> {v.rating.toFixed(1)}
              </dd>
            </div>
          </dl>
        </Card>
        <Card title="Documents">
          <div className="text-sm text-gray-600">Upload agreements, certificates, etc.</div>
        </Card>
      </div>
    </div>
  );
}