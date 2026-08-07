import { FaqPageClient } from '@/components/pages/FaqPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';
import { buildFaqSchema } from '@/lib/structuredData';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/faq',
  component: <FaqPageClient />,
  breadcrumbLabel: 'Kursy nurkowania — częste pytania',
  structuredData: [buildFaqSchema('pl')],
  metadata: {
    title: 'Kursy nurkowania — częste pytania | Cena, wiek, certyfikat',
    description:
      'Ile kosztuje kurs SSI w Londynie, od jakiego wieku można nurkować, wymagania zdrowotne i pływackie, ile trwa Open Water Diver i czy certyfikat traci ważność.',
  },
});

export { metadata };
export default Page;
