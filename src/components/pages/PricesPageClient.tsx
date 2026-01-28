'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { SectionSurface } from '@/components/sections/SectionSurface';
import { ContactCta } from '@/components/sections/ContactCta';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';
import type { Locale } from '@/lib/i18n';

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

export const PricesPageClient = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].prices;

  return (
    <PageContainer>
      <SectionSurface withGlow>
        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          {copy.hero.eyebrow}
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
          {copy.hero.title}
        </h1>
        <p className='mt-4 max-w-2xl text-white/75'>{copy.hero.description}</p>

        <div className='mt-8 flex flex-wrap gap-3 text-xs text-white/70'>
          <span  className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>
            {copy.hero.badges[0]}
          </span>
          <a
            href='#prices-contact'
            className='inline-flex items-center rounded-full bg-[#24C6D9] px-3 py-1.5 text-[#07101A] transition hover:opacity-90'
          >
            {copy.hero.badges[1]}
          </a>
        </div>

      </SectionSurface>

      <div className='space-y-10 mt-12'>
        {copy.groups.map((group) => (
          <section key={group.title}>
            <div className='flex items-center gap-3 text-lg font-semibold'>
              <span className='text-[#24C6D9]'>▾</span>
              <h2>{group.title}</h2>
            </div>

            <div className='mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
              <div className='grid grid-cols-[minmax(0,1fr)_120px_180px] gap-4 border-b border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/50'>
                <span>{copy.table.course}</span>
                <span className='text-right'>{copy.table.price}</span>
                <span>{copy.table.extras}</span>
              </div>

              <div className='divide-y divide-white/10'>
                {group.items.map((item) => (
                  (() => {
                    const extras = 'extras' in item ? item.extras : undefined;

                    return (
                      <div
                        key={item.title}
                        className='grid grid-cols-[minmax(0,1fr)_120px_180px] items-center gap-4 px-5 py-4 text-sm text-white/85'
                      >
                        <span>{item.title}</span>
                        <span className='text-right text-base font-semibold text-white'>
                          {formatPrice(
                            item.price.amount,
                            item.price.currency,
                            locale,
                          )}
                        </span>
                        <div className='text-xs text-white/60'>
                          {extras?.length ? (
                            <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1'>
                              {extras.join(', ')}
                            </span>
                          ) : (
                            <span className='text-white/40'>—</span>
                          )}
                        </div>
                      </div>
                    );
                  })()
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className='mt-16 md:mt-24'>
        <ContactCta
          sectionId='prices-contact'
          title={copy.contact.title}
          description={copy.contact.description}
          locale={locale}
        />
      </div>
    </PageContainer>
  );
};
