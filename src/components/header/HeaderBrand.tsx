import { siteConfig } from '@/lib/siteConfig';

type HeaderBrandProps = {
  href: string;
};

export const HeaderBrand = ({ href }: HeaderBrandProps) => {
  return (
    <a href={href} className='leading-tight'>
      <p className='text-sm font-semibold'>{siteConfig.name}</p>
      <p className='text-xs text-white/60'>{siteConfig.role}</p>
    </a>
  );
};
