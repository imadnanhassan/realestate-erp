import Card from "@/components/common/Card";
import employees from "@/data/employees.json";

export default function HRPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Employee List</h1>
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {employees.map((e) => (
            <div key={e.id} className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3 bg-white">
              <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold">
                {e.name.split(" ").map((x: string) => x[0]).join("").slice(0,2)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{e.name}</div>
                <div className="text-sm text-gray-600">{e.role}</div>
                <div className="text-xs text-gray-500">Joined {e.joinDate}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}