import React from "react";

export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center relative bg-transparent text-white"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing ambient aura */}
        <div className="w-16 h-16 rounded-full bg-[#0067FE]/20 blur-xl animate-pulse" />
        {/* Dual-ring spinner */}
        <div className="w-12 h-12 rounded-full border-2 border-[#1E3A5F] border-t-[#38BDF8] border-r-[#0067FE] animate-spin" />
      </div>
      <p className="mt-4 font-mono text-xs text-[#A8B4C7] uppercase tracking-widest">
        Loading System
      </p>
    </div>
  );
}
