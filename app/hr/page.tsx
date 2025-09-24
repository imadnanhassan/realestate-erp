"use client";

import Card from "@/components/common/Card";
import employees from "@/data/employees.json";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

export default function HRPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Employee List" actions={<Link href="/hr/employees/add"><Button><Plus className="h-4 w-4" />Add Employee</Button></Link>} />
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {employees.map((e) => (
            <div key={e.id} className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 p-3 bg-white hover:shadow-subtle transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold">
                  {e.name.split(" ").map((x: string) => x[0]).join("").slice(0,2)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{e.name}</div>
                  <div className="text-sm text-gray-600">{e.role}</div>
                  <div className="text-xs text-gray-500">Joined {e.joinDate}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/hr/employees/${e.id}`}><IconButton aria-label="View"><Eye className="h-4 w-4" /></IconButton></Link>
                <Link href={`/hr/employees/add?id=${e.id}`}><IconButton aria-label="Edit"><Pencil className="h-4 w-4" /></IconButton></Link>
                <IconButton aria-label="Delete"><Trash2 className="h-4 w-4" /></IconButton>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}