import clsx from 'clsx';

import css from './Loader.module.css';

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => {
  return <span className={clsx(css.loader, className)} aria-hidden="true"></span>;
};

export default Loader;
