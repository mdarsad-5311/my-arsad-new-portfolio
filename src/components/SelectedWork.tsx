import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative py-28 sm:py-36 border-b border-[#1E3A5F]/40 bg-[#00081C] overflow-hidden"
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
        className="absolute top-1/4 -right-40 w-[650px] h-[650px] rounded-full pointer-events-none opacity-20 blur-[150px] bg-gradient-to-br from-[#0067FE] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 sm:pb-20 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
                02 —
              </span>
              <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
                Curated Case Studies &amp; Production Systems
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white select-none">
              SELECTED WORK
            </h2>
          </div>

          <div className="max-w-md flex flex-col sm:items-end gap-4">
            <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed sm:text-right">
              Demonstrated capability across full-stack applications, enterprise platforms, and headless systems built to solve real operational problems.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs uppercase tracking-wider hover:bg-[#38BDF8] hover:text-[#00081C] hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <span>VIEW ALL CASE STUDIES</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Project Showcase: Alternating Asymmetrical Composition */}
        <div className="mt-16 sm:mt-24 flex flex-col gap-24 sm:gap-36">
          {PROJECTS.map((project, index) => {
            // Flagship monumental layout for projects 01 & 04
            const isMonumental = index === 0 || index === 3;
            // Alternating split composition for other projects
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group relative border-b border-[#1E3A5F]/40 pb-20 sm:pb-32 last:border-b-0 last:pb-0"
              >
                {isMonumental ? (
                  /* =========================================================================
                     COMPOSITION A: MONUMENTAL FULL-WIDTH EDITORIAL SHOWCASE (Projects 01 & 04)
                     ========================================================================= */
                  <div className="flex flex-col gap-8 sm:gap-10">
                    {/* Top Metadata Row: PROJECT NUMBER + CATEGORY + YEAR */}
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-[#38BDF8]">
                          {project.number}
                        </span>
                        <span className="text-[#38BDF8]/40 select-none">/</span>
                        <span className="text-white font-semibold tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{project.year}</span>
                        <span className="hidden sm:inline-block text-[#38BDF8]/40 select-none">•</span>
                        <span className="hidden sm:inline-block text-[#CBD5E1]">
                          {project.projectType}
                        </span>
                      </div>
                    </div>

                    {/* PROJECT TITLE & ONE-SENTENCE VALUE PROPOSITION */}
                    <div>
                      <Link href={`/work/${project.slug}`} className="group/title inline-block">
                        <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white group-hover/title:text-[#38BDF8] transition-colors duration-200">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="mt-3 font-body text-base sm:text-lg text-[#CBD5E1] max-w-3xl leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* LARGE VISUAL WITH SUBTLE FRAME, SOFT SHADOW & HOVER SCALE 1.025 */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="relative block w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#0D1D3A] border border-[#1E3A5F]/80 group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_16px_48px_rgba(0,103,254,0.22)] rounded-2xl transition-all duration-500 cursor-pointer shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-95 group-hover:opacity-100"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/70 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                      {/* Floating Case Study Action Pill */}
                      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 flex items-center gap-2 px-4 py-2 bg-[#00081C]/92 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono tracking-widest uppercase backdrop-blur-md opacity-90 sm:opacity-0 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] rounded-lg">
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>

                    {/* STORY DETAILS & SPECIFICATION GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                      {/* Challenge & Solution */}
                      <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-[#0D1D3A]/50 border border-[#1E3A5F]/70">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#38BDF8] font-bold block mb-1.5">
                              THE CHALLENGE
                            </span>
                            <p className="font-body text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#38BDF8] font-bold block mb-1.5">
                              THE ARCHITECTURAL SOLUTION
                            </span>
                            <p className="font-body text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Architectural Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#1E3A5F]/50 font-mono text-xs">
                            {project.highlights.slice(0, 4).map((item) => (
                              <div key={item.label} className="border-l border-[#1E3A5F] pl-2.5">
                                <span className="text-[10px] uppercase text-[#94A3B8] block">
                                  {item.label}
                                </span>
                                <span className="font-display text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                                  {item.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Details Column: Tech Stack & Actions */}
                      <div className="lg:col-span-5 flex flex-col sm:items-end justify-between gap-6">
                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2 sm:justify-end">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-[#07152F] text-[#CBD5E1] border border-[#1E3A5F] rounded hover:border-[#38BDF8]/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Actions: VIEW CASE STUDY / LIVE DEMO / SOURCE CODE */}
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all shadow-[0_2px_12px_rgba(0,103,254,0.35)]"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>

                          {project.liveUrl && project.liveUrl !== project.githubUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8]/60 text-white font-mono text-xs uppercase tracking-wider transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                              <span>LIVE DEMO</span>
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8]/60 text-[#CBD5E1] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
                            >
                              <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
                              <span>SOURCE CODE</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* =========================================================================
                     COMPOSITION B: ASYMMETRICAL 2-COLUMN OFFSET CARD (Projects 02, 03, 05, 06)
                     ========================================================================= */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Visual Preview Side (Alternates based on isReversed) */}
                    <div
                      className={`lg:col-span-7 ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <Link
                        href={`/work/${project.slug}`}
                        className="relative block w-full aspect-[16/10] overflow-hidden bg-[#0D1D3A] border border-[#1E3A5F]/80 group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_16px_40px_rgba(0,103,254,0.18)] rounded-2xl transition-all duration-500 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-95 group-hover:opacity-100"
                          sizes="(max-width: 1024px) 100vw, 680px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/60 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                        {/* Top index badge */}
                        <div className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 rounded bg-[#00081C]/85 backdrop-blur-md border border-white/10 text-white font-bold">
                          {project.number}
                        </div>
                      </Link>
                    </div>

                    {/* Narrative & Details Side */}
                    <div
                      className={`lg:col-span-5 flex flex-col gap-4 ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* PROJECT NUMBER & CATEGORY & YEAR */}
                      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
                        <span className="text-[#38BDF8] font-bold">{project.category}</span>
                        <span className="text-[#1E3A5F]">•</span>
                        <span>{project.year}</span>
                      </div>

                      {/* PROJECT TITLE */}
                      <Link href={`/work/${project.slug}`} className="group/title inline-block">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover/title:text-[#38BDF8] transition-colors duration-200">
                          {project.title}
                        </h3>
                      </Link>

                      {/* ONE-SENTENCE VALUE PROPOSITION */}
                      <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* CHALLENGE & SOLUTION SNIPPET */}
                      <div className="p-4 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]/70 flex flex-col gap-2.5">
                        <div>
                          <span className="font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider font-bold block">
                            THE CHALLENGE
                          </span>
                          <p className="font-body text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                            {project.problem}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-[#1E3A5F]/40">
                          <span className="font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider font-bold block">
                            THE SOLUTION
                          </span>
                          <p className="font-body text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* TECHNOLOGY CHIPS */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-[#07152F] text-[#CBD5E1] border border-[#1E3A5F] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8] hover:text-white font-bold transition-colors group/btn"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>

                        {project.liveUrl && project.liveUrl !== project.githubUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title} (opens in a new tab)`}
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#94A3B8] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-sm"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>LIVE DEMO</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Source code for ${project.title} on GitHub (opens in a new tab)`}
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#94A3B8] hover:text-[#38BDF8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-sm"
                          >
                            <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>SOURCE CODE</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
