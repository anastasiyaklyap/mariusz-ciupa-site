import { GalleryPageClient } from '@/components/pages/GalleryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/gallery',
  component: <GalleryPageClient />,
  breadcrumbLabel: 'Nurkowanie z Mariuszem',
  metadata: {
    title: 'Galeria nurkowa | Stoney Cove, Vobster, Malta i Chorwacja',
    description:
      'Zdjęcia z prawdziwych dni szkoleniowych — kursy SSI na Stoney Cove, Wraysbury i Vobster Quay, zajęcia basenowe oraz nurkowania wyjazdowe na Malcie, w Chorwacji i na Lanzarote.',
  },
});

export { metadata };
export default Page;
