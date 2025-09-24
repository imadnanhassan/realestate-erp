"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function toTitle(segment: string) {
  return decodeURIComponent(segment)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/dashboard" className="hover:text-gray-700">Dashboard</Link>
        </li>
        {segments.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;
          return (
            <li key={href} className="flex items-center gap-1">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-700">{toTitle(seg)}</span>
              ) : (
                <Link href={href} className="hover:text-gray-700">{toTitle(seg)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}