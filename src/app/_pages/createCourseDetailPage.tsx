import type { Metadata } from 'next';
import { CourseDetailPageClient } from '@/components/pages/CourseDetailPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';
import { siteCopy } from '@/content/siteCopy';
import { buildCourseSchema } from '@/lib/structuredData';
import type { Locale } from '@/lib/i18n';

type CreateCourseDetailPageOptions = {
  locale: Locale;
  course:
    | 'openWaterDiver'
    | 'divemaster'
    | 'tryScuba'
    | 'advancedOpenWaterDiver';
  metadata: Metadata;
  parentCategory?: 'beginner' | null;
};

export const createCourseDetailPage = ({
  locale,
  course,
  metadata,
  parentCategory = 'beginner',
}: CreateCourseDetailPageOptions) => {
  const copy = siteCopy[locale].courseDetail[course];
  const pathname = parentCategory
    ? `/${parentCategory}/${copy.slug}`
    : `/${copy.slug}`;

  return createLocalePage({
    locale,
    pathname,
    component: <CourseDetailPageClient course={course} />,
    metadata,
    breadcrumbParents: parentCategory
      ? [
          {
            name: siteCopy[locale][parentCategory].hero.title,
            path: `/${parentCategory}`,
          },
        ]
      : [],
    breadcrumbLabel: copy.title,
    structuredData: [
      buildCourseSchema(
        locale,
        { title: copy.title, description: copy.description, price: copy.price },
        pathname,
      ),
    ],
  });
};
