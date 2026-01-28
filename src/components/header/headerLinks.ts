import { siteCopy } from '@/content/siteCopy';
import { withLocaleHref, type Locale } from '@/lib/i18n';
import { linkPath } from '@/lib/linkPath';

export const headerSectionIds = ['courses', 'about', 'contact'] as const;

export type HeaderSectionId = (typeof headerSectionIds)[number];

export type HeaderNavLink = {
  id: string;
  label: string;
  href: string;
  sectionId?: HeaderSectionId;
};

export type HeaderCtaLink = {
  label: string;
  href: string;
};

const getHeaderLinkLabels = (locale: Locale) => siteCopy[locale].header.nav;

export const getHeaderNavLinks = (locale: Locale): HeaderNavLink[] => {
  const labels = getHeaderLinkLabels(locale);

  return [
    {
      id: 'courses',
      sectionId: 'courses',
      label: labels.courses,
      href: withLocaleHref(linkPath('/#courses'), locale),
    },
    {
      id: 'prices',
      label: labels.prices,
      href: withLocaleHref(linkPath('/prices'), locale),
    },
    {
      id: 'about',
      sectionId: 'about',
      label: labels.about,
      href: withLocaleHref(linkPath('/#about'), locale),
    },
    {
      id: 'contact',
      sectionId: 'contact',
      label: labels.contact,
      href: withLocaleHref(linkPath('/#contact'), locale),
    },
  ];
};

export const getHeaderCtaLink = (locale: Locale): HeaderCtaLink => ({
  label: siteCopy[locale].header.ctaLabel,
  href: withLocaleHref(linkPath('/#contact'), locale),
});
