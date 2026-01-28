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

const headerLinkLabels: Record<HeaderSectionId, string> = {
  courses: 'Courses',
  about: 'About',
  contact: 'Contact',
};

export const headerNavLinks: HeaderNavLink[] = headerSectionIds.map((id) => ({
  id,
  label: headerLinkLabels[id],
  href: linkPath(`/#${id}`),
}));

export const headerCtaLink: HeaderCtaLink = {
  label: 'Book / Ask',
  href: linkPath('/#contact'),
};
