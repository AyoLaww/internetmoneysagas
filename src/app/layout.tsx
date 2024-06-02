import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { ConditionalNav } from "@/components/ConditionalNav";
import { Suspense } from "react";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
        <ConditionalNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
