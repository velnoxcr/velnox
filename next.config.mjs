/** @type {import('next').NextConfig} */
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub Pages serves the site under /<repo>/ — only prefix on CI builds,
  // so `npm run dev` and Vercel-style deploys still serve at "/".
  basePath: isGhPages ? "/velnox" : "",
  assetPrefix: isGhPages ? "/velnox/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? "/velnox" : "",
  },
};

export default nextConfig;
