import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'en',
  course: 'extendedRange',
  parentCategory: 'technical',
  metadata: {
    title: 'SSI Extended Range Course in London | £550, to 45 m',
    description: 'SSI Extended Range in London — planned decompression dives to 45 metres in a twinset or sidemount, £550. Deep and Nitrox required. Training at Vobster Quay.',
  },
});

export { metadata };
export default Page;
