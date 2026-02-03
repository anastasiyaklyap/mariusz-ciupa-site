'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { type Consent, STORAGE_KEY } from '@/lib/cookieConsent';

type AnalyticsContextValue = {
  consent: Consent | null;
  setConsent: (consent: Consent) => void;
};

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

export const AnalyticsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [consent, setConsent] = useState<Consent | null>(null);
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored);
    }
  }, []);

  const value = useMemo(() => ({ consent, setConsent }), [consent]);

  return (
    <AnalyticsContext.Provider value={value}>
      {consent === 'granted' && measurementId ? (
        <GoogleAnalytics measurementId={measurementId} />
      ) : null}
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsConsent = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsConsent must be used within AnalyticsProvider');
  }
  return context;
};
