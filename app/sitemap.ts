import type { MetadataRoute } from "next";

const BASE = "https://www.velnoxresearch.com";

const ROUTES = ["", "/about", "/services", "/training", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
