"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, MapPin, Globe, Send } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Full-Stack Web App",
    "Next.js / React Frontend",
    "Django REST Backend",
    "School ERP / SaaS",
    "E-Commerce Architecture",
  ];

  const budgetRanges = [
    "< $3,000",
    "$3,000 - $6,000",
    "$6,000 - $12,000",
    "$12,000+",
  ];

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
      newErrors.message = "Please describe your project or inquiry.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please share a few more details (minimum 15 characters).";
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
      // Simulate clean asynchronous submission with realistic network latency
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "Full-Stack Web App",
        budget: "$5,000 - $10,000",
        message: "",
      });
    } catch {
      setErrorMessage("Something went wrong while sending your inquiry. Please email me directly.");
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
        className="absolute -top-40 right-10 w-[550px] h-[450px] rounded-full bg-[#0067FE]/[0.05] blur-[130px] pointer-events-none"
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
              07 —
            </span>
            <span className="h-px w-6 bg-[#1E3A5F]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-semibold">
              Initiate Collaboration
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.94]">
                <span className="block">LET&apos;S WORK</span>
                <span className="block text-[#38BDF8]">TOGETHER.</span>
              </h2>
            </div>

            <div className="max-w-md flex flex-col gap-4">
              <p className="font-body text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
                Have a project in mind? Let&apos;s discuss how I can help bring it to life with
                architectural clean code and modern engineering.
              </p>
              <div className="flex items-center gap-3 pt-2">
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

        {/* Contact Form & Technical Info Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct channels and specs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Channel Specification Card */}
            <div className="p-6 sm:p-8 bg-[#030F26]/85 border border-[#1E3A5F]/60 rounded-xl backdrop-blur-sm flex flex-col gap-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/50">
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  Direct Channels &amp; Coordinates
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              </div>

              <div className="flex flex-col gap-5">
                {/* Email Address */}
                <div className="group">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{DEVELOPER_INFO.email}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#38BDF8]" />
                  </a>
                </div>

                {/* Primary Timezone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#1E3A5F]/30">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                      Location / Region
                    </span>
                    <div className="flex items-center gap-1.5 text-white font-mono text-sm font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span>{DEVELOPER_INFO.location}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                      Primary Timezone
                    </span>
                    <div className="flex items-center gap-1.5 text-white font-mono text-sm font-semibold">
                      <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span>IST (UTC +5:30)</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-2 border-t border-[#1E3A5F]/30">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                    Current Status
                  </span>
                  <p className="font-mono text-xs text-[#38BDF8] font-bold">
                    {DEVELOPER_INFO.status} — {DEVELOPER_INFO.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Engagement Model Card */}
            <div className="p-6 bg-[#030F26]/60 border border-[#1E3A5F]/60 rounded-xl font-mono text-xs flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#38BDF8] uppercase tracking-wider font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>Project Engagement Model</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Available for full project builds, architectural consulting, dedicated sprints, or
                long-term technical advisory.
              </p>
            </div>

            {/* Social / Code Repositories Links */}
            <div className="p-6 bg-[#030F26]/40 border border-[#1E3A5F]/40 rounded-xl flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#38BDF8] font-bold">
                Professional Networks
              </span>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                {DEVELOPER_INFO.github && (
                  <a
                    href={DEVELOPER_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"
                  >
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 text-[#38BDF8]" />
                  </a>
                )}
                {DEVELOPER_INFO.linkedin && (
                  <a
                    href={DEVELOPER_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"
                  >
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 text-[#38BDF8]" />
                  </a>
                )}
                {DEVELOPER_INFO.twitter && (
                  <a
                    href={DEVELOPER_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"
                  >
                    <span>X / TWITTER</span>
                    <ArrowUpRight className="w-3 h-3 text-[#38BDF8]" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            {isSuccess ? (
              <div className="p-8 sm:p-10 bg-[#030F26]/90 border border-[#38BDF8]/40 rounded-xl shadow-[0_12px_40px_rgba(0,103,254,0.15)] flex flex-col gap-6 animate-fadeIn">
                <div className="flex items-center gap-3 text-[#38BDF8]">
                  <CheckCircle2 className="w-8 h-8" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    Transmission Dispatched Successfully
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  Thank you for reaching out!
                </h3>
                <p className="font-body text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  I have received your project details and specifications. I will review your requirements
                  and reply promptly to discuss technical feasibility and next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="w-fit px-6 py-3.5 bg-[#001A4D] border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#00081C] font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 rounded-lg shadow-md cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 lg:p-10 bg-[#030F26]/85 border border-[#1E3A5F]/70 rounded-xl shadow-lg flex flex-col gap-6"
                noValidate
              >
                {errorMessage && (
                  <div className="p-4 bg-red-950/70 border border-red-500/80 text-white text-xs font-mono flex items-center gap-2 rounded-lg">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold flex items-center justify-between"
                    >
                      <span>Your Name</span>
                      <span className="text-[#38BDF8] text-[11px]">*Required</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Vikram Malhotra"
                      className={`px-4 py-3 bg-[#00081C]/90 border text-sm font-body text-white placeholder:text-[#64748B] focus:outline-none rounded-lg transition-colors ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                          : "border-[#1E3A5F] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <div className="min-h-[18px]">
                      {errors.name && (
                        <span id="name-error" className="text-rose-400 text-xs font-mono block">
                          {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold flex items-center justify-between"
                    >
                      <span>Email Address</span>
                      <span className="text-[#38BDF8] text-[11px]">*Required</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. vikram@studio.com"
                      className={`px-4 py-3 bg-[#00081C]/90 border text-sm font-body text-white placeholder:text-[#64748B] focus:outline-none rounded-lg transition-colors ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                          : "border-[#1E3A5F] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30"
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <div className="min-h-[18px]">
                      {errors.email && (
                        <span id="email-error" className="text-rose-400 text-xs font-mono block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Type Selectors */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 rounded border cursor-pointer motion-reduce:transition-none ${
                          formData.projectType === type
                            ? "bg-[#001D4D] text-[#38BDF8] font-bold border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                            : "bg-[#000B25] text-[#94A3B8] border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Budget Selector */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold">
                    Estimated Budget (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`px-3 py-2 font-mono text-xs tracking-wider transition-all duration-200 rounded border text-center cursor-pointer motion-reduce:transition-none ${
                          formData.budget === range
                            ? "bg-[#001D4D] text-[#38BDF8] font-bold border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                            : "bg-[#000B25] text-[#94A3B8] border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:text-white"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold flex items-center justify-between"
                  >
                    <span>Project Details &amp; Objectives</span>
                    <span className="text-[#38BDF8] text-[11px]">*Required</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Tell me about your product requirements, current architecture, target timeline, or specific challenges..."
                    className={`px-4 py-3 bg-[#00081C]/90 border text-sm font-body text-white placeholder:text-[#64748B] focus:outline-none rounded-lg transition-colors resize-y ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                        : "border-[#1E3A5F] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  <div className="min-h-[18px]">
                    {errors.message && (
                      <span id="message-error" className="text-rose-400 text-xs font-mono block">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Primary CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#0067FE] to-[#2563EB] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-bold rounded-lg transition-all duration-300 motion-reduce:transition-none flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer shadow-[0_4px_20px_rgba(0,103,254,0.35)] hover:shadow-[0_4px_28px_rgba(56,189,248,0.45)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#38BDF8]" />
                      <span>DISPATCHING TRANSMISSION...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>SUBMIT INQUIRY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
