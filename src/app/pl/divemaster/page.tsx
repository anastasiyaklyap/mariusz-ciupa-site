import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'pl',
  course: 'divemaster',
  parentCategory: null,
  metadata: {
    title: 'Kurs SSI Divemaster w Londynie | Nurkowanie zawodowo',
    description:
      'Szkolenie na SSI Divemaster w Londynie — pierwszy stopień zawodowy. Wymagania wstępne, przebieg programu, £600 i ścieżka instruktorska.',
  },
});

export { metadata };
export default Page;
