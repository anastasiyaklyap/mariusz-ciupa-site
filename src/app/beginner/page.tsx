import { CoursePage } from '@/components/courses/CoursePage';
import type { CourseCardData } from '@/components/courses/CourseCardGrid';

const beginnerCourses: CourseCardData[] = [
  {
    title: 'Try Scuba',
    description:
      'A first, guided experience underwater. Perfect if you want to try scuba before committing to a full certification course.',
    imageSrc: '/images/courses/try-scuba.jpg',
    tag: 'Intro',
  },
  {
    title: 'SSI Open Water Diver',
    description:
      'Become a certified Open Water Diver with SSI. This globally recognized certification program is the best way to begin your lifelong adventures as a certified scuba diver. Personalized training is combined with in-water practice sessions to ensure you have the skills and experience required to become truly comfortable underwater. You will earn the SSI Open Water Diver certification.',
    imageSrc: '/images/courses/open-water.jpg',
    tag: 'Certification',
  },
  {
    title: 'Advanced Open Water Diver',
    description:
      'Build confidence and expand your skills with structured training dives focused on improving control, awareness and comfort in different conditions.',
    imageSrc: '/images/courses/advanced-open-water.jpg',
    tag: 'Next step',
  },
];

const BeginnerCoursesPage = () => {
  return (
    <CoursePage
      hero={{
        title: 'Beginner Diving Courses',
        description:
          'Start from zero, learn the basics step by step, and build calm, confident diving skills with a safety-first approach.',
        tags: [
          'No experience needed',
          'Small groups',
          'UK · Lanzarote · Poland',
        ],
      }}
      courses={beginnerCourses}
      contact={{
        title: 'Want to start with beginner training?',
        description:
          'Tell me your level, preferred location and dates — I’ll suggest the best first steps for you.',
        className: 'mt-16 md:mt-24',
      }}
    />
  );
};

export default BeginnerCoursesPage;
