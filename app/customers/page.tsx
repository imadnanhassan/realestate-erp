"use client";

import DataTable from "@/components/common/DataTable";
import customers from "@/data/customers.json";
import Link from "next/link";
import { useMemo } from "react";
import Button from "@/components/ui/Button";

export default function CustomersPage() {
  const cols = useMemo(() => [
    { header: "Name", accessor: "name", cell: (r: any) => <Link href={`/customers/${r.id}`} className="text-accent underline">{r.name}</Link> },
    { header: "Phone", accessor: "phone" },
    { header: "Email", accessor: "email" },
    { header: "Status", accessor: "status" },
  ], []);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Customers</h1>
        <Button>Add Customer</Button>
      </div>
      <DataTable data={customers} columns={cols} />
    </div>
  );
}