"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, AlertTriangle } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log exception for telemetry / diagnostics
    console.error("[App Runtime Error]:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#00081C] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden selection:bg-[#0067FE] selection:text-white">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[140px] bg-gradient-to-br from-[#EF4444]/40 via-[#0067FE]/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#7F1D1D]/50 font-mono text-xs text-[#F87171] tracking-widest uppercase mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
          <span>APPLICATION EXCEPTION</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
          Unexpected Error Encountered
        </h1>

        <p className="font-body text-sm sm:text-base text-[#A8B4C7] max-w-md mx-auto mb-8 leading-relaxed">
          An unexpected condition prevented this page from rendering. You can re-attempt rendering the current view or return to the main overview.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#0056EE] transition-all shadow-[0_4px_20px_rgba(0,103,254,0.35)] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#07152F] border border-[#1E3A5F] text-[#A8B4C7] hover:text-white hover:border-[#38BDF8] font-mono text-xs uppercase tracking-wider rounded-lg transition-all"
          >
            <Home className="w-4 h-4 text-[#38BDF8]" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
