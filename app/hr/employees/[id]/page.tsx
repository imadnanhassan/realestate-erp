import employees from "@/data/employees.json";
import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";

export default function EmployeeDetail({ params }: { params: { id: string } }) {
  const e = employees.find((x) => x.id === params.id);
  if (!e) return <div className="text-sm text-gray-500">Employee not found.</div>;

  return (
    <div className="space-y-4">
      <PageHeader title={`Employee: ${e.name}`} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Profile" className="lg:col-span-2">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Name</dt>
              <dd className="font-medium">{e.name}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Role</dt>
              <dd className="font-medium">{e.role}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Join Date</dt>
              <dd className="font-medium">{e.joinDate}</dd>
            </div>
          </dl>
        </Card>
        <Card title="Documents">
          <div className="text-sm text-gray-600">Upload NID, agreement, etc.</div>
        </Card>
      </div>
    </div>
  );
}