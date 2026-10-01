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
                05 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Technical Practice
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              EXPERIENCE &amp; DEVELOPMENT
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Core development focus areas across full-stack systems, modern component
              architecture, and RESTful API integrations.
            </p>
          </div>
        </div>

        {/* Clean Editorial Timeline with Architectural Dividers */}
        <div className="mt-8 divide-y divide-[#1E3A5F]/40 border-y border-[#1E3A5F]/40">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.period}
              className="group relative py-10 sm:py-14 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-xl transition-all duration-300 motion-reduce:transition-none hover:bg-[#030F26]/50"
            >
              {/* Electric-Blue Left Accent Border on Hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-l motion-reduce:transition-none"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Period, Domain Badge & Index */}
                <div className="lg:col-span-4 flex flex-col gap-3 font-mono">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-[#38BDF8] group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base font-bold text-[#38BDF8] tracking-widest uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 text-[11px] font-mono tracking-wider uppercase bg-[#000E2E] text-[#94A3B8] group-hover:text-white group-hover:border-[#38BDF8]/60 w-fit border border-[#1E3A5F] rounded transition-colors duration-200 motion-reduce:transition-none">
                    {exp.type}
                  </span>

                  <span className="text-[11px] text-[#64748B] tracking-widest uppercase">
                    {"// TRACK 0"}{index + 1}
                  </span>
                </div>

                {/* Right Column: Role, Organization, Narrative, Highlights & Technologies */}
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200 motion-reduce:transition-none">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider uppercase block mt-1.5">
                      {exp.organization}
                    </span>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-[#1E3A5F]/30">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#38BDF8] font-bold block mb-3">
                      Key Engineering Highlights
                    </span>
                    <ul className="space-y-2.5 font-mono text-xs sm:text-[13px] text-[#CBD5E1]">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 group/item">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0 group-hover/item:scale-125 transition-transform duration-200 motion-reduce:transition-none"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Pills */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
