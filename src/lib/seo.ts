import type { Metadata } from 'next';
import { type Locale } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/structuredData';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const normalizePath = (path: string): string => {
  if (!path || path === '/') return '/';
  return path.startsWith('/') ? path : `/${path}`;
};

const joinPath = (prefix: string, path: string): string => {
  if (!prefix) return path;
  if (prefix.endsWith('/') && path.startsWith('/')) {
    return `${prefix.slice(0, -1)}${path}`;
  }
  return `${prefix}${path}`;
};

const localePath = (locale: Locale, pathname: string): string => {
  const normalized = normalizePath(pathname);
  if (normalized === '/') return `/${locale}`;
  return `/${locale}${normalized}`;
};

export const createLocaleAlternates = (
  pathname: string,
  locale: Locale,
): NonNullable<Metadata['alternates']> => {
  const en = joinPath(basePath, localePath('en', pathname));
  const pl = joinPath(basePath, localePath('pl', pathname));
  const canonical = joinPath(basePath, localePath(locale, pathname));

  return {
    canonical,
    languages: {
      en,
      pl,
      'x-default': en,
    },
  };
};

export const createLocaleMetadata = (
  pathname: string,
  locale: Locale,
): Metadata => ({
  alternates: createLocaleAlternates(pathname, locale),
});

const DEFAULT_TITLE = 'Mariusz Ciupa – SSI Scuba Diving Instructor';
const DEFAULT_DESCRIPTION =
  'Personal scuba diving training from beginner to technical level.';

const OG_IMAGE = {
  url: absoluteUrl('/images/og-image.jpg'),
  width: 1200,
  height: 630,
  alt: 'Scuba diving training with Mariusz Ciupa',
};

type OpenGraphOptions = {
  pathname: string;
  locale: Locale;
  title?: string;
  description?: string;
};

export const createOpenGraphMetadata = ({
  pathname,
  locale,
  title,
  description,
}: OpenGraphOptions): Metadata => {
  const resolvedTitle = title ?? DEFAULT_TITLE;
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;
  const normalized = normalizePath(pathname);
  const path = normalized === '/' ? `/${locale}/` : `/${locale}${normalized}/`;

  return {
    openGraph: {
      type: 'website',
      siteName: DEFAULT_TITLE,
      title: resolvedTitle,
      description: resolvedDescription,
      url: absoluteUrl(path),
      locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
      alternateLocale: locale === 'pl' ? ['en_GB'] : ['pl_PL'],
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [OG_IMAGE.url],
    },
  };
};
