'use client';

import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

const HomePage = () => {
  return (
    <div className='mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28 md:pb-16'>
      <section className='relative overflow-hidden rounded-3xl'>
        <div className='relative grid gap-8 p-6 md:grid-cols-2 md:items-center md:gap-10 md:p-12'>
          {/* LEFT */}
          <div>
            <h1 className='mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl'>
              Mariusz <span className='text-[#24C6D9]'>Ciupa</span>
            </h1>

            <p className='mt-4 max-w-xl text-sm text-white/75 sm:text-base'>
              Personal diving training — from your first dive to advanced
              technical courses.
            </p>
            <p className='mt-6 text-sm text-white/60'>
              UK · Lanzarote · Poland · {siteConfig.role}
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
              <a
                href='#courses'
                className='w-full sm:w-auto rounded-full bg-[#24C6D9] px-6 py-3 font-medium text-[#07101A] transition hover:opacity-90'
              >
                View courses
              </a>

              <a
                href='#contact'
                className='w-full sm:w-auto rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5'
              >
                Contact me
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className='order-first md:order-none relative overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
            {/* Fake “photo” placeholder */}
            <div className='relative aspect-[16/10] md:aspect-[4/5] w-full'>
              <Image
                src='/images/hero.jpg'
                alt='Scuba diving training'
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Overlay */}

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />

            {/* Caption */}
            <div className='absolute bottom-0 left-0 right-0 p-6'>
              <p className='text-sm text-white/70'>
                Training focused on safety
              </p>
              <p className='mt-1 text-lg font-semibold'>
                Calm. Clear. Confident.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='courses' className='mt-24 md:mt-32'>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
              COURSES
            </p>

            <h2 className='mt-3 text-2xl font-semibold tracking-tight md:text-3xl'>
              Diving courses
            </h2>
            <p className='mt-3 max-w-2xl text-sm text-white/70 sm:text-base'>
              Choose your level and grow step by step — from your first
              certification to technical training.
            </p>
          </div>

          <a
            href='#contact'
            className='hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10 md:inline-flex'
          >
            Ask about availability
          </a>
        </div>

        <div className='relative mt-10 -mx-6 md:mx-0'>
          <p className='mt-6 text-xs text-white/50 md:hidden'>
            Swipe to explore →
          </p>
          <div className='courses-scroll flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto px-6 pb-4 md:grid md:snap-none md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0'>
            {[
              {
                title: 'Beginner',
                desc: 'Start from zero. Learn the basics, build confidence, get certified.',
                tag: 'Perfect first step',
                imageSrc: '/images/courses-beginner.jpg',
              },
              {
                title: 'Specialty',
                desc: 'Improve skills with focused courses like buoyancy, navigation or night diving.',
                tag: 'Build experience',
                imageSrc: '/images/courses-specialty.jpg',
              },
              {
                title: 'Technical',
                desc: 'Advanced training for deeper dives, procedures and serious planning.',
                tag: 'Go beyond limits',
                imageSrc: '/images/courses-technical.jpg',
              },
            ].map((card) => (
              <a
                key={card.title}
                href='#'
                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:border-white/20 min-w-[88%] snap-start sm:min-w-[75%] md:min-w-0'
              >
                <div className='relative aspect-[16/9] w-full'>
                  <Image
                    src={card.imageSrc}
                    alt={`${card.title} diving courses`}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <div className='inline-block rounded-2xl bg-black/20 px-4 py-3 backdrop-blur-sm'>
                      <p className='text-sm text-white/75'>{card.tag}</p>
                      <h3 className='mt-1 text-xl font-semibold'>
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <div className='absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur transition group-hover:border-white/30'>
                    Explore →
                  </div>
                </div>

                <div className='p-6'>
                  <p className='text-white/75'>{card.desc}</p>
                </div>

                <div className='pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100'>
                  <div className='absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#24C6D9]/20 blur-3xl' />
                </div>
              </a>
            ))}
          </div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B1220] to-transparent md:hidden' />
        </div>

        {/* Mobile CTA */}
        <div className='mt-8 md:hidden'>
          <a
            href='#contact'
            className='inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10'
          >
            Ask about availability
          </a>
        </div>
      </section>
      {/* ABOUT */}
      <section className='mt-24 md:mt-32' id='about'>
        <div className='grid gap-8 md:grid-cols-2 md:items-center md:gap-12'>
          {/* Image placeholder */}
          <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
            <div className='relative aspect-[3/2] w-full md:aspect-[4/5]'>
              <Image
                src='/images/mariusz-ciupa.jpg'
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

          {/* Text */}
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
              {[
                '10+ years experience',
                'SSI PRO XR',
                'Technical & recreational diving',
                'Europe & Canary Islands',
              ].map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-white/20 hover:bg-white/10'
                >
                  {item}
                </span>
              ))}
            </div>
            <div className='mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8'>
              <h3 className='text-lg font-semibold md:text-xl'>
                Where I teach
              </h3>
              <p className='mt-3 text-sm text-white/75'>
                I cooperate with selected dive centers in the United Kingdom,
                Lanzarote and Poland — so you can train and dive in different
                environments with continuity and trusted support.
              </p>

              <div className='mt-5 flex flex-wrap gap-2 text-xs text-white/70'>
                <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
                  UK
                </span>
                <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
                  Lanzarote
                </span>
                <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
                  Poland
                </span>
              </div>

              <div className='mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-4'>
                <div className='grid grid-cols-3 items-center gap-6'>
                  {[
                    {
                      src: '/images/logo-bonito.png',
                      alt: 'Bonito Diving Lanzarote',
                    },
                    { src: '/images/logo-scuba-tech.png', alt: 'Scuba Tech' },
                    { src: '/images/logo-scubaelite.png', alt: 'Scuba Elite' },
                  ].map((logo) => (
                    <div
                      key={logo.src}
                      className='flex items-center justify-center'
                    >
                      <div className='relative h-14 w-full max-w-[180px] opacity-85'>
                        <Image
                          src={logo.src}
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
              <a
                href='#contact'
                className='w-full sm:w-auto rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5'
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id='contact'
        className=' overflow-hidden rounded-3xl border border-white/10 bg-white/5 mt-24 md:mt-32'
      >
        <div className='relative p-8 md:p-12'>
          <div className='pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#24C6D9]/20 blur-3xl' />
          <div className='pointer-events-none absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-white/10 blur-3xl' />

          <h2 className='text-2xl font-semibold md:text-3xl'>
            Ready to start your diving journey?
          </h2>
          <p className='mt-4 max-w-2xl text-white/75'>
            Tell me your level, preferred location and dates — I’ll suggest the
            best course and the next steps.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href={`mailto:${siteConfig.email}`}
              className='rounded-xl bg-[#24C6D9] px-6 py-3 font-medium text-[#07101A] transition hover:opacity-90'
            >
              Email me
            </a>

            <a
              href={siteConfig.socials.instagram}
              className='rounded-xl border border-white/15 px-6 py-3 font-medium text-white/90 transition hover:bg-white/5'
            >
              Instagram
            </a>
          </div>

          <p className='mt-6 text-sm text-white/50'>
            (We’ll replace these links with real contact details later.)
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
