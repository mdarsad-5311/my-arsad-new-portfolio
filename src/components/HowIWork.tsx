"use client";

import React, { useState } from "react";
import { WORKFLOW_STEPS } from "@/data/portfolioData";
import { CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

export default function HowIWork() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      id="workflow"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="How I Work - 6-Phase Engineering Workflow"
    >
      {/* Background Architectural Grid Pattern */}
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
        className="absolute bottom-10 right-10 w-[550px] h-[450px] rounded-full bg-[#0067FE]/[0.05] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                05 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Execution Methodology
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              HOW I WORK
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              A structured 6-phase engineering lifecycle that replaces guesswork with milestone-based delivery, constant communication, and verified production code.
            </p>
          </div>
        </div>

        {/* Workflow Overview Breadcrumbs Band */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-[#0D1D3A]/40 border border-[#1E3A5F]/60 flex items-center justify-between overflow-x-auto gap-2 text-xs font-mono">
          {WORKFLOW_STEPS.map((s, idx) => (
            <React.Fragment key={s.step}>
              <button
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeStage === idx
                    ? "bg-[#0067FE] text-white font-bold shadow-[0_0_15px_rgba(0,103,254,0.4)]"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#1E3A5F]/40"
                }`}
              >
                <span>{s.step}</span>
                <span>{s.title}</span>
              </button>
              {idx < WORKFLOW_STEPS.length - 1 && (
                <span className="text-[#38BDF8]/40 shrink-0 font-bold">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Connected Workflow Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Vertical Connecting Line Spine (Desktop) */}
          <div
            className="hidden md:block absolute left-8 lg:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#38BDF8] via-[#0067FE] to-[#38BDF8]/30 pointer-events-none opacity-40"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 sm:gap-12 relative">
            {WORKFLOW_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeStage === index;
              const isLast = index === WORKFLOW_STEPS.length - 1;

              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveStage(index)}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center transition-all duration-300 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Connector Node (Center on md+, Left on mobile) */}
                  <div className="hidden md:flex absolute left-8 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveStage(index)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#38BDF8] bg-[#001438] text-white shadow-[0_0_20px_rgba(56,189,248,0.6)] scale-110"
                          : "border-[#1E3A5F] bg-[#00081C] text-[#94A3B8] hover:border-[#38BDF8]/60"
                      }`}
                    >
                      {step.step}
                    </button>
                  </div>

                  {/* Left Column / Card on Even, Right on Odd */}
                  <div
                    className={`${
                      isEven ? "md:text-right md:pr-12 lg:pr-16" : "md:order-2 md:pl-12 lg:pl-16"
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "bg-[#0D1D3A]/90 border-[#38BDF8] shadow-[0_8px_30px_rgba(56,189,248,0.18)] ring-1 ring-[#38BDF8]/30"
                          : "bg-[#0D1D3A]/50 border-[#1E3A5F]/70 hover:border-[#38BDF8]/50 hover:bg-[#0D1D3A]/70"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 pb-3 border-b border-[#1E3A5F]/50 mb-4 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="font-mono text-sm font-bold text-[#38BDF8]">
                          PHASE {step.step}
                        </span>
                        <span className="text-[#38BDF8]/40">—</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                          {step.title}
                        </span>
                        {isActive && (
                          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                        {step.subtitle}
                      </h3>

                      <p className="font-body text-sm text-[#CBD5E1] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="pt-4 border-t border-[#1E3A5F]/40">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] block mb-2 font-semibold">
                          Key Deliverables:
                        </span>
                        <div
                          className={`flex flex-wrap gap-1.5 ${
                            isEven ? "md:justify-end" : "justify-start"
                          }`}
                        >
                          {step.deliverables.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded bg-[#07152F] border border-[#1E3A5F] text-[11px] font-mono text-[#CBD5E1]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Balance & Downward Connector Arrow */}
                  <div
                    className={`hidden md:flex flex-col justify-center ${
                      isEven ? "md:order-2 md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16 md:text-right"
                    }`}
                  >
                    {!isLast ? (
                      <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]/60">
                        <span className="tracking-widest uppercase">
                          NEXT PHASE: {WORKFLOW_STEPS[index + 1].title}
                        </span>
                        <ChevronDown className="w-4 h-4 text-[#38BDF8] animate-bounce" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                        <span className="tracking-widest uppercase font-bold">
                          PRODUCTION LAUNCH &amp; HANDOFF COMPLETE
                        </span>
                      </div>
                    )}
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
