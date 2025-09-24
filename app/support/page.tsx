import Card from "@/components/common/Card";
import Button from "@/components/ui/Button";

const tickets = [
  { id: "t-1001", customer: "Alice Johnson", subject: "Agreement copy request", priority: "Low", status: "Open", createdAt: "2025-02-01" },
  { id: "t-1002", customer: "Brian Lee", subject: "Payment schedule clarification", priority: "Medium", status: "In Progress", createdAt: "2025-02-03" },
  { id: "t-1003", customer: "Carla Gomez", subject: "Booking modification", priority: "High", status: "Resolved", createdAt: "2025-02-05" },
];

export default function SupportPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Customer Support / Tickets</h1>
        <Button>New Ticket</Button>
      </div>
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Ticket</th>
                <th className="py-2 px-3">Customer</th>
                <th className="py-2 px-3">Subject</th>
                <th className="py-2 px-3">Priority</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Created</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{t.id}</td>
                  <td className="py-2 px-3">{t.customer}</td>
                  <td className="py-2 px-3">{t.subject}</td>
                  <td className="py-2 px-3">{t.priority}</td>
                  <td className="py-2 px-3">{t.status}</td>
                  <td className="py-2 px-3">{t.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}