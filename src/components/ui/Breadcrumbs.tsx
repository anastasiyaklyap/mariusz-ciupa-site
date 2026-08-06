/* eslint-disable @next/next/no-html-link-for-pages */
import { withLocaleHref, type Locale } from '@/lib/i18n';
import { linkPath } from '@/lib/linkPath';

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
  locale: Locale;
};

export const Breadcrumbs = ({ items, locale }: BreadcrumbsProps) => (
  <nav aria-label='Breadcrumb' className='mb-6'>
    <ol className='flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/50'>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <li key={item.name} className='flex items-center gap-2'>
            {item.path && !isLast ? (
              <a
                href={withLocaleHref(linkPath(item.path), locale)}
                className='transition hover:text-white/80 hover:underline underline-offset-4'
              >
                {item.name}
              </a>
            ) : (
              <span className='text-white/80' aria-current='page'>
                {item.name}
              </span>
            )}
            {!isLast ? (
              <span aria-hidden className='text-white/25'>
                /
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  </nav>
);
