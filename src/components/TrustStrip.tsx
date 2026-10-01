import React from "react";
import { TRUST_STRIP_ITEMS, TRUST_TECHNOLOGIES } from "@/data/portfolioData";

export default function TrustStrip() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TRUST_TECHNOLOGIES, ...TRUST_TECHNOLOGIES, ...TRUST_TECHNOLOGIES];

  return (
    <section
      aria-label="Credibility and Core Stack"
      className="relative border-b border-[#1E3A5F]/50 bg-[#00091E] overflow-hidden"
    >
      {/* Subtle Hairline Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Top Editorial Information Band */}
      <div className="border-b border-[#1E3A5F]/40 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-y-2.5 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#94A3B8]">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>AVAILABLE WORLDWIDE</span>
          </div>
          <span className="text-[#1E3A5F] hidden sm:inline select-none">/</span>
          <div className="flex items-center gap-2">
            <span>REMOTE COLLABORATION</span>
          </div>
          <span className="text-[#1E3A5F] hidden md:inline select-none">/</span>
          <div className="flex items-center gap-2">
            <span>FULL-STACK DEVELOPMENT</span>
          </div>
          <span className="text-[#1E3A5F] hidden sm:inline select-none">/</span>
          <div className="flex items-center gap-2 text-[#38BDF8]">
            <span>MODERN WEB TECHNOLOGY</span>
          </div>
        </div>
      </div>

      {/* Slow-Moving Technology Marquee */}
      <div className="relative py-4 sm:py-5 overflow-hidden flex items-center group/marquee">
        {/* Left & Right Edge Gradient Fade */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#00091E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#00091E] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12 select-none">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-3 font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase text-[#CBD5E1] transition-colors duration-200 hover:text-white shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/60" />
              <span className="font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] text-[#64748B] tracking-wider font-normal">
                [{tech.category}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
