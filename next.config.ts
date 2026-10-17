import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/aura-ecommerce",
        destination: "/work/al-umaima-ecommerce",
        permanent: true,
      },
      {
        source: "/work/edusphere-erp",
        destination: "/work/docusense-ai",
        permanent: true,
      },
      {
        source: "/work/al-umaima-school-erp",
        destination: "/work/docusense-ai",
        permanent: true,
      },
      {
        source: "/work/pharmflow-system",
        destination: "/work/nexus-metrics",
        permanent: true,
      },
      {
        source: "/work/medicare-hospital-erp",
        destination: "/work/nexus-metrics",
        permanent: true,
      },
      {
        source: "/work/apex-business",
        destination: "/work/kalycor-corporate",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), browsing-topics=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
