"use client";

import { useMemo, useState } from "react";
import data from "@/data/products.json";
import Card from "@/components/common/Card";
import Badge from "@/components/ui/Badge";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

const tabs = ["Land", "Flat", "Land Share", "Hotel Share", "Commercial", "Warehouse"] as const;

export default function ProductsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Land");
  const items = useMemo(() => data.filter((d) => d.type === tab), [tab]);

  return (
    <div className="space-y-4">
      <PageHeader title="Products" actions={<Link href="/products/add"><Button><Plus className="h-4 w-4" />Add Product</Button></Link>} />
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            className={`btn ${tab === t ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p) => (
          <Card key={p.id} title={p.title} subtitle={p.location} actions={
            <div className="flex items-center gap-2">
              <Link href={`/products/${p.id}`}><IconButton aria-label="View"><Eye className="h-4 w-4" /></IconButton></Link>
              <Link href={`/products/add?id=${p.id}`}><IconButton aria-label="Edit"><Pencil className="h-4 w-4" /></IconButton></Link>
              <IconButton aria-label="Delete"><Trash2 className="h-4 w-4" /></IconButton>
            </div>
          }>
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">${p.price.toLocaleString()}</div>
              <Badge tone="muted">{p.type}</Badge>
            </div>
            <img
              src={`https://picsum.photos/seed/${encodeURIComponent(p.id)}/600/320`}
              alt={p.title}
              className="mt-4 w-full h-40 object-cover rounded-xl border border-gray-100"
            />
          </Card>
        ))}
        {items.length === 0 && (
          <div className="text-sm text-gray-500">No products in this category.</div>
        )}
      </div>
    </div>
  );
}