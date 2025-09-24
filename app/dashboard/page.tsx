import Card from "@/components/common/Card";
import ChartCard from "@/components/common/ChartCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import sales from "@/data/sales.json";
import projects from "@/data/projects.json";
import customers from "@/data/customers.json";
import PageHeader from "@/components/common/PageHeader";
import Guard from "@/components/common/Guard";

function currency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function DashboardPage() {
  const totalSales = sales.reduce((a, s) => a + s.amount, 0);
  const kpis = [
    { title: "Total Projects", value: projects.length },
    { title: "Total Sales", value: sales.length },
    { title: "Customers", value: customers.length },
    { title: "Revenue", value: currency(totalSales) },
  ];

  const trend = [
    { month: "Jan", sales: 200000 },
    { month: "Feb", sales: 180000 },
    { month: "Mar", sales: 240000 },
    { month: "Apr", sales: 210000 },
    { month: "May", sales: 260000 },
    { month: "Jun", sales: 230000 },
  ];

  const recent = [
    { title: "Booking confirmed", by: "Alice Johnson", when: "2h ago" },
    { title: "New customer added", by: "Brian Lee", when: "5h ago" },
    { title: "Vendor invoice approved", by: "BuildPro", when: "1d ago" },
  ];

  return (
    <Guard permission="dashboard:view">
      <div className="space-y-6">
        <PageHeader title="Dashboard" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Card key={k.title} title={k.title}>
              <div className="text-2xl font-semibold">{k.value}</div>
              <div className="mt-2">
                <Badge tone="success">+4.2% MoM</Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ChartCard
              title="Sales Trend"
              subtitle="Last 6 months"
              type="line"
              data={trend}
              xKey="month"
              yKeys={[{ key: "sales", color: "#4f46e5", label: "Sales" }]}
            />
          </div>
          <Card title="Recent Activity" subtitle="Auto-generated dummy">
            <ul className="divide-y divide-gray-100">
              {recent.map((r, i) => (
                <li key={i} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{r.title}</div>
                    <div className="text-sm text-gray-500">{r.by}</div>
                  </div>
                  <span className="text-xs text-gray-500">{r.when}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button className="w-full" variant="secondary">View all</Button>
            </div>
          </Card>
        </div>
      </div>
    </Guard>
  );
}