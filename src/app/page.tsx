import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeContact } from '@/components/home/HomeContact';
import { HomeCourses } from '@/components/home/HomeCourses';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeQuote } from '@/components/home/HomeQuote';

const HomePage = () => {
  return (
    <div className='mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28 md:pb-16'>
      <HomeHero />
      <HomeQuote />
      <HomeCourses />
      <HomeAbout />
      <HomeContact />
    </div>
  );
};

export default HomePage;
