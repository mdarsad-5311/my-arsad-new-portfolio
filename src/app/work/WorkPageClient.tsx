"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Cpu, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import WorkGallery from "@/components/WorkGallery";
import { usePortfolio } from "@/context/PortfolioContext";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function WorkPageClient() {
  const { projects, t, language } = usePortfolio();

  return (
    <main className="work-page-main relative min-h-screen bg-[#F8FAFC] dark:bg-[#00081C] text-slate-900 dark:text-white pt-24 sm:pt-32 selection:bg-[#0067FE] selection:text-white overflow-hidden">
      {/* =========================================================================
          BACKGROUND ARCHITECTURAL DOT GRID PATTERN (Attachment 1 Blueprint)
          ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0067FE 1.1px, transparent 1.1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Ambient Radial Glow Orbs */}
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
      <section className="relative z-10 border-b border-[#D8E3F0] dark:border-[#1E3A5F] pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation & System Status Pill */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-600 hover:text-[#0067FE] dark:text-[#A8B4C7] dark:hover:text-[#38BDF8] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-[#0067FE] dark:text-[#38BDF8] transition-transform duration-200 group-hover:-translate-x-1" />
              <span>{t.workPage.backToOverview}</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#0D1D3A] border border-slate-300 dark:border-[#1E3A5F] text-[#0067FE] dark:text-[#38BDF8] font-mono text-[11px] tracking-wider uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0067FE] dark:bg-[#38BDF8] animate-ping" />
              <span>{t.workPage.featuredArchive}</span>
            </div>
          </div>

          {/* Title & Editorial Premise */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              {/* Section Sub-Tag (Attachment 1: "02 — CURATED CASE STUDIES & PRODUCTION SYSTEMS") */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0067FE] dark:text-[#38BDF8] font-bold">
                  {t.workPage.sectionNum}
                </span>
                <span className="h-px w-6 bg-slate-300 dark:bg-[#1E3A5F]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-[#94A3B8] font-semibold">
                  {t.workPage.sectionCategory}
                </span>
              </div>

              {/* Monumental Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                {t.workPage.titleSelected}{" "}
                <span className="text-[#0067FE] dark:text-[#38BDF8]">
                  {t.workPage.titleWork}
                </span>
              </h1>

              <p className="mt-5 font-body text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
                {t.workPage.subtitle}
              </p>
            </div>

            {/* Quick Tech Metrics Badges */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] flex items-center justify-between shadow-2xs">
                <span className="text-slate-600 dark:text-[#A8B4C7] font-medium flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>{t.workPage.totalSystems}</span>
                </span>
                <span className="font-display text-base font-bold text-[#0067FE] dark:text-[#38BDF8]">
                  0{projects.length} CASES
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] flex items-center justify-between shadow-2xs">
                <span className="text-slate-600 dark:text-[#A8B4C7] font-medium flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>{t.workPage.coreArchitecture}</span>
                </span>
                <span className="text-slate-900 dark:text-white font-bold">
                  Next.js + Django
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F] flex items-center justify-between shadow-2xs">
                <span className="text-slate-600 dark:text-[#A8B4C7] font-medium flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>{t.workPage.codeVerification}</span>
                </span>
                <span className="text-[#0067FE] dark:text-[#38BDF8] font-bold">
                  {t.workPage.strictTypeScript}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PROJECT GALLERY & EXPLORER
          ========================================================================= */}
      <WorkGallery projects={projects} />

      {/* =========================================================================
          BOTTOM CONVERSION SECTION
          ========================================================================= */}
      <section className="relative z-10 border-t border-[#D8E3F0] dark:border-[#1E3A5F] py-20 bg-slate-100/70 dark:bg-[#0D1D3A]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#07152F] border border-blue-200 dark:border-[#1E3A5F] font-mono text-[11px] uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold mb-4">
            <Sparkles className="w-3 h-3 text-[#0067FE] dark:text-[#38BDF8]" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
            {t.workPage.wantToBuild}
          </h2>

          <p className="mt-4 font-body text-sm sm:text-base text-slate-600 dark:text-[#A8B4C7] max-w-xl mx-auto leading-relaxed">
            {t.workPage.reachOutSubheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0067FE] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#0056EE] hover:shadow-[0_4px_24px_rgba(0,103,254,0.5)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.35)] group"
            >
              <span>{t.workPage.initiateProject}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={DEVELOPER_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#07152F] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-mono text-xs font-semibold tracking-widest uppercase rounded-full hover:border-[#25D366] hover:text-[#25D366] dark:hover:border-[#25D366] dark:hover:text-[#25D366] transition-all shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>{t.workPage.scheduleCall}</span>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#07152F] border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-mono text-xs font-semibold tracking-widest uppercase rounded-full hover:border-[#0067FE] hover:text-[#0067FE] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] transition-all shadow-2xs"
            >
              <span>{t.workPage.backToOverview}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
