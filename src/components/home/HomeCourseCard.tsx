/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import { linkPath } from '@/lib/linkPath';
import { withLocaleHref, type Locale } from '@/lib/i18n';

type CourseCardData = {
  title: string;
  desc: string;
  tag: string;
  imageSrc: string;
  link: string;
};

type HomeCourseCardProps = CourseCardData & {
  exploreLabel: string;
  locale: Locale;
};

export const HomeCourseCard = ({
  title,
  desc,
  tag,
  imageSrc,
  link,
  locale,
  exploreLabel,
}: HomeCourseCardProps) => {
  return (
    <a
      href={withLocaleHref(linkPath(link), locale)}
      className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:border-white/20 min-w-[88%] snap-start sm:min-w-[75%] md:min-w-0'
    >
      <div className='relative aspect-[16/9] w-full'>
        <Image
          src={assetPath(imageSrc)}
          alt={`${title} diving courses`}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 p-5'>
          <div className='inline-block rounded-2xl bg-black/20 px-4 py-3 backdrop-blur-sm'>
            <p className='text-sm text-white/75'>{tag}</p>
            <h3 className='mt-1 text-xl font-semibold'>{title}</h3>
          </div>
        </div>
        <div className='absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur transition group-hover:border-white/30'>
          {exploreLabel}
        </div>
      </div>

      <div className='p-6'>
        <p className='text-white/75'>{desc}</p>
      </div>

      <div className='pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100'>
        <div className='absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#24C6D9]/20 blur-3xl' />
      </div>
    </a>
  );
};

export type { CourseCardData };
