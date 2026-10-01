"use client";

import React, { useState } from "react";
import { TECHNOLOGIES } from "@/data/portfolioData";
import { Layers, Terminal, Database, Cloud } from "lucide-react";

export default function StackSection() {
  const [selectedTech, setSelectedTech] = useState<string>("React");

  const categories = [
    { name: "Frontend", icon: Layers },
    { name: "Backend", icon: Terminal },
    { name: "Database", icon: Database },
    { name: "DevOps & Tools", icon: Cloud },
  ] as const;

  const currentTechObj =
    TECHNOLOGIES.find((t) => t.name === selectedTech) || TECHNOLOGIES[0];

  return (
    <section
      id="stack"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Stack & Tools"
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
        className="absolute -top-32 right-1/3 w-[550px] h-[400px] rounded-full bg-[#0067FE]/[0.04] blur-[130px] pointer-events-none"
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
                Technical Arsenal
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              STACK &amp; TOOLS
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Hover or click on any technology to inspect architectural usage, experience
              duration, and production deployment roles.
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Layout: Left Tech Grid / Right Architectural Insight Card */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Categorized Technology Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {categories.map((cat) => {
              const items = TECHNOLOGIES.filter((t) => t.category === cat.name);
              const Icon = cat.icon;

              return (
                <div key={cat.name} className="flex flex-col gap-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#1E3A5F]/60 font-mono text-xs uppercase tracking-widest text-white">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span className="font-bold">{cat.name}</span>
                    </div>
                    <span className="text-[#64748B] text-[11px] font-medium">
                      {items.length} {items.length === 1 ? "TOOL" : "TOOLS"}
                    </span>
                  </div>

                  {/* Technology Buttons Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((tech) => {
                      const isSelected = selectedTech === tech.name;

                      return (
                        <button
                          key={tech.name}
                          type="button"
                          onMouseEnter={() => setSelectedTech(tech.name)}
                          onClick={() => setSelectedTech(tech.name)}
                          className={`px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 motion-reduce:transition-none border text-left flex items-center justify-between gap-3 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] ${
                            isSelected
                              ? "bg-[#002259] text-white font-bold border-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.25)] ring-1 ring-[#38BDF8]/40"
                              : "bg-[#0D1D3A]/70 text-[#CBD5E1] border-[#1E3A5F] hover:border-[#38BDF8]/60 hover:text-white hover:bg-[#0D1D3A]"
                          }`}
                        >
                          <span className="font-medium">{tech.name}</span>
                          {tech.highlight && (
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                isSelected ? "bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" : "bg-[#38BDF8]/60"
                              }`}
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Technical Inspector Preview Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-6 sm:p-8 bg-[#0D1D3A]/85 border border-[#1E3A5F]/80 rounded-xl shadow-[0_12px_36px_rgba(0,10,30,0.5)] backdrop-blur-sm flex flex-col gap-6">
              {/* Top Inspector Status Row */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E3A5F]/60">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span className="font-bold">Technical Inspector</span>
                </div>
                <span className="font-mono text-xs bg-[#001033] border border-[#1E3A5F] px-2.5 py-0.5 text-[#38BDF8] font-bold rounded">
                  {currentTechObj.category}
                </span>
              </div>

              {/* Selected Technology Inspector Fields */}
              <div className="flex flex-col gap-5 divide-y divide-[#1E3A5F]/50">
                {/* 1. TECHNOLOGY */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] font-bold">
                    TECHNOLOGY
                  </span>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                      {currentTechObj.name}
                    </h3>
                    <span className="font-mono text-xs text-[#38BDF8] font-semibold">
                      // {currentTechObj.category}
                    </span>
                  </div>
                </div>

                {/* 2. ROLE */}
                <div className="pt-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] font-bold">
                    ROLE
                  </span>
                  <p className="font-mono text-sm text-[#38BDF8] font-semibold">
                    {currentTechObj.role}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mt-1">
                    {currentTechObj.description}
                  </p>
                </div>

                {/* 3. WHERE IT IS USED */}
                <div className="pt-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] font-bold">
                    WHERE IT IS USED
                  </span>
                  <p className="font-mono text-xs sm:text-sm text-white font-medium bg-[#001033] p-3 rounded-lg border border-[#1E3A5F]">
                    {currentTechObj.whereUsed || "Production web applications & full-stack systems"}
                  </p>
                </div>
              </div>

              {/* Bottom Status Telemetry */}
              <div className="pt-4 border-t border-[#1E3A5F]/50 font-mono text-[11px] text-[#94A3B8] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  Production Ready
                </span>
                <span className="text-[#38BDF8] font-bold">Verified In Codebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
