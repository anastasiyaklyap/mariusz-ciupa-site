import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'divemaster',
  parentCategory: null,
  metadata: {
    title: 'SSI Divemaster Course London | Become a Dive Professional',
    description:
      'Train to SSI Divemaster in London — the first professional rating in diving. Entry requirements, what the programme involves, £600, and where the instructor pathway goes next.',
  },
});

export { metadata };
export default Page;
