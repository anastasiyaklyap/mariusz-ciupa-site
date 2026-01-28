import { siteCopy } from '@/content/siteCopy';

export const HomeQuote = () => {
  const lines = siteCopy.en.home.quote.lines;
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
