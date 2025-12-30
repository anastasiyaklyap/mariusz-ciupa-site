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

          <div className='flex flex-wrap items-center gap-6'>
            <a
              href={siteConfig.socials.instagram}
              className='text-sm text-white/60 transition hover:text-white'
            >
              Instagram
            </a>

            <a
              href={siteConfig.socials.facebook}
              className='text-sm text-white/60 transition hover:text-white'
            >
              Facebook
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className='text-sm text-white/60 transition hover:text-white'
            >
              Email
            </a>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-2 text-xs text-white/40 md:flex-row md:items-center md:justify-between'>
          <p>
            © {new Date().getFullYear()} Mariusz Ciupa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
