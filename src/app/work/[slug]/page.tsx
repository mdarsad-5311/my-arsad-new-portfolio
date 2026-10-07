import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GitBranch, ShieldCheck, Cpu, Database, Server, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, DEVELOPER_INFO } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    ...PROJECTS.map((p) => ({ slug: p.slug })),
    { slug: "aura-ecommerce" },
    { slug: "edusphere-erp" },
    { slug: "pharmflow-system" },
    { slug: "medicare-hospital-erp" },
    { slug: "apex-business" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let resolvedSlug = slug;
  if (slug === "aura-ecommerce") resolvedSlug = "al-umaima-ecommerce";
  if (slug === "edusphere-erp") resolvedSlug = "al-umaima-school-erp";
  if (slug === "pharmflow-system" || slug === "medicare-hospital-erp") resolvedSlug = "nexus-metrics";
  if (slug === "apex-business") resolvedSlug = "kalycor-corporate";
  const project = PROJECTS.find((p) => p.slug === resolvedSlug);

  if (!project) {
    return {
      title: `Project Not Found — ${DEVELOPER_INFO.name}`,
    };
  }

  return {
    title: `${project.title} — Case Study | ${DEVELOPER_INFO.technicalIdentity}`,
    description: project.shortDescription,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study | ${DEVELOPER_INFO.technicalIdentity}`,
      description: project.shortDescription,
      url: `/work/${project.slug}`,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "aura-ecommerce") {
    redirect("/work/al-umaima-ecommerce");
  }
  if (slug === "edusphere-erp") {
    redirect("/work/al-umaima-school-erp");
  }
  if (slug === "pharmflow-system" || slug === "medicare-hospital-erp") {
    redirect("/work/nexus-metrics");
  }
  if (slug === "apex-business") {
    redirect("/work/kalycor-corporate");
  }
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  // Group technologies for Technical Architecture
  const frontendTech = project.technologies.filter((t) =>
    ["React", "Next.js", "TypeScript", "Tailwind CSS", "Modern CSS", "Responsive Web Design"].includes(t)
  );
  const backendTech = project.technologies.filter((t) =>
    ["Python", "Django", "Django REST Framework", "Django REST", "REST API", "Stripe API"].includes(t)
  );
  const databaseTech = project.technologies.filter((t) =>
    ["PostgreSQL", "Relational Database"].includes(t)
  );
  const infraTech = project.technologies.filter((t) =>
    ["Docker", "Vercel", "Git", "GitHub"].includes(t)
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#00081C] text-white pt-28 sm:pt-36 overflow-hidden">
        {/* Architectural Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Top Glow */}
        <div
          className="absolute top-16 right-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none opacity-20 blur-[150px] bg-gradient-to-br from-[#0067FE] to-transparent"
          aria-hidden="true"
        />

        {/* 1. Header: Back Link + CATEGORY / YEAR + PROJECT TITLE + SHORT SUMMARY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 border-b border-[#1E3A5F]/60 relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 group mb-8 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
          >
            <ArrowLeft className="w-4 h-4 text-[#38BDF8] transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* CATEGORY / YEAR */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs uppercase tracking-widest text-[#94A3B8] mb-3">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#38BDF8]">
                  {project.number}
                </span>
                <span className="text-[#38BDF8]/40 select-none">/</span>
                <span className="font-semibold text-white">{project.category}</span>
                <span className="text-[#38BDF8]/40 select-none">•</span>
                <span>{project.year}</span>
              </div>

              {/* PROJECT TITLE */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
                {project.title}
              </h1>

              {/* SHORT SUMMARY */}
              <p className="mt-4 font-body text-base sm:text-lg lg:text-xl text-[#CBD5E1] leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* LIVE PROJECT & SOURCE CODE ACTIONS */}
            <div className="flex flex-wrap items-center gap-3 lg:pb-2">
              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0056EE] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.4)] rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  <span>LIVE PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#07152F] border border-[#1E3A5F] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>SOURCE CODE</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 2. HERO IMAGE WITH CONTROLLED BORDER & SOFT SHADOW */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#0D1D3A] border border-[#1E3A5F]/80 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.6)] group">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} user interface architecture`}
              fill
              priority
              className="object-cover object-top opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 3. THE CHALLENGE & THE SOLUTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-y border-[#1E3A5F]/60 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* The Challenge */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block">
                01 / THE CHALLENGE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                What Problem Existed
              </h2>
              <p className="mt-2 font-body text-base text-[#CBD5E1] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block">
                02 / THE SOLUTION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                What Was Engineered
              </h2>
              <p className="mt-2 font-body text-base text-[#CBD5E1] leading-relaxed">
                {project.solution}
              </p>
              <div className="mt-4 p-5 bg-[#0D1D3A]/60 border border-[#1E3A5F] rounded-xl font-body text-sm text-[#CBD5E1] leading-relaxed">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#38BDF8] block font-bold mb-1.5">
                  System Architecture Synopsis
                </span>
                {project.overview}
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE APPROACH: Execution Roadmap */}
        {project.process && project.process.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
            <div className="flex flex-col gap-2 mb-10 pb-6 border-b border-[#1E3A5F]/60">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                03 / THE APPROACH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                How The System Was Planned &amp; Executed
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* 5. KEY FEATURES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1E3A5F]/60">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
                04 / KEY FEATURES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                Core Functional Capabilities
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#94A3B8] max-w-md">
              Engineered modules delivering responsive state handling, clean API contracts, and dependable performance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {project.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="p-7 sm:p-8 bg-[#0D1D3A]/60 border border-[#1E3A5F] hover:border-[#38BDF8]/60 rounded-xl transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/60 font-mono text-xs text-[#94A3B8]">
                  <span>FEATURE MODULE 0{idx + 1}</span>
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

        {/* 6. TECHNICAL ARCHITECTURE (Frontend, Backend, Database, Infrastructure) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="mb-10 pb-6 border-b border-[#1E3A5F]/60">
            <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
              05 / TECHNICAL ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              End-to-End System Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1E3A5F]/60 text-[#38BDF8]">
                <Cpu className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">Frontend Architecture</span>
              </div>
              <ul className="mt-4 space-y-2 text-[#CBD5E1]">
                {frontendTech.length > 0 ? (
                  frontendTech.map((t) => <li key={t}>• {t}</li>)
                ) : (
                  <li>• Next.js App Router</li>
                )}
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1E3A5F]/60 text-[#38BDF8]">
                <Server className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">Backend &amp; API Layer</span>
              </div>
              <ul className="mt-4 space-y-2 text-[#CBD5E1]">
                {backendTech.length > 0 ? (
                  backendTech.map((t) => <li key={t}>• {t}</li>)
                ) : (
                  <li>• Django REST Framework</li>
                )}
              </ul>
            </div>

            {/* Database */}
            <div className="p-6 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1E3A5F]/60 text-[#38BDF8]">
                <Database className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">Database &amp; Storage</span>
              </div>
              <ul className="mt-4 space-y-2 text-[#CBD5E1]">
                {databaseTech.length > 0 ? (
                  databaseTech.map((t) => <li key={t}>• {t}</li>)
                ) : (
                  <li>• PostgreSQL Relational Engine</li>
                )}
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="p-6 rounded-xl bg-[#0D1D3A]/60 border border-[#1E3A5F]">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1E3A5F]/60 text-[#38BDF8]">
                <Globe className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">Infra &amp; Deployment</span>
              </div>
              <ul className="mt-4 space-y-2 text-[#CBD5E1]">
                {infraTech.length > 0 ? (
                  infraTech.map((t) => <li key={t}>• {t}</li>)
                ) : (
                  <>
                    <li>• Vercel Edge Hosting</li>
                    <li>• Docker Containerization</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. PROJECT OUTCOME & TECHNICAL DELIVERABLES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#1E3A5F]/60 relative z-10">
          <div className="p-8 sm:p-12 bg-[#0D1D3A]/80 border border-[#1E3A5F] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                06 / PROJECT OUTCOME &amp; DELIVERABLES
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Verified Production Deliverables
            </h2>

            <ul className="mt-8 flex flex-col gap-4 font-body text-sm sm:text-base text-[#CBD5E1]">
              {project.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            {((project.liveUrl && project.liveUrl !== project.githubUrl) || project.githubUrl) && (
              <div className="mt-10 pt-8 border-t border-[#1E3A5F]/60 flex flex-wrap items-center gap-4">
                {project.liveUrl && project.liveUrl !== project.githubUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0056EE] transition-all duration-300 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <span>VIEW LIVE PROJECT</span>
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
                    <span>VIEW SOURCE CODE</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 8. PREVIOUS PROJECT / NEXT PROJECT NAVIGATION */}
        <section className="bg-[#00081C] border-t border-[#1E3A5F]/60 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1E3A5F]/60">
            {/* Previous Project Card */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group py-8 md:py-0 md:pr-10 flex flex-col justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors flex items-center gap-2 mb-2 font-bold">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>PREVIOUS PROJECT</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                  {prevProject.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-[#94A3B8]">
                Project {prevProject.number} • {prevProject.category}
              </p>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group py-8 md:py-0 md:pl-10 flex flex-col justify-between md:items-end text-left md:text-right transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors flex items-center md:justify-end gap-2 mb-2 font-bold">
                  <span>NEXT PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                  {nextProject.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-[#94A3B8]">
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
