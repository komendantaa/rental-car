import Image from 'next/image';
import Link from 'next/link';

import { Car } from '@/types/car';
import { formatMileage } from '@/utils';

import css from './CatalogCard.module.css';

interface Props {
  car: Car;
}

const CatalogCard = ({ car }: Props) => {
  const { id, img, model, brand, year, rentalPrice, rentalCompany, location, type, mileage } = car;

  return (
    <li className={css.card}>
      <div className={css.thumb}>
        <Image src={img} alt={`${brand} ${model}`} width={244} height={268} loading="eager" />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <p className={css.title} title={`${brand} ${model}, ${year}`}>
            {brand} <span className={css.model}>{model}</span>, {year}
          </p>
          <p className={css.price}>${rentalPrice}</p>
        </div>

        <div className={css.details}>
          <p className={css.detailsRow}>
            <span>{location.city}</span>
            <span>{location.country}</span>
            <span>{rentalCompany}</span>
          </p>

          <p className={css.detailsRow}>
            <span>{type}</span>
            <span>{formatMileage(mileage)} km</span>
          </p>
        </div>

        <Link className={css.link} href={`/catalog/${id}`} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </div>
    </li>
  );
};

export default CatalogCard;
