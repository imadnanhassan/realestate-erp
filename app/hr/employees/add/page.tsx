"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import FileUploader from "@/components/common/FileUploader";

export default function EmployeeAddPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Employee" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <Input placeholder="e.g., Emma Wilson" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Role</label>
            <Input placeholder="e.g., Sales Manager" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Join Date</label>
            <Input type="date" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <Select>
              <option>Active</option>
              <option>Inactive</option>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <FileUploader />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Employee</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}