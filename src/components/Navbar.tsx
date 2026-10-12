"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, MapPin, Sun, Moon } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import Logo from "@/components/Logo";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, theme, toggleTheme, t } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentActiveSection =
    pathname === "/work"
      ? "work"
      : pathname === "/services"
      ? "services"
      : activeSection;

  // Active section observer
  useEffect(() => {
    if (pathname === "/work" || pathname === "/services") return;

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
    { label: t.navbar.work, href: "/#work", id: "work" },
    { label: t.navbar.services, href: "/#services", id: "services" },
    { label: t.navbar.whyMe, href: "/#why-me", id: "why-me" },
    { label: t.navbar.about, href: "/#about", id: "about" },
    { label: t.navbar.experience, href: "/#experience", id: "experience" },
    { label: t.navbar.stack, href: "/#stack", id: "stack" },
    { label: t.navbar.contact, href: "/#contact", id: "contact" },
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
                ? "px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#00081C]/92 backdrop-blur-xl border border-[#00F0FF]/35 shadow-[0_0_26px_rgba(0,240,255,0.25),0_16px_36px_rgba(0,0,0,0.8),inset_0_0_12px_rgba(0,240,255,0.12)]"
                : "px-4 sm:px-6 py-2 sm:py-2.5 bg-[#00081C]/40 backdrop-blur-md border border-[#00F0FF]/25 shadow-[0_0_22px_rgba(0,240,255,0.18),0_4px_24px_rgba(0,0,0,0.35),inset_0_0_8px_rgba(0,240,255,0.08)]"
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
            <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              {navLinks.map((link) => {
                const isActive = currentActiveSection === link.id;
                return (
                  <li key={link.id} className="shrink-0">
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative px-2.5 xl:px-3 py-1.5 rounded-full font-mono text-[11px] xl:text-[12px] tracking-[0.12em] uppercase transition-all duration-300 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] select-none whitespace-nowrap inline-flex items-center justify-center ${
                        isActive
                          ? "text-[#38BDF8] font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                          : "text-[#CBD5E1] hover:text-white"
                      }`}
                    >
                      <span className="relative z-10 whitespace-nowrap">{link.label}</span>

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

            {/* Right: Location & Time + Language & Theme Toggles + CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Language Switcher (EN / हिंदी) */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={`Switch language to ${language === "en" ? "Hindi" : "English"}`}
                title={`Switch language (${language === "en" ? "हिंदी" : "EN"})`}
                className="inline-flex items-center gap-1 h-8 sm:h-9 px-2.5 sm:px-3 rounded-full bg-[#0D1D3A]/80 border border-[#1E3A5F] hover:border-[#38BDF8]/60 text-white font-mono text-[11px] font-semibold tracking-wider transition-all duration-200 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <span className={language === "en" ? "text-[#38BDF8] font-bold" : "text-[#94A3B8]"}>EN</span>
                <span className="text-[#38BDF8]/40 text-[10px]">/</span>
                <span className={language === "hi" ? "text-[#38BDF8] font-bold" : "text-[#94A3B8]"}>हिंदी</span>
              </button>

              {/* Theme Toggle (Dark / Light Mode) */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
                title={`Switch to ${theme === "dark" ? "Light Mode" : "Dark Mode"}`}
                className="size-8 sm:size-9 inline-flex items-center justify-center rounded-full bg-[#0D1D3A]/80 border border-[#1E3A5F] hover:border-[#38BDF8]/60 text-[#38BDF8] hover:text-white transition-all duration-200 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                {theme === "dark" ? (
                  <Sun className="size-4 text-[#38BDF8] transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="size-4 text-[#0284C7] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Subtle Location & Local Time pill */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1D3A]/70 border border-[#1E3A5F] font-mono text-[11px] tracking-wider text-[#94A3B8]">
                <MapPin className="w-3 h-3 text-[#38BDF8]" />
                <span className="text-white font-medium">{t.navbar.location}</span>
                <span className="text-[#38BDF8]/40">•</span>
                <span className="text-[#38BDF8] font-bold">{istTime || "IST"}</span>
              </div>

              {/* WhatsApp Quick Chat Action */}
              <a
                href={DEVELOPER_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title={`Chat on WhatsApp (+91 ${DEVELOPER_INFO.whatsappNumber})`}
                aria-label="Chat directly on WhatsApp"
                className="hidden sm:inline-flex items-center justify-center size-8 sm:size-8.5 xl:size-9 rounded-full border border-[#25D366]/40 bg-[#07152F] text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all duration-300 shadow-[0_0_12px_rgba(37,211,102,0.2)] hover:shadow-[0_0_18px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 shrink-0"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" />
              </a>

              {/* Primary Navbar CTA: START A PROJECT */}
              <Link
                href="/#contact"
                className="hidden sm:inline-flex relative overflow-hidden items-center justify-center gap-1.5 h-8 sm:h-8.5 xl:h-9 px-3 sm:px-4 xl:px-4.5 rounded-full bg-[#0067FE] text-white font-mono text-[11px] xl:text-[11.5px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap shrink-0 transition-all duration-300 ease-out hover:bg-[#0056EE] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_2px_12px_rgba(0,103,254,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,103,254,0.6)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                {/* Specular shimmer */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none motion-reduce:hidden"
                  aria-hidden="true"
                />
                <span className="relative z-10 whitespace-nowrap">{t.navbar.startProject}</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="font-mono text-xs text-white font-semibold uppercase tracking-wider">
                NASHIK, MH &bull; {istTime || "IST"}
              </span>
            </div>
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
          {/* Mobile Drawer Language & Theme Quick Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]/70">
            <span className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] px-2">
              {language === "hi" ? "प्राथमिकताएं" : "PREFERENCES"}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] text-xs font-mono font-semibold"
                aria-label="Toggle language"
              >
                <span className={language === "en" ? "text-[#38BDF8] font-bold" : "text-[#94A3B8]"}>EN</span>
                <span className="text-[#38BDF8]/40">/</span>
                <span className={language === "hi" ? "text-[#38BDF8] font-bold" : "text-[#94A3B8]"}>हिंदी</span>
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="size-8 inline-flex items-center justify-center rounded-lg bg-[#07152F] border border-[#1E3A5F] text-[#38BDF8]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="size-4 text-[#38BDF8]" /> : <Moon className="size-4 text-[#0284C7]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Footer CTA */}
        <div className="pt-6 border-t border-[#1E3A5F]/60 max-w-md mx-auto w-full flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0067FE] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#0056EE] transition-all shadow-[0_4px_16px_rgba(0,103,254,0.4)]"
            >
              <span>{t.navbar.startProject}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={DEVELOPER_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="px-4 py-3.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 transition-all flex items-center justify-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>

          <div className="flex justify-between items-center text-xs font-mono text-[#94A3B8] px-1 pt-1">
            <span>WhatsApp: +91 {DEVELOPER_INFO.whatsappNumber}</span>
            <span className="text-[#38BDF8]">© {DEVELOPER_INFO.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}
