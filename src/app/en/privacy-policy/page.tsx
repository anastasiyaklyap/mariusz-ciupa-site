import { PrivacyPolicyPageClient } from '@/app/privacy-policy/PrivacyPolicyPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'en',
  pathname: '/privacy-policy',
  component: <PrivacyPolicyPageClient />,
});

export { metadata };
export default Page;
