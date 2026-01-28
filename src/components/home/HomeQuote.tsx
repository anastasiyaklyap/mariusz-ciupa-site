import { siteCopy } from '@/content/siteCopy';
import type { Locale } from '@/lib/i18n';

type HomeQuoteProps = {
  locale: Locale;
};

export const HomeQuote = ({ locale }: HomeQuoteProps) => {
  const lines = siteCopy[locale].home.quote.lines;
  return (
    <section className='mt-10 md:mt-12'>
      <div className='mx-auto max-w-[90%] text-center px-2'>
        <div className='mx-auto mb-10 h-px w-16 bg-white/15' />
        <blockquote className='text-lg italic leading-relaxed text-white/80 md:text-xl'>
          {lines[0]}
          <br />
          {lines[1]}
          <br />
        </blockquote>
      </div>
    </section>
  );
};
