import { CtaLink } from '@/components/ui/CtaLink';
import { siteCopy } from '@/content/siteCopy';
import { linkPath } from '@/lib/linkPath';
import { withLocaleHref, type Locale } from '@/lib/i18n';

type HomeCoursePickerProps = {
  locale: Locale;
};

export const HomeCoursePicker = ({ locale }: HomeCoursePickerProps) => {
  const copy = siteCopy[locale].home.coursePicker;

  return (
    <section className='mt-16 md:mt-20' id='course-picker'>
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
          <div
            key={item.courseTitle}
            className='flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6'
          >
            <p className='text-base font-medium leading-snug text-[#24C6D9]'>
              „{item.question}"
            </p>

            <div className='mt-5 flex items-baseline justify-between gap-3 border-t border-white/10 pt-5'>
              <span className='font-semibold text-white'>
                {item.courseTitle}
              </span>
              <span className='text-sm text-white/60'>{item.priceLabel}</span>
            </div>

            <p className='mt-3 flex-1 text-sm leading-relaxed text-white/70'>
              {item.blurb}
            </p>

            <div className='mt-6'>
              <CtaLink
                href={withLocaleHref(linkPath(item.href), locale)}
                variant='outline'
                size='sm'
                className='w-full'
              >
                {item.ctaLabel} <span aria-hidden>→</span>
              </CtaLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
