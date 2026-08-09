'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionSurface } from '@/components/sections/SectionSurface';
import { ContactCta } from '@/components/sections/ContactCta';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';
import { assetPath } from '@/lib/assetPath';

export const GalleryPageClient = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].gallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + copy.items.length) % copy.items.length,
      ),
    [copy.items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : copy.items[openIndex];

  return (
    <PageContainer>
      <Breadcrumbs
        locale={locale}
        items={[
          { name: siteCopy[locale].common.breadcrumbHome, path: '/' },
          { name: copy.title },
        ]}
      />

      <SectionSurface withGlow>
        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          {copy.eyebrow}
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
          {copy.title}
        </h1>
        <p className='mt-4 max-w-2xl text-white/75'>{copy.description}</p>
      </SectionSurface>

      <ul className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {copy.items.map((item, index) => (
          <li key={item.src}>
            <button
              type='button'
              onClick={() => setOpenIndex(index)}
              className='group block w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24C6D9]/60'
            >
              <div className='relative aspect-[4/3] w-full'>
                <Image
                  src={assetPath(item.src)}
                  alt={item.alt}
                  fill
                  className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                    'focus' in item && item.focus === 'top' ? 'object-top' : ''
                  }`}
                />
              </div>
              <div className='p-4 text-sm text-white/75'>
                {item.place ? (
                  <span className='mb-1 block text-xs uppercase tracking-[0.16em] text-[#24C6D9]'>
                    {item.place}
                  </span>
                ) : null}
                {item.caption}
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role='dialog'
          aria-modal='true'
          aria-label={active.alt}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm'
          onClick={close}
        >
          <div
            className='max-h-full w-full max-w-4xl overflow-auto'
            onClick={(event) => event.stopPropagation()}
          >
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl'>
              <Image
                src={assetPath(active.src)}
                alt={active.alt}
                fill
                className='object-contain'
              />
            </div>

            <div className='mt-4 flex items-start justify-between gap-6'>
              <p className='text-sm text-white/80'>{active.caption}</p>
              <div className='flex shrink-0 gap-2'>
                <button
                  type='button'
                  onClick={() => step(-1)}
                  aria-label='Previous'
                  className='rounded-full border border-white/20 px-3 py-1 text-white/80 transition hover:bg-white/10'
                >
                  ←
                </button>
                <button
                  type='button'
                  onClick={() => step(1)}
                  aria-label='Next'
                  className='rounded-full border border-white/20 px-3 py-1 text-white/80 transition hover:bg-white/10'
                >
                  →
                </button>
                <button
                  type='button'
                  onClick={close}
                  aria-label='Close'
                  className='rounded-full border border-white/20 px-3 py-1 text-white/80 transition hover:bg-white/10'
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <ContactCta
        title={siteCopy[locale].home.contact.title}
        description={siteCopy[locale].home.contact.description}
        className='mt-16 md:mt-24'
        locale={locale}
      />
    </PageContainer>
  );
};
