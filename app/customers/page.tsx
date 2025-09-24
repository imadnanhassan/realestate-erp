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
import IconButton from "@/components/ui/IconButton";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

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
    {
      header: "Actions",
      accessor: "actions",
      cell: (r: any) => (
        <div className="flex items-center gap-2">
          <Link href={`/customers/${r.id}`}><IconButton aria-label="View"><Eye className="h-4 w-4" /></IconButton></Link>
          <Link href={`/customers/add?id=${r.id}`}><IconButton aria-label="Edit"><Pencil className="h-4 w-4" /></IconButton></Link>
          <IconButton aria-label="Delete"><Trash2 className="h-4 w-4" /></IconButton>
        </div>
      ),
      className: "w-40"
    }
  ], []);
  return (
    <div className="space-y-4">
      <PageHeader title="Customers" actions={<Link href="/customers/add"><Button><Plus className="h-4 w-4" />Add Customer</Button></Link>} />
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