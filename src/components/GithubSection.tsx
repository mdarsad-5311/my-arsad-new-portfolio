import React from "react";
import { ArrowUpRight, Terminal } from "lucide-react";
import { REPOSITORIES, DEVELOPER_INFO } from "@/data/portfolioData";

export default function GithubSection() {
  return (
    <section
      id="github"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Open Source & Code Craft"
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
                09 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Open Source &amp; Code Craft
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              BUILT WITH CODE.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub profile for ${DEVELOPER_INFO.name} (opens in a new tab)`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#001D4D] border border-[#38BDF8]/60 hover:border-[#38BDF8] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#002766] transition-all duration-200 rounded-lg shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] motion-reduce:transition-none"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </a>
          </div>
        </div>

        {/* Repositories 2-Column Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REPOSITORIES.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore repository: ${repo.name} (opens in a new tab)`}
              className="p-6 sm:p-8 bg-[#0D1D3A]/85 border border-[#1E3A5F] hover:border-[#38BDF8]/70 hover:bg-[#0E2042] transition-all duration-300 motion-reduce:transition-none flex flex-col justify-between group shadow-sm hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
            >
              <div>
                {/* Card Header: Language & Concept */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#1E3A5F]/60">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] font-semibold">
                    <Terminal className="w-4 h-4 text-[#38BDF8]" />
                    <span>{repo.language}</span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                    Repository Concept
                  </span>
                </div>

                {/* Card Title & Description */}
                <div className="mt-5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200 flex items-center justify-between gap-3">
                    <span className="break-words">{repo.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#38BDF8] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 motion-reduce:transform-none" />
                  </h3>
                  <p className="mt-3 font-body text-sm text-[#CBD5E1] leading-relaxed">
                    {repo.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech Tags & Explore Action */}
              <div className="mt-6 pt-4 border-t border-[#1E3A5F]/60 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-mono tracking-wider bg-[#000B25] text-[#38BDF8] border border-[#1E3A5F] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[#38BDF8] text-xs font-semibold flex items-center gap-1 group-hover:text-white transition-colors duration-200">
                  <span>Explore Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
