export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
const localePrefixes = new Set(locales.map((locale) => `/${locale}`));

export const isLocale = (value: string | undefined): value is Locale => {
  if (!value) return false;
  return (locales as readonly string[]).includes(value);
};

type SearchParams = Record<string, string | string[] | undefined>;
type SearchParamsInput = SearchParams | Promise<SearchParams | undefined> | undefined;

export const getLocaleFromSearchParams = async (
  searchParams?: SearchParamsInput,
): Promise<Locale> => {
  if (!searchParams) return defaultLocale;

  const resolved = (await searchParams) ?? undefined;
  if (!resolved) return defaultLocale;

  return getLocaleFromSearchParamsSync(resolved);
};

export const getLocaleFromSearchParamsSync = (
  searchParams?: SearchParams,
): Locale => {
  if (!searchParams) return defaultLocale;
  const value = searchParams.lang;
  const lang = Array.isArray(value) ? value[0] : value;

  return isLocale(lang) ? lang : defaultLocale;
};

export const withLocaleHref = (href: string, locale: Locale): string => {
  if (
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  ) {
    return href;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const [pathWithQuery, hash] = href.split('#');
  const url = new URL(pathWithQuery, 'http://example.local');

  url.searchParams.delete('lang');
  const rawPathname = url.pathname;
  const pathname = basePath && rawPathname.startsWith(basePath)
    ? rawPathname.slice(basePath.length) || '/'
    : rawPathname;

  const normalized = stripLocalePrefix(pathname);
  const prefixed =
    normalized === '/'
      ? `/${locale}/`
      : `/${locale}${normalized.startsWith('/') ? '' : '/'}${normalized}`;

  url.pathname = `${basePath}${prefixed}`;
  const query = url.search ? url.search : '';
  return `${url.pathname}${query}${hash ? `#${hash}` : ''}`;
};

export const stripLocalePrefix = (pathname: string): string => {
  if (pathname === '/') return pathname;
  for (const prefix of localePrefixes) {
    if (pathname === prefix) return '/';
    if (pathname.startsWith(`${prefix}/`)) {
      return pathname.slice(prefix.length) || '/';
    }
  }
  return pathname;
};

export const getLocaleFromPathname = (
  pathname: string,
): Locale | undefined => {
  for (const locale of locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return undefined;
};
