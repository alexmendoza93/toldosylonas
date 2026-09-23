import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the home folder makes Turbopack pick ~ as the root
  // and watch the whole user directory (runs out of memory). Pin it here.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      // Preserve SEO for pages that move to new URL structure
      {
        source: "/toldos-retractiles",
        destination: "/servicios/toldos-retractiles",
        permanent: true,
      },
      {
        source: "/persianas-roller-screen",
        destination: "/servicios/persianas-roller-screen",
        permanent: true,
      },
      {
        source: "/servicios-de-mantenimiento",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/arquitectura-textil",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/comercial-95",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/nuestros-productos",
        destination: "/materiales",
        permanent: true,
      },
      {
        source: "/dickson-coatings",
        destination: "/materiales",
        permanent: true,
      },
      {
        source: "/general-3",
        destination: "/nosotros",
        permanent: true,
      },
      {
        source: "/productos-siplan",
        destination: "/servicios/toldos-retractiles",
        permanent: true,
      },
      {
        source: "/retractiles-siplan",
        destination: "/servicios/toldos-retractiles",
        permanent: true,
      },
      {
        source: "/palilleria-sipla",
        destination: "/servicios/toldos-retractiles",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
