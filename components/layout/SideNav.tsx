"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  Building2,
  Boxes,
  Users,
  Handshake,
  Truck,
  ShoppingCart,
  Wallet,
  Landmark,
  Briefcase,
  Settings,
  FileBarChart,
  Hammer,
  LifeBuoy,
  Package
} from "lucide-react";
import { cn } from "@/components/ui/cn";
import { usePathname } from "next/navigation";
import { useRBAC } from "@/components/providers/RBACProvider";

type NavItem = { href: string; label: string; icon: any; perm: string };

const nav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, perm: "dashboard:view" },
  { href: "/projects", label: "Projects", icon: Building2, perm: "projects:view" },
  { href: "/products", label: "Products", icon: Boxes, perm: "products:view" },
  { href: "/customers", label: "Customers", icon: Users, perm: "customers:view" },
  { href: "/sales", label: "Sales", icon: Handshake, perm: "sales:view" },
  { href: "/vendors", label: "Vendors", icon: Truck, perm: "vendors:view" },
  { href: "/procurement", label: "Procurement", icon: ShoppingCart, perm: "procurement:view" },
  { href: "/inventory", label: "Inventory", icon: Package, perm: "inventory:view" },
  { href: "/constructor", label: "Constructor", icon: Hammer, perm: "constructor:view" },
  { href: "/support", label: "Support", icon: LifeBuoy, perm: "support:view" },
  { href: "/accounting", label: "Accounting", icon: Wallet, perm: "accounting:view" },
  { href: "/hr", label: "HR", icon: Briefcase, perm: "hr:view" },
  { href: "/reports", label: "Reports", icon: FileBarChart, perm: "reports:view" },
  { href: "/settings", label: "Settings", icon: Settings, perm: "settings:view" },
];

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { has } = useRBAC();

  const visible = nav.filter((n) => has(n.perm));

  return (
    <>
      <aside className={cn("hidden md:flex w-64 shrink-0 flex-col border-r border-gray-200 bg-white")}>
        <div className="h-16 flex items-center gap-2 px-4 border-b border-gray-200">
          <Landmark className="h-6 w-6 text-accent" />
          <span className="font-semibold">Real Estate ERP</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {visible.map((item) => {
            const Icon = item.icon;
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-gray-100",
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                )}
              >
                <Icon className="h-5 w-5 text-gray-500" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="md:hidden">
        <button
          aria-label="Open menu"
          className="fixed bottom-4 left-4 z-40 btn btn-primary shadow-lg"
          onClick={() => setOpen((s) => !s)}
        >
          <Menu className="h-5 w-5" />
          Menu
        </button>
        {open && (
          <div
            className="fixed inset-0 z-30 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 p-3 transition-transform duration-200",
            open ? "translate-x-0" : "-translate-x-full"
          )}
          aria-label="Mobile navigation"
        >
          <div className="h-16 flex items-center gap-2 px-1 border-b border-gray-200">
            <Landmark className="h-6 w-6 text-accent" />
            <span className="font-semibold">Real Estate ERP</span>
          </div>
          <nav className="py-3 space-y-1">
            {visible.map((item) => {
              const Icon = item.icon;
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-gray-100",
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-5 w-5 text-gray-500" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
}