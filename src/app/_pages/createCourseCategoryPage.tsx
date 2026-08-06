import type { Metadata } from 'next';
import { CourseCategoryPageClient } from '@/components/pages/CourseCategoryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';
import { siteCopy } from '@/content/siteCopy';
import { buildCourseListSchema } from '@/lib/structuredData';
import type { Locale } from '@/lib/i18n';

type CourseCategory = 'beginner' | 'speciality' | 'technical';

type CreateCourseCategoryPageOptions = {
  locale: Locale;
  category: CourseCategory;
  metadata: Metadata;
};

export const createCourseCategoryPage = ({
  locale,
  category,
  metadata,
}: CreateCourseCategoryPageOptions) => {
  const pathname = `/${category}`;
  const copy = siteCopy[locale][category];

  return createLocalePage({
    locale,
    pathname,
    component: <CourseCategoryPageClient category={category} />,
    metadata,
    breadcrumbLabel: copy.hero.title,
    structuredData: [buildCourseListSchema(locale, copy.courses, pathname)],
  });
};
