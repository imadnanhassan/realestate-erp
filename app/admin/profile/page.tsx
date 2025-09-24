import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function AdminProfilePage() {
  return (
    <div className="space-y-4">
      <PageHeader title="Admin Profile" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Profile Info" className="lg:col-span-2">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <Input defaultValue="Admin User" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <Input type="email" defaultValue="admin@example.com" />
            </div>
            <div className="sm:col-span-2 flex justify-end gap-2">
              <Button variant="secondary">Cancel</Button>
              <Button>Save</Button>
            </div>
          </form>
        </Card>
        <Card title="Change Password">
          <form className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Current Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="text-sm text-gray-600">New Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <Input type="password" />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="secondary">Cancel</Button>
              <Button>Update</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}