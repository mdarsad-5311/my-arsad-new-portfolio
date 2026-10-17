"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Sparkles,
  Search,
  X,
  LayoutGrid,
  Layers,
  Lock,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";

interface WorkGalleryProps {
  projects?: ProjectItem[];
}

const PROJECT_DOMAINS: Record<string, string> = {
  "al-umaima-ecommerce": "al-umaima.store",
  "docusense-ai": "ai-frontend-smoky-xi.vercel.app",
  "nexus-metrics": "nexus-metrics-coral.vercel.app",
  "kalycor-corporate": "kalycor.global",
  "daania-skincare": "mdarsad5311.pythonanywhere.com",
  "educareer360": "career360-zeta.vercel.app",
  "freshly-grocery-app": "freshly.app",
};

export default function WorkGallery({ projects: initialProjects }: WorkGalleryProps) {
  const { projects: contextProjects, t, language } = usePortfolio();
  const projects = initialProjects || contextProjects;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");

  // Derive unique categories
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  }, [projects]);

  // Derive popular technologies for quick filtering
  const popularTech = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => {
      p.technologies.forEach((t) => {
        if (["Next.js", "Django", "TypeScript", "React", "React Native", "Expo", "Tailwind CSS", "PostgreSQL", "Python"].includes(t)) {
          techSet.add(t);
        }
      });
    });
    return ["All", ...Array.from(techSet)];
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== "All" && project.category !== selectedCategory) {
        return false;
      }
      // Technology filter
      if (selectedTech !== "All" && !project.technologies.includes(selectedTech)) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = project.title.toLowerCase().includes(query);
        const matchDesc = (project.shortDescription || project.overview || "").toLowerCase().includes(query);
        const matchTech = project.technologies.some((t) => t.toLowerCase().includes(query));
        const matchProblem = (project.problem || "").toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchTech && !matchProblem) {
          return false;
        }
      }
      return true;
    });
  }, [projects, selectedCategory, selectedTech, searchQuery]);

  const hasActiveFilters = selectedCategory !== "All" || selectedTech !== "All" || searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedTech("All");
    setSearchQuery("");
  };

  const getDomain = (project: ProjectItem) => {
    if (PROJECT_DOMAINS[project.slug]) return PROJECT_DOMAINS[project.slug];
    if (project.liveUrl) {
      try {
        return new URL(project.liveUrl).hostname;
      } catch {
        return `${project.slug}.vercel.app`;
      }
    }
    return `${project.slug}.vercel.app`;
  };

  return (
    <section className="py-12 sm:py-20 work-gallery-section" aria-label="Work Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            INTERACTIVE CONTROLS BAR: CATEGORY, TECH, SEARCH & VIEW SWITCHER
            ========================================================================= */}
        <div className="flex flex-col gap-6 pb-10 sm:pb-14 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/70">
          {/* Top Row: Search input + View switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-[#94A3B8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "hi"
                    ? "कीवर्ड, आर्किटेक्चर या तकनीक से खोजें..."
                    : "Filter systems by keyword, stack, or problem..."
                }
                className="w-full pl-10 pr-10 py-2.5 rounded-full text-xs font-mono bg-white dark:bg-[#0D1D3A]/90 border border-slate-300 dark:border-[#1E3A5F] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0067FE] dark:focus:ring-[#38BDF8] shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 dark:text-[#94A3B8] dark:hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Right: Layout Switcher + Reset Button */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono bg-slate-100 hover:bg-slate-200 dark:bg-[#0D1D3A] dark:hover:bg-[#1E3A5F] text-slate-700 dark:text-[#CBD5E1] border border-slate-300 dark:border-[#1E3A5F] transition-colors"
                >
                  <RotateCcw className="w-3 h-3 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>{language === "hi" ? "रीसेट करें" : "Reset Filters"}</span>
                </button>
              )}

              {/* View Switcher: Showcase vs Grid */}
              <div
                role="group"
                aria-label="View Mode Switcher"
                className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-[#0D1D3A] border border-slate-300 dark:border-[#1E3A5F]"
              >
                <button
                  type="button"
                  onClick={() => setViewMode("showcase")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    viewMode === "showcase"
                      ? "bg-[#0067FE] text-white font-semibold shadow-[0_2px_10px_rgba(0,103,254,0.35)]"
                      : "text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="Editorial Showcase View"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {language === "hi" ? "विस्तृत दृश्य" : "Showcase"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-[#0067FE] text-white font-semibold shadow-[0_2px_10px_rgba(0,103,254,0.35)]"
                      : "text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="Architecture Matrix Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {language === "hi" ? "ग्रिड दृश्य" : "Grid Spec"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            role="toolbar"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              const catLabel = cat === "All" ? (language === "hi" ? "सभी सिस्टम्स" : "All Systems") : cat;

              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#0067FE] text-white font-semibold shadow-[0_2px_12px_rgba(0,103,254,0.35)] ring-1 ring-[#00BFFF]/40"
                      : "bg-white dark:bg-[#0D1D3A] text-slate-700 dark:text-[#94A3B8] border border-slate-300 dark:border-[#1E3A5F] hover:border-[#0067FE]/60 dark:hover:border-[#38BDF8]/60 hover:text-slate-900 dark:hover:text-white shadow-sm"
                  }`}
                >
                  <span>{catLabel}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                      isSelected
                        ? "bg-white/25 text-white"
                        : "bg-slate-100 dark:bg-[#07152F] text-slate-600 dark:text-[#64748B] group-hover:text-slate-900 dark:group-hover:text-[#94A3B8]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Technology Chips Filter Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#64748B] mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-[#0067FE] dark:text-[#38BDF8]" />
              <span>{language === "hi" ? "तकनीक फिल्टर:" : "Stack:"}</span>
            </span>
            {popularTech.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setSelectedTech(tech)}
                  className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all duration-150 ${
                    isSelected
                      ? "bg-blue-100 text-[#0067FE] font-bold border border-[#0067FE]/50 dark:bg-[#0067FE]/20 dark:text-[#38BDF8] dark:border-[#38BDF8]/40"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-[#07152F] dark:hover:bg-[#0D1D3A] text-slate-600 dark:text-[#94A3B8] border border-slate-200 dark:border-[#1E3A5F]/70"
                  }`}
                >
                  {tech === "All" ? (language === "hi" ? "सभी तकनीकें" : "All Tech") : tech}
                </button>
              );
            })}
          </div>

          {/* Status Counter Strip */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8] pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {language === "hi"
                  ? `${filteredProjects.length} सत्यापित प्रोडक्शन सिस्टम्स प्रदर्शित`
                  : `Displaying ${filteredProjects.length} of ${projects.length} verified production systems`}
              </span>
            </div>
            {hasActiveFilters && (
              <span className="text-[#0067FE] dark:text-[#38BDF8] font-semibold">
                {language === "hi" ? "फ़िल्टर सक्रिय" : "Filters active"}
              </span>
            )}
          </div>
        </div>

        {/* =========================================================================
            EMPTY STATE (If no projects match query)
            ========================================================================= */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-[#0D1D3A] border border-blue-200 dark:border-[#1E3A5F] text-[#0067FE] dark:text-[#38BDF8] mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-slate-900 dark:text-white">
              {language === "hi" ? "कोई प्रोजेक्ट नहीं मिला" : "No Matching Production Systems Found"}
            </h3>
            <p className="mt-2 font-body text-sm text-slate-600 dark:text-[#94A3B8] max-w-md mx-auto">
              {language === "hi"
                ? "आपके खोज मापदंड से कोई सिस्टम मेल नहीं खाता। कृपया फ़िल्टर रीसेट करें।"
                : "No systems matched your active filter or search criteria. Try broadening your keywords."}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0067FE] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#0056EE] transition-all shadow-md"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "सभी फ़िल्टर साफ़ करें" : "Reset All Filters"}</span>
            </button>
          </div>
        )}

        {/* =========================================================================
            VIEW MODE A: MONUMENTAL EDITORIAL SHOWCASE (Matching Attachment 1 & 2)
            ========================================================================= */}
        {viewMode === "showcase" && filteredProjects.length > 0 && (
          <div className="mt-14 sm:mt-20 flex flex-col gap-24 sm:gap-32">
            {filteredProjects.map((project, index) => {
              const domain = getDomain(project);

              return (
                <article
                  key={project.id}
                  className="group relative border-b border-[#D8E3F0] dark:border-[#1E3A5F]/50 pb-20 sm:pb-28 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-8 sm:gap-10">
                    {/* Top Metadata Row: PROJECT NUMBER + CATEGORY + YEAR */}
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-[#94A3B8]">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-[#0067FE] dark:text-[#38BDF8]">
                          {project.number || `0${index + 1}`}
                        </span>
                        <span className="text-[#0067FE]/40 dark:text-[#38BDF8]/40 select-none">/</span>
                        <span className="text-slate-900 dark:text-white font-bold tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-slate-700 dark:text-[#CBD5E1]">{project.year}</span>
                        <span className="hidden sm:inline-block text-[#0067FE]/40 dark:text-[#38BDF8]/40 select-none">•</span>
                        <span className="hidden sm:inline-block text-slate-600 dark:text-[#CBD5E1]">
                          {project.projectType}
                        </span>
                      </div>
                    </div>

                    {/* PROJECT TITLE & ONE-SENTENCE VALUE PROPOSITION */}
                    <div>
                      <Link href={`/work/${project.slug}`} className="group/title inline-block">
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white group-hover/title:text-[#0067FE] dark:group-hover/title:text-[#38BDF8] transition-colors duration-200">
                          {project.title}
                        </h2>
                      </Link>
                      <p className="mt-3 font-body text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] max-w-3xl leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* =========================================================================
                        BROWSER WINDOW FRAME MOCKUP (Attachment 2 Blueprint)
                        - Top window chrome with macOS control dots & URL address bar
                        - Crisp white container with subtle border & depth shadow
                        ========================================================================= */}
                    <div className="relative rounded-2xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F]/80 shadow-[0_16px_45px_rgba(0,102,254,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] group-hover:border-[#0067FE]/50 dark:group-hover:border-[#38BDF8]/50 transition-all duration-500 overflow-hidden">
                      {/* Browser Chrome Header Bar */}
                      <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-100/90 dark:bg-[#07152F] border-b border-slate-200 dark:border-[#1E3A5F]/70">
                        {/* Window Action Dots */}
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-[#DC2626]/30 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-[#D97706]/30 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#10B981] border border-[#059669]/30 inline-block" />
                        </div>

                        {/* Centered URL Address Pill */}
                        <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] text-[11px] font-mono text-slate-600 dark:text-[#A8B4C7] max-w-xs sm:max-w-md truncate shadow-2xs">
                          <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="truncate">https://{domain}</span>
                        </div>

                        {/* Top-Right Category Pill / External link */}
                        <div className="flex items-center gap-2">
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-500 hover:text-[#0067FE] dark:text-[#94A3B8] dark:hover:text-[#38BDF8] transition-colors"
                              title="Open Live Deployment"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <span className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>

                      {/* Image Preview Container */}
                      <Link
                        href={`/work/${project.slug}`}
                        className="relative block w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-50 dark:bg-[#07152F] cursor-pointer"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 1280px) 100vw, 1200px"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#00081C]/75 via-transparent to-transparent pointer-events-none group-hover:opacity-40 transition-opacity" />

                        {/* Floating Case Study Action Pill */}
                        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 flex items-center gap-2 px-4 py-2 bg-white/95 dark:bg-[#00081C]/92 border border-slate-300 dark:border-[#38BDF8]/40 text-[#0067FE] dark:text-[#38BDF8] text-xs font-mono tracking-widest uppercase backdrop-blur-md opacity-90 sm:opacity-0 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg rounded-lg font-bold">
                          <span>{t.selectedWork.viewCaseStudy}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>

                    {/* STORY DETAILS & SPECIFICATION GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                      {/* Challenge & Solution */}
                      <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-slate-50/90 dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F]/70 shadow-2xs">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block mb-1.5">
                              {t.selectedWork.theChallenge}
                            </span>
                            <p className="font-body text-xs text-slate-700 dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block mb-1.5">
                              {t.selectedWork.theSolution}
                            </span>
                            <p className="font-body text-xs text-slate-700 dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Architectural Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-200 dark:border-[#1E3A5F]/50 font-mono text-xs">
                            {project.highlights.slice(0, 4).map((item) => (
                              <div key={item.label} className="border-l-2 border-[#0067FE]/40 dark:border-[#1E3A5F] pl-2.5">
                                <span className="text-[10px] uppercase text-slate-500 dark:text-[#94A3B8] block font-semibold">
                                  {item.label}
                                </span>
                                <span className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
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
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-slate-100 dark:bg-[#07152F] text-slate-800 dark:text-[#CBD5E1] border border-slate-200 dark:border-[#1E3A5F] rounded-md font-medium"
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
                            <span>{t.selectedWork.viewCaseStudy}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white dark:bg-[#07152F] border border-slate-300 dark:border-[#1E3A5F] hover:border-[#0067FE] dark:hover:border-[#38BDF8] text-slate-800 dark:text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-2xs hover:shadow-sm transition-all"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                              <span>{t.selectedWork.liveDemo}</span>
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white dark:bg-[#07152F] border border-slate-300 dark:border-[#1E3A5F] hover:border-[#0067FE] dark:hover:border-[#38BDF8] text-slate-700 dark:text-[#CBD5E1] hover:text-slate-900 dark:hover:text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-2xs"
                            >
                              <GitBranch className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                              <span>{t.selectedWork.sourceCode}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            VIEW MODE B: ARCHITECTURE MATRIX / 2-COLUMN GRID VIEW
            ========================================================================= */}
        {viewMode === "grid" && filteredProjects.length > 0 && (
          <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
            {filteredProjects.map((project, index) => {
              const domain = getDomain(project);

              return (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-2xl bg-white dark:bg-[#0D1D3A]/70 border border-slate-200 dark:border-[#1E3A5F] hover:border-[#0067FE]/60 dark:hover:border-[#38BDF8]/60 transition-all duration-300 overflow-hidden shadow-[0_10px_35px_rgba(0,102,254,0.06)] dark:shadow-[0_15px_40px_rgba(3,9,20,0.7)]"
                >
                  {/* Browser Chrome Bar for Grid Card */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 dark:bg-[#07152F] border-b border-slate-200 dark:border-[#1E3A5F]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] text-[10px] font-mono text-slate-600 dark:text-[#94A3B8] max-w-[200px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{domain}</span>
                    </div>

                    <span className="font-mono text-[10px] text-slate-500 dark:text-[#94A3B8] font-bold">
                      {project.number || `0${index + 1}`}
                    </span>
                  </div>

                  {/* Media Preview Header */}
                  <Link
                    href={`/work/${project.slug}`}
                    aria-label={`View case study: ${project.title}`}
                    className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-[#07152F]"
                  >
                    <Image
                      src={project.image}
                      alt={`Screenshot preview of ${project.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0D1D3A] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 right-4 flex items-center pointer-events-none">
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 dark:bg-[#07152F]/90 backdrop-blur-md text-slate-800 dark:text-[#94A3B8] border border-slate-200 dark:border-[#1E3A5F] font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                    <div>
                      {project.role && (
                        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] mb-2 font-bold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{project.role} — {project.year}</span>
                        </div>
                      )}

                      <Link href={`/work/${project.slug}`} className="group/title inline-block">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-slate-900 dark:text-white group-hover/title:text-[#0067FE] dark:group-hover/title:text-[#38BDF8] transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </Link>

                      <p className="mt-3 font-body text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                        {project.shortDescription || project.overview}
                      </p>
                    </div>

                    {/* Tech Stack Pills & Actions */}
                    <div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-[#1E3A5F]/60">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-slate-100 dark:bg-[#07152F] text-slate-800 dark:text-[#A8B4C7] border border-slate-200 dark:border-[#1E3A5F]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-md font-mono text-[11px] text-slate-500 dark:text-[#64748B]">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Actions Bar */}
                      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#1E3A5F]/60 flex items-center justify-between gap-4">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] hover:text-slate-900 dark:hover:text-white font-bold transition-colors group/cta"
                        >
                          <span>{t.selectedWork.viewCaseStudy}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                        </Link>

                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-white dark:bg-[#07152F] border border-slate-300 dark:border-[#1E3A5F] flex items-center justify-center text-slate-700 dark:text-[#94A3B8] hover:text-[#0067FE] dark:hover:text-white hover:border-[#0067FE] dark:hover:border-[#38BDF8] transition-colors shadow-2xs"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-white dark:bg-[#07152F] border border-slate-300 dark:border-[#1E3A5F] flex items-center justify-center text-slate-700 dark:text-[#94A3B8] hover:text-[#0067FE] dark:hover:text-white hover:border-[#0067FE] dark:hover:border-[#38BDF8] transition-colors shadow-2xs"
                              title="Source Code"
                            >
                              <GitBranch className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
