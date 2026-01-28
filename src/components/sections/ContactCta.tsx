/* eslint-disable @next/next/no-html-link-for-pages */
import classNames from 'classnames';
import { siteConfig } from '@/lib/siteConfig';
import { siteCopy } from '@/content/siteCopy';
import { CtaLink } from '@/components/ui/CtaLink';
import { SectionSurface } from './SectionSurface';

type ContactCtaProps = {
  title: string;
  description: string;
  className?: string;
  sectionId?: string;
};

export const ContactCta = ({
  title,
  description,
  className,
  sectionId = 'contact',
}: ContactCtaProps) => {
  const copy = siteCopy.en.common;
  return (
    <section
      id={sectionId}
      className={classNames('mt-24 md:mt-32', className)}
    >
      <SectionSurface withGlow>
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
          <CtaLink
            href={`mailto:${siteConfig.email}`}
            className='w-full text-sm sm:w-auto'
          >
            {copy.emailLabel}
          </CtaLink>

          {copy.social.map((link) => (
            <CtaLink
              key={link.label}
              href={siteConfig.socials[link.key]}
              variant='ghost'
              className='w-full text-white/90 sm:w-auto'
            >
              {link.label}
            </CtaLink>
          ))}
        </div>

        <div className='mt-8 h-px w-full bg-white/10' />
        <div className='mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between'>
          <p>{copy.responseTime}</p>
          <p>{copy.locations}</p>
        </div>
      </SectionSurface>
    </section>
  );
};
