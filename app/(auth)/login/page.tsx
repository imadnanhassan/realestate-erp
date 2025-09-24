"use client";

import Card from "@/components/common/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/providers/ToastProvider";

export default function LoginPage() {
  const router = useRouter();
  const { push } = useToast();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    push({ type: "success", message: "Welcome back!" });
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-sm">
      <Card>
        <h1 className="text-lg font-semibold mb-4">Sign in</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <Input type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <Input type="password" required />
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
      </Card>
    </div>
  );
}