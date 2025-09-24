"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

const materials = [
  { sku: "CEM-OPC", name: "Cement OPC", stock: 520, unit: "bag", location: "Warehouse A" },
  { sku: "STEEL-12", name: "Steel Rod 12mm", stock: 1200, unit: "kg", location: "Warehouse B" },
  { sku: "BRICK", name: "Bricks", stock: 30000, unit: "pcs", location: "Yard" },
];

export default function InventoryItemsPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Inventory Items" actions={<Link href="/inventory/items/add"><Button><Plus className="h-4 w-4" />Add Item</Button></Link>} />
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-3">SKU</th>
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Stock</th>
                <th className="py-2 px-3">Location</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m) => (
                <tr key={m.sku} className="border-t border-gray-100">
                  <td className="py-2 px-3">{m.sku}</td>
                  <td className="py-2 px-3">{m.name}</td>
                  <td className="py-2 px-3">{m.stock} {m.unit}</td>
                  <td className="py-2 px-3">{m.location}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <Link href={`/inventory/items/${m.sku}`}><IconButton aria-label="View"><Eye className="h-4 w-4" /></IconButton></Link>
                      <Link href={`/inventory/items/add?sku=${m.sku}`}><IconButton aria-label="Edit"><Pencil className="h-4 w-4" /></IconButton></Link>
                      <IconButton aria-label="Delete"><Trash2 className="h-4 w-4" /></IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}