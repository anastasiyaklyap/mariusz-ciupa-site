import { CourseCardGrid, type CourseCardData } from './CourseCardGrid';
import { CourseHero } from './CourseHero';
import { PageContainer } from '@/components/layout/PageContainer';
import { ContactCta } from '@/components/sections/ContactCta';
import type { Locale } from '@/lib/i18n';

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
  locale: Locale;
};

export const CoursePage = ({
  hero,
  courses,
  contact,
  cardCtaLabel,
  cardCtaHref,
  locale,
}: CoursePageProps) => {
  return (
    <PageContainer>
      <CourseHero {...hero} locale={locale} />
      <CourseCardGrid
        courses={courses}
        ctaLabel={cardCtaLabel}
        ctaHref={cardCtaHref}
        locale={locale}
      />
      <ContactCta
        title={contact.title}
        description={contact.description}
        className={contact.className}
        locale={locale}
      />
    </PageContainer>
  );
};
