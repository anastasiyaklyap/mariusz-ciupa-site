import type { Metadata } from 'next';
import { CourseDetailPageClient } from '@/components/pages/CourseDetailPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';
import { siteCopy } from '@/content/siteCopy';
import { buildCourseSchema } from '@/lib/structuredData';
import type { Locale } from '@/lib/i18n';

type CreateCourseDetailPageOptions = {
  locale: Locale;
  course: 'openWaterDiver';
  metadata: Metadata;
};

export const createCourseDetailPage = ({
  locale,
  course,
  metadata,
}: CreateCourseDetailPageOptions) => {
  const copy = siteCopy[locale].courseDetail[course];
  const pathname = `/beginner/${copy.slug}`;

  return createLocalePage({
    locale,
    pathname,
    component: <CourseDetailPageClient course={course} />,
    metadata,
    breadcrumbParents: [
      { name: siteCopy[locale].beginner.hero.title, path: '/beginner' },
    ],
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
