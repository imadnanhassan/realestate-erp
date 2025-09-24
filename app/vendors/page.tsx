"use client";

import DataTable from "@/components/common/DataTable";
import vendors from "@/data/vendors.json";
import { useMemo, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import FilterBar from "@/components/common/FilterBar";
import Input from "@/components/ui/Input";
import useFakeLoading from "@/components/hooks/useFakeLoading";
import Link from "next/link";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

export default function VendorsPage() {
  const loading = useFakeLoading(400);
  const [min, setMin] = useState<number>(0);

  const filtered = useMemo(() => vendors.filter((v) => v.rating >= min), [min]);

  const cols = useMemo(() => [
    { header: "Name", accessor: "name", cell: (r: any) => <Link href={`/vendors/${r.id}`} className="text-accent underline">{r.name}</Link> },
    { header: "Contact", accessor: "contact" },
    { header: "Rating", accessor: "rating", cell: (r: any) => r.rating.toFixed(1) },
    {
      header: "Actions",
      accessor: "actions",
      cell: (r: any) => (
        <div className="flex items-center gap-2">
          <Link href={`/vendors/${r.id}`}><IconButton aria-label="View"><Eye className="h-4 w-4" /></IconButton></Link>
          <Link href={`/vendors/add?id=${r.id}`}><IconButton aria-label="Edit"><Pencil className="h-4 w-4" /></IconButton></Link>
          <IconButton aria-label="Delete"><Trash2 className="h-4 w-4" /></IconButton>
        </div>
      ),
      className: "w-40"
    }
  ], []);
  return (
    <div className="space-y-4">
      <PageHeader title="Vendors" actions={<Link href="/vendors/add"><Button><Plus className="h-4 w-4" />Add Vendor</Button></Link>} />
      <FilterBar>
        <Input type="number" value={min} onChange={(e) => setMin(Number(e.target.value || 0))} placeholder="Min rating" className="w-36" />
      </FilterBar>
      <DataTable data={filtered} columns={cols} loading={loading} />
    </div>
  );
}