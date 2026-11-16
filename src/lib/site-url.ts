/* ============================================================
   Canonical origin of this deployment, resolved once from the
   environment. Used by layout.tsx (metadataBase), sitemap.ts and
   any other place that needs to build absolute URLs.

     NEXT_PUBLIC_SITE_URL              → explicit override (custom domain)
     VERCEL_PROJECT_PRODUCTION_URL     → the production deployment host
                                         (NEVER the per-commit preview URL)
     fallback                          → the production site itself;
                                         local dev stays relative anyway
   ============================================================ */

export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://foundationofcomputing.vercel.app";
}
