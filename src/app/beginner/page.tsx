'use client';

import { useEffect, useRef, useState } from 'react';

import { siteConfig } from '@/lib/siteConfig';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

type CourseCard = {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  tag?: string;
};

const beginnerCourses: CourseCard[] = [
  {
    title: 'Try Scuba',
    description:
      'A first, guided experience underwater. Perfect if you want to try scuba before committing to a full certification course.',
    imageSrc: '/images/courses/try-scuba.jpg',
    tag: 'Intro',
  },
  {
    title: 'SSI Open Water Diver',
    description:
      'Become a certified Open Water Diver with SSI. This globally recognized certification program is the best way to begin your lifelong adventures as a certified scuba diver. Personalized training is combined with in-water practice sessions to ensure you have the skills and experience required to become truly comfortable underwater. You will earn the SSI Open Water Diver certification.',
    imageSrc: '/images/courses/open-water.jpg',
    tag: 'Certification',
  },
  {
    title: 'Advanced Open Water Diver',
    description:
      'Build confidence and expand your skills with structured training dives focused on improving control, awareness and comfort in different conditions.',
    imageSrc: '/images/courses/advanced-open-water.jpg',
    tag: 'Next step',
  },
];

const BeginnerCoursesPage = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const descRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const [canExpand, setCanExpand] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const check = () => {
      const next: Record<string, boolean> = {};

      Object.entries(descRefs.current).forEach(([key, el]) => {
        if (!el) return;
        // jeśli tekst jest ucięty (line-clamp), scrollHeight będzie większe niż clientHeight
        next[key] = el.scrollHeight > el.clientHeight + 1;
      });

      setCanExpand(next);
    };

    // po pierwszym renderze + po załadowaniu fontów/obrazków
    const t = window.setTimeout(check, 50);
    window.addEventListener('resize', check);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <div className='mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28 md:pb-16'>
      <section className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12'>
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-[#24C6D9]/10 via-transparent to-transparent' />

        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          COURSES
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
          Beginner Diving Courses
        </h1>
        <p className='mt-4 max-w-2xl text-white/75'>
          Start from zero, learn the basics step by step, and build calm,
          confident diving skills with a safety-first approach.
        </p>

        <div className='mt-8 flex flex-wrap gap-3 text-xs text-white/70'>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>
            No experience needed
          </span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>
            Small groups
          </span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>
            UK · Lanzarote · Poland
          </span>
        </div>
      </section>

      {/* Courses list */}
      <section className='mt-12 md:mt-16'>
        <div className='grid gap-6 md:grid-cols-3'>
          {beginnerCourses.map((course) => {
            const isOpen = !!expanded[course.title];

            return (
              <article
                key={course.title}
                className='group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-white/20'
              >
                <div className='relative'>
                  <div className='aspect-[16/10]'>
                    <Image
                      src={assetPath(course.imageSrc)}
                      alt={course.title}
                      fill
                      className='object-cover'
                    />
                  </div>

                  {/* Stronger readability overlay */}
                  <div className='pointer-events-none absolute inset-0 bg-black/10' />
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent' />

                  <div className='absolute left-5 top-5'>
                    <span className='rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md shadow-sm'>
                      {course.tag ?? 'Course'}
                    </span>
                  </div>

                  <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h2 className='text-lg font-semibold'>{course.title}</h2>
                  </div>
                </div>

                <div className='flex flex-1 flex-col p-5'>
                  <p
                    ref={(el) => {
                      descRefs.current[course.title] = el;
                    }}
                    className={`text-sm leading-relaxed text-white/75 ${
                      isOpen ? '' : 'line-clamp-4'
                    }`}
                  >
                    {course.description}
                  </p>

                  {canExpand[course.title] ? (
                    <button
                      type='button'
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [course.title]: !prev[course.title],
                        }))
                      }
                      className='mt-3 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24C6D9]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]'
                    >
                      {isOpen ? 'Show less' : 'Read more'}
                    </button>
                  ) : null}

                  <div className='mt-auto pt-6'>
                    <a
                      href='#contact'
                      className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10'
                    >
                      Ask about availability{' '}
                      <span className='text-white/60'>→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact CTA (reuse style from home) */}
      <section id='contact' className='mt-16 md:mt-24'>
        <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12'>
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-[#24C6D9]/10 via-transparent to-transparent' />

          <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
            CONTACT
          </p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
            Want to start with beginner training?
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-white/75 sm:text-base'>
            Tell me your level, preferred location and dates — I’ll suggest the
            best first steps for you.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4'>
            <a
              href={`mailto:${siteConfig.email}`}
              className='w-full sm:w-auto rounded-full bg-[#24C6D9] px-6 py-3 text-sm font-medium text-[#07101A] transition hover:opacity-90'
            >
              Email me
            </a>

            <a
              href={siteConfig.socials.instagram}
              className='w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10'
            >
              Instagram
            </a>

            <a
              href={siteConfig.socials.facebook}
              className='w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10'
            >
              Facebook
            </a>
          </div>

          <div className='mt-8 h-px w-full bg-white/10' />
          <div className='mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between'>
            <p>Typical response time: 24–48h</p>
            <p>UK · Lanzarote · Poland</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeginnerCoursesPage;
