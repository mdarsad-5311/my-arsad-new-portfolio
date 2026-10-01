import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 xl:pt-44 border-b border-[#1E3A5F]/40 bg-[#00081C] overflow-hidden"
    >
      {/* 1. Subtle Architectural Dotted Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* 2. Layered Subtle Blue Radial Glows with Slow Parallax/Drift Motion */}
      <div
        className="absolute -top-36 right-[-10%] w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full pointer-events-none opacity-40 blur-[130px] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 103, 254, 0.16) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 70%)",
          animation: "heroGlowDrift 20s ease-in-out infinite alternate",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none opacity-30 blur-[110px] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, rgba(7, 21, 47, 0.85) 0%, rgba(0, 103, 254, 0.09) 50%, transparent 75%)",
          animation: "heroGlowDrift 26s ease-in-out infinite alternate-reverse",
        }}
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Visual Hierarchy Step 1: Top Editorial Metadata Row */}
        <div className="hero-animate-fade-1 flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-[#1E3A5F] font-mono text-[11px] sm:text-xs tracking-[0.18em] text-[#A8B4C7] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-semibold text-white">{DEVELOPER_INFO.status}</span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <span>BASED IN {DEVELOPER_INFO.location}</span>
            <span className="hidden sm:inline-block text-[#38BDF8]/40">|</span>
            <span className="hidden sm:inline-block">{DEVELOPER_INFO.availability}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[#CBD5E1]">
            <Code className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>REACT • NEXT.JS • DJANGO • TS</span>
          </div>
        </div>

        {/* Large Typography Hero Block */}
        <div className="pt-8 sm:pt-10 lg:pt-12">
          <div className="flex flex-col">
            {/* Visual Hierarchy Step 2: Professional Technical Identity Badge */}
            <div className="hero-animate-fade-2 flex flex-wrap items-center gap-2 sm:gap-2.5 mb-4 sm:mb-6 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D1D3A] text-white border border-[#1E3A5F] font-semibold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                {DEVELOPER_INFO.name}
              </span>
              <span className="text-[#38BDF8]/50 select-none">—</span>
              <span className="text-[#38BDF8] font-semibold tracking-[0.22em]">
                {DEVELOPER_INFO.role}
              </span>
            </div>

            {/* Visual Hierarchy Step 3: Primary Headline */}
            <h1 className="font-display text-[clamp(2.4rem,10.5vw,8.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em] text-white select-none">
              <span className="block hero-animate-fade-3">{DEVELOPER_INFO.heroHeadingLine1}</span>
              <span className="block text-white hero-animate-fade-4">
                {DEVELOPER_INFO.heroHeadingLine2}
                <span className="text-[#38BDF8]">.</span>
              </span>
            </h1>

            {/* Asymmetrical Editorial Sub-statement & Description Grid */}
            <div className="mt-6 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* Visual Hierarchy Step 4: Tagline & Summary */}
              <div className="lg:col-span-7 hero-animate-fade-5">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight uppercase text-white leading-snug">
                  {DEVELOPER_INFO.heroTagline}
                </p>
                <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base text-[#A8B4C7] max-w-xl leading-relaxed">
                  {DEVELOPER_INFO.summary}
                </p>
              </div>

              {/* Action Buttons & Core Technical Focus Pillars */}
              <div className="lg:col-span-5 flex flex-col justify-end gap-5 sm:gap-6">
                {/* Visual Hierarchy Step 5: CTA Buttons */}
                <div className="hero-animate-fade-6 flex flex-wrap items-center gap-3 sm:gap-3.5">
                  {/* Primary CTA */}
                  <Link
                    href="#work"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,103,254,0.4)] hover:bg-[#0056EE] hover:shadow-[0_6px_28px_rgba(0,103,254,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE]"
                  >
                    <span>VIEW MY WORK</span>
                    <ArrowDownRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-y-1 group-hover:translate-x-1" />
                  </Link>

                  {/* Secondary CTA */}
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white text-white font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out hover:bg-white hover:text-[#00081C] hover:border-white hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>LET&apos;S TALK</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>

                {/* Visual Hierarchy Step 6: Technical Focus Pillar Strip */}
                <div className="hero-animate-fade-7 pt-4 border-t border-[#1E3A5F] grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  {DEVELOPER_INFO.heroPillars.map((pillar) => (
                    <div
                      key={pillar.label}
                      className="group/pillar border-l sm:border-l-0 sm:border-t-0 pl-3 sm:pl-0 border-[#1E3A5F] hover:border-[#38BDF8] transition-all duration-300 cursor-default"
                    >
                      <span className="block text-xs font-display font-bold uppercase tracking-wider text-[#38BDF8] group-hover/pillar:text-white group-hover/pillar:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300">
                        {pillar.label}
                      </span>
                      <span className="text-[10px] tracking-wide text-[#A8B4C7] group-hover/pillar:text-white/90 block mt-0.5 transition-colors duration-300">
                        {pillar.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Hierarchy Step 7: Minimal "SCROLL TO EXPLORE" Indicator */}
            <div className="hero-animate-fade-8 mt-10 sm:mt-14 pt-5 border-t border-[#1E3A5F]/30 flex items-center justify-start font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#A8B4C7] uppercase">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 hover:text-[#38BDF8] transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                aria-label="Scroll to explore work section"
              >
                <div className="w-4 h-6 rounded-full border border-[#1E3A5F] group-hover:border-[#38BDF8] flex items-start justify-center p-1 transition-colors duration-300 shadow-sm">
                  <div
                    className="w-1 h-1.5 rounded-full bg-[#38BDF8]"
                    style={{ animation: "heroScrollDot 1.8s ease-in-out infinite" }}
                  />
                </div>
                <span className="font-medium tracking-[0.2em]">SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3 h-3 text-[#38BDF8] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightweight, self-contained CSS keyframes for Hero entrance & background drift */}
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroGlowDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-24px, 16px, 0) scale(1.05);
          }
        }

        @keyframes heroScrollDot {
          0% {
            transform: translateY(0);
            opacity: 0.9;
          }
          50% {
            transform: translateY(6px);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0);
            opacity: 0.9;
          }
        }

        .hero-animate-fade-1 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .hero-animate-fade-2 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .hero-animate-fade-3 {
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.26s both;
        }
        .hero-animate-fade-4 {
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both;
        }
        .hero-animate-fade-5 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }
        .hero-animate-fade-6 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.62s both;
        }
        .hero-animate-fade-7 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.74s both;
        }
        .hero-animate-fade-8 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.88s both;
        }
      `}</style>
    </section>
  );
}
