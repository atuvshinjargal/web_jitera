import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NOTIFICATION_SERVICE_PORT: 8080,
  },
};

export default nextConfig;