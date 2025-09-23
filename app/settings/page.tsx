"use client";

import DataTable from "@/components/common/DataTable";
import Button from "@/components/ui/Button";
import { useMemo } from "react";

const users = [
  { id: "u1", name: "Admin", email: "admin@example.com", role: "Admin", status: "Active" },
  { id: "u2", name: "Emma Wilson", email: "emma@example.com", role: "Manager", status: "Active" },
  { id: "u3", name: "Liam Brown", email: "liam@example.com", role: "Accountant", status: "Inactive" }
];

export default function SettingsPage() {
  const cols = useMemo(() => [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },
  ], []);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">User Management</h1>
        <Button>Add User</Button>
      </div>
      <DataTable data={users} columns={cols} />
    </div>
  );
}