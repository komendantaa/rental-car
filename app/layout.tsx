import './globals.css';

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/Header';
import QueryProvider from '@/components/QueryProvider';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RentCar',
  description:
    'Rent a car quickly and easily. Browse available vehicles, compare prices, and find the perfect car for your trip.',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-center" />
        </QueryProvider>
      </body>
    </html>
  );
}
