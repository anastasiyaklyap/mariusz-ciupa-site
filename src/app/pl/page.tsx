import HomePageClient from '@/app/HomePageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/',
  component: <HomePageClient localeOverride='pl' />,
  metadata: {
    title:
      'Instruktor nurkowania UK | Kursy SSI (od podstaw do technicznych) – Mariusz Ciupa',
    description:
      'Indywidualne szkolenia nurkowe w Wielkiej Brytanii, na Lanzarote i w Polsce. Kursy SSI od podstaw do poziomu technicznego oraz freediving. Zapytaj o dostępność.',
  },
});

export { metadata };
export default Page;
