import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Experience & Technical Development"
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
        className="absolute -top-32 right-1/4 w-[600px] h-[400px] rounded-full bg-[#0067FE]/[0.04] blur-[130px] pointer-events-none"
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
                07 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Career &amp; Technical Development
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              EXPERIENCE &amp; DEVELOPMENT
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Core development focus areas across full-stack systems, modern component architecture, and production-grade RESTful API integrations.
            </p>
          </div>
        </div>

        {/* Editorial Timeline with Left Vertical Line & Distinct Nodes */}
        <div className="mt-12 relative">
          {/* Continuous Vertical Timeline Line */}
          <div
            className="hidden lg:block absolute left-[280px] top-6 bottom-6 w-px bg-gradient-to-b from-[#38BDF8] via-[#1E3A5F] to-[#1E3A5F]/40 pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 sm:gap-14">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.period}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start p-6 sm:p-8 rounded-2xl bg-[#0D1D3A]/40 border border-[#1E3A5F]/60 hover:border-[#38BDF8]/60 hover:bg-[#0D1D3A]/80 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                {/* Timeline Node (Desktop) */}
                <div
                  className="hidden lg:flex absolute left-[280px] top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00081C] border-2 border-[#38BDF8] items-center justify-center group-hover:shadow-[0_0_12px_#38BDF8] transition-all duration-300 z-10"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                </div>

                {/* Left Column: Date & Domain Pill (lg:col-span-3) */}
                <div className="lg:col-span-3 flex flex-col gap-3 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] lg:hidden" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 text-[11px] font-mono tracking-wider uppercase bg-[#000E2E] text-[#38BDF8] border border-[#1E3A5F] rounded-md w-fit font-semibold">
                    {exp.type}
                  </span>

                  <span className="text-[11px] text-[#64748B] tracking-widest uppercase">
                    {"// TRACK 0"}{index + 1}
                  </span>
                </div>

                {/* Right Column: Role, Organization, Narrative, Highlights & Technologies (lg:col-span-9) */}
                <div className="lg:col-span-9 flex flex-col gap-5 lg:pl-6">
                  {/* Role Header */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-wider uppercase">
                        {exp.organization}
                      </span>
                      <span className="text-[#64748B] font-mono text-xs">•</span>
                      <span className="font-mono text-xs text-[#94A3B8]">
                        Technical Execution
                      </span>
                    </div>
                  </div>

                  {/* Narrative */}
                  <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-[#1E3A5F]/40">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#38BDF8] font-bold block mb-3">
                      Key Engineering Responsibilities:
                    </span>
                    <ul className="space-y-2.5 font-mono text-xs sm:text-[13px] text-[#CBD5E1]">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-[#CBD5E1] bg-[#001033] border border-[#1E3A5F] rounded hover:border-[#38BDF8]/60 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
