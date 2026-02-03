import { CourseCategoryPageClient } from '@/components/pages/CourseCategoryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/technical',
  component: <CourseCategoryPageClient category='technical' />,
});

export { metadata };
export default Page;
