'use client';

import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeCourses } from '@/components/home/HomeCourses';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeQuote } from '@/components/home/HomeQuote';
import { PageContainer } from '@/components/layout/PageContainer';
import { ContactCta } from '@/components/sections/ContactCta';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';

const HomePage = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].home;

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

export default HomePage;
