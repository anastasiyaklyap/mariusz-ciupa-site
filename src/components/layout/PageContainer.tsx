import classNames from 'classnames';
import type { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={classNames(
        'mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28 md:pb-16',
        className,
      )}
    >
      {children}
    </div>
  );
};
