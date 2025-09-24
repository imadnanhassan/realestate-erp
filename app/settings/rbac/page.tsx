"use client";

import Card from "@/components/common/Card";
import Button from "@/components/ui/Button";
import { useState } from "react";

const rolesSeed = [
  { name: "Admin", permissions: ["dashboard:view", "projects:*", "sales:*", "accounting:*"] },
  { name: "Manager", permissions: ["dashboard:view", "projects:view", "sales:view", "accounting:view"] },
  { name: "Sales", permissions: ["sales:view", "sales:create", "customers:view"] },
];

export default function RBACPage() {
  const [roles, setRoles] = useState(rolesSeed);

  function addRole() {
    setRoles((r) => [...r, { name: `Role ${r.length + 1}`, permissions: ["dashboard:view"] }]);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Role-based Access Control</h1>
        <Button onClick={addRole}>Add Role</Button>
      </div>
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {roles.map((r, idx) => (
            <div key={idx} className="card p-4">
              <div className="font-semibold text-gray-900">{r.name}</div>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {r.permissions.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}