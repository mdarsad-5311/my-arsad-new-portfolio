"use client";

import React from "react";
import Image from "next/image";
import { Download, Terminal, Layers, ShieldCheck, Check } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { usePortfolio } from "@/context/PortfolioContext";

export default function AboutSection() {
  const { coreCompetencies, disciplines, collaborationPrinciples, t } = usePortfolio();

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-white overflow-hidden"
    >
      {/* 1. Subtle Architectural Dotted Grid Pattern */}
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
        className="absolute top-1/3 -left-36 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[130px] bg-gradient-to-br from-[#0067FE] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#1E3A5F]/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold">
                {t.about.sectionNum}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B4C7]">
                {t.about.sectionCategory}
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white select-none">
              {t.about.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#A8B4C7] leading-relaxed md:text-right">
              {t.about.tagline}
            </p>
          </div>
        </div>

        {/* Editorial Two-Column Split Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Portrait, Compact Technical Metadata Panel, Resume */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Architectural Portrait with Atmospheric Neon Backlight & Edge Lighting */}
            <div className="relative group/portrait">
              {/* Backlight Glow 1: Wide Diffuse Ambient Bloom */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-[#0067FE]/45 via-[#38BDF8]/35 to-[#00F0FF]/30 blur-[60px] opacity-75 group-hover/portrait:opacity-100 group-hover/portrait:blur-[85px] transition-all duration-700 pointer-events-none -z-10 motion-reduce:animate-none"
                style={{ animation: "portraitGlowPulse 6s ease-in-out infinite alternate" }}
                aria-hidden="true"
              />

              {/* Backlight Glow 2: Intense Cyan Accent Spotlight */}
              <div
                className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-[#38BDF8]/35 blur-[70px] pointer-events-none -z-10 group-hover/portrait:scale-110 transition-transform duration-700"
                aria-hidden="true"
              />

              {/* Backlight Glow 3: Rich Royal Blue Spotlight */}
              <div
                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#0067FE]/45 blur-[80px] pointer-events-none -z-10 group-hover/portrait:scale-110 transition-transform duration-700"
                aria-hidden="true"
              />

              {/* Luminous Specular Border Frame */}
              <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-b from-[#38BDF8] via-[#0067FE]/60 to-[#1E3A5F]/60 shadow-[0_0_35px_rgba(56,189,248,0.35),0_0_80px_rgba(0,103,254,0.25),0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 group-hover/portrait:shadow-[0_0_50px_rgba(56,189,248,0.55),0_0_100px_rgba(0,103,254,0.4),0_25px_60px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A1628] rounded-[15px]">
                  {/* Subtle Inner Ambient Radial Light Behind the Portrait */}
                  <div
                    className="absolute inset-0 bg-radial from-[#38BDF8]/20 via-[#0067FE]/10 to-transparent pointer-events-none z-10 opacity-70"
                    aria-hidden="true"
                  />

                  {/* Corner Sci-Fi / Architectural HUD Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#38BDF8] z-20 pointer-events-none shadow-[0_0_8px_#38BDF8]" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#38BDF8] z-20 pointer-events-none shadow-[0_0_8px_#38BDF8]" />
                  <div className="absolute bottom-16 left-3 w-4 h-4 border-b-2 border-l-2 border-[#38BDF8]/70 z-20 pointer-events-none" />
                  <div className="absolute bottom-16 right-3 w-4 h-4 border-b-2 border-r-2 border-[#38BDF8]/70 z-20 pointer-events-none" />

                  <Image
                    src="/about/developer-portrait.jpg"
                    alt="MD ARSAD — Full-Stack Engineer at workstation"
                    fill
                    priority
                    className="object-cover opacity-95 group-hover/portrait:opacity-100 transition-all duration-700 ease-out group-hover/portrait:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/90 via-[#00081C]/25 to-transparent pointer-events-none z-10" />

                  {/* Floating Status Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#00081C]/92 border border-[#38BDF8]/30 text-white backdrop-blur-md flex items-center justify-between font-mono text-[11px] tracking-wider uppercase rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.7),0_0_15px_rgba(56,189,248,0.2)] z-20">
                    <span className="font-bold text-white tracking-wide">{DEVELOPER_INFO.name}</span>
                    <span className="text-[#38BDF8] flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                      {DEVELOPER_INFO.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Technical Metadata Panel */}
            <div className="p-6 bg-[#0D1D3A]/60 border border-[#1E3A5F] rounded-2xl shadow-sm flex flex-col gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-[#1E3A5F]/60">
                <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  {t.about.techIdentityHeading}
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaRole}</span>
                <span className="font-bold text-white">{DEVELOPER_INFO.role}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaLocation}</span>
                <span className="font-semibold text-white text-right">{DEVELOPER_INFO.location}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaCoordinates}</span>
                <span className="font-semibold text-[#38BDF8]">{DEVELOPER_INFO.coordinates.display}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaCoreStack}</span>
                <span className="font-semibold text-[#38BDF8]">React • Next.js • Django</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaAvailability}</span>
                <span className="font-semibold text-white">{t.navbar.available}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaWhatsApp}</span>
                <a
                  href={DEVELOPER_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] hover:underline transition-colors flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>+91 9527635311</span>
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#A8B4C7] uppercase text-[11px]">{t.about.metaDirectContact}</span>
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="font-semibold text-[#38BDF8] hover:text-white transition-colors"
                >
                  {DEVELOPER_INFO.email}
                </a>
              </div>
            </div>

            {/* Download Resume Action */}
            <a
              href={DEVELOPER_INFO.resumeUrl}
              download="MD_Arsad_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#0067FE] text-white font-mono text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#0056EE] hover:shadow-[0_4px_24px_rgba(0,103,254,0.5)] transition-all duration-300 shadow-[0_4px_16px_rgba(0,103,254,0.3)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              title="Download Resume (CV)"
            >
              <Download className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>{t.about.downloadResume}</span>
            </a>
          </div>

          {/* Right Column: Introduction, Core Capabilities, Disciplines, Principles */}
          <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-12">
            {/* Personal Statement Header */}
            <div>
              <div className="flex items-center gap-3 mb-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
                <span>{t.about.engineerIdentity}</span>
                <span className="text-[#38BDF8]/40">•</span>
                <span>{t.about.basedIn}</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
                MD ARSAD
              </h3>
              <p className="font-mono text-sm sm:text-base text-[#38BDF8] font-bold tracking-wider uppercase mt-1 mb-6">
                {t.about.role}
              </p>

              <p className="font-display text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
                {t.about.quote}
              </p>

              <p className="mt-4 font-body text-base text-[#CBD5E1] leading-relaxed">
                {t.about.bioParagraph1}
              </p>

              <p className="mt-3 font-body text-sm text-[#A8B4C7] leading-relaxed">
                {t.about.bioParagraph2}
              </p>
            </div>

            {/* Core Technical Capabilities from DEVELOPER_INFO */}
            <div className="pt-6 border-t border-[#1E3A5F]/60">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#38BDF8] font-bold">
                  {t.about.coreCapabilitiesHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {coreCompetencies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0D1D3A]/50 border border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:bg-[#0D1D3A]/80 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span className="text-[#CBD5E1]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Disciplines & Architecture Pillars */}
            <div className="pt-6 border-t border-[#1E3A5F]/60">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#38BDF8] font-bold">
                  {t.about.disciplinesHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {disciplines.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 bg-[#0D1D3A]/60 border border-[#1E3A5F] hover:border-[#38BDF8]/60 hover:shadow-[0_8px_25px_rgba(0,103,254,0.14)] rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] text-[#38BDF8] font-bold">
                        0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/40 group-hover:bg-[#38BDF8] transition-colors" />
                    </div>
                    <h4 className="font-display text-base font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors duration-200">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 font-body text-xs text-[#A8B4C7] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Approach & Engineering Philosophy */}
            <div className="pt-6 border-t border-[#1E3A5F]/60">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#38BDF8] font-bold">
                  {t.about.philosophyHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {collaborationPrinciples.map((principle) => (
                  <div
                    key={principle.id}
                    className="p-5 bg-[#0D1D3A]/50 border-l-2 border-l-[#38BDF8] border-y border-r border-[#1E3A5F] rounded-r-xl hover:bg-[#0D1D3A]/80 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-sm sm:text-base font-bold uppercase text-white">
                        {principle.principle}
                      </h4>
                      <span className="font-mono text-[11px] text-[#38BDF8]">
                        {principle.tagline}
                      </span>
                    </div>
                    <p className="mt-2 font-body text-xs sm:text-sm text-[#A8B4C7] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portrait Ambient Glow Keyframe */}
      <style>{`
        @keyframes portraitGlowPulse {
          0%, 100% {
            opacity: 0.65;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.04);
          }
        }
      `}</style>
    </section>
  );
}
