import { FaqPageClient } from '@/components/pages/FaqPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';
import { buildFaqSchema } from '@/lib/structuredData';

const { metadata, Page } = createLocalePage({
  locale: 'en',
  pathname: '/faq',
  component: <FaqPageClient />,
  breadcrumbLabel: 'Scuba Diving Course FAQ',
  structuredData: [buildFaqSchema('en')],
  metadata: {
    title: 'Scuba Diving Course FAQ | Cost, Age Limits & Certification',
    description:
      'How much an SSI course costs in London, the minimum age of 10, health and swimming requirements, how long Open Water Diver takes and whether the certification expires.',
  },
});

export { metadata };
export default Page;
