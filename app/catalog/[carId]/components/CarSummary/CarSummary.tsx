import { IoLocationOutline } from 'react-icons/io5';

import { Car } from '@/types/car';

import css from './CarSummary.module.css';

type Props = {
  car: Car;
};

const CarSummary = ({ car }: Props) => {
  return (
    <>
      <div className={css.container}>
        <h2>
          {car.brand}, {car.year}
        </h2>

        <span className={css.article}>Article: {car.stockNumber}</span>
      </div>

      <span className={css.location}>
        <IoLocationOutline /> {car.location.city}, {car.location.country}
      </span>

      <p className={css.price}>${car.rentalPrice}</p>
      <p className={css.description}>{car.description}</p>
    </>
  );
};

export default CarSummary;
