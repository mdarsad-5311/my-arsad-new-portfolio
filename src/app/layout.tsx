import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/data/portfolioData";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "MD ARSAD",
    "Full-Stack Engineer",
    "Freelance Full-Stack Developer",
    "SaaS Developer",
    "Web Application Engineer",
    "React Engineer",
    "Next.js Developer",
    "TypeScript",
    "Python Django Developer",
    "Software Engineer India",
    "Software Engineer Nashik",
    "Web Developer Nashik Maharashtra",
    "Decoupled Web Architecture",
  ],
  authors: [{ name: "MD ARSAD" }],
  creator: "MD ARSAD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    title: "MD ARSAD — Full-Stack Engineer",
    description:
      "Crafting modern, scalable and high-performance digital systems with React, Next.js, TypeScript, and Django.",
    siteName: "MD ARSAD — Full-Stack Engineer",
    images: [
      {
        url: "/projects/al-umaima-ecommerce.png",
        width: 1200,
        height: 630,
        alt: "MD ARSAD — Full-Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD ARSAD — Full-Stack Engineer",
    description:
      "Full-stack engineer building modern, scalable web applications with Next.js, TypeScript, and Django.",
    creator: "@mdarsad_dev",
    images: ["/projects/al-umaima-ecommerce.png"],
  },
  icons: {
    icon: [
      { url: "/logo1.png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/logo1.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#00081C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#00081C] text-white selection:bg-[#2563EB] selection:text-white relative">
        {/* Full-Site Neon Cyan & Electric Blue Backlight Atmosphere (From Navbar to Footer) */}
        <div className="backlight-ambient-container" aria-hidden="true">
          <div className="backlight-ambient-top" />
          <div className="backlight-ambient-mid-1" />
          <div className="backlight-ambient-mid-2" />
          <div className="backlight-ambient-bottom" />
        </div>

        {/* Page Content Layers */}
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
