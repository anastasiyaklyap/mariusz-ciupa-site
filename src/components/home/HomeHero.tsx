/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import { linkPath } from '@/lib/linkPath';
import { siteConfig } from '@/lib/siteConfig';
import { CtaLink } from '@/components/ui/CtaLink';
import { siteCopy } from '@/content/siteCopy';
import type { Locale } from '@/lib/i18n';
import { withLocaleHref } from '@/lib/i18n';

type HomeHeroProps = {
  locale: Locale;
};

export const HomeHero = ({ locale }: HomeHeroProps) => {
  const copy = siteCopy[locale].home.hero;
  const common = siteCopy[locale].common;
  return (
    <section className='relative overflow-hidden rounded-3xl'>
      <div className='relative grid gap-8 p-6 md:grid-cols-2 md:items-center md:gap-10 md:p-12'>
        <div>
          <h1 className='mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl'>
            {copy.titlePrimary}{' '}
            <span className='text-[#24C6D9]'>{copy.titleAccent}</span>
          </h1>

          <p className='mt-4 max-w-xl text-sm text-white/75 sm:text-base'>
            {copy.subtitle}
          </p>
          <p className='mt-6 text-sm text-white/60'>
            {common.locations} · {siteConfig.role}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
            <CtaLink
              href={withLocaleHref(linkPath('/#courses'), locale)}
              className='w-full sm:w-auto'
            >
              {copy.ctaPrimary}
            </CtaLink>

            <CtaLink
              href={withLocaleHref(linkPath('/#contact'), locale)}
              variant='outline'
              className='w-full sm:w-auto'
            >
              {copy.ctaSecondary}
            </CtaLink>
          </div>
        </div>

        <div className='order-first md:order-none relative overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
          <div className='relative aspect-[16/10] md:aspect-[4/5] w-full'>
            <Image
              src={assetPath('/images/hero.jpg')}
              alt={copy.imageAlt}
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />

          <div className='absolute bottom-0 left-0 right-0 p-6'>
            <p className='text-sm text-white/70'>{copy.captionEyebrow}</p>
            <p className='mt-1 text-lg font-semibold'>{copy.captionTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
