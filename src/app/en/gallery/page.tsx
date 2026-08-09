import { GalleryPageClient } from '@/components/pages/GalleryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'en',
  pathname: '/gallery',
  component: <GalleryPageClient />,
  breadcrumbLabel: 'Diving with Mariusz',
  metadata: {
    title: 'Diving Gallery | Stoney Cove, Vobster, Malta & Croatia',
    description:
      'Photos from real training days — SSI courses at Stoney Cove, Wraysbury and Vobster Quay, pool sessions, and trip diving off Malta, Croatia and Lanzarote.',
  },
});

export { metadata };
export default Page;
