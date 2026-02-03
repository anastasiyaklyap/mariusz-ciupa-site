import { CookiePolicyPageClient } from '@/app/cookie-policy/CookiePolicyPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/cookie-policy',
  component: <CookiePolicyPageClient />,
});

export { metadata };
export default Page;
