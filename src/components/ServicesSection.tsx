"use client";

import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

export default function ServicesSection() {
  // First service expanded by default for immediate context
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setActiveService((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] overflow-hidden text-[#A8B4C7]"
      aria-label="Services and Technical Capabilities"
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

      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute -top-40 right-1/4 w-[600px] h-[400px] rounded-full bg-[#0067FE]/[0.05] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 left-10 w-[500px] h-[350px] rounded-full bg-[#38BDF8]/[0.03] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                04 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Technical Capabilities & Scope
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              SERVICES
            </h2>
          </div>

          <div className="max-w-xl flex flex-col justify-between">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Tailored software engineering for high-growth startups and established brands. Clean
              codebases, maintainable design systems, and resilient server infrastructure.
            </p>
            <div className="mt-4 pt-4 border-t border-[#1E3A5F]/40 flex items-center gap-4 text-xs font-mono text-[#38BDF8]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{SERVICES.length} SPECIALIZED DISCIPLINES // FULL-CYCLE DELIVERY</span>
            </div>
          </div>
        </div>

        {/* Refined Architectural Index / List Layout */}
        <div className="mt-8 divide-y divide-[#1E3A5F]/40 border-y border-[#1E3A5F]/40">
          {SERVICES.map((service, index) => {
            const isOpen = activeService === index;

            return (
              <div
                key={service.number}
                className={`group relative transition-colors duration-300 motion-reduce:transition-none ${
                  isOpen ? "bg-[#030F26]/75" : "bg-transparent hover:bg-[#030F26]/35"
                }`}
              >
                {/* Active / Hover Electric-Blue Left Accent Border */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#38BDF8] transition-opacity duration-300 motion-reduce:transition-none pointer-events-none ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* Primary Row Header (Interactive Toggle) */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.number}`}
                  className="w-full text-left py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  {/* Left: Number and Title */}
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#38BDF8] tracking-widest shrink-0">
                      {"//"} {service.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200 motion-reduce:transition-none">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Tagline & Subtle Indicator */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0">
                    <span className="hidden lg:inline-block font-body text-xs sm:text-sm text-[#94A3B8] max-w-sm text-right">
                      {service.tagline}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 motion-reduce:transition-none shrink-0 ${
                        isOpen
                          ? "border-[#38BDF8] bg-[#001845] text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                          : "border-[#1E3A5F]/80 bg-[#000F2B] text-[#94A3B8] group-hover:border-[#38BDF8]/60 group-hover:text-[#38BDF8]"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus
                        className={`w-4 h-4 transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-45 text-[#38BDF8]" : "group-hover:scale-110"
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Architectural Details Panel */}
                {isOpen && (
                  <div
                    id={`service-panel-${service.number}`}
                    role="region"
                    aria-label={`${service.title} Details`}
                    className="px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-[#1E3A5F]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn"
                  >
                    {/* Left Details: Narrative & Tech Ecosystem */}
                    <div className="lg:col-span-7">
                      <p className="font-body text-xs sm:text-sm text-[#38BDF8] font-medium mb-3 lg:hidden">
                        {service.tagline}
                      </p>
                      <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-[#38BDF8] font-bold">
                            Technology Ecosystem
                          </span>
                          <span className="h-px flex-1 bg-[#1E3A5F]/40 max-w-[60px]" aria-hidden="true" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono text-[#38BDF8] bg-[#000B25] border border-[#1E3A5F] rounded hover:border-[#38BDF8]/60 transition-colors duration-200 motion-reduce:transition-none"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Details: Architectural Deliverables */}
                    <div className="lg:col-span-5 bg-[#000B25]/60 border border-[#1E3A5F]/60 rounded-lg p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#38BDF8] font-bold">
                          Key Deliverables
                        </span>
                        <span className="h-px flex-1 bg-[#1E3A5F]/40" aria-hidden="true" />
                      </div>
                      <ul className="space-y-3 font-mono text-xs sm:text-[13px] text-[#CBD5E1]">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 group/item">
                            <Check className="w-3.5 h-3.5 text-[#38BDF8] mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-200 motion-reduce:transition-none" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
