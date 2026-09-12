import Button from '@/components/Button';

import css from './SearchCarsFormActions.module.css';

interface Props {
  isFetching: boolean;
  onClear: () => void;
}

const SearchCarsFormActions = ({ isFetching, onClear }: Props) => {
  return (
    <div className={css.container}>
      <Button type="submit" disabled={isFetching} className={css.searchButton}>
        Search
      </Button>

      <button className={css.clearFiltersButton} type="button" disabled={isFetching} onClick={onClear}>
        Clear filters
      </button>
    </div>
  );
};

export default SearchCarsFormActions;
