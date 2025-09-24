import "./globals.css";
import { Inter } from "next/font/google";
import SideNav from "@/components/layout/SideNav";
import Topbar from "@/components/layout/Topbar";
import { ReactNode } from "react";
import { ToastProvider } from "@/components/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate ERP/CRM",
  description: "Premium ERP/CRM UI with dummy data",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ToastProvider>
          <div className="min-h-screen flex bg-gray-50">
            <SideNav />
            <div className="flex-1 flex min-w-0 flex-col">
              <Topbar />
              <main className="container-premium py-6">{children}</main>
            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}