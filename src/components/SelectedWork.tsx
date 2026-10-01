import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-28 lg:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] overflow-hidden"
    >
      {/* 1. Background Architectural Grid Pattern */}
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
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px] bg-gradient-to-br from-[#0067FE] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold">
                02 —
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B4C7]">
                Curated Case Studies
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white select-none">
              SELECTED WORK
            </h2>
          </div>

          <div className="max-w-md flex flex-col sm:items-end gap-4">
            <p className="font-body text-sm sm:text-base text-[#A8B4C7] leading-relaxed sm:text-right">
              Engineered for real-world impact. Full-stack digital products, scalable enterprise
              platforms, and editorial web experiences built with architectural discipline.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs uppercase tracking-wider hover:bg-[#38BDF8] hover:text-[#00081C] hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="mt-14 sm:mt-20 flex flex-col gap-16 sm:gap-24">
          {PROJECTS.map((project, index) => {
            // Flagship composition for projects 01 and 04
            const isFlagship = index === 0 || index === 3;
            // Alternating split composition for other projects
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group relative border-b border-[#1E3A5F]/60 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
              >
                {isFlagship ? (
                  /* =========================================================================
                     Composition A: Monumental Full-Width Featured Showcase (Projects 01 & 04)
                     ========================================================================= */
                  <div className="flex flex-col gap-6 sm:gap-8">
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#A8B4C7]">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-[#38BDF8]">
                          {project.number}
                        </span>
                        <span className="text-[#38BDF8]/40 select-none">/</span>
                        <span className="text-white font-semibold">{project.category}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{project.year}</span>
                        <span className="hidden sm:inline-block text-[#38BDF8]/40 select-none">•</span>
                        <span className="hidden sm:inline-block text-[#CBD5E1]">
                          {project.projectType}
                        </span>
                      </div>
                    </div>

                    {/* Image Canvas with Subtle Electric-Blue Accent on Hover */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="relative block w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#0D1D3A] border border-[#1E3A5F] group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_12px_40px_rgba(0,103,254,0.2)] rounded-xl transition-all duration-500 cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] opacity-90 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                      />
                      {/* Ambient Vignette Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/60 via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-300" />

                      {/* Floating Case Study Badge on Desktop */}
                      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 px-4 py-2 bg-[#00081C]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono tracking-widest uppercase backdrop-blur-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] rounded-lg">
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>

                    {/* Title and Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline pt-2">
                      <div className="lg:col-span-7">
                        <Link href={`/work/${project.slug}`} className="inline-block group/title">
                          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white group-hover/title:text-[#38BDF8] transition-colors duration-300">
                            {project.title}
                          </h3>
                        </Link>
                        <p className="mt-3 font-body text-sm sm:text-base text-[#A8B4C7] max-w-2xl leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Architectural Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#1E3A5F]/50 font-mono text-xs">
                            {project.highlights.slice(0, 4).map((item) => (
                              <div key={item.label} className="border-l border-[#1E3A5F] pl-2.5">
                                <span className="text-[10px] uppercase text-[#A8B4C7] block">
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

                      <div className="lg:col-span-5 flex flex-col sm:items-end justify-between gap-5">
                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2 sm:justify-end">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-[#0D1D3A]/80 text-[#CBD5E1] border border-[#1E3A5F] rounded hover:border-[#38BDF8]/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Links */}
                        <div className="flex items-center gap-5 mt-2">
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8] hover:text-white transition-colors duration-300 font-semibold group/btn"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>

                          {/* GitHub link if exists */}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#A8B4C7] hover:text-white transition-colors duration-300"
                              aria-label={`View ${project.title} source code on GitHub`}
                            >
                              <GitBranch className="w-3.5 h-3.5" />
                              <span>CODE</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* =========================================================================
                     Composition B: Alternating Asymmetric Split Grid Layout
                     ========================================================================= */
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isReversed ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Media Column */}
                    <div
                      className={`lg:col-span-7 ${
                        isReversed ? "lg:col-start-6" : "lg:col-start-1"
                      }`}
                    >
                      <Link
                        href={`/work/${project.slug}`}
                        className="relative block w-full aspect-[16/10] overflow-hidden bg-[#0D1D3A] border border-[#1E3A5F] group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_12px_40px_rgba(0,103,254,0.2)] rounded-xl transition-all duration-500 cursor-pointer"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] opacity-90 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none"
                          sizes="(max-width: 1024px) 100vw, 700px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/60 via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-300" />

                        {/* Floating Case Study Badge on Desktop */}
                        <div className="absolute bottom-5 right-5 hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#00081C]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono tracking-widest uppercase backdrop-blur-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-lg">
                          <span>CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-between ${
                        isReversed ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div>
                        {/* Meta with Electric Cyan */}
                        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#A8B4C7] mb-3">
                          <span className="font-display text-2xl font-bold text-[#38BDF8]">
                            {project.number}
                          </span>
                          <span className="text-[#38BDF8]/40 select-none">/</span>
                          <span className="text-white font-semibold">{project.category}</span>
                          <span className="text-[#38BDF8]/40 select-none">•</span>
                          <span>{project.year}</span>
                        </div>

                        <Link href={`/work/${project.slug}`} className="inline-block group/title">
                          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover/title:text-[#38BDF8] transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                        </Link>

                        <p className="mt-4 font-body text-sm sm:text-base text-[#A8B4C7] leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Architectural Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                          <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-[#1E3A5F]/50 font-mono text-xs">
                            {project.highlights.slice(0, 2).map((item) => (
                              <div key={item.label} className="border-l border-[#1E3A5F] pl-2.5">
                                <span className="text-[10px] uppercase text-[#A8B4C7] block">
                                  {item.label}
                                </span>
                                <span className="font-display text-sm font-semibold text-white mt-0.5 block">
                                  {item.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Technology Badges */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-[#0D1D3A]/80 text-[#CBD5E1] border border-[#1E3A5F] rounded hover:border-[#38BDF8]/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Links */}
                      <div className="mt-8 pt-4 border-t border-[#1E3A5F]/40 flex items-center gap-5">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8] hover:text-white transition-colors duration-300 font-semibold group/link"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#A8B4C7] hover:text-white transition-colors duration-300"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <GitBranch className="w-3.5 h-3.5" />
                            <span>CODE</span>
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
