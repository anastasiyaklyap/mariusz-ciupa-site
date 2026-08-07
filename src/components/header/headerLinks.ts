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

const normalizePath = (value: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  let path = value.split('?')[0].split('#')[0];
  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length) || '/';
  }
  if (!path.startsWith('/')) path = `/${path}`;
  return path.endsWith('/') ? path : `${path}/`;
};

export const isHomePath = (pathname: string, locale: Locale): boolean =>
  normalizePath(pathname) === `/${locale}/`;

export const isNavLinkActive = ({
  link,
  pathname,
  locale,
  activeSection,
}: {
  link: HeaderNavLink;
  pathname: string;
  locale: Locale;
  activeSection: HeaderSectionId | null;
}): boolean => {
  if (link.sectionId) {
    return isHomePath(pathname, locale) && activeSection === link.sectionId;
  }
  return normalizePath(pathname) === normalizePath(link.href);
};

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
      id: 'gallery',
      label: labels.gallery,
      href: withLocaleHref(linkPath('/gallery'), locale),
    },
    {
      id: 'faq',
      label: labels.faq,
      href: withLocaleHref(linkPath('/faq'), locale),
    },
    {
      id: 'updates',
      label: labels.updates,
      href: withLocaleHref(linkPath('/updates'), locale),
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
