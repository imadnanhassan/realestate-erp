"use client";

import { Bell, Search, User } from "lucide-react";
import Input from "@/components/ui/Input";
import { useState } from "react";
import { cn } from "../ui/cn";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container-premium h-16 flex items-center justify-between gap-4">
        <div className="flex-1 max-w-xl">
          <form
            role="search"
            className="relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input className="pl-9" placeholder="Search projects, customers, bookings..." />
          </form>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              className="btn btn-secondary pl-2 pr-3"
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <User className="h-5 w-5 text-gray-600" />
              <span className="hidden sm:inline">Admin</span>
            </button>
            <div
              className={cn(
                "absolute right-0 mt-2 w-44 card p-2 text-sm",
                open ? "block" : "hidden"
              )}
              role="menu"
            >
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Profile</button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Settings</button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}