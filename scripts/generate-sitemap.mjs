#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml using the same route list the React app uses.
 *
 * Usage:  node scripts/generate-sitemap.mjs
 *         npm run sitemap   (after adding script entry — see README below)
 *
 * This script keeps the sitemap in sync with src/lib/seo.ts. Add new routes
 * there once and run this script to refresh the XML.
 */

import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Mirror of the routes declared in src/lib/seo.ts. Edit when adding new pages.
// (Kept inline to avoid TS/ESM import gymnastics with CRA.)
// ---------------------------------------------------------------------------
const SITE_URL = 'https://taiaburbd.github.io';

const routes = [
  { path: '/',                            changefreq: 'weekly',  priority: 1.0, image: '/images/icon.png' },
  { path: '/academic-projects',           changefreq: 'monthly', priority: 0.8 },
  { path: '/challenges',                  changefreq: 'monthly', priority: 0.7 },
  { path: '/education',                   changefreq: 'monthly', priority: 0.7 },
  { path: '/photo-gallery',               changefreq: 'monthly', priority: 0.5 },
  { path: '/projects/inserm-3d-seg',      changefreq: 'yearly',  priority: 0.7 },
  { path: '/projects/traffic-simulation', changefreq: 'yearly',  priority: 0.6 },
];

const cvAlternates = [
  { en: '/cv/gen/Rahman_CV_2026_en.html', fr: '/cv/gen/Rahman_CV_2026_fr.html' },
];

const today = new Date().toISOString().slice(0, 10);

const abs = (p) => `${SITE_URL}${p}`;

const urlBlock = (route) => {
  const imageBlock = route.image
    ? `\n    <image:image>\n      <image:loc>${abs(route.image)}</image:loc>\n      <image:title>Taiabur Rahman — Portfolio</image:title>\n    </image:image>`
    : '';
  return `  <url>
    <loc>${abs(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>${imageBlock}
  </url>`;
};

const cvBlock = (loc, primaryHreflang, { en, fr }) => `  <url>
    <loc>${abs(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${abs(fr)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(en)}"/>
  </url>`;

const cvBlocks = cvAlternates
  .flatMap((pair) => [cvBlock(pair.en, 'en', pair), cvBlock(pair.fr, 'fr', pair)])
  .join('\n\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

${routes.map(urlBlock).join('\n\n')}

  <!-- CV pages with hreflang alternates -->
${cvBlocks}

</urlset>
`;

const outPath = resolve(ROOT, 'public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`\u2713 Wrote ${outPath} with ${routes.length} routes + ${cvAlternates.length * 2} CV entries.`);
