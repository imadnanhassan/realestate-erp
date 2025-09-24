"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import FileUploader from "@/components/common/FileUploader";

export default function ProjectAddPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Project" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Project Name</label>
            <Input placeholder="e.g., Skyline Residency" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Location</label>
            <Input placeholder="e.g., Uptown" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Budget (USD)</label>
            <Input type="number" placeholder="e.g., 5000000" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Progress</label>
            <Input type="number" placeholder="0–100" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600">Type</label>
            <Select>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Mixed Use</option>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <FileUploader />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Project</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}