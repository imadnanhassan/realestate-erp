import Card from "@/components/common/Card";

const attendance = [
  { id: "e1", name: "Emma Wilson", date: "2025-02-10", status: "Present" },
  { id: "e2", name: "Liam Brown", date: "2025-02-10", status: "Present" },
  { id: "e3", name: "Olivia Davis", date: "2025-02-10", status: "Absent" },
];

export default function AttendancePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Attendance</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Employee</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((a) => (
                <tr key={a.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{a.name}</td>
                  <td className="py-2 px-3">{a.date}</td>
                  <td className="py-2 px-3">{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}