import { UpdatesPageClient } from '@/components/pages/UpdatesPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/updates',
  component: <UpdatesPageClient />,
});

export { metadata };
export default Page;
