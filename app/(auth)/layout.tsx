import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login - Real Estate ERP/CRM",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}