/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import { linkPath } from '@/lib/linkPath';
import { HomeCtaLink } from './HomeCtaLink';

const highlights = [
  '10+ years experience',
  'SSI PRO XR',
  'Technical & recreational diving',
  'Europe & Canary Islands',
];

const locations = ['UK', 'Lanzarote', 'Poland'];

const partnerLogos = [
  { src: '/images/logo-bonito.png', alt: 'Bonito Diving Lanzarote' },
  { src: '/images/logo-scuba-tech.png', alt: 'Scuba Tech' },
  { src: '/images/logo-scubaelite.png', alt: 'Scuba Elite' },
];

export const HomeAbout = () => {
  return (
    <section className='mt-24 md:mt-32' id='about'>
      <div className='grid gap-8 md:grid-cols-2 md:items-center md:gap-12'>
        <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
          <div className='relative aspect-[3/2] w-full md:aspect-[4/5]'>
            <Image
              src={assetPath('/images/mariusz-ciupa.jpg')}
              alt='Mariusz Ciupa'
              fill
              className='object-cover'
              priority
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent' />
          </div>

          <div className='absolute bottom-0 left-0 right-0 p-6'>
            <p className='text-sm text-white/70'>About the instructor</p>
            <p className='mt-1 text-lg font-semibold'>
              Experience you can trust
            </p>
          </div>
        </div>

        <div>
          <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
            ABOUT
          </p>

          <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
            Hi, I’m Mariusz
          </h2>
          <p className='mt-4 text-white/75'>
            I help divers build skills in a calm and structured way — with a
            strong focus on safety, good habits and confidence in the water.
          </p>
          <p className='mt-4 text-white/75'>
            Whether you’re starting from zero or leveling up to technical
            training, we’ll choose the right path and pace for you.
          </p>

          <div className='mt-8 flex flex-wrap gap-2'>
            {highlights.map((item) => (
              <span
                key={item}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-white/20 hover:bg-white/10'
              >
                {item}
              </span>
            ))}
          </div>
          <div className='mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8'>
            <h3 className='text-lg font-semibold md:text-xl'>Where I teach</h3>
            <p className='mt-3 text-sm text-white/75'>
              I cooperate with selected dive centers in the United Kingdom,
              Lanzarote and Poland — so you can train and dive in different
              environments with continuity and trusted support.
            </p>

            <div className='mt-5 flex flex-wrap gap-2 text-xs text-white/70'>
              {locations.map((location) => (
                <span
                  key={location}
                  className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5'
                >
                  {location}
                </span>
              ))}
            </div>

            <div className='mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-4'>
              <div className='grid grid-cols-3 items-center gap-6'>
                {partnerLogos.map((logo) => (
                  <div key={logo.src} className='flex items-center justify-center'>
                    <div className='relative h-14 w-full max-w-[180px] opacity-85'>
                      <Image
                        src={assetPath(logo.src)}
                        alt={logo.alt}
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <HomeCtaLink
              href={linkPath('/#contact')}
              variant='outline'
              className='w-full sm:w-auto'
            >
              Contact me
            </HomeCtaLink>
          </div>
        </div>
      </div>
    </section>
  );
};
