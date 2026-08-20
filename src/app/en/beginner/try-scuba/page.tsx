import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'tryScuba',
  metadata: {
    title: 'Try Scuba Diving London | First Pool Session, £75',
    description:
      'Try scuba diving in a London pool for £75 — one guided session, no certification, no commitment. From age 8. See if diving suits you first.',
  },
});

export { metadata };
export default Page;
