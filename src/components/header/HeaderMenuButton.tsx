import classNames from 'classnames';
import { siteCopy } from '@/content/siteCopy';
import type { Locale } from '@/lib/i18n';

type HeaderMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
  locale: Locale;
};

export const HeaderMenuButton = ({
  isOpen,
  onToggle,
  locale,
}: HeaderMenuButtonProps) => {
  const copy = siteCopy[locale].common;
  return (
    <button
      type='button'
      className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 md:hidden focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/40 focus:ring-offset-0'
      aria-label={copy.menuOpenLabel}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <span className='relative block h-4 w-5'>
        <span
          className={classNames(
            'absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition',
            {
              'translate-y-[7px] rotate-45': isOpen,
            },
          )}
        />
        <span
          className={classNames(
            'absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition',
            {
              'opacity-0': isOpen,
              'opacity-100': !isOpen,
            },
          )}
        />
        <span
          className={classNames(
            'absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition',
            {
              '-translate-y-[7px] -rotate-45': isOpen,
            },
          )}
        />
      </span>
    </button>
  );
};
