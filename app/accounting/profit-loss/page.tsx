import Card from "@/components/common/Card";
import ledger from "@/data/accounting.json";

function computePL() {
  let revenue = 0;
  let cogs = 0;
  let expenses = 0;
  for (const t of ledger as any[]) {
    if (t.account === "Sales") revenue += t.credit || 0;
    if (t.account === "Expense") expenses += t.debit || 0;
  }
  const grossProfit = revenue - cogs;
  const netProfit = grossProfit - expenses;
  return { revenue, cogs, expenses, grossProfit, netProfit };
}

export default function ProfitLossPage() {
  const pl = computePL();
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Profit & Loss Statement</h1>
      <Card>
        <table className="min-w-full text-sm">
          <tbody>
            <tr>
              <td className="py-2 px-3 text-gray-600">Revenue</td>
              <td className="py-2 px-3 font-medium">${pl.revenue.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-gray-600">COGS</td>
              <td className="py-2 px-3 font-medium">${pl.cogs.toLocaleString()}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-2 px-3 font-semibold">Gross Profit</td>
              <td className="py-2 px-3 font-semibold">${pl.grossProfit.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-gray-600">Operating Expenses</td>
              <td className="py-2 px-3 font-medium">${pl.expenses.toLocaleString()}</td>
            </tr>
            <tr className="border-t-2 border-gray-300">
              <td className="py-2 px-3 font-semibold">Net Profit</td>
              <td className="py-2 px-3 font-semibold">${pl.netProfit.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}