export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

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

  const value = resolved.lang;
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

  const [pathWithQuery, hash] = href.split('#');
  const url = new URL(pathWithQuery, 'http://example.local');
  url.searchParams.set('lang', locale);

  const query = url.search ? url.search : '';
  return `${url.pathname}${query}${hash ? `#${hash}` : ''}`;
};
