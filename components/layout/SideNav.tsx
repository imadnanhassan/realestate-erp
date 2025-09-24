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

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: Building2 },
  { href: "/products", label: "Products", icon: Boxes },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/sales", label: "Sales", icon: Handshake },
  { href: "/vendors", label: "Vendors", icon: Truck },
  { href: "/procurement", label: "Procurement", icon: ShoppingCart },
  { href: "/inventory", label: "Inventory", icon: Package },
  { href: "/constructor", label: "Constructor", icon: Hammer },
  { href: "/support", label: "Support", icon: LifeBuoy },
  { href: "/accounting", label: "Accounting", icon: Wallet },
  { href: "/hr", label: "HR", icon: Briefcase },
  { href: "/reports", label: "Reports", icon: FileBarChart },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <aside className={cn("hidden md:flex w-64 shrink-0 flex-col border-r border-gray-200 bg-white")}>
        <div className="h-16 flex items-center gap-2 px-4 border-b border-gray-200">
          <Landmark className="h-6 w-6 text-accent" />
          <span className="font-semibold">Real Estate ERP</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.map((item) => {
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
            {nav.map((item) => {
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