"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import FileUploader from "@/components/common/FileUploader";

export default function ProductAddPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Product" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <Input placeholder="e.g., 2BHK Apartment" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Type</label>
            <Select>
              <option>Land</option>
              <option>Flat</option>
              <option>Land Share</option>
              <option>Hotel Share</option>
              <option>Commercial</option>
              <option>Warehouse</option>
            </Select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Location</label>
            <Input placeholder="e.g., Downtown" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Price (USD)</label>
            <Input type="number" placeholder="e.g., 150000" />
          </div>
          <div className="sm:col-span-2">
            <FileUploader />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Product</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}