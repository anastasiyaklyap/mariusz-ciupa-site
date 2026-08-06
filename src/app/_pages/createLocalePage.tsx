import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Suspense } from 'react';
import { createLocaleMetadata, createOpenGraphMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/i18n';
import { JsonLd } from '@/components/JsonLd';
import { siteCopy } from '@/content/siteCopy';
import {
  buildBreadcrumbSchema,
  buildBusinessSchema,
  buildGraph,
  buildPersonSchema,
  buildWebSiteSchema,
} from '@/lib/structuredData';

type CreateLocalePageOptions = {
  locale: Locale;
  pathname: string;
  component: ReactElement;
  metadata?: Metadata;
  structuredData?: readonly unknown[];
  breadcrumbLabel?: string;
};

export const createLocalePage = ({
  locale,
  pathname,
  component,
  metadata,
  structuredData = [],
  breadcrumbLabel,
}: CreateLocalePageOptions): {
  metadata: Metadata;
  Page: () => ReactElement;
} => {
  const baseMetadata = createLocaleMetadata(pathname, locale);
  const title = typeof metadata?.title === 'string' ? metadata.title : undefined;
  const description =
    typeof metadata?.description === 'string' ? metadata.description : undefined;

  const mergedMetadata: Metadata = {
    ...baseMetadata,
    ...createOpenGraphMetadata({ pathname, locale, title, description }),
    ...metadata,
    alternates: metadata?.alternates ?? baseMetadata.alternates,
  };

  const isHome = pathname === '/';

  const graph = buildGraph([
    buildBusinessSchema(locale),
    buildPersonSchema(locale),
    ...(isHome ? [buildWebSiteSchema(locale)] : []),
    ...(breadcrumbLabel
      ? [
          buildBreadcrumbSchema(locale, [
            { name: siteCopy[locale].common.breadcrumbHome, path: '/' },
            { name: breadcrumbLabel, path: pathname },
          ]),
        ]
      : []),
    ...structuredData,
  ]);

  const Page = () => (
    <>
      <JsonLd data={graph} />
      <Suspense fallback={null}>{component}</Suspense>
    </>
  );

  return { metadata: mergedMetadata, Page };
};
