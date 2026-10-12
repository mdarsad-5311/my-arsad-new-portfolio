import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkPageClient from "./WorkPageClient";
import { DEVELOPER_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Selected Work & Case Studies — ${DEVELOPER_INFO.name}`,
  description:
    "Curated portfolio and architectural case studies of full-stack web applications, enterprise systems, and editorial web experiences by MD ARSAD.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: `Selected Work — ${DEVELOPER_INFO.technicalIdentity}`,
    description:
      "Explore curated full-stack web applications and software systems built with Next.js, TypeScript, and Django.",
    images: [{ url: "/projects/al-umaima-ecommerce.png" }],
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <WorkPageClient />
      <Footer />
    </>
  );
}
