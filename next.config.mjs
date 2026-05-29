/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Statik export (Cloudflare Pages için)
  images: {
    // Static export'ta next/image optimizer çalışmaz; raw servis et.
    unoptimized: true,
  },
};

export default nextConfig;
