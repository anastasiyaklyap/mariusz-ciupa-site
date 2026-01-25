type FooterLinkProps = {
  href: string;
  label: string;
};

export const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <a href={href} className='text-sm text-white/60 transition hover:text-white'>
      {label}
    </a>
  );
};
