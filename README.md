# MD ARSAD — Full-Stack Engineer Portfolio

A modern, high-performance editorial portfolio and architectural case study platform engineered with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It features an interactive contact terminal with dual-provider transactional email delivery (Nodemailer SMTP & Resend API), anti-spam protection, rate limiting, and comprehensive project case studies.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Pages & Routing Architecture](#pages--routing-architecture)
- [Backend & Mail System](#backend--mail-system)
- [Security & Protection](#security--protection)
- [SEO & Metadata](#seo--metadata)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Author & License](#author--license)

---

## Overview

This repository powers the personal engineering portfolio of **MD ARSAD**, Full-Stack Engineer based in Nashik, Maharashtra, India. The application showcases full-stack web applications, enterprise ERP platforms, and headless e-commerce architectures, demonstrating end-to-end delivery across React, Next.js, TypeScript, Python, and Django REST Framework.

---

## Features

- **Editorial Dark Design System**: Immersive dark theme (`#00081C`) with ambient cyan backlight glow and Google typography (`Bricolage Grotesque`, `DM Sans`, and `JetBrains Mono`).
- **Architectural Case Studies**: Detailed breakdowns covering problem statements, decoupled architectures, technical highlights, and engineering processes.
- **Dynamic Work Archive**: `/work` gallery with instant client-side category filtering (Full-Stack, EdTech, Healthcare, Corporate) and real-time search query matching.
- **Interactive Contact Terminal**: Guided enquiry workflow with budget pills, project category selectors, validation feedback, and direct WhatsApp links.
- **Dual Email Notification Engine**: Primary email dispatch through Resend API or SMTP (Gmail App Password, Brevo, SendGrid), with automated Ethereal Email test inbox previews in development.
- **Full SEO & Discoverability**: Search engine crawl rules via `robots.ts`, dynamic XML sitemap via `sitemap.ts`, OpenGraph previews, and canonical links.
- **Legacy URL Redirection**: Built-in 308 permanent redirects mapping legacy routes (`/work/aura-ecommerce` &rarr; `/work/al-umaima-ecommerce`, etc.).

---

## Tech Stack

### Core Framework & Runtime
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.6` | App Router, Server Components, Route Handlers |
| **React** | `19.2.8` | Component lifecycle and UI logic |
| **React DOM** | `19.2.8` | Virtual DOM rendering |
| **TypeScript** | `^5.0.0` | Strict static typing and interface contracts |
| **Node.js** | `>= 20.x` | Runtime environment |

### UI & Styling
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^4.0.0` | Utility-first styling engine |
| **@tailwindcss/postcss** | `^4.0.0` | PostCSS integration |
| **Lucide React** | `^1.48.0` | Modern iconography |
| **next/font** | Built-in | Zero-layout-shift Google Font loading |

### Backend & Communications
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Nodemailer** | `^10.0.13` | SMTP transport and email formatting |
| **@types/nodemailer** | `^8.0.2` | Nodemailer TypeScript definitions |

### Code Quality
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **ESLint** | `^9.0.0` | Linting and code standard enforcement |
| **eslint-config-next** | `16.3.6` | Official Next.js lint configurations |

---

## Project Structure

```text
my-arsad/
├── public/                       # Static public assets (images, icons, resume.pdf)
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts  # Node.js POST contact endpoint & GET healthcheck
│   │   ├── work/
│   │   │   ├── [slug]/page.tsx   # Dynamic case study page (SSG via generateStaticParams)
│   │   │   └── page.tsx          # Case study gallery with live search & filters
│   │   ├── globals.css           # Global CSS variables, fonts & ambient backlights
│   │   ├── layout.tsx            # Root layout with fonts, metadata & atmosphere
│   │   ├── page.tsx              # Homepage assembling all editorial sections
│   │   ├── robots.ts             # Dynamic robots.txt generation
│   │   └── sitemap.ts            # Dynamic sitemap.xml generation
│   ├── components/               # Modular UI sections (Hero, Work, Contact, Navbar, etc.)
│   ├── data/
│   │   └── portfolioData.ts      # Central data store (projects, bio, stack, FAQs)
│   ├── lib/
│   │   └── mailer.ts             # Multi-provider email engine (Resend, SMTP, Ethereal)
│   └── types/
│       └── portfolio.ts          # TypeScript interfaces for portfolio entities
├── .env.example                  # Environment configuration template
├── eslint.config.mjs             # ESLint flat config
├── next.config.ts                # Next.js configuration & permanent 308 redirects
├── package.json                  # Project manifest, dependencies & scripts
└── tsconfig.json                 # TypeScript compiler options
```

---

## Installation & Setup

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdarsad-5311/my-arsad-new-portfolio.git
   cd my-arsad-new-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   *(Populate `.env.local` using the instructions below)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000).

---

## Environment Configuration

Configure `.env.local` in the project root:

```env
# =====================================================================
# SITE CONFIGURATION
# =====================================================================
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_RECEIVER_EMAIL=mdarsadkgn5311@gmail.com

# =====================================================================
# EMAIL DISPATCH CONFIGURATION (Choose Option A or Option B)
# =====================================================================

# --- OPTION A: GMAIL / CUSTOM SMTP ---
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
SMTP_FROM="MD Arsad Portfolio" <your_email@gmail.com>

# --- OPTION B: RESEND API ---
# RESEND_API_KEY=re_123456789abcdef
# EMAIL_FROM=MD Arsad Portfolio <onboarding@resend.dev>
```

> **Development Mode Behavior**: If neither `RESEND_API_KEY` nor `SMTP_USER`/`SMTP_PASS` are set, `mailer.ts` automatically creates an ephemeral **Ethereal Email** test inbox and prints the preview link in your terminal.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the Next.js local development server on `http://localhost:3000`. |
| `npm run build` | Compiles the production build with type checking and static generation. |
| `npm run start` | Starts the production server (run `npm run build` first). |
| `npm run lint` | Runs ESLint across TypeScript, React, and config files. |

---

## Pages & Routing Architecture

| Route | Render Type | Description |
| :--- | :--- | :--- |
| `/` | Static (SSG) | Homepage assembling all editorial sections: Hero, Trust Strip, Selected Work, Services, How I Work, About, Experience, Stack, Repositories, FAQs, and Contact Form. |
| `/work` | Static (SSG) | Full case study gallery with client-side category filtering (All, Full-Stack, EdTech, Healthcare, Corporate) and real-time search. |
| `/work/[slug]` | Dynamic (SSG via `generateStaticParams`) | Deep-dive case study page detailing problem statements, architectures, highlights, key features, workflows, and deliverables. |
| `/api/contact` | Route Handler (Node.js) | `POST` endpoint for enquiry submissions; `GET` endpoint for health check. |
| `/sitemap.xml` | Generated Route | Dynamic XML sitemap containing root, `/work`, and all case study URLs. |
| `/robots.txt` | Generated Route | Web crawler directives allowing all agents and linking to `/sitemap.xml`. |

### Permanent Redirects (`next.config.ts`)
Legacy URLs are automatically forwarded with 308 permanent status codes:
- `/work/aura-ecommerce` &rarr; `/work/al-umaima-ecommerce`
- `/work/edusphere-erp` &rarr; `/work/al-umaima-school-erp`
- `/work/pharmflow-system` &rarr; `/work/nexus-metrics`
- `/work/medicare-hospital-erp` &rarr; `/work/nexus-metrics`
- `/work/apex-business` &rarr; `/work/kalycor-corporate`

---

## Backend & Mail System

The enquiry workflow is managed through `POST /api/contact` and `src/lib/mailer.ts`:

### Request Payload (`POST /api/contact`)
```json
{
  "name": "Alex Mercer",
  "email": "alex@example.com",
  "phone": "+91 9876543210",
  "company": "Mercer Labs",
  "projectType": "SaaS Platform",
  "budget": "₹50,000 – ₹1,00,000",
  "message": "Project brief and requirements...",
  "_hp": "",
  "_ts": 1740000000000
}
```

### Provider Resolution Flow
1. **Resend API**: If `RESEND_API_KEY` is present, dispatches directly via HTTP POST to `https://api.resend.com/emails`.
2. **SMTP Transport**: If `SMTP_USER` and `SMTP_PASS` are provided, dispatches using a pooled Nodemailer transporter.
3. **Ethereal Email (Dev Fallback)**: In non-production environments with unconfigured credentials, creates a test inbox and logs the inspection URL.

---

## Security & Protection

The `/api/contact` endpoint includes several layers of defense:

- **In-Memory Rate Limiting**: Restricts requests to **5 submissions per 10-minute window per IP address** (returns `429 Too Many Requests`).
- **Honeypot Trap (`_hp`)**: Hidden input field intended for automated bots; if populated, silently returns success without triggering emails.
- **Submission Velocity Detection (`_ts`)**: Detects forms submitted in under 1.2 seconds to block automated headless scripts.
- **Input Sanitization**: All user inputs are sanitized with HTML entity escaping (`&`, `<`, `>`, `"`, `'`) before being inserted into HTML emails.
- **Payload Validation**: Strict server-side checks for field lengths (names 2–100 chars, valid email format, message 15–5000 chars).

---

## SEO & Metadata

- **Dynamic Metadata & OpenGraph**: Configured in `layout.tsx` and dynamically generated for individual projects via `generateMetadata()` in `/work/[slug]/page.tsx`.
- **Sitemap (`src/app/sitemap.ts`)**: Auto-generates URLs for `/`, `/work`, and all project slugs with `changeFrequency` and `priority` tags.
- **Robots (`src/app/robots.ts`)**: Directs web spiders to allow all root paths and points directly to the sitemap endpoint.
- **Font Optimization**: Fonts loaded with `display: swap` to prevent Cumulative Layout Shift (CLS).

---

## Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Add the environment variables from your `.env.local` file (`NEXT_PUBLIC_SITE_URL`, `CONTACT_RECEIVER_EMAIL`, and your SMTP or Resend credentials).
4. Click **Deploy**. Vercel will build and serve the application via its Edge/Serverless infrastructure.

### Self-Hosted / Node.js Server
1. Build the production application:
   ```bash
   npm run build
   ```
2. Start the production HTTP server:
   ```bash
   npm run start
   ```

---

## Troubleshooting

- **Contact Form returns `500 Internal Server Error`**:
  - Verify your `SMTP_USER` and `SMTP_PASS` (or `RESEND_API_KEY`) in `.env.local`.
  - For Gmail SMTP, generate a **16-character App Password** under Google Account &rarr; Security &rarr; 2-Step Verification.
- **Contact Form returns `429 Too Many Requests`**:
  - You exceeded 5 submissions within 10 minutes from the same IP address. Wait for the rate-limit window to expire.
- **Port Conflict on 3000**:
  - Start Next.js on an alternate port with `npx next dev -p 3001`.

---

## Author & License

- **Engineer**: MD ARSAD
- **Role**: Full-Stack Engineer (React, Next.js, TypeScript, Django)
- **Location**: Nashik, Maharashtra, India (IST / UTC+5:30)
- **Email**: [mdarsadkgn5311@gmail.com](mailto:mdarsadkgn5311@gmail.com)
- **WhatsApp**: [+91 9527635311](https://wa.me/919527635311)
- **GitHub**: [@mdarsad-5311](https://github.com/mdarsad-5311)
- **LinkedIn**: [mdarsad-5311](https://linkedin.com/in/mdarsad-5311)
- **Repository**: [mdarsad-5311/my-arsad-new-portfolio](https://github.com/mdarsad-5311/my-arsad-new-portfolio)

*Private repository. All rights reserved &copy; 2026 MD ARSAD.*
