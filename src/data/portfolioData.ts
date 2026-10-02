import {
  ProjectItem,
  ServiceItem,
  ExperienceItem,
  TechnologyItem,
  RepositoryItem,
  CollaborationPrincipleItem,
  FaqItem,
  WhyWorkItem,
  WorkflowStepItem,
} from "@/types/portfolio";

/**
 * =====================================================================
 * SITE CONFIGURATION (CENTRALIZED DOMAIN & SEO SETTINGS)
 * =====================================================================
 * Easily configurable via NEXT_PUBLIC_SITE_URL environment variable.
 */
export const SITE_CONFIG = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://arsad.dev",
  title: "MD ARSAD — Full-Stack Engineer | Scalable Web Systems & SaaS",
  description:
    "Portfolio of MD ARSAD, Full-Stack Engineer building scalable websites, SaaS platforms, dashboards, and custom digital systems for modern businesses using React, Next.js, TypeScript, Python, and Django.",
};

/**
 * =====================================================================
 * DEVELOPER INFORMATION
 * =====================================================================
 * Authentic details from repository configuration.
 */
export const DEVELOPER_INFO = {
  name: "MD ARSAD",
  title: "Full-Stack Engineer",
  role: "FULL-STACK ENGINEER",
  technicalIdentity: "MD ARSAD — Full-Stack Engineer",
  location: "INDIA",
  availability: "AVAILABLE WORLDWIDE",
  status: "AVAILABLE FOR PROJECTS",
  heroHeadingLine1: "FULL-STACK",
  heroHeadingLine2: "ENGINEER",
  heroTagline: "I build scalable websites, SaaS platforms, dashboards and custom digital systems for modern businesses.",
  summary:
    "Full-stack engineer building modern, scalable and high-performance web applications using React, Next.js, TypeScript and Django. Focused on turning complex business requirements into elegant digital systems.",

  // Neutral technical focus pillars for the hero section
  heroPillars: [
    { label: "FRONTEND", tech: "React / Next.js / TypeScript" },
    { label: "BACKEND", tech: "Python / Django REST Framework" },
    { label: "SYSTEMS", tech: "PostgreSQL / REST APIs / Docker" },
  ],

  email: "mdarsadkgn5311@gmail.com",
  github: "https://github.com/mdarsad-5311",
  githubUsername: "mdarsad-5311",
  projectRepo: "https://github.com/mdarsad-5311/my-arsad-new-portfolio",
  linkedin: "https://linkedin.com/in/mdarsad-5311",
  twitter: "",
  resumeUrl: "/resume.pdf",

  bio: `I am a full-stack engineer focused on building modern, scalable and user-friendly web applications. My approach focuses on architectural clean code, responsive design systems, and robust backend integrations using Next.js, TypeScript, and Django.`,

  coreCompetencies: [
    "Frontend Engineering (React, Next.js, TypeScript)",
    "Backend Architecture (Python, Django REST Framework)",
    "RESTful API Design & Integration",
    "Database Modeling & Integration (PostgreSQL)",
    "Responsive & Accessible UI Systems (Tailwind CSS)",
    "Containerization & Deployment (Docker, Vercel)",
    "System Performance & Clean Architecture",
  ],
};

/**
 * Compact credibility & trust strip displayed immediately after hero
 */
export const TRUST_STRIP_ITEMS = [
  { label: "AVAILABLE WORLDWIDE", highlight: true },
  { label: "REMOTE COLLABORATION", highlight: false },
  { label: "FULL-STACK DEVELOPMENT", highlight: false },
  { label: "MODERN WEB TECHNOLOGY", highlight: false },
];

export const TRUST_TECHNOLOGIES = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Django", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Node.js", category: "Runtime" },
  { name: "Docker", category: "DevOps" },
];

/**
 * =====================================================================
 * SELECTED WORK / CASE STUDIES
 * =====================================================================
 * All projects are marked transparently as portfolio & architectural
 * demonstrations. No fabricated metrics, clients, or revenue claims.
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: "al-umaima-ecommerce",
    slug: "al-umaima-ecommerce",
    number: "01",
    title: "AL-UMAIMA — Premium Tech & Lifestyle E-Commerce",
    shortDescription:
      "A flagship tech and lifestyle e-commerce platform featuring seasonal collection curation, real-time category filtering, sliding cart drawer, and high-performance decoupled architecture.",
    category: "Full-Stack Web App",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Django REST", "PostgreSQL", "Stripe API"],
    image: "/projects/al-umaima-ecommerce.png",
    role: "Full-Stack Architecture & Engineering",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/al-umaima-ecommerce",
    featured: true,
    overview:
      "AL-UMAIMA is a premier tech and modern lifestyle storefront application developed as a flagship demonstration of decoupled full-stack architecture. Engineered with Next.js App Router and Django REST Framework, it showcases high-fidelity product cataloging, category badges (Electronics, Wearables, Fashion, Home Goods), instant client-side cart management, and seamless responsive design.",
    problem:
      "Multi-category modern storefronts often face performance degradation, cluttered navigation, and high checkout drop-offs when presenting diverse catalogs combining consumer electronics, wearable tech, and lifestyle apparel.",
    solution:
      "Engineered an editorial, high-speed decoupled frontend using Next.js with optimistic client-side cart states, rapid category filter pills, dynamic search query handling, and a structured Django REST Framework backend with relational inventory modeling.",
    highlights: [
      { label: "Collection", value: "Spring 2026 Flagship" },
      { label: "Architecture", value: "Decoupled Headless" },
      { label: "Frontend", value: "Next.js & TypeScript" },
      { label: "API Layer", value: "Django REST Framework" },
    ],
    features: [
      {
        title: "Flagship Hero Showcase",
        description:
          "High-impact editorial hero section with seasonal collection spotlighting, call-to-action routing, and vibrant modern tech visual aesthetic.",
      },
      {
        title: "Dynamic Multi-Category Discovery",
        description:
          "Interactive category carousel with live count badges across precision audio, wearable smart tech, home essentials, and fashion.",
      },
      {
        title: "Cart Drawer & Wishlist Flow",
        description:
          "Persistent client-side shopping drawer and wishlist state with quantity adjustments, responsive badge notifications, and checkout prototype.",
      },
      {
        title: "Decoupled REST API Endpoints",
        description:
          "Django REST Framework serializers and viewsets serving structured JSON data with attribute filtering, search query handling, and inventory tracking.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Data Modeling & Architecture",
        description:
          "Designed relational models for tech categories, product variants, inventory quantities, and customer orders in Django ORM.",
      },
      {
        phase: "Phase 02",
        title: "RESTful API Implementation",
        description:
          "Constructed API endpoints with token authentication, multi-criteria filtering, and structured JSON responses.",
      },
      {
        phase: "Phase 03",
        title: "Storefront UI & Micro-Interactions",
        description:
          "Built high-contrast dark aesthetic interface, category pills, sliding cart drawer, and responsive layouts in Next.js.",
      },
      {
        phase: "Phase 04",
        title: "Optimization & Verification",
        description:
          "Verified responsive behavior across mobile, tablet, and widescreen viewports; optimized image delivery and core web vitals.",
      },
    ],
    deliverables: [
      "Decoupled Next.js storefront integrated with Django REST Framework.",
      "Strict TypeScript definitions for multi-category products and API contracts.",
      "Accessible, high-contrast dark editorial interface inspired by modern flagship commerce.",
    ],
  },
  {
    id: "al-umaima-school-erp",
    slug: "al-umaima-school-erp",
    number: "02",
    title: "AL-Umaima — Modern School Management System",
    shortDescription:
      "A comprehensive cross-device academic ERP solution streamlining student administration, staff coordination, academics, and finances all in one place.",
    category: "EdTech & Enterprise System",
    year: "2026",
    technologies: ["React", "TypeScript", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/al-umaima-school-erp.png",
    role: "Full-Stack Architecture & Engineering",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/al-umaima-school-erp",
    featured: true,
    overview:
      "AL-Umaima is an all-in-one modern school management ERP system built to coordinate institution-wide operations. Engineered with a cross-device responsive React frontend and a robust Django REST Framework backend, the platform enables administrators, educators, and staff to seamlessly manage student records, teacher allocations, academic schedules, and institutional finances in one unified dashboard.",
    problem:
      "Educational institutions frequently struggle with fragmented data management across separate spreadsheets, disconnected communication channels, and cumbersome systems that fail to function reliably across mobile and desktop devices.",
    solution:
      "Engineered a unified, multi-role school ERP platform featuring cross-device responsiveness, role-based access control (Admin, Staff, Student), relational academic data modeling, and centralized dashboards for attendance, academic performance, and administrative reporting.",
    highlights: [
      { label: "Scale Architecture", value: "Multi-Role & Multi-Tenant" },
      { label: "Platform Target", value: "Cross-Device Responsive" },
      { label: "Frontend", value: "React & TypeScript" },
      { label: "Backend API", value: "Django REST Framework" },
    ],
    features: [
      {
        title: "Student & Staff Lifecycle Management",
        description:
          "Centralized record system for enrollment records, staff assignments, contact profiles, and academic histories.",
      },
      {
        title: "Cross-Device Operations Portal",
        description:
          "Fully responsive modern interface providing smooth workflows across mobile phones, tablets, and desktop workstations.",
      },
      {
        title: "Academics & Timetable Scheduler",
        description:
          "Dynamic timetable visualizer and grade tracking module coordinating subjects, classroom allocations, and exam schedules.",
      },
      {
        title: "Administrative & Finance Controls",
        description:
          "Comprehensive reporting modules for fee structures, attendance analytics, and role-based permissions.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Institutional Workflow Modeling",
        description:
          "Mapped out school administrative processes including student records, teacher rosters, and academic terms.",
      },
      {
        phase: "Phase 02",
        title: "Relational Schema Architecture",
        description:
          "Structured PostgreSQL database tables linking students, classes, faculty, attendance registers, and finances.",
      },
      {
        phase: "Phase 03",
        title: "Responsive Frontend Engineering",
        description:
          "Crafted modern high-contrast interface components, data grids, role-tailored dashboards, and cross-device views.",
      },
      {
        phase: "Phase 04",
        title: "Security & Role-Based Access",
        description:
          "Implemented token-based authorization rules ensuring strict role isolation between administrators, staff, and students.",
      },
    ],
    deliverables: [
      "Cross-device responsive React application for modern school administration.",
      "Robust Django REST Framework API with secure role-based access control.",
      "Scalable PostgreSQL relational architecture for academic and financial record management.",
    ],
  },
  {
    id: "medicare-hospital-erp",
    slug: "medicare-hospital-erp",
    number: "03",
    title: "MediCare — Hospital ERP & Clinical Operations",
    shortDescription:
      "A comprehensive healthcare management dashboard coordinating OPD/IPD admissions, bed occupancy, doctor appointments, pharmacy, laboratory, and hospital billing.",
    category: "Healthcare & Enterprise System",
    year: "2026",
    technologies: ["React", "TypeScript", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/medicare-hospital-erp.png",
    role: "Full-Stack Architecture & Engineering",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/medicare-hospital-erp",
    featured: true,
    overview:
      "MediCare is an enterprise-grade hospital ERP and clinical management dashboard engineered to orchestrate high-velocity inpatient and outpatient operations. Developed with React and Django REST Framework, the platform centralizes patient registers, real-time bed occupancy tracking (IPD), doctor scheduling, laboratory testing queues, prescription dispensing, and automated billing in a clean, modern interface.",
    problem:
      "Hospitals often operate across fragmented point solutions for clinical records, pharmacy stocks, bed allocations, and accounts, causing coordination bottlenecks, delayed critical patient admissions, and administrative overhead.",
    solution:
      "Architected a centralized hospital ERP suite with real-time operational KPI telemetry (active patients, bed occupancy, critical cases, daily appointments), fast patient check-in workflows, integrated doctor appointment queues, and unified clinical records management.",
    highlights: [
      { label: "Clinical Modules", value: "OPD, IPD & Bed Management" },
      { label: "Real-Time Telemetry", value: "Live Occupancy & KPI Cards" },
      { label: "Frontend", value: "React & TypeScript" },
      { label: "Backend API", value: "Django REST Framework" },
    ],
    features: [
      {
        title: "Hospital Operational KPI Telemetry",
        description:
          "Real-time summary indicators monitoring total patients, today's appointments, available beds, critical cases, and daily clinical revenue.",
      },
      {
        title: "IPD Bed Occupancy & Ward Tracking",
        description:
          "Visual bed management interface tracking ward availability, patient transfers, and real-time occupancy rates.",
      },
      {
        title: "Appointment & OPD Workflow Queue",
        description:
          "Interactive scheduling queue with doctor assignments, department filtering (Cardiology, General, etc.), and live consultation statuses.",
      },
      {
        title: "Integrated Pharmacy & Lab Orders",
        description:
          "Connected clinical dispensing workflows linking patient records directly with laboratory test queues and pharmacy stock.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Clinical Workflow & Department Mapping",
        description:
          "Mapped multi-department hospital operations spanning OPD consultations, IPD ward admissions, lab tests, and billing.",
      },
      {
        phase: "Phase 02",
        title: "Relational Schema & Workflow Modeling",
        description:
          "Modeled relational PostgreSQL schemas connecting patients, doctors, beds, prescriptions, and departmental invoices.",
      },
      {
        phase: "Phase 03",
        title: "High-Information UI & Quick Actions",
        description:
          "Engineered responsive dashboard layout with fast-action modal flows for new patients, prescription entry, and medicine dispensing.",
      },
      {
        phase: "Phase 04",
        title: "State Sync & Role-Based Permissions",
        description:
          "Verified appointment status state machines, bed capacity locks, and role-based permissions for medical administrators and physicians.",
      },
    ],
    deliverables: [
      "Interactive hospital operations dashboard with real-time KPI monitors.",
      "Normalized PostgreSQL relational schema for clinical records, bed allocations, and invoices.",
      "Modular TypeScript components designed for high-density medical data management.",
    ],
  },
  {
    id: "kalycor-corporate",
    slug: "kalycor-corporate",
    number: "04",
    title: "KALYCOR. — Corporate & Diversified Enterprise Portal",
    shortDescription:
      "A premium editorial corporate web experience for a global enterprise operating across staffing, real estate, agriculture, trade, and security.",
    category: "Corporate Web Experience",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Modern CSS", "Responsive Web Design"],
    image: "/projects/kalycor-corporate.png",
    role: "Lead Frontend Architect & UI Engineer",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/kalycor-corporate",
    featured: true,
    overview:
      "KALYCOR. is an editorial, high-impact corporate portal engineered for a modern global enterprise. Built with Next.js App Router and sophisticated typography systems, the experience presents a confident, forward-looking identity spanning diverse commercial verticals: staffing solutions, real estate, commercial agriculture, global trade, and security infrastructure.",
    problem:
      "Conglomerates and diversified enterprises often battle disjointed brand narratives across their subsidiaries, cluttered navigation structures, and outdated web portals that fail to inspire institutional trust.",
    solution:
      "Designed and developed a cohesive, monolithic web experience featuring sleek dark aesthetics, cyan accent glows, fluid editorial typography pairing bold headlines with stylized script accents, and modular interactive service showcases.",
    highlights: [
      { label: "Brand Premise", value: "Global. Human. Future." },
      { label: "Architecture", value: "Next.js App Router & SSR" },
      { label: "Aesthetic", value: "Dark Editorial & Cyan Glow" },
      { label: "Typography", value: "Fluid Display & Editorial Serif" },
    ],
    features: [
      {
        title: "Monumental Hero & Editorial Typography",
        description:
          "Immersive dark hero section pairing bold geometric headlines with cyan script accents and glowing interactive call-to-actions.",
      },
      {
        title: "Diversified Sector Showcase",
        description:
          "Interactive overview highlighting multinational business operations across staffing, real estate, agriculture, trade, and security.",
      },
      {
        title: "Client & Partnership Enquiry Engine",
        description:
          "Friction-free intake workflow enabling institutional partners and corporate clients to submit qualified enquiries.",
      },
      {
        title: "Responsive Cross-Device Layouts",
        description:
          "Precision CSS Grid and fluid typography scaling seamlessly from ultra-wide cinema displays to mobile handhelds.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Brand Identity & Editorial Direction",
        description:
          "Established design tokens, color palette (deep blacks, architectural neutrals, glowing cyan accents), and typography hierarchy.",
      },
      {
        phase: "Phase 02",
        title: "Information Architecture & Sector Modeling",
        description:
          "Structured content models for diversified commercial practices and corporate leadership profiles.",
      },
      {
        phase: "Phase 03",
        title: "Interactive UI Engineering",
        description:
          "Built custom Next.js components, fluid navigation bars, and subtle micro-interaction hover states.",
      },
      {
        phase: "Phase 04",
        title: "Performance & Accessibility Tuning",
        description:
          "Optimized Core Web Vitals, image asset delivery, and WCAG AA contrast compliance across all breakpoints.",
      },
    ],
    deliverables: [
      "Production-grade Next.js corporate portal with fluid typography and dark mode aesthetic.",
      "Modular component architecture for diversified enterprise sector pages.",
      "Optimized Core Web Vitals with zero layout shifts and instant asset rendering.",
    ],
  },
  {
    id: "nexus-dashboard",
    slug: "nexus-dashboard",
    number: "05",
    title: "NexusMetrics — Cloud Admin Dashboard",
    shortDescription:
      "A developer operations interface prototype featuring server latency graphs, API health indicators, and service status monitors.",
    category: "Developer Tools & Admin UI",
    year: "2024",
    technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    image: "/projects/nexus-dashboard.jpg",
    role: "Frontend Developer",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/nexus-dashboard",
    featured: true,
    overview:
      "NexusMetrics is a dark-themed developer operations dashboard prototype designed to display system metrics, microservice statuses, and simulated telemetric feeds under a clean, developer-focused interface.",
    problem:
      "Developers and operations engineers need clear, un-cluttered dashboards to quickly interpret server latency trends and service health without extraneous visual noise.",
    solution:
      "Designed and coded a single-page monitoring dashboard utilizing dark slate tones, crisp line charts, and structured metric indicator cards.",
    highlights: [
      { label: "Theme", value: "Developer Dark Palette" },
      { label: "Components", value: "Modular React & TypeScript" },
      { label: "Data Presentation", value: "Time-Series Visualization" },
      { label: "Layout", value: "Responsive Admin Suite" },
    ],
    features: [
      {
        title: "Service Health Indicators",
        description:
          "Status badges showing online status, instance counts, and memory usage for multiple services.",
      },
      {
        title: "Performance Metric Visualizers",
        description:
          "Simulated time-series line graphs tracking response latency across regional deployment clusters.",
      },
      {
        title: "Deployment Activity Feed",
        description:
          "Chronological log detailing recent code deployments, commit tags, and build execution statuses.",
      },
      {
        title: "Clean Dark Mode Styling",
        description:
          "Carefully calibrated slate and graphite surfaces providing contrast without eye strain.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Dashboard Wireframing",
        description:
          "Drafted information architecture balancing high-level KPI cards with granular log feeds.",
      },
      {
        phase: "Phase 02",
        title: "Component Construction",
        description:
          "Engineered reusable metric cards, status tags, and navigation sidebars with TypeScript types.",
      },
      {
        phase: "Phase 03",
        title: "Chart & Data Mocking",
        description:
          "Implemented SVG time-series visualizers with clear axis labeling and legend indicators.",
      },
      {
        phase: "Phase 04",
        title: "Responsive Adaptations",
        description:
          "Ensured charts and tables remain legible and scroll cleanly on smaller screen resolutions.",
      },
    ],
    deliverables: [
      "Developer dashboard with modular TypeScript components.",
      "Clear time-series chart components and system status indicators.",
      "Responsive layout maintaining usability across mobile and desktop.",
    ],
  },
  {
    id: "docusense-ai",
    slug: "docusense-ai",
    number: "06",
    title: "DocuSense AI — Document Intelligence System",
    shortDescription:
      "An intelligent document analysis web interface concept featuring split-screen PDF preview and structured clause extraction views.",
    category: "Document Intelligence & AI UI",
    year: "2024",
    technologies: ["Next.js", "Python", "Django REST", "Tailwind CSS", "TypeScript"],
    image: "/projects/docusense-ai.jpg",
    role: "Full-Stack Engineer",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/docusense-ai",
    featured: true,
    overview:
      "DocuSense AI is a web application concept exploring intuitive user interfaces for document intelligence, contract clause extraction, and automated summary presentation.",
    problem:
      "Dense multi-page agreements and technical documents are time-consuming to read through when searching for key clauses such as liability caps, termination terms, and indemnities.",
    solution:
      "Constructed a dual-panel interface with an interactive document viewer on the left and structured analysis cards displaying extracted clauses and risk ratings on the right.",
    highlights: [
      { label: "Interface", value: "Dual-Panel Document View" },
      { label: "Frontend", value: "Next.js & TypeScript" },
      { label: "Backend Concept", value: "Python & Django REST" },
      { label: "Styling", value: "Editorial Neutral UI" },
    ],
    features: [
      {
        title: "Synchronized Dual-Panel Layout",
        description:
          "Split-view layout allowing users to review the source document alongside extracted clause summaries.",
      },
      {
        title: "Clause Classification Cards",
        description:
          "Categorized panels highlighting critical provisions such as termination, liability, and payment terms.",
      },
      {
        title: "Risk Assessment Indicator",
        description:
          "Visual gauge providing a high-level severity score based on extracted agreement parameters.",
      },
      {
        title: "Export & Sharing Actions",
        description:
          "Formatted action controls for exporting extracted notes and sharing review summaries.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Document Workflow Analysis",
        description:
          "Mapped out user reading patterns and common clause extraction categories in business agreements.",
      },
      {
        phase: "Phase 02",
        title: "Split-Screen Layout Engineering",
        description:
          "Created flexible dual-panel CSS layout with responsive collapse on narrow mobile viewports.",
      },
      {
        phase: "Phase 03",
        title: "Data Contract & Mock APIs",
        description:
          "Defined structured JSON schemas representing document metadata, clause tags, and severity ratings.",
      },
      {
        phase: "Phase 04",
        title: "Accessibility & Polishing",
        description:
          "Refined text contrast ratios, button focus states, and smooth transition animations.",
      },
    ],
    deliverables: [
      "Dual-panel document intelligence user interface in Next.js.",
      "Structured TypeScript interfaces for document metadata and clauses.",
      "Editorial, clean aesthetic designed for focused document review.",
    ],
  },
];

/**
 * =====================================================================
 * SERVICES (WHAT I DO & CLIENT SOLUTIONS)
 * =====================================================================
 * Redesigned around actual client needs and business outcomes.
 */
export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Web Applications",
    tagline: "High-performance, bespoke web applications engineered for speed, conversion, and longevity.",
    description:
      "End-to-end full-stack development using Next.js, React, and TypeScript. From interactive client portals to dynamic web apps with server-side rendering, sub-second route transitions, and responsive editorial aesthetics.",
    deliverables: [
      "Custom Full-Stack Web Application",
      "SSR / Static Generation with Next.js App Router",
      "Strict TypeScript Contract Safety",
      "Mobile-First Responsive Design System",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    useCases: ["Founder MVPs & Products", "High-Converting Brand Apps", "Interactive Client Portals"],
  },
  {
    number: "02",
    title: "SaaS Development",
    tagline: "Scalable multi-tier SaaS platforms with decoupled APIs and robust security.",
    description:
      "Engineering modern SaaS foundations including role-based access control, subscription tiers, customer workspaces, and automated onboarding flows with decoupled frontend and backend architectures.",
    deliverables: [
      "Multi-Role Permission Systems",
      "Decoupled Frontend / API Architecture",
      "Relational Data Schemas in PostgreSQL",
      "Secure Token-Based Authentication",
    ],
    technologies: ["React", "Next.js", "Python", "Django REST Framework", "PostgreSQL"],
    useCases: ["Multi-Tenant Software", "B2B SaaS Applications", "Subscription & Billing Portals"],
  },
  {
    number: "03",
    title: "E-Commerce",
    tagline: "Decoupled, modern e-commerce storefronts designed for fast load times and friction-free checkout.",
    description:
      "Building high-speed e-commerce experiences with instant client-side catalog filtering, sliding cart drawers, checkout integration, and headless catalog administration.",
    deliverables: [
      "Headless Storefront Architecture",
      "Instant Attribute & Category Filtering",
      "Persistent Cart Drawer & State Management",
      "Secure Payment & Checkout Integrations",
    ],
    technologies: ["Next.js", "TypeScript", "Django REST", "PostgreSQL", "Tailwind CSS"],
    useCases: ["High-End Headless Catalogs", "Luxury Brand Storefronts", "DTC Commerce Experiences"],
  },
  {
    number: "04",
    title: "Custom Business Systems",
    tagline: "Bespoke digital platforms, ERPs, and internal workflows replacing fragmented spreadsheets.",
    description:
      "Transforming messy, manual operations into automated, reliable business platforms. Custom inventory monitoring, batch tracking, timetable management, and automated record-keeping.",
    deliverables: [
      "Domain-Specific Operational Workflows",
      "Automated Record & Inventory Tracking",
      "Role-Specific Administrative Dashboards",
      "Relational Data Integrity with PostgreSQL",
    ],
    technologies: ["React", "Django", "PostgreSQL", "Docker", "REST APIs"],
    useCases: ["Operations & ERP Systems", "Inventory & Batch Trackers", "Internal Workflow Engines"],
  },
  {
    number: "05",
    title: "Dashboards & Admin Panels",
    tagline: "Data-dense, intuitive interfaces for monitoring, telemetry, and operations.",
    description:
      "Designing and implementing clear developer consoles, management portals, and analytics suites with low eye strain dark-mode styling, real-time status indicators, and clean time-series charts.",
    deliverables: [
      "High-Density Operational Dashboards",
      "Real-Time Telemetry & Status Badges",
      "Time-Series Data Visualizations",
      "Granular Audit Logs & Activity Feeds",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    useCases: ["DevOps & Service Monitoring", "Internal Management Suites", "Executive Analytics Consoles"],
  },
  {
    number: "06",
    title: "API & Backend Development",
    tagline: "Resilient server architecture, predictable REST APIs, and database engineering.",
    description:
      "Developing maintainable backend applications in Python and Django REST Framework with strict input validation, token-based authentication, structured JSON responses, and normalized relational modeling.",
    deliverables: [
      "Predictable, Documented RESTful Endpoints",
      "Authentication Protocols & Permission Guards",
      "Optimized PostgreSQL Database Queries",
      "Dockerized Reproducible Server Environments",
    ],
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
    useCases: ["Microservice Architecture", "Third-Party Data Integrations", "Database Modeling & Migrations"],
  },
];

/**
 * =====================================================================
 * WHY WORK WITH ME (CLIENT ADVANTAGES)
 * =====================================================================
 * Concise, truthful advantages rooted in actual full-stack capability.
 */
export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    number: "01",
    title: "Full-Stack Ownership",
    tagline: "Frontend, backend, and database with single-point accountability.",
    description:
      "No handoff friction or communication gaps between disparate teams. I engineer the user interface, write backend services, structure database relations, and configure deployment end-to-end.",
    badge: "END-TO-END OWNERSHIP",
  },
  {
    number: "02",
    title: "Clean Architecture",
    tagline: "Maintainable, scalable and modular implementation.",
    description:
      "Code is written for longevity: strict TypeScript type contracts, modular React components, and cleanly separated Django apps that your team can scale with ease.",
    badge: "PRODUCTION STANDARDS",
  },
  {
    number: "03",
    title: "Direct Communication",
    tagline: "Direct engineering collaboration without agency overhead.",
    description:
      "You speak directly with the engineer coding your platform. Enjoy transparent updates, clear trade-off explanations, and rapid iterative progress with zero bureaucracy.",
    badge: "ZERO MIDDLEMEN",
  },
  {
    number: "04",
    title: "Business-First Development",
    tagline: "Technology built to solve real operational and commercial needs.",
    description:
      "Code is not an academic exercise. Every feature, database index, and UI flow is built with a direct commercial purpose: speed to launch, conversion, and effortless user workflows.",
    badge: "ROI FOCUSED",
  },
  {
    number: "05",
    title: "Long-Term Support",
    tagline: "Clean documentation and ability to continue improving post-launch.",
    description:
      "Every project ships with clean codebase organization, environment documentation, and the architectural foundation needed for straightforward feature expansion and updates.",
    badge: "RELIABLE COLLABORATION",
  },
];

/**
 * =====================================================================
 * HOW I WORK (STRUCTURED 6-PHASE WORKFLOW)
 * =====================================================================
 * Visual, disciplined delivery roadmap from requirement to deployment.
 */
export const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Requirements & Goals",
    description:
      "Understand your business problem, target users, technical constraints, and key success metrics before writing a single line of code.",
    deliverables: ["Scope Definition", "Technical Requirements", "Architecture Blueprint"],
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "Architecture & Scope",
    description:
      "Define relational database schemas, REST API contracts, UI component hierarchy, and milestone timelines for predictable delivery.",
    deliverables: ["Data Schema Plan", "API Endpoints Spec", "Sprint Milestones"],
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Interface & Ergonomics",
    description:
      "Create high-contrast, editorial typography hierarchies, responsive layouts, accessible forms, and fluid micro-interactions.",
    deliverables: ["Component Tokens", "Wireframes & Layouts", "Interactive Prototypes"],
  },
  {
    step: "04",
    title: "BUILD",
    subtitle: "Frontend, Backend & DB",
    description:
      "Implement the frontend in Next.js/React and backend services in Python/Django REST with strict TypeScript contracts and clean code.",
    deliverables: ["Modular React Views", "Django REST API", "PostgreSQL Database"],
  },
  {
    step: "05",
    title: "TEST",
    subtitle: "Quality & Responsiveness",
    description:
      "Rigorously verify layout behavior across mobile (320px) to 4K displays, audit form validation, cross-browser compatibility, and performance.",
    deliverables: ["Cross-Device Verification", "Responsive Audit", "Zero Layout Shift"],
  },
  {
    step: "06",
    title: "DEPLOY",
    subtitle: "Launch & Support",
    description:
      "Configure cloud deployment on Vercel and Docker, verify production environment variables, and deliver documented source code ready for ongoing support.",
    deliverables: ["Production Deployment", "Environment Config", "Codebase Handover"],
  },
];

/**
 * =====================================================================
 * EXPERIENCE & DEVELOPMENT
 * =====================================================================
 * Structured by technical domains and practical development focus.
 */
export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "ACTIVE FOCUS",
    role: "Full-Stack Engineer",
    organization: "Independent Practice & Open Projects",
    type: "Full-Stack Engineering",
    description:
      "Building full-stack web applications, prototype platforms, and decoupled systems pairing Next.js on the frontend with Django REST Framework on the backend.",
    highlights: [
      "Engineering decoupled web architectures with sub-second page transitions and clean API serialization.",
      "Developing accessible, responsive user interfaces with Tailwind CSS and strict TypeScript.",
      "Designing normalized PostgreSQL relational schemas with Django ORM data models.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Tailwind CSS"],
  },
  {
    period: "CORE TRACK",
    role: "Frontend Engineering Specialist",
    organization: "Component Architecture & Web Systems",
    type: "Frontend Development",
    description:
      "Specializing in modern React paradigms, component design tokens, accessible layouts, and responsive editorial typography.",
    highlights: [
      "Building modular, reusable React component systems adhering to semantic HTML standards.",
      "Implementing client-side form validation, modal drawers, and responsive navigation menus.",
      "Optimizing web page performance with server-rendered components and responsive images.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    period: "TECHNICAL FOUNDATION",
    role: "Backend & API Integration",
    organization: "Python & REST API Engineering",
    type: "Backend Systems",
    description:
      "Developing server logic, relational database models, and RESTful endpoints using Python and Django REST Framework.",
    highlights: [
      "Architecting secure token-based authentication flows and role permission checks.",
      "Creating serializers and viewsets for predictable JSON data delivery.",
      "Configuring containerized development environments with Docker.",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "Git"],
  },
];

/**
 * =====================================================================
 * STACK & TOOLS
 * =====================================================================
 * Neutral technical roles without unverified duration claims.
 */
export const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: "React",
    category: "Frontend",
    role: "Core UI Component Library",
    description:
      "Component lifecycle, custom hooks, Server Components, suspense boundaries, and optimistic UI state management.",
    whereUsed: "QuickCart E-Commerce, EduManage Academic Platform, DevPortfolio",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    role: "Production App Framework",
    description:
      "App Router, Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), static generation, and Route Handlers.",
    whereUsed: "QuickCart Platform, ApexStudio Portfolio, CloudOps SaaS",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    role: "Static Type Safety System",
    description:
      "Strict typing, interfaces, generics, utility types, and automated contract safety between API responses and UI components.",
    whereUsed: "Full codebase type safety across all React components and API contracts",
    highlight: true,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    role: "Core Web Language",
    description:
      "Modern ES6+ paradigms, asynchronous promises, DOM APIs, and modular scripting patterns.",
    whereUsed: "Client-side runtime, dynamic state interactions, browser APIs",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    role: "Utility-First Styling System",
    description:
      "Custom design token systems, fluid responsive typography, CSS Grid compositions, and micro-interactions.",
    whereUsed: "Design system tokens, responsive viewports, high-contrast themes",
    highlight: true,
  },
  {
    name: "Python",
    category: "Backend",
    role: "Server Language",
    description:
      "Clean object-oriented programming, data structures, automation scripts, and server-side application logic.",
    whereUsed: "Backend server runtimes, data pipelines, automated migration scripts",
    highlight: true,
  },
  {
    name: "Django",
    category: "Backend",
    role: "Web Application Framework",
    description:
      "Enterprise framework architecture, secure authentication, ORM data relationships, and administrative tooling.",
    whereUsed: "EduManage System, TaskFlow Engine, secure relational persistence",
    highlight: true,
  },
  {
    name: "Django REST Framework",
    category: "Backend",
    role: "API Architecture Toolkit",
    description:
      "Serializers, viewsets, token authentication, pagination, input validation, and structured JSON endpoints.",
    whereUsed: "Decoupled REST APIs for multi-client dashboards and mobile-ready feeds",
    highlight: true,
  },
  {
    name: "REST API",
    category: "Backend",
    role: "API Communication Standard",
    description:
      "Resource-oriented design, HTTP status codes, query filtering, idempotency, and predictable payload formats.",
    whereUsed: "Standardized JSON contracts connecting Next.js frontends to Django backends",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    role: "Relational Database",
    description:
      "Relational schema design, foreign keys, table constraints, indices, and structured relational queries.",
    whereUsed: "Primary production datastore for EduManage, QuickCart, and user entities",
    highlight: true,
  },
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    role: "Version Control & Collaboration",
    description:
      "Branch management, commit hygiene, pull request reviews, and repository maintenance.",
    whereUsed: "Source code versioning, collaboration workflows, continuous integration",
  },
  {
    name: "Docker",
    category: "DevOps & Tools",
    role: "Application Containerization",
    description:
      "Multi-stage Dockerfiles, Docker Compose service configurations, and reproducible environments.",
    whereUsed: "Local containerized environments and multi-service development stacks",
  },
  {
    name: "Vercel",
    category: "DevOps & Tools",
    role: "Cloud Edge Hosting",
    description:
      "Serverless frontend hosting, instant deployment preview branches, and environment configuration.",
    whereUsed: "Production CDN deployment, edge routing, automated branch previews",
  },
];

/**
 * =====================================================================
 * GITHUB / OPEN SOURCE PROJECTS
 * =====================================================================
 * Clean repository references with no invented stars, forks, or dates.
 */
export const REPOSITORIES: RepositoryItem[] = [
  {
    name: "next-django-starter-kit",
    description:
      "Starter template pairing Next.js App Router with Django REST Framework, token authentication, and Docker configuration.",
    language: "TypeScript",
    url: "https://github.com/mdarsad-5311/next-django-starter-kit",
    tags: ["Next.js", "Django", "TypeScript", "Docker"],
  },
  {
    name: "react-editorial-ui",
    description:
      "Minimalist, typography-driven component collection featuring micro-animations, accessible accordions, and fluid layouts.",
    language: "TypeScript",
    url: "https://github.com/mdarsad-5311/react-editorial-ui",
    tags: ["React", "Tailwind CSS", "Accessibility"],
  },
  {
    name: "drf-rest-patterns",
    description:
      "Collection of clean Django REST Framework serializers, custom permission classes, and pagination helpers.",
    language: "Python",
    url: "https://github.com/mdarsad-5311/drf-rest-patterns",
    tags: ["Python", "Django REST", "API"],
  },
  {
    name: "fullstack-dashboard-template",
    description:
      "Responsive developer operations dashboard layout featuring dark-mode styling and metric card components.",
    language: "TypeScript",
    url: "https://github.com/mdarsad-5311/fullstack-dashboard-template",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

/**
 * =====================================================================
 * WHAT I VALUE / COLLABORATION PRINCIPLES
 * =====================================================================
 * Replaces fabricated testimonials with authentic engineering values.
 * NOTE: Replace these with real client testimonials whenever they become available.
 */
export const COLLABORATION_PRINCIPLES: CollaborationPrincipleItem[] = [
  {
    id: "1",
    principle: "Architectural Clarity & Clean Code",
    tagline: "Maintainable systems built for longevity",
    description:
      "Writing clean, well-structured TypeScript and Python code with strict typing and clear separation of concerns. Avoiding unnecessary bloat so codebases remain joyful to maintain and straightforward to scale.",
  },
  {
    id: "2",
    principle: "Transparent Technical Communication",
    tagline: "Predictable, honest collaboration",
    description:
      "Believing that clear communication is as crucial as clean syntax. Providing regular architectural updates, documented API contracts, and realistic assessments of technical trade-offs at every step.",
  },
  {
    id: "3",
    principle: "User-Centric Performance & Ergonomics",
    tagline: "Fast, accessible, and intuitive software",
    description:
      "Ensuring web applications deliver fast load times, accessible semantic HTML, keyboard navigability, and responsive layouts that perform seamlessly across all devices.",
  },
];

/**
 * =====================================================================
 * FREQUENTLY ASKED QUESTIONS
 * =====================================================================
 */
export const FAQS: FaqItem[] = [
  {
    number: "01",
    question: "What types of projects do you build?",
    answer:
      "I specialize in scalable web applications, SaaS platforms, headless e-commerce storefronts, custom ERPs, internal operations systems, and data-rich admin dashboards. Whether building a greenfield digital product or scaling an existing system, I handle both frontend user experience and backend architecture.",
  },
  {
    number: "02",
    question: "What technologies do you use?",
    answer:
      "My core full-stack stack is React, Next.js, and strict TypeScript on the frontend, paired with Python and Django REST Framework on the backend. For data persistence, I rely on PostgreSQL with clean relational modeling. I also work with Tailwind CSS for design systems, Docker for containerization, and Vercel for cloud deployments.",
  },
  {
    number: "03",
    question: "How does the project process work?",
    answer:
      "Projects follow a structured 6-phase approach: Discover, Plan, Design, Build, Test, and Deploy. We begin by clarifying your requirements and technical scope, establish clear milestone deliverables, build iteratively with regular demos, and thoroughly test before deploying to production.",
  },
  {
    number: "04",
    question: "Do you work with international clients?",
    answer:
      "Yes. I collaborate regularly with clients worldwide across North America, Europe, Asia, and other regions. We coordinate asynchronously using Slack, GitHub, and email, alongside scheduled video calls aligned with overlapping time zones to ensure smooth, responsive communication.",
  },
  {
    number: "05",
    question: "Can you work on an existing application?",
    answer:
      "Yes. In addition to greenfield builds, I frequently join existing codebases to modernize legacy frontends (e.g. migrating to Next.js/TypeScript), architect new REST API endpoints in Django, resolve performance bottlenecks, or implement new feature suites without breaking existing functionality.",
  },
  {
    number: "06",
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Following deployment, I provide dedicated post-launch monitoring, warranty bug fixes, documentation handoff, and ongoing retainer arrangements for continuous feature development, performance optimization, and version upgrades.",
  },
  {
    number: "07",
    question: "How can I start a project?",
    answer:
      "You can submit the project inquiry form below or reach out directly via email at mdarsadkgn5311@gmail.com with a brief overview of your product, scope, and timeline. I will review your requirements and respond within 24 hours to schedule an initial discovery discussion.",
  },
];
