import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Helplytics AI | AI-Powered Community Help Platform",
  description: "Ask for help, offer help, and collaborate with others using AI-powered insights.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            geistSans.variable,
            geistMono.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
