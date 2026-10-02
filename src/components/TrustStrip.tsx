import React from "react";
import { TRUST_STRIP_ITEMS, TRUST_TECHNOLOGIES } from "@/data/portfolioData";

export default function TrustStrip() {
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
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div
                className={`flex items-center gap-2 ${
                  item.highlight
                    ? "text-white font-semibold"
                    : idx === TRUST_STRIP_ITEMS.length - 1
                    ? "text-[#38BDF8]"
                    : ""
                }`}
              >
                {item.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                )}
                <span>{item.label}</span>
              </div>
              {idx < TRUST_STRIP_ITEMS.length - 1 && (
                <span
                  className={`text-[#1E3A5F] select-none ${
                    idx === 1 ? "hidden md:inline" : "hidden sm:inline"
                  }`}
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Slow-Moving Technology Marquee */}
      <div className="relative py-4 sm:py-5 overflow-hidden flex items-center group/marquee">
        {/* Left & Right Edge Gradient Fade */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#00091E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#00091E] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center select-none">
          {/* Primary Track */}
          <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 shrink-0">
            {TRUST_TECHNOLOGIES.map((tech) => (
              <div
                key={`tech-1-${tech.name}`}
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

          {/* Duplicate Track (for pixel-perfect 100% seamless infinite loop) */}
          <div
            className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 shrink-0"
            aria-hidden="true"
          >
            {TRUST_TECHNOLOGIES.map((tech, idx) => (
              <div
                key={`tech-2-${tech.name}-${idx}`}
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
      </div>
    </section>
  );
}
