"use client";

import DataTable from "@/components/common/DataTable";
import Button from "@/components/ui/Button";
import projects from "@/data/projects.json";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import FilterBar from "@/components/common/FilterBar";
import Input from "@/components/ui/Input";
import useFakeLoading from "@/components/hooks/useFakeLoading";
import Guard from "@/components/common/Guard";

export default function ProjectsPage() {
  const loading = useFakeLoading(400);
  const [loc, setLoc] = useState("");
  const [minProg, setMinProg] = useState(0);

  const filtered = useMemo(() => {
    return projects.filter((p) =>
      p.location.toLowerCase().includes(loc.toLowerCase()) && p.progress >= minProg
    );
  }, [loc, minProg]);

  const cols = useMemo(() => [
    { header: "Name", accessor: "name", cell: (r: any) => <Link href={`/projects/${r.id}`} className="text-accent underline">{r.name}</Link> },
    { header: "Location", accessor: "location" },
    { header: "Progress", accessor: "progress", cell: (r: any) => <span className="badge badge-muted">{r.progress}%</span> },
    { header: "Budget", accessor: "budget", cell: (r: any) => r.budget.toLocaleString() },
  ], []);

  return (
    <Guard permission="projects:view">
      <div className="space-y-4">
        <PageHeader title="Projects" actions={<Button>New Project</Button>} />
        <FilterBar>
          <Input placeholder="Filter by location..." value={loc} onChange={(e) => setLoc(e.target.value)} className="max-w-xs" />
          <Input type="number" placeholder="Min progress %" value={minProg} onChange={(e) => setMinProg(Number(e.target.value || 0))} className="w-40" />
        </FilterBar>
        <DataTable data={filtered} columns={cols} loading={loading} />
      </div>
    </Guard>
  );
}