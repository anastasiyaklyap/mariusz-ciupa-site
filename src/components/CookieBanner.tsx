'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';
import { withLocaleHref } from '@/lib/i18n';
import { linkPath } from '@/lib/linkPath';
import { type Consent, STORAGE_KEY } from '@/lib/cookieConsent';
import { useAnalyticsConsent } from '@/components/AnalyticsProvider';

export const CookieBanner = () => {
  const locale = useLocale();
  const copy = siteCopy[locale].common.cookieBanner;
  const { setConsent } = useAnalyticsConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored);
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, [setConsent]);

  const handleChoice = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, consent);
    setConsent(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-x-0 bottom-0 z-50 px-4 pb-6 pt-2 md:px-6'>
      <div className='mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0B1220]/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-semibold text-white'>{copy.title}</p>
            <p className='mt-1 text-sm text-white/70'>{copy.description}</p>
            <p className='mt-1 text-sm text-white/70'>
              {copy.learnMorePrefix}{' '}
              <Link
                className='text-white/85 transition hover:underline'
                href={withLocaleHref(linkPath('/privacy-policy'), locale)}
              >
                {copy.privacyPolicyLabel}
              </Link>{' '}
              {copy.conjunctionLabel}{' '}
              <Link
                className='text-white/85 transition hover:underline'
                href={withLocaleHref(linkPath('/cookie-policy'), locale)}
              >
                {copy.cookiePolicyLabel}
              </Link>
              .
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <button
              className='rounded-full bg-[#37E0C8] px-4 py-2 text-sm font-semibold text-[#04111A] transition hover:bg-[#4EEAD5]'
              onClick={() => handleChoice('granted')}
              type='button'
            >
              {copy.acceptLabel}
            </button>
            <button
              className='rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white'
              onClick={() => handleChoice('denied')}
              type='button'
            >
              {copy.rejectLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
