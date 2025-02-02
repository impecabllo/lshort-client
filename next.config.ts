import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: "/:code*",
          destination: `http://localhost:3001/link/:code*`,
        },
      ],
    }
  },
}

export default nextConfig
