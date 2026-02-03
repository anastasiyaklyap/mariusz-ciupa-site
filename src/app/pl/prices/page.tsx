import { PricesPageClient } from '@/components/pages/PricesPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/prices',
  component: <PricesPageClient />,
  metadata: {
    title: 'Cennik kursów nurkowania | Kursy SSI – Mariusz Ciupa',
    description:
      'Sprawdź ceny kursów nurkowania SSI – od poziomu podstawowego po techniczny i profesjonalny. Jasne koszty oraz opcjonalne dodatki. Skontaktuj się po szczegóły.',
  },
});

export { metadata };
export default Page;
