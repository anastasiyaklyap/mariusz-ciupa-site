import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'tryScuba',
  metadata: {
    title: 'Try Scuba Diving London | First Pool Session, £75',
    description:
      'Try scuba diving in a London pool for £75 — one guided session, no certification, no commitment. Open from age 8. Find out whether diving suits you before booking a course.',
  },
});

export { metadata };
export default Page;
