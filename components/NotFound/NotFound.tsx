import Image from 'next/image';
import { ReactNode } from 'react';

import css from './NotFound.module.css';

interface Props {
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}

const NotFound = ({ title, description, children }: Props) => {
  return (
    <div className={css.container}>
      <Image src={'/not-found.png'} alt="not-found" width={414} height={388} className={css.image} />

      <h2 className={css.title}>{title}</h2>
      <p className={css.description}>{description}</p>

      {children}
    </div>
  );
};

export default NotFound;
