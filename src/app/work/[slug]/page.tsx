import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GitBranch, ShieldCheck, Cpu, Database, Server, Globe, Smartphone } from "lucide-react";
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
    { slug: "al-umaima-school-erp" },
    { slug: "pharmflow-system" },
    { slug: "medicare-hospital-erp" },
    { slug: "apex-business" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let resolvedSlug = slug;
  if (slug === "aura-ecommerce") resolvedSlug = "al-umaima-ecommerce";
  if (slug === "edusphere-erp" || slug === "al-umaima-school-erp") resolvedSlug = "docusense-ai";
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
  if (slug === "edusphere-erp" || slug === "al-umaima-school-erp") {
    redirect("/work/docusense-ai");
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
  const isMobile = project.platform === "mobile";

  // Group technologies for Technical Architecture
  const frontendTech = project.technologies.filter((t) =>
    ["React", "Next.js", "TypeScript", "Tailwind CSS", "Modern CSS", "Responsive Web Design", "React Native", "Expo", "React Navigation"].includes(t)
  );
  const backendTech = project.technologies.filter((t) =>
    ["Python", "Django", "Django REST Framework", "Django REST", "REST API", "Stripe API", "Context API"].includes(t)
  );
  const databaseTech = project.technologies.filter((t) =>
    ["PostgreSQL", "Relational Database", "AsyncStorage", "SQLite3 / PostgreSQL"].includes(t)
  );
  const infraTech = project.technologies.filter((t) =>
    ["Docker", "Vercel", "Git", "GitHub", "EAS"].includes(t)
  );

  return (
    <>
      <Navbar />

      <main className="project-detail-main relative min-h-screen bg-[#F8FAFC] dark:bg-[#00081C] text-slate-900 dark:text-white pt-24 sm:pt-32 overflow-hidden selection:bg-[#0067FE] selection:text-white">
        {/* Architectural Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0067FE 1.1px, transparent 1.1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Top Glow (Ice-Blue Atmospheric Glow in Light, Cyan-Blue in Dark) */}
        <div
          className="absolute top-16 right-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none opacity-20 dark:opacity-20 blur-[150px] bg-gradient-to-br from-[#0067FE] via-[#00BFFF] to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-[-15%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 dark:opacity-10 blur-[130px] bg-gradient-to-tr from-[#00BFFF] to-transparent"
          aria-hidden="true"
        />

        {/* 1. Header: Back Link + CATEGORY / YEAR + PROJECT TITLE + SHORT SUMMARY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-600 hover:text-[#0067FE] dark:text-[#94A3B8] dark:hover:text-[#38BDF8] transition-colors duration-200 group mb-8 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8]"
          >
            <ArrowLeft className="w-4 h-4 text-[#0067FE] dark:text-[#38BDF8] transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* CATEGORY / YEAR */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-[#94A3B8] mb-3">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#0067FE] dark:text-[#38BDF8]">
                  {project.number}
                </span>
                <span className="text-slate-300 dark:text-[#38BDF8]/40 select-none">/</span>
                <span className="font-semibold text-slate-900 dark:text-white">{project.category}</span>
                <span className="text-slate-300 dark:text-[#38BDF8]/40 select-none">•</span>
                <span>{project.year}</span>
              </div>

              {/* PROJECT TITLE */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                {project.title}
              </h1>

              {/* SHORT SUMMARY */}
              <p className="mt-4 font-body text-base sm:text-lg lg:text-xl text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0056EE] transition-all duration-300 shadow-[0_4px_20px_rgba(0,103,254,0.4)] rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8]"
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-[#07152F] border border-slate-300 dark:border-[#1E3A5F] text-slate-800 dark:text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#0067FE] hover:text-[#0067FE] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] transition-all duration-300 rounded-lg group shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8]"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#0067FE] dark:text-[#38BDF8]" />
                  <span>SOURCE CODE</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 2. HERO IMAGE WITH CONTROLLED BORDER & SOFT SHADOW */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-white dark:bg-[#0D1D3A] border border-slate-200 dark:border-[#1E3A5F]/80 rounded-2xl shadow-[0_16px_50px_rgba(0,102,255,0.08)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.6)] group">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} user interface architecture`}
              fill
              priority
              className="object-cover object-top opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 dark:from-[#00081C]/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 3. THE CHALLENGE & THE SOLUTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-y border-[#D8E3F0] dark:border-[#1E3A5F]/60 bg-white/70 dark:bg-transparent backdrop-blur-xs relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* The Challenge */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block">
                01 / THE CHALLENGE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                What Problem Existed
              </h2>
              <p className="mt-2 font-body text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block">
                02 / THE SOLUTION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                What Was Engineered
              </h2>
              <p className="mt-2 font-body text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                {project.solution}
              </p>
              <div className="mt-4 p-5 bg-[#EDF3FA] dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] rounded-xl font-body text-sm text-slate-700 dark:text-[#CBD5E1] leading-relaxed shadow-2xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0067FE] dark:text-[#38BDF8] block font-bold mb-1.5">
                  System Architecture Synopsis
                </span>
                {project.overview}
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE APPROACH: Execution Roadmap */}
        {project.process && project.process.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 bg-[#F8FAFC] dark:bg-transparent relative z-10">
            <div className="flex flex-col gap-2 mb-10 pb-6 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold">
                03 / THE APPROACH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                How The System Was Planned &amp; Executed
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.process.map((step) => (
                <div
                  key={step.phase}
                  className="p-6 bg-white dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] rounded-xl flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#0067FE] dark:text-[#38BDF8] uppercase tracking-wider block mb-2">
                      {step.phase}
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-xs text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. KEY FEATURES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 bg-white/50 dark:bg-transparent relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block mb-2">
                04 / KEY FEATURES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                Core Functional Capabilities
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-slate-600 dark:text-[#94A3B8] max-w-md">
              Engineered modules delivering responsive state handling, clean API contracts, and dependable performance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {project.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="p-7 sm:p-8 bg-white dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] hover:border-[#0067FE]/50 dark:hover:border-[#38BDF8]/60 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#1E3A5F]/60 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                  <span>FEATURE MODULE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0067FE] dark:bg-[#38BDF8]" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white mt-4">
                  {feature.title}
                </h3>
                <p className="mt-3 font-body text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4.5. INTERACTIVE MOBILE SCREENS GALLERY (For Mobile & Cross-Platform Projects) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 bg-[#F8FAFC]/50 dark:bg-[#00081C]/40 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>MOBILE APP SCREENS &amp; FLOWS</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                  Native Screen Architecture &amp; UI
                </h2>
              </div>
              <p className="font-body text-sm sm:text-base text-slate-600 dark:text-[#94A3B8] max-w-md">
                Cross-platform mobile interfaces built with React Native and Expo, featuring rapid state synchronization and touch-optimized gestures.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
              {project.screenshots.map((screen, idx) => (
                <div
                  key={screen.title}
                  className="flex flex-col rounded-3xl bg-white dark:bg-[#0D1D3A]/80 border border-slate-200 dark:border-[#1E3A5F] overflow-hidden shadow-[0_12px_40px_rgba(0,103,254,0.06)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.5)] group hover:border-[#0067FE]/60 dark:hover:border-[#38BDF8]/60 transition-all duration-300"
                >
                  {/* Smartphone device chrome frame */}
                  <div className="p-5 sm:p-6 bg-slate-100/70 dark:bg-[#07152F] flex justify-center border-b border-slate-200 dark:border-[#1E3A5F]/60">
                    <div className="relative w-full max-w-[280px] aspect-[460/1024] rounded-[32px] overflow-hidden border-[7px] border-slate-800 dark:border-slate-700 shadow-2xl bg-slate-900 ring-1 ring-white/10">
                      {/* Dynamic Island pill */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 pointer-events-none flex items-center justify-end pr-2.5">
                        <span className="w-2 h-2 rounded-full bg-slate-800" />
                      </div>
                      <Image
                        src={screen.image}
                        alt={screen.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                  </div>

                  {/* Card Content & Caption */}
                  <div className="p-6 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#0067FE] dark:text-[#38BDF8] font-bold">
                      <span>SCREEN 0{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-[#07152F] border border-blue-200 dark:border-[#1E3A5F] text-[10px] uppercase">
                        React Native + Expo
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-slate-900 dark:text-white mt-1">
                      {screen.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. TECHNICAL ARCHITECTURE (Frontend/Mobile, Backend, Database, Infrastructure) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 bg-[#EDF3FA] dark:bg-transparent relative z-10">
          <div className="mb-10 pb-6 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold block mb-2">
              05 / TECHNICAL ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              End-to-End System Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {/* Frontend / Mobile */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-[#1E3A5F]/60 text-[#0067FE] dark:text-[#38BDF8]">
                {isMobile ? <Smartphone className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                <span className="font-bold uppercase tracking-wider">
                  {isMobile ? "Mobile Architecture" : "Frontend Architecture"}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-[#CBD5E1]">
                {frontendTech.length > 0 ? (
                  frontendTech.map((t) => <li key={t}>• {t}</li>)
                ) : isMobile ? (
                  <>
                    <li>• React Native Core</li>
                    <li>• Expo SDK Workflow</li>
                    <li>• React Navigation Tabs</li>
                  </>
                ) : (
                  <li>• Next.js App Router</li>
                )}
              </ul>
            </div>

            {/* Backend / API */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-[#1E3A5F]/60 text-[#0067FE] dark:text-[#38BDF8]">
                <Server className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">
                  {isMobile ? "API & State Layer" : "Backend & API Layer"}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-[#CBD5E1]">
                {backendTech.length > 0 ? (
                  backendTech.map((t) => <li key={t}>• {t}</li>)
                ) : isMobile ? (
                  <>
                    <li>• RESTful Hyperlocal APIs</li>
                    <li>• Context API State Engine</li>
                  </>
                ) : (
                  <li>• Django REST Framework</li>
                )}
              </ul>
            </div>

            {/* Database & Storage */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-[#1E3A5F]/60 text-[#0067FE] dark:text-[#38BDF8]">
                <Database className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">Database &amp; Storage</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-[#CBD5E1]">
                {databaseTech.length > 0 ? (
                  databaseTech.map((t) => <li key={t}>• {t}</li>)
                ) : isMobile ? (
                  <>
                    <li>• AsyncStorage Persistence</li>
                    <li>• Client-Side Cart Caching</li>
                  </>
                ) : (
                  <li>• PostgreSQL Relational Engine</li>
                )}
              </ul>
            </div>

            {/* Infrastructure & Deployment */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0D1D3A]/60 border border-slate-200 dark:border-[#1E3A5F] shadow-2xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-[#1E3A5F]/60 text-[#0067FE] dark:text-[#38BDF8]">
                <Globe className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">Infra &amp; Deployment</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-[#CBD5E1]">
                {infraTech.length > 0 ? (
                  infraTech.map((t) => <li key={t}>• {t}</li>)
                ) : isMobile ? (
                  <>
                    <li>• Expo Application Services (EAS)</li>
                    <li>• Cross-Platform iOS &amp; Android</li>
                  </>
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#D8E3F0] dark:border-[#1E3A5F]/60 bg-[#F8FAFC] dark:bg-transparent relative z-10">
          <div className="p-8 sm:p-12 bg-white dark:bg-[#0D1D3A]/80 border border-slate-200 dark:border-[#1E3A5F] rounded-2xl shadow-[0_12px_40px_rgba(0,102,254,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#0067FE] dark:text-[#38BDF8]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#0067FE] dark:text-[#38BDF8] font-bold">
                06 / PROJECT OUTCOME &amp; DELIVERABLES
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
              Verified Production Deliverables
            </h2>

            <ul className="mt-8 flex flex-col gap-4 font-body text-sm sm:text-base text-slate-700 dark:text-[#CBD5E1]">
              {project.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0067FE] dark:text-[#38BDF8] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            {((project.liveUrl && project.liveUrl !== project.githubUrl) || project.githubUrl) && (
              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-[#1E3A5F]/60 flex flex-wrap items-center gap-4">
                {project.liveUrl && project.liveUrl !== project.githubUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0067FE] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0056EE] transition-all duration-300 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8]"
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
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-[#07152F] border border-slate-300 dark:border-[#1E3A5F] text-slate-800 dark:text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#0067FE] hover:text-[#0067FE] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] transition-all duration-300 rounded-lg shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8]"
                  >
                    <GitBranch className="w-4 h-4 text-[#0067FE] dark:text-[#38BDF8]" />
                    <span>VIEW SOURCE CODE</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 8. PREVIOUS PROJECT / NEXT PROJECT NAVIGATION */}
        <section className="bg-white/80 dark:bg-[#00081C] border-t border-slate-200 dark:border-[#1E3A5F]/60 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-[#1E3A5F]/60">
            {/* Previous Project Card */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group py-8 md:py-0 md:pr-10 flex flex-col justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8] rounded-lg"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-[#94A3B8] group-hover:text-[#0067FE] dark:group-hover:text-[#38BDF8] transition-colors flex items-center gap-2 mb-2 font-bold">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>PREVIOUS PROJECT</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-[#0067FE] dark:group-hover:text-[#38BDF8] transition-colors">
                  {prevProject.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                Project {prevProject.number} • {prevProject.category}
              </p>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group py-8 md:py-0 md:pl-10 flex flex-col justify-between md:items-end text-left md:text-right transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067FE] dark:focus-visible:ring-[#38BDF8] rounded-lg"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-[#94A3B8] group-hover:text-[#0067FE] dark:group-hover:text-[#38BDF8] transition-colors flex items-center md:justify-end gap-2 mb-2 font-bold">
                  <span>NEXT PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-[#0067FE] dark:group-hover:text-[#38BDF8] transition-colors">
                  {nextProject.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
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
