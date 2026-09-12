import { useQuery } from '@tanstack/react-query';
import { Form, Formik, FormikProps } from 'formik';
import { Ref, useId } from 'react';
import toast from 'react-hot-toast';

import { CarsPaginatedQueryParams } from '@/types/car';
import { getCarsFilters } from '@/lib/api';
import { buildPriceSelectOptions, buildSelectOptions } from '@/utils';

import FilterSelect from '@/components/FilterSelect';
import FilterRange from '@/components/FilterRange';
import SearchCarsFormActions from '@/components/SearchCarsForm/components/SearchCarsFormActions';

import { initialValues, SearchCarFormValues, validationSchema } from './form';
import css from './SearchCarsForm.module.css';

interface Props {
  onSubmit: (values: CarsPaginatedQueryParams) => void;
  onReset: () => void;
  isFetching: boolean;
  formikRef?: Ref<FormikProps<SearchCarFormValues>>;
}

const SearchCarsForm = ({ onSubmit, onReset, isFetching, formikRef }: Props) => {
  const fieldId = useId();

  const { data } = useQuery({
    queryKey: ['filters'],
    queryFn: getCarsFilters,
    staleTime: 60_000 * 5,
  });

  const handleSubmit = (values: SearchCarFormValues) => {
    const isEmpty = Object.values(values).every(value => !value);

    if (isEmpty) {
      toast.error('Please select at least one filter');
      return;
    }

    onSubmit({
      ...(values.brand && { brand: values.brand.value }),
      ...(values.price && { price: Number(values.price.value) }),
      ...(values.minMileage && {
        minMileage: Number(values.minMileage),
      }),
      ...(values.maxMileage && {
        maxMileage: Number(values.maxMileage),
      }),
    });
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <FilterSelect
            id={`${fieldId}-brand`}
            name="brand"
            label="Car brand"
            placeholder="Choose a brand"
            value={values.brand}
            options={buildSelectOptions(data?.brands)}
            onChange={option => setFieldValue('brand', option)}
          />

          <FilterSelect
            id={`${fieldId}-price`}
            name="price"
            label="Price/ 1 hour"
            placeholder="Choose a price"
            value={values.price}
            options={buildPriceSelectOptions(data?.price)}
            onChange={option => setFieldValue('price', option)}
          />

          <FilterRange id={`${fieldId}-mileage`} label="Сar mileage / km" minName="minMileage" maxName="maxMileage" />

          <SearchCarsFormActions isFetching={isFetching} onClear={onReset} />
        </Form>
      )}
    </Formik>
  );
};

export default SearchCarsForm;
