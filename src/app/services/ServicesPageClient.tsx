"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  Clock,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function ServicesPageClient() {
  const { services, t } = usePortfolio();
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setActiveService((prev) => (prev === index ? null : index));
  };

  return (
    <main className="services-page-main relative min-h-screen bg-[#EDF3FA] dark:bg-[#00081C] text-slate-900 dark:text-white pt-24 sm:pt-32 selection:bg-[#0067FE] selection:text-white overflow-hidden">
      {/* Background Architectural Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0067FE 1.1px, transparent 1.1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Radial Glow Orbs */}
      <div
        className="absolute top-16 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 dark:opacity-20 blur-[140px] bg-gradient-to-br from-[#0067FE] via-[#00BFFF] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-[-15%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 dark:opacity-10 blur-[130px] bg-gradient-to-tr from-[#00BFFF] to-transparent"
        aria-hidden="true"
      />

      {/* =========================================================================
          EDITORIAL PAGE HERO HEADER
          ========================================================================= */}
      <section className="relative z-10 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation & Status Pill */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-600 hover:text-[#0067FE] dark:text-[#94A3B8] dark:hover:text-[#38BDF8] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-[#0067FE] dark:text-[#38BDF8] transition-transform duration-200 group-hover:-translate-x-1" />
              <span>{t.workPage?.backToOverview || "BACK TO OVERVIEW"}</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#0D1D3A] border border-slate-300 dark:border-[#1E3A5F] text-[#0067FE] dark:text-[#38BDF8] font-mono text-[11px] tracking-wider uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0067FE] dark:bg-[#38BDF8] animate-ping" />
              <span>{t.services?.availableForQ2 || "AVAILABLE FOR SELECT CONTRACTS"}</span>
            </div>
          </div>

          {/* Title & Editorial Premise */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0067FE] dark:text-[#38BDF8] font-bold">
                  {t.services?.sectionNum || "03 —"}
                </span>
                <span className="h-px w-6 bg-slate-300 dark:bg-[#1E3A5F]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-[#94A3B8] font-semibold">
                  {t.services?.sectionCategory || "CLIENT SOLUTIONS & SCOPE"}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                {t.services?.title || "SERVICES"}{" "}
                <span className="text-[#0067FE] dark:text-[#38BDF8]">
                  & SOLUTIONS
                </span>
              </h1>

              <p className="mt-5 font-body text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
                {t.services?.description ||
                  "Selectable engineering capabilities tailored for founders, startups, and established enterprises."}
              </p>
            </div>

            {/* Quick Tech Metrics Badges */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#07152F] border border-slate-200 dark:border-[#1E3A5F] flex items-center justify-between shadow-2xs">
                <span className="text-slate-600 dark:text-[#A8B4C7] font-medium flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>TOTAL DISCIPLINES</span>
                </span>
                <span className="font-display text-base font-bold text-[#0067FE] dark:text-[#38BDF8]">
                  0{services.length} CORE SCOPES
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#07152F] border border-slate-200 dark:border-[#1E3A5F] flex items-center justify-between shadow-2xs">
                <span className="text-slate-600 dark:text-[#A8B4C7] font-medium flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>CORE SPECIALIZATION</span>
                </span>
                <span className="text-slate-900 dark:text-white font-bold">
                  Next.js + Django
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#07152F] border border-slate-200 dark:border-[#1E3A5F] flex items-center justify-between shadow-2xs">
                <span className="text-slate-600 dark:text-[#A8B4C7] font-medium flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>CODE VERIFICATION</span>
                </span>
                <span className="text-[#0067FE] dark:text-[#38BDF8] font-bold">
                  100% Strict TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUR ARCHITECTURAL ENGINEERING STANDARDS STRIP
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
            <div className="flex items-center gap-2 text-[#0067FE] dark:text-[#38BDF8] font-bold mb-1">
              <Terminal className="w-4 h-4" />
              <span>DIRECT EXECUTION</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#94A3B8]">
              No agency account managers. Direct engineering execution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
            <div className="flex items-center gap-2 text-[#0067FE] dark:text-[#38BDF8] font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% TYPE SAFETY</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#94A3B8]">
              Strict TypeScript contracts between Next.js &amp; Django.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
            <div className="flex items-center gap-2 text-[#0067FE] dark:text-[#38BDF8] font-bold mb-1">
              <Zap className="w-4 h-4" />
              <span>EDGE SPEED &amp; SEO</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#94A3B8]">
              Sub-second server rendering, Core Web Vitals 99+.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
            <div className="flex items-center gap-2 text-[#0067FE] dark:text-[#38BDF8] font-bold mb-1">
              <Clock className="w-4 h-4" />
              <span>MILESTONE CADENCE</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#94A3B8]">
              Transparent 2-to-4 week sprints with verified builds.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISTINCT SERVICES SYSTEM PANELS (Pale-Blue Canvas with White Glass Cards)
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="flex flex-col gap-4">
          {services.map((service, index) => {
            const isOpen = activeService === index;

            return (
              <div
                key={service.number}
                className={`service-card-surface group relative rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white dark:bg-[#07152F]/90 border-[#0067FE]/60 dark:border-[#38BDF8]/60 shadow-[0_12px_36px_rgba(0,102,254,0.10)] dark:shadow-[0_12px_36px_rgba(0,103,254,0.18)]"
                    : "bg-white/90 dark:bg-[#07152F]/30 border-slate-200 dark:border-[#1E3A5F]/50 hover:border-[#0067FE]/50 dark:hover:border-[#38BDF8]/40 hover:bg-white dark:hover:bg-[#07152F]/60 shadow-2xs hover:shadow-md"
                }`}
              >
                {/* Active Left Indicator Bar */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-[3.5px] rounded-r bg-[#0067FE] dark:bg-[#38BDF8] transition-opacity duration-300 pointer-events-none ${
                    isOpen
                      ? "opacity-100 shadow-[0_0_12px_rgba(0,102,254,0.6)] dark:shadow-[0_0_12px_#38BDF8]"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* Service Header Row */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.number}`}
                  className="w-full text-left py-5 sm:py-6 px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8] rounded-xl"
                >
                  {/* Number & Service Name */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#0067FE] dark:text-[#38BDF8] tracking-widest shrink-0">
                      {"//"} {service.number}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-[#0067FE] dark:group-hover:text-[#38BDF8] transition-colors duration-200">
                      {service.title}
                    </h2>
                  </div>

                  {/* One-Line Description & Plus/Minus Toggle */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0">
                    <span className="font-body text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] max-w-md md:text-right line-clamp-1">
                      {service.tagline}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "border-[#0067FE] dark:border-[#38BDF8] bg-blue-50 dark:bg-[#001845] text-[#0067FE] dark:text-[#38BDF8] shadow-[0_0_12px_rgba(0,102,254,0.25)]"
                          : "border-slate-300 dark:border-[#1E3A5F] bg-slate-100 dark:bg-[#00081C] text-slate-600 dark:text-[#94A3B8] group-hover:border-[#0067FE]/60 dark:group-hover:border-[#38BDF8]/60 group-hover:text-[#0067FE] dark:group-hover:text-[#38BDF8]"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8] group-hover:scale-110 transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded System Panel: What I build, Technologies, Typical use cases */}
                {isOpen && (
                  <div
                    id={`service-panel-${service.number}`}
                    role="region"
                    aria-label={`${service.title} Details`}
                    className="px-5 sm:px-8 pb-7 pt-3 border-t border-slate-100 dark:border-[#1E3A5F]/40 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start animate-fadeIn"
                  >
                    {/* What I Build */}
                    <div className="lg:col-span-5 flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold mb-1">
                        {t.services.deliverablesHeading || "WHAT I BUILD"}
                      </span>
                      <ul className="space-y-1.5 font-body text-xs sm:text-sm text-slate-700 dark:text-[#CBD5E1]">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8] mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold mb-1">
                        {t.services.technologiesHeading || "TECHNOLOGIES"}
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono tracking-wider bg-slate-100 dark:bg-[#07152F] text-slate-800 dark:text-[#CBD5E1] border border-slate-200 dark:border-[#1E3A5F] rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Typical Use Cases & CTA */}
                    <div className="lg:col-span-3 flex flex-col justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block mb-2">
                          {t.services.primaryUseCases || "TYPICAL USE CASES"}
                        </span>
                        <ul className="space-y-1 font-mono text-[11px] text-slate-600 dark:text-[#94A3B8]">
                          {service.useCases &&
                            service.useCases.map((uc) => (
                              <li key={uc}>• {uc}</li>
                            ))}
                        </ul>
                      </div>

                      <Link
                        href={`/#contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#0067FE] hover:text-[#0056EE] dark:text-[#38BDF8] dark:hover:text-white font-bold transition-colors pt-2 border-t border-slate-200 dark:border-[#1E3A5F]/40"
                      >
                        <span>{t.services.discussScope || "INQUIRE ABOUT THIS"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CONVERSION SECTION
          ========================================================================= */}
      <section className="relative z-10 border-t border-[#D8E3F0] dark:border-[#1E3A5F] py-20 bg-slate-100/70 dark:bg-[#0D1D3A]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#07152F] border border-blue-200 dark:border-[#1E3A5F] font-mono text-[11px] uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold mb-4">
            <Sparkles className="w-3 h-3 text-[#0067FE] dark:text-[#38BDF8]" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
            Ready to Architect Your Solution?
          </h2>

          <p className="mt-4 font-body text-sm sm:text-base text-slate-600 dark:text-[#A8B4C7] max-w-xl mx-auto leading-relaxed">
            Direct collaboration from initial specification to verified production deployment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0067FE] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#0056EE] hover:shadow-[0_4px_24px_rgba(0,103,254,0.5)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.35)] group"
            >
              <span>INITIATE PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={DEVELOPER_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#07152F] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-mono text-xs font-semibold tracking-widest uppercase rounded-full hover:border-[#25D366] hover:text-[#25D366] dark:hover:border-[#25D366] dark:hover:text-[#25D366] transition-all shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>SCHEDULE CALL</span>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#07152F] border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-mono text-xs font-semibold tracking-widest uppercase rounded-full hover:border-[#0067FE] hover:text-[#0067FE] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] transition-all shadow-2xs"
            >
              <span>BACK TO OVERVIEW</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
