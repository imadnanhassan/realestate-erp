"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FileUploader from "@/components/common/FileUploader";

export default function VendorAddPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Vendor" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Vendor Name</label>
            <Input placeholder="e.g., BuildPro Contractors" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Contact</label>
            <Input placeholder="email or phone" />
          </div>
          <div className="sm:col-span-2">
            <FileUploader />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Vendor</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}