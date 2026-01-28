type HeaderCtaVariant = 'desktop' | 'mobile';

type HeaderCtaProps = {
  href: string;
  label: string;
  variant?: HeaderCtaVariant;
  onClick?: () => void;
};

const desktopClassName =
  'rounded-full bg-[#24C6D9] px-5 py-2.5 text-sm font-medium text-[#07101A] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/50 focus:ring-offset-0';
const mobileClassName =
  'inline-flex w-full items-center justify-center rounded-full bg-[#24C6D9] px-4 py-3 font-medium text-[#07101A] transition hover:opacity-90';

export const HeaderCta = ({
  href,
  label,
  variant = 'desktop',
  onClick,
}: HeaderCtaProps) => {
  const className = variant === 'mobile' ? mobileClassName : desktopClassName;

  return (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  );
};
