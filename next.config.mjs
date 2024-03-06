/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    const isProd = process.env.REDIRECT == "1";

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
