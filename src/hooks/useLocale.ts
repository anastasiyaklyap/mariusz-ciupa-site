'use client';

import { useSearchParams } from 'next/navigation';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n';

export const useLocale = (): Locale => {
  const searchParams = useSearchParams();
  const value = searchParams.get('lang');
  const lang = value ?? undefined;

  if (isLocale(lang)) {
    return lang;
  }

  return defaultLocale;
};
