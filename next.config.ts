import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.heightproapp.com" }],
        destination: "https://heightproapp.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;