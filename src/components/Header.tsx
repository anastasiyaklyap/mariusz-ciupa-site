'use client';

import { useEffect, useRef, useState } from 'react';
import { linkPath } from '@/lib/linkPath';
import { withLocaleHref } from '@/lib/i18n';
import { HeaderBrand } from './header/HeaderBrand';
import { HeaderCta } from './header/HeaderCta';
import { LanguageSwitcher } from './header/LanguageSwitcher';
import { HeaderMenuButton } from './header/HeaderMenuButton';
import { HeaderMobileMenu } from './header/HeaderMobileMenu';
import { HeaderNavLink } from './header/HeaderNavLink';
import {
  getHeaderCtaLink,
  getHeaderNavLinks,
  headerSectionIds,
  type HeaderSectionId,
} from './header/headerLinks';
import { useLocale } from '@/hooks/useLocale';

export const Header = () => {
  const locale = useLocale();
  const headerNavLinks = getHeaderNavLinks(locale);
  const headerCtaLink = getHeaderCtaLink(locale);
  const handleLocaleChange = (nextLocale: string) => {
    if (typeof window === 'undefined') return;
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const rawPathname = window.location.pathname;
    const pathname = rawPathname.startsWith(basePath)
      ? rawPathname.slice(basePath.length) || '/'
      : rawPathname;
    const url = new URL(linkPath(pathname), window.location.origin);
    const params = new URLSearchParams(window.location.search);
    params.set('lang', nextLocale);
    url.search = params.toString();
    url.hash = window.location.hash;
    window.location.href = url.toString();
  };
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<HeaderSectionId | null>(
    null
  );

  useEffect(() => {
    const handleTop = () => {
      if (window.scrollY < 120) {
        setActiveSection(null);
      }
    };

    handleTop();
    window.addEventListener('scroll', handleTop, { passive: true });

    const elements = headerSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]?.target?.id) {
          const id = visible[0].target.id as HeaderSectionId;
          setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0.01,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleTop);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center gap-6 px-6 py-4'>
        <HeaderBrand href={withLocaleHref(linkPath('/'), locale)} />
        <div className='ml-auto flex items-center gap-3'>
          <nav className='hidden items-center gap-8 text-sm text-white/80 md:flex'>
            {headerNavLinks.map((link) => (
              <HeaderNavLink
                key={link.id}
                href={link.href}
                label={link.label}
                isActive={activeSection === link.id}
              />
            ))}
          </nav>

          <div className='hidden items-center gap-3 md:flex'>
            <HeaderCta href={headerCtaLink.href} label={headerCtaLink.label} />
            <LanguageSwitcher
              id='language-select'
              locale={locale}
              onChange={handleLocaleChange}
            />
          </div>
        </div>
        <div className='flex items-center gap-2 md:hidden'>
          <HeaderMenuButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((v) => !v)}
            locale={locale}
          />
          <LanguageSwitcher
            id='language-select-mobile'
            locale={locale}
            onChange={handleLocaleChange}
            size='sm'
          />
        </div>
      </div>

      {isMenuOpen ? (
        <HeaderMobileMenu
          menuRef={menuRef}
          links={headerNavLinks}
          cta={headerCtaLink}
          onClose={() => setIsMenuOpen(false)}
        />
      ) : null}
    </header>
  );
};
