"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Role = {
  name: string;
  permissions: string[];
};

type RBACContextType = {
  role: Role;
  setRoleName: (name: string) => void;
  has: (perm: string) => boolean;
};

const defaultRoles: Record<string, Role> = {
  Admin: { name: "Admin", permissions: ["*"] },
  Manager: { name: "Manager", permissions: ["dashboard:view", "projects:view", "sales:view", "accounting:view", "customers:view", "vendors:view", "reports:view"] },
  Sales: { name: "Sales", permissions: ["dashboard:view", "sales:view", "sales:create", "customers:view"] },
};

const RBACContext = createContext<RBACContextType | null>(null);

export function RBACProvider({ children }: { children: React.ReactNode }) {
  const [roleName, setRoleName] = useState<string>("Admin");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("rbac_role") : null;
    if (saved) setRoleName(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("rbac_role", roleName);
  }, [roleName]);

  const role = useMemo<Role>(() => defaultRoles[roleName] ?? defaultRoles.Admin, [roleName]);

  const value = useMemo<RBACContextType>(() => ({
    role,
    setRoleName,
    has: (perm: string) => {
      if (role.permissions.includes("*")) return true;
      return role.permissions.includes(perm);
    }
  }), [role]);

  return <RBACContext.Provider value={value}>{children}</RBACContext.Provider>;
}

export function useRBAC() {
  const ctx = useContext(RBACContext);
  if (!ctx) throw new Error("useRBAC must be used within RBACProvider");
  return ctx;
}

export function useRolesList() {
  return Object.keys(defaultRoles);
}