"use client";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function ProjectEditPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Edit Project" />
      <Card>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Project Name</label>
            <Input defaultValue="Skyline Residency" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Location</label>
            <Input defaultValue="Uptown" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Budget (USD)</label>
            <Input type="number" defaultValue={4500000} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Progress</label>
            <Input type="number" defaultValue={72} />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}