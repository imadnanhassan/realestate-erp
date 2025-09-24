"use client";

import { useRBAC } from "@/components/providers/RBACProvider";

export default function Guard({ permission, children }: { permission: string; children: React.ReactNode }) {
  const { has } = useRBAC();
  if (!has(permission)) {
    return (
      <div className="card p-6 text-center">
        <div className="text-sm font-semibold text-gray-900">Access Denied</div>
        <div className="text-sm text-gray-500">You do not have permission to view this resource.</div>
      </div>
    );
  }
  return <>{children}</>;
}