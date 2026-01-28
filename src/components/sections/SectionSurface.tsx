import classNames from 'classnames';
import type { ReactNode } from 'react';

type SectionSurfaceProps = {
  children: ReactNode;
  className?: string;
  paddingClassName?: string;
  withGlow?: boolean;
};

export const SectionSurface = ({
  children,
  className,
  paddingClassName = 'p-8 md:p-12',
  withGlow = false,
}: SectionSurfaceProps) => {
  return (
    <div
      className={classNames(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5',
        paddingClassName,
        className,
      )}
    >
      {withGlow ? (
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-[#24C6D9]/10 via-transparent to-transparent' />
      ) : null}
      {children}
    </div>
  );
};
