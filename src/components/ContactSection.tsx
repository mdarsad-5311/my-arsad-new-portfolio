"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, MapPin, Globe, Clock, Copy, Check } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Application",
    budget: "$3,000 - $6,000",
    timeline: "1 - 2 Months",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedBrief, setSubmittedBrief] = useState<{
    name: string;
    email: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
  } | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const projectTypes = [
    "Web Application",
    "SaaS Development",
    "E-Commerce Platform",
    "Custom Business System / ERP",
    "Dashboard & Admin Panel",
    "API & Backend Architecture",
  ];

  const budgetRanges = [
    "< $3,000",
    "$3,000 - $6,000",
    "$6,000 - $12,000",
    "$12,000+",
  ];

  const timelineRanges = [
    "< 1 Month",
    "1 - 2 Months",
    "2 - 4 Months",
    "Flexible / Ongoing",
  ];

  const copyBriefToClipboard = () => {
    if (!submittedBrief) return;
    const text = `PROJECT INQUIRY FOR MD ARSAD\n----------------------------\nName: ${submittedBrief.name}\nEmail: ${submittedBrief.email}\nProject Type: ${submittedBrief.projectType}\nBudget Range: ${submittedBrief.budget}\nTimeline: ${submittedBrief.timeline}\n\nProject Scope:\n${submittedBrief.message}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const mailtoUrl = submittedBrief
    ? `mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
        `Project Inquiry: ${submittedBrief.projectType} — ${submittedBrief.name}`
      )}&body=${encodeURIComponent(
        `Hello Arsad,\n\nHere are my project details:\n\n• Name: ${submittedBrief.name}\n• Email: ${submittedBrief.email}\n• Project Type: ${submittedBrief.projectType}\n• Estimated Budget: ${submittedBrief.budget}\n• Expected Timeline: ${submittedBrief.timeline}\n\nProject Brief:\n${submittedBrief.message}\n\nLooking forward to speaking.`
      )}`
    : `mailto:${DEVELOPER_INFO.email}`;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please share details regarding your project.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide a few more details (minimum 15 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate validation & preparation
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmittedBrief({ ...formData });
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "Web Application",
        budget: "$3,000 - $6,000",
        timeline: "1 - 2 Months",
        message: "",
      });
    } catch {
      setErrorMessage("Something went wrong. Please reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-b border-[#1E3A5F]/40 bg-[#00081C] text-[#A8B4C7] overflow-hidden"
      aria-label="Contact and Project Inquiry"
    >
      {/* Background Architectural Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Layered Ambient Radial Glows */}
      <div
        className="absolute -top-40 right-10 w-[550px] h-[450px] rounded-full bg-[#0067FE]/[0.06] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 left-10 w-[500px] h-[400px] rounded-full bg-[#38BDF8]/[0.04] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 pb-12 sm:pb-16 border-b border-[#1E3A5F]/60">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-bold">
              10 —
            </span>
            <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
              Project Initiation
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.96]">
                <span className="block">LET&apos;S BUILD</span>
                <span className="block text-[#38BDF8]">SOMETHING USEFUL.</span>
              </h2>
            </div>

            <div className="max-w-md flex flex-col gap-4">
              <p className="font-body text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
                Have an idea, product or business problem you want to solve? Let&apos;s talk.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#001238] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#38BDF8] hover:text-white hover:bg-[#002060] font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 rounded-lg shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL DIRECTLY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Direct Channels Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Coordinates Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 bg-[#0D1D3A]/60 border border-[#1E3A5F]/70 rounded-2xl flex flex-col gap-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/50">
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  Direct Channels &amp; Coordinates
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              </div>

              <div className="flex flex-col gap-4 font-mono text-xs">
                {/* Email Direct */}
                <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex flex-col gap-1">
                  <span className="text-[10px] text-[#94A3B8] uppercase">Direct Email</span>
                  <a
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    className="text-white hover:text-[#38BDF8] transition-colors font-semibold text-sm break-all"
                  >
                    {DEVELOPER_INFO.email}
                  </a>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex items-center justify-between">
                  <span className="text-[10px] text-[#94A3B8] uppercase">Location</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {DEVELOPER_INFO.location} (IST)
                  </span>
                </div>

                {/* Availability */}
                <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex items-center justify-between">
                  <span className="text-[10px] text-[#94A3B8] uppercase">Availability</span>
                  <span className="text-[#38BDF8] font-semibold flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {DEVELOPER_INFO.availability}
                  </span>
                </div>

                {/* Response Time Guarantee */}
                <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex items-center justify-between">
                  <span className="text-[10px] text-[#94A3B8] uppercase">Response Time</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Within 24 Hours
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-[#1E3A5F]/50 flex items-center gap-3">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-white hover:text-[#38BDF8] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-white hover:text-[#38BDF8] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0D1D3A]/60 border border-[#1E3A5F]/70 rounded-2xl shadow-sm">
              {isSuccess ? (
                <div className="py-8 sm:py-10 flex flex-col items-center justify-center text-center gap-5 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#002259] border border-[#38BDF8] flex items-center justify-center text-[#38BDF8] shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#38BDF8] font-bold block mb-1">
                      DIRECT INQUIRY DISPATCH
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                      PROJECT BRIEF PREPARED
                    </h3>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#CBD5E1] max-w-lg leading-relaxed">
                    Your project details have been formatted and verified. To ensure direct delivery straight into MD Arsad&apos;s personal inbox without third-party mailer delays, choose an option below:
                  </p>

                  <div className="w-full max-w-md flex flex-col gap-3 pt-2">
                    {/* Primary Action: Direct Mailto Dispatch */}
                    <a
                      href={mailtoUrl}
                      className="w-full py-3.5 px-5 rounded-xl bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,103,254,0.4)] group"
                    >
                      <span>SEND VIA EMAIL CLIENT</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    {/* Secondary Action: Copy Formatted Brief to Clipboard */}
                    <button
                      type="button"
                      onClick={copyBriefToClipboard}
                      className="w-full py-3 px-5 rounded-xl bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-[#38BDF8]" />
                          <span className="text-[#38BDF8]">BRIEF COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#94A3B8]" />
                          <span>COPY BRIEF TO CLIPBOARD</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 text-xs font-mono text-[#94A3B8] hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Edit Details or Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                        Your Name <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-[#07152F] border text-white font-body text-sm placeholder:text-[#64748B] focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#1E3A5F] focus:border-[#38BDF8] focus:ring-[#38BDF8]/20"
                        }`}
                      />
                      {errors.name && (
                        <span className="font-mono text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                        Email Address <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#07152F] border text-white font-body text-sm placeholder:text-[#64748B] focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#1E3A5F] focus:border-[#38BDF8] focus:ring-[#38BDF8]/20"
                        }`}
                      />
                      {errors.email && (
                        <span className="font-mono text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-2.5 rounded-lg border font-mono text-[11px] uppercase tracking-wider transition-all text-left truncate ${
                              isSelected
                                ? "bg-[#002259] text-white border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.2)] font-semibold"
                                : "bg-[#07152F] text-[#CBD5E1] border-[#1E3A5F] hover:border-[#38BDF8]/50"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Budget Range */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetRanges.map((budget) => {
                          const isSelected = formData.budget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget })}
                              className={`p-2 rounded-lg border font-mono text-[11px] uppercase tracking-wider text-center transition-all ${
                                isSelected
                                  ? "bg-[#002259] text-white border-[#38BDF8] font-semibold"
                                  : "bg-[#07152F] text-[#CBD5E1] border-[#1E3A5F] hover:border-[#38BDF8]/50"
                              }`}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                        Expected Timeline
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timelineRanges.map((timeline) => {
                          const isSelected = formData.timeline === timeline;
                          return (
                            <button
                              key={timeline}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline })}
                              className={`p-2 rounded-lg border font-mono text-[11px] uppercase tracking-wider text-center transition-all ${
                                isSelected
                                  ? "bg-[#002259] text-white border-[#38BDF8] font-semibold"
                                  : "bg-[#07152F] text-[#CBD5E1] border-[#1E3A5F] hover:border-[#38BDF8]/50"
                              }`}
                            >
                              {timeline}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-details" className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                      Project Details &amp; Objectives <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, any existing designs or stack requirements, and key project goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#07152F] border text-white font-body text-sm placeholder:text-[#64748B] focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-[#1E3A5F] focus:border-[#38BDF8] focus:ring-[#38BDF8]/20"
                      }`}
                    />
                    {errors.message && (
                      <span className="font-mono text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-red-300 font-mono text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>PROCESSING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>START A PROJECT</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
