import Card from "@/components/common/Card";
import ledger from "@/data/accounting.json";

const cheques = [
  { id: "chq-1001", bank: "ABC Bank", payee: "BuildPro", amount: 12000, date: "2025-02-01", status: "Issued" },
  { id: "chq-1002", bank: "Metro Bank", payee: "Steel & Co", amount: 18000, date: "2025-02-03", status: "Cleared" }
];

export default function AccountingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Accounting</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="General Ledger">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Account</th>
                  <th className="py-2 px-3">Description</th>
                  <th className="py-2 px-3">Debit</th>
                  <th className="py-2 px-3">Credit</th>
                </tr>
              </thead>
              <tbody>
                {ledger.map((t) => (
                  <tr key={t.id} className="border-t border-gray-100">
                    <td className="py-2 px-3">{t.date}</td>
                    <td className="py-2 px-3">{t.account}</td>
                    <td className="py-2 px-3">{t.description}</td>
                    <td className="py-2 px-3">{t.debit ? "$" + t.debit.toLocaleString() : "-"}</td>
                    <td className="py-2 px-3">{t.credit ? "$" + t.credit.toLocaleString() : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card title="Cheque Manager">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 px-3">Cheque No.</th>
                  <th className="py-2 px-3">Bank</th>
                  <th className="py-2 px-3">Payee</th>
                  <th className="py-2 px-3">Amount</th>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {cheques.map((c) => (
                  <tr key={c.id} className="border-t border-gray-100">
                    <td className="py-2 px-3">{c.id}</td>
                    <td className="py-2 px-3">{c.bank}</td>
                    <td className="py-2 px-3">{c.payee}</td>
                    <td className="py-2 px-3">${c.amount.toLocaleString()}</td>
                    <td className="py-2 px-3">{c.date}</td>
                    <td className="py-2 px-3">{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}