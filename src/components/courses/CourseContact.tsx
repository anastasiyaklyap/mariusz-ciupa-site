/* eslint-disable @next/next/no-html-link-for-pages */
import { siteConfig } from '@/lib/siteConfig';
import { HomeCtaLink } from '@/components/home/HomeCtaLink';

type CourseContactProps = {
  title: string;
  description: string;
};

export const CourseContact = ({ title, description }: CourseContactProps) => {
  return (
    <section id='contact' className='mt-16 md:mt-24'>
      <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12'>
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-[#24C6D9]/10 via-transparent to-transparent' />

        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          CONTACT
        </p>
        <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
          {title}
        </h2>
        <p className='mt-3 max-w-2xl text-sm text-white/75 sm:text-base'>
          {description}
        </p>

        <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4'>
          <HomeCtaLink
            href={`mailto:${siteConfig.email}`}
            className='w-full text-sm sm:w-auto'
          >
            Email me
          </HomeCtaLink>

          <HomeCtaLink
            href={siteConfig.socials.instagram}
            variant='ghost'
            className='w-full text-white/90 sm:w-auto'
          >
            Instagram
          </HomeCtaLink>

          <HomeCtaLink
            href={siteConfig.socials.facebook}
            variant='ghost'
            className='w-full text-white/90 sm:w-auto'
          >
            Facebook
          </HomeCtaLink>
        </div>

        <div className='mt-8 h-px w-full bg-white/10' />
        <div className='mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between'>
          <p>Typical response time: 24–48h</p>
          <p>UK · Lanzarote · Poland</p>
        </div>
      </div>
    </section>
  );
};
