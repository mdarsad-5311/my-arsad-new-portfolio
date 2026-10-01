import React from "react";
import { COLLABORATION_PRINCIPLES } from "@/data/portfolioData";

export default function TestimonialsSection() {
  return (
    <section
      id="philosophy"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Engineering Philosophy & Collaboration Principles"
    >
      {/* Background Architectural Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Layered Ambient Radial Glows */}
      <div
        className="absolute -top-32 right-1/4 w-[550px] h-[400px] rounded-full bg-[#0067FE]/[0.04] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-10 w-[500px] h-[350px] rounded-full bg-[#38BDF8]/[0.03] blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                08 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Engineering Philosophy
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              WHAT I VALUE
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Foundational principles guiding my software architecture, technical communication,
              and code quality.
            </p>
          </div>
        </div>

        {/* Collaboration Principles 3-Column Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COLLABORATION_PRINCIPLES.map((item, idx) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 bg-[#0D1D3A]/85 border border-[#1E3A5F] flex flex-col justify-between hover:border-[#38BDF8]/70 hover:bg-[#0E2042] transition-all duration-300 motion-reduce:transition-none relative shadow-sm hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] rounded-xl"
            >
              {/* Top Card Identity Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1E3A5F]/60 mb-6">
                  <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-widest uppercase">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] group-hover:shadow-[0_0_8px_#38BDF8] transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200 mb-2">
                  {item.principle}
                </h3>

                <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider uppercase block mb-4">
                  {item.tagline}
                </span>

                <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Technical Status Telemetry */}
              <div className="mt-8 pt-4 border-t border-[#1E3A5F]/60 font-mono text-[11px] text-[#94A3B8] flex items-center justify-between">
                <span>Code Standards</span>
                <span className="text-[#38BDF8] font-bold tracking-wider">Strict Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
