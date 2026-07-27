import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "technofrozt.vercel.app" }],
        destination: "https://www.technofrost.store/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "technofrost.store" }],
        destination: "https://www.technofrost.store/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
