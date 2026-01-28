import classNames from 'classnames';

type HeaderNavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export const HeaderNavLink = ({
  href,
  label,
  isActive,
}: HeaderNavLinkProps) => {
  return (
    <a
      href={href}
      className={classNames(
        'bg-[linear-gradient(#24C6D9,#24C6D9)] bg-left-bottom bg-no-repeat pb-1',
        'bg-[length:0%_2px] text-white/75 transition-[background-size,color] duration-300',
        'hover:bg-[length:100%_2px] hover:text-white',
        'focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/40',
        {
          'bg-[length:100%_2px] text-white': isActive,
        },
      )}
    >
      {label}
    </a>
  );
};
