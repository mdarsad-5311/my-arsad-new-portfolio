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
    id: "aura-ecommerce",
    slug: "aura-ecommerce",
    number: "01",
    title: "AURA Luxe — E-Commerce Platform",
    shortDescription:
      "A headless luxury e-commerce application featuring responsive product cataloging, cart drawer state management, and decoupled REST backend integration.",
    category: "Full-Stack Web App",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Django REST", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    image: "/projects/aura-ecommerce.jpg",
    role: "Full-Stack Architecture & Engineering",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/aura-ecommerce",
    featured: true,
    overview:
      "AURA Luxe is an architectural e-commerce application developed as a demonstration of decoupled full-stack architecture. It brings together Next.js App Router on the client side with a structured Django REST Framework backend and relational database modeling.",
    problem:
      "Traditional monolithic storefront architectures often couple presentation logic with heavy backend database queries, leading to slow navigation, rigid templates, and difficult maintenance as product lines grow.",
    solution:
      "Implemented a decoupled architecture: Next.js frontend with server components for fast initial rendering, client-side optimistic UI state for the shopping bag, and a modular Django REST API for product catalogs and order transactions.",
    highlights: [
      { label: "Architecture", value: "Decoupled Headless" },
      { label: "Frontend", value: "Next.js & TypeScript" },
      { label: "API Layer", value: "Django REST Framework" },
      { label: "Database", value: "PostgreSQL Modeling" },
    ],
    features: [
      {
        title: "Dynamic Product Catalog",
        description:
          "Filterable catalog with instant client-side category and attribute filtering built using React state and modular components.",
      },
      {
        title: "Cart & Checkout Flow",
        description:
          "Interactive shopping bag drawer with quantity controls, local storage persistence, and integrated checkout workflow prototype.",
      },
      {
        title: "Decoupled REST API Endpoints",
        description:
          "Django REST Framework serializers and viewsets serving structured JSON data with pagination and search query parameters.",
      },
      {
        title: "Editorial Design System",
        description:
          "Tailwind CSS styling built around generous whitespace, typography hierarchy, and smooth image hover transitions.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Data Modeling & Architecture",
        description:
          "Defined relational models for product categories, items, inventory quantities, and customer orders in Django ORM.",
      },
      {
        phase: "Phase 02",
        title: "RESTful API Implementation",
        description:
          "Constructed API endpoints with token authentication, query filtering, and structured JSON responses.",
      },
      {
        phase: "Phase 03",
        title: "Frontend Interface & Interactions",
        description:
          "Built responsive UI components, cart drawer modal, and fluid typography layouts in Next.js.",
      },
      {
        phase: "Phase 04",
        title: "Optimization & Verification",
        description:
          "Tested across desktop, tablet, and mobile viewports; verified semantic markup and responsive image delivery.",
      },
    ],
    deliverables: [
      "Decoupled Next.js frontend integrated with Django REST Framework.",
      "Strict TypeScript definitions for product data and API responses.",
      "Accessible, responsive layout adhering to modern editorial typography.",
    ],
  },
  {
    id: "edusphere-erp",
    slug: "edusphere-erp",
    number: "02",
    title: "EduSphere — Enterprise School ERP",
    shortDescription:
      "A comprehensive multi-role academic management system prototype coordinating student records, attendance tracking, and timetable schedules.",
    category: "EdTech & Enterprise System",
    year: "2025",
    technologies: ["React", "Django REST Framework", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    image: "/projects/edusphere-erp.jpg",
    role: "Full-Stack Engineer",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/edusphere-erp",
    featured: true,
    overview:
      "EduSphere is an educational resource planning application designed to streamline student data, daily attendance tracking, academic timetables, and teacher administration under a single cohesive interface.",
    problem:
      "Educational institutions frequently struggle with fragmented data management across separate spreadsheets, physical paper attendance records, and disconnected communication channels.",
    solution:
      "Built a unified role-based prototype dashboard (Administrator, Teacher, Student) using React components on the frontend and Django REST Framework on the backend, complete with relational database persistence.",
    highlights: [
      { label: "Role Management", value: "Multi-Role Structure" },
      { label: "Frontend", value: "React & TypeScript" },
      { label: "Backend API", value: "Django REST Framework" },
      { label: "Data Persistence", value: "PostgreSQL Database" },
    ],
    features: [
      {
        title: "Student Profile & Records Manager",
        description:
          "Structured records interface allowing administrators to manage enrollments, academic grades, and contact records.",
      },
      {
        title: "Daily Attendance Tracker",
        description:
          "Quick-entry attendance recording table with visual summary indicators and date-range filtering.",
      },
      {
        title: "Academic Timetable View",
        description:
          "Grid schedule visualizer displaying subject periods, designated classrooms, and assigned instructor details.",
      },
      {
        title: "Role-Based Navigation",
        description:
          "Dynamic sidebar navigation adapting viewable actions based on the active user role.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Requirement Analysis & Wireframing",
        description:
          "Mapped out core academic workflows including attendance registers, course scheduling, and grading structures.",
      },
      {
        phase: "Phase 02",
        title: "Relational Database Design",
        description:
          "Structured PostgreSQL models establishing relationships between students, classes, teachers, and subjects.",
      },
      {
        phase: "Phase 03",
        title: "Dashboard UI & State Management",
        description:
          "Developed data tables, calendar views, and summary cards with clean responsive layout styling.",
      },
      {
        phase: "Phase 04",
        title: "Testing & Code Refactoring",
        description:
          "Verified form validation, route protections, and consistent component reusability.",
      },
    ],
    deliverables: [
      "Role-based administrative dashboard with responsive navigation.",
      "Clean REST API endpoints for student, class, and attendance models.",
      "Modular TypeScript components for data visualization and tables.",
    ],
  },
  {
    id: "pharmflow-system",
    slug: "pharmflow-system",
    number: "03",
    title: "PharmFlow — Pharmacy Management System",
    shortDescription:
      "A pharmacy inventory and prescription dispensing application with batch tracking, expiry notification indicators, and supplier order management.",
    category: "Healthcare & Inventory",
    year: "2024",
    technologies: ["React", "Django", "PostgreSQL", "REST API", "Tailwind CSS"],
    image: "/projects/pharmflow-system.jpg",
    role: "Full-Stack Engineer",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/pharmflow-system",
    featured: true,
    overview:
      "PharmFlow is a web application prototype engineered to explore clean inventory management workflows for pharmacies, focusing on medication batch tracking, expiration monitoring, and point-of-sale efficiency.",
    problem:
      "Managing perishable pharmaceutical inventory requires rigorous record-keeping to prevent dispensing expired stock, maintain appropriate reorder levels, and track supplier batches.",
    solution:
      "Created an inventory management dashboard that surfaces batch expiration timelines, automated reorder thresholds, and a structured prescription dispensing queue.",
    highlights: [
      { label: "Inventory Logic", value: "Batch & Expiry Tracking" },
      { label: "Frontend", value: "React & Tailwind CSS" },
      { label: "Backend", value: "Django Application" },
      { label: "Data Integrity", value: "Relational PostgreSQL" },
    ],
    features: [
      {
        title: "Batch Expiration Indicators",
        description:
          "Status badges highlighting medication batches nearing expiration dates to assist in FIFO dispensing.",
      },
      {
        title: "Prescription Dispensing Queue",
        description:
          "Clean status column tracking pending, processing, and ready-to-dispense patient prescriptions.",
      },
      {
        title: "Stock Level Visualizations",
        description:
          "Categorized stock level meters providing immediate visibility into critical replenishment needs.",
      },
      {
        title: "Supplier Order Tracking",
        description:
          "Order history interface managing purchase requests, supplier contact details, and receipt confirmations.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Domain Workflow Research",
        description:
          "Studied standard pharmacy inventory procedures, medication categorization, and prescription handling requirements.",
      },
      {
        phase: "Phase 02",
        title: "Django Models & Queries",
        description:
          "Wrote Django models with date constraints and custom querysets for expiring and low-stock items.",
      },
      {
        phase: "Phase 03",
        title: "Clean Healthcare UI",
        description:
          "Constructed high-contrast, accessible cards and data tables tailored for fast readability.",
      },
      {
        phase: "Phase 04",
        title: "Integration & Testing",
        description:
          "Validated CRUD operations, search filters, and status transitions across the dispensing lifecycle.",
      },
    ],
    deliverables: [
      "Operational inventory tracking interface with batch expiration alerts.",
      "Normalized database schema supporting multi-supplier cataloging.",
      "Clear, accessible visual design system optimized for daily usage.",
    ],
  },
  {
    id: "apex-business",
    slug: "apex-business",
    number: "04",
    title: "Apex Venture — Corporate Advisory Engine",
    shortDescription:
      "An editorial, responsive web experience designed for corporate advisory, featuring architectural grid compositions and modern typography.",
    category: "Corporate Web Experience",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Web Design"],
    image: "/projects/apex-business.jpg",
    role: "Front-End Developer & UI Designer",
    projectType: "Portfolio / Demonstration Project",
    githubUrl: "https://github.com/mdarsad-5311/apex-venture",
    featured: true,
    overview:
      "Apex Venture is a concept corporate website exploring minimal architectural aesthetics, generous negative space, and kinetic typography for an advisory brand.",
    problem:
      "Many corporate business websites rely on generic stock-photo templates that fail to convey distinct authority, modern craft, or fast performance.",
    solution:
      "Built a custom Next.js web application utilizing modern CSS grid techniques, progressive image loading, and sophisticated typography hierarchy.",
    highlights: [
      { label: "Design Style", value: "Architectural & Minimal" },
      { label: "Core Stack", value: "Next.js & Tailwind CSS" },
      { label: "Typography", value: "Curated Google Fonts" },
      { label: "Performance", value: "Optimized Asset Delivery" },
    ],
    features: [
      {
        title: "Architectural Grid Composition",
        description:
          "Asymmetric multi-column layouts using CSS Grid to create a distinguished, publication-grade feel.",
      },
      {
        title: "Kinetic Typography",
        description:
          "Fluid responsive typography scaling naturally across mobile, tablet, and wide desktop displays.",
      },
      {
        title: "Practice Area Showcase",
        description:
          "Modular content sections detailing advisory practices, strategic vision, and corporate capabilities.",
      },
      {
        title: "Validated Inquiry Interface",
        description:
          "Clean client intake form with clear input states and responsive layouts.",
      },
    ],
    process: [
      {
        phase: "Phase 01",
        title: "Design Direction & Typography Selection",
        description:
          "Selected serif and sans-serif typeface pairings and established a warm-neutral color palette.",
      },
      {
        phase: "Phase 02",
        title: "Component Layout Engineering",
        description:
          "Developed modular React components for hero banners, editorial feature blocks, and footer navigation.",
      },
      {
        phase: "Phase 03",
        title: "Responsive Polishing",
        description:
          "Refined breakpoints to ensure balanced whitespace on smartphones and high-resolution monitors.",
      },
      {
        phase: "Phase 04",
        title: "SEO & Accessibility Review",
        description:
          "Added semantic HTML elements, open graph meta tags, and keyboard focus states.",
      },
    ],
    deliverables: [
      "Responsive, editorial brand website built with Next.js App Router.",
      "Design token architecture easily customizable for brand variations.",
      "Comprehensive accessibility and keyboard navigation support.",
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
