import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GitBranch, Layers, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, DEVELOPER_INFO } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: `Project Not Found — ${DEVELOPER_INFO.name}`,
    };
  }

  return {
    title: `${project.title} — Case Study | ${DEVELOPER_INFO.technicalIdentity}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | ${DEVELOPER_INFO.technicalIdentity}`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#00081C] text-white pt-28 sm:pt-36 overflow-hidden">
        {/* Architectural Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Top Glow */}
        <div
          className="absolute top-16 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px] bg-gradient-to-br from-[#0067FE] to-transparent"
          aria-hidden="true"
        />

        {/* Back Link & Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 border-b border-[#1E3A5F]/60 relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A8B4C7] hover:text-[#38BDF8] transition-colors duration-200 group mb-6 sm:mb-8 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
          >
            <ArrowLeft className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          {/* Project Title Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Metadata Eyebrow: 01 / CATEGORY • YEAR */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs uppercase tracking-widest text-[#A8B4C7] mb-3">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#38BDF8]">
                  {project.number}
                </span>
                <span className="text-[#38BDF8]/40 select-none">/</span>
                <span className="font-semibold text-white">{project.category}</span>
                <span className="text-[#38BDF8]/40 select-none">•</span>
                <span>{project.year}</span>
              </div>

              {/* Primary Project Title */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
                {project.title}
              </h1>

              {/* Short Narrative Description */}
              <p className="mt-4 font-body text-base sm:text-lg lg:text-xl text-[#A8B4C7] leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 lg:pb-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0056EE] hover:shadow-[0_4px_20px_rgba(0,103,254,0.45)] transition-all duration-300 shadow-[0_4px_15px_rgba(0,103,254,0.35)] rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D1D3A] border border-[#1E3A5F] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Metadata Specs Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#1E3A5F]/60 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs relative z-10">
          <div>
            <span className="text-[#A8B4C7] uppercase block text-[10px] tracking-widest">Role</span>
            <span className="font-semibold text-[#CBD5E1] text-sm mt-0.5 block">{project.role}</span>
          </div>
          <div>
            <span className="text-[#A8B4C7] uppercase block text-[10px] tracking-widest">
              Project Context
            </span>
            <span className="font-semibold text-[#CBD5E1] text-sm mt-0.5 block">
              {project.projectType}
            </span>
          </div>
          <div>
            <span className="text-[#A8B4C7] uppercase block text-[10px] tracking-widest">
              Category
            </span>
            <span className="font-semibold text-[#CBD5E1] text-sm mt-0.5 block">
              {project.category}
            </span>
          </div>
          <div>
            <span className="text-[#A8B4C7] uppercase block text-[10px] tracking-widest">
              Core Technologies
            </span>
            <span className="font-semibold text-[#38BDF8] text-sm mt-0.5 block">
              {project.technologies.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#0D1D3A] border border-[#1E3A5F] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:transform-none"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            {/* Subtle bottom vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 6. System Architecture & Implementation Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="bg-[#0D1D3A]/70 text-white py-12 sm:py-16 border-y border-[#1E3A5F]/60 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  System Architecture &amp; Key Specifications
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {project.highlights.map((item) => (
                  <div key={item.label} className="border-l-2 border-[#38BDF8] pl-5 py-1">
                    <span className="font-display text-xl sm:text-2xl font-bold text-white block">
                      {item.value}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#A8B4C7] mt-1.5 block">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Problem & Engineering Solution Narrative */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
                01 / The Challenge
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                Problem &amp; Friction Points
              </h2>
              <p className="mt-4 font-body text-base text-[#CBD5E1] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
                02 / Architectural Answer
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                The Engineering Solution
              </h2>
              <p className="mt-4 font-body text-base text-[#CBD5E1] leading-relaxed">
                {project.solution}
              </p>
              <div className="mt-6 p-6 bg-[#0D1D3A]/80 border border-[#1E3A5F] rounded-xl font-body text-sm text-[#CBD5E1] leading-relaxed shadow-sm">
                <span className="font-mono text-xs uppercase tracking-wider text-[#38BDF8] block font-bold mb-2">
                  System Architecture Overview
                </span>
                {project.overview}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Complete Technology Stack Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] block mb-1 font-bold">
                Technology Stack
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Integrated Frameworks &amp; Tooling
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-[#0D1D3A]/80 border border-[#1E3A5F] text-[#CBD5E1] font-mono text-xs tracking-wider uppercase font-semibold rounded hover:border-[#38BDF8]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Core Functional Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1E3A5F]/60">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
                03 / Technical Highlights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
                Core Features
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#A8B4C7] max-w-md">
              Delivering reliability through disciplined architecture, clean state management, and modular endpoints.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {project.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="p-7 sm:p-8 bg-[#0D1D3A]/70 border border-[#1E3A5F] hover:border-[#38BDF8]/60 rounded-xl transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/60 font-mono text-xs text-[#A8B4C7]">
                  <span>MODULE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mt-4">
                  {feature.title}
                </h3>
                <p className="mt-3 font-body text-sm text-[#CBD5E1] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Roadmap */}
        {project.process && project.process.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
              04 / Execution Roadmap
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white pb-10 border-b border-[#1E3A5F]/60">
              Development Process
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.process.map((step) => (
                <div
                  key={step.phase}
                  className="p-6 bg-[#0D1D3A]/60 border border-[#1E3A5F] rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-2">
                      {step.phase}
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-xs text-[#CBD5E1] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Deliverables & Project Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="p-8 sm:p-12 bg-[#0D1D3A]/80 border border-[#1E3A5F] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                05 / Deliverables &amp; Verification
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Technical Deliverables
            </h2>

            <ul className="mt-8 flex flex-col gap-4 font-body text-sm sm:text-base text-[#CBD5E1]">
              {project.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Project Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-10 pt-8 border-t border-[#1E3A5F]/60 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0056EE] transition-all duration-300 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <span>VIEW LIVE APPLICATION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#07152F] border border-[#1E3A5F] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <GitBranch className="w-4 h-4 text-[#38BDF8]" />
                    <span>SOURCE REPOSITORY</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 8. Minimal Previous / Next Project Navigation */}
        <section className="bg-[#00081C] border-t border-[#1E3A5F]/60 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1E3A5F]/60">
            {/* Previous Project Card */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group py-8 md:py-0 md:pr-10 flex flex-col justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#A8B4C7] group-hover:text-[#38BDF8] transition-colors flex items-center gap-2 mb-2 font-bold">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>PREVIOUS CASE STUDY</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                  {prevProject.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-[#A8B4C7]">
                Project {prevProject.number} • {prevProject.category}
              </p>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group py-8 md:py-0 md:pl-10 flex flex-col justify-between md:items-end text-left md:text-right transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#A8B4C7] group-hover:text-[#38BDF8] transition-colors flex items-center md:justify-end gap-2 mb-2 font-bold">
                  <span>NEXT CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                  {nextProject.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-[#A8B4C7]">
                Project {nextProject.number} • {nextProject.category}
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
