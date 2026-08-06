import { GalleryPageClient } from '@/components/pages/GalleryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/gallery',
  component: <GalleryPageClient />,
  breadcrumbLabel: 'Nurkowanie z Mariuszem',
  metadata: {
    title: 'Galeria nurkowa | Stoney Cove, Lanzarote i szkolenia',
    description:
      'Zdjęcia z prawdziwych dni szkoleniowych — kursy SSI na Stoney Cove, Wraysbury i Vobster Quay oraz zajęcia basenowe w Londynie.',
  },
});

export { metadata };
export default Page;
