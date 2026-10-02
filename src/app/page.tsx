import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SelectedWork from "@/components/SelectedWork";
import ServicesSection from "@/components/ServicesSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import HowIWork from "@/components/HowIWork";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import StackSection from "@/components/StackSection";
import GithubSection from "@/components/GithubSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Sticky Minimalist Editorial Navigation */}
      <Navbar />

      <main className="min-h-screen bg-transparent text-white relative">
        {/* 2. Hero — Editorial Full-Stack Engineer Identity */}
        <Hero />

        {/* 3. Credibility / Trust Strip — Technologies & World-wide Collaboration */}
        <TrustStrip />

        {/* 4. Selected Work — Large Editorial Case Study Cards */}
        <SelectedWork />

        {/* 5. Services — Client Solutions & Scope */}
        <ServicesSection />

        {/* 6. Why Work With Me — Technical & Commercial Advantages */}
        <WhyWorkWithMe />

        {/* 7. How I Work — Structured 6-Phase Engineering Workflow */}
        <HowIWork />

        {/* 8. About Me — Engineering Identity, Workstation & Philosophy */}
        <AboutSection />

        {/* 9. Career & Technical Development — Editorial Timeline */}
        <ExperienceSection />

        {/* 10. Stack & Tools — Technical Arsenal & Interactive Inspector */}
        <StackSection />

        {/* 11. Built With Code — Open Source Repositories */}
        <GithubSection />

        {/* 12. Values & Collaboration Standards */}
        <TestimonialsSection />

        {/* 13. Frequently Asked Questions */}
        <FaqSection />

        {/* 14. Project Initiation — Conversion & Contact Hub */}
        <ContactSection />
      </main>

      {/* 15. Minimal Editorial Footer & Final CTA */}
      <Footer />
    </>
  );
}
