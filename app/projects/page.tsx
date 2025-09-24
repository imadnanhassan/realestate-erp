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
import IconButton from "@/components/ui/IconButton";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

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
    {
      header: "Actions",
      accessor: "actions",
      cell: (r: any) => (
        <div className="flex items-center gap-2">
          <Link href={`/projects/${r.id}`}><IconButton aria-label="View"><Eye className="h-4 w-4" /></IconButton></Link>
          <Link href={`/projects/add?id=${r.id}`}><IconButton aria-label="Edit"><Pencil className="h-4 w-4" /></IconButton></Link>
          <IconButton aria-label="Delete"><Trash2 className="h-4 w-4" /></IconButton>
        </div>
      ),
      className: "w-40"
    }
  ], []);

  return (
    <div className="space-y-4">
      <PageHeader title="Projects" actions={<Link href="/projects/add"><Button><Plus className="h-4 w-4" />New Project</Button></Link>} />
      <FilterBar>
        <Input placeholder="Filter by location..." value={loc} onChange={(e) => setLoc(e.target.value)} className="max-w-xs" />
        <Input type="number" placeholder="Min progress %" value={minProg} onChange={(e) => setMinProg(Number(e.target.value || 0))} className="w-40" />
      </FilterBar>
      <DataTable data={filtered} columns={cols} loading={loading} />
    </div>
  );
}