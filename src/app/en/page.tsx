import HomePageClient from '@/app/HomePageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'en',
  pathname: '/',
  component: <HomePageClient localeOverride='en' />,
  metadata: {
    title:
      'Scuba Diving Instructor UK | SSI Courses (Beginner to Technical) – Mariusz Ciupa',
    description:
      'Personal scuba diving training in the UK, Lanzarote and Poland. SSI courses from beginner to technical level, plus freediving. Ask about availability.',
  },
});

export { metadata };
export default Page;
