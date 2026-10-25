import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

/* ============================================================
   THE ATLAS — sitemap.
   One canonical page lives behind "/" (the hash router drives
   every view client-side), so the map is a single honest entry.
   The origin resolves from the same env logic as metadataBase.
   ============================================================ */

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
