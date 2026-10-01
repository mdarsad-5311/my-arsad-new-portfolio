import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGallery from "@/components/WorkGallery";
import { PROJECTS, DEVELOPER_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Selected Work & Case Studies — ${DEVELOPER_INFO.name}`,
  description:
    "Curated portfolio and architectural case studies of full-stack web applications, enterprise systems, and editorial web experiences by MD ARSAD.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: `Selected Work — ${DEVELOPER_INFO.technicalIdentity}`,
    description:
      "Explore curated full-stack web applications and software systems built with Next.js, TypeScript, and Django.",
    images: [{ url: "/projects/aura-ecommerce.jpg" }],
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#00081C] text-white pt-24 sm:pt-32">
        {/* Editorial Page Header */}
        <section className="border-b border-[#1E3A5F] pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Back Link */}
            <div className="mb-6 flex items-center justify-between">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A8B4C7] hover:text-[#38BDF8] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover:-translate-x-1" />
                <span>BACK TO OVERVIEW</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1D3A] border border-[#1E3A5F] text-[#38BDF8] font-mono text-[11px] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>FEATURED ARCHIVE</span>
              </div>
            </div>

            {/* Title & Editorial Premise */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold">
                  <span>04 —</span>
                  <span className="text-[#CBD5E1]">ARCHITECTURAL PORTFOLIO</span>
                </div>

                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05]">
                  SELECTED <span className="text-[#38BDF8]">WORK</span>
                </h1>

                <p className="mt-5 font-body text-base sm:text-lg text-[#A8B4C7] max-w-2xl leading-relaxed">
                  Real-world architectural applications, enterprise platforms, and digital products
                  engineered with rigorous discipline, decoupled backends, and responsive design systems.
                </p>
              </div>

              {/* Quick Tech Metrics Badges */}
              <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#0D1D3A] border border-[#1E3A5F] flex items-center justify-between">
                  <span className="text-[#A8B4C7]">TOTAL SYSTEMS</span>
                  <span className="font-display text-base font-bold text-[#38BDF8]">
                    0{PROJECTS.length} CASES
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0D1D3A] border border-[#1E3A5F] flex items-center justify-between">
                  <span className="text-[#A8B4C7]">CORE ARCHITECTURE</span>
                  <span className="text-white font-semibold">Next.js + Django</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0D1D3A] border border-[#1E3A5F] flex items-center justify-between">
                  <span className="text-[#A8B4C7]">CODE VERIFICATION</span>
                  <span className="text-[#38BDF8] font-semibold">100% Strict TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <WorkGallery projects={PROJECTS} />

        {/* Bottom CTA Section */}
        <section className="border-t border-[#1E3A5F] py-20 bg-[#0D1D3A]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] block mb-3 font-bold">
              START A CONVERSATION
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              WANT TO BUILD SOMETHING EXTRAORDINARY?
            </h2>

            <p className="mt-4 font-body text-sm sm:text-base text-[#A8B4C7] max-w-xl mx-auto leading-relaxed">
              Available for full-stack engineering, frontend architecture contracts, and enterprise web solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0067FE] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#0056EE] hover:shadow-[0_4px_24px_rgba(0,103,254,0.5)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.4)] group"
              >
                <span>LET&apos;S TALK ABOUT YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#07152F] border border-white/30 text-white font-mono text-xs font-semibold tracking-widest uppercase rounded-full hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
              >
                <span>RETURN TO HOMEPAGE</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
