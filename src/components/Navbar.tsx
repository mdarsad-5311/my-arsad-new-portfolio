"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentActiveSection = pathname === "/work" ? "work" : activeSection;

  // Active section observer
  useEffect(() => {
    if (pathname === "/work") return;

    const sectionIds = ["home", "work", "services", "why-me", "workflow", "about", "experience", "stack", "contact"];
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScrollActive, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, [pathname]);

  // Close mobile drawer on Escape key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "/#work", id: "work" },
    { label: "Services", href: "/#services", id: "services" },
    { label: "Why Me", href: "/#why-me", id: "why-me" },
    { label: "About", href: "/#about", id: "about" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Stack", href: "/#stack", id: "stack" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      {/* 
        Refined Premium Sticky Navbar
        - Compact on scroll
        - Subtle backdrop blur
        - Refined border & active link micro-transitions
      */}
      <header
        className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 ${
          scrolled ? "pt-2 sm:pt-2.5 px-3 sm:px-6" : "pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <nav
            className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out rounded-full ${
              scrolled
                ? "px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#00081C]/92 backdrop-blur-xl border border-[#38BDF8]/25 shadow-[0_16px_36px_rgba(0,0,0,0.7),0_0_24px_rgba(0,103,254,0.14),inset_0_1px_1px_rgba(255,255,255,0.15)]"
                : "px-4 sm:px-6 py-2 sm:py-2.5 bg-[#00081C]/30 backdrop-blur-md border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
            }`}
            aria-label="Main Navigation"
          >
            {/* Left: Brand Logo */}
            <Link
              href="/"
              className="group inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-full py-0.5 transition-all duration-300 hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.4)]"
              aria-label="MD ARSAD — Full-Stack Engineer"
            >
              <Logo height={scrolled ? 46 : 50} />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = currentActiveSection === link.id;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative px-3 py-1.5 rounded-full font-mono text-[11px] xl:text-[12px] tracking-[0.14em] uppercase transition-all duration-300 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] select-none block ${
                        isActive
                          ? "text-[#38BDF8] font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                          : "text-[#CBD5E1] hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>

                      {/* Ambient hover & active background glass pill aura */}
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 ease-out pointer-events-none ${
                          isActive
                            ? "bg-[#38BDF8]/[0.08] border border-[#38BDF8]/30 shadow-[inset_0_0_10px_rgba(56,189,248,0.12)]"
                            : "bg-transparent group-hover:bg-white/[0.05] border border-transparent group-hover:border-white/10"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Animated bottom indicator */}
                      <span
                        className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent transition-all duration-300 pointer-events-none ${
                          isActive
                            ? "opacity-100 scale-x-100 shadow-[0_0_8px_#38BDF8]"
                            : "opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right: CTA & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Primary Navbar CTA: START A PROJECT */}
              <Link
                href="/#contact"
                className="hidden sm:inline-flex relative overflow-hidden items-center justify-center gap-2 h-9 sm:h-10 px-4 sm:px-5 rounded-full bg-[#0067FE] text-white font-mono text-[11px] xl:text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out hover:bg-[#0056EE] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_2px_14px_rgba(0,103,254,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_24px_rgba(0,103,254,0.65)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                {/* Specular shimmer */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none motion-reduce:hidden"
                  aria-hidden="true"
                />
                <span className="relative z-10">START A PROJECT</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="size-9 sm:size-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-[#0D1D3A]/80 backdrop-blur-md text-white hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? (
                  <X className="size-4 text-[#38BDF8]" />
                ) : (
                  <Menu className="size-4 text-white" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Refined Animated Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 bg-[#00081C]/96 backdrop-blur-2xl transition-all duration-300 ease-out lg:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/60">
            <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">
              NAVIGATION
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-[#0D1D3A] text-[#38BDF8] rounded-full border border-[#38BDF8]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              AVAILABLE
            </span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link, idx) => {
              const isActive = currentActiveSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl font-display text-lg font-bold tracking-tight uppercase transition-all duration-200 border ${
                    isActive
                      ? "bg-[#0D1D3A] text-[#38BDF8] border-[#38BDF8]/40 shadow-[0_2px_12px_rgba(0,103,254,0.2)]"
                      : "bg-[#0D1D3A]/30 text-[#CBD5E1] border-transparent hover:border-white/10 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#64748B]">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Footer CTA */}
        <div className="pt-6 border-t border-[#1E3A5F]/60 max-w-md mx-auto w-full flex flex-col gap-3">
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0067FE] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#0056EE] transition-all shadow-[0_4px_16px_rgba(0,103,254,0.4)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex justify-between items-center text-xs font-mono text-[#94A3B8] px-1 pt-1">
            <span>{DEVELOPER_INFO.email}</span>
            <span className="text-[#38BDF8]">© {DEVELOPER_INFO.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}
