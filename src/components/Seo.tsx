import React, { useEffect } from 'react';
import { SITE, absUrl, buildTitle, type SeoConfig } from '../lib/seo';

/**
 * Imperative <head> manager. Updates document.title and every relevant
 * meta tag whenever its props change. No external library required.
 *
 * Tags managed by this component are tagged with data-managed="seo" so we
 * can update or remove them without clobbering tags from public/index.html.
 */
const MANAGED_ATTR = 'data-managed';
const MANAGED_VAL = 'seo';

type Selector = { name?: string; property?: string; rel?: string };

const setTag = (tag: 'meta' | 'link', selector: Selector, attrs: Record<string, string>) => {
  const head = document.head;
  const key = selector.name ?? selector.property ?? selector.rel ?? '';
  const attr =
    selector.name !== undefined ? 'name' : selector.property !== undefined ? 'property' : 'rel';
  let el = head.querySelector<HTMLElement>(`${tag}[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED_ATTR, MANAGED_VAL);
    head.appendChild(el);
  } else if (!el.hasAttribute(MANAGED_ATTR)) {
    el.setAttribute(MANAGED_ATTR, MANAGED_VAL);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
};

const Seo: React.FC<SeoConfig> = ({
  title,
  description = SITE.defaultDescription,
  image = SITE.defaultImage,
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
  type = 'website',
  noIndex = false,
  keywords,
}) => {
  useEffect(() => {
    const fullTitle = buildTitle(title);
    const url = absUrl(path);
    const ogImage = absUrl(image);

    document.title = fullTitle;

    setTag('meta', { name: 'description' }, { content: description });
    setTag(
      'meta',
      { name: 'robots' },
      { content: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' },
    );

    if (keywords && keywords.length > 0) {
      setTag('meta', { name: 'keywords' }, { content: keywords.join(', ') });
    }

    setTag('meta', { property: 'og:type' }, { content: type });
    setTag('meta', { property: 'og:title' }, { content: fullTitle });
    setTag('meta', { property: 'og:description' }, { content: description });
    setTag('meta', { property: 'og:url' }, { content: url });
    setTag('meta', { property: 'og:image' }, { content: ogImage });
    setTag('meta', { property: 'og:site_name' }, { content: SITE.name });
    setTag('meta', { property: 'og:locale' }, { content: SITE.locale });

    setTag('meta', { name: 'twitter:card' }, { content: 'summary_large_image' });
    setTag('meta', { name: 'twitter:title' }, { content: fullTitle });
    setTag('meta', { name: 'twitter:description' }, { content: description });
    setTag('meta', { name: 'twitter:image' }, { content: ogImage });
    setTag('meta', { name: 'twitter:url' }, { content: url });
    if (SITE.twitterHandle) {
      setTag('meta', { name: 'twitter:creator' }, { content: SITE.twitterHandle });
    }

    setTag('link', { rel: 'canonical' }, { href: url });
  }, [title, description, image, path, type, noIndex, keywords]);

  return null;
};

export default Seo;
