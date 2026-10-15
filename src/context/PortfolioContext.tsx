"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Language, TranslationDictionary } from "@/types/translations";
import { translations } from "@/data/translations";
import { hindiContent, LocalizedContent } from "@/data/hindiContent";
import {
  SERVICES,
  WHY_WORK_WITH_ME,
  WORKFLOW_STEPS,
  EXPERIENCES,
  TECHNOLOGIES,
  COLLABORATION_PRINCIPLES,
  FAQS,
  PROJECTS,
  DEVELOPER_INFO,
} from "@/data/portfolioData";
import {
  ProjectItem,
  ServiceItem,
  WhyWorkItem,
  WorkflowStepItem,
  ExperienceItem,
  TechnologyItem,
  CollaborationPrincipleItem,
  FaqItem,
} from "@/types/portfolio";

export type Theme = "dark" | "light";

export interface VisitorLocation {
  city: string;
  region: string;
  country: string;
  countryCode: string;
  flagEmoji: string;
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  detected: boolean;
  source: "ip" | "gps" | "fallback";
}

interface PortfolioContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  visitorLocation: VisitorLocation;
  detectGpsLocation: () => Promise<void>;
  t: TranslationDictionary;
  services: ServiceItem[];
  whyWorkWithMe: WhyWorkItem[];
  workflowSteps: WorkflowStepItem[];
  experiences: ExperienceItem[];
  technologies: TechnologyItem[];
  collaborationPrinciples: CollaborationPrincipleItem[];
  faqs: FaqItem[];
  projects: ProjectItem[];
  coreCompetencies: string[];
  disciplines: { title: string; desc: string }[];
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [visitorLocation, setVisitorLocation] = useState<VisitorLocation>({
    city: "Nashik",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
    flagEmoji: "🇮🇳",
    latitude: 19.9975,
    longitude: 73.7898,
    loading: true,
    detected: false,
    source: "fallback",
  });

  // Auto-catch Visitor Geolocation via high-speed, non-intrusive IP lookup
  useEffect(() => {
    let isCancelled = false;

    const autoCatchLocation = async () => {
      // 1. Check session cache first for instant load
      try {
        const cached = sessionStorage.getItem("portfolio_visitor_location");
        if (cached) {
          const parsed = JSON.parse(cached);
          if (!isCancelled && parsed && parsed.city) {
            setVisitorLocation({ ...parsed, loading: false });
            return;
          }
        }
      } catch {}

      // 2. Query ipwho.is with 3.5s timeout
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        const res = await fetch("https://ipwho.is/", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (!isCancelled && data && data.success) {
            const loc: VisitorLocation = {
              city: data.city || "Nashik",
              region: data.region || "Maharashtra",
              country: data.country || "India",
              countryCode: data.country_code || "IN",
              flagEmoji: data.flag?.emoji || "🇮🇳",
              latitude: typeof data.latitude === "number" ? data.latitude : 19.9975,
              longitude: typeof data.longitude === "number" ? data.longitude : 73.7898,
              loading: false,
              detected: true,
              source: "ip",
            };
            setVisitorLocation(loc);
            try {
              sessionStorage.setItem("portfolio_visitor_location", JSON.stringify(loc));
            } catch {}
            return;
          }
        }
      } catch {
        // Fallback gracefully on timeout/network error
      }

      // 3. Fallback to client browser timezone deduction
      if (!isCancelled) {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
          const cityGuess = tz.split("/")[1]?.replace(/_/g, " ") || "Nashik";
          const fallbackLoc: VisitorLocation = {
            city: cityGuess,
            region: "Detected Zone",
            country: tz.includes("Kolkata") || tz.includes("Calcutta") ? "India" : "Global",
            countryCode: tz.includes("Kolkata") || tz.includes("Calcutta") ? "IN" : "INTL",
            flagEmoji: tz.includes("Kolkata") || tz.includes("Calcutta") ? "🇮🇳" : "🌐",
            latitude: 19.9975,
            longitude: 73.7898,
            loading: false,
            detected: true,
            source: "fallback",
          };
          setVisitorLocation(fallbackLoc);
        } catch {
          setVisitorLocation((prev) => ({ ...prev, loading: false }));
        }
      }
    };

    autoCatchLocation();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Precise browser GPS auto-catch triggered on user demand
  const detectGpsLocation = async () => {
    if (typeof window === "undefined" || !("geolocation" in navigator)) {
      return;
    }
    setVisitorLocation((prev) => ({ ...prev, loading: true }));
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setVisitorLocation((prev) => {
          const updated: VisitorLocation = {
            ...prev,
            latitude: lat,
            longitude: lng,
            loading: false,
            detected: true,
            source: "gps",
          };
          try {
            sessionStorage.setItem("portfolio_visitor_location", JSON.stringify(updated));
          } catch {}
          return updated;
        });
      },
      () => {
        setVisitorLocation((prev) => ({ ...prev, loading: false }));
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  // Initialize from localStorage or defaults
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_language") as Language | null;
      if (savedLang === "en" || savedLang === "hi") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }

      const savedTheme = localStorage.getItem("portfolio_theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        applyThemeClass(savedTheme);
      } else {
        // Default theme is dark as requested
        setThemeState("dark");
        applyThemeClass("dark");
      }
    } catch {
      // localStorage may not be available in private mode
    }
    setMounted(true);
  }, []);

  const applyThemeClass = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_language", lang);
    } catch {}
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem("portfolio_theme", newTheme);
    } catch {}
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const t = useMemo(() => translations[language], [language]);

  // Localized dynamic datasets
  const localizedServices = useMemo(() => {
    if (language === "en") return SERVICES;
    return hindiContent.services;
  }, [language]);

  const localizedWhyWorkWithMe = useMemo(() => {
    if (language === "en") return WHY_WORK_WITH_ME;
    return hindiContent.whyWorkWithMe;
  }, [language]);

  const localizedWorkflowSteps = useMemo(() => {
    if (language === "en") return WORKFLOW_STEPS;
    return hindiContent.workflowSteps;
  }, [language]);

  const localizedExperiences = useMemo(() => {
    if (language === "en") return EXPERIENCES;
    return hindiContent.experiences;
  }, [language]);

  const localizedTechnologies = useMemo(() => {
    if (language === "en") return TECHNOLOGIES;
    return hindiContent.technologies;
  }, [language]);

  const localizedPrinciples = useMemo(() => {
    if (language === "en") return COLLABORATION_PRINCIPLES;
    return hindiContent.collaborationPrinciples;
  }, [language]);

  const localizedFaqs = useMemo(() => {
    if (language === "en") return FAQS;
    return hindiContent.faqs;
  }, [language]);

  const localizedProjects = useMemo(() => {
    if (language === "en") return PROJECTS;
    return PROJECTS.map((p) => {
      const hi = hindiContent.projects[p.slug];
      if (!hi) return p;
      return {
        ...p,
        category: hi.category || p.category,
        role: hi.role || p.role,
        projectType: hi.projectType || p.projectType,
        shortDescription: hi.shortDescription || p.shortDescription,
        overview: hi.overview || p.overview,
        problem: hi.problem || p.problem,
        solution: hi.solution || p.solution,
      };
    });
  }, [language]);

  const localizedCoreCompetencies = useMemo(() => {
    if (language === "en") return DEVELOPER_INFO.coreCompetencies;
    return hindiContent.coreCompetencies;
  }, [language]);

  const localizedDisciplines = useMemo(() => {
    if (language === "en") {
      return [
        {
          title: "Frontend Engineering",
          desc: "Architecting responsive, kinetic user interfaces using React, Next.js, and TypeScript with strict type-safety and accessible semantic markup.",
        },
        {
          title: "Backend Development",
          desc: "Writing clean, scalable Python and Django server architectures handling complex business logic, asynchronous task queues, and data integrity.",
        },
        {
          title: "API Development",
          desc: "Building clean, secure, and well-documented REST APIs with Django REST Framework, rate-limiting, token-based auth, and predictable data serialization.",
        },
        {
          title: "Database Integration",
          desc: "Designing normalized relational databases in PostgreSQL, writing optimized query pipelines, caching frequently requested data with Redis, and handling migrations.",
        },
        {
          title: "Responsive Design",
          desc: "Translating sophisticated editorial visual hierarchy into fluid layouts that maintain visual balance and impeccable ergonomics across mobile, tablet, and ultra-wide screens.",
        },
        {
          title: "Deployment & DevOps",
          desc: "Containerizing services via Docker, automating deployments through GitHub Actions, and configuring edge CDN routing on Vercel and cloud VPS providers.",
        },
        {
          title: "Problem Solving",
          desc: "Approaching engineering challenges from first principles — diagnosing bottlenecks, eliminating dead code, and engineering systems built for long-term maintainability.",
        },
      ];
    }
    return hindiContent.disciplines;
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    theme,
    setTheme,
    toggleTheme,
    visitorLocation,
    detectGpsLocation,
    t,
    services: localizedServices,
    whyWorkWithMe: localizedWhyWorkWithMe,
    workflowSteps: localizedWorkflowSteps,
    experiences: localizedExperiences,
    technologies: localizedTechnologies,
    collaborationPrinciples: localizedPrinciples,
    faqs: localizedFaqs,
    projects: localizedProjects,
    coreCompetencies: localizedCoreCompetencies,
    disciplines: localizedDisciplines,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
