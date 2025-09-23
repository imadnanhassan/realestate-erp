"use client";

import DataTable from "@/components/common/DataTable";
import Button from "@/components/ui/Button";
import projects from "@/data/projects.json";
import Link from "next/link";
import { useMemo } from "react";

export default function ProjectsPage() {
  const cols = useMemo(() => [
    { header: "Name", accessor: "name", cell: (r: any) => <Link href={`/projects/${r.id}`} className="text-accent underline">{r.name}</Link> },
    { header: "Location", accessor: "location" },
    { header: "Progress", accessor: "progress", cell: (r: any) => <span className="badge badge-muted">{r.progress}%</span> },
    { header: "Budget", accessor: "budget", cell: (r: any) => r.budget.toLocaleString() },
  ], []);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Projects</h1>
        <Button>New Project</Button>
      </div>
      <DataTable data={projects} columns={cols} />
    </div>
  );
}