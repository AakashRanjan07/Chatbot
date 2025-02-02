"use client";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import "../../src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
