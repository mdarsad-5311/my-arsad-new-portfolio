import {
  ProjectItem,
  ServiceItem,
  ExperienceItem,
  TechnologyItem,
  RepositoryItem,
  CollaborationPrincipleItem,
  FaqItem,
} from "@/types/portfolio";

/**
 * =====================================================================
 * DEVELOPER INFORMATION
 * =====================================================================
 * All personal information is centralized here.
 * Fields marked with TODO can be updated with your verified details.
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
  heroTagline: "I BUILD SCALABLE DIGITAL SYSTEMS.",
  summary:
    "Full-stack engineer building modern, scalable and high-performance web applications using React, Next.js, TypeScript and Django.",

  // Neutral technical focus pillars for the hero section (no invented numbers)
  heroPillars: [
    { label: "FRONTEND", tech: "React / Next.js / TypeScript" },
    { label: "BACKEND", tech: "Python / Django REST Framework" },
    { label: "SYSTEMS", tech: "PostgreSQL / REST APIs / Docker" },
  ],

  // TODO: Replace with your real contact information
  email: "your.email@example.com", // Example placeholder email
  github: "https://github.com/your-username", // TODO: Replace with your GitHub profile URL
  linkedin: "https://linkedin.com/in/your-profile", // TODO: Replace with your LinkedIn profile URL
  twitter: "", // Optional: Add your Twitter / X link if available
  resumeUrl: "/resume.pdf", // Place your real resume.pdf in the public/ folder

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
    liveUrl: "https://github.com/your-username/aura-ecommerce", // TODO: Update with real repository or demo URL
    githubUrl: "https://github.com/your-username/aura-ecommerce", // TODO: Update with real repository URL
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
    liveUrl: "https://github.com/your-username/edusphere-erp", // TODO: Update with real URL
    githubUrl: "https://github.com/your-username/edusphere-erp",
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
    liveUrl: "https://github.com/your-username/pharmflow-system", // TODO: Update with real URL
    githubUrl: "https://github.com/your-username/pharmflow-system",
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
    liveUrl: "https://github.com/your-username/apex-venture", // TODO: Update with real URL
    githubUrl: "https://github.com/your-username/apex-venture",
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
    liveUrl: "https://github.com/your-username/nexus-dashboard", // TODO: Update with real URL
    githubUrl: "https://github.com/your-username/nexus-dashboard",
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
    liveUrl: "https://github.com/your-username/docusense-ai", // TODO: Update with real URL
    githubUrl: "https://github.com/your-username/docusense-ai",
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
 * SERVICES (WHAT I DO)
 * =====================================================================
 */
export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Full-Stack Engineering",
    tagline: "End-to-end web applications engineered with architectural discipline.",
    description:
      "Conception, database modeling, secure backend APIs, and responsive, interactive frontend experiences built with React, Next.js, and Django.",
    deliverables: [
      "End-to-End System Architecture",
      "Production-Ready Next.js & React Frontend",
      "Django & Python REST API Endpoints",
      "Authentication & Role-Based Permissions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Django", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Frontend Development",
    tagline: "Clean, accessible, and responsive user interfaces with modern typography.",
    description:
      "Crafting pixel-precise, accessible, and performant web interfaces. Specializing in component design systems, smooth kinetic animations, and responsive layouts.",
    deliverables: [
      "Component-Driven Design Systems",
      "State Management & Form Handling",
      "Pixel-Perfect Responsive Layouts",
      "Semantic HTML & Accessibility Standards",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Backend Development",
    tagline: "Resilient server architecture, business logic, and database operations.",
    description:
      "Designing backend services in Python and Django. Handling core application logic, data validation, database migrations, and third-party integrations.",
    deliverables: [
      "Django & Python Application Logic",
      "Data Validation & Sanitization",
      "Third-Party Service Integrations",
      "Modular Code Structure",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    number: "04",
    title: "REST API Development",
    tagline: "Clean, documented, and secure API endpoints built for developer clarity.",
    description:
      "Architecting predictable, versioned RESTful APIs with Django REST Framework. Implementing authentication protocols, data validation, and clean serializers.",
    deliverables: [
      "RESTful Endpoint Architecture",
      "Token-Based Authentication Protocols",
      "Django REST Framework Serializers",
      "Structured JSON Error Responses",
    ],
    technologies: ["Django REST Framework", "JSON API", "Postman", "Python"],
  },
  {
    number: "05",
    title: "UI Implementation",
    tagline: "Translating design vision into clean, accessible, semantic code.",
    description:
      "Transforming UI concepts into semantic HTML5, modular Tailwind CSS, and reusable React components without visual artifacts or layout shifts.",
    deliverables: [
      "Design to Clean Code Translation",
      "Accessible Component Architecture",
      "Fluid Responsive Typography",
      "Cross-Browser Testing",
    ],
    technologies: ["Tailwind CSS", "Semantic HTML5", "Modern CSS", "Accessibility"],
  },
  {
    number: "06",
    title: "Database Integration",
    tagline: "Relational schema design, normalization, and data integrity.",
    description:
      "Designing normalized relational database structures in PostgreSQL. Writing clean models, relationships, and migration scripts in Django ORM.",
    deliverables: [
      "Relational Schema Modeling",
      "Foreign Key Relationships & Constraints",
      "Django ORM Query Design",
      "Safe Migration Management",
    ],
    technologies: ["PostgreSQL", "Django ORM", "SQL"],
  },
  {
    number: "07",
    title: "Deployment & Optimization",
    tagline: "Containerization, environment configuration, and modern hosting setups.",
    description:
      "Configuring projects for deployment with Docker and hosting frontend applications on Vercel with automated build checks and environment management.",
    deliverables: [
      "Docker Setup & Configuration",
      "Vercel Frontend Deployment",
      "Environment Variable Management",
      "Build Verification & Asset Optimization",
    ],
    technologies: ["Docker", "Vercel", "Git", "GitHub"],
  },
];

/**
 * =====================================================================
 * EXPERIENCE & DEVELOPMENT
 * =====================================================================
 * Structured by technical domains and practical development focus.
 * TODO: Replace these placeholders with your verified employment history
 * whenever you wish to showcase specific companies.
 */
export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "ACTIVE FOCUS",
    role: "Full-Stack Engineer",
    organization: "Independent Practice & Open Projects", // TODO: Replace with your actual company/organization
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
    organization: "Component Architecture & Web Systems", // TODO: Replace with your actual organization
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
    organization: "Python & REST API Engineering", // TODO: Replace with your actual organization
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
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    role: "Production App Framework",
    description:
      "App Router, Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), static generation, and Route Handlers.",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    role: "Static Type Safety System",
    description:
      "Strict typing, interfaces, generics, utility types, and automated contract safety between API responses and UI components.",
    highlight: true,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    role: "Core Web Language",
    description:
      "Modern ES6+ paradigms, asynchronous promises, DOM APIs, and modular scripting patterns.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    role: "Utility-First Styling System",
    description:
      "Custom design token systems, fluid responsive typography, CSS Grid compositions, and micro-interactions.",
    highlight: true,
  },
  {
    name: "Python",
    category: "Backend",
    role: "Server Language",
    description:
      "Clean object-oriented programming, data structures, automation scripts, and server-side application logic.",
    highlight: true,
  },
  {
    name: "Django",
    category: "Backend",
    role: "Web Application Framework",
    description:
      "Enterprise framework architecture, secure authentication, ORM data relationships, and administrative tooling.",
    highlight: true,
  },
  {
    name: "Django REST Framework",
    category: "Backend",
    role: "API Architecture Toolkit",
    description:
      "Serializers, viewsets, token authentication, pagination, input validation, and structured JSON endpoints.",
    highlight: true,
  },
  {
    name: "REST API",
    category: "Backend",
    role: "API Communication Standard",
    description:
      "Resource-oriented design, HTTP status codes, query filtering, idempotency, and predictable payload formats.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    role: "Relational Database",
    description:
      "Relational schema design, foreign keys, table constraints, indices, and structured relational queries.",
    highlight: true,
  },
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    role: "Version Control & Collaboration",
    description:
      "Branch management, commit hygiene, pull request reviews, and repository maintenance.",
  },
  {
    name: "Docker",
    category: "DevOps & Tools",
    role: "Application Containerization",
    description:
      "Multi-stage Dockerfiles, Docker Compose service configurations, and reproducible environments.",
  },
  {
    name: "Vercel",
    category: "DevOps & Tools",
    role: "Cloud Edge Hosting",
    description:
      "Serverless frontend hosting, instant deployment preview branches, and environment configuration.",
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
    url: "https://github.com/your-username/next-django-starter-kit", // TODO: Replace with real repo URL
    tags: ["Next.js", "Django", "TypeScript", "Docker"],
  },
  {
    name: "react-editorial-ui",
    description:
      "Minimalist, typography-driven component collection featuring micro-animations, accessible accordions, and fluid layouts.",
    language: "TypeScript",
    url: "https://github.com/your-username/react-editorial-ui", // TODO: Replace with real repo URL
    tags: ["React", "Tailwind CSS", "Accessibility"],
  },
  {
    name: "drf-rest-patterns",
    description:
      "Collection of clean Django REST Framework serializers, custom permission classes, and pagination helpers.",
    language: "Python",
    url: "https://github.com/your-username/drf-rest-patterns", // TODO: Replace with real repo URL
    tags: ["Python", "Django REST", "API"],
  },
  {
    name: "fullstack-dashboard-template",
    description:
      "Responsive developer operations dashboard layout featuring dark-mode styling and metric card components.",
    language: "TypeScript",
    url: "https://github.com/your-username/fullstack-dashboard-template", // TODO: Replace with real repo URL
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
    question: "What technologies do you work with?",
    answer:
      "My primary full-stack stack comprises React, Next.js, and TypeScript on the frontend, paired with Python and Django REST Framework on the backend. For data persistence, I rely on PostgreSQL, and I style using Tailwind CSS with custom editorial design systems. I also work with Git, Docker, and Vercel hosting.",
  },
  {
    number: "02",
    question: "Can you build a complete full-stack application from scratch?",
    answer:
      "Yes. I develop web applications from database modeling and REST API design through to frontend user interfaces, form validations, responsive styling, and production deployment setups.",
  },
  {
    number: "03",
    question: "Can you connect Next.js with Django?",
    answer:
      "Yes, that is a core architectural specialty. I build decoupled applications where Next.js provides modern, fast frontend user experiences while Django REST Framework handles application logic, database operations, and secure API endpoints.",
  },
  {
    number: "04",
    question: "Can you develop REST APIs?",
    answer:
      "Yes. I design RESTful APIs with Django REST Framework following clear conventions: structured JSON payloads, token-based authentication, validation rules, query parameter filtering, and consistent HTTP status codes.",
  },
  {
    number: "05",
    question: "Can you deploy the application?",
    answer:
      "Yes. I containerize applications using Docker, configure frontend deployments on Vercel, and configure environment variables and database connections for production hosting.",
  },
  {
    number: "06",
    question: "How can I start a project?",
    answer:
      "You can reach out using the contact form below or via email with your project brief, preferred timeline, and goals. I will review the specifications and reply to discuss technical possibilities and next steps.",
  },
];
