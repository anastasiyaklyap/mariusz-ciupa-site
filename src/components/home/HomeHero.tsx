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
  return (
    <section className='relative overflow-hidden rounded-3xl'>
      <div className='relative grid gap-8 p-6 md:grid-cols-2 md:items-center md:gap-10 md:p-12'>
        <div>
          <h1 className='mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl'>
            {copy.titlePrimary}{' '}
            <span className='text-[#24C6D9]'>{copy.titleAccent}</span>
            <span className='mt-2 block text-xl font-medium text-white/85 sm:text-2xl md:text-3xl'>
              {copy.withInstructor}
            </span>
            <span className='mt-3 block text-sm font-normal tracking-tight text-white/60 sm:text-base'>
              {copy.titleTagline}
            </span>
          </h1>

          <p className='mt-5 inline-flex items-center rounded-full border border-[#24C6D9]/40 bg-[#24C6D9]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#24C6D9]'>
            {siteConfig.role}
          </p>

          <p className='mt-4 max-w-xl text-sm text-white/75 sm:text-base'>
            {copy.subtitle}
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
          <div className='relative w-full md:aspect-[2/3]'>
            <Image
              src={assetPath('/images/hero-mobile.jpeg')}
              alt={copy.imageAlt}
              width={1536}
              height={1024}
              className='h-auto w-full object-cover md:hidden'
              priority
            />
            <Image
              src={assetPath('/images/hero.jpeg')}
              alt={copy.imageAlt}
              fill
              className='hidden object-cover md:block'
              priority
            />
          </div>

          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 md:via-transparent to-transparent' />

          <div className='absolute bottom-0 left-0 right-0 p-6'>
            <p className='text-xs md:text-sm text-white/70'>{copy.captionEyebrow}</p>
            <p className='mt-1 text-sm md:text-lg font-semibold'>{copy.captionTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
