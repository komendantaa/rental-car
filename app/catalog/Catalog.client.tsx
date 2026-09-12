'use client';

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { FormikProps } from 'formik';
import { useRef, useState } from 'react';

import Button from '@/components/Button';
import CatalogCard from '@/components/CatalogCard';
import PageLoader from '@/components/PageLoader';
import NotFound from '@/components/NotFound';
import SearchCarsForm from '@/components/SearchCarsForm';
import { SearchCarFormValues } from '@/components/SearchCarsForm/form';
import { getCars } from '@/lib/api';
import { CarsPaginatedQueryParams } from '@/types/car';

import css from './Catalog.client.module.css';

const CatalogClient = () => {
  const [filters, setFilters] = useState<CarsPaginatedQueryParams>({});

  const formikRef = useRef<FormikProps<SearchCarFormValues>>(null);

  const { data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['catalog', filters],
    queryFn: ({ pageParam }) => getCars({ ...filters, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: lastResponse => {
      const nextPage = lastResponse.page + 1;
      return nextPage <= lastResponse.totalPages ? nextPage : undefined;
    },
    select: data => {
      return {
        ...data,
        cars: data.pages.flatMap(page => page.cars),
      };
    },
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const handleSearch = (values: CarsPaginatedQueryParams) => {
    setFilters(values);
  };

  const handleReset = () => {
    setFilters({});

    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  const cars = data?.cars ?? [];
  const hasCars = cars.length > 0;

  return (
    <div className={css.container}>
      <SearchCarsForm onSubmit={handleSearch} onReset={handleReset} isFetching={isFetching} formikRef={formikRef} />

      {isFetching && !isFetchingNextPage && <PageLoader />}

      {!isLoading && !hasCars && (
        <NotFound
          title="No cars found"
          description="We couldn`t find any cars that match your current filters. Try changing your search criteria or reset the filters."
        >
          <Button variant="outlined" onClick={handleReset}>
            Reset filters
          </Button>
        </NotFound>
      )}

      {hasCars && (
        <>
          <ul className={css.list}>
            {cars.map(car => (
              <CatalogCard car={car} key={car.id} />
            ))}
          </ul>

          {hasNextPage && (
            <Button
              variant="outlined"
              className={css.loadMoreButton}
              isLoading={isFetching}
              onClick={() => fetchNextPage()}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default CatalogClient;
