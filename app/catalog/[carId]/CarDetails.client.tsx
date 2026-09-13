'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import CarSummary from '@/app/catalog/[carId]/components/CarSummary';
import CarSpecifications from '@/app/catalog/[carId]/components/CarSpecifications';
import CheckList from '@/components/CheckList';
import PageLoader from '@/components/PageLoader';
import CarBookForm from '@/app/catalog/[carId]/components/CarBookForm';
import { getCarById } from '@/lib/api';

import css from './CarDetails.module.css';

const CarDetailsClient = () => {
  const { carId } = useParams<{ carId: string }>();

  const { data: car, isLoading } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCarById(carId),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!car) {
    return null;
  }

  return (
    <div className={css.container}>
      <div>
        <Image className={css.image} src={car?.img} alt={car?.description} width={640} height={512} loading="eager" />

        <CarBookForm id={carId} />
      </div>

      <div className={css.detailsCarWrapper}>
        <CarSummary car={car} />

        <CheckList title="Rental Conditions:" items={car.rentalConditions} />

        <span className={css.divider} />
        <CarSpecifications car={car} />

        <span className={css.divider} />
        <CheckList title="Features:" items={car.features} />
      </div>
    </div>
  );
};

export default CarDetailsClient;
