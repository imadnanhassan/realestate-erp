"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import FileUploader from "@/components/common/FileUploader";

export default function CustomerAddPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Customer" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <Input placeholder="e.g., Alice Johnson" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <Input placeholder="e.g., 555-123-4567" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <Input type="email" placeholder="e.g., alice@example.com" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <Select>
              <option>Lead</option>
              <option>Active</option>
              <option>Inactive</option>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <FileUploader />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Customer</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}