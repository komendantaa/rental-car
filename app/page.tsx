import Button from '@/components/Button';

import css from './page.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <h1 className={css.title}>Find your perfect rental car</h1>

        <h2 className={css.description}>Reliable and budget-friendly rentals for any journey</h2>

        <Button href="/catalog" className={css.catalogButton}>
          View Catalog
        </Button>
      </div>
    </div>
  );
};

export default Home;
