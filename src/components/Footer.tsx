import { siteConfig } from '@/lib/siteConfig';
import { FooterBrand } from './footer/FooterBrand';
import { FooterLink } from './footer/FooterLink';
import { footerLinks } from './footer/footerLinks';

export const Footer = () => {
  return (
    <footer className='mt-16 border-t border-white/10 md:mt-24'>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
          <FooterBrand />
          <div className='flex flex-wrap items-center gap-6'>
            {footerLinks.map((link) => (
              <FooterLink
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>
        <div className='mt-8 flex flex-col gap-2 text-xs text-white/40 md:flex-row md:items-center md:justify-between'>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
