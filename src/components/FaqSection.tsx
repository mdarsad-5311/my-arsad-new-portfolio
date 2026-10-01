"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/portfolioData";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Frequently Asked Questions"
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
                11 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Inquiries &amp; Process
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              FREQUENTLY ASKED
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Transparent answers regarding architectural workflow, technical stack synergies,
              communication protocols, and project onboarding.
            </p>
          </div>
        </div>

        {/* Accordion List with Premium Dark Architectural Cards */}
        <div className="mt-10 sm:mt-12 flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${faq.number}`;
            const questionId = `faq-question-${faq.number}`;

            return (
              <div
                key={faq.number}
                className={`rounded-xl transition-all duration-300 motion-reduce:transition-none border ${
                  isOpen
                    ? "bg-[#001D47]/65 border-[#38BDF8] shadow-[0_10px_30px_rgba(56,189,248,0.14)] ring-1 ring-[#38BDF8]/25"
                    : "bg-[#0D1D3A]/75 border-[#1E3A5F] hover:border-[#38BDF8]/60 hover:bg-[#0D1D3A]"
                }`}
              >
                {/* Accessible FAQ Accordion Trigger Button */}
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-7 flex items-start justify-between gap-4 sm:gap-6 cursor-pointer rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] group"
                >
                  <div className="flex items-start gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#38BDF8] mt-0.5 shrink-0">
                      {faq.number}
                    </span>
                    <h3
                      className={`font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-200 motion-reduce:transition-none leading-snug ${
                        isOpen
                          ? "text-[#38BDF8]"
                          : "text-white group-hover:text-[#38BDF8]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus / Minus Circle Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 motion-reduce:transition-none ${
                      isOpen
                        ? "border-[#38BDF8] bg-[#001845] text-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                        : "border-[#1E3A5F] bg-[#001033] text-[#38BDF8] group-hover:border-[#38BDF8]/60 group-hover:bg-[#001A4D]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#38BDF8]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#38BDF8] group-hover:scale-110 transition-transform duration-200 motion-reduce:transform-none" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Answer Panel */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-6 pt-0">
                      <div className="pl-8 sm:pl-14 pr-2 sm:pr-8 text-[#CBD5E1] font-body text-sm sm:text-base leading-relaxed border-t border-[#1E3A5F]/50 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
