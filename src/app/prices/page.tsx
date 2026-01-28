'use client';

import { Suspense } from 'react';
import { PricesPageClient } from '@/components/pages/PricesPageClient';

const PricesPageContent = () => {
  return <PricesPageClient />;
};

const PricesPage = () => {
  return (
    <Suspense fallback={null}>
      <PricesPageContent />
    </Suspense>
  );
};

export default PricesPage;
