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
};

export default nextConfig;
