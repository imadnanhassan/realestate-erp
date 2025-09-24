"use client";

import DataTable from "@/components/common/DataTable";
import sales from "@/data/sales.json";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import FilterBar from "@/components/common/FilterBar";
import Select from "@/components/ui/Select";
import useFakeLoading from "@/components/hooks/useFakeLoading";
import Input from "@/components/ui/Input";

export default function SalesPage() {
  const loading = useFakeLoading(400);
  const [status, setStatus] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const filtered = useMemo(() => {
    return sales.filter((s) => {
      if (status && s.status !== status) return false;
      if (from && s.date < from) return false;
      if (to && s.date > to) return false;
      return true;
    });
  }, [status, from, to]);

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
      <PageHeader title="Booking Management" />
      <FilterBar>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="w-40">
          <option value="">All status</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </Select>
        <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="w-44" />
        <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="w-44" />
      </FilterBar>
      <DataTable data={filtered} columns={cols} loading={loading} filename="sales.csv" />
    </div>
  );
}