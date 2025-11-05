import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thread & Co.",
  description: "Modern clothing ecommerce built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="text-lg font-semibold">Thread & Co.</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/products" className="hover:underline">Products</Link>
              <Link href="/cart" className="btn">Cart</Link>
            </nav>
          </div>
        </header>
        <main className="container py-8 min-h-[70vh]">{children}</main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-gray-500">? {new Date().getFullYear()} Thread & Co.</div>
        </footer>
      </body>
    </html>
  );
}
