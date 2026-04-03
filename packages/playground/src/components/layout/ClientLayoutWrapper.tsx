"use client";

import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("./Header").then(mod => mod.Header), { ssr: false });
const Footer = dynamic(() => import("./Footer").then(mod => mod.Footer), { ssr: false });

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
