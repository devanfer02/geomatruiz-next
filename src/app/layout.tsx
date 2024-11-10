import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Litacrtes CMS",
  description: "Litecartes CMS made with NextJS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <div className="w-1/6">
          <SideBar/>
        </div>
        <main className="w-4/5 mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
