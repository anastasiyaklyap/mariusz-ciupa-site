'use client';

import { Suspense } from 'react';
import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeCourses } from '@/components/home/HomeCourses';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeQuote } from '@/components/home/HomeQuote';
import { PageContainer } from '@/components/layout/PageContainer';
import { ContactCta } from '@/components/sections/ContactCta';
import { siteCopy } from '@/content/siteCopy';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useLocale } from '@/hooks/useLocale';
import type { Locale } from '@/lib/i18n';

type HomePageContentProps = {
  localeOverride?: Locale;
};

const HomePageContent = ({ localeOverride }: HomePageContentProps) => {
  const pathLocale = useLocale();
  const locale = localeOverride ?? pathLocale;
  const copy = siteCopy[locale].home;

  useHashScroll();

  return (
    <PageContainer>
      <HomeHero locale={locale} />
      <HomeQuote locale={locale} />
      <HomeCourses locale={locale} />
      <HomeAbout locale={locale} />
      <ContactCta
        title={copy.contact.title}
        description={copy.contact.description}
        locale={locale}
      />
    </PageContainer>
  );
};

type HomePageClientProps = {
  localeOverride?: Locale;
};

const HomePageClient = ({ localeOverride }: HomePageClientProps) => (
  <Suspense fallback={null}>
    <HomePageContent localeOverride={localeOverride} />
  </Suspense>
);

export default HomePageClient;
