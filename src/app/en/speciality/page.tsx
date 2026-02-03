import { CourseCategoryPageClient } from '@/components/pages/CourseCategoryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'en',
  pathname: '/speciality',
  component: <CourseCategoryPageClient category='speciality' />,
});

export { metadata };
export default Page;
