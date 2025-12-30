'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'courses' | 'about' | 'contact' | null
  >(null);

  useEffect(() => {
    const handleTop = () => {
      if (window.scrollY < 120) {
        setActiveSection(null);
      }
    };

    handleTop();
    window.addEventListener('scroll', handleTop, { passive: true });

    const ids = ['courses', 'about', 'contact'] as const;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // bierzemy te, które są widoczne i wybieramy tę najwyżej na stronie
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]?.target?.id) {
          const id = visible[0].target.id as (typeof ids)[number];
          setActiveSection(id);
        }
      },
      {
        // Dzięki temu "łapie" sekcję trochę wcześniej, a nie dopiero gdy nagłówek jest na jej środku
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
        <Link href='/' className='leading-tight'>
          <p className='text-sm font-semibold'>{siteConfig.name}</p>
          <p className='text-xs text-white/60'>{siteConfig.role}</p>
        </Link>
        <div className='ml-auto flex items-center gap-3'>
          <nav className='hidden items-center gap-8 text-sm text-white/80 md:flex'>
            <Link
              href='/#courses'
              className={[
                'bg-[linear-gradient(#24C6D9,#24C6D9)] bg-left-bottom bg-no-repeat pb-1',
                'bg-[length:0%_2px] text-white/75 transition-[background-size,color] duration-300',
                'hover:bg-[length:100%_2px] hover:text-white',
                'focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/40',
                activeSection === 'courses'
                  ? 'bg-[length:100%_2px] text-white'
                  : '',
              ].join(' ')}
            >
              Courses
            </Link>
            <Link
              href='/#about'
              className={[
                'bg-[linear-gradient(#24C6D9,#24C6D9)] bg-left-bottom bg-no-repeat pb-1',
                'bg-[length:0%_2px] text-white/75 transition-[background-size,color] duration-300',
                'hover:bg-[length:100%_2px] hover:text-white',
                'focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/40',
                activeSection === 'about'
                  ? 'bg-[length:100%_2px] text-white'
                  : '',
              ].join(' ')}
            >
              About
            </Link>
            <Link
              href='/#contact'
              className={[
                'bg-[linear-gradient(#24C6D9,#24C6D9)] bg-left-bottom bg-no-repeat pb-1',
                'bg-[length:0%_2px] text-white/75 transition-[background-size,color] duration-300',
                'hover:bg-[length:100%_2px] hover:text-white',
                'focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/40',
                activeSection === 'contact'
                  ? 'bg-[length:100%_2px] text-white'
                  : '',
              ].join(' ')}
            >
              Contact
            </Link>
          </nav>

          <div className='hidden md:flex'>
            <Link
              href='/#contact'
              className='rounded-full bg-[#24C6D9] px-5 py-2.5 text-sm font-medium text-[#07101A] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/50 focus:ring-offset-0'
            >
              Book / Ask
            </Link>
          </div>
        </div>
        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 md:hidden focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/40 focus:ring-offset-0'
          aria-label='Open menu'
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className='relative block h-4 w-5'>
            <span
              className={[
                'absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition',
                isMenuOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition',
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>
      </div>

      {/* Mobile dropdown (prosty, żeby nie psuć wyglądu) */}
      {isMenuOpen ? (
        <div
          ref={menuRef}
          className='border-t border-white/10 bg-[#0B1220]/70 backdrop-blur md:hidden'
        >
          <div className='mx-auto max-w-6xl px-6 py-5'>
            <div className='flex flex-col gap-2 text-sm text-white/85'>
              <Link
                href='/#courses'
                className='rounded-xl px-3 py-3 transition hover:bg-white/5'
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href='/#about'
                className='rounded-xl px-3 py-3 transition hover:bg-white/5'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href='/#contact'
                className='rounded-xl px-3 py-3 transition hover:bg-white/5'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className='mt-3'>
                <Link
                  href='/#contact'
                  className='inline-flex w-full items-center justify-center rounded-full bg-[#24C6D9] px-4 py-3 font-medium text-[#07101A] transition hover:opacity-90'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book / Ask
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
