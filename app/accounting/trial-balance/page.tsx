import Card from "@/components/common/Card";
import ledger from "@/data/accounting.json";

function computeTrialBalance() {
  const map = new Map<string, { debit: number; credit: number }>();
  for (const t of ledger as any[]) {
    const acc = map.get(t.account) || { debit: 0, credit: 0 };
    acc.debit += t.debit || 0;
    acc.credit += t.credit || 0;
    map.set(t.account, acc);
  }
  const rows = Array.from(map.entries()).map(([account, v]) => ({ account, debit: v.debit, credit: v.credit }));
  const totals = rows.reduce((a, r) => ({ debit: a.debit + r.debit, credit: a.credit + r.credit }), { debit: 0, credit: 0 });
  return { rows, totals };
}

export default function TrialBalancePage() {
  const { rows, totals } = computeTrialBalance();
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Trial Balance</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">Account</th>
                <th className="py-2 px-3">Debit</th>
                <th className="py-2 px-3">Credit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.account} className="border-t border-gray-100">
                  <td className="py-2 px-3">{r.account}</td>
                  <td className="py-2 px-3">{r.debit ? "$" + r.debit.toLocaleString() : "-"}</td>
                  <td className="py-2 px-3">{r.credit ? "$" + r.credit.toLocaleString() : "-"}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200 font-semibold">
                <td className="py-2 px-3">Total</td>
                <td className="py-2 px-3">${totals.debit.toLocaleString()}</td>
                <td className="py-2 px-3">${totals.credit.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}