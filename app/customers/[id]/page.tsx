import customers from "@/data/customers.json";
import Card from "@/components/common/Card";
import FileUploader from "@/components/common/FileUploader";

export default function CustomerDetail({ params }: { params: { id: string } }) {
  const c = customers.find((x) => x.id === params.id);
  if (!c) return <div className="text-sm text-gray-500">Customer not found.</div>;

  const bookings = [
    { id: "s1", project: "Skyline Residency", amount: 120000, status: "Confirmed" },
    { id: "s4", project: "City Central", amount: 90000, status: "Pending" }
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">{c.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Profile" className="lg:col-span-2">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Phone</dt>
              <dd className="font-medium">{c.phone}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Email</dt>
              <dd className="font-medium">{c.email}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="font-medium">{c.status}</dd>
            </div>
          </dl>
        </Card>
        <Card title="KYC Documents">
          <FileUploader />
        </Card>
      </div>
      <Card title="Bookings">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Booking ID</th>
                <th className="py-2 px-3">Project</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{b.id}</td>
                  <td className="py-2 px-3">{b.project}</td>
                  <td className="py-2 px-3">${b.amount.toLocaleString()}</td>
                  <td className="py-2 px-3">{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}