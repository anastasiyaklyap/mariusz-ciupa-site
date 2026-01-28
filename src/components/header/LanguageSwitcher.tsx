import classNames from 'classnames';
import type { Locale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import { siteCopy } from '@/content/siteCopy';

type LanguageSwitcherProps = {
  locale: Locale;
  onChange: (locale: string) => void;
  id: string;
  size?: 'sm' | 'md';
  className?: string;
};

const sizeClassNames: Record<NonNullable<LanguageSwitcherProps['size']>, string> = {
  md: 'px-3 py-2 text-xs',
  sm: 'px-2 py-2 text-xs',
};

export const LanguageSwitcher = ({
  locale,
  onChange,
  id,
  size = 'md',
  className,
}: LanguageSwitcherProps) => {
  const copy = siteCopy[locale].common;

  return (
    <div className={classNames('relative', className)}>
      <label className='sr-only' htmlFor={id}>
        {copy.languageLabel}
      </label>
      <select
        id={id}
        className={classNames(
          'rounded-full border border-white/15 bg-[#0B1220] text-white/90 transition hover:bg-white/10',
          'appearance-none pr-7',
          sizeClassNames[size],
        )}
        value={locale}
        onChange={(event) => onChange(event.target.value)}
      >
        {locales.map((value) => (
          <option key={value} value={value} className='bg-[#0B1220] text-white'>
            {value.toUpperCase()}
          </option>
        ))}
      </select>
      <span className='pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white/60'>
        ▾
      </span>
    </div>
  );
};
