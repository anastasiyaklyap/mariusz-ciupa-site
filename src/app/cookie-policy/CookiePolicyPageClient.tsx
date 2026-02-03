'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { siteCopy } from '@/content/siteCopy';
import { useLocale } from '@/hooks/useLocale';

type CookiePolicySection = {
  heading: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
};

type CookiePolicyContent = {
  title: string;
  sections: readonly CookiePolicySection[];
};

export const CookiePolicyPageClient = () => {
  const locale = useLocale();
  const content = siteCopy[locale].common.cookiePolicy as CookiePolicyContent;

  return (
    <main>
      <PageContainer className='max-w-4xl'>
        <h1 className='text-3xl font-semibold text-white'>{content.title}</h1>
        <div className='mt-8 space-y-6'>
          {content.sections.map((section) => (
            <section key={section.heading} className='space-y-3'>
              <h2 className='text-lg font-semibold text-white'>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className='text-sm text-white/75'>
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className='list-disc space-y-2 pl-5 text-sm text-white/75'>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </PageContainer>
    </main>
  );
};
