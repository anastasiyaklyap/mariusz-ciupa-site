'use client';

import Image from 'next/image';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionSurface } from '@/components/sections/SectionSurface';
import { ContactCta } from '@/components/sections/ContactCta';
import { Testimonials } from '@/components/sections/Testimonials';
import {
  CoursePractical,
  type CoursePracticalData,
} from '@/components/courses/CoursePractical';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaLink } from '@/components/ui/CtaLink';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';
import { assetPath } from '@/lib/assetPath';
import type { Locale } from '@/lib/i18n';

type CourseDetailPageClientProps = {
  course: 'openWaterDiver';
};

const formatPrice = (
  amount: number,
  currency: 'GBP' | 'EUR' | 'PLN',
  locale: Locale,
) =>
  new Intl.NumberFormat(locale === 'pl' ? 'pl-PL' : 'en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

export const CourseDetailPageClient = ({
  course,
}: CourseDetailPageClientProps) => {
  const locale = useLocale();
  const copy = siteCopy[locale].courseDetail[course];

  return (
    <PageContainer>
      <Breadcrumbs
        locale={locale}
        items={[
          { name: siteCopy[locale].common.breadcrumbHome, path: '/' },
          { name: siteCopy[locale].beginner.hero.title, path: '/beginner' },
          { name: copy.title },
        ]}
      />

      <SectionSurface withGlow>
        <div className='grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-10'>
          <div>
            <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
              {copy.eyebrow}
            </p>
            <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
              {copy.title}
            </h1>
            <p className='mt-4 whitespace-pre-line text-white/75'>
              {copy.description}
            </p>

            <div className='mt-6 flex flex-wrap gap-2 text-xs text-white/70'>
              {copy.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className='mt-8 inline-flex flex-col rounded-2xl border border-[#24C6D9]/30 bg-[#24C6D9]/10 px-5 py-4'>
              <span className='text-xs uppercase tracking-[0.18em] text-white/60'>
                {copy.priceLabel}
              </span>
              <span className='mt-1 text-3xl font-semibold text-white'>
                {formatPrice(copy.price.amount, copy.price.currency, locale)}
              </span>
              <span className='mt-1 text-xs text-white/60'>
                {copy.priceNote}
              </span>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-3xl border border-white/10'>
            {/* Proporcje zbliżone do źródła (1200x762), żeby nie obcinać boków. */}
            <div className='relative aspect-[16/10] w-full'>
              <Image
                src={assetPath(copy.imageSrc)}
                alt={copy.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </SectionSurface>

      <CoursePractical {...(copy.practical as CoursePracticalData)} />

      <section className='mt-14'>
        <div className='rounded-3xl border border-[#24C6D9]/30 bg-gradient-to-br from-[#24C6D9]/15 via-[#24C6D9]/5 to-transparent p-8 md:p-12'>
          <p className='text-xs font-semibold tracking-[0.22em] text-[#24C6D9]'>
            {copy.afterEyebrow}
          </p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
            {copy.afterTitle}
          </h2>

          <ul className='mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2'>
            {copy.afterItems.map((item) => (
              <li key={item} className='flex gap-4'>
                <span
                  aria-hidden
                  className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#24C6D9] text-sm font-bold text-[#07101A]'
                >
                  ✓
                </span>
                <span className='text-base leading-snug text-white/90'>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className='mt-10'>
            <CtaLink href='#contact' className='w-full sm:w-auto'>
              {copy.afterCtaLabel}
            </CtaLink>
          </div>
        </div>
      </section>

      <Testimonials locale={locale} />
      <ContactCta
        title={copy.contact.title}
        description={copy.contact.description}
        className='mt-16 md:mt-24'
        locale={locale}
      />
    </PageContainer>
  );
};
