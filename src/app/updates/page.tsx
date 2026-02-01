'use client';

import { Suspense } from 'react';
import { UpdatesPageClient } from '@/components/pages/UpdatesPageClient';

const UpdatesPageContent = () => {
  return <UpdatesPageClient />;
};

const UpdatesPage = () => {
  return (
    <Suspense fallback={null}>
      <UpdatesPageContent />
    </Suspense>
  );
};

export default UpdatesPage;
