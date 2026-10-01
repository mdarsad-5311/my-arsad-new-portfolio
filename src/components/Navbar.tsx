"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentActiveSection = pathname === "/work" ? "work" : activeSection;

  // Section Observer for Active Navigation
  useEffect(() => {
    if (pathname === "/work") return;

    const sectionIds = ["home", "about", "services", "work", "experience", "stack", "contact"];
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 140;
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

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { number: "01", label: "Home", href: "/#home", id: "home" },
    { number: "02", label: "Work", href: "/work", id: "work" },
    { number: "03", label: "About", href: "/#about", id: "about" },
    { number: "04", label: "Services", href: "/#services", id: "services" },
    { number: "05", label: "Experience", href: "/#experience", id: "experience" },
    { number: "06", label: "Stack", href: "/#stack", id: "stack" },
    { number: "07", label: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      {/* 
        Refined Premium Glassmorphism Navbar
        - Initial state: Transparent dark navy glass with subtle border & ambient glow
        - Scrolled state: Transitions smoothly into frosted glass surface for maximum contrast
      */}
      <header className="fixed top-0 inset-x-0 z-50 pt-2.5 sm:pt-3.5 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full">
          <nav
            className={`pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ease-out ${
              scrolled
                ? "bg-[#00081C]/90 backdrop-blur-xl border border-[#38BDF8]/25 shadow-[0_16px_40px_rgba(0,0,0,0.65),0_0_28px_rgba(0,103,254,0.16),inset_0_1px_1px_rgba(255,255,255,0.18)]"
                : "bg-[#000d28]/45 backdrop-blur-md border border-white/[0.09] shadow-[0_8px_28px_rgba(0,0,0,0.35),0_0_16px_rgba(0,103,254,0.08),inset_0_1px_1px_rgba(255,255,255,0.12)]"
            }`}
            aria-label="Main Navigation"
          >
            {/* Left: Full Brand Logo with subtle hover drop-shadow */}
            <Link
              href="/"
              className="group inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-full py-0.5 transition-all duration-300 hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.4)]"
              aria-label="MD ARSAD — Full-Stack Engineer"
            >
              <Logo height={52} />
            </Link>

            {/* Desktop Navigation Links with refined electric-blue active & hover state */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentActiveSection === link.id;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative px-3 py-1.5 rounded-full font-mono text-[11px] xl:text-[12px] tracking-[0.16em] uppercase transition-all duration-300 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] select-none block ${
                        isActive
                          ? "text-[#38BDF8] font-semibold drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                          : "text-[#CBD5E1] hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>

                      {/* Ambient hover & active background glass pill aura */}
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 ease-out pointer-events-none motion-reduce:transition-none ${
                          isActive
                            ? "bg-[#38BDF8]/[0.08] border border-[#38BDF8]/25 shadow-[inset_0_0_10px_rgba(56,189,248,0.12)]"
                            : "bg-transparent group-hover:bg-white/[0.05] border border-transparent group-hover:border-white/10"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Minimal animated electric-blue micro underline indicator */}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent transition-all duration-300 pointer-events-none motion-reduce:transition-none ${
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

            {/* Right: Hire Me CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/#contact"
                className="hidden sm:inline-flex relative overflow-hidden items-center justify-center gap-2 h-10 px-5 rounded-full bg-[#2563EB] text-[#FFFFFF] font-mono text-[11px] xl:text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out hover:bg-[#1D4ED8] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_2px_14px_rgba(37,99,235,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_24px_rgba(37,99,235,0.7),0_4px_16px_rgba(37,99,235,0.4),inset_0_1px_1px_rgba(255,255,255,0.45)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                {/* Subtle specular reflection sweep on hover */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none motion-reduce:hidden"
                  aria-hidden="true"
                />
                <span className="relative z-10">HIRE ME</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="size-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-[#0D1D3A]/70 backdrop-blur-md text-[#FFFFFF] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#0D1D3A]/90 transition-all duration-300 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] active:scale-95 shadow-sm"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="size-4 animate-in fade-in zoom-in-75 duration-200" />
                ) : (
                  <Menu className="size-4 animate-in fade-in duration-200" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer with Matching Glass Aesthetic */}
      <div
        className={`fixed inset-0 z-40 bg-[#00081C]/92 backdrop-blur-2xl transition-all duration-350 ease-out lg:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-3"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center shrink-0 transition-transform hover:scale-[1.02]"
              aria-label="MD ARSAD — Full-Stack Engineer"
            >
              <Logo height={48} />
            </Link>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-[#0D1D3A]/80 backdrop-blur-md text-[#38BDF8] rounded-full border border-[#38BDF8]/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              Available
            </span>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => {
              const isItemActive = currentActiveSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 30 + 40}ms` : "0ms",
                  }}
                  className={`flex items-center justify-between text-xl font-display font-medium tracking-tight py-3 px-4 rounded-xl transition-all duration-300 border ${
                    isItemActive
                      ? "bg-[#0D1D3A]/85 backdrop-blur-md text-[#38BDF8] border-[#38BDF8]/40 shadow-[0_2px_16px_rgba(0,103,254,0.25),inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      : "bg-[#0D1D3A]/40 backdrop-blur-md text-[#CBD5E1] hover:text-[#38BDF8] hover:bg-[#0D1D3A]/70 hover:border-white/20 border-white/[0.08]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isItemActive ? "text-[#38BDF8]" : "text-[#A8B4C7]"
                    }`}
                  >
                    {link.number}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#2563EB] text-[#FFFFFF] border border-white/20 font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#1D4ED8] transition-all shadow-[0_2px_14px_rgba(37,99,235,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          >
            <span>HIRE ME — START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="flex justify-between items-center text-xs font-mono text-[#A8B4C7]">
            <span>{DEVELOPER_INFO.email}</span>
            <span className="text-[#38BDF8]">© 2026 MD ARSAD</span>
          </div>
        </div>
      </div>
    </>
  );
}
