import { createCourseDetailPage } from '@/app/_pages/createCourseDetailPage';

const { metadata, Page } = createCourseDetailPage({
  locale: 'pl',
  course: 'openWaterDiver',
  metadata: {
    title: "Kurs SSI Open Water Diver w Londynie | £550",
    description:
      "Zdobądź certyfikat SSI Open Water Diver w Londynie — £550. Teoria online, sesje basenowe i cztery nurkowania, szkolenie indywidualne po polsku.",
  },
});

export { metadata };
export default Page;
