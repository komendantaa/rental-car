import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';

import CarDetailsClient from '@/app/catalog/[carId]/CarDetails.client';
import { getCarById } from '@/lib/api';

interface Props {
  params: Promise<{ carId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { carId } = await params;

  try {
    const car = await getCarById(carId);

    const title = `RentalCar | ${car.brand} ${car.model}`;

    const description = car.description
      ? car.description.slice(0, 160)
      : `View detailed information for ${car.brand} ${car.model}.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `/catalog/${carId}`,
      },
    };
  } catch {
    return {
      title: 'RentalCar | Car Details',
      description: 'View detailed information about this car.',
    };
  }
}

const CarDetails = async ({ params }: Props) => {
  const { carId } = await params;
  const queryClient = new QueryClient();

  await queryClient.query({
    queryKey: ['car', carId],
    queryFn: () => getCarById(carId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarDetailsClient />
    </HydrationBoundary>
  );
};

export default CarDetails;
