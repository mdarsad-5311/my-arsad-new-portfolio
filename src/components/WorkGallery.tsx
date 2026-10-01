"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch, Sparkles } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";

interface WorkGalleryProps {
  projects: ProjectItem[];
}

export default function WorkGallery({ projects }: WorkGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24" aria-label="Work Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div
          role="toolbar"
          aria-label="Filter projects by category"
          className="flex flex-wrap items-center gap-2.5 pb-12 sm:pb-16 border-b border-[#1E3A5F]"
        >
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] motion-reduce:transition-none ${
                  isSelected
                    ? "bg-[#0067FE] text-white font-semibold shadow-[0_2px_14px_rgba(0,103,254,0.45)] ring-1 ring-[#38BDF8]/40"
                    : "bg-[#0D1D3A] text-[#94A3B8] border border-[#1E3A5F] hover:text-white hover:border-[#38BDF8]/60"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isSelected
                      ? "bg-white/20 text-white font-bold"
                      : "bg-[#07152F] text-[#64748B] group-hover:text-[#94A3B8]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#0D1D3A]/70 border border-[#1E3A5F] hover:border-[#38BDF8]/60 transition-all duration-300 motion-reduce:transition-none overflow-hidden shadow-[0_10px_30px_rgba(3,9,20,0.4)] hover:shadow-[0_15px_40px_rgba(3,9,20,0.7)]"
            >
              {/* Media Preview Header (Fully Keyboard Accessible) */}
              <Link
                href={`/work/${project.slug}`}
                aria-label={`View case study: ${project.title}`}
                className="relative block aspect-[16/9] w-full overflow-hidden bg-[#07152F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-inset"
              >
                <Image
                  src={project.image}
                  alt={`Screenshot preview of ${project.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D3A] via-transparent to-transparent opacity-80" />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#07152F]/90 backdrop-blur-md text-[#38BDF8] border border-[#1E3A5F]">
                    {project.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#07152F]/90 backdrop-blur-md text-[#94A3B8] border border-[#1E3A5F]">
                    {project.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  {project.role && (
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8] mb-2 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{project.role} — {project.year}</span>
                    </div>
                  )}

                  <Link
                    href={`/work/${project.slug}`}
                    aria-label={`Read case study: ${project.title}`}
                    className="group/title inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-sm"
                  >
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white group-hover/title:text-[#38BDF8] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-3 font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.shortDescription || project.overview}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E3A5F]/60">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-[#07152F] text-[#A8B4C7] border border-[#1E3A5F]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md font-mono text-[11px] text-[#64748B]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-[#1E3A5F]/60 flex items-center justify-between gap-4">
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`View full case study: ${project.title}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8] hover:text-white font-bold transition-colors group/cta focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-sm"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transform-none" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#07152F] border border-[#1E3A5F] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                          title="Live Demo"
                          aria-label={`Live demo for ${project.title} (opens in a new tab)`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#07152F] border border-[#1E3A5F] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                          title="Source Code"
                          aria-label={`Source code for ${project.title} (opens in a new tab)`}
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
