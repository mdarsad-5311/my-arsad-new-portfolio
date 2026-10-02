"use client";

import React, { useState } from "react";
import { Check, Plus, Minus, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";
import Link from "next/link";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setActiveService((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 border-b border-[#1E3A5F]/40 bg-[#00081C] overflow-hidden text-[#A8B4C7]"
      aria-label="Services and Client Solutions"
    >
      {/* Background Architectural Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute -top-40 right-1/4 w-[600px] h-[400px] rounded-full bg-[#0067FE]/[0.05] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 sm:pb-20 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                03 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Client Solutions &amp; Scope
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              SERVICES
            </h2>
          </div>

          <div className="max-w-xl flex flex-col justify-between">
            <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              Selectable engineering capabilities tailored for founders, startups, and established enterprises. High-performance web applications, scalable APIs, and bespoke internal systems.
            </p>
            <div className="mt-4 pt-4 border-t border-[#1E3A5F]/40 flex items-center gap-3 text-xs font-mono text-[#38BDF8]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>06 SPECIALIZED OFFERINGS // FULL-STACK ARCHITECTURE</span>
            </div>
          </div>
        </div>

        {/* Services Selectable System Panels */}
        <div className="mt-10 sm:mt-12 flex flex-col gap-3">
          {SERVICES.map((service, index) => {
            const isOpen = activeService === index;

            return (
              <div
                key={service.number}
                className={`group relative rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#07152F]/90 border-[#38BDF8]/60 shadow-[0_12px_36px_rgba(0,103,254,0.18)]"
                    : "bg-[#07152F]/30 border-[#1E3A5F]/50 hover:border-[#38BDF8]/40 hover:bg-[#07152F]/60"
                }`}
              >
                {/* Active Left Indicator */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-[#38BDF8] transition-opacity duration-300 pointer-events-none ${
                    isOpen ? "opacity-100 shadow-[0_0_8px_#38BDF8]" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* Service Header Row */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.number}`}
                  className="w-full text-left py-5 sm:py-6 px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-xl"
                >
                  {/* Number & Service Name */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#38BDF8] tracking-widest shrink-0">
                      {"//"} {service.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* One-Line Description & Plus/Minus Toggle */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0">
                    <span className="font-body text-xs sm:text-sm text-[#94A3B8] max-w-md md:text-right line-clamp-1">
                      {service.tagline}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "border-[#38BDF8] bg-[#001845] text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                          : "border-[#1E3A5F] bg-[#00081C] text-[#94A3B8] group-hover:border-[#38BDF8]/60 group-hover:text-[#38BDF8]"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-[#38BDF8]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#38BDF8] group-hover:scale-110 transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded System Panel: What I build, Technologies, Typical use cases */}
                {isOpen && (
                  <div
                    id={`service-panel-${service.number}`}
                    role="region"
                    aria-label={`${service.title} Details`}
                    className="px-5 sm:px-8 pb-7 pt-2 border-t border-[#1E3A5F]/40 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start animate-fadeIn"
                  >
                    {/* What I Build */}
                    <div className="lg:col-span-5 flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                        What I Build
                      </span>
                      <ul className="mt-1 space-y-1.5 font-body text-xs sm:text-sm text-[#CBD5E1]">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#38BDF8] mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono tracking-wider bg-[#07152F] text-[#CBD5E1] border border-[#1E3A5F] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Typical Use Cases & CTA */}
                    <div className="lg:col-span-3 flex flex-col justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-1">
                          Typical Use Cases
                        </span>
                        <ul className="space-y-1 font-mono text-[11px] text-[#94A3B8]">
                          {service.useCases &&
                            service.useCases.map((uc) => (
                              <li key={uc}>• {uc}</li>
                            ))}
                        </ul>
                      </div>

                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#38BDF8] hover:text-white font-bold transition-colors pt-2 border-t border-[#1E3A5F]/40"
                      >
                        <span>INQUIRE ABOUT THIS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
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
