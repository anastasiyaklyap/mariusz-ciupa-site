import { CtaLink } from '@/components/ui/CtaLink';
import { siteCopy } from '@/content/siteCopy';
import { linkPath } from '@/lib/linkPath';
import { withLocaleHref, type Locale } from '@/lib/i18n';

type HomeDiveSitesProps = {
  locale: Locale;
};

export const HomeDiveSites = ({ locale }: HomeDiveSitesProps) => {
  const copy = siteCopy[locale].home.diveSites;

  return (
    <section className='mt-24 md:mt-32' id='dive-sites'>
      <div className='rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12'>
        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          {copy.eyebrow}
        </p>
        <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
          {copy.title}
        </h2>
        <p className='mt-3 max-w-2xl text-sm text-white/75 sm:text-base'>
          {copy.description}
        </p>

        <dl className='mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2'>
          {copy.items.map((item) => (
            <div key={item.name}>
              <dt className='flex flex-wrap items-baseline gap-x-3'>
                <span className='font-semibold text-white'>{item.name}</span>
                <span className='text-xs text-[#24C6D9]'>{item.region}</span>
              </dt>
              <dd className='mt-1 text-sm leading-relaxed text-white/70'>
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        <div className='mt-10'>
          <CtaLink
            href={withLocaleHref(linkPath('/gallery'), locale)}
            variant='outline'
            className='w-full sm:w-auto'
          >
            {copy.ctaLabel} <span aria-hidden>→</span>
          </CtaLink>
        </div>
      </div>
    </section>
  );
};
