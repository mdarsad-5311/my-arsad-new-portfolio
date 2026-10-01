"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Download, Mail, Clock, MapPin, Globe } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import Logo from "@/components/Logo";

export default function Footer() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
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

  return (
    <footer
      className="relative bg-[#00081C] text-[#94A3B8] pt-20 pb-12 sm:pt-28 sm:pb-16 border-t border-[#1E3A5F]/40 overflow-hidden"
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

      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute bottom-0 right-10 w-[500px] h-[350px] rounded-full bg-[#0067FE]/[0.03] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Developer Identity & Closing Statement */}
        <div className="pb-16 border-b border-[#1E3A5F]/40 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group inline-flex items-center shrink-0 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-sm transition-opacity hover:opacity-90"
              aria-label="MD ARSAD — Full-Stack Engineer"
            >
              <Logo height={56} />
            </Link>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white mb-4">
              {DEVELOPER_INFO.name} <span className="text-[#38BDF8]">{"//"}</span> {DEVELOPER_INFO.title}
            </h2>

            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Full-stack engineer building modern, scalable and high-performance digital systems.
              Bridging architectural engineering with editorial typography.
            </p>
          </div>

          {/* Action Hub: Resume Download & Direct Contact */}
          <div className="flex flex-wrap items-center gap-4">
            {DEVELOPER_INFO.resumeUrl && (
              <a
                href={DEVELOPER_INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#001033] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#38BDF8] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 rounded-lg shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] motion-reduce:transition-none"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
            )}

            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#001D4D] border border-[#38BDF8]/60 hover:border-[#38BDF8] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#002766] transition-all duration-200 rounded-lg shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] motion-reduce:transition-none"
            >
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>DIRECT INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </a>
          </div>
        </div>

        {/* Middle Grid: Navigation, Networks & Technical Specifications */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-[#1E3A5F]/40">
          {/* Column 1: Live Status & Location Telemetry (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-4">
                Telemetry &amp; Status
              </span>

              <div className="space-y-3 font-mono text-xs">
                {/* Live IST Clock */}
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>IST (INDIA):</span>
                  <span className="text-[#38BDF8] font-bold">{istTime || "12:00:00 PM"}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>LOCATION:</span>
                  <span className="text-white font-semibold">{DEVELOPER_INFO.location}</span>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>AVAILABILITY:</span>
                  <span className="text-[#38BDF8] font-semibold">{DEVELOPER_INFO.availability}</span>
                </div>
              </div>
            </div>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#001238] border border-[#1E3A5F] w-fit font-mono text-xs text-[#CBD5E1]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{DEVELOPER_INFO.status}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              {[
                { label: "02 ABOUT", href: "/#about" },
                { label: "03 SERVICES", href: "/#services" },
                { label: "04 WORK", href: "/#work" },
                { label: "05 EXPERIENCE", href: "/#experience" },
                { label: "06 STACK", href: "/#stack" },
                { label: "07 CONTACT", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200 motion-reduce:transform-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional Connect (Span 2) */}
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-4">
              Connect
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              {DEVELOPER_INFO.github && (
                <li>
                  <a
                    href={DEVELOPER_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    <span className="group-hover:text-white">GITHUB</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 motion-reduce:transform-none" />
                  </a>
                </li>
              )}
              {DEVELOPER_INFO.linkedin && (
                <li>
                  <a
                    href={DEVELOPER_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    <span className="group-hover:text-white">LINKEDIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 motion-reduce:transform-none" />
                  </a>
                </li>
              )}
              {DEVELOPER_INFO.twitter && (
                <li>
                  <a
                    href={DEVELOPER_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    <span className="group-hover:text-white">X / TWITTER</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 motion-reduce:transform-none" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  <span className="group-hover:text-white">EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 motion-reduce:transform-none" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Architecture Specifications (Span 3) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold block mb-4">
              Architecture
            </span>
            <ul className="space-y-2 font-mono text-xs text-[#64748B]">
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold">›</span>
                <span>Next.js 16 (App Router)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold">›</span>
                <span>React 19 + TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold">›</span>
                <span>Tailwind CSS v4</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold">›</span>
                <span>Python + Django REST</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-bold">›</span>
                <span>PostgreSQL Database</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Metadata & Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#64748B]">
          <div className="text-center sm:text-left">
            <span>
              © 2026{" "}
              <strong className="text-white font-semibold">
                {DEVELOPER_INFO.technicalIdentity.toUpperCase()}
              </strong>
              . ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Back to Top CTA */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] cursor-pointer"
            aria-label="Back to top"
          >
            <span className="tracking-widest uppercase font-semibold text-xs">BACK TO TOP</span>
            <div className="w-8 h-8 rounded-full border border-[#1E3A5F] bg-[#001133] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[#001D4D] transition-all duration-200 motion-reduce:transition-none shadow-sm">
              <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8] transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
