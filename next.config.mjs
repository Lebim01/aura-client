/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    const isProd = process.env?.VERCEL_URL == "auraseries.com";

    return isProd
      ? [
          {
            source: "/(.{1,})",
            destination: "/",
            permanent: false,
          },
        ]
      : [
          /*
          {
            source: "/",
            destination: "/dashboard",
            permanent: false,
          },
          */
        ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
