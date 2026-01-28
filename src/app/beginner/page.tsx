import { CoursePage } from '@/components/courses/CoursePage';
import type { CourseCardData } from '@/components/courses/CourseCardGrid';
import { siteCopy } from '@/content/siteCopy';

const beginnerCourses: readonly CourseCardData[] = siteCopy.en.beginner.courses;

const BeginnerCoursesPage = () => {
  const copy = siteCopy.en.beginner;
  const common = siteCopy.en.common;

  return (
    <CoursePage
      hero={{ ...copy.hero, tags: [...copy.hero.tags, common.locations] }}
      courses={beginnerCourses}
      contact={{ ...copy.contact, className: 'mt-16 md:mt-24' }}
    />
  );
};

export default BeginnerCoursesPage;
