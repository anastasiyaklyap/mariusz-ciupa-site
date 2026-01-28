import { PageContainer } from '@/components/layout/PageContainer';
import { ContactCta } from '@/components/sections/ContactCta';
import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeCourses } from '@/components/home/HomeCourses';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeQuote } from '@/components/home/HomeQuote';
import { siteCopy } from '@/content/siteCopy';

const HomePage = () => {
  const copy = siteCopy.en.home;

  return (
    <PageContainer>
      <HomeHero />
      <HomeQuote />
      <HomeCourses />
      <HomeAbout />
      <ContactCta
        title={copy.contact.title}
        description={copy.contact.description}
      />
    </PageContainer>
  );
};

export default HomePage;
