import classNames from 'classnames';
import { CtaLink } from '@/components/ui/CtaLink';
import { siteCopy } from '@/content/siteCopy';
import { siteConfig } from '@/lib/siteConfig';
import type { Locale } from '@/lib/i18n';

type TestimonialsProps = {
  locale: Locale;
  className?: string;
};

const Stars = ({ label }: { label: string }) => (
  <div className='flex gap-0.5' role='img' aria-label={label}>
    {[0, 1, 2, 3, 4].map((i) => (
      <svg
        key={i}
        viewBox='0 0 20 20'
        aria-hidden
        className='h-4 w-4 fill-[#FBBC04]'
      >
        <path d='M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z' />
      </svg>
    ))}
  </div>
);

export const Testimonials = ({ locale, className }: TestimonialsProps) => {
  const copy = siteCopy[locale].testimonials;

  return (
    <section
      id='reviews'
      className={classNames('mt-24 md:mt-32', className)}
    >
      <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
        {copy.eyebrow}
      </p>
      <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
        {copy.title}
      </h2>
      <p className='mt-3 max-w-2xl text-sm text-white/75 sm:text-base'>
        {copy.description}
      </p>

      <div className='mt-8 grid gap-4 md:grid-cols-3'>
        {copy.items.map((item) => (
          <figure
            key={item.author}
            className='flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6'
          >
            <Stars label={copy.title} />
            <blockquote className='mt-4 flex-1 text-sm leading-relaxed text-white/80'>
              {item.quote}
            </blockquote>
            <figcaption className='mt-5 border-t border-white/10 pt-4'>
              <span className='block text-sm font-semibold text-white'>
                {item.author}
              </span>
              <span className='mt-0.5 block text-xs text-white/45'>
                {item.meta}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6'>
        <CtaLink
          href={siteConfig.socials.googleBusiness}
          variant='outline'
          className='w-full sm:w-auto'
        >
          {copy.ctaLabel} <span aria-hidden>→</span>
        </CtaLink>
        <p className='text-xs text-white/45'>
          {copy.asOf.replace('{date}', siteConfig.reviewsCheckedAt[locale])}
        </p>
      </div>
    </section>
  );
};
