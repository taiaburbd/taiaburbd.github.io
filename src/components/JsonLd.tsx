import React, { useEffect } from 'react';
import { SITE, absUrl } from '../lib/seo';

type Crumb = { name: string; path: string };

interface JsonLdProps {
  /** Optional breadcrumbs for the current page. */
  breadcrumbs?: Crumb[];
  /** Optional extra JSON-LD object (e.g. CreativeWork, Article). */
  extra?: Record<string, unknown> | Array<Record<string, unknown>>;
  /** Stable id to update the same <script> tag on prop change. */
  id?: string;
}

/** Convenience: a Person schema describing the site owner. */
export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.author.name,
  url: SITE.url,
  email: `mailto:${SITE.author.email}`,
  jobTitle: SITE.author.jobTitle,
  image: absUrl(SITE.defaultImage),
  sameAs: [...SITE.author.sameAs],
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Medical Imaging',
    'Deep Learning',
    'Large Language Models',
    'AI Agents',
    'MCP',
    'Databricks',
    'Software Engineering',
  ],
});

/** Convenience: a WebSite schema with SearchAction. */
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.defaultDescription,
  inLanguage: 'en',
  publisher: { '@id': `${SITE.url}/#person` },
});

const buildBreadcrumb = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absUrl(c.path),
  })),
});

/**
 * Injects one or more JSON-LD scripts into <head>. Each <JsonLd /> instance
 * owns its own <script type="application/ld+json"> tag identified by `id`.
 */
const JsonLd: React.FC<JsonLdProps> = ({ breadcrumbs, extra, id = 'page' }) => {
  useEffect(() => {
    const head = document.head;
    const scriptId = `jsonld-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.setAttribute('data-managed', 'seo');
      head.appendChild(script);
    }

    const items: Array<Record<string, unknown>> = [];
    if (breadcrumbs && breadcrumbs.length > 0) items.push(buildBreadcrumb(breadcrumbs));
    if (Array.isArray(extra)) items.push(...extra);
    else if (extra) items.push(extra);

    script.text = JSON.stringify(items.length === 1 ? items[0] : items, null, 0);

    return () => {
      const el = document.getElementById(scriptId);
      if (el && el.getAttribute('data-managed') === 'seo') el.remove();
    };
  }, [breadcrumbs, extra, id]);

  return null;
};

export default JsonLd;
