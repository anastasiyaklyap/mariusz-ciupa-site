import type { Metadata } from 'next';
import { Suspense } from 'react';
import { createLocaleMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/i18n';

type CreateLocalePageOptions = {
  locale: Locale;
  pathname: string;
  component: React.ReactNode;
  metadata?: Metadata;
};

export const createLocalePage = ({
  locale,
  pathname,
  component,
  metadata,
}: CreateLocalePageOptions): { metadata: Metadata; Page: () => JSX.Element } => {
  const baseMetadata = createLocaleMetadata(pathname, locale);
  const mergedMetadata: Metadata = {
    ...baseMetadata,
    ...metadata,
    alternates: metadata?.alternates ?? baseMetadata.alternates,
  };

  const Page = () => <Suspense fallback={null}>{component}</Suspense>;

  return { metadata: mergedMetadata, Page };
};
