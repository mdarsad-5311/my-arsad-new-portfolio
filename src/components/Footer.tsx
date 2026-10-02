"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Download, Mail, Clock, MapPin, Globe, GitBranch, Compass } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import Logo from "@/components/Logo";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Why Me", href: "/#why-me" },
    { label: "How I Work", href: "/#workflow" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Stack", href: "/#stack" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer
      className="relative bg-[#00081C] text-[#94A3B8] pt-20 pb-12 sm:pt-28 sm:pb-16 border-t border-[#00F0FF]/25 shadow-[0_-8px_30px_rgba(0,240,255,0.08)] overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Background Architectural Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Attachment-inspired Bottom Backlight Floor Reflection Pool */}
      <div
        className="absolute bottom-0 inset-x-0 h-64 pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(0, 240, 255, 0.24) 0%, rgba(0, 103, 254, 0.14) 40%, transparent 75%)",
          filter: "blur(24px)",
        }}
        aria-hidden="true"
      />
      {/* Luminous cyan backlight floor highlight reflection bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-[1.5px] bg-gradient-to-r from-transparent via-[#00F0FF]/60 to-transparent pointer-events-none"
        style={{
          boxShadow: "0 0 24px 2px rgba(0, 240, 255, 0.55)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Final CTA Banner with neon cyan backlight border */}
        <div className="mb-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#001D4D]/70 via-[#07152F]/70 to-[#001238]/70 border border-[#00F0FF]/35 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,240,255,0.15),0_8px_32px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(0,240,255,0.08)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-bold block mb-1">
              Have a project in mind?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
              LET&apos;S TALK ABOUT YOUR GOALS.
            </h3>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.4)] shrink-0 group"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Top Section: Developer Identity & Description */}
        <div className="pb-16 border-b border-[#1E3A5F]/40 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group inline-flex items-center shrink-0 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-sm transition-opacity hover:opacity-90"
              aria-label="MD ARSAD — Full-Stack Engineer"
            >
              <Logo height={52} />
            </Link>

            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3">
              {DEVELOPER_INFO.name} <span className="text-[#38BDF8]">{"//"}</span> {DEVELOPER_INFO.title}
            </h2>

            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Full-stack engineer building scalable websites, SaaS platforms, dashboards, and custom digital systems for modern businesses worldwide.
            </p>
          </div>

          {/* Action Hub */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub profile: @${DEVELOPER_INFO.githubUsername} (opens in a new tab)`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#001033] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 rounded-lg shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>@{DEVELOPER_INFO.githubUsername}</span>
            </a>

            {DEVELOPER_INFO.resumeUrl && (
              <a
                href={DEVELOPER_INFO.resumeUrl}
                download="MD_Arsad_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#001033] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#38BDF8] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 rounded-lg shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>RESUME (CV)</span>
              </a>
            )}

            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#001D4D] border border-[#38BDF8]/60 hover:border-[#38BDF8] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#002766] transition-all duration-200 rounded-lg shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{DEVELOPER_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Middle Grid: Telemetry, Navigation, and Socials */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-[#1E3A5F]/40 font-mono text-xs">
          {/* Column 1: Live Status & Location Telemetry (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-4">
                Telemetry &amp; Status
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>IST (INDIA):</span>
                  <span className="text-[#38BDF8] font-bold">{istTime || "12:00:00 PM"}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>LOCATION:</span>
                  <span className="text-white font-semibold">{DEVELOPER_INFO.location}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Compass className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>COORDINATES:</span>
                  <span className="text-[#38BDF8] font-mono font-semibold">{DEVELOPER_INFO.coordinates.display}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>AVAILABILITY:</span>
                  <span className="text-[#38BDF8] font-semibold">{DEVELOPER_INFO.availability}</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#001238] border border-[#1E3A5F] w-fit text-[#CBD5E1]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{DEVELOPER_INFO.status}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (Span 4) */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-4">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Networks & Direct Channels (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-1">
              External Channels &amp; Code
            </span>

            {/* WhatsApp Direct */}
            <a
              href={DEVELOPER_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat directly on WhatsApp with ${DEVELOPER_INFO.name}: +91 9527635311 (opens in a new tab)`}
              className="group flex items-center justify-between p-3 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#25D366] text-[#CBD5E1] hover:text-white transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#001033] border border-[#1E3A5F] group-hover:border-[#25D366]/40 transition-colors">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <div className="font-bold text-white tracking-wider flex items-center gap-2">
                    <span>WHATSAPP DIRECT</span>
                    <span className="text-[10px] text-[#25D366] font-mono font-normal uppercase bg-[#25D366]/10 px-1.5 py-0.5 rounded border border-[#25D366]/20">
                      INSTANT
                    </span>
                  </div>
                  <div className="text-[11px] text-[#25D366] font-mono">
                    +91 {DEVELOPER_INFO.whatsappNumber}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* GitHub Profile */}
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit GitHub profile @${DEVELOPER_INFO.githubUsername} (opens in a new tab)`}
              className="group flex items-center justify-between p-3 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#001033] border border-[#1E3A5F] group-hover:border-[#38BDF8]/40 transition-colors">
                  <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="font-bold text-white tracking-wider">GITHUB PROFILE</div>
                  <div className="text-[11px] text-[#38BDF8] font-mono lowercase">
                    @{DEVELOPER_INFO.githubUsername}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
            </a>

            {/* This Project's GitHub Repository */}
            <a
              href={DEVELOPER_INFO.projectRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View this portfolio project repository on GitHub: ${DEVELOPER_INFO.githubUsername}/my-arsad-new-portfolio (opens in a new tab)`}
              className="group flex items-center justify-between p-3 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#001033] border border-[#1E3A5F] group-hover:border-[#38BDF8]/40 transition-colors">
                  <GitBranch className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="font-bold text-white tracking-wider">THIS PROJECT REPO</div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">
                    {DEVELOPER_INFO.githubUsername}/my-arsad-new-portfolio
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
            </a>

            {/* LinkedIn Network */}
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit LinkedIn network for ${DEVELOPER_INFO.name} (opens in a new tab)`}
              className="group flex items-center justify-between p-3 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#001033] border border-[#1E3A5F] group-hover:border-[#38BDF8]/40 transition-colors">
                  <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="font-bold text-white tracking-wider">LINKEDIN NETWORK</div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">
                    in/{DEVELOPER_INFO.githubUsername}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Project Repo & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-[#1E3A5F]">•</span>
            <a
              href={DEVELOPER_INFO.projectRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5"
              aria-label="View portfolio source code on GitHub"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Project on GitHub: <span className="text-[#38BDF8] font-semibold">{DEVELOPER_INFO.githubUsername}/my-arsad-new-portfolio</span></span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-sm"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
