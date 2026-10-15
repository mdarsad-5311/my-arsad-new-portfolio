"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Download, Mail, Clock, MapPin, Globe, Compass } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import Logo from "@/components/Logo";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Footer() {
  const { t, visitorLocation, detectGpsLocation } = usePortfolio();
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
    { label: t.navbar.work, href: "/#work" },
    { label: t.navbar.services, href: "/#services" },
    { label: t.navbar.whyMe, href: "/#why-me" },
    { label: t.navbar.howIWork, href: "/#workflow" },
    { label: t.navbar.about, href: "/#about" },
    { label: t.navbar.experience, href: "/#experience" },
    { label: t.navbar.stack, href: "/#stack" },
    { label: t.navbar.faq, href: "/#faq" },
    { label: t.navbar.contact, href: "/#contact" },
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
              {t.footer.ctaSubtitle}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
              {t.footer.ctaTitle}
            </h3>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.4)] shrink-0 group"
          >
            <span>{t.footer.ctaButton}</span>
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
              {t.footer.description}
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
                <span>{t.footer.resume}</span>
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
                {t.footer.telemetryStatus}
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>{t.footer.istIndia}</span>
                  <span className="text-[#38BDF8] font-bold">{istTime || "12:00:00 PM"}</span>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DEVELOPER_INFO.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Base Station (Nashik) on Google Maps (opens in a new tab)"
                  className="group/loc flex items-center gap-2.5 text-[#CBD5E1] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 group-hover/loc:scale-110 transition-transform" />
                  <span>{t.footer.locationHeading}</span>
                  <span className="text-white font-semibold group-hover/loc:text-[#38BDF8] transition-colors flex items-center gap-1 underline-offset-4 group-hover/loc:underline">
                    {DEVELOPER_INFO.location}
                    <ArrowUpRight className="w-3 h-3 text-[#38BDF8] opacity-60 group-hover/loc:opacity-100 group-hover/loc:translate-x-0.5 group-hover/loc:-translate-y-0.5 transition-all" />
                  </span>
                </a>

                {/* Live Auto-Caught Visitor Location HUD */}
                <div className="p-2.5 rounded-xl bg-[#001033] border border-[#1E3A5F]/80 flex flex-col gap-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
                    <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Auto-Caught Location:
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        detectGpsLocation();
                      }}
                      title="Scan precise browser GPS location"
                      className="px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider bg-[#07152F] hover:bg-[#0067FE] text-[#38BDF8] hover:text-white border border-[#1E3A5F] hover:border-[#38BDF8] transition-all cursor-pointer"
                    >
                      {visitorLocation.source === "gps" ? "GPS Active" : "GPS Scan"}
                    </button>
                  </div>

                  <a
                    href={
                      visitorLocation.latitude && visitorLocation.longitude
                        ? `https://www.google.com/maps/search/?api=1&query=${visitorLocation.latitude},${visitorLocation.longitude}`
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${visitorLocation.city} ${visitorLocation.region} ${visitorLocation.country}`
                          )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open your detected location on Google Maps (opens in a new tab)"
                    className="flex items-center justify-between text-white hover:text-[#38BDF8] transition-colors group/live"
                  >
                    <span className="font-semibold text-xs flex items-center gap-1.5 truncate">
                      {visitorLocation.loading ? (
                        <span className="animate-pulse text-[#38BDF8]">Catching live location...</span>
                      ) : (
                        <>
                          <span className="text-white group-hover/live:text-[#38BDF8] truncate">
                            {visitorLocation.city}, {visitorLocation.region || visitorLocation.country}
                          </span>
                          <span className="text-sm shrink-0">{visitorLocation.flagEmoji}</span>
                        </>
                      )}
                    </span>
                    <span className="text-[10px] text-[#38BDF8] flex items-center gap-0.5 shrink-0 opacity-80 group-hover/live:opacity-100 font-mono">
                      <span>MAP</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("19.9975,73.7898")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open GPS Coordinates on Google Maps (opens in a new tab)"
                  className="group/coord flex items-center gap-2.5 text-[#CBD5E1] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 group-hover/coord:rotate-45 transition-transform" />
                  <span>{t.footer.coordinatesHeading}</span>
                  <span className="text-[#38BDF8] font-mono font-semibold group-hover/coord:text-white transition-colors flex items-center gap-1 underline-offset-4 group-hover/coord:underline">
                    {DEVELOPER_INFO.coordinates.display}
                    <ArrowUpRight className="w-3 h-3 text-[#38BDF8] opacity-60 group-hover/coord:opacity-100 group-hover/coord:translate-x-0.5 group-hover/coord:-translate-y-0.5 transition-all" />
                  </span>
                </a>

                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>{t.footer.availabilityHeading}</span>
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
              {t.footer.navigationHeading}
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
              {t.footer.externalChannels}
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
                    <span>{t.footer.whatsappDirect}</span>
                    <span className="text-[10px] text-[#25D366] font-mono font-normal uppercase bg-[#25D366]/10 px-1.5 py-0.5 rounded border border-[#25D366]/20">
                      {t.footer.instant}
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
                  <div className="font-bold text-white tracking-wider">{t.footer.githubProfile}</div>
                  <div className="text-[11px] text-[#38BDF8] font-mono lowercase">
                    @{DEVELOPER_INFO.githubUsername}
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
                  <div className="font-bold text-white tracking-wider">{t.footer.linkedinNetwork}</div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">
                    in/{DEVELOPER_INFO.githubUsername}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {DEVELOPER_INFO.name}. {t.footer.allRightsReserved}</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded-sm cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
