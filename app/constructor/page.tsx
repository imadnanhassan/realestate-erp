import Card from "@/components/common/Card";

const contractors = [
  { id: "ctr-1", name: "BuildPro Contractors", projects: 3, rating: 4.6 },
  { id: "ctr-2", name: "Urban Construct", projects: 1, rating: 4.2 }
];

const tasks = [
  { id: "tsk-101", project: "Skyline Residency", title: "Pour foundation", assignee: "BuildPro", due: "2025-02-20", status: "In Progress" },
  { id: "tsk-102", project: "Green Meadows", title: "Land leveling", assignee: "Urban Construct", due: "2025-02-25", status: "Pending" }
];

export default function ConstructorPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Constructor</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Contractors">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Projects</th>
                <th className="py-2 px-3">Rating</th>
              </tr>
            </thead>
            <tbody>
              {contractors.map((c) => (
                <tr key={c.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{c.name}</td>
                  <td className="py-2 px-3">{c.projects}</td>
                  <td className="py-2 px-3">{c.rating.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card title="Site Tasks">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Project</th>
                <th className="py-2 px-3">Task</th>
                <th className="py-2 px-3">Assignee</th>
                <th className="py-2 px-3">Due</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => (
                <tr key={t.id} className="border-t border-gray-100">
                  <td className="py-2 px-3">{t.project}</td>
                  <td className="py-2 px-3">{t.title}</td>
                  <td className="py-2 px-3">{t.assignee}</td>
                  <td className="py-2 px-3">{t.due}</td>
                  <td className="py-2 px-3">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}