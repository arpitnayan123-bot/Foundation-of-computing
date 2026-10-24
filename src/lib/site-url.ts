/* ============================================================
   Canonical origin of this deployment, resolved once from the
   environment. Used by layout.tsx (metadataBase), sitemap.ts and
   any other place that needs to build absolute URLs.

     NEXT_PUBLIC_SITE_URL  → explicit override (custom domain)
     VERCEL_URL            → preview/production deployment host
     fallback              → local dev on :3000
   ============================================================ */

export function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}
