'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { SectionSurface } from '@/components/sections/SectionSurface';
import { ContactCta } from '@/components/sections/ContactCta';
import { Faq } from '@/components/sections/Faq';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';

export const FaqPageClient = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].faq;

  return (
    <PageContainer>
      <Breadcrumbs
        locale={locale}
        items={[
          { name: siteCopy[locale].common.breadcrumbHome, path: '/' },
          { name: copy.page.title },
        ]}
      />

      <SectionSurface withGlow>
        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          {copy.eyebrow}
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
          {copy.page.title}
        </h1>
        <p className='mt-4 max-w-2xl text-sm text-white/75 sm:text-base'>
          {copy.page.description}
        </p>
      </SectionSurface>

      <Faq locale={locale} showCta={false} className='mt-12 md:mt-16' />

      <ContactCta
        title={siteCopy[locale].home.contact.title}
        description={siteCopy[locale].home.contact.description}
        locale={locale}
      />
    </PageContainer>
  );
};
