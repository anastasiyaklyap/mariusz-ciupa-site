type FooterLinkProps = {
  href: string;
  label: string;
};

export const FooterLink = ({ href, label }: FooterLinkProps) => {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      className='text-sm text-white/60 transition hover:text-white'
    >
      {label}
    </a>
  );
};
