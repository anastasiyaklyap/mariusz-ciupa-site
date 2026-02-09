'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionSurface } from '@/components/sections/SectionSurface';
import { ContactCta } from '@/components/sections/ContactCta';
import { CtaLink } from '@/components/ui/CtaLink';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';
import { assetPath } from '@/lib/assetPath';
import { withLocaleHref } from '@/lib/i18n';

export const UpdatesPageClient = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].updates;
  const courseCardCopy = siteCopy[locale].courses.card;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const descRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const [canExpand, setCanExpand] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const check = () => {
      const next: Record<string, boolean> = {};

      Object.entries(descRefs.current).forEach(([key, el]) => {
        if (!el) return;
        next[key] = el.scrollHeight > el.clientHeight + 1;
      });

      setCanExpand(next);
    };

    const t = window.setTimeout(check, 50);
    window.addEventListener('resize', check);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('resize', check);
    };
  }, [copy.items]);

  return (
    <PageContainer>
      <SectionSurface withGlow>
        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          {copy.hero.eyebrow}
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
          {copy.hero.title}
        </h1>
        <p className='mt-4 text-white/75'>{copy.hero.description}</p>

        <div className='mt-8 flex flex-wrap gap-3 text-xs text-white/70'>
          {copy.hero.badges.map((badge, index) =>
            'cta' in badge && badge.cta ? (
              <a
                key={badge.label}
                href={`#${copy.contact.sectionId}`}
                className='inline-flex items-center rounded-full bg-[#24C6D9] px-3 py-1.5 text-[#07101A] transition hover:opacity-90'
              >
                {badge.label}
              </a>
            ) : (
              <span
                key={`${badge.label}-${index}`}
                className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'
              >
                {badge.label}
              </span>
            )
          )}
        </div>
      </SectionSurface>

      <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {copy.items.map((item) => {
          const isOpen = !!expanded[item.title];

          return (
            <article
              key={item.title}
              className='group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5'
            >
            <div className='relative aspect-square w-full overflow-hidden'>
              <Image
                src={assetPath(item.imageSrc)}
                alt={item.imageAlt}
                fill
                className='object-cover transition duration-500 group-hover:scale-[1.02]'
              />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent' />
            </div>

            <div className='flex flex-1 flex-col gap-3 p-6'>
              <p className='text-xs font-medium tracking-[0.18em] text-white/50'>
                {item.eyebrow}
              </p>
              <h2 className='text-lg font-semibold text-white'>{item.title}</h2>
              <p
                ref={(el) => {
                  descRefs.current[item.title] = el;
                }}
                className={`text-sm leading-5 text-white/70 whitespace-pre-line ${
                  isOpen ? '' : 'line-clamp-4'
                }`}
              >
                {item.description}
              </p>

              {canExpand[item.title] ? (
                <button
                  type='button'
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [item.title]: !prev[item.title],
                    }))
                  }
                  className='inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24C6D9]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]'
                >
                  {isOpen ? courseCardCopy.showLess : courseCardCopy.readMore}
                </button>
              ) : null}
              <div className='mt-auto flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center'>
                {item.linkLabel ? (
                  <CtaLink
                    href={withLocaleHref(item.linkHref, locale)}
                    variant='outline'
                    size='sm'
                    className='w-full sm:w-auto'
                  >
                    {item.linkLabel}
                  </CtaLink>
                ) : null}
                {'learnMoreLabel' in item &&
                'learnMoreHref' in item &&
                item.learnMoreLabel ? (
                  <CtaLink
                    href={item.learnMoreHref}
                    variant='ghost'
                    size='sm'
                    className='w-full sm:w-auto'
                  >
                    {item.learnMoreLabel}
                  </CtaLink>
                ) : null}
              </div>
            </div>
          </article>
          );
        })}
      </div>

      <ContactCta
        sectionId={copy.contact.sectionId}
        title={copy.contact.title}
        description={copy.contact.description}
        className='mt-16 md:mt-24'
        locale={locale}
      />
    </PageContainer>
  );
};
