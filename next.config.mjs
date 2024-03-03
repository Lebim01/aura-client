/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    const isProd = process.env.NODE_ENV == "production";

    return isProd
      ? [
          {
            source: "/(.{1,})",
            destination: "/",
            permanent: false,
          },
        ]
      : [];
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
