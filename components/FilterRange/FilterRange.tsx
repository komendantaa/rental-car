import clsx from 'clsx';
import { Field, getIn, useFormikContext } from 'formik';

import FilterField from '@/components/FilterField';

import css from './FilterRange.module.css';

interface Props {
  id: string;
  label: string;
  minName: string;
  maxName: string;
  minPlaceholder?: string;
  maxPlaceholder?: string;
}

const FilterRange = ({ id, label, minName, maxName, minPlaceholder = 'From', maxPlaceholder = 'To' }: Props) => {
  const minId = `${id}-min`;
  const maxId = `${id}-max`;

  const { errors, touched } = useFormikContext();

  const getError = (name: string): string | undefined => {
    return getIn(touched, name) ? getIn(errors, name) : undefined;
  };

  const minError = getError(minName);
  const maxError = getError(maxName);

  return (
    <FilterField label={label} htmlFor={minId}>
      <div className={css.container}>
        <Field
          id={minId}
          name={minName}
          type="number"
          placeholder={minPlaceholder}
          className={clsx(css.input, css.inputFrom, { [css.inputError]: minError })}
        />

        <Field
          id={maxId}
          name={maxName}
          type="number"
          placeholder={maxPlaceholder}
          className={clsx(css.input, css.inputTo, { [css.inputError]: maxError })}
        />
      </div>

      {minError && <span className={css.errorText}>{minError}</span>}
      {maxError && <span className={css.errorText}>{maxError}</span>}
    </FilterField>
  );
};

export default FilterRange;
