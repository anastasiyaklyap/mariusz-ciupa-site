import { PageContainer } from '@/components/layout/PageContainer';
import { ContactCta } from '@/components/sections/ContactCta';
import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeCourses } from '@/components/home/HomeCourses';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeQuote } from '@/components/home/HomeQuote';

const HomePage = () => {
  return (
    <PageContainer>
      <HomeHero />
      <HomeQuote />
      <HomeCourses />
      <HomeAbout />
      <ContactCta
        title='Ready to start your diving journey?'
        description='Tell me your level, preferred location and dates — I’ll suggest the best course and next steps.'
      />
    </PageContainer>
  );
};

export default HomePage;
