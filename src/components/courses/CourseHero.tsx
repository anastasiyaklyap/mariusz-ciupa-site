import { SectionSurface } from '@/components/sections/SectionSurface';
import { siteCopy } from '@/content/siteCopy';

type CourseHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  tags: string[];
};

export const CourseHero = ({
  eyebrow = siteCopy.en.home.courses.eyebrow,
  title,
  description,
  tags,
}: CourseHeroProps) => {
  return (
    <section>
      <SectionSurface withGlow>
        <p className='text-xs font-medium tracking-[0.2em] text-white/50'>
          {eyebrow}
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
          {title}
        </h1>
        <p className='mt-4 max-w-2xl text-white/75'>{description}</p>

        <div className='mt-8 flex flex-wrap gap-3 text-xs text-white/70'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'
            >
              {tag}
            </span>
          ))}
        </div>
      </SectionSurface>
    </section>
  );
};
