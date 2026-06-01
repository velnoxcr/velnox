import type { MetadataRoute } from "next";

const BASE = "https://velnoxcr.com";

const ROUTES = [
  "",
  "/about",
  "/about/advisory",
  "/capabilities",
  "/experience",
  "/services",
  "/compliance",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
