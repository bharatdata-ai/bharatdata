"use client";

import Link from "next/link";
import { ArrowLeft, Search, FileX2 } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center select-none overflow-hidden">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)]" />
      
      <div className="relative space-y-12 max-w-lg">
        {/* Animated Icon Group */}
        <div className="relative inline-flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative bg-surface p-6 rounded-3xl border border-primary/10 shadow-nav overflow-hidden"
            >
               <FileX2 className="w-12 h-12 text-primary/40" />
               <motion.div 
                 animate={{ 
                   x: [0, 4, -4, 0], 
                   y: [0, -4, 4, 0] 
                 }}
                 transition={{ 
                   repeat: Infinity, 
                   duration: 4, 
                   ease: "easeInOut" 
                 }}
                 className="absolute -bottom-2 -right-2 bg-background p-2 rounded-xl border border-primary/20 shadow-sm"
               >
                 <Search className="w-4 h-4 text-primary" />
               </motion.div>
            </motion.div>
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest border border-primary/10"
          >
             404: Index Miss
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold tracking-tight text-on-surface leading-tight">
            The record you sought is not found.
          </h1>
          
          <p className="text-on-surface/50 text-sm leading-relaxed max-w-[340px] mx-auto font-sans">
            The requested dataset path or page does not exist in our current index. It may have been moved, restricted, or archived.
          </p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition-all hover:gap-3 active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Index
          </Link>
          
          <Link 
            href="/search" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-surface border border-primary/20 text-on-surface text-sm font-semibold hover:bg-primary/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Search Logs
          </Link>
        </motion.div>
      </div>

      <footer className="absolute bottom-12 text-[10px] uppercase tracking-[0.2em] text-on-surface/30 font-mono">
         © BharatData Terminal Index · 2026
      </footer>
    </div>
  );
}
