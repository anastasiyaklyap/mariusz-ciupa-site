import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'pl',
  course: 'advancedOpenWaterDiver',
  metadata: {
    title: 'SSI Advanced Open Water Diver Londyn | £395, pięć specjalizacji',
    description:
      'Advanced Open Water Diver w Londynie — pięć nurkowań specjalizacyjnych, w tym głębokie i nawigacja, do 30 metrów. Wymagany certyfikat Open Water, wiek od 12 lat.',
  },
});

export { metadata };
export default Page;
