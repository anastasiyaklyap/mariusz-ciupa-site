import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'advancedOpenWaterDiver',
  metadata: {
    title: 'SSI Advanced Open Water Diver London | £395, Five Specialties',
    description:
      'Advanced Open Water Diver in London — five specialty dives including Deep Diving and Navigation, down to 30 metres. Open Water certification required, minimum age 12.',
  },
});

export { metadata };
export default Page;
