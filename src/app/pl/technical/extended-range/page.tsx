import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'pl',
  course: 'extendedRange',
  parentCategory: 'technical',
  metadata: {
    title: 'Kurs SSI Extended Range w Londynie | £550, do 45 m',
    description: 'SSI Extended Range w Londynie — nurkowania dekompresyjne do 45 metrów w twinsecie lub sidemouncie, £550. Wymaga Deep i Nitroksu. Szkolenie na Vobster Quay.',
  },
});

export { metadata };
export default Page;
