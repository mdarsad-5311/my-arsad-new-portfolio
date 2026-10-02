import React from "react";
import { WHY_WORK_WITH_ME } from "@/data/portfolioData";
import { Layers, ShieldCheck, MessageSquare, Target, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function WhyWorkWithMe() {
  const iconMap: Record<string, React.ElementType> = {
    "01": Layers,
    "02": ShieldCheck,
    "03": MessageSquare,
    "04": Target,
    "05": Clock,
  };

  return (
    <section
      id="why-me"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Why Work With Me - Client Value"
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

      {/* Ambient Radial Glow */}
      <div
        className="absolute top-1/3 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px] bg-gradient-to-br from-[#0067FE] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Split Layout: Left Anchor Headline & Right Vertical Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                04 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Client Advantage
              </span>
            </div>

            {/* Giant Editorial Statement */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
              FROM IDEA<br />
              <span className="text-[#38BDF8]">TO PRODUCTION.</span>
            </h2>

            <p className="font-body text-base text-[#CBD5E1] leading-relaxed">
              Direct technical execution without layers of agency bureaucracy. Built on verified full-stack capability, clean architectural discipline, and transparent communication.
            </p>

            {/* Architectural Trust Points */}
            <div className="p-5 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]/70 flex flex-col gap-3 font-mono text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Single-point technical accountability</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Direct engineer communication (no middlemen)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Production-grade code &amp; clean documentation</span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all duration-200 shadow-[0_4px_20px_rgba(0,103,254,0.35)] group"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Supporting Reasons in Strong Vertical Rhythm */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {WHY_WORK_WITH_ME.map((item) => {
              const Icon = iconMap[item.number] || ShieldCheck;

              return (
                <div
                  key={item.number}
                  className="group relative p-6 sm:p-8 bg-[#0D1D3A]/65 border border-[#1E3A5F]/70 hover:border-[#38BDF8]/60 hover:bg-[#0D1D3A]/95 transition-all duration-300 rounded-2xl flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,103,254,0.12)]"
                >
                  {/* Electric-Blue Left Highlight Indicator */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 bg-[#38BDF8] opacity-0 group-hover:opacity-100 rounded-r transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Header Row */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#1E3A5F]/50 mb-4">
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#38BDF8] font-bold">
                      <Icon className="w-4 h-4 text-[#38BDF8]" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="font-mono text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200">
                    {item.number} {item.title}
                  </h3>

                  <p className="font-mono text-xs text-[#38BDF8] mt-1 mb-3 leading-relaxed font-semibold">
                    {item.tagline}
                  </p>

                  <p className="font-body text-sm text-[#CBD5E1] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-5 pt-3 border-t border-[#1E3A5F]/40 flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
                    <span className="text-[#38BDF8] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      VERIFIED DISCIPLINE
                    </span>
                    <span className="text-[#64748B] group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all duration-200">
                      {"// PRODUCTION READY →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
