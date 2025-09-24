import Card from "@/components/common/Card";
import ledger from "@/data/accounting.json";

function computeBS() {
  let assets = 0;
  let liabilities = 0;
  let revenue = 0;
  let expenses = 0;

  for (const t of ledger as any[]) {
    if (t.account === "Bank") assets += (t.debit || 0) - (t.credit || 0);
    if (t.account === "Sales") revenue += t.credit || 0;
    if (t.account === "Expense") expenses += t.debit || 0;
  }
  const equity = revenue - expenses;
  return { assets, liabilities, equity };
}

export default function BalanceSheetPage() {
  const bs = computeBS();
  const totalLAndE = bs.liabilities + bs.equity;

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Balance Sheet</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Assets">
          <table className="min-w-full text-sm">
            <tbody>
              <tr>
                <td className="py-2 px-3 text-gray-600">Cash and Bank</td>
                <td className="py-2 px-3 font-medium">${bs.assets.toLocaleString()}</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-3 font-semibold">Total Assets</td>
                <td className="py-2 px-3 font-semibold">${bs.assets.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card title="Liabilities & Equity">
          <table className="min-w-full text-sm">
            <tbody>
              <tr>
                <td className="py-2 px-3 text-gray-600">Total Liabilities</td>
                <td className="py-2 px-3 font-medium">${bs.liabilities.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-gray-600">Equity (Retained Earnings)</td>
                <td className="py-2 px-3 font-medium">${bs.equity.toLocaleString()}</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-3 font-semibold">Liabilities + Equity</td>
                <td className="py-2 px-3 font-semibold">${totalLAndE.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}