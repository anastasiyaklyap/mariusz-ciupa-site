'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  defaultLocale,
  isLocale,
  getLocaleFromPathname,
  type Locale,
} from '@/lib/i18n';

export const useLocale = (): Locale => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = searchParams.get('lang') ?? undefined;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const rawPathname =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || '/'
      : pathname;
  const pathLocale = getLocaleFromPathname(rawPathname);

  if (pathLocale) {
    return pathLocale;
  }

  if (isLocale(value)) {
    return value;
  }

  return defaultLocale;
};
