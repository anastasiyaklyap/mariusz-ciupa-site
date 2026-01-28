import type { RefObject } from 'react';
import { HeaderCta } from './HeaderCta';
import type { HeaderCtaLink, HeaderNavLink } from './headerLinks';

type HeaderMobileMenuProps = {
  menuRef: RefObject<HTMLDivElement | null>;
  links: HeaderNavLink[];
  cta: HeaderCtaLink;
  onClose: () => void;
};

export const HeaderMobileMenu = ({
  menuRef,
  links,
  cta,
  onClose,
}: HeaderMobileMenuProps) => {
  return (
    <div
      ref={menuRef}
      className='border-t border-white/10 bg-[#0B1220]/70 backdrop-blur md:hidden'
    >
      <div className='mx-auto max-w-6xl px-6 py-5'>
        <div className='flex flex-col gap-2 text-sm text-white/85'>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className='rounded-xl px-3 py-3 transition hover:bg-white/5'
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}

          <div className='mt-3'>
            <HeaderCta
              href={cta.href}
              label={cta.label}
              variant='mobile'
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
