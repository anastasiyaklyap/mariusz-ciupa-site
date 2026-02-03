'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { defaultLocale, getLocaleFromPathname } from '@/lib/i18n';

export const HtmlLangSync = () => {
  const pathname = usePathname();

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const rawPathname =
      basePath && pathname.startsWith(basePath)
        ? pathname.slice(basePath.length) || '/'
        : pathname;
    const locale = getLocaleFromPathname(rawPathname) ?? defaultLocale;
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
};
