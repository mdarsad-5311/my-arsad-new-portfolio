import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 border-b border-[#1E3A5F]/40 bg-[#00081C] overflow-hidden"
    >
      {/* 1. Fine Hairline Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* 2. Dotted Coordinate Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* 3. Deep Cinematic Radial Ambient Glow */}
      <div
        className="absolute -top-40 right-[-5%] w-[650px] h-[650px] sm:w-[900px] sm:h-[900px] rounded-full pointer-events-none opacity-25 blur-[160px] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 103, 254, 0.22) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 70%)",
          animation: "heroGlowDrift 22s ease-in-out infinite alternate",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-[-5%] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full pointer-events-none opacity-20 blur-[140px] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, rgba(7, 21, 47, 0.95) 0%, rgba(0, 103, 254, 0.08) 50%, transparent 75%)",
          animation: "heroGlowDrift 28s ease-in-out infinite alternate-reverse",
        }}
        aria-hidden="true"
      />

      {/* Tiny Coordinate Corner Crosshairs */}
      <div className="absolute top-28 left-6 sm:left-10 font-mono text-[10px] text-[#1E3A5F] hidden sm:block select-none pointer-events-none tracking-widest uppercase">
        + SYS.CORE // LAT 20.59° N / LON 78.96° E
      </div>
      <div className="absolute top-28 right-6 sm:right-10 font-mono text-[10px] text-[#1E3A5F] hidden sm:block select-none pointer-events-none tracking-widest uppercase text-right">
        INDEX: 01 // FREELANCE FULL-STACK +
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col">
          {/* STEP 1: SMALL LABEL — "MD ARSAD / SOFTWARE ENGINEER" */}
          <div className="hero-animate-fade-1 flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 font-mono text-xs sm:text-[13px] tracking-[0.24em] uppercase">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D1D3A]/90 text-white border border-[#1E3A5F] font-semibold rounded-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              MD ARSAD
            </span>
            <span className="text-[#38BDF8]/60 select-none">/</span>
            <span className="text-[#38BDF8] font-bold tracking-[0.2em]">
              SOFTWARE ENGINEER
            </span>
            <span className="hidden md:inline-block text-[#1E3A5F] select-none">/</span>
            <span className="hidden md:inline-block text-[#94A3B8] text-xs font-normal tracking-wider normal-case font-body">
              Independent Practice &amp; Digital Systems
            </span>
          </div>

          {/* STEP 2: GIANT TYPOGRAPHIC HEADLINE — "FULL-STACK ENGINEER." */}
          <h1 className="font-display text-[clamp(2.6rem,11vw,9.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.035em] text-white select-none">
            <span className="block hero-animate-fade-2 text-white">
              FULL-STACK
            </span>
            <span className="block hero-animate-fade-3 text-white">
              ENGINEER<span className="text-[#38BDF8]">.</span>
            </span>
          </h1>

          {/* STEP 3 & 4: STATEMENT + CTA ROW + AVAILABILITY */}
          <div className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pt-6 border-t border-[#1E3A5F]/40">
            {/* Left: Short Client-Focused Statement */}
            <div className="lg:col-span-7 hero-animate-fade-4 flex flex-col gap-4">
              <p className="font-display text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-tight text-white leading-snug">
                Building scalable web applications, SaaS platforms, dashboards and custom digital systems for modern businesses.
              </p>
              <p className="font-body text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
                Specializing in decoupled frontend architectures with Next.js &amp; TypeScript and resilient backend integrations with Python &amp; Django. Focused on architectural clarity, performance, and commercial utility.
              </p>

              {/* Profiles & Resume */}
              <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs text-[#CBD5E1]">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <span className="text-[#1E3A5F]">|</span>
                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
                <span className="text-[#1E3A5F]">|</span>
                <a
                  href={DEVELOPER_INFO.resumeUrl}
                  download="MD_Arsad_Resume.pdf"
                  className="inline-flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>RESUME (CV)</span>
                </a>
              </div>
            </div>

            {/* Right: CTA Row & Technical Pillars */}
            <div className="lg:col-span-5 flex flex-col justify-end gap-6 hero-animate-fade-5">
              {/* STEP 4: CTA ROW — START A PROJECT & VIEW MY WORK */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#0067FE] text-white font-mono text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 ease-out shadow-[0_4px_24px_rgba(0,103,254,0.45)] hover:bg-[#0056EE] hover:shadow-[0_6px_32px_rgba(0,103,254,0.7)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] rounded-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE]"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-transparent border border-white/80 text-white font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out hover:bg-white hover:text-[#00081C] hover:border-white hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] rounded-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-y-1" />
                </Link>
              </div>

              {/* STEP 5: SMALL AVAILABILITY & TECHNICAL SPECIFICATION STRIP */}
              <div className="pt-5 border-t border-[#1E3A5F]/70 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[#94A3B8]">
                  <span className="flex items-center gap-2 text-white font-semibold tracking-wider uppercase text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    AVAILABLE WORLDWIDE
                  </span>
                  <span className="text-[#38BDF8] text-[11px] font-medium tracking-widest uppercase">
                    REMOTE COLLABORATION
                  </span>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-3 gap-2.5 pt-1 text-[11px]">
                  {DEVELOPER_INFO.heroPillars.map((pillar) => (
                    <div
                      key={pillar.label}
                      className="border-l border-[#1E3A5F] pl-2.5 py-0.5 hover:border-[#38BDF8] transition-colors"
                    >
                      <span className="text-[#38BDF8] font-bold block uppercase text-[10px] tracking-wider">
                        {pillar.label}
                      </span>
                      <span className="text-[#94A3B8] block text-[10px] truncate mt-0.5">
                        {pillar.tech.split("/")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Scroll Indicator */}
          <div className="hero-animate-fade-6 mt-12 sm:mt-16 pt-5 border-t border-[#1E3A5F]/30 flex items-center justify-start font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#94A3B8] uppercase">
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

      {/* Lightweight Keyframe Animations */}
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
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
            transform: translate3d(-20px, 14px, 0) scale(1.04);
          }
        }

        @keyframes heroScrollDot {
          0% {
            transform: translateY(0);
            opacity: 0.9;
          }
          50% {
            transform: translateY(6px);
            opacity: 0.35;
          }
          100% {
            transform: translateY(0);
            opacity: 0.9;
          }
        }

        .hero-animate-fade-1 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.04s both;
        }
        .hero-animate-fade-2 {
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
        }
        .hero-animate-fade-3 {
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
        .hero-animate-fade-4 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
        }
        .hero-animate-fade-5 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.54s both;
        }
        .hero-animate-fade-6 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-animate-fade-1,
          .hero-animate-fade-2,
          .hero-animate-fade-3,
          .hero-animate-fade-4,
          .hero-animate-fade-5,
          .hero-animate-fade-6 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
