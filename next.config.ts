import path from "node:path";
import type { NextConfig } from "next";

// Preview build for GitHub Pages (set by the deploy workflow). The site is
// served from alexmendoza93.github.io/toldosylonas, so it needs a basePath.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/toldosylonas" : "";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // A stray lockfile in the home folder makes Turbopack pick ~ as the root
  // and watch the whole user directory (runs out of memory). Pin it here.
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    // The persisted dev cache (.next/dev/cache) grew past 1 GB across sessions
    // and pushed `next dev` into a heap OOM. Start each dev session fresh.
    turbopackFileSystemCacheForDev: false,
  },
  async redirects() {
    return [
      // "Servicios" section was renamed to "Productos"
      {
        source: "/servicios",
        destination: "/productos",
        permanent: true,
      },
      {
        source: "/servicios/:slug",
        destination: "/productos/:slug",
        permanent: true,
      },
      // Preserve SEO for pages that move to new URL structure
      {
        source: "/toldos-retractiles",
        destination: "/productos/toldos-retractiles",
        permanent: true,
      },
      {
        source: "/persianas-roller-screen",
        destination: "/productos/persianas-roller-screen",
        permanent: true,
      },
      {
        source: "/servicios-de-mantenimiento",
        destination: "/productos/mantenimiento",
        permanent: true,
      },
      {
        source: "/arquitectura-textil",
        destination: "/productos/proyectos-especiales",
        permanent: true,
      },
      {
        source: "/comercial-95",
        destination: "/productos/proyectos-especiales",
        permanent: true,
      },
      {
        source: "/nuestros-productos",
        destination: "/productos",
        permanent: true,
      },
      {
        source: "/dickson-coatings",
        destination: "/materiales",
        permanent: true,
      },
      {
        source: "/general-3",
        destination: "/materiales",
        permanent: true,
      },
      {
        source: "/productos-siplan",
        destination: "/productos/toldos-retractiles",
        permanent: true,
      },
      {
        source: "/retractiles-siplan",
        destination: "/productos/toldos-retractiles",
        permanent: true,
      },
      {
        source: "/palilleria-sipla",
        destination: "/productos/toldos-residenciales",
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

// GitHub Pages only serves static files: export the site, skip image
// optimization, and drop the redirects (they need a server).
export default isGithubPages
  ? {
      ...nextConfig,
      output: "export",
      basePath,
      trailingSlash: true,
      redirects: undefined,
      images: { ...nextConfig.images, unoptimized: true },
    } satisfies NextConfig
  : nextConfig;
