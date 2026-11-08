"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Language, TranslationDictionary } from "@/types/translations";
import { translations } from "@/data/translations";
import { hindiContent } from "@/data/hindiContent";
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
  error?: string | null;
}

interface CachedVisitorLocation {
  location: VisitorLocation;
  timestamp: number;
}

const LOCATION_CACHE_KEY = "portfolio_visitor_location_v2";
const CACHE_VALID_MS = 30 * 60 * 1000; // 30 mins for verified IP / GPS
const CACHE_FALLBACK_MS = 10 * 60 * 1000; // 10 mins for timezone fallback

function getTimezoneFallback(): VisitorLocation {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const isIndia = tz.includes("Kolkata") || tz.includes("Calcutta") || tz.toLowerCase().includes("india");

    if (isIndia) {
      return {
        city: "India",
        region: "",
        country: "India",
        countryCode: "IN",
        flagEmoji: "🇮🇳",
        latitude: null, // Strictly null: never assume state or spoof GPS coordinates
        longitude: null,
        loading: false,
        detected: false,
        source: "fallback",
        error: null,
      };
    }

    const parts = tz.split("/");
    const rawCity = parts.length > 1 ? parts[parts.length - 1] : parts[0];
    const cityGuess = rawCity?.replace(/_/g, " ").trim() || "Global";

    return {
      city: cityGuess,
      region: "",
      country: "Global",
      countryCode: "INTL",
      flagEmoji: "🌐",
      latitude: null, // Strictly null: never spoof coordinates for unknown locations!
      longitude: null,
      loading: false,
      detected: false,
      source: "fallback",
      error: null,
    };
  } catch {
    return {
      city: "Global",
      region: "",
      country: "Worldwide",
      countryCode: "WW",
      flagEmoji: "🌐",
      latitude: null,
      longitude: null,
      loading: false,
      detected: false,
      source: "fallback",
      error: null,
    };
  }
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

function applyThemeClass(newTheme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (newTheme === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
  }
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [visitorLocation, setVisitorLocation] = useState<VisitorLocation>({
    city: "India",
    region: "",
    country: "India",
    countryCode: "IN",
    flagEmoji: "🇮🇳",
    latitude: null, // Initial coordinates are null until detected to avoid spoofing
    longitude: null,
    loading: true,
    detected: false,
    source: "fallback",
    error: null,
  });

  // Track GPS scan state to eliminate GPS/IP race conditions
  const isGpsActiveRef = useRef(false);
  const ipAbortControllerRef = useRef<AbortController | null>(null);

  // Auto-catch Visitor Geolocation via high-speed, non-intrusive IP lookup
  useEffect(() => {
    let isCancelled = false;
    const controller = new AbortController();
    ipAbortControllerRef.current = controller;

    const autoCatchLocation = async () => {
      // 1. Check session cache first for instant 0ms load without hitting APIs
      try {
        const cachedRaw = sessionStorage.getItem(LOCATION_CACHE_KEY);
        if (cachedRaw) {
          const parsed = JSON.parse(cachedRaw) as CachedVisitorLocation;
          if (parsed?.location && typeof parsed.timestamp === "number") {
            const ttl = parsed.location.source === "fallback" ? CACHE_FALLBACK_MS : CACHE_VALID_MS;
            const isFresh = Date.now() - parsed.timestamp < ttl;
            if (isFresh && parsed.location.city) {
              if (!isCancelled && !isGpsActiveRef.current) {
                setVisitorLocation({
                  ...parsed.location,
                  loading: false,
                });
              }
              return;
            }
          }
        }
      } catch {}

      // 2. Prepare immediate timezone fallback so visitor is never left stranded
      const fallbackLoc = getTimezoneFallback();

      // If user already initiated manual GPS scan, skip IP lookup
      if (isGpsActiveRef.current) {
        return;
      }

      // 3. Query ipwho.is with 2500ms timeout
      try {
        const timeoutId = setTimeout(() => controller.abort(), 2500);
        const res = await fetch("https://ipwho.is/", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (!isCancelled && !isGpsActiveRef.current && data && data.success) {
            const lat =
              typeof data.latitude === "number" && !isNaN(data.latitude)
                ? data.latitude
                : null;
            const lng =
              typeof data.longitude === "number" && !isNaN(data.longitude)
                ? data.longitude
                : null;

            const loc: VisitorLocation = {
              city: data.city || fallbackLoc.city,
              region: data.region || fallbackLoc.region,
              country: data.country || fallbackLoc.country,
              countryCode: data.country_code || fallbackLoc.countryCode,
              flagEmoji: data.flag?.emoji || fallbackLoc.flagEmoji,
              latitude: lat,
              longitude: lng,
              loading: false,
              detected: true,
              source: "ip",
              error: null,
            };

            setVisitorLocation((prev) => {
              // Race-condition guard: never let older IP lookup overwrite user GPS result
              if (prev.source === "gps" || isGpsActiveRef.current) {
                return prev;
              }
              try {
                const cachePayload: CachedVisitorLocation = {
                  location: loc,
                  timestamp: Date.now(),
                };
                sessionStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(cachePayload));
              } catch {}
              return loc;
            });
            return;
          }
        }
      } catch {
        // Fallback gracefully on adblocker blocking ipwho.is, timeout, or network failure
      }

      // 4. If IP lookup failed or was blocked, activate safe timezone fallback
      if (!isCancelled && !isGpsActiveRef.current) {
        setVisitorLocation((prev) => {
          if (prev.source === "gps" || isGpsActiveRef.current) {
            return prev;
          }
          try {
            const cachePayload: CachedVisitorLocation = {
              location: fallbackLoc,
              timestamp: Date.now(),
            };
            sessionStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(cachePayload));
          } catch {}
          return fallbackLoc;
        });
      }
    };

    autoCatchLocation();

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, []);

  // Precise browser GPS auto-catch triggered strictly on user demand
  const detectGpsLocation = useCallback(async (): Promise<void> => {
    if (typeof window === "undefined" || !("geolocation" in navigator)) {
      setVisitorLocation((prev) => ({
        ...prev,
        error: "Browser does not support Geolocation",
      }));
      return;
    }

    // Flag GPS active to immediately preempt and cancel any pending IP lookup
    isGpsActiveRef.current = true;
    if (ipAbortControllerRef.current) {
      try {
        ipAbortControllerRef.current.abort();
      } catch {}
    }

    setVisitorLocation((prev) => ({
      ...prev,
      loading: true,
      source: "gps",
      error: null,
    }));

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
            error: null,
          };
          try {
            const cachePayload: CachedVisitorLocation = {
              location: updated,
              timestamp: Date.now(),
            };
            sessionStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(cachePayload));
          } catch {}
          return updated;
        });
      },
      (err) => {
        setVisitorLocation((prev) => {
          // If user denies permission or GPS times out, revert loading state and retain previous city info
          return {
            ...prev,
            loading: false,
            source: prev.detected && prev.latitude !== null ? "ip" : "fallback",
            error: err.code === 1 ? "Permission denied" : "Location unavailable",
          };
        });
      },
      { timeout: 10000, enableHighAccuracy: true, maximumAge: 60000 }
    );
  }, []);

  // Initialize from localStorage or defaults
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_language") as Language | null;
      const savedTheme = localStorage.getItem("portfolio_theme") as Theme | null;

      queueMicrotask(() => {
        if (savedLang === "en" || savedLang === "hi") {
          setLanguageState(savedLang);
          if (typeof document !== "undefined") {
            document.documentElement.lang = savedLang;
          }
        }

        if (savedTheme === "dark" || savedTheme === "light") {
          setThemeState(savedTheme);
          applyThemeClass(savedTheme);
        } else {
          setThemeState("dark");
          applyThemeClass("dark");
        }
      });
    } catch {
      // localStorage may not be available in private mode
    }
  }, []);

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
