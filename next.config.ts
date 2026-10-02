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
        destination: "/work/al-umaima-school-erp",
        permanent: true,
      },
      {
        source: "/work/pharmflow-system",
        destination: "/work/medicare-hospital-erp",
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
