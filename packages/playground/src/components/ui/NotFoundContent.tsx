"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFoundContent() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700">
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tighter text-primary/20 sm:text-8xl">404</h1>
          <h2 className="text-2xl font-serif text-on-surface sm:text-3xl">Resource Not Located</h2>
        </div>
        
        <p className="text-on-surface/60 text-sm leading-relaxed max-w-[280px] mx-auto">
          The public record or page you are seeking is either restricted, moved, or does not exist in the current index.
        </p>

        <div className="pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary text-sm font-medium hover:bg-primary/90 transition-all hover:gap-3 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Index
          </Link>
        </div>
      </div>
    </div>
  );
}
