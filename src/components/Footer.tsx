import { siteConfig } from '@/lib/siteConfig';
export const Footer = () => {
  return (
    <footer className='mt-16 border-t border-white/10 md:mt-24'>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-semibold'>{siteConfig.name}</p>
            <p className='mt-1 text-sm text-white/60'>{siteConfig.role}</p>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <a
              href={siteConfig.socials.instagram}
              className='rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10'
            >
              Instagram
            </a>
            <a
              href={siteConfig.socials.facebook}
              className='rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10'
            >
              Facebook
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className='rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10'
            >
              Email
            </a>

            <a
              href='#'
              className='rounded-xl bg-[#24C6D9] px-4 py-2 text-sm font-medium text-[#07101A] transition hover:opacity-90'
            >
              Back to top ↑
            </a>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-2 text-xs text-white/45 md:flex-row md:items-center md:justify-between'>
          <p>
            © {new Date().getFullYear()} Mariusz Ciupa. All rights reserved.
          </p>
          <p>Cookies & privacy – placeholder (we’ll link real policy later).</p>
        </div>
      </div>
    </footer>
  );
};
