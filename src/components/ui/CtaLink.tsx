import classNames from 'classnames';
import type { ReactNode } from 'react';

type CtaLinkVariant = 'primary' | 'outline' | 'ghost';
type CtaLinkSize = 'sm' | 'md';

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: CtaLinkVariant;
  size?: CtaLinkSize;
  className?: string;
};

const baseClassName =
  'inline-flex items-center justify-center rounded-full font-medium transition';

const sizeClassNames: Record<CtaLinkSize, string> = {
  md: 'px-6 py-3',
  sm: 'px-5 py-2.5 text-sm',
};

const variantClassNames: Record<CtaLinkVariant, string> = {
  primary: 'bg-[#24C6D9] text-[#07101A] hover:opacity-90',
  outline: 'border border-white/20 text-white hover:bg-white/5',
  ghost: 'border border-white/15 bg-white/5 text-white/85 hover:bg-white/10',
};

export const CtaLink = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: CtaLinkProps) => {
  return (
    <a
      href={href}
      className={classNames(
        baseClassName,
        sizeClassNames[size],
        variantClassNames[variant],
        className,
      )}
    >
      {children}
    </a>
  );
};
