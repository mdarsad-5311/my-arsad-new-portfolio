import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
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
      {/* Sticky Minimalist Navigation */}
      <Navbar />

      <main className="min-h-screen bg-[#00081C] text-white">
        {/* 2. Hero — Deep Navy → Blue gradient */}
        <Hero />

        {/* 3. About — White / Ice */}
        <AboutSection />

        {/* 4. Services — Very Light Blue */}
        <ServicesSection />

        {/* 5. Projects — Deep Navy */}
        <SelectedWork />

        {/* Career Experience Timeline */}
        <ExperienceSection />

        {/* 6. Skills / Tech Stack — Clean White */}
        <StackSection />

        {/* Open Source Repositories */}
        <GithubSection />

        {/* Values & Principles */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* 7. CTA — Blue gradient (#2563EB -> #06B6D4) */}
        <ContactSection />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </>
  );
}
