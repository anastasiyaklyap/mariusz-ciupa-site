import { CourseCardGrid, type CourseCardData } from './CourseCardGrid';
import { CourseContact } from './CourseContact';
import { CourseHero } from './CourseHero';

type CoursePageHero = {
  title: string;
  description: string;
  tags: string[];
  eyebrow?: string;
};

type CoursePageContact = {
  title: string;
  description: string;
};

type CoursePageProps = {
  hero: CoursePageHero;
  courses: CourseCardData[];
  contact: CoursePageContact;
  cardCtaLabel?: string;
  cardCtaHref?: string;
};

export const CoursePage = ({
  hero,
  courses,
  contact,
  cardCtaLabel,
  cardCtaHref,
}: CoursePageProps) => {
  return (
    <div className='mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28 md:pb-16'>
      <CourseHero {...hero} />
      <CourseCardGrid
        courses={courses}
        ctaLabel={cardCtaLabel}
        ctaHref={cardCtaHref}
      />
      <CourseContact {...contact} />
    </div>
  );
};
