/* eslint-disable @next/next/no-html-link-for-pages */
import { linkPath } from '@/lib/linkPath';
import { siteCopy } from '@/content/siteCopy';
import { HomeCourseCard, type CourseCardData } from './HomeCourseCard';
import { CtaLink } from '@/components/ui/CtaLink';

export const HomeCourses = () => {
  const copy = siteCopy.en.home.courses;
  const courses: readonly CourseCardData[] = copy.cards;

  return (
    <section id='courses' className='mt-24 md:mt-32'>
      <div className='flex items-end justify-between gap-6'>
        <div>
          <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
            {copy.eyebrow}
          </p>

          <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
            {copy.title}
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-white/70 sm:text-base'>
            {copy.description}
          </p>
        </div>

        <CtaLink
          href={linkPath('/#contact')}
          variant='ghost'
          size='sm'
          className='hidden md:inline-flex'
        >
          {copy.ctaLabel}
        </CtaLink>
      </div>

      <div className='relative mt-10 -mx-6 md:mx-0'>
        <p className='mt-6 text-xs text-white/50 md:hidden'>
          {copy.swipeHint}
        </p>
        <div className='courses-scroll flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto px-6 pb-4 md:grid md:snap-none md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0'>
          {courses.map((card) => (
            <HomeCourseCard
              key={card.title}
              exploreLabel={copy.exploreLabel}
              {...card}
            />
          ))}
        </div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B1220] to-transparent md:hidden' />
      </div>

      <div className='mt-8 md:hidden'>
        <CtaLink
          href={linkPath('/#contact')}
          variant='ghost'
          size='sm'
          className='w-full py-3'
        >
          {copy.ctaLabel}
        </CtaLink>
      </div>
    </section>
  );
};
