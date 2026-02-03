import { Suspense } from 'react';
import { CookiePolicyPageClient } from './CookiePolicyPageClient';

const CookiePolicyPage = () => (
  <Suspense fallback={null}>
    <CookiePolicyPageClient />
  </Suspense>
);

export default CookiePolicyPage;
