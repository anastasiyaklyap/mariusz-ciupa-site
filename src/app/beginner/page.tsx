'use client';

import { Suspense } from 'react';
import { CoursePage } from '@/components/courses/CoursePage';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';

const BeginnerCoursesContent = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].beginner;
  const common = siteCopy[locale].common;

  return (
    <CoursePage
      hero={{ ...copy.hero, tags: [...copy.hero.tags, common.locations] }}
      courses={copy.courses}
      contact={{ ...copy.contact, className: 'mt-16 md:mt-24' }}
      locale={locale}
    />
  );
};

const BeginnerCoursesPage = () => {
  return (
    <Suspense fallback={null}>
      <BeginnerCoursesContent />
    </Suspense>
  );
};

export default BeginnerCoursesPage;
