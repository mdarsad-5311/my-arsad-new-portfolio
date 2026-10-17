import React from "react";
import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
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
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[140px] bg-gradient-to-br from-[#0067FE] to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07152F] border border-[#1E3A5F] font-mono text-xs text-[#38BDF8] tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
          <span>STATUS: 404 // NOT FOUND</span>
        </div>

        {/* Big Code */}
        <h1 className="font-display text-7xl sm:text-9xl font-bold tracking-tight text-white mb-4">
          404
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-white mb-4">
          Route Not Located
        </h2>

        <p className="font-body text-sm sm:text-base text-[#A8B4C7] max-w-md mx-auto mb-10 leading-relaxed">
          The page or architectural case study you are looking for does not exist or has been relocated to another route.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#0056EE] transition-all shadow-[0_4px_20px_rgba(0,103,254,0.35)]"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#07152F] border border-[#1E3A5F] text-[#A8B4C7] hover:text-white hover:border-[#38BDF8] font-mono text-xs uppercase tracking-wider rounded-lg transition-all"
          >
            <Compass className="w-4 h-4 text-[#38BDF8]" />
            <span>Explore Work Archive</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
