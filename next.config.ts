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
