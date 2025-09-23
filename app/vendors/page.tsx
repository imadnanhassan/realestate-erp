"use client";

import DataTable from "@/components/common/DataTable";
import vendors from "@/data/vendors.json";
import { useMemo } from "react";

export default function VendorsPage() {
  const cols = useMemo(() => [
    { header: "Name", accessor: "name" },
    { header: "Contact", accessor: "contact" },
    { header: "Rating", accessor: "rating", cell: (r: any) => r.rating.toFixed(1) },
  ], []);
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Vendors</h1>
      <DataTable data={vendors} columns={cols} />
    </div>
  );
}