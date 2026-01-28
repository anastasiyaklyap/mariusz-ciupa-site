/* eslint-disable @next/next/no-html-link-for-pages */
import { linkPath } from '@/lib/linkPath';
import { HomeCourseCard, type CourseCardData } from './HomeCourseCard';
import { HomeCtaLink } from './HomeCtaLink';

const courses: CourseCardData[] = [
  {
    title: 'Beginner',
    desc: 'Start from zero. Learn the basics, build confidence, get certified.',
    tag: 'Perfect first step',
    imageSrc: '/images/courses-beginner.jpg',
    link: '/beginner',
  },
  {
    title: 'Specialty',
    desc: 'Improve skills with focused courses like buoyancy, navigation or night diving.',
    tag: 'Build experience',
    imageSrc: '/images/courses-specialty.jpg',
    link: '#',
  },
  {
    title: 'Technical',
    desc: 'Advanced training for deeper dives, procedures and serious planning.',
    tag: 'Go beyond limits',
    imageSrc: '/images/courses-technical.jpg',
    link: '#',
  },
];

export const HomeCourses = () => {
  return (
    <section id='courses' className='mt-24 md:mt-32'>
      <div className='flex items-end justify-between gap-6'>
        <div>
          <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
            COURSES
          </p>

          <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
            Diving courses
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-white/70 sm:text-base'>
            Choose your level and grow step by step — from your first
            certification to technical training.
          </p>
        </div>

        <HomeCtaLink
          href={linkPath('/#contact')}
          variant='ghost'
          size='sm'
          className='hidden md:inline-flex'
        >
          Ask about availability
        </HomeCtaLink>
      </div>

      <div className='relative mt-10 -mx-6 md:mx-0'>
        <p className='mt-6 text-xs text-white/50 md:hidden'>
          Swipe to explore →
        </p>
        <div className='courses-scroll flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto px-6 pb-4 md:grid md:snap-none md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0'>
          {courses.map((card) => (
            <HomeCourseCard key={card.title} {...card} />
          ))}
        </div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B1220] to-transparent md:hidden' />
      </div>

      <div className='mt-8 md:hidden'>
        <HomeCtaLink
          href={linkPath('/#contact')}
          variant='ghost'
          size='sm'
          className='w-full py-3'
        >
          Ask about availability
        </HomeCtaLink>
      </div>
    </section>
  );
};
