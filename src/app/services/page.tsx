import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageClient from "./ServicesPageClient";
import { DEVELOPER_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Services & Client Solutions — ${DEVELOPER_INFO.name}`,
  description:
    "Engineering capabilities and architectural client solutions tailored for founders, startups, and enterprises: Full-Stack Web Apps, SaaS Platforms, E-Commerce, and Scalable APIs by MD ARSAD.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services & Solutions — ${DEVELOPER_INFO.technicalIdentity}`,
    description:
      "Explore full-stack engineering services and bespoke digital system scopes built with Next.js, TypeScript, and Django.",
    images: [{ url: "/projects/al-umaima-ecommerce.png" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageClient />
      <Footer />
    </>
  );
}
