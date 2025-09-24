"use client";

import DataTable from "@/components/common/DataTable";
import customers from "@/data/customers.json";
import Link from "next/link";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/common/PageHeader";
import FilterBar from "@/components/common/FilterBar";
import Select from "@/components/ui/Select";
import useFakeLoading from "@/components/hooks/useFakeLoading";

export default function CustomersPage() {
  const loading = useFakeLoading(400);
  const [status, setStatus] = useState<string>("");

  const filtered = useMemo(() => {
    return customers.filter((c) => (status ? c.status === status : true));
  }, [status]);

  const cols = useMemo(() => [
    { header: "Name", accessor: "name", cell: (r: any) => <Link href={`/customers/${r.id}`} className="text-accent underline">{r.name}</Link> },
    { header: "Phone", accessor: "phone" },
    { header: "Email", accessor: "email" },
    { header: "Status", accessor: "status" },
  ], []);
  return (
    <div className="space-y-4">
      <PageHeader title="Customers" actions={<Button>Add Customer</Button>} />
      <FilterBar>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="w-40">
          <option value="">All status</option>
          <option>Active</option>
          <option>Lead</option>
          <option>Inactive</option>
        </Select>
      </FilterBar>
      <DataTable data={filtered} columns={cols} loading={loading} />
    </div>
  );
}