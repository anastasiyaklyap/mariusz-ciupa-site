import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'pl',
  course: 'tryScuba',
  metadata: {
    title: 'Try Scuba Londyn | Pierwsze nurkowanie na basenie, £75',
    description:
      'Spróbuj nurkowania na basenie w Londynie za £75 — jedna sesja z instruktorem, bez certyfikatu i zobowiązań. Od 8 lat. Sprawdź, zanim wykupisz kurs.',
  },
});

export { metadata };
export default Page;
