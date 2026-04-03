import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BharatData Playground | Professional Indian Public Data Search",
  description: "An AI-powered interface for querying, analyzing, and auditing Indian government data with source-cited narratives.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-on-surface antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
