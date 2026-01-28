import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mariusz Ciupa – SSI Scuba Diving Instructor',
  description:
    'Personal scuba diving training from beginner to technical level.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-[#0B1220] text-white antialiased`}
      >
        <div className='pointer-events-none fixed inset-0 -z-10'>
          <div className='absolute inset-0 bg-gradient-to-b from-[#0E1B2B] via-[#0B1220] to-[#070B12]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(36,198,217,0.12),transparent_60%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_55%)]' />
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
