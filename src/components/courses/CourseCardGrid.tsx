'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { assetPath } from '@/lib/assetPath';
import { CtaLink } from '@/components/ui/CtaLink';

export type CourseCardData = {
  title: string;
  description: string;
  imageSrc: string;
  tag?: string;
};

type CourseCardGridProps = {
  courses: CourseCardData[];
  ctaLabel?: string;
  ctaHref?: string;
};

export const CourseCardGrid = ({
  courses,
  ctaLabel = 'Ask about availability',
  ctaHref = '#contact',
}: CourseCardGridProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const descRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const [canExpand, setCanExpand] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const check = () => {
      const next: Record<string, boolean> = {};

      Object.entries(descRefs.current).forEach(([key, el]) => {
        if (!el) return;
        next[key] = el.scrollHeight > el.clientHeight + 1;
      });

      setCanExpand(next);
    };

    const t = window.setTimeout(check, 50);
    window.addEventListener('resize', check);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('resize', check);
    };
  }, [courses]);

  return (
    <section className='mt-12 md:mt-16'>
      <div className='grid gap-6 md:grid-cols-3'>
        {courses.map((course) => {
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
                  <CtaLink
                    href={ctaHref}
                    variant='ghost'
                    size='sm'
                    className='gap-2 text-white/90'
                  >
                    {ctaLabel} <span className='text-white/60'>→</span>
                  </CtaLink>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
