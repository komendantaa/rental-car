import Loader from '@/components/Loader';

import css from './loading.module.css';

const Loading = () => {
  return (
    <div className={css.wrapper} role="status" aria-label="Loading, please wait">
      <Loader />
    </div>
  );
};

export default Loading;
