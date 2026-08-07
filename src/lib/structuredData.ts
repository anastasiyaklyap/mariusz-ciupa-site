import { siteConfig } from '@/lib/siteConfig';
import { siteCopy } from '@/content/siteCopy';
import type { Locale } from '@/lib/i18n';

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://scubadivinginstructor.co.uk';

export const absoluteUrl = (path: string): string => {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
};

const localeUrl = (locale: Locale, path = '/'): string => {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '');
  return absoluteUrl(`/${locale}${normalized}/`);
};

const PERSON_ID = `${SITE_ORIGIN}/#person`;
const BUSINESS_ID = `${SITE_ORIGIN}/#business`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

const socialProfiles = [
  siteConfig.socials.instagram,
  siteConfig.socials.facebook,
  siteConfig.socials.googleBusiness,
];

// TODO(client): add the training pool address and named dive sites once
// confirmed. Without a street address this stays a ProfessionalService rather
// than a LocalBusiness, so it cannot appear in Google Maps results.
const areaServed = [
  { '@type': 'City', name: 'London', addressCountry: 'GB' },
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Place', name: 'Lanzarote, Canary Islands, Spain' },
  { '@type': 'Country', name: 'Poland' },
];

const knowsAbout = [
  'Scuba diving',
  'SSI Open Water Diver',
  'Technical diving',
  'SSI Extended Range',
  'Decompression diving',
  'Freediving',
  'Dive safety',
];

export const buildPersonSchema = (locale: Locale) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: localeUrl(locale),
  email: `mailto:${siteConfig.email}`,
  image: absoluteUrl('/images/mariusz-ciupa.jpeg'),
  sameAs: socialProfiles,
  knowsAbout,
  knowsLanguage: ['en', 'pl'],
  worksFor: { '@id': BUSINESS_ID },
});

export const buildBusinessSchema = (locale: Locale) => ({
  '@type': ['ProfessionalService', 'SportsActivityLocation'],
  '@id': BUSINESS_ID,
  name: `${siteConfig.name} — SSI Scuba Diving Instructor`,
  description: siteCopy[locale].home.hero.subtitle,
  url: localeUrl(locale),
  email: `mailto:${siteConfig.email}`,
  image: absoluteUrl('/images/hero.jpeg'),
  logo: absoluteUrl('/images/favicon.png'),
  sameAs: socialProfiles,
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  areaServed,
  currenciesAccepted: 'GBP',
  knowsLanguage: ['en', 'pl'],
});

export const buildWebSiteSchema = (locale: Locale) => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: localeUrl(locale),
  name: `${siteConfig.name} — SSI Scuba Diving Instructor`,
  inLanguage: locale,
  publisher: { '@id': BUSINESS_ID },
});

type BreadcrumbItem = { name: string; path: string };

export const buildBreadcrumbSchema = (
  locale: Locale,
  items: readonly BreadcrumbItem[],
) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: localeUrl(locale, item.path),
  })),
});

type CourseCopy = {
  title: string;
  description: string;
  price?: { amount: number; currency: string };
  priceText?: string;
};

const summarise = (description: string): string => {
  const firstBlock = description.split('\n').find((line) => line.trim());
  return (firstBlock ?? description).trim().slice(0, 300);
};

export const buildCourseSchema = (
  locale: Locale,
  course: CourseCopy,
  pagePath: string,
) => {
  const offers = course.price
    ? {
        '@type': 'Offer',
        price: course.price.amount,
        priceCurrency: course.price.currency,
        availability: 'https://schema.org/InStock',
        url: localeUrl(locale, pagePath),
        category: 'Paid',
      }
    : undefined;

  return {
    '@type': 'Course',
    name: course.title,
    description: summarise(course.description),
    inLanguage: locale,
    url: localeUrl(locale, pagePath),
    provider: { '@id': BUSINESS_ID },
    ...(offers ? { offers } : {}),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      location: areaServed,
      instructor: { '@id': PERSON_ID },
      // `courseWorkload` deliberately omitted — durations are not published on
      // the site, and markup must match visible content. Do not invent one.
    },
  };
};

export const buildCourseListSchema = (
  locale: Locale,
  courses: readonly CourseCopy[],
  pagePath: string,
) => ({
  '@type': 'ItemList',
  itemListElement: courses.map((course, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: buildCourseSchema(locale, course, pagePath),
  })),
});

export const buildFaqSchema = (locale: Locale) => ({
  '@type': 'FAQPage',
  '@id': `${localeUrl(locale, '/faq')}#faq`,
  mainEntity: siteCopy[locale].faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});

export const buildGraph = (nodes: readonly unknown[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
