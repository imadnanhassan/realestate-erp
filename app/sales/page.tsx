"use client";

import DataTable from "@/components/common/DataTable";
import sales from "@/data/sales.json";
import Link from "next/link";
import { useMemo } from "react";

export default function SalesPage() {
  const cols = useMemo(() => [
    { header: "Booking ID", accessor: "id", cell: (r: any) => <Link href={`/sales/${r.id}`} className="text-accent underline">{r.id}</Link> },
    { header: "Project", accessor: "project" },
    { header: "Customer", accessor: "customer" },
    { header: "Amount", accessor: "amount", cell: (r: any) => "$" + r.amount.toLocaleString() },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
  ], []);
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Booking Management</h1>
      <DataTable data={sales} columns={cols} />
    </div>
  );
}