import Loader from '@/components/Loader';

import css from './PageLoader.module.css';

const PageLoader = () => {
  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <Loader className={css.loader} />
        <h2 className={css.title}>Loading cars...</h2>
        <p className={css.description}>Please wait while we fetch the best cars for you</p>
      </div>
    </div>
  );
};

export default PageLoader;
