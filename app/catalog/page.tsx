import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';

import CatalogClient from '@/app/catalog/Catalog.client';
import { getCars } from '@/lib/api';

export const metadata: Metadata = {
  title: 'RentalCar | Catalog',
  description:
    'Explore our extensive catalog of rental cars. Find the perfect vehicle for your next adventure or business trip.',
  openGraph: {
    title: 'RentalCar | Catalog',
    description:
      'Explore our extensive catalog of rental cars. Find the perfect vehicle for your next adventure or business trip.',
    url: '/catalog',
  },
};

const Catalog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['catalog', {}],
    queryFn: ({ pageParam }) => getCars({ page: pageParam }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
};

export default Catalog;
