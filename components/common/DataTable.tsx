"use client";

import { useMemo, useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { cn } from "@/components/ui/cn";
import Skeleton from "@/components/common/Skeleton";

export interface Column<T> {
  header: string;
  accessor: keyof T | string;
  cell?: (row: T) => React.ReactNode;
  className?: string;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  searchable?: boolean;
  loading?: boolean;
  exportable?: boolean;
  filename?: string;
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSize = 10,
  searchable = true,
  loading = false,
  exportable = true,
  filename = "table_export.csv",
}: Props<T>) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(pageSize);
  const [sort, setSort] = useState<{ key: string; dir: "asc" | "desc" } | null>(null);

  const filtered = useMemo(() => {
    if (!query) return data;
    const q = query.toLowerCase();
    return data.filter((row) => JSON.stringify(row).toLowerCase().includes(q));
  }, [data, query]);

  const sorted = useMemo(() => {
    if (!sort) return filtered;
    return [...filtered].sort((a, b) => {
      const av = String(a[sort.key]);
      const bv = String(b[sort.key]);
      if (av === bv) return 0;
      return (av > bv ? 1 : -1) * (sort.dir === "asc" ? 1 : -1);
    });
  }, [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / size));
  const current = useMemo(() => {
    const start = (page - 1) * size;
    return sorted.slice(start, start + size);
  }, [sorted, page, size]);

  function toggleSort(key: string) {
    setPage(1);
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, dir: "asc" };
      return { key, dir: prev.dir === "asc" ? "desc" : "asc" };
    });
  }

  function exportCSV() {
    const visibleCols = columns.filter((c) => c.accessor && c.accessor !== "actions");
    const headers = visibleCols.map((c) => c.header);
    const rows = sorted.map((row) =>
      visibleCols.map((c) => {
        const key = c.accessor as string;
        const val = row[key];
        return typeof val === "string" ? `"${val.replace(/"/g, '""')}"` : String(val ?? "");
      }).join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        {searchable ? (
          <Input
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            aria-label="Search table"
            className="max-w-xs"
          />
        ) : <div />}
        <div className="flex items-center gap-2 text-sm">
          {exportable && (
            <button className="btn btn-secondary px-3 py-1" onClick={exportCSV}>
              Export CSV
            </button>
          )}
          <span className="text-gray-500">Rows:</span>
          <Select
            value={String(size)}
            onChange={(e) => {
              setPage(1);
              setSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 50].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              {columns.map((c) => {
                const key = typeof c.accessor === "string" ? c.accessor : String(c.accessor);
                const active = sort?.key === key;
                return (
                  <th
                    key={String(key)}
                    className={cn("py-2 px-3 font-medium cursor-pointer select-none", c.className)}
                    onClick={() => toggleSort(key)}
                    scope="col"
                    aria-sort={active ? (sort?.dir === "asc" ? "ascending" : "descending") : "none"}
                  >
                    <div className="inline-flex items-center gap-1">
                      {c.header}
                      <span className="text-xs">{active ? (sort?.dir === "asc" ? "▲" : "▼") : ""}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: Math.min(size, 5) }).map((_, i) => (
                  <tr key={`skeleton-${i}`} className="border-t border-gray-100">
                    {columns.map((c, j) => (
                      <td key={j} className={cn("py-3 px-3", c.className)}>
                        <Skeleton className="h-4 w-32" />
                      </td>
                    ))}
                  </tr>
                ))
              : current.map((row, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  {columns.map((c, j) => {
                    const key = typeof c.accessor === "string" ? c.accessor : (c.accessor as string);
                    return (
                      <td key={j} className={cn("py-3 px-3", c.className)}>
                        {c.cell ? c.cell(row) : String(row[key] ?? "")}
                      </td>
                    );
                  })}
                </tr>
              ))}
            {!loading && current.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="py-10 text-center text-gray-500">
                  No results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="text-gray-500">
          Showing {(page - 1) * size + 1} – {Math.min(page * size, sorted.length)} of {sorted.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-secondary px-3 py-1"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="text-gray-600">
            Page {page} / {totalPages}
          </span>
          <button
            className="btn btn-secondary px-3 py-1"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}