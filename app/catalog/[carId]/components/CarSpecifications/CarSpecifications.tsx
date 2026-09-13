import { BsCalendar4Week, BsCarFront } from 'react-icons/bs';
import { PiRoadHorizonLight } from 'react-icons/pi';
import { RiGasStationFill } from 'react-icons/ri';
import { SlSettings } from 'react-icons/sl';
import { Car } from '@/types/car';
import { formatMileage } from '@/utils';

import css from './CarSpecifications.module.css';

type Props = {
  car: Car;
};

const CarSpecifications = ({ car }: Props) => {
  return (
    <>
      <h3 className={css.sectionTitle}>Car Specifications:</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <BsCalendar4Week /> Year: {car.year}
        </li>

        <li className={css.listItem}>
          <BsCarFront />
          Type: {car.type}
        </li>

        <li className={css.listItem}>
          <RiGasStationFill /> Fuel Consumption: {car.fuelConsumption}
        </li>

        <li className={css.listItem}>
          <SlSettings /> Engine: {car.engine}
        </li>

        <li className={css.listItem}>
          <PiRoadHorizonLight /> Mileage: {formatMileage(car.mileage)} km
        </li>
      </ul>
    </>
  );
};

export default CarSpecifications;
