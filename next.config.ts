import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: "/api/:path*",
          destination: "https://api.lshort.ru/:path*",
        },
        {
          source: "/:code*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://localhost:3001/link/:code*"
              : "https://api.lshort.ru/link/:code*",
        },
      ],
    }
  },
}

export default nextConfig
