import { CourseCardGrid, type CourseCardData } from './CourseCardGrid';
import { CourseHero } from './CourseHero';
import { PageContainer } from '@/components/layout/PageContainer';
import { ContactCta } from '@/components/sections/ContactCta';

type CoursePageHero = {
  title: string;
  description: string;
  tags: string[];
  eyebrow?: string;
};

type CoursePageContact = {
  title: string;
  description: string;
  className?: string;
};

type CoursePageProps = {
  hero: CoursePageHero;
  courses: readonly CourseCardData[];
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
    <PageContainer>
      <CourseHero {...hero} />
      <CourseCardGrid
        courses={courses}
        ctaLabel={cardCtaLabel}
        ctaHref={cardCtaHref}
      />
      <ContactCta
        title={contact.title}
        description={contact.description}
        className={contact.className}
      />
    </PageContainer>
  );
};
