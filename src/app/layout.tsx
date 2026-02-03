import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Suspense } from 'react';
import { CookieBanner } from '@/components/CookieBanner';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import { HtmlLangSync } from '@/components/HtmlLangSync';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: 'Mariusz Ciupa – SSI Scuba Diving Instructor',
  description:
    'Personal scuba diving training from beginner to technical level.',
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, type: 'image/x-icon' },
      {
        url: `${basePath}/images/favicon.png`,
        type: 'image/png',
        sizes: '256x256',
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${inter.className} bg-[#0B1220] text-white antialiased`}>
      <AnalyticsProvider>
        <div className='pointer-events-none fixed inset-0 -z-10'>
          <div className='absolute inset-0 bg-gradient-to-b from-[#0E1B2B] via-[#0B1220] to-[#070B12]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(36,198,217,0.12),transparent_60%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_55%)]' />
        </div>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>
        <HtmlLangSync />
      </AnalyticsProvider>
    </body>
  </html>
);

export default RootLayout;
