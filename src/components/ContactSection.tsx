"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, MapPin, Globe, Clock, Copy, Check, ChevronDown } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";
import LocationCard from "@/components/LocationCard";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Business Website",
    budget: "Under ₹25,000",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedBrief, setSubmittedBrief] = useState<{
    name: string;
    email: string;
    phone?: string;
    company?: string;
    projectType: string;
    budget: string;
    message: string;
  } | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const [honeypot, setHoneypot] = useState("");
  const [initTimestamp] = useState(() => Date.now());

  const projectTypes = [
    "Business Website",
    "Web Application",
    "SaaS Development",
    "E-Commerce Platform",
    "Custom Business System / ERP",
    "Dashboard & Admin Panel",
    "API & Backend Architecture",
    "Other",
  ];

  const budgetRanges = [
    "Under ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000+",
  ];

  const copyBriefToClipboard = () => {
    if (!submittedBrief) return;
    const text = `PROJECT INQUIRY FOR MD ARSAD\n----------------------------\nName: ${submittedBrief.name}\nEmail: ${submittedBrief.email}${submittedBrief.phone ? `\nWhatsApp / Phone: ${submittedBrief.phone}` : ""}${submittedBrief.company ? `\nCompany / Business: ${submittedBrief.company}` : ""}\nProject Type: ${submittedBrief.projectType}\nBudget Range: ${submittedBrief.budget}\n\nProject Scope:\n${submittedBrief.message}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const mailtoUrl = submittedBrief
    ? `mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
        `Project Inquiry: ${submittedBrief.projectType} — ${submittedBrief.name}`
      )}&body=${encodeURIComponent(
        `Hello Arsad,\n\nHere are my project details:\n\n• Name: ${submittedBrief.name}\n• Email: ${submittedBrief.email}${submittedBrief.phone ? `\n• WhatsApp / Phone: ${submittedBrief.phone}` : ""}${submittedBrief.company ? `\n• Company / Business: ${submittedBrief.company}` : ""}\n• Project Type: ${submittedBrief.projectType}\n• Budget Range: ${submittedBrief.budget}\n\nProject Brief:\n${submittedBrief.message}\n\nLooking forward to speaking.`
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _hp: honeypot,
          _ts: initTimestamp,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        if (data.details) {
          setErrors(data.details);
        }
        throw new Error(data.error || "Something went wrong. Please reach out directly via email.");
      }

      setSubmittedBrief({ ...formData });
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Business Website",
        budget: "Under ₹25,000",
        message: "",
      });
      setErrors({});
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please reach out directly via email.";
      setErrorMessage(msg);
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
              12 —
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
          {/* Left Column: Direct Coordinates Card with Neon Rim */}
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

                {/* WhatsApp & Direct Line */}
                <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex flex-col gap-1.5 hover:border-[#25D366]/40 transition-colors">
                  <span className="text-[10px] text-[#94A3B8] uppercase">WhatsApp &amp; Direct Line</span>
                  <div className="flex items-center justify-between">
                    <a
                      href={DEVELOPER_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#25D366] transition-colors font-semibold text-sm flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>{DEVELOPER_INFO.phone}</span>
                    </a>
                    <a
                      href={DEVELOPER_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors font-semibold"
                    >
                      <span>CHAT</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
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

              {/* Social Channels & WhatsApp */}
              <div className="pt-3 border-t border-[#1E3A5F]/50 grid grid-cols-3 gap-2">
                <a
                  href={DEVELOPER_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#25D366] text-white hover:text-[#25D366] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-white hover:text-[#38BDF8] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#07152F] border border-[#1E3A5F] hover:border-[#38BDF8] text-white hover:text-[#38BDF8] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Interactive Radar Location & Timezone Telemetry */}
            <LocationCard />
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
                      ENQUIRY SENT SUCCESSFULLY
                    </h3>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#CBD5E1] max-w-lg leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{submittedBrief?.name}</span>! Your project brief has been sent to MD Arsad&apos;s personal inbox (<span className="text-[#38BDF8] font-mono text-xs">{DEVELOPER_INFO.email}</span>). Expect a response within 24 hours.
                  </p>

                  <div className="w-full max-w-md flex flex-col gap-3 pt-2">
                    {/* Primary Action: Direct Mailto Dispatch */}
                    <a
                      href={mailtoUrl}
                      className="w-full py-3.5 px-5 rounded-xl bg-[#0067FE] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0056EE] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,103,254,0.4)] group"
                    >
                      <span>OPEN IN EMAIL CLIENT</span>
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
                    onClick={() => {
                      setIsSuccess(false);
                      setErrorMessage("");
                    }}
                    className="mt-2 text-xs font-mono text-[#94A3B8] hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Edit Details or Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Anti-spam honeypot - invisible to real users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-hp-site">Leave this field blank</label>
                    <input
                      id="contact-hp-site"
                      type="text"
                      name="_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-sm text-[#A8B4C7]">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
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
                      <label htmlFor="contact-email" className="text-sm text-[#A8B4C7]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
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

                  {/* Row 2: WhatsApp / Phone and Company / Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-phone" className="text-sm text-[#A8B4C7]">
                        WhatsApp / Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl bg-[#07152F] border border-[#1E3A5F] text-white font-body text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-company" className="text-sm text-[#A8B4C7]">
                        Company / Business
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Optional"
                        className="w-full px-4 py-3 rounded-xl bg-[#07152F] border border-[#1E3A5F] text-white font-body text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type and Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-project-type" className="text-sm text-[#A8B4C7]">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          id="contact-project-type"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#07152F] border border-[#1E3A5F] text-white font-body text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/20 transition-all appearance-none cursor-pointer pr-10"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#07152F] text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#94A3B8] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-budget" className="text-sm text-[#A8B4C7]">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#07152F] border border-[#1E3A5F] text-white font-body text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/20 transition-all appearance-none cursor-pointer pr-10"
                        >
                          {budgetRanges.map((budget) => (
                            <option key={budget} value={budget} className="bg-[#07152F] text-white">
                              {budget}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#94A3B8] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Project Details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-details" className="text-sm text-[#A8B4C7]">
                      Project Details
                    </label>
                    <textarea
                      id="contact-details"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What are you building, and what does success look like?"
                      className={`w-full px-4 py-3 rounded-xl bg-[#07152F] border text-white font-body text-sm placeholder:text-[#64748B] focus:outline-none focus:ring-1 transition-all resize-y ${
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
