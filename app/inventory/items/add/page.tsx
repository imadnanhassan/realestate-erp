"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function InventoryItemAddPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Inventory Item" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">SKU</label>
            <Input placeholder="e.g., CEM-OPC" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <Input placeholder="e.g., Cement OPC" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Unit</label>
            <Select>
              <option>bag</option>
              <option>kg</option>
              <option>pcs</option>
            </Select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Initial Stock</label>
            <Input type="number" placeholder="0" />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Item</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}