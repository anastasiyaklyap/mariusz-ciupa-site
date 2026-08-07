import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'pl',
  course: 'divemaster',
  parentCategory: null,
  metadata: {
    title: 'Kurs SSI Divemaster w Londynie | Nurkowanie zawodowo',
    description:
      'Szkolenie na SSI Divemaster w Londynie — pierwszy stopień zawodowy w nurkowaniu. Wymagania wstępne, przebieg programu, £600 i co dalej na ścieżce instruktorskiej.',
  },
});

export { metadata };
export default Page;
