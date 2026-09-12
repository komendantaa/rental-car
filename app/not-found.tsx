import { Metadata } from 'next';
import Link from 'next/link';

import NotFoundBlock from '@/components/NotFound';

export const metadata: Metadata = {
  title: 'RentalCar | Page not found',
  description: 'Sorry, the page you are looking for does not exist.',
  openGraph: {
    title: 'RentalCar | Page not found',
    description: 'Sorry, the page you are looking for does not exist.',
    url: '/',
  },
};

const NotFound = () => {
  return (
    <NotFoundBlock title="404 - Page not found" description="Sorry, the page you are looking for does not exist.">
      <Link href="/">Go to home</Link>
    </NotFoundBlock>
  );
};

export default NotFound;
