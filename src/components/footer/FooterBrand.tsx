import { siteConfig } from '@/lib/siteConfig';

export const FooterBrand = () => {
  return (
    <div>
      <p className='text-sm font-semibold'>{siteConfig.name}</p>
      <p className='mt-1 text-sm text-white/60'>{siteConfig.role}</p>
    </div>
  );
};
