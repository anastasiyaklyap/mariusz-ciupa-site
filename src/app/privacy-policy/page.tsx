import { Suspense } from 'react';
import { PrivacyPolicyPageClient } from './PrivacyPolicyPageClient';

const PrivacyPolicyPage = () => (
  <Suspense fallback={null}>
    <PrivacyPolicyPageClient />
  </Suspense>
);

export default PrivacyPolicyPage;
