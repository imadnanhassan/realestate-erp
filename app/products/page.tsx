"use client";

import { useMemo, useState } from "react";
import data from "@/data/products.json";
import Card from "@/components/common/Card";
import Badge from "@/components/ui/Badge";

const tabs = ["Land", "Flat", "Land Share", "Hotel Share", "Commercial", "Warehouse"] as const;

export default function ProductsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Land");
  const items = useMemo(() => data.filter((d) => d.type === tab), [tab]);

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Products</h1>
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
          <Card key={p.id} title={p.title} subtitle={p.location}>
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">${p.price.toLocaleString()}</div>
              <Badge tone="muted">{p.type}</Badge>
            </div>
          </Card>
        ))}
        {items.length === 0 && (
          <div className="text-sm text-gray-500">No products in this category.</div>
        )}
      </div>
    </div>
  );
}