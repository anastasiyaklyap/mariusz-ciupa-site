import type { Metadata } from 'next';
import { type Locale } from '@/lib/i18n';

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
