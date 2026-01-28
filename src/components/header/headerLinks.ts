import { siteCopy } from '@/content/siteCopy';
import { withLocaleHref, type Locale } from '@/lib/i18n';
import { linkPath } from '@/lib/linkPath';

export const headerSectionIds = ['courses', 'about', 'contact'] as const;

export type HeaderSectionId = (typeof headerSectionIds)[number];

export type HeaderNavLink = {
  id: HeaderSectionId;
  label: string;
  href: string;
};

export type HeaderCtaLink = {
  label: string;
  href: string;
};

const getHeaderLinkLabels = (locale: Locale): Record<HeaderSectionId, string> =>
  siteCopy[locale].header.nav;

export const getHeaderNavLinks = (locale: Locale): HeaderNavLink[] => {
  const labels = getHeaderLinkLabels(locale);
  return headerSectionIds.map((id) => ({
    id,
    label: labels[id],
    href: withLocaleHref(linkPath(`/#${id}`), locale),
  }));
};

export const getHeaderCtaLink = (locale: Locale): HeaderCtaLink => ({
  label: siteCopy[locale].header.ctaLabel,
  href: withLocaleHref(linkPath('/#contact'), locale),
});
