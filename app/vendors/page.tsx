"use client";

import DataTable from "@/components/common/DataTable";
import vendors from "@/data/vendors.json";
import { useMemo, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import FilterBar from "@/components/common/FilterBar";
import Input from "@/components/ui/Input";
import useFakeLoading from "@/components/hooks/useFakeLoading";
import Guard from "@/components/common/Guard";

export default function VendorsPage() {
  const loading = useFakeLoading(400);
  const [min, setMin] = useState<number>(0);

  const filtered = useMemo(() => vendors.filter((v) => v.rating >= min), [min]);

  const cols = useMemo(() => [
    { header: "Name", accessor: "name" },
    { header: "Contact", accessor: "contact" },
    { header: "Rating", accessor: "rating", cell: (r: any) => r.rating.toFixed(1) },
  ], []);
  return (
    <Guard permission="vendors:view">
      <div className="space-y-4">
        <PageHeader title="Vendors" />
        <FilterBar>
          <Input type="number" value={min} onChange={(e) => setMin(Number(e.target.value || 0))} placeholder="Min rating" className="w-36" />
        </FilterBar>
        <DataTable data={filtered} columns={cols} loading={loading} />
      </div>
    </Guard>
  );
}