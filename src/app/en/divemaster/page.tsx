import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'divemaster',
  parentCategory: null,
  metadata: {
    title: 'SSI Divemaster Course London | Become a Dive Professional',
    description:
      'Train to SSI Divemaster in London — the first professional diving rating. Entry requirements, what the programme involves, £600, and next steps.',
  },
});

export { metadata };
export default Page;
