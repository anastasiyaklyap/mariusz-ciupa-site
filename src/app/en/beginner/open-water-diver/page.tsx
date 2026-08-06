import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'openWaterDiver',
  metadata: {
    title: "SSI Open Water Diver Course in London | £550",
    description:
      "Get certified with the SSI Open Water Diver course in London — £550. Digital learning, pool sessions and four open water dives, taught one to one.",
  },
});

export { metadata };
export default Page;
